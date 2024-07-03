'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  )

  const [pokemons, setPokemons] = useState(favoritePokemons)


  return pokemons.length ? <PokemonGrid pokemons={pokemons} /> : NoFavorites()
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[70vh] items-center justify-center">
      <IoHeartOutline className="text-9xl text-red-600" />
      <span className="text-3xl text-red-600">No favorites yet</span>
    </div>
  )
}
