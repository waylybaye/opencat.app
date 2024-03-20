import path from 'node:path'
import process from 'node:process'
import { readFile } from 'node:fs/promises'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import type { Locale } from '@/utils/i18n-config'
import { Container } from '@/components/Container'

export default async function Document({ params: { lang } }: { params: {
  lang: Locale
} }) {
  const docPath = path.join(process.cwd(), `content/docs/${lang}/help.md`)
  const docFile = await readFile(docPath, 'utf-8')
  const { content } = matter(docFile)

  return (
    <>
      <Container className="prose break-words">
        <Markdown className="w-full">{content}</Markdown>
      </Container>
    </>
  )
}
