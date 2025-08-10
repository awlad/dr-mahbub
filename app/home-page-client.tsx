'use client'

import { useState } from 'react'
import siteMetadata, { qualifications, achievements } from '@/data/siteMetadata'
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

// Version 1 - Centered hero + carousel
function Version2() {
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
      <section className="flex flex-col items-center space-y-6 text-center">
        <Image
          src={siteMetadata.siteLogo}
          alt={siteMetadata.author}
          width={300}
          height={300}
          className="rounded-full border-8 border-cyan-200 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold">{siteMetadata.author}</h1>
        <p className="text-xl font-semibold text-cyan-500">{siteMetadata.specialization}</p>
        <p className="max-w-xl text-gray-700">{siteMetadata.experience}</p>

        <Qualifications qualifications={qualifications} />

        <CallForSerial />
      </section>
      <Chamber />
      <Achievements achievements={achievements} />

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

// Version 2 - Split layout with side photo and inline qualifications
function Version1() {
  const posts = allBlogs.slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 py-12 sm:px-4 md:px-6">
      <section className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex-shrink-0">
          <Image
            src={siteMetadata.siteLogo}
            alt={siteMetadata.author}
            width={300}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">{siteMetadata.author}</h1>
          <p className="mt-2 text-xl font-semibold text-cyan-500">{siteMetadata.specialization}</p>

          <p className="mt-4 text-gray-700">{siteMetadata.experience}</p>

          <div className="mt-2">
            <CallForSerial />
          </div>
        </div>
      </section>
      <Chamber />
      <Qualifications qualifications={qualifications} />
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

// Version 3 - Hero with background image + overlay
function Version3() {
  const posts = allBlogs.slice(0, 3)

  return (
    <div>
      <section
        className="relative flex h-[400px] items-center"
        style={{
          backgroundImage: `url('/static/images/ocean.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-opacity-50 absolute inset-0 bg-black"></div>
        <div className="relative mx-auto w-full max-w-5xl px-6">
          <div className="flex items-center gap-12 text-white">
            <div className="flex-shrink-0">
              <Image
                src={siteMetadata.siteLogo}
                alt={siteMetadata.author}
                width={250}
                height={250}
                className="rounded-full border-8 border-white/50 shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold">{siteMetadata.author}</h1>
              <p className="text-2xl font-semibold">{siteMetadata.specialization}</p>
              <a
                href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
                className="mt-4 inline-block rounded bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
      <Chamber />

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-12">
        <Qualifications qualifications={qualifications} />
        <Achievements achievements={achievements} />

        <div>
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
        </div>
      </section>
    </div>
  )
}

function Version4() {
  const posts = allBlogs.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl space-y-20 px-6 py-12">
      <section className="text-center">
        <h1 className="font-serif text-6xl font-bold">{siteMetadata.author}</h1>
        <p className="mt-4 text-2xl text-gray-600">{siteMetadata.specialization}</p>
      </section>

      <CallForSerial />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>
          <p className="text-lg text-gray-700">{siteMetadata.experience}</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={siteMetadata.siteLogo}
            alt={siteMetadata.author}
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <Chamber />
      <Qualifications qualifications={qualifications} />
      <Achievements achievements={achievements} />

      <section>
        <h2 className="mb-6 text-center text-3xl font-bold">From the Blog</h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="text-center">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold text-gray-900 hover:text-cyan-500">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-gray-500">{formatDate(post.date)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Version5() {
  const posts = allBlogs.slice(0, 3)

  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl leading-tight font-bold">{siteMetadata.author}</h1>
            <p className="text-2xl text-cyan-400">{siteMetadata.specialization}</p>
            <p className="text-lg text-gray-300">{siteMetadata.experience}</p>
            <a
              href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
              className="mt-6 inline-block rounded-lg bg-cyan-500 px-8 py-4 text-lg font-semibold transition hover:bg-cyan-600"
            >
              Book an Appointment
            </a>
          </div>
          <div className="relative">
            <Image
              src={siteMetadata.siteLogo}
              alt={siteMetadata.author}
              width={400}
              height={400}
              className="mx-auto rounded-full shadow-2xl"
            />
          </div>
        </section>

        <div className="space-y-16 py-20">
          <Chamber />
          <Qualifications qualifications={qualifications} />
          <Achievements achievements={achievements} />
        </div>

        <section>
          <h2 className="mb-12 text-center text-4xl font-bold">Latest Articles</h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="rounded-lg bg-gray-800 p-6 transition hover:bg-gray-700"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold text-white hover:text-cyan-400">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-gray-400">{formatDate(post.date)}</p>
                <p className="mt-4 text-gray-300">{post.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default function HomePageClient() {
  const [version, setVersion] = useState(1)

  return (
    <div className="relative min-h-screen bg-gray-50 py-6">
      <div className="absolute top-4 left-4 z-10 flex space-x-2">
        {[1, 2, 3, 4, 5].map((v) => (
          <button
            key={v}
            onClick={() => setVersion(v)}
            aria-label={`Switch to version ${v}`}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 ${
              version === v
                ? 'scale-110 bg-cyan-500 text-white shadow-lg'
                : 'bg-white/50 text-gray-600 hover:bg-white'
            } `}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-5xl sm:px-4 md:px-6">
        {version === 1 && <Version1 />}
        {version === 2 && <Version2 />}
        {version === 3 && <Version3 />}
        {version === 4 && <Version4 />}
        {version === 5 && <Version5 />}
      </div>
    </div>
  )
}
