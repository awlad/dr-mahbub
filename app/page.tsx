import { languages } from '@/app/[locale]/i18n/locales'
import HomePageClient from './home-page-client'

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomePageClient locale={locale} />
}