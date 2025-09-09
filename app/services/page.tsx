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

        {/* Comprehensive Medical Services Section */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            বিশেষজ্ঞ চিকিৎসা সেবা | Specialized Medical Services
          </h3>
          <div className="prose max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন রংপুর মেডিকেল কলেজ হাসপাতালের হেপাটোলজি বিভাগের
              প্রতিষ্ঠাতা ও সাবেক বিভাগীয় প্রধান হিসেবে ২৫+ বছরের অভিজ্ঞতা নিয়ে লিভার ও পেটের সকল
              ধরনের রোগের আধুনিক চিকিৎসা প্রদান করেন।
            </p>
            <p className="mb-4">
              Professor Dr. Muhammad Mahbub Hussain, founder and former head of the Hepatology
              Department at Rangpur Medical College Hospital, provides advanced treatment for all
              types of liver and gastroenterological conditions with over 25 years of experience in
              the field.
            </p>
          </div>
        </div>

        {/* Liver Diseases Section */}
        <div className="mb-12 rounded-lg bg-blue-50 p-6 shadow-lg dark:bg-blue-900/20">
          <h3 className="mb-4 text-2xl font-bold text-blue-800 dark:text-blue-300">
            লিভারের রোগ সমূহ | Liver Diseases
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                Hepatitis Treatment
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                সকল প্রকার হেপাটাইটিস (A, B, C, D, E) এর নির্ণয়, চিকিৎসা ও প্রতিরোধ। HBsAg পরীক্ষা
                এবং হেপাটাইটিস B ভ্যাকসিনেশন সেবা।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                Fatty Liver Management
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ফ্যাটি লিভার রোগের আধুনিক চিকিৎসা, খাদ্যাভ্যাস পরিবর্তন এবং জীবনযাত্রার মান
                উন্নয়নের মাধ্যমে সম্পূর্ণ সুস্থতা।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                Liver Cirrhosis Care
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                লিভার সিরোসিসের জটিলতা নিয়ন্ত্রণ, অ্যাসাইটিস ব্যবস্থাপনা এবং পোর্টাল হাইপারটেনশন
                চিকিৎসা।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                Liver Cancer Treatment
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                লিভার ক্যান্সারের প্রাথমিক নির্ণয়, স্টেজিং এবং মাল্টিডিসিপ্লিনারি টিমের সাথে
                সমন্বিত চিকিৎসা পরিকল্পনা।
              </p>
            </div>
          </div>
        </div>

        {/* Gastroenterology Services */}
        <div className="mb-12 rounded-lg bg-green-50 p-6 shadow-lg dark:bg-green-900/20">
          <h3 className="mb-4 text-2xl font-bold text-green-800 dark:text-green-300">
            গ্যাস্ট্রোএন্টেরোলজি সেবা | Gastroenterology Services
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                Advanced Endoscopy
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                উন্নত এনডোস্কোপি সেবা - আপার GI এনডোস্কোপি, কোলোনোস্কপি, পলিপ অপসারণ এবং বায়োপসি।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                Therapeutic Procedures
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                এন্ডোস্কপিক ব্যান্ড লিগেশন (EBL), ভেরিসিয়াল স্ক্লেরোথেরাপি এবং পলিপেকটমি।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                IBS & IBD Management
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ইরিটেবল বাওল সিনড্রোম (IBS) এবং ইনফ্ল্যামেটরি বাওল ডিজিজ (IBD) এর ব্যাপক চিকিৎসা।
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                Emergency GI Care
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                রক্ত বমি, কালো পায়খানা এবং গ্যাস্ট্রোইন্টেস্টাইনাল জরুরি অবস্থার তাৎক্ষণিক চিকিৎসা।
              </p>
            </div>
          </div>
        </div>

        {/* Diagnostic Services */}
        <div className="mb-12 rounded-lg bg-purple-50 p-6 shadow-lg dark:bg-purple-900/20">
          <h3 className="mb-4 text-2xl font-bold text-purple-800 dark:text-purple-300">
            ডায়াগনস্টিক সেবা | Diagnostic Services
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">•</span>
              লিভার ফাংশন টেস্ট (LFT) ব্যাখ্যা ও পরামর্শ
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">•</span>
              হেপাটাইটিস মার্কার (HBsAg, Anti-HCV, HAV, HEV) পরীক্ষা
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">•</span>
              আল্ট্রাসনোগ্রাফি গাইডেড লিভার বায়োপসি
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">•</span>
              অ্যাসাইটিক ফ্লুইড অ্যানালাইসিস
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">•</span>
              ফাইব্রোস্ক্যান এবং লিভার ইলাস্টোগ্রাফি
            </li>
          </ul>
        </div>

        {/* Treatment Philosophy */}
        <div className="mb-12 rounded-lg bg-orange-50 p-6 shadow-lg dark:bg-orange-900/20">
          <h3 className="mb-4 text-2xl font-bold text-orange-800 dark:text-orange-300">
            চিকিৎসা দর্শন | Treatment Philosophy
          </h3>
          <div className="prose max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              আমাদের চিকিৎসা পদ্ধতি রোগীকেন্দ্রিক এবং প্রমাণ-ভিত্তিক। প্রতিটি রোগীর জন্য
              ব্যক���তিগতকৃত চিকিৎসা পরিকল্পনা প্রণয়ন করা হয় যা আন্তর্জাতিক গাইডলাইন অনুসরণ করে।
            </p>
            <p className="mb-4">
              Our treatment approach is patient-centered and evidence-based. We develop personalized
              treatment plans for each patient following international guidelines and best practices
              in hepatology and gastroenterology.
            </p>
          </div>
        </div>

        <Services />
      </div>
    </div>
  )
}
