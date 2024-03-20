import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import PandaSmsPic from '@/images/meta/pandasms.png'
import ServerCatPic from '@/images/meta/servercat.png'
import DAMAPic from '@/images/meta/dama.png'

export function MoreByBaye({ params }: { params: {
  more: {
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
      id="more"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight ">
            {params.more.title}
          </h2>
          <p className="mt-2 text-lg text-gray-800">
            {params.more.subtitle}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {params.more.content.map(item => (
            <Link href={item.href} target="_blank" key={item.name}>
              <li
                className="rounded-2xl border border-gray-200 p-8"
              >
                <Image src={item.icon === 'pandasms' ? PandaSmsPic : item.icon === 'servercat' ? ServerCatPic : item.icon === 'dama' ? DAMAPic : ''} alt={item.name} width={50} height={50} />
                <h3 className="mt-6 font-semibold">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  )
}
