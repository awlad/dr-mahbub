import React from 'react'
import Chamber from '@/components/Chamber'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `চেম্বার ও লোকেশন | Hepatologist Chambers | Liver Specialist in Dhaka & Rangpur | ${siteMetadata.author}`,
  description:
    "ঢাকা মিরপুর এবং রংপুরে অবস্থিত চেম্বার সমূহে যোগাযোগ করুন। Visit Dr. Mahbub Hussain's consultation chambers at Popular Diagnostic Centre in Dhaka Mirpur and Rangpur for liver and gastroenterology treatment.",
  alternates: {
    canonical: `${siteMetadata.siteUrl}/chambers`,
    languages: {
      'en-US': `${siteMetadata.siteUrl}/chambers`,
      'bn-BD': `${siteMetadata.siteUrl}/chambers`,
    },
  },
  openGraph: {
    title: `চেম্বার ও লোকেশন | Chambers & Locations | ${siteMetadata.author}`,
    description:
      'ঢাকা মিরপুর এবং রংপুরে পপুলার ডায়াগনস্টিক সেন্টারে অবস্থিত চেম্বার সমূহে যোগাযোগ করুন। Consultation chambers at Popular Diagnostic Centre in Dhaka and Rangpur.',
    url: `${siteMetadata.siteUrl}/chambers`,
    siteName: siteMetadata.title,
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  keywords: [
    'লিভার ডাক্তার ঢাকা মিরপুর',
    'Liver doctor Dhaka Mirpur',
    'গ্যাস্ট্রোএন্টারোলজিস্ট রংপুর',
    'Gastroenterologist Rangpur',
    'পপুলার ডায়াগনস্টিক লিভার স্পেশালিস্ট',
    'Popular Diagnostic liver specialist',
    'ডাক্তার মাহবুব হোসেন চেম্বার',
    'Dr. Mahbub Hussain chamber',
    'হেপাটোলজিস্ট পপুলার ডায়াগনস্টিক',
    'Hepatologist Popular Diagnostic',
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
