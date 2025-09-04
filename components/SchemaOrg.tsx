'use client'

import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function SchemaOrg() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      // Main physician schema
      const physicianSchema = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: siteMetadata.author,
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
        telephone: siteMetadata.chambers[0].phone,
        email: siteMetadata.email?.replace('mailto:', ''),
        url: siteMetadata.siteUrl,
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'IPGMR (P.G. Hospital)',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'B.S.M.M.U. (P.G. hospital)',
          },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'Medical Doctorate',
            name: 'MBBS',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'Medical Doctorate',
            name: 'MD (Hepatology)',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'MAGA (Member of American Gastroenterological Association)',
          },
        ],
        sameAs: [siteMetadata.facebook, siteMetadata.linkedin, siteMetadata.twitter].filter(
          Boolean
        ),
      }

      // LocalBusiness schemas for each chamber
      const localBusinessSchemas = siteMetadata.chambers.map((chamber, index) => ({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': `${siteMetadata.siteUrl}#chamber${index + 1}`,
        name: `${siteMetadata.author} - ${chamber.name}`,
        description: `Hepatology and Gastroenterology consultation by Professor Dr. Muhammad Mahbub Hussain`,
        url: siteMetadata.siteUrl,
        telephone: chamber.phone,
        email: siteMetadata.email?.replace('mailto:', ''),
        address: {
          '@type': 'PostalAddress',
          streetAddress: chamber.address,
          addressLocality: chamber.location,
          addressCountry: 'Bangladesh',
        },
        geo: chamber.location.toLowerCase().includes('dhaka')
          ? {
              '@type': 'GeoCoordinates',
              latitude: '23.8103',
              longitude: '90.4125',
            }
          : {
              '@type': 'GeoCoordinates',
              latitude: '25.7439',
              longitude: '89.2752',
            },
        openingHours: [chamber.schedule],
        medicalSpecialty: ['Hepatology', 'Gastroenterology', 'Liver Disease Treatment'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Medical Services',
          itemListElement: siteMetadata.services?.items
            ? siteMetadata.services.items.map((service, idx) => ({
                '@type': 'MedicalProcedure',
                '@id': `${siteMetadata.siteUrl}#service${idx + 1}`,
                name: service.name,
                description: service.description,
                medicalSpecialty: 'Hepatology',
              }))
            : [],
        },
        physician: {
          '@type': 'Physician',
          name: siteMetadata.author,
          medicalSpecialty: ['Hepatology', 'Gastroenterology'],
        },
        priceRange: '$$',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1',
        },
      }))

      // Combine all schemas
      const allSchemas = [
        physicianSchema,
        ...localBusinessSchemas,
        // Add WebPage schema with sections
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${siteMetadata.siteUrl}#webpage`,
          url: siteMetadata.siteUrl,
          name: siteMetadata.title,
          description: siteMetadata.description,
          // Mark up main sections of the page
          mainContentOfPage: [
            {
              '@type': 'WebPageElement',
              '@id': `${siteMetadata.siteUrl}#about-me`,
              name: 'About Professor Dr. Muhammad Mahbub Hussain',
              isPartOf: {
                '@id': `${siteMetadata.siteUrl}#webpage`,
              },
            },
            {
              '@type': 'WebPageElement',
              '@id': `${siteMetadata.siteUrl}#services`,
              name: siteMetadata.services?.header || 'Services',
              isPartOf: {
                '@id': `${siteMetadata.siteUrl}#webpage`,
              },
            },
            {
              '@type': 'WebPageElement',
              '@id': `${siteMetadata.siteUrl}#chamber-section`,
              name: 'Chambers',
              isPartOf: {
                '@id': `${siteMetadata.siteUrl}#webpage`,
              },
            },
          ],
        },
      ]

      // Add schemas to the page
      allSchemas.forEach((schema, index) => {
        const script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('id', `schema-${index}`)
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
      })

      return () => {
        // Clean up on unmount
        allSchemas.forEach((_, index) => {
          const script = document.getElementById(`schema-${index}`)
          if (script && script.parentNode) {
            script.parentNode.removeChild(script)
          }
        })
      }
    }
  }, [])

  return null
}
