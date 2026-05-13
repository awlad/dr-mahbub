import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  canonicalPath?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  canonicalPath,
  ...rest
}: PageSEOProps): Metadata {
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '')
  const canonical = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl

  return {
    title,
    description: description || siteMetadata.description,
    keywords: siteMetadata.keywords,
    alternates: {
      canonical,
      languages: {
        'bn-BD': `${siteUrl}/bn`,
        'en-US': `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: `${title} | ${siteMetadata.author}`,
      description: description || siteMetadata.description,
      url: canonical,
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
      title: `${title} | ${siteMetadata.author}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    other: {
      'geo.region': 'BD-13',
      'geo.placename': 'Mirpur, Dhaka, Bangladesh',
      'geo.position': '23.8239;90.3658',
      ICBM: '23.8239, 90.3658',
      'revisit-after': '7 days',
      'msapplication-TileColor': '#2b5797',
      'theme-color': '#ffffff',
      'format-detection': 'telephone=yes',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
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
