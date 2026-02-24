"use client";

import { useEffect, useState } from "react";
import { mapPokemonDetail } from "@/lib/PokemonMapper";

export default function usePokemonDetail(name) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    async function fetchDetail() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) {
          setPokemon(null);
        } else {
          const data = await res.json();
          setPokemon(mapPokemonDetail(data));
        }
      } catch (error) {
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    }

    fetchDetail();
  }, [name]);

  return { pokemon, loading };
}
