"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import PokemonTypes from "@/components/molecules/PokemonTypes";

export default function PokemonCard({ pokemon }) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/pokemons/${pokemon.name}`)}
      className="cursor-pointer bg-blue-100 dark:bg-neutral-800 rounded-2xl shadow p-4 hover:scale-105 transition-transform duration-200"
    >
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={128}
        height={128}
        className="mx-auto"
        loading="eager"
      />
      <h3 className="text-center font-bold mt-2 capitalize">{pokemon.name}</h3>
      <PokemonTypes types={pokemon.types} />
    </article>
  );
}
