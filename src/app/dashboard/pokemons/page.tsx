import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import React from "react";
import Image from "next/image";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: +pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-5xl my-2">
        <small className="text-5xl my-2 text-red-600">Static </small> 
        Pokemon List
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col items-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
            <span className="text-lg font-bold capitalize">{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
