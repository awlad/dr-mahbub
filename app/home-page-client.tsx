'use client'

import siteMetadata, { achievements, services } from '@/data/siteMetadata'
import Image from '@/components/Image'
import Achievements from '@/components/achievements'
import Services from '@/components/services'
import Chamber from '@/components/Chamber'
import CopyButton from '@/components/CopyButton'
import AboutMe from '@/components/AboutMe'
import LocationMap from '@/components/LocationMap'
import { useState } from 'react'

const PhoneNumberWithCopy = ({ phone }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (phoneNumber) => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy phone number: ', err)
    }
  }

  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
      <a
        href={`tel:${phone.replace(/\s+/g, '')}`}
        className="font-mono text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
      >
        {phone}
      </a>
      <button
        onClick={() => copyToClipboard(phone)}
        className="ml-2 rounded bg-cyan-600 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-cyan-700"
        aria-label={`Copy phone number ${phone}`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

const CallForSerial = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {siteMetadata.chambers.map((chamber, index) => {
        // Split phone numbers by comma and clean them
        const phoneNumbers = chamber.phone.split(',').map((phone) => phone.trim())

        return (
          <div key={index} className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <p className="mb-4 text-center text-xl font-semibold text-gray-700 dark:text-gray-200">
              {chamber.name}:
            </p>
            <div className="space-y-2">
              {phoneNumbers.map((phone, phoneIndex) => (
                <PhoneNumberWithCopy key={phoneIndex} phone={phone} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Version1() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 sm:px-4 sm:py-8 md:px-6 md:py-12">
      <section className="space-y-12" aria-labelledby="hero-heading">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
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
            <p className="text-md text-gray-600 dark:text-gray-400">
              {siteMetadata.qualifications}
            </p>
          </div>
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300">{siteMetadata.experience}</div>
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
