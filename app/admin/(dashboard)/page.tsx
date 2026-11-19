import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminDashboardPage() {
  const [chambers, services, achievements, qualifications, media] = await Promise.all([
    prisma.chamber.count(),
    prisma.service.count(),
    prisma.achievement.count(),
    prisma.qualification.count(),
    prisma.mediaAsset.count(),
  ])

  const cards = [
    { label: 'Chambers', count: chambers, href: '/admin/chambers' },
    { label: 'Services', count: services, href: '/admin/services' },
    { label: 'Achievements & Awards', count: achievements, href: '/admin/achievements' },
    { label: 'Qualifications', count: qualifications, href: '/admin/qualifications' },
    { label: 'Media Library', count: media, href: '/admin/media' },
  ]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-lg bg-white p-5 shadow transition hover:shadow-md dark:bg-gray-800"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{card.label}</p>
            <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{card.count}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

