import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import HomePageClient from './home-page-client'

export const metadata: Metadata = {
  title:
    'Best Hepatologist in Mirpur Dhaka | Liver Medicine & Gastroenterology | Prof. Dr. Muhammad Mahbub Hussain',
  description:
    'Prof. Dr. Muhammad Mahbub Hussain — Best Hepatologist in Mirpur Dhaka. Expert Liver Medicine & Gastroenterology specialist at Popular Diagnostic Centre, Section-6, Mirpur (Original-10), Dhaka-1216. Treats Jaundice, Hepatitis, Fatty Liver, Liver Cirrhosis, Liver Cancer. Book appointment: 09666787807.',
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    title:
      'Best Hepatologist in Mirpur Dhaka | Liver Medicine & Gastroenterology | Prof. Dr. Muhammad Mahbub Hussain',
    description:
      'Prof. Dr. Muhammad Mahbub Hussain — Expert Hepatologist & Gastroenterologist at Popular Diagnostic Centre, Mirpur, Dhaka. Treats all liver diseases. Appointment: 09666787807.',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'bn_BD',
    type: 'website',
  },
  keywords: [
    'Best Hepatologist in Mirpur',
    'Hepatologist Mirpur Dhaka',
    'Liver Medicine Mirpur',
    'Gastroenterology Mirpur',
    'Popular Diagnostic Mirpur Hepatologist',
    'Best Hepatologist in Dhaka',
    'Liver Specialist Dhaka',
    'Hepatologist Bangladesh',
    'Dr Mahbub Hussain Hepatologist',
    'মিরপুর হেপাটোলজিস্ট',
    'লিভার বিশেষজ্ঞ মিরপুর',
  ],
}

export default function Home() {
  return <HomePageClient />
}
