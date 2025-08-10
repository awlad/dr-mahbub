import { useEffect, useState } from 'react'

// We keep a cache of dictionaries to avoid re-fetching
const dictionaries: { [key: string]: any } = {}

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale]) {
    dictionaries[locale] = await import(`../../../public/locales/${locale}/translation.json`).then(
      (module) => module.default
    )
  }
  return dictionaries[locale]
}

export const useTranslation = (locale: string) => {
  const [dictionary, setDictionary] = useState<any>(dictionaries[locale])

  useEffect(() => {
    if (!dictionary) {
      getDictionary(locale).then(setDictionary)
    }
  }, [locale, dictionary])

  const t = (key: string) => {
    return dictionary ? dictionary[key] : key
  }

  return { t }
}