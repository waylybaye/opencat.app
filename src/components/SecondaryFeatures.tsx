import { Container } from '@/components/Container'

export function SecondaryFeatures({ parmas }: { parmas: {
  secondaryFeature: {
    title: string
    subtitle: string
    content: {
      name: string
      description: string
      icon: string
    }[]
  }
} }) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {parmas.secondaryFeature.title}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {parmas.secondaryFeature.subtitle}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {parmas.secondaryFeature.content.map(feature => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <span className={`text-2xl ${feature.icon === 'keyboard' ? 'i-mingcute-keyboard-fill' : feature.icon === 'apple' ? 'i-mingcute-apple-fill' : feature.icon === 'briefcase' ? 'i-mingcute-briefcase-fill' : feature.icon === 'markdown' ? 'i-mingcute-markdown-fill' : feature.icon === 'bling' ? 'i-mingcute-bling-fill' : feature.icon === 'openai' ? 'i-mingcute-openai-fill' : ''}`}></span>
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
