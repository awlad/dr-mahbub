import React from 'react'
import Services from '@/components/services'
import siteMetadata, { services } from '@/data/siteMetadata'

export const metadata = {
  title: `${services.header} | Liver Disease Treatments | Hepatologist Services | ${siteMetadata.author}`,
  description:
    'সকল ধরনের লিভার ও পেটের রোগের চিকিৎসা পরিষেবা - জন্ডিস, ফ্যাটি লিভার, হেপাটাইটিস। Liver and gastroenterology treatments including jaundice, fatty liver, hepatitis, gallstones, endoscopy, and colonoscopy services.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/services`,
    languages: {
      'en-US': `${siteMetadata.siteUrl}/services`,
      'bn-BD': `${siteMetadata.siteUrl}/services`,
    },
  },
  openGraph: {
    title: `${services.header} | Medical Services | ${siteMetadata.author}`,
    description:
      'সকল ধরনের লিভার ও পেটের রোগের চিকিৎসা পরিষেবা - জন্ডিস, ফ্যাটি লিভার, হেপাটাইটিস। Liver and gastroenterology treatments by Prof. Dr. Muhammad Mahbub Hussain.',
    url: `${siteMetadata.siteUrl}/services`,
    siteName: siteMetadata.title,
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  keywords: [
    'লিভার স্পেশালিস্ট ঢাকা',
    'Liver specialist Dhaka',
    'গ্যাস্ট্রোএন্টারোলজিস্ট ঢাকা',
    'Gastroenterologist Dhaka',
    'ফ্যাটি লিভার চিকিৎসা',
    'Fatty liver treatment',
    'জন্ডিস চিকিৎসা',
    'Jaundice treatment',
    'হেপাটাইটিস ডাক্তার বাংলাদেশ',
    'Hepatitis doctor Bangladesh',
  ],
}

export default function ServicesPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
          {services.header}
        </h1>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700 md:text-3xl dark:text-gray-300">
          Medical Services and Treatments
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-400">
          অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন দ্বারা প্রদত্ত সকল ধরনের লিভার ও পেটের রোগের চিকিৎসা
          পরিষেবা | Liver and gastroenterology treatments offered by Prof. Dr. Muhammad Mahbub
          Hussain
        </p>
        <Services />
      </div>
    </div>
  )
}
