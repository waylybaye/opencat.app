import path from 'node:path'
import process from 'node:process'
import { readFile } from 'node:fs/promises'
import { redirect } from 'next/navigation'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import type { Locale } from '@/utils/i18n-config'
import { Container } from '@/components/Container'

export default async function Document({ params: { lang, slug } }: { params: {
  lang: Locale
  slug: string
} }) {
  if (slug === 'help')
    redirect(`/${lang}/doc`)
  const docPath = path.join(process.cwd(), `content/docs/${lang}/${slug}.md`)
  const docFile = await readFile(docPath, 'utf-8')
  const { content } = matter(docFile)

  return (
    <>
      <Container>
        <Markdown className="prose w-full">{content}</Markdown>
      </Container>
    </>
  )
}
