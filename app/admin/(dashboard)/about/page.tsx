import { prisma } from '@/lib/prisma'
import { updateAboutContent } from '@/app/admin/actions/content'
import ImagePicker from '@/components/admin/ImagePicker'

export default async function AdminAboutPage() {
  const [about, mediaAssets] = await Promise.all([
    prisma.aboutContent.findUnique({ where: { id: 'about' }, include: { image: true } }),
    prisma.mediaAsset.findMany({ orderBy: { createdAt: 'desc' } }),
  ])

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Shown on the homepage and the About page. Separate paragraphs with a blank line.
      </p>

      <form action={updateAboutContent} className="space-y-4 rounded-lg bg-white p-5 shadow dark:bg-gray-800">
        <ImagePicker
          name="imageId"
          label="Profile photo"
          subfolder="about"
          initialImage={about?.image ?? null}
          mediaAssets={mediaAssets}
        />
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Bio text
          </label>
          <textarea
            name="content"
            defaultValue={about?.content ?? ''}
            rows={16}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>
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

