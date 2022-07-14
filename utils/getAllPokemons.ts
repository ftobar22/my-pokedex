import { URL_API } from '../statics/url'

export const getAllPokemons = async (limit: Number, offset: Number) => {
    const result = await fetch(`${URL_API}pokemon?limit=${limit}&offset=${offset}`)
    return await result.json()
}
