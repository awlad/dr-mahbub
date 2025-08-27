/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Professor Dr. Muhammad Mahbub Hussain - Hepatologist & Gastroenterologist in Dhaka',
  author: 'Professor Dr. Muhammad Mahbub Hussain',
  headerTitle: 'Dr. M. Mahbub Hussain',
  description:
    'Professor Dr. Muhammad Mahbub Hussain is a leading Hepatologist and Gastroenterologist in Dhaka specializing in liver diseases, jaundice, hepatitis, fatty liver, gallstone, and advanced procedures like endoscopy and colonoscopy. For appointments, call 09611530530.',
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
  chambers: [
    {
      location: 'Dhaka Chamber (Mirpur)',
      name: 'ঢাকা মিরপুর চেম্বার',
      phone: '09611530530',
      address:
        'Popular Diagnostic Centre Ltd. | Mirpur (Unit 1), House # 67, Avenue # 5, Block # C, Section-6 Mirpur, (Original-10),Pallabi, Dhaka, Dhaka-1216, Bangladesh',
      schedule: 'রবিবার - বৃহস্পতিবার: বিকাল ৫টা - রাত ৯টা',
      googleMapsEmbedUrl:
        'https://maps.google.com/maps?q=Popular%20Diagnostic%20Centre%20Ltd.%2C%20Mirpur&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    {
      location: 'Rangpur Chamber',
      name: 'রংপুর চেম্বার',
      phone: '09611530531',
      address: 'Popular Diagnostic Center, Rangpur',
      schedule: 'শুক্রবার ও শনিবার (সকাল ১১টা - রাত ১০টা)',
      googleMapsEmbedUrl:
        'https://maps.google.com/maps?q=Popular%20Diagnostic%20Center%2C%20Rangpur&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
  ],
  address:
    'Popular Diagnostic Centre Ltd. | Mirpur (Unit 1), House # 67, Avenue # 5, Block # C, Section-6 Mirpur, (Original-10),Pallabi, Dhaka, Dhaka-1216, Bangladesh',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Popular%20Diagnostic%20Centre%20Ltd.%2C%20Mirpur&t=&z=15&ie=UTF8&iwloc=&output=embed',
  specialization: 'Hepatologist (Liver Medicine & Gastroenterology)',
  qualifications: 'MBBS, MD (Hepatology),MAGA (Member of American Gastroenterological Association)',
  experience:
    'Founder & former Head of the Department of Rangpur Medical College Hospital. Proud M.B.B.S. student of IPGMR (P.G. Hospital) of second batch. Joined government service from 10th BCS. Achieved M.D. (Hepatology) Degree from B.S.M.M.U. (P.G. hospital) & completed FCPS second part training from Sir Salimullah Medical College & Hospital (MITFORD).',
  keywords: [
    'Hepatologist in Dhaka',
    'Gastroenterologist in Dhaka',
    'Liver Specialist in Dhaka',
    'Jaundice Treatment',
    'Hepatitis A, B, C, E Treatment',
    'HBsAg Test and Vaccination',
    'Chronic Liver Disease (CLD)',
    'Liver Cirrhosis Treatment',
    'Liver Abscess Treatment',
    'Fatty Liver Treatment',
    'Pediatric Liver Disease',
    "Gilbert's Syndrome",
    "Wilson's Disease",
    'Liver Tumor Treatment',
    'Liver Cyst Treatment',
    'Hemangioma Treatment',
    'Liver Cancer Treatment',
    'Hematemesis and Melaena Treatment',
    'Chronic Diarrhea Treatment',
    'Irritable Bowel Syndrome (IBS)',
    'Rectal Bleeding and Piles',
    'Abdominal Pain Treatment',
    'Pancreatitis Treatment',
    'Gallstone Disease Treatment',
    'Bile Duct Stone Treatment',
    'Endoscopy in Dhaka',
    'Colonoscopy in Dhaka',
    'Endoscopic Band Ligation (EBL)',
    'Ascitic Fluid Study',
    'Best Liver Doctor in Bangladesh',
    'Gastroenterology Clinic in Dhaka',
    'Liver Specialist in Rangpur',
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
    title:
      'Founder & former head of the Department of Hepatology of Rangpur Medical College & Hospital',
    year: '',
    description: '',
    image: '/static/images/achievements/1.jpg',
  },
  {
    title: 'M.B.B.S. student of IPGMR (P.G. Hospital) of second batch',
    year: '',
    description: '',
    image: '/static/images/achievements/2.jpeg',
  },
  {
    title:
      'Completed MD (Doctor of Medicine), Hepatology from Bangladesh Medical University (former P.G. Hospital).',
    year: '',
    description: '',
    image: '/static/images/achievements/3.jpeg',
  },
]

export const services = {
  header: 'যে সমস্ত রোগের জন্য পরামর্শ দেয়া হয়',
  items: [
    'জন্ডিস (Jaundice)',
    'এ, বি, সি, ডি এবং ই (A, B, C, D and E)',
    'HBsAg পরীক্ষা এবং টিকা',
    'ক্রনিক লিভার ডিজিজ (CLD)',
    'লিভার সিরোসিস (Liver Cirrhosis)',
    'লিভার অ্যাবসেস (Liver Abscess)',
    'ফ্যাটি লিভার (Fatty Liver)',
    'শিশুদের নানা ধরনের লিভারের রোগ (Pediatric Liver Disease)',
    'গিলবার্ট  সিনড্রোম (Gilbert’s Syndrome)',
    'উইলসনস  ডিজিজ (Wilson’s Disease)',
    'লিভার টিউমার (Liver Tumor)',
    'সিস্ট ও হেমাঞ্জিওমা (Cyst and Hemangioma)',
    'লিভার ক্যান্সার (Liver Cancer)',
    'রক্ত বমি ও কালো পায়খানা (Hematemesis and Melaena)',
    'দীর্ঘ মেয়াদী আমাশা ও ডায়রিয়া (Chronic Diarrhea)',
    'ইরিটেবল বাওল সিনড্রোম (Irritable Bowel Syndrome- IBS)',
    'পায়খানার দ্বার দিয়ে রক্ত পড়া ও পাইলস (Rectal Bleeding and Piles)',
    'পেট ব্যথা ও পেটের পীড়া (Abdominal Pain)',
    'প্যানক্রিয়েটাইটিস (Pancreatitis)',
    'পিত্তথলি পাথর (Gallstone Disease)',
    'পিত্তনালীতে পাথর (Bile Duct Stone)',
    'ইন্টারভেনশনাল  প্রসিডিউর সমূহ (Endoscopic Procedures)',
    'এনডোস্কোপি (Endoscopy)',
    'কোলোনোস্কপি (Colonoscopy)',
    'এন্ডোস্কপিক ব্যান্ড লিগেশন (EBL)',
    'বিনা অপারেশনে পেটের পানি অপসারণ (Ascitic Fluid Study)',
  ],
}

export const headerNavLinks = [
  { title: 'সিরিয়াল', path: '#book-appointment', isModalTrigger: true },
  { title: 'চেম্বার', path: '/#chamber' },
  { title: 'সেবা সমূহ', path: '/#services' },
  { title: 'About Me', path: '/#about-me' },
  // { title: 'Blogs', path: '/blog' },
]

export default siteMetadata