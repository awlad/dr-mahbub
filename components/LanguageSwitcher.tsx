'use client'

import { useRouter, usePathname, useParams } from 'next/navigation'
import { languages } from '@/app/[locale]/i18n/locales'

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);

    if (segments[0] === currentLocale) {
      segments.shift();
    }

    const newPath = `/${newLocale}/${segments.join('/')}`;

    if (segments.length === 0) {
      router.push(`/${newLocale}`);
    } else {
      router.push(newPath);
    }
  };

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentLocale === lang
              ? 'bg-cyan-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
