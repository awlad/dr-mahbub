// prisma/seed.ts
// One-time migration: copies the current hardcoded content from
// data/siteMetadata.js and components/AboutMe.tsx into the database so the
// site doesn't go blank after switching to DB-backed content.
// Safe to re-run: clears existing rows before inserting.
import { PrismaClient } from '@prisma/client'
import path from 'path'
import { del } from '@vercel/blob'
import siteMetadata, { qualifications, achievements, services } from '../data/siteMetadata'
import { DEFAULT_PARAGRAPHS } from '../components/AboutMe'
import { createMediaAssetFromFile } from '../lib/media'

const prisma = new PrismaClient()

const PUBLIC_DIR = path.join(process.cwd(), 'public')

// Reuses the exact same resize/WebP-optimization pipeline as live admin
// uploads (now uploading to Vercel Blob), so seeded images aren't
// accidentally left at full original size.
async function seedImage(sourceRelativePath: string) {
  const sourcePath = path.join(PUBLIC_DIR, sourceRelativePath.replace(/^\//, ''))
  return createMediaAssetFromFile(sourcePath, 'seed')
}

/** Remove any media assets left over from a previous seed run that are no
 *  longer referenced by anything, so re-seeding doesn't pile up duplicate
 *  blobs under the seed/ prefix. */
async function cleanupOrphanedSeedAssets() {
  const candidates = await prisma.mediaAsset.findMany({
    where: { path: { contains: '/seed/' } },
    include: { achievements: true, aboutContents: true, blogPosts: true, siteSettings: true },
  })
  for (const asset of candidates) {
    const isReferenced =
      asset.achievements.length > 0 ||
      asset.aboutContents.length > 0 ||
      asset.blogPosts.length > 0 ||
      asset.siteSettings.length > 0
    if (isReferenced) continue
    await del(asset.path).catch(() => {})
    await prisma.mediaAsset.delete({ where: { id: asset.id } })
  }
}

async function main() {
  console.log('Seeding database...')

  // --- Chambers ---
  await prisma.chamber.deleteMany()
  for (const [index, c] of siteMetadata.chambers.entries()) {
    await prisma.chamber.create({
      data: {
        location: c.location,
        name: c.name,
        phone: c.phone,
        address: c.address,
        schedule: c.schedule,
        mapsEmbedUrl: c.googleMapsEmbedUrl,
        order: index,
      },
    })
  }

  // --- Services ---
  await prisma.service.deleteMany()
  for (const [index, s] of services.items.entries()) {
    await prisma.service.create({ data: { name: s.name, description: s.description, order: index } })
  }

  // --- Qualifications ---
  await prisma.qualification.deleteMany()
  for (const [index, q] of qualifications.entries()) {
    await prisma.qualification.create({
      data: { title: q.title, description: q.description, order: index },
    })
  }

  // --- Achievements (with images copied into the media library) ---
  await prisma.achievement.deleteMany()

  // --- About content + hero image singletons also reference media assets,
  // so clear them before cleaning up orphaned seed images below. ---
  await prisma.aboutContent.deleteMany()
  await prisma.siteSettings.deleteMany()
  await cleanupOrphanedSeedAssets()

  for (const [index, a] of achievements.entries()) {
    const asset = await seedImage(a.image)
    await prisma.achievement.create({
      data: {
        title: a.title,
        year: a.year,
        description: a.description,
        imageId: asset.id,
        order: index,
      },
    })
  }

  // --- About content + hero image (reuse the existing doctor photo) ---
  const heroAsset = await seedImage(siteMetadata.siteLogo)

  await prisma.aboutContent.create({
    data: {
      id: 'about',
      imageId: heroAsset.id,
      content: DEFAULT_PARAGRAPHS.join('\n\n'),
    },
  })

  // --- Site settings (hero image on homepage) ---
  await prisma.siteSettings.create({
    data: { id: 'site', heroImageId: heroAsset.id },
  })

  console.log('Seeding complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })







