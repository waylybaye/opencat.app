import { AppStoreLink } from '@/components/AppStoreLink'
import { MacAppLink } from '@/components/MacAppLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction({ params }: { params: {
  cta: {
    title: string
    subtitle: string
  }
} }) {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {params.cta.title}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {params.cta.subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <AppStoreLink color="white" />
            <MacAppLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
