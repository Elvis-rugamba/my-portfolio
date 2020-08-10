import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elvis Rugamba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I&apos;m <a href="https://nextjs.org">Elvis Rugamba</a>
        </h1>

        <p className={styles.description}>
          a fullstack software engineer skilled in{' '}
          <code className={styles.code}>Node.js</code> and <code className={styles.code}>React.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Read more about me.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Selection of some recent work.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Blogs &rarr;</h3>
            <p>My recent blog posts.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Have a question, need help or want to work together?.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elvis Rugamba &copy; 2020{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
