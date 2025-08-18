import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

export default function Footer() {
  const { openModal } = useAppointmentModal()

  return (
    <footer className="bg-gray-50 py-6 sm:py-8 dark:bg-gray-950">
      <div className="flex flex-col items-center space-y-6 px-4">
        <button
          onClick={openModal}
          className="rounded-md bg-cyan-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-cyan-600"
          aria-label="Appointment"
        >
          সিরিয়াল
        </button>

        <div className="flex flex-wrap justify-center gap-4 px-2">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>

        <div className="flex flex-wrap justify-center text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="px-1">{siteMetadata.author}</div>
          <div className="hidden sm:block">{` • `}</div>
          <div className="px-1">{`© ${new Date().getFullYear()}`}</div>
          <div className="hidden sm:block">{` • `}</div>
          <div className="px-1">
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
