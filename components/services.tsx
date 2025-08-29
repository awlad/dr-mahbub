import { services } from '@/data/siteMetadata'

const cardColors = [
  'bg-blue-50 border border-blue-200',
  'bg-gray-50 border border-gray-200',
  'bg-cyan-50 border border-cyan-200',
  'bg-gray-100 border border-gray-300',
  'bg-blue-100 border border-blue-300',
  'bg-cyan-100 border border-cyan-300',
]

const ServiceCard = ({ service, color }) => (
  <div className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${color}`}>
    <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-gray-900">{service.name}</h3>
    <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-700">{service.description}</p>
  </div>
)

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 md:py-20 dark:bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="mb-8 text-center text-3xl font-extrabold text-gray-900 sm:mb-12 sm:text-4xl dark:text-black"
        >
          {services.header}
        </h2>
        <div className="grid [grid-auto-rows:masonry] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {services.items.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              color={cardColors[index % cardColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
