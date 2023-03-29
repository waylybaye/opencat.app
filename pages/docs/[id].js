import { getDocData, getDocsIds } from '../../lib/docs';

export default function Doc({ docData }) {
  return <>
      <h1>{docData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
    </>;
}

export async function getStaticPaths() {
  const paths = getDocsIds();
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // path: docs/en-hello -> filePath: docs/en/hello
  const filePath = params.id.split('-').join('/');
  const docData = await getDocData(filePath);
  return {
    props: {
      docData,
    },
  };
}

