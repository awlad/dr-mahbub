'use client'

import siteMetadata, { headerNavLinks } from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
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
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block text-gray-900 dark:text-gray-100">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5">
        <div className="hidden sm:flex items-center space-x-6">
          {headerNavLinks
            .filter((link) => link.path !== '/')
            .map((link) =>
              link.isModalTrigger ? (
                <button
                  key={link.title}
                  onClick={openModal}
                  className="px-4 py-2 font-semibold text-white bg-cyan-500 rounded-md hover:bg-cyan-600 transition-colors"
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  key={link.title}
                  href={link.path}
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
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
