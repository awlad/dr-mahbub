'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { allBlogs } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'

const qualifications = [
  'MBBS',
  'FCPS (Medicine)',
  'MD (Internal Medicine)',
  'FACP (USA)',
  'FRCP (UK)',
]

const achievements = [
  { title: 'Best Hepatologist Award 2022', year: '2022' },
  { title: 'Former Professor & Head, Hepatology Dept.', year: '2010-2020' },
  { title: 'Published 20+ Research Papers', year: '' },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [currentQual, setCurrentQual] = useState(0)

  const handleCopy = () => {
    navigator.clipboard.writeText(siteMetadata.phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const nextQual = () => {
    setCurrentQual((prev) => (prev + 1) % qualifications.length)
  }
  const prevQual = () => {
    setCurrentQual((prev) => (prev === 0 ? qualifications.length - 1 : prev - 1))
  }

  const posts = allBlogs.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl space-y-20 px-6 py-12">
      {/* Profile Hero */}
      <section className="flex flex-col items-center space-y-6 text-center">
        <Image
          src={siteMetadata.siteLogo}
          alt={siteMetadata.author}
          width={300}
          height={300}
          className="rounded-full border-8 border-blue-200 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold">{siteMetadata.author}</h1>
        <p className="text-xl font-semibold text-blue-700">{siteMetadata.specialization}</p>
        <p className="max-w-xl text-gray-700">{siteMetadata.experience}</p>

        {/* Qualifications Carousel */}
        <div className="mt-10 flex w-full max-w-md items-center justify-between rounded-xl bg-blue-50 p-6 shadow">
          <button
            onClick={prevQual}
            aria-label="Previous qualification"
            className="px-4 text-3xl font-bold text-blue-700 hover:text-blue-900"
          >
            ‹
          </button>
          <div className="flex-1 text-center text-lg font-semibold text-blue-800">
            {qualifications[currentQual]}
          </div>
          <button
            onClick={nextQual}
            aria-label="Next qualification"
            className="px-4 text-3xl font-bold text-blue-700 hover:text-blue-900"
          >
            ›
          </button>
        </div>

        {/* Contact with copy */}
        <p className="mt-6 flex items-center justify-center gap-4 text-lg text-gray-700">
          📞
          <a
            href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
            className="text-blue-600 hover:underline"
          >
            {siteMetadata.phone}
          </a>
          <button
            onClick={handleCopy}
            className="rounded bg-gray-200 px-3 py-1 text-sm transition hover:bg-gray-300"
            aria-label="Copy phone number"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </p>
      </section>

      {/* Achievements / Prizes */}
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Achievements & Prizes</h2>
        <ul className="space-y-4">
          {achievements.map(({ title, year }) => (
            <li key={title} className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-800">{title}</span>
              {year && <span className="text-gray-500">{year}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Blog Section */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
        {posts.length === 0 && <p className="text-gray-500">No blog posts yet. Coming soon!</p>}
        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <p className="mb-2 text-sm text-gray-500">{formatDate(post.date)}</p>
              <p className="text-gray-700">{post.summary}</p>
            </li>
          ))}
        </ul>
        {posts.length > 0 && (
          <div className="mt-6">
            <Link href="/blog" className="font-semibold text-blue-600 hover:underline">
              View all articles →
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
