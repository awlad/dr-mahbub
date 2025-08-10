// ClientLayoutWrapper.tsx

'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/SectionContainer'
import { ThemeProviders } from '../app/theme-providers'
import siteMetadata from '@/data/siteMetadata'
import { AppointmentModalProvider, useAppointmentModal } from '../contexts/AppointmentModalContext'
import CopyButton from './CopyButton'

const AppointmentModal = () => {
  const { showModal, closeModal } = useAppointmentModal()

  if (!showModal) return null

  return (
    <div
      className="bg-opacity-25 fixed inset-0 z-[9999] flex items-center justify-center bg-black p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div
        className="relative w-full max-w-lg scale-95 transform rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 ease-in-out hover:scale-100 dark:bg-gray-900"
      >
        <div className="text-center">
          <h2 id="modal-title" className="mb-2 text-3xl font-bold text-cyan-500">
            Book an Appointment
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            To schedule your appointment, please call the number below.
          </p>
        </div>

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

        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Chamber Information
          </h3>
          <address className="whitespace-pre-line text-gray-600 not-italic dark:text-gray-400">
            {siteMetadata.address}
          </address>
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

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppointmentModalProvider>
      <ThemeProviders>
        <SectionContainer>
          <Header />
          <main>{children}</main>
          <Footer />
          <AppointmentModal />
        </SectionContainer>
      </ThemeProviders>
    </AppointmentModalProvider>
  )
}