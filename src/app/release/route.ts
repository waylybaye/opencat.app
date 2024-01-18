import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { XMLParser } from 'fast-xml-parser'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const castPath = path.join(process.cwd(), 'content/releases', 'versions.xml')
  const xml = await readFile(castPath, 'utf8')
  if (searchParams.has('version')) {
    const parser = new XMLParser()
    const cast = parser.parse(xml)
    const latest = `${cast.rss.channel.item[0]['sparkle:shortVersionString']}.${cast.rss.channel.item[0]['sparkle:version']}`
    const version = searchParams.get('version') === 'latest' ? latest : searchParams.get('version') || latest
    const buffer = await readFile(path.join(process.cwd(), 'content/releases', `OpenCat-${version}.dmg`))
    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="OpenCat-${version}.dmg"`,
      },
    })
  }
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
