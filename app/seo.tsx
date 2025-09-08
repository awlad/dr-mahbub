import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    keywords: siteMetadata.keywords,
    alternates: {
      canonical: './',
      languages: {
        'bn-BD': `${siteMetadata.siteUrl}/bn`,
        'en-US': `${siteMetadata.siteUrl}/en`,
      },
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'bn_BD',
      type: 'website',
      phoneNumbers: siteMetadata.chambers
        .map((chamber) => chamber.phone)
        .flat()
        .join(', '),
      emails: [siteMetadata.email?.replace('mailto:', '')],
      countryName: 'Bangladesh',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    other: {
      'geo.region': 'BD-13', // Dhaka region code
      'geo.placename': 'Dhaka',
      'geo.position': '23.8103;90.4125', // Dhaka coordinates
      ICBM: '23.8103, 90.4125',
      'revisit-after': '7 days',
      'msapplication-TileColor': '#2b5797',
      'theme-color': '#ffffff',
      'format-detection': 'telephone=yes',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    ...rest,
  }
}
