import '@/styles/globals.css'
import type { Metadata } from 'next'

import { type Locale, i18n } from '@/utils/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: {
    template: '%s - OpenCat',
    default: 'OpenCat - Native iOS/macOS/iPadOS client for OpenAI/ChatGPT',
  },
  description: 'OpenCat is a native AI client, offering a smoother and faster chat experience than the web.',
  itunes: {
    appId: '6445999201',
    appArgument: 'opencat://conversations?message=Hello',
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
      lang={params.lang}
      className="h-full bg-gray-50 antialiased font-sans scroll-smooth"
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
