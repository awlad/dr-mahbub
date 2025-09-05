'use client'

import React, { useState } from 'react'
import Chamber from '@/components/Chamber'
import siteMetadata from '@/data/siteMetadata'

export default function AppointmentPage() {
  const [copiedPhone, setCopiedPhone] = useState(null)

  const copyToClipboard = (phone) => {
    navigator.clipboard.writeText(phone)
    setCopiedPhone(phone)

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedPhone(null)
    }, 2000)
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
          সিরিয়াল বুকিং
        </h1>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700 md:text-3xl dark:text-gray-300">
          Appointment Booking
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-400">
          অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন এর কাছে সিরিয়াল নিতে নিম্নলিখিত চেম্বার সমূহে
          যোগাযোগ করুন | Contact the following chambers to book an appointment with Prof. Dr.
          Muhammad Mahbub Hussain
        </p>

        <div className="mb-10 rounded-lg bg-blue-50 p-6 shadow-md dark:bg-blue-900/30">
          <h3 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-white">
            সিরিয়ালের জন্য যোগাযোগ করুন
          </h3>
          <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
            অ্যাপয়েন্টমেন্টের জন্য নিচের নম্বরগুলোতে কল করুন।
            <br />
            For appointment, please call the numbers below.
          </p>
          <div className="flex justify-center">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-4 md:grid-cols-2">
              {siteMetadata.chambers.map((chamber, index) => {
                const phoneNumbers = chamber.phone.split(',').map((p) => p.trim())

                return phoneNumbers.map((phone, phoneIndex) => (
                  <div
                    key={`${index}-${phoneIndex}`}
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-800"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{phone}</span>
                    <button
                      onClick={() => copyToClipboard(phone)}
                      className="ml-2 rounded bg-cyan-600 px-3 py-1 text-sm text-white hover:bg-cyan-700"
                    >
                      {copiedPhone === phone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                ))
              })}
            </div>
          </div>
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          চেম্বার লোকেশন | Chamber Locations
        </h3>
        <Chamber />
      </div>
    </div>
  )
}
