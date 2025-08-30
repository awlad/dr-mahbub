// components/ClientLayoutWrapper.tsx

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/SectionContainer'
import { ThemeProviders } from '../app/theme-providers'
import siteMetadata from '@/data/siteMetadata'
import { AppointmentModalProvider, useAppointmentModal } from '../contexts/AppointmentModalContext'
import CopyButton from './CopyButton'
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
        className="font-mono text-lg font-semibold text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
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

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const AppointmentModal = () => {
  const { showModal, closeModal } = useAppointmentModal()

  if (!showModal) return null

  return (
    <div
      className="bg-opacity-25 fixed inset-0 z-[9999] flex items-center justify-center bg-black p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="relative w-full max-w-lg scale-95 transform rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 ease-in-out hover:scale-100 dark:bg-gray-900">
        <div className="text-center">
          <h2 id="modal-title" className="mb-2 text-3xl font-bold text-cyan-500">
            সিরিয়াল দিন
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            সিরিয়াল এর জন্য নিচের নাম্বারে কল করুন
          </p>
        </div>

        <div className="space-y-6">
          {siteMetadata.chambers.map((chamber, index) => {
            // Split phone numbers by comma and clean them
            const phoneNumbers = chamber.phone.split(',').map((phone) => phone.trim())

            return (
              <div key={index} className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="mb-3 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {chamber.name}
                </h3>
                <div className="space-y-2">
                  {phoneNumbers.map((phone, phoneIndex) => (
                    <PhoneNumberWithCopy key={phoneIndex} phone={phone} />
                  ))}
                </div>
                <address className="mt-3 text-center text-xs text-gray-600 not-italic dark:text-gray-400">
                  {chamber.address}
                </address>
              </div>
            )
          })}
        </div>

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const FloatingAppointmentButton = () => {
  const { openModal } = useAppointmentModal()

  return (
    <button
      onClick={openModal}
      className="fixed right-4 bottom-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-cyan-600 md:hidden"
      aria-label="Open appointment modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.298-.101.434a10.522 10.522 0 005.293 5.293c.136.063.333.034.434-.101l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}
/* eslint-enable jsx-a11y/click-events-have-key-events */
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-enable jsx-a11y/no-static-element-interactions */

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppointmentModalProvider>
      <ThemeProviders>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mb-auto">
            <SectionContainer>{children}</SectionContainer>
          </main>
          <Footer />
        </div>
        <AppointmentModal />
        <FloatingAppointmentButton />
      </ThemeProviders>
    </AppointmentModalProvider>
  )
}
