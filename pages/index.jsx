import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { IconDevices, IconChevronsDown, IconLink, IconSparkles, IconRocket, IconBrandOpenai, IconKeyboard, IconMicrophone, IconCat, IconCloud, IconBook, IconBook2, IconFeather } from '@tabler/icons-react'
import { useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { twJoin } from 'tailwind-merge'
import { useEffect } from 'react'

export default function Home() {
  const [logoHovered, setLogoHovered] = useState(false)

  useEffect(() => window.addEventListener("scroll", () =>setLogoHovered(false), []))
  return (

    <div  >
      <Head>
        <meta name="description" content="OpenCat is a native AI chat client, offering a smoother and faster chat experience." />
        <meta name="apple-itunes-app" content="app-id=6445999201 app-argument=https://opencat.app/" />
        <title>OpenCat - Native iOS/macOS/iPadOS client for OpenAI/ChatGPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[calc(100vh-4.5rem)] px-8 flex flex-col justify-center gap-10 items-center md:max-w-3xl mx-auto">
        <div
          className='group flex gap-4 justify-center items-center w-[360px] h-32 relative'
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          onClick={() => {window.innerWidth < 768 ? setLogoHovered(!logoHovered) : null}}
          onBlur={() => setLogoHovered(false)}


        >
          <motion.div className={twJoin(['absolute transition-all', logoHovered ? 'left-0' : 'left-[116px]'])}>
            <Image src="/img/opencat.png" alt='OpenCat' width={128} height={128} className="w-32 h-32" priority />
          </motion.div>
          <AnimatePresence>
            {logoHovered && (
              <motion.div
                className='flex flex-col gap-4 items-start absolute left-[144px]'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
              >
                <div className='flex justify-center items-center'>
                  <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>
                  <div className='text-center ml-2 hidden md:block'>
                    <span className="font-bold">OpenAI</span> API
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                  <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.3702 13.6799L11.3702 1.67989C11.3006 1.47291 11.1652 1.29438 10.9846 1.17159C10.804 1.0488 10.5882 0.988513 10.3702 0.999896H5.63017C5.42052 0.999354 5.21598 1.0647 5.04551 1.18672C4.87504 1.30875 4.74724 1.48127 4.68015 1.67989L0.630165 13.6799C0.577646 13.8346 0.56382 13.9998 0.589943 14.1611C0.616066 14.3225 0.681335 14.4749 0.780007 14.6052C0.878678 14.7354 1.00778 14.8395 1.15598 14.9083C1.30419 14.9771 1.46699 15.0086 1.63017 14.9999H4.56016C4.76809 14.9984 4.97035 14.932 5.13883 14.8101C5.30731 14.6883 5.43363 14.5169 5.50016 14.3199L6.11015 12.5399L9.11015 14.8099C9.28448 14.9362 9.49495 15.0028 9.71018 14.9999H14.3902C14.5517 15.0052 14.7121 14.9712 14.8576 14.901C15.0032 14.8307 15.1295 14.7263 15.2259 14.5965C15.3222 14.4668 15.3856 14.3156 15.4107 14.156C15.4359 13.9963 15.422 13.833 15.3702 13.6799ZM9.75016 14.3399C9.67748 14.3399 9.60693 14.3153 9.55015 14.2699L3.90018 10.0799L3.81016 10.0099H6.81016L6.89017 9.79988L7.89017 7.26988L10.1302 13.8999C10.1482 13.9555 10.1515 14.0148 10.1399 14.072C10.1283 14.1293 10.1022 14.1826 10.064 14.2269C10.0258 14.2711 9.97689 14.3047 9.92191 14.3245C9.86694 14.3443 9.80778 14.3496 9.75016 14.3399V14.3399ZM14.4201 14.3399H10.7002C10.7749 14.1262 10.7749 13.8935 10.7002 13.6799L6.65018 1.67989H10.3702C10.4408 1.68024 10.5095 1.70258 10.5669 1.74379C10.6242 1.78501 10.6673 1.84308 10.6902 1.9099L14.7402 13.9099C14.7538 13.9597 14.756 14.012 14.7464 14.0628C14.7369 14.1136 14.7159 14.1615 14.6851 14.203C14.6542 14.2444 14.6144 14.2783 14.5685 14.302C14.5226 14.3257 14.4718 14.3387 14.4201 14.3399V14.3399Z" /></svg>
                  <div className='text-center ml-2 hidden md:block'>
                    <span className="font-bold">Azure OpenAI</span> API
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <IconLink className='w-6 h-6 mr-2 text-gray-600 dark:text-gray-400' />
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.54 2H9.09l4.46 12H16L11.54 2ZM4.46 2 0 14h2.5l.9-2.52h4.68L8.99 14h2.5L7.02 2H4.46Zm-.24 7.25 1.52-4.22 1.53 4.22H4.22Z"></path></svg>
                  <div className='text-center ml-2 hidden md:block'>
                    <span className="font-bold">Claude</span> API
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <div>
          <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-amber-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">
            OpenCat
          </h1>

          <p className="text-xl text-center text-gray-600 dark:text-gray-400">
            A native AI chat client, offering a smoother and faster chat experience
          </p>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='flex'>
            <a className='flex justify-center m-1' href="https://apps.apple.com/app/id6445999201" target="_blank">
              <button
                className="bg-black dark:bg-white text-center text-white dark:text-black rounded-2xl p-5 md:hover:-translate-y-1 transition duration-500 ease-in-out transform">
              <span className='text-xl flex items-center gap-2'>
                <svg className='inline' fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1.25rem"
                     height="1.25rem" viewBox="0 0 512 512"><path
                  d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89,c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965,C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175,c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947,c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144,c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522,c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023,C414.435,352.487,389.459,285.571,409.034,231.131z"></path></svg>
                <span className="font-bold">App Store</span>
              </span>
              </button>
            </a>

            <a className='flex justify-center m-1' href="/releases/OpenCat-1.7.1.333.dmg" target="_blank">
              <button
                className="bg-black dark:bg-white text-center text-white dark:text-black rounded-2xl p-5 md:hover:-translate-y-1 transition duration-500 ease-in-out transform">
                <span className='text-xl flex items-center gap-2'>Download for
                  <span className="font-bold">
                    macOS
                  </span>
                </span>
              </button>
            </a>
          </div>

          <div className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
            <IconDevices className='inline w-4 h-4 mr-1' />
            Available on iPhone, iPad, Mac<br />
            Requires iOS 16.0, iPadOS 16.0, macOS 13.0 or later
          </div>
        </div>

        <a href='#Next' aria-label='Read More'>
          <IconChevronsDown className="animate-bounce w-10 h-10 mt-4 md:hidden" />
        </a>
      </main>

      <div id='Next' className='invisible w-0 h-0'></div>

      <div className='px-8 py-6 md:max-w-3xl mx-auto flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <IconSparkles />
          <h2 id='Screenshots' className='text-lg font-bold'>Screenshots</h2>
        </div>
        <div className='snap-x snap-mandatory flex gap-6 overflow-x-auto'>
          <div className='snap-always snap-center flex-shrink-0'>
            <Image src={'/img/app/ios-1.webp'} alt='OpenCat' width={230} height={498} className="w-60 rounded-2xl" />
          </div>
          <div className='snap-always snap-center flex-shrink-0'>
            <Image src={'/img/app/ios-2.webp'} alt='OpenCat' width={230} height={498} className="w-60 rounded-2xl" />
          </div>
          <div className='snap-always snap-center flex-shrink-0'>
            <Image src={'/img/app/ios-3.webp'} alt='OpenCat' width={230} height={498} className="w-60 rounded-2xl" />
          </div>
          <div className='snap-always snap-center flex-shrink-0'>
            <Image src={'/img/app/ios-4.webp'} alt='OpenCat' width={230} height={498} className="w-60 rounded-2xl" />
          </div>
          <div className='snap-always snap-center flex-shrink-0'>
            <Image src={'/img/app/ios-5.webp'} alt='OpenCat' width={230} height={498} className="w-60 rounded-2xl" />
          </div>
        </div>
      </div>

      <div className='px-8 py-6 md:max-w-3xl mx-auto flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <IconRocket />
          <h2 id='Features' className='text-lg font-bold'>Features</h2>
        </div>
        <div className='p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl'>
          <h3 className='font-bold mb-2 flex gap-2'><IconBrandOpenai className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>OpenAI, Azure OpenAI, Claude API</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>Integrate most powerful AI chat engines in the world. OpenCat is the first native client for AI chatbots.</p>
          <h3 className='font-bold mt-4 mb-2 flex gap-2'><IconKeyboard className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>Keyboard Extension</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>A keyboard extension for you to chat with AI in any app.</p>
          <h3 className='font-bold mt-4 mb-2 flex gap-2'><IconMicrophone className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>Siri Integration</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>A Siri Shortcut for you to chat with AI anytime.</p>
          <h3 className='font-bold mt-4 mb-2 flex gap-2'><IconCat className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>OpenCat Cloud</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>A cloud service for OpenCat users to easily access GPT API, Azure TTS without complex configuration.</p>
          <h3 className='font-bold mt-4 mb-2 flex gap-2'><IconCloud className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>iCloud synchronization</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>iCloud synchronization allows you to chat with AI on all your apple devices.</p>
          <h3 className='font-bold mt-4 mb-2 flex gap-2'><IconBook className='text-blue-500' /><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>Prompt Library</span></h3>
          <p className='text-gray-600 dark:text-gray-400'>OpenCat provides a prompt library for you to chat with AI easily.</p>
          <h3 className='font-bold mt-4'>More features coming soon...</h3>
        </div>
      </div>

      <aside className='px-8 py-6 md:max-w-3xl m-auto flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <IconBook2 />
          <h2 id='Resources' className='text-lg font-bold'>Resources</h2>
        </div>
        <div className="w-full max-w-7xl mx-auto gap-6 grid-cols-2 hidden sm:grid">
          <Card title="帮助文档" description="查看 OpenCat 的帮助文档" link="/docs/zh-CN/help" />
          <Card title="OpenAI API" description="Create your API Key on OpenAI Platform to use our app" link="https://platform.openai.com/account/api-keys" />
          <Card title="Azure OpenAI API" description="Create your API Key on Azure OpenAI Platform to use our app" link="https://azure.microsoft.com/en-us/products/ai-services/openai-service" />
          <Card title="Claude API" description="Create your API Key on Claude Platform to use our app" link="https://docs.anthropic.com/claude/reference/getting-started-with-the-api" />
          <Card title="Privacy Policy" description="We don't collect any private data." link="/privacy" />
        </div>
        <div className='w-full max-w-7xl mx-auto gap-6 flex flex-col sm:hidden'>
          <Card title="帮助文档" description="查看 OpenCat 的帮助文档" link="/docs/zh-CN/help" />
          <Card title={['OpenAI API', 'Azure OpenAI API', 'Claude API']} description={['Create your API Key on OpenAI Platform to use our app', 'Create your API Key on Azure OpenAI Platform to use our app', 'Create your API Key on Claude Platform to use our app']} link={['https://platform.openai.com/account/api-keys', 'https://azure.microsoft.com/en-us/products/ai-services/openai-service', 'https://docs.anthropic.com/claude/reference/getting-started-with-the-api']} />
          <Card title="Privacy Policy" description="We don't collect any private data" link="/privacy" />
        </div>
      </aside>

      <div className='px-8 py-6 md:max-w-3xl m-auto flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <IconFeather />
          <h2 id='Baye' className='text-lg font-bold'>More by Baye</h2>
        </div>
        <div className="w-full max-w-7xl mx-auto gap-6 grid-cols-2 hidden sm:grid">
          <Card title="熊猫吃短信" description="机器学习离线拦截垃圾短信" link="https://apps.apple.com/app/id1642682818" icon="/img/pandasms.png"/>
          <Card title="ServerCat" description="SSH Terminal & Linux Monitor" link="https://apps.apple.com/app/id1501532023" icon="/img/servercat.png"/>
          <Card title="DAMA" description="Automatic Redact Privacy" link="https://apps.apple.com/app/id1534690075" icon="/img/dama.png"/>
        </div>
        <div className='w-full max-w-7xl mx-auto gap-6 flex flex-col sm:hidden'>
          <Card title={['熊猫吃短信', 'ServerCat', 'DAMA']} description={['机器学习离线拦截垃圾短信', 'SSH Terminal & Linux Monitor', 'Automatic Redact Privacy']} link={['https://apps.apple.com/app/id1642682818', 'https://apps.apple.com/app/id1501532023', 'https://apps.apple.com/app/id1534690075']} icon={['/img/pandasms.png', '/img/servercat.png', '/img/dama.png']} />
        </div>
      </div>

    </div>
  )
}
