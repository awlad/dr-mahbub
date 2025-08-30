// components/Chamber.tsx
'use client'
import React, { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

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
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-2 dark:bg-gray-700">
      <span className="font-mono text-gray-900 dark:text-white">{phone}</span>
      <button
        onClick={() => copyToClipboard(phone)}
        className="ml-2 px-3 py-1 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700 transition-colors duration-200"
        aria-label={`Copy phone number ${phone}`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

const Chamber = () => {
  const chamberNames = siteMetadata.chambers?.map((c) => c.name).join(', ')

  return (
    <section
      id="chamber"
      className="bg-gray-100 py-12 dark:bg-gray-800"
      aria-labelledby="chambers-heading"
    >
      <div className="container mx-auto px-6">
        <h2
          id="chambers-heading"
          className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white"
        >
          চেম্বার ও লোকেশন — {chamberNames}
        </h2>
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
          {siteMetadata.chambers.map((chamber, index) => {
            // Split phone numbers by comma and clean them
            const phoneNumbers = chamber.phone.split(',').map(phone => phone.trim())

            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-cyan-600">{chamber.location}</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{chamber.address}</p>

                  {/* Phone Numbers Section */}
                  <div className="mb-4">
                    <span className="font-semibold text-gray-900 dark:text-white mb-2 block">
                      যোগাযোগ নম্বর:
                    </span>
                    {phoneNumbers.map((phone, phoneIndex) => (
                      <PhoneNumberWithCopy key={phoneIndex} phone={phone} />
                    ))}
                  </div>

                  <div className="mb-4">
                    <span className="font-semibold text-gray-900 dark:text-white">সময়সূচী: </span>
                    <span className="text-gray-700 dark:text-gray-300">{chamber.schedule}</span>
                  </div>
                </div>
                <div className="h-80 w-full">
                  {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                  <iframe
                    src={chamber.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map for ${chamber.name} - ${chamber.location}`}
                  ></iframe>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Chamber
