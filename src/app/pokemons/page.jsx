"use client";

import usePokemons from "@/hooks/usePokemons";
import PokemonCard from "@/components/organism/PokemonCard";
import Loader from "@/components/atoms/Loader";
import Title from "@/components/atoms/Title";

export default function PokemonsPage() {
  const { pokemons, loading } = usePokemons(24);

  if (loading) return <Loader />;

  return (
    <section>
      <div className="mb-6 text-center">
        <Title>Listado de Pokémons</Title>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}