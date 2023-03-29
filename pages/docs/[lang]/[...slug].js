import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export default function Doc({ data, contentHtml }) {
  return (
    <>
      <h2>{data.title ?? ''}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </>
  )
}

export async function getStaticPaths() {
  const docsDir = path.join(process.cwd(), 'docs')
  const languages = fs.readdirSync(docsDir)
  const paths = languages.map((lang) => {
    const langDir = path.join(docsDir, lang)
    const docs = getDocs(langDir)
    return docs.map((doc) => ({
      params: {
        lang,
        slug: doc.slug,
      },
    }))
  })
  return {
    paths: [].concat(...paths),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { lang, slug } = params
  console.log(slug)
  if (slug.length === 1 && fs.existsSync(path.join(process.cwd(), 'docs', lang, `${slug[0]}.md`))) {
    const fileContents = fs.readFileSync(path.join(process.cwd(), 'docs', lang, `${slug[0]}.md`), 'utf8')
    return await generateProps(fileContents)
  }
  const docsDir = path.join(process.cwd(), 'docs')
  const filePath = path.join(docsDir, lang, ...slug) + '.md'
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await generateProps(fileContents)
}

async function generateProps(fileContents) {
  const data = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(data.content)
  const contentHtml = processedContent.toString()
  return {
    props: {
      data: data.data,
      contentHtml,
    },
  }
}

function getDocs(dir) {
  if (!fs.statSync(dir).isDirectory()) {
    return []
  }
  const docs = fs.readdirSync(dir)
  return docs.reduce((acc, doc) => {
    if (fs.statSync(path.join(dir, doc)).isDirectory()) {
      acc.push(...getDocs(path.join(dir, doc)).map((slug) => ({
        slug: [doc, ...slug.slug],
      })))
    } else if (doc.endsWith('.md')) {
      acc.push({
        slug: [doc.replace(/\.md$/, '')],
      })
    }
    return acc
  }, [])
}
