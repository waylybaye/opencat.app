import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { XMLParser } from 'fast-xml-parser'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const reqVersion = request.url.split('/').pop() || 'latest'
  const castPath = path.join(process.cwd(), 'content/releases', 'versions.xml')
  const xml = await readFile(castPath, 'utf8')
  const parser = new XMLParser()
  const cast = parser.parse(xml)
  const latest = `${cast.rss.channel.item[0]['sparkle:shortVersionString']}.${cast.rss.channel.item[0]['sparkle:version']}`
  const version = reqVersion === 'latest' ? latest : reqVersion.replace('OpenCat-', '').replace('.dmg', '')
  const buffer = await readFile(path.join(process.cwd(), 'content/releases', `OpenCat-${version}.dmg`))
  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="OpenCat-${version}.dmg"`,
    },
  })
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
