import { services } from '@/data/siteMetadata'

export default function Services() {
  return (
    <section>
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
        {services.header}
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.items.map((service) => (
          <li
            key={service}
            className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  )
}
