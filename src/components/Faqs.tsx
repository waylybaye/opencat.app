'use client'

import { Container } from '@/components/Container'
import { useEffect, useState } from 'react'

export function Faqs({ params }: { params: {
  faq: {
    title: string
    subtitle: string
    reach: string
    contact: string
    period: string
    content: {
      question: string
      answer: string
    }[][]
  }
} }) {
  const [contactEmail, setContactEmail] = useState('')

  useEffect(() => {
    // Generate email dynamically to prevent crawlers
    const generateEmail = () => {
      const user = 'support'
      const domain = 'dreamoon'
      const tld = 'ai'
      return `${user}@${domain}.${tld}`
    }
    setContactEmail(generateEmail())
  }, [])

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            {params.faq.title}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {params.faq.subtitle}
            <a
              href={`mailto:${contactEmail}`}
              className="text-gray-900 underline"
            >
              {params.faq.reach}
            </a>
            {params.faq.period}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {params.faq.content.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
