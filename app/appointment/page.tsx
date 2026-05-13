import React from 'react'
import AppointmentClient from './AppointmentClient'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `সিরিয়াল বুকিং | Book Appointment — Hepatologist Mirpur Dhaka | ${siteMetadata.author}`,
  description:
    'Book an appointment with Prof. Dr. Muhammad Mahbub Hussain — Best Hepatologist in Mirpur Dhaka. Call Popular Diagnostic Centre, Mirpur: 09666787807 | 09613787807. Sunday–Thursday, 5 PM – 9 PM.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/appointment`,
  },
  openGraph: {
    title: `Book Appointment — Hepatologist Mirpur Dhaka | ${siteMetadata.author}`,
    description:
      'Book appointment with Best Hepatologist in Mirpur. Popular Diagnostic Centre, Mirpur, Dhaka. Call 09666787807.',
    url: `${siteMetadata.siteUrl}/appointment`,
    siteName: siteMetadata.title,
    locale: 'bn_BD',
    type: 'website',
  },
  keywords: [
    'Book Hepatologist appointment Mirpur',
    'Hepatologist appointment Dhaka',
    'Popular Diagnostic Mirpur appointment',
    'লিভার ডাক্তার সিরিয়াল মিরপুর',
    'Dr Mahbub Hussain appointment',
  ],
}

export default function AppointmentPage() {
  return <AppointmentClient />
}
