// ClientLayoutWrapper.tsx

'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/SectionContainer'
import { ThemeProviders} from "../app/theme-providers";
import siteMetadata from '@/data/siteMetadata'
import { AppointmentModalProvider, useAppointmentModal } from '../contexts/AppointmentModalContext'
import CopyButton from './CopyButton'

const AppointmentModal = () => {
    const { showModal, closeModal } = useAppointmentModal()

    if (!showModal) return null

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-25 p-4 backdrop-blur-sm"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <h2
                        id="modal-title"
                        className="text-3xl font-bold mb-2 text-cyan-500"
                    >
                        Book an Appointment
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        To schedule your appointment, please call the number below.
                    </p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center mb-6">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Call for serial:</p>
                    <a
                        href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`}
                        className="text-4xl font-bold text-cyan-500 hover:text-cyan-600 transition-colors"
                    >
                        {siteMetadata.phone}
                    </a>
                    <div className="mt-4">
                        <CopyButton textToCopy={siteMetadata.phone} />
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Chamber Information
                    </h3>
                    <address className="not-italic text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {siteMetadata.address}
                    </address>
                </div>

                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
