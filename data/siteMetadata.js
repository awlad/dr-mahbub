/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Prof. Dr. Muhammad Mahbub Hussain – Hepatologist, Mirpur, Dhaka',
  author: 'Prof. Dr. Muhammad Mahbub Hussain',
  headerTitle: 'Dr. M. Mahbub Hussain',
  description:
    'Experienced Hepatologist (Liver Medicine & Gastroenterology) in Mirpur, Dhaka — Former Professor & Head, Rangpur Medical College Hospital. Call 09611-530530 to book an appointment.',
  language: 'en-US',
  theme: 'system', // system, dark or light
  siteUrl: 'https://your-site-domain.com', // IMPORTANT: Replace with your actual domain
  siteRepo: '', // Add your repository URL here if you have one
  siteLogo: '/static/images/doctor.jpg',
  socialBanner: '/static/images/social-card.png',
  email: 'mailto:your-email@example.com', // Add doctor's email
  github: '', // Add doctor's github profile
  x: '', // Add doctor's X profile
  facebook: '', // Add doctor's Facebook profile
  youtube: '', // Add doctor's YouTube channel
  linkedin: '', // Add doctor's LinkedIn profile
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
  phone: '+880171XXXXXX',
  address:
    'Popular Diagnostic Centre Ltd. (Unit 1), House # 67, Avenue # 5, Block C, Section-6, Pallabi, Mirpur, Dhaka-1216, Bangladesh',
  specialization: 'Hepatologist (Liver Medicine & Gastroenterology)',
  qualifications: 'MBBS, FCPS (Medicine), MD (Internal Medicine), FACP (USA), FRCP (UK)',
  experience:
    '25 years of experience, Former Professor & Head, Department of Hepatology, Rangpur Medical College Hospital',
}

export const qualifications = [
  { title: 'MBBS', description: 'Bachelor of Medicine, Bachelor of Surgery' },
  { title: 'FCPS (Medicine)', description: 'Fellowship of the College of Physicians and Surgeons' },
  { title: 'MD (Internal Medicine)', description: 'Doctor of Medicine in Internal Medicine' },
  { title: 'FACP (USA)', description: 'Fellow of the American College of Physicians' },
  { title: 'FRCP (UK)', description: 'Fellow of the Royal College of Physicians' },
]

export const achievements = [
  {
    title: 'Best Hepatologist Award 2022',
    year: '2022',
    description: 'Awarded for outstanding service in liver disease treatment.',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'Former Professor & Head, Hepatology Dept.',
    year: '2010-2020',
    description: 'Led the Hepatology department with excellence in education and research.',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'Published 20+ Research Papers',
    year: '',
    description: 'Contributed significant research in hepatology and gastroenterology.',
    image: '/static/images/achievements/1.jpg',
  },
]

export const headerNavLinks = [
  { title: 'Appointment', path: '#book-appointment', isModalTrigger: true },
  { title: 'Chamber', path: '/#chamber' },
  { title: 'Blogs', path: '/blog' },
]

export default siteMetadata
