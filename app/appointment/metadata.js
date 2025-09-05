import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: `সিরিয়াল বুকিং | Liver Specialist Appointment | Hepatologist in Dhaka | ${siteMetadata.author}`,
  description:
    'অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন এর কাছে সিরিয়াল নিতে যোগাযোগ করুন। Book an appointment with Prof. Dr. Muhammad Mahbub Hussain for liver and gastroenterology consultation at Popular Diagnostic Centre in Dhaka Mirpur and Rangpur.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/appointment`,
    languages: {
      'en-US': `${siteMetadata.siteUrl}/appointment`,
      'bn-BD': `${siteMetadata.siteUrl}/appointment`,
    },
  },
  openGraph: {
    title: `সিরিয়াল বুকিং | Appointment Booking | ${siteMetadata.author}`,
    description:
      'লিভার ও পাকস্থলীর রোগের চিকিৎসার জন্য অধ্যাপক ডাক্তার মুহম্মদ মাহবুব হোসেন এর কাছে সিরিয়াল বুক করুন। Book an appointment for liver and gastroenterology consultation.',
    url: `${siteMetadata.siteUrl}/appointment`,
    siteName: siteMetadata.title,
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  keywords: [
    'সিরিয়াল বুকিং',
    'Appointment booking',
    'লিভার ডাক্তার অ্যাপয়েন্টমেন্ট',
    'Liver doctor appointment',
    'গ্যাস্ট্রোএন্টারোলজি সিরিয়াল',
    'Gastroenterology appointment',
    'ডাক্তার মাহবুব হোসেন সিরিয়াল',
    'Dr. Mahbub Hussain appointment',
    'পপুলার ডায়াগনস্টিক লিভার সিরিয়াল',
    'Popular Diagnostic liver appointment',
    'ঢাকা মিরপুর লিভার ডাক্তার',
    'Dhaka Mirpur liver doctor',
    'রংপুর হেপাটোলজিস্ট',
    'Rangpur hepatologist',
  ],
}
