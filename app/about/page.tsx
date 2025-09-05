import React from 'react'
import AboutMe from '@/components/AboutMe'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `About Professor Dr. Muhammad Mahbub Hussain | পরিচিতি | Hepatologist in Bangladesh`,
  description:
    'অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন - রংপুর মেডিকেল কলেজ হাসপাতালের হেপাটোলজি বিভাগের প্রতিষ্ঠাতা ও সাবেক বিভাগীয় প্রধান। Founder & former Head of Hepatology Department at Rangpur Medical College Hospital, specialist in liver diseases and gastroenterology.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/about`,
    languages: {
      'en-US': `${siteMetadata.siteUrl}/about`,
      'bn-BD': `${siteMetadata.siteUrl}/about`,
    },
  },
  openGraph: {
    title: `About Professor Dr. Muhammad Mahbub Hussain | পরিচিতি | Hepatologist in Bangladesh`,
    description:
      'Learn about Prof. Dr. Muhammad Mahbub Hussain - Founder & former Head of Hepatology at Rangpur Medical College Hospital, specialist in liver diseases and gastroenterology.',
    url: `${siteMetadata.siteUrl}/about`,
    siteName: siteMetadata.title,
    locale: 'en_US',
    alternateLocale: 'bn_BD',
    type: 'profile',
  },
  keywords: [
    'অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন',
    'Professor Dr. Muhammad Mahbub Hussain',
    'লিভার বিশেষজ্ঞ বাংলাদেশ',
    'Liver specialist Bangladesh',
    'Hepatologist',
    'হেপাটোলজি বিভাগের প্রতিষ্ঠাতা',
    'Founder of Hepatology Department',
    'রংপুর মেডিকেল কলেজ',
    'Rangpur Medical College',
    'এমবিবিএস এমডি হেপাটোলজি',
    'MBBS MD Hepatology',
  ],
}

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
          About Prof. Dr. Muhammad Mahbub Hussain
        </h1>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700 md:text-3xl dark:text-gray-300">
          অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন - পরিচিতি
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-400">
          রংপুর মেডিকেল কলেজ হাসপাতালের হেপাটোলজি বিভাগের প্রতিষ্ঠাতা ও সাবেক বিভাগীয় প্রধান |
          Founder & former Head of the Department of Hepatology at Rangpur Medical College Hospital
        </p>
        <div className="mx-auto max-w-3xl">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
