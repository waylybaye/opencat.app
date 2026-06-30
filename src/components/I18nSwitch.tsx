'use client'

import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { type Locale, i18n } from '@/utils/i18n-config'

export default function I18nSwitch() {
  // 旧站用 next/navigation 的 usePathname；这里在 island 挂载后读取 window.location，
  // SSR 阶段先用 '/'，hydration 后修正为真实路径（语言切换需点击，发生在 hydration 之后）。
  const [pathName, setPathName] = useState('/')
  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])

  const redirectedPathName = (locale: Locale) => {
    if (!pathName)
      return '/'
    const segments = pathName.split('/')
    // segments[1] 是首段：本地化页为语言码；裸 "/"（英文直出）下为空串。
    if ((i18n.locales as readonly string[]).includes(segments[1]))
      segments[1] = locale // 替换已有语言前缀
    else
      segments.splice(1, 0, locale) // 根路径等无前缀场景：插入语言段
    const path = segments.join('/')
    // 站点统一带尾斜杠（trailingSlash: 'always'），补全以免命中跳转。
    return path.endsWith('/') ? path : `${path}/`
  }

  return (
    <Menu as="div" className="relative text-left">
      <Menu.Button className="flex justify-center items-center rounded-lg hover:bg-gray-200/50 p-2">
        <span className="i-mingcute-translate-fill text-2xl"></span>
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
                <a
                  className="hover:bg-gray-200/50 text-sm w-full rounded-md p-2"
                  href={redirectedPathName(locale)}
                >
                  {locale === 'en' ? 'English' : '中文'}
                </a>
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
