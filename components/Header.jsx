import { IconSun, IconMoon } from "@tabler/icons-react"
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between px-8 py-6 w-full md:max-w-3xl mx-auto sticky top-0 items-center bg-gray-100/25 dark:bg-gray-800/75 backdrop-blur-xl z-30" >
      <div className="basis-1/4">
      </div>
      <div className="mx-auto">
        <Link href="/">
          <img className="h-4 dark:hidden" src="/img/logo-light.svg" alt="logo" />
          <img className="h-4 hidden dark:block" src="/img/logo-dark.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex basis-1/4 justify-end">
        <div id="theme-toggle">
          <IconSun className="h-6 w-6 dark:hidden" />
          <IconMoon className="h-6 w-6 text-white hidden dark:block" />
        </div>
      </div>
    </div>
  );
}
