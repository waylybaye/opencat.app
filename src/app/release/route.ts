import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { XMLParser } from 'fast-xml-parser'

export async function GET() {
  const castPath = path.join(process.cwd(), 'public/releases', 'versions.xml')
  const xml = await readFile(castPath, 'utf8')
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
