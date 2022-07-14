import React from 'react';
import Image from 'next/image';
import { PokemonDetails } from '../types/pokemon'
import { fillId, capitalize } from '../utils/helpers'
import { TYPES_TO_SPANISH, TYPE_TO_COLOR } from '../statics/typeHashes'

export const PokemonCard = (pokemon: PokemonDetails) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4">
        <div className="overflow-hidden">
            <a key={pokemon.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Image 
                        src={pokemon.image}
                        alt={pokemon.name}
                        width={215}
                        height={215}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <p className="ml-3 text-sm text-gray-400">
                    {'N.º' + fillId(pokemon.id)}
                </p>
                <header className="place-items-start flex justify-between">
                    <h1 className="text-2xl">
                        <p className="ml-3 no-underline text-black">
                            {capitalize(pokemon.name)}
                        </p>
                    </h1>
                </header>
                <footer className="place-items-start flex justify-between leading-none">
                    <div className="place-items-start flex no-underline text-black">
                    {pokemon.typesPokemon.map((type: string, index: number) => {
                        return (
                            <span className="text-xs inline-block py-1 px-2.5 ml- bg-white last:mr-1 mr-2 text-white  rounded-md" key={index} style={{backgroundColor: TYPE_TO_COLOR[type]}}  >
                                { TYPES_TO_SPANISH[type] }
                            </span>
                            )
                        })}
                    </div>
                </footer>
            </a>
        </div>
    </div>
  )
}
