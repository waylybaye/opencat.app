import { Header } from '@/components/Header'
import type { Locale } from '@/utils/i18n-config'
import { getDictionary } from '@/utils/get-dictionary'
import { Footer } from '@/components/Footer'

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}) {
  const dict = await getDictionary(lang)
  return (
    <>
      <Header type="doc" params={{ links: dict.links, button: dict.button, doc: dict.doc }} />
      <main className="flex-grow">{children}</main>
      <Footer params={{ footer: dict.footer, links: dict.links }} />
    </>
  )
}
