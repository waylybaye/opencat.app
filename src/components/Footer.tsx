import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/meta/qr-code.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer({ params }: { params: {
  footer: {
    title: string
    subtitle: string
    download: string
    cta: string
  }
  links: {
    name: string
    href: string
  }[]
} }) {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div className="w-full p-2">
            <div className="flex items-center text-gray-900">
              <Logomark />
              <div className="ml-4">
                <p className="text-base font-semibold">{params.footer.title}</p>
                <p className="mt-1 text-sm">{params.footer.subtitle}</p>
              </div>
            </div>
            <nav className="mt-11 w-11/12 grid grid-cols-3 lg:grid-cols-6 gap-8">
              <NavLinks params={{ links: params.links }} />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="qrCode" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="/#download">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  {params.footer.download}
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {params.footer.cta}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright
            {' '}
            {new Date().getFullYear()}
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
