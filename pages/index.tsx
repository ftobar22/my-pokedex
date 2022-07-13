import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex | Pokemon.com</title>
        <meta name="description" content="Pokemon.com" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

    </div>
  )
}

export default Home
