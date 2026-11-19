'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { saveUploadedImage, deleteMediaAsset, MediaUploadError } from '@/lib/media'

export async function listMediaAssets() {
  return prisma.mediaAsset.findMany({ orderBy: { createdAt: 'desc' } })
}

export type UploadImageResult = { ok: true; asset: Awaited<ReturnType<typeof saveUploadedImage>> } | { ok: false; error: string }

export async function uploadImageAction(formData: FormData): Promise<UploadImageResult> {
  const file = formData.get('file')
  const subfolder = String(formData.get('subfolder') || 'general')

  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, error: 'No file provided.' }
  }

  try {
    const asset = await saveUploadedImage(file, subfolder)
    revalidatePath('/admin/media')
    return { ok: true, asset }
  } catch (err) {
    if (err instanceof MediaUploadError) {
      return { ok: false, error: err.message }
    }
    console.error('Image upload failed:', err)
    return { ok: false, error: 'Upload failed. Please try again.' }
  }
}

export async function deleteMediaAction(id: string) {
  const result = await deleteMediaAsset(id)
  revalidatePath('/admin/media')
  return result
}

