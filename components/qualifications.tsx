export default function Qualifications({ qualifications }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-6">Qualifications</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {qualifications.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-1 text-cyan-500">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
