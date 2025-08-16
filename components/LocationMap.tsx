import React from 'react'
import siteMetadata from '@/data/siteMetadata'

const LocationMap = () => {
  const lat = 23.800000000000004
  const lng = 90.36000000000001
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <section className="mx-auto max-w-6xl px-2 sm:px-4 sm:py-8 md:px-6 md:py-12">
      <h3 className="mb-8 pt-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
        লোকেশন ম্যাপ
      </h3>
      <div className="relative h-0 overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={siteMetadata.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', left: 0, top: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Chamber Location"
        ></iframe>
      </div>
    </section>
  )
}

export default LocationMap
