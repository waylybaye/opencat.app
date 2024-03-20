export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh-Hans'],
}

export type Locale = (typeof i18n)['locales'][number]
