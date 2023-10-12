import { IconSun, IconMoon } from "@tabler/icons-react"
import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeToogle = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="h-6 w-6" />;
    return resolvedTheme === 'light' ? <IconSun className="h-6 w-6" /> : <IconMoon className="h-6 w-6 text-white" />;
}
