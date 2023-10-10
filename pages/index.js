import Head from 'next/head'
import { Card } from '../components/Card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#343541] dark:text-white">
      <Head>
        <meta name="apple-itunes-app" content="app-id=6445999201, app-argument=OpenCat is a native AI chat client, offering a smoother and faster chat experience." />
        <title>OpenCat - Native iOS/macOS/iPadOS client for OpenAI/ChatGPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-20 flex flex-col gap-10 items-center md:max-w-3xl m-auto">
        
        <img src="/img/opencat.png" className="w-32 h-32" />
        
        <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          Welcome to OpenCat
        </h1>
        
        <p className="leading-2 text-2xl text-center text-gray-500">
          Available on iOS, iPadOS, macOS.<br />
          Download at <a className="text-blue-500 underline" href="https://apps.apple.com/app/opencat/id6445999201" target="_blank"> App Store</a>
        </p>
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 px-8">
          <Card title="帮助文档" description="查看 OpenCat 的帮助文档" link="/docs/zh-CN/help" />
          <Card title="OpenAI API" description="Create your API Key on OpenAI Platform to use our app." link="https://platform.openai.com/account/api-keys" />
          <Card title="Privacy Policy" description="We don't collect any private data. We only collect" link="/privacy" />
        </div>
      </main>

      <footer className="flex justify-center items-center w-full h-[100px] border-t border-gray-300 dark:border-gray-700">
        Copyright 2023, All rights reserved.
      </footer>
    </div>
  )
}
