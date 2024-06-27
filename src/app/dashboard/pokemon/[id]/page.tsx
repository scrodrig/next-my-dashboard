import { Pokemon } from "@/pokemons";
import async from "../../pokemons/page";
interface Props {
  params: { id: string };
}

export const metadata = {
  title: "Pokemon",
  description: "Pokemon page",
};

const getPokemon = async (id: string): Promise<Pokemon> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return data;
};

export default async function PokemonPage({ params: { id } }: Props) {
  const pokemon: Pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Hello Page pokemon {id}</h1>
      <div>
        <h2>{JSON.stringify(pokemon)}</h2>
      </div>
    </div>
  );
}
