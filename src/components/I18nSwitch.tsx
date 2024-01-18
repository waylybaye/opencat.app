'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { type Locale, i18n } from '@/utils/i18n-config'

export default function I18nSwitch() {
  const pathName = usePathname()
  const redirectedPathName = (locale: Locale) => {
    if (!pathName)
      return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <span className="i-mingcute-translate-fill text-xl"></span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex flex-col gap-1 right-0 mt-2 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {i18n.locales.map((locale) => {
            return (
              <Menu.Item key={locale}>
                <Link
                  className="hover:bg-gray-900 hover:text-white font-bold w-full rounded-md p-2"
                  href={redirectedPathName(locale)}
                >
                  {locale === 'en' ? 'English' : '中文'}
                </Link>
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
