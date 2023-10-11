import { IconMenu, IconX, IconSun, IconMoon } from "@tabler/icons-react"
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col w-full sticky top-0 bg-gray-100/25 dark:bg-gray-800/75 backdrop-blur-xl z-30 divide-y divide-gray-300 dark:divide-gray-600">
    <div className="flex justify-between px-8 py-6 w-full md:max-w-3xl mx-auto items-center">
      <div className="flex basis-1/4 justify-start">
        <div id="menu-toggle" onClick={
          () => {
            document.getElementById("theme-toggle-off").classList.toggle("hidden");
            document.getElementById("theme-toggle-on").classList.toggle("hidden");
            document.getElementById("menu").classList.toggle("hidden");
            document.getElementById("menu").classList.toggle("flex");
          }
        }>
          <IconMenu id='theme-toggle-off' className="h-6 w-6" />
          <IconX id='theme-toggle-on' className="h-6 w-6 text-white hidden" />
        </div>
      </div>
      <div className="mx-auto">
        <Link href="/">
          <Image className="h-4 w-auto dark:hidden" src="/img/logo-light.svg" width={100} height={50} alt="logo" />
          <Image className="h-4 w-auto hidden dark:block" src="/img/logo-dark.svg" width={100} height={50} alt="logo" />
        </Link>
      </div>
      <div className="flex basis-1/4 justify-end">
        <div id="theme-toggle">
          <IconSun className="h-6 w-6 dark:hidden" />
          <IconMoon className="h-6 w-6 text-white hidden dark:block" />
        </div>
      </div>
    </div>
    <div id='menu' className="hidden flex-col w-full md:max-w-3xl mx-auto px-8 py-6 font-bold h-[calc(100vh-4.5rem)]">
      <div className="flex flex-col items-center gap-8 w-full" onClick={
        () => {
          document.getElementById("theme-toggle-off").classList.toggle("hidden");
          document.getElementById("theme-toggle-on").classList.toggle("hidden");
          document.getElementById("menu").classList.toggle("hidden");
          document.getElementById("menu").classList.toggle("flex"); 
        }        
      }>
        <Link href="/">Download</Link>
        <Link href="#Screenshots">Screenshots</Link>
        <Link href="#Features">Features</Link>
        <Link href="#Resources">Resources</Link>
        <Link href="#Baye">More by Baye</Link>
        </div>
        <div className="w-full h-full" onClick={
      () => {
        document.getElementById("theme-toggle-off").classList.toggle("hidden");
        document.getElementById("theme-toggle-on").classList.toggle("hidden");
        document.getElementById("menu").classList.toggle("hidden");
        document.getElementById("menu").classList.toggle("flex");
      }
    }>
    </div>
    </div>
    </div>
  );
}
