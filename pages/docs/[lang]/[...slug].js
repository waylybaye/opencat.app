import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Markdown from '../../../components/Markdown'

export default function Doc({ data, content }) {
  return (
    <div className="dark:bg-[#343541] min-h-screen">
      <Head>
        <title>{data.title??''}</title>
      </Head>
      <div className="break-words text-base md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-10 m-auto">
        <Markdown content={content} />
      </div>
    </div>
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
  const docsDir = path.join(process.cwd(), 'docs')
  const filePath = path.join(docsDir, lang, ...slug) + '.md'
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await generateProps(fileContents)
}

async function generateProps(fileContents) {
  const data = matter(fileContents)
  return {
    props: {
      data: data.data,
      content: data.content,
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
