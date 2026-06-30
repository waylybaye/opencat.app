import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// 文档集合：content/docs/{lang}/{slug}.md，条目 id 形如 "en/azure-tts"、"zh-Hans/faq"。
// 取代旧站「webpack 把 .md 打成字符串 + markdown-content.ts 手工登记」的方案，
// 由 Content Layer 在构建期统一加载并解析 frontmatter。
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/docs' }),
  // title 设为可选：macos-keyboard.md 没有 frontmatter，且页面并不消费 title（仅渲染正文）。
  schema: z.object({
    title: z.string().optional(),
  }),
})

// 隐私政策集合：content/privacy/{lang}.md，条目 id 形如 "en"、"zh-Hans"。
const privacy = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/privacy' }),
  schema: z.object({
    title: z.string().optional(),
    // frontmatter 里 lastUpdated 是无引号 YAML 日期，会被解析为 Date。
    lastUpdated: z.coerce.date().optional(),
  }),
})

export const collections = { docs, privacy }
