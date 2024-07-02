import { SimplePokemon } from '@/pokemons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../pokemons/interfaces/pokemon'

interface PokemonState {
  [key: string]: SimplePokemon
}

const initialState: PokemonState = {
  // '1': { id: 1, name: 'bulbasaur' },
  // '4': { id: 4, name: 'charmander' },
  // '25': { id: 25, name: 'pikachu' },
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon
      if (!!state[id]) {
        delete state[id]
        return
      }

      state[id] = pokemon
    },
  },
})

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
