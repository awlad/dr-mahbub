/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Professor Dr. Muhammad Mahbub Hussain - Hepatologist & Gastroenterologist in Dhaka',
  author: 'Professor Dr. Muhammad Mahbub Hussain',
  headerTitle: 'Dr. M. Mahbub Hussain',
  description:
    'Professor Dr. Muhammad Mahbub Hussain is a leading Hepatologist (Liver Medicine & Gastroenterology) Specialist in Dhaka. For appointments, call 09611530530.',
  language: 'en-US',
  theme: 'light', // system, dark or light
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
  phone: '09611530530',
  address:
    'Popular Diagnostic Centre Ltd. | Mirpur (Unit 1), House # 67, Avenue # 5, Block # C, Section-6 Mirpur, (Original-10),Pallabi, Dhaka, Dhaka-1216, Bangladesh',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Popular%20Diagnostic%20Centre%20Ltd.%2C%20Mirpur&t=&z=15&ie=UTF8&iwloc=&output=embed',
  specialization: 'Hepatologist (Liver Medicine & Gastroenterology)',
  qualifications: 'MBBS, FCPS (Medicine), MD (Internal Medicine), FACP (USA), FRCP (UK)',
  experience:
    'Founder & former Head of the Department of Rangpur Medical College Hospital. Proud M.B.B.S. student of IPGMR (P.G. Hospital) of second batch. Joined government service from 10th BCS. Achieved M.D. (Hepatology) Degree from B.S.M.M.U. (P.G. hospital) & completed FCPS part one to training from Sir Salimullah Medical College & Mitford Hospital, Dhaka.',
  keywords: [
    'Hepatologist in Dhaka',
    'Gastroenterologist in Dhaka',
    'Liver Specialist in Dhaka',
    'Jaundice',
    'Hepatitis A, B, C, E',
    'HBsAg',
    'Chronic Liver Disease (CLD)',
    'Liver Cirrhosis',
    'Liver Abscess',
    'Fatty Liver',
    "Gilbert's Syndrome",
    "Wilson's Disease",
    'Liver Tumor',
    'Liver Cancer',
    'Hematemesis and Melaena',
    'Irritable Bowel Syndrome (IBS)',
    'Piles',
    'Pancreatitis',
    'Gallstone Disease',
    'Endoscopy',
    'Colonoscopy',
    'Endoscopic Band Ligation (EBL)',
  ],
}

export const qualifications = [
  { title: 'MBBS', description: 'Bachelor of Medicine, Bachelor of Surgery' },
  { title: 'FCPS (Medicine)', description: 'Fellowship of the College of Physicians and Surgeons' },
  { title: 'MD (Internal Medicine)', description: 'Doctor of Medicine in Internal Medicine' },
  { title: 'FACP (USA)', description: 'Fellow of the American College of Physicians' },
  { title: 'FRCP (UK)', description: 'Fellow of the Royal College of Physicians' },
  {
    title: 'MD (Hepatology)',
    description: 'Doctor of Medicine in Hepatology from B.S.M.M.U. (P.G. hospital)',
  },
]

export const achievements = [
  {
    title: 'Founder & former Head of the Department of Rangpur Medical College Hospital',
    year: '',
    description: '',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'M.B.B.S. student of IPGMR (P.G. Hospital) of second batch',
    year: '',
    description: '',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'Joined government service from 10th BCS',
    year: '',
    description: '',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'Completed FCPS part to training from Sir Salimullah Medical College & Mitford Hospital, Dhaka',
    year: '',
    description: '',
    image: '/static/images/achievements/1.jpg',
  },
]

export const services = {
  header: 'যে সমস্ত রোগের জন্য পরামর্শ দেয়া হয়',
  items: [
    'জন্ডিস (Jaundice)',
    'হেপাটাইটিস এ বি সি এবং ই',
    'HBsAg পরীক্ষা এবং টিকা',
    'ক্রনিক লিভার ডিজিজ (CLD)',
    'লিভার সিরোসিস',
    'লিভার অ্যাবসেস',
    'ফ্যাটি লিভার (Fatty Liver)',
    'শিশুদের নানা ধরনের লিভারের রোগ',
    'গিলবার্ট  সিনড্রোম',
    'উইলসনস  ডিজিজ',
    'লিভার টিউমার',
    'সিস্ট ও হেমাঞ্জিওমা',
    'লিভার ক্যান্সার',
    'রক্ত বমি ও কালো পায়খানা (Hematemesis and Melaena)',
    'দীর্ঘ মেয়াদী আমাশা ও ডায়রিয়া',
    'ইরিটেবল বাওল সিনড্রোম (Irritable Bowel Syndrome- IBS)',
    'পায়খানার দ্বার দিয়ে রক্ত পড়া ও পাইলস',
    'পেট ব্যথা ও পেটের পীড়া',
    'প্যানক্রিয়েটাইটিস',
    'পিত্তথলি পাথর (গলস্টোন ডিজিজ)',
    'পিত্তনালীতে পাথর',
    'ইন্টারভেনশনাল  প্রসিডিউর সমূহ',
    'এনডোস্কোপি (Endoscopy)',
    'কোলোনোস্কপি (Colonoscopy)',
    'এন্ডোস্কপিক ব্যান্ড লিগেশন (EBL)',
    'বিনা অপারেশনে পেটের পানি অপসারণ (Ascitic Fluid Study)',
  ],
}

export const headerNavLinks = [
  { title: 'সিরিয়াল', path: '#book-appointment', isModalTrigger: true },
  { title: 'চেম্বার', path: '/#chamber' },
  { title: 'About Me', path: '/#about-me' },
  { title: 'Blogs', path: '/blog' },
]

export default siteMetadata