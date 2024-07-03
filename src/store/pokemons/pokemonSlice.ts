import { SimplePokemon } from '@/pokemons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonState => {
//   // if (typeof localStorage === 'undefined') return {}
//   return JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
// }

const initialState: PokemonState = {
  // ...getInitialState(),
  favorites: {},
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon
      if (!!state.favorites[id]) {
        delete state.favorites[id]
        // return
      } else {
        state.favorites[id] = pokemon
      }
      // //! This is an antipattern and should be avoided, Redux pattern needs pure functions
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    },
  },
})

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer
