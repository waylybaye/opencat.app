import process from 'node:process'
import { XMLParser } from 'fast-xml-parser'

export async function GET(request: Request) {
  // versions.xml 作为静态资源随站点一同部署，运行时通过同源 fetch 读取，
  // 避免在 Cloudflare Workers 上依赖本地文件系统（Workers 没有可读的磁盘）。
  const versionsUrl = new URL('/releases/versions.xml', request.url)
  const xml = await fetch(versionsUrl).then(response => response.text())
  const parser = new XMLParser()
  const cast = parser.parse(xml)
  const latest = `${cast.rss.channel.item[0]['sparkle:shortVersionString']}.${cast.rss.channel.item[0]['sparkle:version']}`

  // Binaries are hosted on R2 (served via a custom domain), not in this repo.
  // Override with RELEASES_DOWNLOAD_BASE if the domain changes.
  const downloadBase = (process.env.RELEASES_DOWNLOAD_BASE ?? 'https://releases.opencat.app').replace(/\/$/, '')

  // Redirect to the R2-hosted DMG instead of reading it into memory
  return new Response(null, {
    status: 302,
    headers: {
      'Location': `${downloadBase}/OpenCat-${latest}.dmg`,
    },
  })
}
