import { prisma } from '@/lib/prisma'
import {
  createQualification,
  updateQualification,
  deleteQualification,
  reorderQualification,
} from '@/app/admin/actions/content'
import Field from '@/components/admin/FormField'

export default async function AdminQualificationsPage() {
  const qualifications = await prisma.qualification.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Qualifications</h1>

      <div className="space-y-6">
        {qualifications.map((q, index) => {
          const updateWithId = updateQualification.bind(null, q.id)
          const deleteWithId = deleteQualification.bind(null, q.id)
          const reorderUp = reorderQualification.bind(null, q.id, 'up')
          const reorderDown = reorderQualification.bind(null, q.id, 'down')

          return (
            <form
              key={q.id}
              action={updateWithId}
              className="space-y-3 rounded-lg bg-white p-5 shadow dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Qualification #{index + 1}
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
              <Field label="Title" name="title" defaultValue={q.title} />
              <Field label="Description" name="description" defaultValue={q.description} textarea />
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
        <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">Add new qualification</h2>
        <form action={createQualification} className="space-y-3">
          <Field label="Title" name="title" />
          <Field label="Description" name="description" textarea />
          <button
            type="submit"
            className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Add qualification
          </button>
        </form>
      </div>
    </div>
  )
}

