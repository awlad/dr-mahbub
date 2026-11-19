import { prisma } from '@/lib/prisma'
import MediaGrid from '@/components/admin/MediaGrid'

export default async function AdminMediaPage() {
  const assets = await prisma.mediaAsset.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Media Library</h1>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        All uploaded images across Achievements, About, and Hero settings. Images still in use
        elsewhere can&apos;t be deleted.
      </p>
      <MediaGrid assets={assets} />
    </div>
  )
}

