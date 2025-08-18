import Image from 'next/image'

export default function Achievements({ achievements }) {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
        Achievements and Awards
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map(({ title, year, description, image }, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-300 bg-white p-4 shadow transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
          >
            {image && (
              <div className="relative mb-3 h-40 w-full">
                <Image
                  src={image}
                  alt={`Achievement: ${title}`}
                  className="rounded-md object-cover"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
            )}
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="mb-2 text-sm text-gray-600 italic dark:text-gray-400">{year}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
