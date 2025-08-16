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
    <div className="mb-6 rounded-lg bg-gray-100 p-6 text-center dark:bg-gray-800">
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">সিরিয়াল দিন:</p>
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
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 sm:px-4 sm:py-8 md:px-6 md:py-12">
      <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
        <div className="flex justify-center md:col-span-2">
          <Image
            src={siteMetadata.siteLogo}
            alt={siteMetadata.author}
            width={300}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="space-y-4 md:col-span-3">
          <h1 className="text-4xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
            {siteMetadata.author}
          </h1>
          <p className="text-xl font-semibold text-cyan-500 lg:text-2xl">
            {siteMetadata.specialization}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400">{siteMetadata.qualifications}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{siteMetadata.experience}</p>
          <CallForSerial />
        </div>
      </section>
      <Chamber />
      <Services />
      <AboutMe />
      <Achievements achievements={achievements} />
      <LocationMap></LocationMap>
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
