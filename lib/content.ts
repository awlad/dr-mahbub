// lib/content.ts
// Server-side data access for DB-backed editable content. Public pages
// import these helpers instead of the hardcoded constants in
// data/siteMetadata.js. Falls back to sensible defaults if a row doesn't
// exist yet (e.g. before the seed script has run).
import { prisma } from '@/lib/prisma'

export async function getChambers() {
  return prisma.chamber.findMany({ orderBy: { order: 'asc' } })
}

export async function getServices() {
  return prisma.service.findMany({ orderBy: { order: 'asc' } })
}

export async function getAchievements() {
  const rows = await prisma.achievement.findMany({
    orderBy: { order: 'asc' },
    include: { image: true },
  })
  // Shape matches the existing `components/achievements.tsx` prop contract.
  return rows.map((a) => ({
    title: a.title,
    year: a.year ?? '',
    description: a.description ?? '',
    image: a.image?.path ?? null,
  }))
}

export async function getQualifications() {
  return prisma.qualification.findMany({ orderBy: { order: 'asc' } })
}

export async function getAboutContent() {
  const row = await prisma.aboutContent.findUnique({
    where: { id: 'about' },
    include: { image: true },
  })
  return {
    content: row?.content ?? '',
    image: row?.image?.path ?? null,
  }
}

export async function getSiteSettings() {
  const row = await prisma.siteSettings.findUnique({
    where: { id: 'site' },
    include: { heroImage: true },
  })
  return {
    heroImage: row?.heroImage?.path ?? null,
  }
}

