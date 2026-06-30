import Image from '@/components/Image'
import OpenCatLogo from '@/images/meta/opencat.png'
import TitleSvglight from '@/images/meta/logo-light.svg'

export function Logomark() {
  return (
    <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-[23.5%]">
      <Image
        src={OpenCatLogo}
        alt="OpenCat"
        width={40}
        height={40}
        className="h-full w-full"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[23.5%] ring-1 ring-inset ring-black/10"
      />
    </span>
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
      <a href="/">
        <Logomark />
      </a>
      { type === 'home'
        ? (
          <a href="/">
            <Image src={TitleSvglight} alt="OpenCat" height={16} />
          </a>
          )
        : (
          <a href="/doc">
            <span>{params.doc}</span>
          </a>
          )}
    </div>
  )
}
