import React from 'react'
import Chamber from '@/components/Chamber'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `Hepatologist Chamber in Mirpur Dhaka | Popular Diagnostic Centre | ${siteMetadata.author}`,
  description:
    "Book appointment with the best Hepatologist in Mirpur Dhaka. Prof. Dr. Muhammad Mahbub Hussain's chamber at Popular Diagnostic Centre, Section-6, Mirpur (Original-10), Pallabi, Dhaka-1216. Call 09666787807. Also available in Rangpur.",
  alternates: {
    canonical: `${siteMetadata.siteUrl}/chambers`,
  },
  openGraph: {
    title: `Hepatologist Chamber in Mirpur Dhaka | Popular Diagnostic Centre | ${siteMetadata.author}`,
    description:
      "Prof. Dr. Muhammad Mahbub Hussain's chamber at Popular Diagnostic Centre, Mirpur, Dhaka. Book liver & gastroenterology consultation. Call 09666787807.",
    url: `${siteMetadata.siteUrl}/chambers`,
    siteName: siteMetadata.title,
    locale: 'bn_BD',
    type: 'website',
  },
  keywords: [
    'Hepatologist chamber Mirpur',
    'Hepatologist Popular Diagnostic Mirpur',
    'Liver doctor Mirpur Dhaka',
    'লিভার ডাক্তার ঢাকা মিরপুর',
    'মিরপুর হেপাটোলজিস্ট চেম্বার',
    'Popular Diagnostic Mirpur Hepatologist',
    'Dr. Mahbub Hussain chamber Mirpur',
    'Liver specialist Popular Diagnostic Centre Mirpur',
    'Gastroenterologist Mirpur Dhaka',
    'Gastroenterologist Rangpur',
    'হেপাটোলজিস্ট পপুলার ডায়াগনস্টিক মিরপুর',
  ],
}

export default function ChambersPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
          চেম্বার ও লোকেশন
        </h1>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700 md:text-3xl dark:text-gray-300">
          Chambers & Locations
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-400">
          অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন এর চেম্বার সমূহ | Consultation chambers of Prof. Dr.
          Muhammad Mahbub Hussain in Dhaka Mirpur and Rangpur
        </p>
        <Chamber />
      </div>
    </div>
  )
}
