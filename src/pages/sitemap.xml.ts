import type { APIRoute } from 'astro'

// 旧站 sitemap 地址 /sitemap.xml → 新的 @astrojs/sitemap 索引 /sitemap-index.xml（301）。
// 保留 SEO 连续性：已向站长平台提交过旧地址的爬虫会被永久重定向到新地址。
export const prerender = false

export const GET: APIRoute = ({ redirect }) => redirect('/sitemap-index.xml', 301)
