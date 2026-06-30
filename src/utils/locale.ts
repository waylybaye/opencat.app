import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from '@/utils/i18n-config'

/**
 * 依据请求的 Accept-Language 头协商最合适的语言，回退到默认语言。
 * 对齐旧站 middleware 里的 negotiator + intl-localematcher 逻辑。
 */
export function detectLocale(request: Request): string {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })
  const languages = new Negotiator({ headers }).languages([...i18n.locales])
  return matchLocale(languages, [...i18n.locales], i18n.defaultLocale)
}
