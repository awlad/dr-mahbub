import { prisma } from '@/lib/prisma'
import {
  createService,
  updateService,
  deleteService,
  reorderService,
} from '@/app/admin/actions/content'
import Field from '@/components/admin/FormField'

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        These show up on the homepage under “যে সমস্ত রোগের জন্য পরামর্শ দেয়া হয়”.
      </p>

      <div className="space-y-6">
        {services.map((service, index) => {
          const updateWithId = updateService.bind(null, service.id)
          const deleteWithId = deleteService.bind(null, service.id)
          const reorderUp = reorderService.bind(null, service.id, 'up')
          const reorderDown = reorderService.bind(null, service.id, 'down')

          return (
            <form
              key={service.id}
              action={updateWithId}
              className="space-y-3 rounded-lg bg-white p-5 shadow dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Service #{index + 1}
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
              <Field label="Name" name="name" defaultValue={service.name} />
              <Field label="Description" name="description" defaultValue={service.description} textarea />
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
        <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">Add new service</h2>
        <form action={createService} className="space-y-3">
          <Field label="Name" name="name" />
          <Field label="Description" name="description" textarea />
          <button
            type="submit"
            className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Add service
          </button>
        </form>
      </div>
    </div>
  )
}

