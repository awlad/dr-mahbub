import siteMetadata from '@/data/siteMetadata'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

const Chamber = () => {
  const { openModal } = useAppointmentModal()

  return (
    <section id="chamber" className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          চেম্বার ইনফরমেশন
        </h2>
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-white p-8 shadow-md md:flex-row dark:bg-gray-900">
          <div>
            <h3 className="mt-4 mb-2 text-xl font-semibold">সময়</h3>
            <p className="text-gray-700 dark:text-gray-100">
              শনিবার - বৃহস্পতিবার: বিকাল ৫ - ৯
              <br />
              শুক্রবার বন্ধ
            </p>
            <h3 className="mt-4 mb-2 text-xl font-semibold">Location</h3>
            <p className="text-gray-700 dark:text-gray-100">{siteMetadata.address}</p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="rounded-md bg-cyan-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              সিরিয়াল দিন
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chamber
