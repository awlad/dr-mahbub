import { prisma } from '@/lib/prisma'
import { updateSiteSettings } from '@/app/admin/actions/content'
import ImagePicker from '@/components/admin/ImagePicker'

export default async function AdminSettingsPage() {
  const [settings, mediaAssets] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 'site' }, include: { heroImage: true } }),
    prisma.mediaAsset.findMany({ orderBy: { createdAt: 'desc' } }),
  ])

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Site Settings</h1>

      <form
        action={updateSiteSettings}
        className="space-y-4 rounded-lg bg-white p-5 shadow dark:bg-gray-800"
      >
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Hero image</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Shown at the top of the homepage. Falls back to the default logo if none is set.
        </p>
        <ImagePicker
          name="heroImageId"
          label="Hero image"
          subfolder="hero"
          initialImage={settings?.heroImage ?? null}
          mediaAssets={mediaAssets}
        />
        <button
          type="submit"
          className="rounded bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
        >
          Save
        </button>
      </form>
    </div>
  )
}

