import { IconMenu, IconX } from "@tabler/icons-react"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToogle } from "./ThemeToggle";
import { AnimatePresence, motion } from 'framer-motion';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className="flex flex-col w-full sticky top-0 bg-gray-100/25 dark:bg-gray-800/75 backdrop-blur-xl z-30 divide-y divide-gray-300 dark:divide-gray-600">
      <div className="flex justify-between px-8 py-6 w-full md:max-w-3xl mx-auto items-center">
        <div className="flex basis-1/4 justify-start">
          <div id="menu-toggle" onClick={
            () => setMenu(!menu)
          }>
            {menu ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </div>
        </div>
        <div className="mx-auto">
          <Link href="/">
            <Image className="h-4 w-auto dark:hidden" src="/img/logo-light.svg" width={100} height={50} alt="logo" />
            <Image className="h-4 w-auto hidden dark:block" src="/img/logo-dark.svg" width={100} height={50} alt="logo" />
          </Link>
        </div>
        <div className="flex basis-1/4 justify-end">
          <div onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }}>
            <ThemeToogle />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menu ? <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="flex-col w-full md:max-w-3xl mx-auto px-8 py-6 font-bold h-[calc(100vh-4.5rem)]">
          <div className="flex flex-col items-center gap-8 w-full" onClick={() => {setTimeout(() => setMenu(false), 300)}}>
            <Link href="/">Download</Link>
            <Link href="#Screenshots">Screenshots</Link>
            <Link href="#Features">Features</Link>
            <Link href="#Resources">Resources</Link>
            <Link href="#Baye">More by Baye</Link>
          </div>
        </motion.div> : null}
      </AnimatePresence>
    </div>
  );
}
