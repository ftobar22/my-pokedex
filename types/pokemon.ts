export interface PokemonData {
    name: string
    url: string
}

export interface PokemonDetails {
    id: number
    name: string
    typesPokemon: Array<string>
    image: string
}

export interface PokemonTypes { 
    slot: number
    type: Type
}

export interface Type {
    name: string
    url: string
}