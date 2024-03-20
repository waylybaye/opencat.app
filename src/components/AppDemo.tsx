import Image from 'next/image'
import { AppScreen } from '@/components/AppScreen'
import MainUiPic from '@/images/meta/main-ui.jpeg'

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <Image src={MainUiPic} alt="Main UI" />
      </AppScreen.Body>
    </AppScreen>
  )
}
