import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { getAllPokemons } from '../utils/getAllPokemons'
import { getPokemonsDetails } from '../utils/getPokemonDetails'

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

export const getServerSideProps: GetServerSideProps = async () => {
  const {results, next } = await getAllPokemons(12, 0)
  const pokemonsDetails = await getPokemonsDetails(results)
  console.log(results);
  console.log(pokemonsDetails);
  return { props : { results, pokemonsDetails, next }}
}

export default Home
