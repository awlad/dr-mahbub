// lib/media.ts
// Handles saving uploaded images to Vercel Blob storage and tracking them in
// the MediaAsset table so they can be reused across admin sections.
// (Previously wrote to disk under public/static/uploads — that doesn't work
// on Vercel's read-only serverless filesystem, so storage moved to Blob.)
import { put, del } from '@vercel/blob'
import crypto from 'crypto'
import sharp from 'sharp'
import { prisma } from '@/lib/prisma'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export class MediaUploadError extends Error {}

/**
 * Shared optimization pipeline: resize to a sane max size and re-encode as
 * WebP, then upload to Vercel Blob and create the MediaAsset row. Used by
 * both live uploads and the seed script, so every image on the site goes
 * through the same size/format normalization.
 */
async function optimizeAndStore(buffer: Buffer, subfolder: string, animated = false) {
  const safeSubfolder = subfolder.replace(/[^a-z0-9-_]/gi, '')
  const filename = `${Date.now()}-${crypto.randomUUID().slice(0, 12)}.webp`
  const blobPath = `${safeSubfolder}/${filename}`

  const image = sharp(buffer, { animated }).rotate()
  const resized = image.resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
  const outputBuffer = await resized.webp({ quality: 82 }).toBuffer()

  const blob = await put(blobPath, outputBuffer, {
    access: 'public',
    contentType: 'image/webp',
    addRandomSuffix: false,
  })

  const metadata = await sharp(outputBuffer).metadata()

  return prisma.mediaAsset.create({
    data: {
      filename,
      path: blob.url,
      width: metadata.width,
      height: metadata.height,
      sizeBytes: outputBuffer.length,
    },
  })
}

/**
 * Save an uploaded image file (from a multipart form), optimize it, upload
 * to Blob storage, and create a MediaAsset record. Returns the created
 * MediaAsset.
 */
export async function saveUploadedImage(file: File, subfolder = 'general') {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new MediaUploadError('Only JPG, PNG, WEBP, or GIF images are allowed.')
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new MediaUploadError('Image must be smaller than 5MB.')
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  return optimizeAndStore(buffer, subfolder, file.type === 'image/gif')
}

/**
 * Same optimization pipeline as saveUploadedImage, but reads from a path on
 * disk instead of a FormData File. Used by the seed script to migrate the
 * existing static images (checked into the repo under public/static) into
 * the media library/Blob storage at the correct, web-sized format.
 */
export async function createMediaAssetFromFile(sourceAbsolutePath: string, subfolder: string) {
  const { readFile } = await import('fs/promises')
  const buffer = await readFile(sourceAbsolutePath)
  return optimizeAndStore(buffer, subfolder)
}

/** Delete a MediaAsset and its Blob file, but only if nothing references it. */
export async function deleteMediaAsset(id: string) {
  const asset = await prisma.mediaAsset.findUnique({
    where: { id },
    include: {
      achievements: true,
      aboutContents: true,
      blogPosts: true,
      siteSettings: true,
    },
  })
  if (!asset) return { ok: false, error: 'Not found' }

  const isReferenced =
    asset.achievements.length > 0 ||
    asset.aboutContents.length > 0 ||
    asset.blogPosts.length > 0 ||
    asset.siteSettings.length > 0

  if (isReferenced) {
    return { ok: false, error: 'This image is still used somewhere on the site.' }
  }

  await del(asset.path).catch(() => {})
  await prisma.mediaAsset.delete({ where: { id } })
  return { ok: true }
}




