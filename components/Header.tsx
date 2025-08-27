'use client'

import siteMetadata, { headerNavLinks } from '@/data/siteMetadata'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import { useAppointmentModal } from '../contexts/AppointmentModalContext'

const Header = () => {
  const { openModal } = useAppointmentModal()
  const headerClass = `w-full py-4 sm:py-6 bg-white dark:bg-gray-900 ${siteMetadata.stickyNav ? 'sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800' : ''}`

  return (
    <header className={headerClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/static/images/logo3.svg"
                alt={siteMetadata.headerTitle}
                width={120}
                height={120}
              />
            </div>
            <div className="hidden h-6 text-3xl font-bold text-gray-900 sm:block dark:text-gray-100">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-8">
          <button
            onClick={openModal}
            className="rounded-full bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110 sm:hidden"
          >
            সিরিয়াল
          </button>
          <div className="hidden items-center space-x-8 sm:flex">
            {headerNavLinks
              .filter((link) => link.path !== '/')
              .map((link) =>
                link.isModalTrigger ? (
                  <button
                    key={link.title}
                    onClick={openModal}
                    className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-110"
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link
                    key={link.title}
                    href={link.path}
                    className="font-semibold text-gray-800 transition-colors hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-500"
                  >
                    {link.title}
                  </Link>
                )
              )}
          </div>
          {/*<LanguageSwitcher />*/}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
