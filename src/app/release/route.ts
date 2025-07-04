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
  
  // Redirect to the static file instead of reading it into memory
  return new Response(null, {
    status: 302,
    headers: {
      'Location': `/releases/OpenCat-${latest}.dmg`,
    },
  })
}
