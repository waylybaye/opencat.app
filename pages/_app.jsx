import '../styles/globals.css'
import { Header } from '../components/Header'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Script id='theme'>
      {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          const themeToggle = document.querySelector('#theme-toggle');
          themeToggle.addEventListener('click', function () {
              document.documentElement.classList.toggle('dark');
              localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          });
      `}
    </Script>
    <Component {...pageProps} />
  </>
  )
}
