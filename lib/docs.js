import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocsData() {
  const markdownFiles = getMarkdownFiles(docsDirectory);
  const allData = markdownFiles.map((fileName) => {
    const id = fileName.replace(docsDirectory, '')
                       .replace(/^\//, '')
                       .replace(/.md$/, '');
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
}

export async function getDocData(id) {
  const fullPath = path.join(docsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}


function getMarkdownFiles(dir) {
  let markdownFiles = [];
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const fileInfo = fs.statSync(filePath);
    if (fileInfo.isDirectory()) {
      markdownFiles = markdownFiles.concat(getMarkdownFiles(filePath));
    } else if (path.extname(file) === '.md') {
      markdownFiles.push(filePath);
    }
  });
  return markdownFiles;
}

export function getDocsIds() {
  const markdownFiles = getMarkdownFiles(docsDirectory);
  return markdownFiles.map((fileName) => {
    return {
      params: {
        id: fileName.replace(docsDirectory, '')
        .replace(/^\//, '')
        .replace(/\//g, '-')
        .replace(/.md$/, ''),
      },
    };
  });

}

