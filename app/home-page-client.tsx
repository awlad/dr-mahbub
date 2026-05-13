'use client'

import siteMetadata, { achievements, services } from '@/data/siteMetadata'
import Image from '@/components/Image'
import Achievements from '@/components/achievements'
import Services from '@/components/services'
import Chamber from '@/components/Chamber'
import CopyButton from '@/components/CopyButton'
import AboutMe from '@/components/AboutMe'
import LocationMap from '@/components/LocationMap'
import { useState } from 'react'

const faqItems = [
  {
    question: 'মিরপুরে সেরা হেপাটোলজিস্ট কে? (Who is the best Hepatologist in Mirpur Dhaka?)',
    answer:
      'অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন মিরপুর ঢাকার অন্যতম সেরা হেপাটোলজিস্ট। তিনি পপুলার ডায়াগনস্টিক সেন্টার, সেকশন-৬, মিরপুর (অরিজিনাল-১০), পল্লবী, ঢাকা-১২১৬ তে প্র্যাকটিস করেন। Prof. Dr. Muhammad Mahbub Hussain is one of the best Hepatologists in Mirpur, Dhaka — practicing at Popular Diagnostic Centre, Section-6, Mirpur (Original-10), Pallabi, Dhaka-1216.',
  },
  {
    question: 'মিরপুর চেম্বারে সিরিয়ালের নম্বর কী? (Appointment number for Mirpur chamber?)',
    answer:
      'পপুলার ডায়াগনস্টিক সেন্টার, মিরপুর চেম্বারে অ্যাপয়েন্টমেন্টের জন্য কল করুন: ০৯৬৬৬৭৮৭৮০৭ অথবা ০৯৬১৩৭৮৭৮০৭। চেম্বার সময়: রবিবার থেকে বৃহস্পতিবার, বিকাল ৫টা – রাত ৯টা। Call 09666787807 or 09613787807. Hours: Sunday–Thursday, 5 PM – 9 PM.',
  },
  {
    question: 'কোন কোন লিভারের রোগের চিকিৎসা করা হয়? (What liver diseases are treated?)',
    answer:
      'জন্ডিস, হেপাটাইটিস এ/বি/সি/ডি/ই, ফ্যাটি লিভার, লিভার সিরোসিস, লিভার অ্যাবসেস, লিভার ক্যান্সার, লিভার টিউমার, শিশুদের লিভার রোগ, উইলসনস ডিজিজ, গিলবার্ট সিনড্রোম সহ সকল ধরনের লিভার ও পেটের রোগের চিকিৎসা করা হয়। All liver diseases: Jaundice, Hepatitis, Fatty Liver, Cirrhosis, Liver Cancer, and all gastroenterology conditions.',
  },
  {
    question: 'এনডোস্কোপি ও কোলোনোস্কোপি কি এখানে হয়? (Are Endoscopy & Colonoscopy available?)',
    answer:
      'হ্যাঁ, পপুলার ডায়াগনস্টিক সেন্টার, মিরপুরে আধুনিক এনডোস্কোপি, কোলোনোস্কপি, এন্ডোস্কপিক ব্যান্ড লিগেশন (EBL), এবং বিনা অপারেশনে পেটের পানি অপসারণসহ সকল ইন্টারভেনশনাল প্রসিডিউর করা হয়। Yes, advanced Endoscopy, Colonoscopy, EBL, and Ascitic Fluid Drainage are available at Popular Diagnostic Centre, Mirpur.',
  },
  {
    question:
      'হেপাটোলজিস্ট ও গ্যাস্ট্রোএন্টেরোলজিস্টের পার্থক্য কী? (Hepatologist vs Gastroenterologist?)',
    answer:
      'হেপাটোলজিস্ট মূলত লিভার, পিত্তথলি ও প্যানক্রিয়াসের রোগে বিশেষজ্ঞ। গ্যাস্ট্রোএন্টেরোলজিস্ট পুরো পাকস্থলী ও পরিপাকতন্ত্রের চিকিৎসা করেন। অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন উভয় ক্ষেত্রেই বিশেষজ্ঞ। A Hepatologist specializes in liver, gallbladder & pancreas diseases. Dr. Mahbub Hussain is an expert in both Hepatology and Gastroenterology.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-16">
      <h2
        id="faq-heading"
        className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white"
      >
        সচরাচর জিজ্ঞাসা | Frequently Asked Questions
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 dark:text-gray-400">
        হেপাটোলজিস্ট, লিভার মেডিসিন ও মিরপুর চেম্বার সম্পর্কে সাধারণ প্রশ্ন ও উত্তর
      </p>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 dark:text-white">{item.question}</span>
              <span className="ml-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>
            {openIndex === index && (
              <div className="border-t border-gray-200 px-6 py-4 text-gray-700 dark:border-gray-700 dark:text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

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
        className="font-mono text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
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

const CallForSerial = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {siteMetadata.chambers.map((chamber, index) => {
        const phoneNumbers = chamber.phone.split(',').map((phone) => phone.trim())

        return (
          <div key={index} className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <p className="mb-4 text-center text-xl font-semibold text-gray-700 dark:text-gray-200">
              {chamber.name}:
            </p>
            <div className="space-y-2">
              {phoneNumbers.map((phone, phoneIndex) => (
                <PhoneNumberWithCopy key={phoneIndex} phone={phone} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Version1() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-2 sm:px-4 sm:py-8 md:px-6 md:py-12">
      <section className="space-y-12" aria-labelledby="hero-heading">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
          <div className="flex justify-center md:col-span-2">
            <Image
              src={siteMetadata.siteLogo}
              alt={`${siteMetadata.author} — Best Hepatologist in Mirpur Dhaka`}
              width={300}
              height={400}
              className="rounded-xl object-cover shadow-lg"
              priority
            />
          </div>
          <div className="space-y-4 md:col-span-3">
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold text-gray-900 lg:text-5xl dark:text-white"
            >
              {siteMetadata.author}
            </h1>
            <h2 className="text-2xl font-semibold text-cyan-500 lg:text-3xl">
              {siteMetadata.specialization}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {siteMetadata.qualifications}
            </p>
            {/* Location badge — helps local SEO signal */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                📍 Popular Diagnostic Centre, Mirpur, Dhaka
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                📍 Popular Diagnostic Centre, Rangpur
              </span>
            </div>
          </div>
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300">{siteMetadata.experience}</div>
      </section>

      <section className="!mt-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          সিরিয়ালের জন্য যোগাযোগ করুন
        </h2>
        <CallForSerial />
      </section>
      <Services />
      <Chamber />
      <Achievements achievements={achievements} />
      <AboutMe />
      <FAQSection />
    </div>
  )
}

export default function HomePageClient() {
  return (
    <div className="relative min-h-screen bg-gray-50 py-6">
      <div className="mx-auto max-w-5xl sm:px-4 md:px-6">
        <Version1 />
      </div>
    </div>
  )
}
