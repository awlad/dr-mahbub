# SEO Health Check for drmahbubhussain.com

## ✅ Completed (Code-Level Fixes)
- [x] Google Analytics configured (G-D64PKTW1XN)
- [x] DNS TXT record for Google Search Console
- [x] Robots.txt properly configured
- [x] Sitemap generated and optimized
- [x] **FIXED** — Structured data (Schema.org) now server-rendered (was broken `useEffect` client-side injection)
- [x] **FIXED** — FAQPage schema added with Mirpur/Hepatologist questions
- [x] **FIXED** — LocalBusiness schema with precise Mirpur GPS coordinates (23.8239, 90.3658)
- [x] **FIXED** — Home page metadata now has "Best Hepatologist in Mirpur Dhaka" title
- [x] **FIXED** — geo.placename updated to "Mirpur, Dhaka, Bangladesh"
- [x] **FIXED** — Canonical URLs changed from relative './' to absolute URLs
- [x] **FIXED** — 60+ targeted keywords added (Mirpur, Dhaka, Bangla terms)
- [x] **FIXED** — Hero image alt text updated with location keywords
- [x] **FIXED** — Appointment page now has SEO metadata
- [x] **FIXED** — FAQ section added to home page (visible + schema)
- [x] **FIXED** — Location badge chips showing Mirpur/Rangpur on hero section
- [x] Meta tags and OpenGraph data

---

## 🚨 MOST IMPORTANT — Do These First (Cannot Be Done via Code)

### 1. Google Business Profile ⭐⭐⭐ (Highest Priority)
This is the #1 reason "Hepatologist in Mirpur" doesn't show. Google Maps & local pack results come from Google Business Profile.
- [ ] Go to https://business.google.com
- [ ] Create profile for: **"Prof. Dr. Muhammad Mahbub Hussain — Hepatologist"**
- [ ] Address: Popular Diagnostic Centre, House 67, Avenue 5, Block C, Section-6, Mirpur-10, Pallabi, Dhaka-1216
- [ ] Category: **Gastroenterologist** (primary), add Hepatologist as secondary
- [ ] Phone: 09666787807
- [ ] Website: https://www.drmahbubhussain.com
- [ ] Hours: Sunday–Thursday 5PM–9PM
- [ ] Add 5+ photos (doctor photo, clinic, certificates)
- [ ] Ask satisfied patients to leave Google Reviews ⭐⭐⭐

### 2. Google Search Console
- [ ] Verify domain ownership at https://search.google.com/search-console
- [ ] Submit sitemap: https://www.drmahbubhussain.com/sitemap.xml
- [ ] Request indexing for: `/`, `/chambers`, `/services`, `/about`, `/appointment`
- [ ] Monitor "Coverage" report for indexing status
- [ ] Check "Search results" > filter by "Hepatologist" to see if impressions appear

### 3. Medical Directory Listings (Free Backlinks)
- [ ] Submit to Doctorola: https://www.doctorola.com
- [ ] Submit to Daktarbhai: https://www.daktarbhai.com
- [ ] Submit to Bangladesh Medical Association directory
- [ ] Submit to Popular Diagnostic Centre's doctor listing page
- [ ] These create authoritative backlinks and citation signals for local SEO

---

## 📝 Content Strategy (Next 2–4 Weeks)

### Enable Blog and Write These Articles
Set `blogEnabled: true` in `data/siteMetadata.js`, then create blog posts:
- [ ] "মিরপুরে সেরা হেপাটোলজিস্ট কোথায়?" (Best Hepatologist in Mirpur — Bangla)
- [ ] "ফ্যাটি লিভার কি ভালো হয়? লক্ষণ ও চিকিৎসা" (Fatty Liver Treatment Guide)
- [ ] "জন্ডিস হলে কী করবেন?" (What to do for Jaundice)
- [ ] "হেপাটাইটিস বি থেকে বাঁচার উপায়" (Preventing Hepatitis B)
- [ ] "Liver Cirrhosis: Signs, Stages and Treatment in Dhaka"
Each post should mention "Popular Diagnostic Centre, Mirpur" and "Hepatologist in Dhaka".

---

## 📊 Timeline Expectations
- **Week 1**: Deploy code fixes → Googlebot re-crawls improved structured data
- **Week 1**: Google Business Profile created → Appears in Maps within 3–5 days
- **Week 2**: Submit sitemap to Search Console, request indexing
- **Week 2–4**: Directory listings go live
- **Month 1–2**: Rankings improve for "Hepatologist Mirpur", "Liver Medicine Dhaka"
- **Month 2–4**: Blog content starts ranking for informational queries
- **Month 3–6**: Established local SEO presence for all target keywords

## 🔧 Technical
- [x] Mobile-friendly design
- [x] HTTPS (via Vercel)
- [x] Fast loading (Next.js SSR)
- [ ] Add social media profiles (Facebook page for the doctor/clinic) — fill in `siteMetadata.facebook`
