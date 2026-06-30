import { AppScreen } from '@/components/AppScreen'
import Image from '@/components/Image'
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
