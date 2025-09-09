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

        {/* Professional Journey Section */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            পেশাগত যাত্রা | Professional Journey
          </h3>
          <div className="prose max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন বাংলাদেশের অন্যতম প্রখ্যাত হেপাটোলজিস্ট ও
              গ্যাস্ট্রোএন্টেরোলজিস্ট। তিনি রংপুর মেডিকেল কলেজ হাসপাতালে হেপাটোলজি বিভাগ প্রতিষ্ঠা
              করেন এবং এর সাবেক বিভাগীয় প্রধান হিসেবে দায়িত্ব পালন করেছেন। তার ২৫+ বছরের
              অভিজ্ঞতায় হাজারো রোগীর জীবনে স্বস্তি এনেছেন।
            </p>
            <p className="mb-4">
              Professor Dr. Muhammad Mahbub Hussain is one of Bangladesh's most renowned
              hepatologists and gastroenterologists. He founded the Hepatology Department at Rangpur
              Medical College Hospital and served as its former head. With over 25 years of
              experience, he has brought relief to thousands of patients' lives.
            </p>
          </div>
        </div>

        {/* Educational Background */}
        <div className="mb-12 rounded-lg bg-blue-50 p-6 shadow-lg dark:bg-blue-900/20">
          <h3 className="mb-4 text-2xl font-bold text-blue-800 dark:text-blue-300">
            শিক্ষাগত যোগ্যতা | Educational Qualifications
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">MBBS</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                IPGMR (P.G. Hospital) এর দ্বিতীয় ব্যাচের গর্বিত এমবিবিএস ছাত্র। Bachelor of
                Medicine, Bachelor of Surgery from IPGMR (P.G. Hospital), second batch.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                MD (Hepatology)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                বিএসএমএমইউ (পি.জি. হাসপাতাল) থেকে এমডি (হেপাটোলজি) ডিগ্রি অর্জন। Doctor of Medicine
                in Hepatology from BSMMU (P.G. Hospital).
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                FCPS Training
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                স্যার সলিমুল্লাহ মেডিকেল কলেজ ও হাসপাতাল (মিটফোর্ড) থেকে এফসিপিএস দ্বিতীয় অংশের
                প্রশিক্ষণ সম্পন্ন। Completed FCPS second part training from Sir Salimullah Medical
                College & Hospital (MITFORD).
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">MAGA</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Member of American Gastroenterological Association (MAGA) - আমেরিকান
                গ্যাস্ট্রোএন্টেরোলজিক্যাল অ্যাসোসিয়েশনের সদস্য।
              </p>
            </div>
          </div>
        </div>

        {/* Career Achievements */}
        <div className="mb-12 rounded-lg bg-green-50 p-6 shadow-lg dark:bg-green-900/20">
          <h3 className="mb-4 text-2xl font-bold text-green-800 dark:text-green-300">
            কর্মজীবনের অর্জন | Career Achievements
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">
                হেপাটোলজি বিভাগের প্রতিষ্ঠাতা
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                রংপুর মেডিকেল কলেজ হাসপাতালে হেপাটোলজি বিভাগ প্রতিষ্ঠা করেন এবং বিভাগীয় প্রধান
                হিসেবে দায়িত্ব পালন করেন। Founded and headed the Hepatology Department at Rangpur
                Medical College Hospital.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">
                সরকারি চাকরিতে যোগদান
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ১০ম বিসিএস থেকে সরকারি চাকরিতে যোগদান করেন। Joined government service from the 10th
                BCS (Bangladesh Civil Service).
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">
                চিকিৎসা সেবায় অবদান
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ২৫+ বছর ধরে লিভার ও গ্যাস্ট্রোএন্টেরোলজি ক্ষেত্রে অসামান্য অবদান রেখেছেন। Over 25
                years of outstanding contribution to liver and gastroenterology medicine.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-12 rounded-lg bg-purple-50 p-6 shadow-lg dark:bg-purple-900/20">
          <h3 className="mb-4 text-2xl font-bold text-purple-800 dark:text-purple-300">
            বিশেষজ্ঞতার ক্ষেত্র | Areas of Expertise
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-3 text-lg font-semibold text-purple-700 dark:text-purple-400">
                হেপাটোলজি | Hepatology
              </h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• লিভার সিরোসিস চিকিৎসা</li>
                <li>• হেপাটাইটিস ব্যবস্থাপনা</li>
                <li>• ফ্যাটি লিভার চিকিৎসা</li>
                <li>• লিভার ক্যান্সার নির্ণয়</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-3 text-lg font-semibold text-purple-700 dark:text-purple-400">
                গ্যাস্ট্রোএন্টেরোলজি | Gastroenterology
              </h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• এনডোস্কোপি পদ্ধতি</li>
                <li>• কোলোনোস্কোপি</li>
                <li>• IBS ব্যবস্থাপনা</li>
                <li>• পেপটিক আলসার চিকিৎসা</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-700">
              <h4 className="mb-3 text-lg font-semibold text-purple-700 dark:text-purple-400">
                ইন্টারভেনশনাল পদ্ধতি | Interventional Procedures
              </h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• এন্ডোস্কপিক ব্যান্ড লিগেশন</li>
                <li>• অ্যাসাইটিক ফ্লুইড স্টাডি</li>
                <li>• লিভার বায়োপসি</li>
                <li>• পলিপেকটমি</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="mb-12 rounded-lg bg-orange-50 p-6 shadow-lg dark:bg-orange-900/20">
          <h3 className="mb-4 text-2xl font-bold text-orange-800 dark:text-orange-300">
            চিকিৎসা দর্শন ও পদ্ধতি | Medical Philosophy & Approach
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-orange-700 dark:text-orange-400">
                রোগী-কেন্দ্রিক পদ্ধতি | Patient-Centered Care
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                প্রতিটি রোগীর সাথে ব্যক্তিগত যত্ন নিয়ে আলোচনা করেন এবং তাদের সমস্যা বুঝে চিকিৎসা
                পরিকল্পনা করেন। Each patient receives personalized care with detailed consultation
                and tailored treatment plans.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-orange-700 dark:text-orange-400">
                প্রমাণ-ভিত্তিক চিকিৎসা | Evidence-Based Medicine
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                আন্তর্জাতিক গাইডলাইন অনুসরণ করে এবং সর্বশেষ গবেষণার ভিত্তিতে চিকিৎসা প্রদান করেন।
                Follows international guidelines and provides treatment based on the latest research
                findings.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-orange-700 dark:text-orange-400">
                প্রতিরোধমূলক চিকিৎসা | Preventive Medicine
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                রোগ চিকিৎসার পাশাপাশি প্রতিরোধের উপর গুরুত্ব দেন এবং জীবনযাত্রার পরিবর্তনের পরামর্শ
                দেন। Emphasizes prevention alongside treatment and advises on lifestyle
                modifications.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-orange-700 dark:text-orange-400">
                সমন্বিত চিকিৎসা | Multidisciplinary Care
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                অন্যান্য বিশেষজ্ঞদের সাথে সমন্বয় করে রোগীর সর্বোত্তম চিকিৎসা নিশ্চিত করেন।
                Collaborates with other specialists to ensure the best possible patient outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Patient Testimonial Section */}
        <div className="mb-12 rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            রোগীদের মতামত | Patient Recognition
          </h3>
          <div className="prose max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4 italic">
              "অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন তার দক্ষতা, অভিজ্ঞতা এবং সেবার মনোভাবের জন্য
              রোগী ও তাদের পরিবারের কাছে অত্যন্ত সম্মানিত। তার চিকিৎসা পদ্ধতি আধুনিক এবং কার্যকর।"
            </p>
            <p className="mb-4 italic">
              "Professor Dr. Muhammad Mahbub Hussain is highly respected by patients and their
              families for his expertise, experience, and service-oriented approach. His treatment
              methods are modern and effective."
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
