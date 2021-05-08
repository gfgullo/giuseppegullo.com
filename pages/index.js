import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giuseppe Gullo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Something cool is coming...</p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
