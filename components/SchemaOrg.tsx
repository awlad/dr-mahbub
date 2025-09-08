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
        ],
        // Add detailed health services offered
        availableService: siteMetadata.services.items.map((service) => ({
          '@type': 'MedicalProcedure',
          name: service.name,
          description: service.description,
        })),
        // Add workplaces
        workLocation: siteMetadata.chambers.map((chamber) => ({
          '@type': 'MedicalClinic',
          name: chamber.name,
          address: {
            '@type': 'PostalAddress',
            streetAddress: chamber.address,
            addressLocality: chamber.location.split(' ')[0],
            addressRegion: 'Dhaka',
            addressCountry: 'Bangladesh',
          },
          telephone: chamber.phone,
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: chamber.location.includes('Rangpur')
              ? ['Friday', 'Saturday']
              : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: chamber.location.includes('Rangpur') ? '11:00' : '17:00',
            closes: chamber.location.includes('Rangpur') ? '22:00' : '21:00',
          },
        })),
        // Add expertise in treating medical conditions
        recognizingAuthority: [
          {
            '@type': 'Organization',
            name: 'American Gastroenterological Association',
          },
          {
            '@type': 'Organization',
            name: 'Bangladesh Medical and Dental Council',
          },
        ],
      }

      // Add local business schema for both chambers
      const localBusinessSchemas = siteMetadata.chambers.map((chamber) => ({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: `${siteMetadata.author} - ${chamber.name}`,
        image: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        '@id': `${siteMetadata.siteUrl}#${chamber.location.toLowerCase().replace(/\s+/g, '-')}`,
        url: `${siteMetadata.siteUrl}/chambers`,
        telephone: chamber.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: chamber.address,
          addressLocality: chamber.location.split(' ')[0],
          addressRegion: 'Dhaka',
          addressCountry: 'Bangladesh',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: chamber.location.includes('Rangpur') ? '25.7439' : '23.8103',
          longitude: chamber.location.includes('Rangpur') ? '89.2752' : '90.4125',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: chamber.location.includes('Rangpur')
            ? ['Friday', 'Saturday']
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: chamber.location.includes('Rangpur') ? '11:00' : '17:00',
          closes: chamber.location.includes('Rangpur') ? '22:00' : '21:00',
        },
        priceRange: '৳৳',
        servesCuisine: 'Medical Services',
      }))

      // Add WebSite schema
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteMetadata.siteUrl}#website`,
        url: siteMetadata.siteUrl,
        name: siteMetadata.title,
        description: siteMetadata.description,
        publisher: {
          '@type': 'Person',
          name: siteMetadata.author,
        },
        inLanguage: 'bn-BD',
      }

      // Create breadcrumb schema for navigation structure
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteMetadata.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'চেম্বার',
            item: `${siteMetadata.siteUrl}/chambers`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'সেবা সমূহ',
            item: `${siteMetadata.siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'সি��িয়াল',
            item: `${siteMetadata.siteUrl}/appointment`,
          },
        ],
      }

      // Add all schemas to the page
      const allSchemas = [physicianSchema, ...localBusinessSchemas, websiteSchema, breadcrumbSchema]

      // Add the schema to the head
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(allSchemas)
      document.head.appendChild(script)

      return () => {
        // Clean up
        if (script.parentNode) {
          document.head.removeChild(script)
        }
      }
    }
  }, [])

  return null
}
