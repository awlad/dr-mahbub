import { services } from '@/data/siteMetadata'

const cardColors = [
  'bg-cyan-200',
  'bg-blue-200',
  'bg-indigo-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-red-200',
]

const ServiceCard = ({ service, color }) => (
  <div className={`rounded-xl p-6 shadow-lg ${color}`}>
    <h3 className="text-xl font-bold text-gray-800">{service}</h3>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
)

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20 dark:bg-gray-50" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="mb-8 text-center text-3xl font-extrabold text-gray-900 sm:mb-12 sm:text-4xl dark:text-black"
        >
          {services.header}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 [grid-auto-rows:masonry]">
          {services.items.map((service, index) => (
            <ServiceCard key={service} service={service} color={cardColors[index % cardColors.length]} />
          ))}
        </div>
      </div>
    </section>
  )
}
