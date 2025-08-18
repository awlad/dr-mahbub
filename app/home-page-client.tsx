'use client'

import siteMetadata, { achievements, services } from '@/data/siteMetadata'
import Image from '@/components/Image'
import Achievements from '@/components/achievements'
import Services from '@/components/services'
import Chamber from '@/components/Chamber'
import CopyButton from '@/components/CopyButton'
import AboutMe from '@/components/AboutMe'
import LocationMap from '@/components/LocationMap'

const CallForSerial = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {siteMetadata.chambers.map((chamber, index) => (
        <div key={index} className="rounded-lg bg-gray-100 p-6 text-center dark:bg-gray-800">
          <p className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
            {chamber.name}:
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              href={`tel:${chamber.phone.replace(/\s+/g, '')}`}
              className="text-3xl font-bold text-cyan-500 transition-colors hover:text-cyan-600"
            >
              {chamber.phone}
            </a>
            <CopyButton textToCopy={chamber.phone} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Version1() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 sm:px-4 sm:py-8 md:px-6 md:py-12">
      <section
        className="grid grid-cols-1 items-center gap-12 md:grid-cols-5"
        aria-labelledby="hero-heading"
      >
        <div className="flex justify-center md:col-span-2">
          <Image
            src={siteMetadata.siteLogo}
            alt={`${siteMetadata.author} profile photo`}
            width={300}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="space-y-4 md:col-span-3">
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold text-gray-900 lg:text-5xl dark:text-white"
          >
            {siteMetadata.author}
          </h1>
          <h2 className="text-2xl font-semibold text-cyan-500 lg:text-3xl">
            {siteMetadata.specialization}
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400">{siteMetadata.qualifications}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{siteMetadata.experience}</p>
        </div>
      </section>

      <section className="!mt-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          সিরিয়ালের জন্য যোগাযোগ করুন
        </h2>
        <CallForSerial />
      </section>
      <Services />
      <Chamber />
      <Achievements achievements={achievements} />
      <AboutMe />
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
