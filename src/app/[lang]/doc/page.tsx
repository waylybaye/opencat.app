import Markdown from 'react-markdown'
import type { Locale } from '@/utils/i18n-config'
import { getDocContent } from '@/utils/markdown-content'
import { Container } from '@/components/Container'

export default async function Document({ params: { lang } }: { params: {
  lang: Locale
} }) {
  const content = getDocContent(lang, 'help') ?? ''

  return (
    <>
      <Container className="prose break-words">
        <Markdown className="w-full">{content}</Markdown>
      </Container>
    </>
  )
}
