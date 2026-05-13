import siteMetadata from '@/data/siteMetadata'
import { services } from '@/data/siteMetadata'

// Mirpur-specific coordinates for Popular Diagnostic Centre
const MIRPUR_LAT = '23.8239'
const MIRPUR_LNG = '90.3658'
const RANGPUR_LAT = '25.7439'
const RANGPUR_LNG = '89.2752'

export default function SchemaOrg() {
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${siteMetadata.siteUrl}#physician`,
    name: siteMetadata.author,
    image: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    telephone: siteMetadata.chambers[0].phone,
    email: siteMetadata.email?.replace('mailto:', ''),
    jobTitle: 'Professor, Hepatologist & Gastroenterologist',
    medicalSpecialty: [
      { '@type': 'MedicalSpecialty', name: 'Hepatology' },
      { '@type': 'MedicalSpecialty', name: 'Gastroenterology' },
      { '@type': 'MedicalSpecialty', name: 'Liver Medicine' },
    ],
    knowsAbout: [
      'Jaundice Treatment',
      'Fatty Liver Treatment',
      'Hepatitis Treatment',
      'Liver Cirrhosis',
      'Liver Cancer',
      'Endoscopy',
      'Colonoscopy',
      'Gastroenterology',
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'IPGMR (P.G. Hospital)' },
      { '@type': 'CollegeOrUniversity', name: 'BSMMU (Bangladesh Medical University)' },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Sir Salimullah Medical College & Hospital (MITFORD)',
      },
    ],
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
        recognizedBy: { '@type': 'Organization', name: 'BSMMU (Bangladesh Medical University)' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'membership',
        name: 'MAGA (Member of American Gastroenterological Association)',
      },
    ],
    availableService: services.items.map((service) => ({
      '@type': 'MedicalProcedure',
      name: service.name,
      description: service.description,
    })),
    workLocation: siteMetadata.chambers.map((chamber) => ({
      '@type': 'MedicalClinic',
      name: chamber.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: chamber.address,
        addressLocality: chamber.location.includes('Rangpur') ? 'Rangpur' : 'Mirpur, Dhaka',
        addressRegion: chamber.location.includes('Rangpur') ? 'Rangpur' : 'Dhaka',
        addressCountry: 'BD',
        postalCode: chamber.location.includes('Rangpur') ? '5400' : '1216',
      },
      telephone: chamber.phone,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: chamber.location.includes('Rangpur') ? RANGPUR_LAT : MIRPUR_LAT,
        longitude: chamber.location.includes('Rangpur') ? RANGPUR_LNG : MIRPUR_LNG,
      },
    })),
    recognizingAuthority: [
      { '@type': 'Organization', name: 'American Gastroenterological Association' },
      { '@type': 'Organization', name: 'Bangladesh Medical and Dental Council' },
    ],
  }

  // LocalBusiness schema for each chamber — critical for local/map searches
  const localBusinessSchemas = siteMetadata.chambers.map((chamber) => {
    const isMirpur = !chamber.location.includes('Rangpur')
    return {
      '@context': 'https://schema.org',
      '@type': ['MedicalBusiness', 'LocalBusiness'],
      '@id': `${siteMetadata.siteUrl}#${isMirpur ? 'mirpur-chamber' : 'rangpur-chamber'}`,
      name: isMirpur
        ? 'Dr. Muhammad Mahbub Hussain — Hepatologist at Popular Diagnostic Centre Mirpur'
        : 'Dr. Muhammad Mahbub Hussain — Hepatologist at Popular Diagnostic Centre Rangpur',
      image: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      url: siteMetadata.siteUrl,
      telephone: chamber.phone,
      description: isMirpur
        ? 'Best Hepatologist in Mirpur Dhaka. Prof. Dr. Muhammad Mahbub Hussain provides expert Liver Medicine, Gastroenterology, Jaundice, Hepatitis, Fatty Liver, Liver Cirrhosis, Endoscopy & Colonoscopy treatment at Popular Diagnostic Centre, Section-6, Mirpur, Dhaka.'
        : 'Hepatologist & Gastroenterologist in Rangpur. Prof. Dr. Muhammad Mahbub Hussain provides expert Liver Medicine and Gastroenterology treatment at Popular Diagnostic Centre, Rangpur.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: chamber.address,
        addressLocality: isMirpur ? 'Mirpur' : 'Rangpur',
        addressRegion: isMirpur ? 'Dhaka' : 'Rangpur',
        postalCode: isMirpur ? '1216' : '5400',
        addressCountry: 'BD',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: isMirpur ? MIRPUR_LAT : RANGPUR_LAT,
        longitude: isMirpur ? MIRPUR_LNG : RANGPUR_LNG,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: isMirpur
          ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
          : ['Friday', 'Saturday'],
        opens: isMirpur ? '17:00' : '11:00',
        closes: isMirpur ? '21:00' : '22:00',
      },
      priceRange: '৳৳',
      currenciesAccepted: 'BDT',
      paymentAccepted: 'Cash',
      areaServed: isMirpur
        ? ['Mirpur', 'Pallabi', 'Kafrul', 'Dhaka', 'Bangladesh']
        : ['Rangpur', 'Bangladesh'],
      hasMap: chamber.googleMapsEmbedUrl,
      medicalSpecialty: ['Hepatology', 'Gastroenterology', 'Liver Medicine'],
    }
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best Hepatologist in Mirpur Dhaka?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prof. Dr. Muhammad Mahbub Hussain is one of the best Hepatologists in Mirpur, Dhaka. He practices at Popular Diagnostic Centre, Section-6, Mirpur (Original-10), Pallabi, Dhaka-1216. He specializes in Liver Medicine, Gastroenterology, Hepatitis, Fatty Liver, Liver Cirrhosis, and Endoscopy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the appointment number for the Hepatologist in Mirpur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To book an appointment with Dr. Muhammad Mahbub Hussain at Popular Diagnostic Centre, Mirpur, call: 09666787807 or 09613787807. Chamber hours: Sunday to Thursday, 5 PM – 9 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'What liver diseases does Dr. Mahbub Hussain treat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dr. Muhammad Mahbub Hussain treats all liver diseases including Jaundice, Hepatitis A/B/C/D/E, Fatty Liver, Liver Cirrhosis, Liver Abscess, Liver Cancer, Liver Tumor, Pediatric Liver Disease, Wilson's Disease, Gilbert's Syndrome, and performs Endoscopy, Colonoscopy, and Ascitic Fluid Drainage.",
        },
      },
      {
        '@type': 'Question',
        name: "Where is Dr. Mahbub Hussain's chamber in Dhaka?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dr. Muhammad Mahbub Hussain's Dhaka chamber is located at Popular Diagnostic Centre Ltd., Mirpur (Unit 1), House #67, Avenue #5, Block C, Section-6, Mirpur (Original-10), Pallabi, Dhaka-1216, Bangladesh.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is Dr. Mahbub Hussain available in Mirpur on weekends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Mirpur chamber (Popular Diagnostic Centre) is open Sunday to Thursday, 5 PM to 9 PM. For weekend consultations in Rangpur, he is available Friday and Saturday, 11 AM to 10 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Hepatology and what does a Hepatologist treat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hepatology is the branch of medicine that deals with the liver, gallbladder, biliary tree, and pancreas. A Hepatologist treats conditions like jaundice, hepatitis, fatty liver, liver cirrhosis, liver cancer, gallstones, and performs procedures like endoscopy and colonoscopy.',
        },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMetadata.siteUrl}#website`,
    url: siteMetadata.siteUrl,
    name: siteMetadata.title,
    description: siteMetadata.description,
    publisher: {
      '@type': 'Person',
      '@id': `${siteMetadata.siteUrl}#physician`,
      name: siteMetadata.author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteMetadata.siteUrl}?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en-US', 'bn-BD'],
  }

  const allSchemas = [physicianSchema, ...localBusinessSchemas, faqSchema, websiteSchema]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  )
}
