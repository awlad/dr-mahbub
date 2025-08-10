'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { allBlogs } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'

const qualifications = [
    "MBBS",
    "FCPS (Medicine)",
    "MD (Internal Medicine)",
    "FACP (USA)",
    "FRCP (UK)",
]

const achievements = [
    { title: "Best Hepatologist Award 2022", year: "2022" },
    { title: "Former Professor & Head, Hepatology Dept.", year: "2010-2020" },
    { title: "Published 20+ Research Papers", year: "" },
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
        setCurrentQual((prev) =>
            prev === 0 ? qualifications.length - 1 : prev - 1
        )
    }

    const posts = allBlogs.slice(0, 3)

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
            {/* Profile Hero */}
            <section className="flex flex-col items-center text-center space-y-6">
                <Image
                    src={siteMetadata.siteLogo}
                    alt={siteMetadata.author}
                    width={300}
                    height={300}
                    className="rounded-full border-8 border-blue-200 shadow-lg"
                />
                <h1 className="text-4xl font-extrabold">{siteMetadata.author}</h1>
                <p className="text-xl font-semibold text-blue-700">
                    {siteMetadata.specialization}
                </p>
                <p className="max-w-xl text-gray-700">{siteMetadata.experience}</p>

                {/* Qualifications Carousel */}
                <div className="mt-10 w-full max-w-md bg-blue-50 rounded-xl shadow p-6 flex items-center justify-between">
                    <button
                        onClick={prevQual}
                        aria-label="Previous qualification"
                        className="text-blue-700 font-bold text-3xl px-4 hover:text-blue-900"
                    >
                        ‹
                    </button>
                    <div className="flex-1 text-center text-lg font-semibold text-blue-800">
                        {qualifications[currentQual]}
                    </div>
                    <button
                        onClick={nextQual}
                        aria-label="Next qualification"
                        className="text-blue-700 font-bold text-3xl px-4 hover:text-blue-900"
                    >
                        ›
                    </button>
                </div>

                {/* Contact with copy */}
                <p className="mt-6 text-lg text-gray-700 flex justify-center items-center gap-4">
                    📞
                    <a
                        href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
                        className="text-blue-600 hover:underline"
                    >
                        {siteMetadata.phone}
                    </a>
                    <button
                        onClick={handleCopy}
                        className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
                        aria-label="Copy phone number"
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </p>
            </section>

            {/* Achievements / Prizes */}
            <section className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Achievements & Prizes</h2>
                <ul className="space-y-4">
                    {achievements.map(({ title, year }) => (
                        <li
                            key={title}
                            className="flex justify-between border-b border-gray-200 pb-3"
                        >
                            <span className="font-semibold text-gray-800">{title}</span>
                            {year && <span className="text-gray-500">{year}</span>}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Blog Section */}
            <section className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                {posts.length === 0 && (
                    <p className="text-gray-500">No blog posts yet. Coming soon!</p>
                )}
                <ul className="grid md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <li
                            key={post.slug}
                            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-sm text-gray-500 mb-2">
                                {formatDate(post.date)}
                            </p>
                            <p className="text-gray-700">{post.summary}</p>
                        </li>
                    ))}
                </ul>
                {posts.length > 0 && (
                    <div className="mt-6">
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:underline font-semibold"
                        >
                            View all articles →
                        </Link>
                    </div>
                )}
            </section>
        </div>
    )
}
