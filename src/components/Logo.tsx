import Image from 'next/image'
import Link from 'next/link'
import OpenCatLogo from '@/images/meta/opencat.png'
import TitleSvglight from '@/images/meta/logo-light.svg'

export function Logomark() {
  return (
    <Image src={OpenCatLogo} alt="OpenCat" width={40} height={40} />
  )
}

export function Logo({ type = 'home', params }: {
  type?: 'home' | 'doc'
  params: {
    doc: string
  }
}) {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/">
        <Logomark />
      </Link>
      { type === 'home'
        ? (
          <Link href="/">
            <Image src={TitleSvglight} alt="OpenCat" height={16} />
          </Link>
          )
        : (
          <Link href="/doc">
            <span>{params.doc}</span>
          </Link>
          )}
    </div>
  )
}
