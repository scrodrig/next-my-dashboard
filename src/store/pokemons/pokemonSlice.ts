import { SimplePokemon } from '@/pokemons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  [key: string]: SimplePokemon
}

const getInitialState = (): PokemonState => {
  return JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
}

const initialState: PokemonState = {
  ...getInitialState(),
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
        // return
      } else {
        state[id] = pokemon
      }
      // //! This is an antipattern and should be avoided, Redux pattern needs pure functions
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))
    },
  },
})

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
