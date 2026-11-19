import { prisma } from '@/lib/prisma'
import {
  createChamber,
  updateChamber,
  deleteChamber,
  reorderChamber,
} from '@/app/admin/actions/content'
import Field from '@/components/admin/FormField'

export default async function AdminChambersPage() {
  const chambers = await prisma.chamber.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chambers</h1>

      <div className="space-y-6">
        {chambers.map((chamber, index) => {
          const updateWithId = updateChamber.bind(null, chamber.id)
          const deleteWithId = deleteChamber.bind(null, chamber.id)
          const reorderUp = reorderChamber.bind(null, chamber.id, 'up')
          const reorderDown = reorderChamber.bind(null, chamber.id, 'down')

          return (
            <form
              key={chamber.id}
              action={updateWithId}
              className="space-y-3 rounded-lg bg-white p-5 shadow dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Chamber #{index + 1}
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

              <Field label="Location (short name)" name="location" defaultValue={chamber.location} />
              <Field label="Name" name="name" defaultValue={chamber.name} />
              <Field label="Phone (comma separated)" name="phone" defaultValue={chamber.phone} />
              <Field label="Address" name="address" defaultValue={chamber.address} textarea />
              <Field label="Schedule" name="schedule" defaultValue={chamber.schedule} />
              <Field
                label="Google Maps embed URL"
                name="mapsEmbedUrl"
                defaultValue={chamber.mapsEmbedUrl}
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
        <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">Add new chamber</h2>
        <form action={createChamber} className="space-y-3">
          <Field label="Location (short name)" name="location" />
          <Field label="Name" name="name" />
          <Field label="Phone (comma separated)" name="phone" />
          <Field label="Address" name="address" textarea />
          <Field label="Schedule" name="schedule" />
          <Field label="Google Maps embed URL" name="mapsEmbedUrl" textarea />
          <button
            type="submit"
            className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Add chamber
          </button>
        </form>
      </div>
    </div>
  )
}



