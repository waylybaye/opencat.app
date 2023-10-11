import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { IconChevronsDown, IconLink } from '@tabler/icons-react'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="OpenCat is a native AI chat client, offering a smoother and faster chat experience." />
        <meta name="apple-itunes-app" content="app-id=6445999201, app-argument=OpenCat is a native AI chat client, offering a smoother and faster chat experience." />
        <title>OpenCat - Native iOS/macOS/iPadOS client for OpenAI/ChatGPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[calc(100vh-4.5rem)] px-8 flex flex-col justify-center gap-14 items-center md:max-w-3xl m-auto">
        
        <div className='group flex gap-4 justify-center items-center'>
          <Image src="/img/opencat.png" alt='OpenCat' width={128} height={128} className="w-32 h-32" />
          <div className='hidden group-hover:flex flex-col gap-4 items-start'>
              <div className='flex justify-center items-center'>
                <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>OpenAI icon</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
                <div className='text-center ml-2'>
                    <span className="font-bold">OpenAI</span> API
                </div>
              </div> 
              <div className='flex justify-center items-center'>
                <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3702 13.6799L11.3702 1.67989C11.3006 1.47291 11.1652 1.29438 10.9846 1.17159C10.804 1.0488 10.5882 0.988513 10.3702 0.999896H5.63017C5.42052 0.999354 5.21598 1.0647 5.04551 1.18672C4.87504 1.30875 4.74724 1.48127 4.68015 1.67989L0.630165 13.6799C0.577646 13.8346 0.56382 13.9998 0.589943 14.1611C0.616066 14.3225 0.681335 14.4749 0.780007 14.6052C0.878678 14.7354 1.00778 14.8395 1.15598 14.9083C1.30419 14.9771 1.46699 15.0086 1.63017 14.9999H4.56016C4.76809 14.9984 4.97035 14.932 5.13883 14.8101C5.30731 14.6883 5.43363 14.5169 5.50016 14.3199L6.11015 12.5399L9.11015 14.8099C9.28448 14.9362 9.49495 15.0028 9.71018 14.9999H14.3902C14.5517 15.0052 14.7121 14.9712 14.8576 14.901C15.0032 14.8307 15.1295 14.7263 15.2259 14.5965C15.3222 14.4668 15.3856 14.3156 15.4107 14.156C15.4359 13.9963 15.422 13.833 15.3702 13.6799ZM9.75016 14.3399C9.67748 14.3399 9.60693 14.3153 9.55015 14.2699L3.90018 10.0799L3.81016 10.0099H6.81016L6.89017 9.79988L7.89017 7.26988L10.1302 13.8999C10.1482 13.9555 10.1515 14.0148 10.1399 14.072C10.1283 14.1293 10.1022 14.1826 10.064 14.2269C10.0258 14.2711 9.97689 14.3047 9.92191 14.3245C9.86694 14.3443 9.80778 14.3496 9.75016 14.3399V14.3399ZM14.4201 14.3399H10.7002C10.7749 14.1262 10.7749 13.8935 10.7002 13.6799L6.65018 1.67989H10.3702C10.4408 1.68024 10.5095 1.70258 10.5669 1.74379C10.6242 1.78501 10.6673 1.84308 10.6902 1.9099L14.7402 13.9099C14.7538 13.9597 14.756 14.012 14.7464 14.0628C14.7369 14.1136 14.7159 14.1615 14.6851 14.203C14.6542 14.2444 14.6144 14.2783 14.5685 14.302C14.5226 14.3257 14.4718 14.3387 14.4201 14.3399V14.3399Z"/></svg>
                <div className='text-center ml-2'>
                    <span className="font-bold">Azure OpenAI</span> API
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.54 2H9.09l4.46 12H16L11.54 2ZM4.46 2 0 14h2.5l.9-2.52h4.68L8.99 14h2.5L7.02 2H4.46Zm-.24 7.25 1.52-4.22 1.53 4.22H4.22Z"></path></svg>
                <div className='text-center ml-2'>
                    <span className="font-bold">Claude</span> API
                </div>
              </div>
          </div>
        </div>
       
        <div>
          <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            OpenCat
          </h1>
        
          <p className="text-xl text-center text-gray-600 dark:text-gray-400">
            A native AI chat client, offering a smoother and faster chat experience. 
          </p>
        </div> 
        
        <div>
          <a href="https://apps.apple.com/app/opencat/id6445999201" target="_blank">
            <button className="bg-black dark:bg-white text-center text-white dark:text-black rounded-2xl p-5 transition duration-500 ease-in-out transform hover:-translate-y-1">
              <span className='text-2xl'>Download at <span className="font-bold"> App Store</span></span><br />
              Available on iOS, iPadOS, macOS.<br />
            </button>
          </a>
          <div className="text-xs mt-4 text-gray-600 dark:text-gray-400">Requires iOS 16.0, iPadOS 16.0, macOS 13.0 or later.</div>
        </div>
        
        <IconChevronsDown className="animate-bounce w-10 h-10 mt-4 md:hidden" />
        
      </main>
      <aside className='py-10 md:max-w-3xl m-auto'>
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 px-8">
          <Card title="帮助文档" description="查看 OpenCat 的帮助文档" link="/docs/zh-CN/help" />
          <Card title="OpenAI API" description="Create your API Key on OpenAI Platform to use our app." link="https://platform.openai.com/account/api-keys" />
          <Card title="Privacy Policy" description="We don't collect any private data." link="/privacy" />
        </div>
      </aside>
    </div>
  )
}
