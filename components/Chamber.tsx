// components/Chamber.tsx
import React from 'react'
import siteMetadata from '@/data/siteMetadata'

const Chamber = () => {
  const chamberNames = siteMetadata.chambers?.map((c) => c.name).join(', ')

  return (
    <section
      id="chamber"
      className="bg-gray-100 py-12 dark:bg-gray-800"
      aria-labelledby="chambers-heading"
    >
      <div className="container mx-auto px-6">
        <h2
          id="chambers-heading"
          className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white"
        >
          চেম্বার ও লোকেশন — {chamberNames}
        </h2>
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
          {siteMetadata.chambers.map((chamber, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
            >
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-cyan-600">{chamber.location}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{chamber.address}</p>
                <div className="mb-4">
                  <span className="font-semibold text-gray-900 dark:text-white">সময়সূচী: </span>
                  <span className="text-gray-700 dark:text-gray-300">{chamber.schedule}</span>
                </div>
              </div>
              <div className="h-80 w-full">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src={chamber.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Chamber
