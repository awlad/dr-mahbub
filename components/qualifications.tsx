export default function Qualifications({ qualifications }) {
  return (
    <section className="my-8">
      <h2 className="mb-6 text-2xl font-semibold">Qualifications</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {qualifications.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg border border-gray-300 bg-white p-6 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
          >
            <h3 className="mb-1 text-lg font-semibold text-cyan-500">{title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
