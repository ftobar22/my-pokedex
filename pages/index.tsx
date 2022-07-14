import { useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next'
import { getAllPokemons } from '../utils/getAllPokemons'
import { getPokemonsDetails } from '../utils/getPokemonDetails'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonDetails } from '../types/pokemon'
import { LoadMoreData } from '../components/LoadMoreData'

const Home: NextPage = ({pokemonsDetails, next} : InferGetServerSidePropsType<typeof getServerSideProps> ) => {

  const [dataPokemons, setDataPokemons] = useState(pokemonsDetails);
  const [nextUrl, setNextUrl] = useState(next);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadNextPokemons = async () => {
    setLoading(true);
    const result = await fetch(nextUrl);
    const { results, next } = await result.json()
    setNextUrl(next);
    const pokemonsUpdatedDetails = await getPokemonsDetails(results);
    setDataPokemons([...dataPokemons, ...pokemonsUpdatedDetails]);
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex | Pokemon.com</title>
        <meta name="description" content="Pokemon.com" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-420">Pokédex</h2>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {dataPokemons.map((pokemon: PokemonDetails) => (
                <>
                  <PokemonCard 
                    id={pokemon.id}
                    name={pokemon.name}
                    typesPokemon={pokemon.typesPokemon}
                    image={pokemon.image}
                  />
                </>
              ))}
          </div>
          <LoadMoreData 
            onClick={handleLoadNextPokemons}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {results, next } = await getAllPokemons(12, 0)
  const pokemonsDetails = await getPokemonsDetails(results)
  return { props : { results, pokemonsDetails, next }}
}

export default Home
