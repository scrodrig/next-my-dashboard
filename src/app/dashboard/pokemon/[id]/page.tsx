import { Pokemon } from "@/pokemons";
import async from "../../pokemons/page";
interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const { id, name }: Pokemon = await getPokemon(params.id);
  return {
    title: `${id} - ${name}`,
    description: `${name} pokemon page`,
  };
}

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
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
}
