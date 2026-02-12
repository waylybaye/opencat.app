import path from 'node:path'
import process from 'node:process'
import { readFile } from 'node:fs/promises'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import type { Locale } from '@/utils/i18n-config'
import { Container } from '@/components/Container'

export default async function Privacy({ params: { lang } }: { params: {
  lang: Locale
} }) {
  const filePath = path.join(process.cwd(), `content/privacy/${lang}.md`)
  const file = await readFile(filePath, 'utf-8')
  const { content } = matter(file)

  return (
    <Container className="py-16">
      <article className="prose prose-slate mx-auto max-w-3xl break-words prose-headings:scroll-mt-20 prose-h1:text-3xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-slate-900 prose-h2:mt-10 prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-8 prose-h2:text-xl prose-h2:font-semibold prose-h2:text-slate-800 prose-h3:mt-6 prose-h3:text-base prose-h3:font-medium prose-h3:text-slate-700 prose-p:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-slate-300 prose-blockquote:text-slate-500 prose-li:text-slate-600">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </article>
    </Container>
  )
}
