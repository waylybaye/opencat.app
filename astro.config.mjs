// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://opencat.app',

  // 所有 URL 末尾带斜杠，对齐旧站 next.config 的 trailingSlash: true。
  trailingSlash: 'always',

  // 内容页默认预渲染为静态 HTML（由资源层直接返回）；
  // 重定向入口（/、裸 /doc、旧 /docs/*、/[lang]/doc/help、/release）各自 export const prerender = false，
  // 作为 on-demand 路由由 Cloudflare Worker 在请求期处理。
  // 注：Astro+Cloudflare 的 middleware 只对「已声明路由」运行，无法兜底未声明路径，
  // 因此所有需要重定向的路径都显式建成路由文件，而非依赖 middleware。
  output: 'static',
  // @astrojs/cloudflare 14 内置官方 Cloudflare Vite 插件，astro dev 直接跑在 workerd 上，
  // 并自动读取 wrangler.jsonc 的 vars/bindings，无需额外配置。
  // imageService: 'passthrough' 关闭图片处理（不需要 sharp / Cloudflare Images binding），
  // 图片本身已是优化过的 webp/svg —— 对应旧站 next.config 的 images.unoptimized。
  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  integrations: [
    react(),
    sitemap({
      // 排除会 30x 跳转的入口路由（裸 / 与 /doc/），sitemap 只列规范的本地化页面。
      filter: (page) => {
        const { pathname } = new URL(page)
        return pathname !== '/' && pathname !== '/doc/'
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          'en': 'en',
          'zh-Hans': 'zh-Hans',
        },
      },
    }),
  ],

  // 旧 /docs/* 路径的兼容重定向改在 middleware 里处理（保留 slug 与语言意图），
  // 避免静态 redirects 对 [lang] 动态路由目标的校验限制。
})
