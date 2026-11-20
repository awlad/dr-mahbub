// lib/content.ts
// Server-side data access for DB-backed editable content. Public pages
// import these helpers instead of the hardcoded constants in
// data/siteMetadata.js. Falls back to sensible defaults if a row doesn't
// exist yet (e.g. before the seed script has run) OR if the DB can't be
// reached at all (e.g. during `next build`, which runs against a fake
// placeholder DATABASE_URL — see Dockerfile.prod). Without this fallback,
// `next build` fails outright on any statically-generated route under the
// root layout (which calls getChambers()), e.g. /blog, /tags/[tag].
//
// IMPORTANT (perf): these are wrapped in `unstable_cache` so a DB round
// trip to Neon only happens once per revalidation window, instead of on
// *every single request* to *every page* (the root layout alone calls
// getChambers() on every page view). Without this, moving from static
// content to a DB-backed CMS made the site noticeably slower, since every
// pageview paid for several serial/parallel network round trips to
// Postgres. Admin edits (app/admin/actions/content.ts) call `updateTag` on
// save, so content still updates immediately — this only removes the
// *redundant* re-fetching on normal visitor traffic.
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import siteMetadata from '@/data/siteMetadata'

// Safety-net TTL — content also gets invalidated instantly via
// updateTag() from the admin actions, so this just bounds staleness in
// case a tag invalidation is ever missed.
const REVALIDATE_SECONDS = 300

// Swallows DB-connectivity errors (e.g. build-time placeholder DB) and
// returns a fallback instead of blowing up the whole page/build. Row-level
// "not found" cases (no error thrown) are still handled per-function via
// `?? defaultValue`, same as before.
async function withFallback<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch (err) {
    console.error('[lib/content] DB read failed, using fallback:', err)
    return fallback
  }
}

const fallbackChambers = siteMetadata.chambers.map((c) => ({
  id: c.location,
  location: c.location,
  name: c.name,
  phone: c.phone,
  address: c.address,
  schedule: c.schedule,
  mapsEmbedUrl: c.googleMapsEmbedUrl,
  order: 0,
}))

export const getChambers = unstable_cache(
  () =>
    withFallback(() => prisma.chamber.findMany({ orderBy: { order: 'asc' } }), fallbackChambers),
  ['chambers'],
  { tags: ['chambers'], revalidate: REVALIDATE_SECONDS }
)

export const getServices = unstable_cache(
  () => withFallback(() => prisma.service.findMany({ orderBy: { order: 'asc' } }), []),
  ['services'],
  { tags: ['services'], revalidate: REVALIDATE_SECONDS }
)

export const getAchievements = unstable_cache(
  () =>
    withFallback(async () => {
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
    }, []),
  ['achievements'],
  { tags: ['achievements'], revalidate: REVALIDATE_SECONDS }
)

export const getQualifications = unstable_cache(
  () => withFallback(() => prisma.qualification.findMany({ orderBy: { order: 'asc' } }), []),
  ['qualifications'],
  { tags: ['qualifications'], revalidate: REVALIDATE_SECONDS }
)

export const getAboutContent = unstable_cache(
  () =>
    withFallback(
      async () => {
        const row = await prisma.aboutContent.findUnique({
          where: { id: 'about' },
          include: { image: true },
        })
        return {
          content: row?.content ?? '',
          image: row?.image?.path ?? null,
        }
      },
      { content: '', image: null }
    ),
  ['about-content'],
  { tags: ['about-content'], revalidate: REVALIDATE_SECONDS }
)

export const getSiteSettings = unstable_cache(
  () =>
    withFallback(
      async () => {
        const row = await prisma.siteSettings.findUnique({
          where: { id: 'site' },
          include: { heroImage: true },
        })
        return {
          heroImage: row?.heroImage?.path ?? null,
        }
      },
      { heroImage: null }
    ),
  ['site-settings'],
  { tags: ['site-settings'], revalidate: REVALIDATE_SECONDS }
)

