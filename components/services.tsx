import { services } from '@/data/siteMetadata'

export default function Services() {
  return (
    <section className="py-8 sm:py-10 md:py-12" aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="mb-6 text-center text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl dark:text-white"
      >
        {services.header}
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
        {services.items.map((service) => (
          <li
            key={service}
            className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm sm:p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  )
}
