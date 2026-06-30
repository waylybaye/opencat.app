import type { Locale } from '@/utils/i18n-config'

// 各语言字典在此登记，便于类型检查与 lint。
// 在 Astro 中页面于构建期（或 on-demand 请求期）运行，无需旧站的 'server-only' 守卫。
const dictionaries: Record<string, () => Promise<any>> = {
  'en': () => import('#/i18n/en.json').then(module => module.default),
  'zh-Hans': () => import('#/i18n/zh-Hans.json').then(module => module.default),
}

export async function getDictionary(locale: Locale) {
  return (dictionaries[locale] ?? dictionaries.en)()
}
