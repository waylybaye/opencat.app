import Link from 'next/link'
import { Container } from '@/components/Container'

export function Resources({ params }: { params: {
  resource: {
    title: string
    subtitle: string
    content: {
      name: string
      description: string
      icon: string
      href: string
    }[]
  }
} }) {
  return (
    <section
      id="resources"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {params.resource.title}
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            {params.resource.subtitle}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {params.resource.content.map(item => (
            <Link href={item.href} key={item.name}>
              <li
                className="rounded-2xl border border-gray-800 p-8"
              >
                <span className={`text-2xl text-white ${item.icon === 'question' ? 'i-mingcute-question-fill' : item.icon === 'book' ? 'i-mingcute-book-2-fill' : item.icon === 'fingerprint' ? 'i-mingcute-fingerprint-fill' : ''}`}></span>
                <h3 className="mt-6 font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  )
}
