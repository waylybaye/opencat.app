import Image from 'next/image'
import OpenCatLogo from '@/images/meta/opencat.png'
import TitleSvglight from '@/images/meta/logo-light.svg'

export function Logomark() {
  return (
    <Image src={OpenCatLogo} alt="OpenCat" width={40} height={40} />
  )
}

export function Logo() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Logomark />
      <Image src={TitleSvglight} alt="OpenCat" height={16} />
    </div>
  )
}
