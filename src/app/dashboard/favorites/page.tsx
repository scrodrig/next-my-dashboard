import { FavoritePokemons } from '@/pokemons'
import React from 'react'

export default async function FavoritesPage() {
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <span className="text-5xl my-2">
        <small className="text-5xl my-2 text-red-600">Global state: </small>
        Pokemon Favorites
      </span>
      <FavoritePokemons />
    </div>
  )
}
