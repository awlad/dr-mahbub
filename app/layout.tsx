import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'

import siteMetadata, { services } from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Physician',
            name: siteMetadata.author,
            url: siteMetadata.siteUrl,
            image: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
            description: siteMetadata.description,
            medicalSpecialty: [
              {
                '@type': 'MedicalSpecialty',
                name: 'Hepatology',
              },
              {
                '@type': 'MedicalSpecialty',
                name: 'Gastroenterology',
              },
            ],
            availableService: services.items.map((service) => ({
              '@type': 'MedicalProcedure',
              name: service,
            })),
            telephone: siteMetadata.phone,
            email: siteMetadata.email?.replace('mailto:', ''),
            sameAs: [
              siteMetadata.facebook,
              siteMetadata.twitter,
              siteMetadata.linkedin,
              siteMetadata.youtube,
            ].filter(Boolean),
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                name: 'MBBS',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                name: 'MD (Hepatology)',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'professional',
                name: 'MAGA (Member of American Gastroenterological Association)',
              },
            ],
            workLocation: siteMetadata.chambers.map((chamber) => ({
              '@type': 'MedicalClinic',
              name: chamber.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: chamber.address,
                addressLocality: chamber.location.split(',')[0],
                addressRegion: 'Bangladesh',
              },
              telephone: chamber.phone,
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                description: chamber.schedule,
              },
            })),
          })}
        </script>
      </head>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
