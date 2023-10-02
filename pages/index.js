import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#343541]">
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
          <a href="/docs/zh-CN/help" className="hover:text-blue-500 hover:border-blue-500 flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-gray-900">
            <h3 className="hover:text-blue-500 text-2xl font-bold mb-2">
              帮助文档
              <span className="arrow"> &rarr; </span>
            </h3>
            <p className="text-base">
            查看 OpenCat 的帮助文档
            </p>
          </a>
          <a href="https://platform.openai.com/account/api-keys" className="hover:text-blue-500 hover:border-blue-500 flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-gray-900">
            <h3 className="hover:text-blue-500 text-2xl font-bold mb-2">
              OpenAI API
              <span className="arrow"> &rarr; </span>
            </h3>
            <p className="text-base">
              Create your API Key on OpenAI Platform to use our app.
            </p>
          </a>
          <a href="/privacy" className="card hover:text-blue-500 hover:border-blue-500 flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-gray-900">
            <h3 className="text-2xl font-bold mb-2">
              Privacy Policy
              <span className="arrow"> &rarr; </span>
            </h3>
            <p className="text-base">
              We don't collect any private data. We only collect
            </p>
          </a>
        </div>
      </main>

      <footer className="flex justify-center items-center w-full h-[100px] border-t border-gray-300">
        Copyright 2023, All rights reserved.
      </footer>
    </div>
  )
}
