import { prisma } from '@/lib/prisma'
import {
  createAchievement,
  updateAchievement,
  deleteAchievement,
  reorderAchievement,
} from '@/app/admin/actions/content'
import Field from '@/components/admin/FormField'
import ImagePicker from '@/components/admin/ImagePicker'

export default async function AdminAchievementsPage() {
  const [achievements, mediaAssets] = await Promise.all([
    prisma.achievement.findMany({ orderBy: { order: 'asc' }, include: { image: true } }),
    prisma.mediaAsset.findMany({ orderBy: { createdAt: 'desc' } }),
  ])

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements and Awards</h1>

      <div className="space-y-6">
        {achievements.map((item, index) => {
          const updateWithId = updateAchievement.bind(null, item.id)
          const deleteWithId = deleteAchievement.bind(null, item.id)
          const reorderUp = reorderAchievement.bind(null, item.id, 'up')
          const reorderDown = reorderAchievement.bind(null, item.id, 'down')

          return (
            <form
              key={item.id}
              action={updateWithId}
              className="space-y-3 rounded-lg bg-white p-5 shadow dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Achievement #{index + 1}
                </span>
                <div className="flex gap-2">
                  <button formAction={reorderUp} className="text-sm text-gray-500 hover:text-gray-800">
                    ↑
                  </button>
                  <button formAction={reorderDown} className="text-sm text-gray-500 hover:text-gray-800">
                    ↓
                  </button>
                  <button formAction={deleteWithId} className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
              <ImagePicker
                name="imageId"
                label="Photo"
                subfolder="achievements"
                initialImage={item.image}
                mediaAssets={mediaAssets}
              />
              <Field label="Title" name="title" defaultValue={item.title} />
              <Field label="Year" name="year" defaultValue={item.year ?? ''} />
              <Field
                label="Description"
                name="description"
                defaultValue={item.description ?? ''}
                textarea
              />
              <button
                type="submit"
                className="rounded bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
              >
                Save
              </button>
            </form>
          )
        })}
      </div>

      <div className="rounded-lg border-2 border-dashed border-gray-300 p-5 dark:border-gray-600">
        <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
          Add new achievement / award
        </h2>
        <form action={createAchievement} className="space-y-3">
          <ImagePicker name="imageId" label="Photo" subfolder="achievements" mediaAssets={mediaAssets} />
          <Field label="Title" name="title" />
          <Field label="Year" name="year" />
          <Field label="Description" name="description" textarea />
          <button
            type="submit"
            className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Add achievement
          </button>
        </form>
      </div>
    </div>
  )
}

