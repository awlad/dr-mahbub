import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

export default function Footer() {
  const { openModal } = useAppointmentModal()

  return (
    <footer className="bg-gray-100 py-8 sm:py-12 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <button
              onClick={openModal}
              className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-110"
              aria-label="Appointment"
            >
              সিরিয়াল
            </button>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
              <SocialIcon kind="github" href={siteMetadata.github} size={7} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={7} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={7} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={7} />
            </div>
          </div>

          <div className="text-center text-base text-gray-600 sm:text-right dark:text-gray-300">
            <p className="font-semibold">{siteMetadata.author}</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <p className="mt-2">
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-500">
                {siteMetadata.title}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
