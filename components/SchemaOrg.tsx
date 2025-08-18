'use client'

import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function SchemaOrg() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const schema = {
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
        telephone: siteMetadata.phone,
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
        workLocation: siteMetadata.chambers.map((chamber) => ({
          '@type': 'MedicalClinic',
          name: chamber.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: chamber.location,
            addressRegion: 'Bangladesh',
            streetAddress: chamber.address,
          },
          telephone: chamber.phone,
          openingHours: chamber.schedule,
        })),
        sameAs: [siteMetadata.facebook, siteMetadata.linkedin, siteMetadata.twitter].filter(
          Boolean
        ), // Only include non-empty social profiles
      }

      // Add the schema to the page
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        // Clean up on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [])

  // This component doesn't render anything visually
  return null
}
