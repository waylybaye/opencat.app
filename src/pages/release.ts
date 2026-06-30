import type { APIRoute } from 'astro'
import { env } from 'cloudflare:workers'
import { XMLParser } from 'fast-xml-parser'

// on-demand：每次请求实时解析 versions.xml 并 302 到最新 DMG。
export const prerender = false

export const GET: APIRoute = async ({ request }) => {
  // versions.xml 作为静态资源随站点部署，用 ASSETS 绑定在 Worker 内读取，
  // 避免依赖文件系统（Workers 没有可读磁盘）。
  const versionsUrl = new URL('/releases/versions.xml', request.url)
  const response = await env.ASSETS.fetch(versionsUrl)
  const xml = await response.text()

  const parser = new XMLParser()
  const cast = parser.parse(xml)
  const item = cast.rss.channel.item[0]
  const latest = `${item['sparkle:shortVersionString']}.${item['sparkle:version']}`

  // 二进制托管在 R2（自定义域名），不在本仓库内。域名变更时用 RELEASES_DOWNLOAD_BASE 覆盖。
  const downloadBase = (env.RELEASES_DOWNLOAD_BASE ?? 'https://releases.opencat.app').replace(/\/$/, '')

  return new Response(null, {
    status: 302,
    headers: {
      Location: `${downloadBase}/OpenCat-${latest}.dmg`,
    },
  })
}
