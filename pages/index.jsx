import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { IconChevronsDown } from '@tabler/icons-react'

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
        
        <Image src="/img/opencat.png" alt='OpenCat' width={128} height={128} className="w-32 h-32" />
       
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
