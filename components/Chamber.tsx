import siteMetadata from '@/data/siteMetadata'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

const Chamber = () => {
  const { openModal } = useAppointmentModal()

  return (
    <section id="chamber" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Chamber Information
        </h2>
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-white p-8 shadow-md md:flex-row dark:bg-gray-900">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Location</h3>
            <p className="text-gray-700 dark:text-gray-100">{siteMetadata.address}</p>
            <h3 className="mt-4 mb-2 text-xl font-semibold">Hours</h3>
            <p className="text-gray-700 dark:text-gray-100">
              Saturday - Thursday: 5:00 PM - 9:00 PM
              <br />
              Friday: Closed
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="rounded-md bg-cyan-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              Book Appointment
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Find Us on Map
          </h3>
          <div
            className="relative h-0 overflow-hidden rounded-lg"
            style={{ paddingBottom: '56.25%' }}
          >
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
        </div>
      </div>
    </section>
  )
}

export default Chamber
