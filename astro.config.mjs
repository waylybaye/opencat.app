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

  // 默认静态预渲染；动态路由（/release、裸路径语言重定向）单独 export const prerender = false，
  // 由 Cloudflare Worker 在请求期渲染。
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
      i18n: {
        defaultLocale: 'en',
        locales: {
          'en': 'en',
          'zh-Hans': 'zh-Hans',
        },
      },
    }),
  ],

  // 旧文档路径的兼容重定向在 Phase 4 路由建好后再启用（Astro 会校验重定向目标必须是已存在的路由）。
})
