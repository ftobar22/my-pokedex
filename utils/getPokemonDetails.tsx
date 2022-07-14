import { URL_IMAGES, URL_API } from '../statics/url'
import { PokemonData, PokemonTypes } from '../types/pokemon'

// Method to retrieve Pokemon Details from API.
export const getPokemonsDetails = async (pokemons: Array<PokemonData>) => {
    const pokemonsDetails = pokemons.map(async (pokemon) => {
        const pokemonDetail = await fetch(pokemon.url);
        const { types, name, id } = await pokemonDetail.json();
        const typesPokemon = await processTypesPokemon(types);
        const image = `${URL_IMAGES}${id}.png`
        return {typesPokemon, name, id, image}
    })
    return Promise.all(pokemonsDetails);
}

// Method to unpack Types of a Pokemon.
export const processTypesPokemon = async (typesDataPokemon: Array<PokemonTypes>) => {
    const types = typesDataPokemon.map( element => {
        return element.type.name 
    })
    return Promise.all(types)
}

export const getPokemonDetailByName = async (name: string) => {
        const pokemonUrl = `${URL_API}pokemon/${name}`
        const pokemonsDetails = await getPokemonsDetails([{"name": name, "url": pokemonUrl}])
        return Promise.all(pokemonsDetails)
}
