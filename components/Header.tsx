'use client'

import siteMetadata, { headerNavLinks } from '@/data/siteMetadata'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import LanguageSwitcher from './LanguageSwitcher'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

const Header = () => {
  const { openModal } = useAppointmentModal()
  const headerClass = `flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md ${siteMetadata.stickyNav ? 'sticky top-0 z-50' : ''}`

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image
              src="/static/images/logo3.svg"
              alt={siteMetadata.headerTitle}
              width={100}
              height={100}
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold text-gray-900 sm:block dark:text-gray-100">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <button
          onClick={openModal}
          className="rounded-md bg-cyan-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-cyan-600 sm:hidden"
        >
          Appointment
        </button>
        <div className="hidden items-center space-x-6 sm:flex">
          {headerNavLinks
            .filter((link) => link.path !== '/')
            .map((link) =>
              link.isModalTrigger ? (
                <button
                  key={link.title}
                  onClick={openModal}
                  className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-cyan-600"
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  key={link.title}
                  href={link.path}
                  className="font-medium text-gray-700 transition-colors hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400"
                >
                  {link.title}
                </Link>
              )
            )}
        </div>
        {/*<LanguageSwitcher />*/}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
