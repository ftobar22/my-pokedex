import React from 'react'
import { NextPage, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { getPokemonDetailByName } from '../../../utils/getPokemonDetails'
import { PokemonDetail } from '../../../components/PokemonDetail'

export const getServerSideProps = async (context: any) => {
  const { name } = await context.params
  const pokemonDetail = await getPokemonDetailByName(name)
  return { props : { pokemonDetail }}
}

const PokemonDetailPage = ({pokemonDetail}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const pokemon = pokemonDetail[0]

  return (
    <div> 
    <PokemonDetail 
      id={pokemon.id}
      name={pokemon.name}
      typesPokemon={pokemon.typesPokemon}
      image={pokemon.image}
      key={pokemon.id}
    />

    <div className="flex justify-center">
      <Link href='/' >
          <button
            type="button"
            className="w-1/6 h-10 bg-red-400 text-white rounded-lg text-base hover:bg-blue-700 justify-center w-80 inline-flex rounded-md border shadow-sm px-4 py-2 sm:w-auto">
            {"Volver"}
        </button>
      </Link>
    </div>

    </div>
  )
}

export default PokemonDetailPage
