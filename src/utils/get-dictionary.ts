import 'server-only'
import type { Locale } from '@/utils/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: { [key: string]: () => Promise<any> } = {
  'en': () => import('#/i18n/en.json').then(module => module.default),
  'zh-Hans': () => import('#/i18n/zh-Hans.json').then(module => module.default),
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
