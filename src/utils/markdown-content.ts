import matter from 'gray-matter'
import type { Locale } from '@/utils/i18n-config'

// 文档与隐私内容在构建期被打包成字符串常量（见 next.config.js 的 .md 规则与
// markdown.d.ts 的类型声明），因此运行时无需读取文件系统，可直接在
// Cloudflare Workers 上渲染。新增文档时，在此登记对应的 import 即可。
import azureTtsEn from '#/docs/en/azure-tts.md'
import faqEn from '#/docs/en/faq.md'
import helpEn from '#/docs/en/help.md'
import macosKeyboardEn from '#/docs/en/macos-keyboard.md'
import opencatForTeamEn from '#/docs/en/opencat-for-team.md'

import azureTtsZh from '#/docs/zh-Hans/azure-tts.md'
import faqZh from '#/docs/zh-Hans/faq.md'
import helpZh from '#/docs/zh-Hans/help.md'
import macosKeyboardZh from '#/docs/zh-Hans/macos-keyboard.md'
import opencatForTeamZh from '#/docs/zh-Hans/opencat-for-team.md'

import privacyEn from '#/privacy/en.md'
import privacyZh from '#/privacy/zh-Hans.md'

// 每种语言下「文档 slug → markdown 原文」的映射。
const docsByLocale: Record<Locale, Record<string, string>> = {
  'en': {
    'azure-tts': azureTtsEn,
    'faq': faqEn,
    'help': helpEn,
    'macos-keyboard': macosKeyboardEn,
    'opencat-for-team': opencatForTeamEn,
  },
  'zh-Hans': {
    'azure-tts': azureTtsZh,
    'faq': faqZh,
    'help': helpZh,
    'macos-keyboard': macosKeyboardZh,
    'opencat-for-team': opencatForTeamZh,
  },
}

// 每种语言对应的隐私政策 markdown 原文。
const privacyByLocale: Record<Locale, string> = {
  'en': privacyEn,
  'zh-Hans': privacyZh,
}

/** 返回某语言下所有可用的文档 slug，用于 generateStaticParams。 */
export function getDocSlugs(locale: Locale): string[] {
  return Object.keys(docsByLocale[locale] ?? {})
}

/** 返回指定文档去除 frontmatter 后的正文；slug 不存在时返回 null。 */
export function getDocContent(locale: Locale, slug: string): string | null {
  const raw = docsByLocale[locale]?.[slug]
  if (raw === undefined)
    return null
  return matter(raw).content
}

/** 返回指定语言隐私政策去除 frontmatter 后的正文。 */
export function getPrivacyContent(locale: Locale): string {
  return matter(privacyByLocale[locale] ?? privacyByLocale.en).content
}
