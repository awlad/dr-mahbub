'use client'

import { useState } from 'react'
import siteMetadata, { achievements } from '@/data/siteMetadata'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Qualifications from '@/components/qualifications'
import Achievements from '@/components/achievements'
import Chamber from '@/components/Chamber'
import { allBlogs } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import CopyButton from '@/components/CopyButton'

const CallForSerial = () => {
  return (
    <div className="mb-6 rounded-lg bg-gray-100 p-6 text-center dark:bg-gray-800">
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">Call for serial:</p>
      <a
        href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
        className="text-4xl font-bold text-cyan-500 transition-colors hover:text-cyan-600"
      >
        {siteMetadata.phone}
      </a>
      <div className="mt-4">
        <CopyButton textToCopy={siteMetadata.phone} />
      </div>
    </div>
  )
}

function Version1() {
  const posts = allBlogs.slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 py-12 sm:px-4 md:px-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center text-center md:text-left">
          <Image
            src={siteMetadata.siteLogo}
            alt={siteMetadata.author}
            width={300}
            height={400}
            className="rounded-xl object-cover shadow-lg mb-6"
          />
          <h1 className="text-4xl font-extrabold">{siteMetadata.author}</h1>
          <p className="mt-2 text-xl font-semibold text-cyan-500">{siteMetadata.specialization}</p>
          <Qualifications qualificationsString={siteMetadata.qualifications} />
        </div>
        <div>
          <p className="text-lg text-gray-700">{siteMetadata.experience}</p>
          <div className="mt-2">
            <CallForSerial />
          </div>
        </div>
      </section>
      <Chamber />
      <Achievements achievements={achievements} />

      <section>
        <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
        {posts.length === 0 && <p className="text-gray-500">No blog posts yet. Coming soon!</p>}
        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-cyan-500">
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
            <Link href="/blog" className="font-semibold text-cyan-500 hover:underline">
              View all articles →
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default function HomePageClient() {
  return (
    <div className="relative min-h-screen bg-gray-50 py-6">
      <div className="mx-auto max-w-5xl sm:px-4 md:px-6">
        <Version1 />
      </div>
    </div>
  )
}
