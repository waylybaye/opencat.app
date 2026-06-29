import { notFound, redirect } from 'next/navigation'
import Markdown from 'react-markdown'
import type { Locale } from '@/utils/i18n-config'
import { getDocContent } from '@/utils/markdown-content'
import { Container } from '@/components/Container'

// 文档内容已在构建期打包进 bundle（见 markdown-content.ts），运行时按需渲染即可，
// 无需读取文件系统，因此不依赖 generateStaticParams 预渲染。
// 这样可绕开 OpenNext 1.15.1 对「预渲染动态路由」serve 不稳定的问题。
export default async function Document({ params: { lang, slug } }: { params: {
  lang: Locale
  slug: string
} }) {
  if (slug === 'help')
    redirect(`/${lang}/doc`)

  const content = getDocContent(lang, slug)
  if (content === null)
    notFound()

  return (
    <Container className="py-16">
      <article className="prose prose-slate mx-auto max-w-3xl break-words prose-headings:scroll-mt-20 prose-h1:text-3xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-slate-900 prose-h2:mt-10 prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-8 prose-h2:text-xl prose-h2:font-semibold prose-h2:text-slate-800 prose-h3:mt-6 prose-h3:text-base prose-h3:font-medium prose-h3:text-slate-700 prose-p:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-slate-300 prose-blockquote:text-slate-500 prose-li:text-slate-600">
        <Markdown>{content}</Markdown>
      </article>
    </Container>
  )
}
