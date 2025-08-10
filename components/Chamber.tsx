import siteMetadata from '@/data/siteMetadata'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

const Chamber = () => {
  const { openModal } = useAppointmentModal()

  return (
    <section id="chamber" className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Chamber Information</h2>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700 dark:text-gray-100">{siteMetadata.address}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Hours</h3>
            <p className="text-gray-700 dark:text-gray-100">
              Saturday - Thursday: 5:00 PM - 9:00 PM
              <br />
              Friday: Closed
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="px-6 py-3 font-semibold text-white bg-cyan-500 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chamber
