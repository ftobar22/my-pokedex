import React from 'react'
import Image from 'next/image'
import { PokemonDetails } from '../types/pokemon'
import { TYPES_TO_SPANISH, TYPE_TO_COLOR } from '../statics/typeHashes'
import { fillId, capitalize } from '../utils/helpers'

export const PokemonDetail = (pokemon: PokemonDetails) => {
    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white rounded-lg shadow-2x1 w-3/4">
            <header className="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold flex justify-center">
                <h1>
                    {capitalize(pokemon.name) +  ' N.º ' + fillId(pokemon.id)}
                </h1>
            </header>
                <a key={pokemon.id} className="group">
                    <div className="flex justify-center w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg ">
                        <Image 
                            src={pokemon.image}
                            alt={pokemon.name}
                            width={315}
                            height={315}
                            className="w-full h-full object-center object-cover opacity-75"
                        />
                    </div>
                   <h3 className="rounded-t-lg py-3  text-xl font-extrabold flex justify-center">Tipo</h3>
                   <div className="flex justify-center py-1">
                    <footer className="place-items-start flex justify-between leading-none">
                        <div className="place-items-start flex no-underline text-black">
                        {pokemon.typesPokemon.map((type: string, index: number) => {
                            return (
                                <span className="text-xl inline-block py-1 px-2.5 ml- bg-white last:mr-1 mr-2 text-white  rounded-md" key={index} style={{backgroundColor: TYPE_TO_COLOR[type]}}  >
                                    { TYPES_TO_SPANISH[type] }
                                </span>
                                )
                            })}
                        </div>
                    </footer>
                   </div>
                </a>
            </div>
        </div>
      )
}
