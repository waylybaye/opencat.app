import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenCat - Native iOS/macOS/iPadOS client for OpenAI/ChatGPT </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to OpenCat
        </h1>

        <p className={styles.description}>
          Download at <a href="https://apps.apple.com/us/app/opencat/id6445999201" target="_blank">App Store</a>
        </p>

        <div className={styles.grid}>
          <a href="/privacy" className={styles.card} target={'_blank'}>
            <h3>
              Privacy Policy
              <span >
                &rarr;
              </span>
            </h3>
            <p>We don't collect any private data. We only collect </p>
          </a>

          <a href="https://platform.openai.com/account/api-keys" className={styles.card} target={'_blank'}>
            <h3>
              OpenAI API
              <span >
                &rarr;
              </span>
            </h3>
            <p>Create your API Key on OpenAI Platform to use our app.</p>
          </a>

          {/*<a*/}
          {/*  href="https://github.com/vercel/next.js/tree/master/examples"*/}
          {/*  className={styles.card}*/}
          {/*>*/}
          {/*  <h3>Examples &rarr;</h3>*/}
          {/*  <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
          {/*</a>*/}

          {/*<a*/}
          {/*  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
          {/*  className={styles.card}*/}
          {/*>*/}
          {/*  <h3>Deploy &rarr;</h3>*/}
          {/*  <p>*/}
          {/*    Instantly deploy your Next.js site to a public URL with Vercel.*/}
          {/*  </p>*/}
          {/*</a>*/}
        </div>
      </main>

      <footer>
        Copyright 2023, All rights reserved.
        {/*<a*/}
        {/*  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Powered by{' '}*/}
        {/*  <img src="/vercel.svg" alt="Vercel" className={styles.logo} />*/}
        {/*</a>*/}
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
