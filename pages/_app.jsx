import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
