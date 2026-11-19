'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logoutAction } from '@/app/admin/actions/auth'

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/chambers', label: 'Chambers' },
  { href: '/admin/services', label: 'Services' },
  { href: '/admin/achievements', label: 'Achievements & Awards' },
  { href: '/admin/qualifications', label: 'Qualifications' },
  { href: '/admin/about', label: 'About Me' },
  { href: '/admin/settings', label: 'Hero Image / Settings' },
  { href: '/admin/media', label: 'Media Library' },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex w-full flex-col gap-1 border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 dark:text-white">Admin</span>
        <Link href="/" className="text-xs text-cyan-600 hover:underline" target="_blank">
          View site ↗
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-cyan-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
      <form action={logoutAction} className="mt-auto pt-4">
        <button
          type="submit"
          className="w-full rounded px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          Log out
        </button>
      </form>
    </nav>
  )
}

