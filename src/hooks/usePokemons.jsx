"use client";

import { useEffect, useState } from "react";
import { mapPokemonDetail } from "@/lib/PokemonMapper";

export default function usePokemons(limit = 20) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      const data = await res.json();

      const details = await Promise.all(
        data.results.map(p => fetch(p.url).then(r => r.json()))
      );

      setPokemons(details.map(mapPokemonDetail));
      setLoading(false);
    }

    fetchData();
  }, [limit]);

  return { pokemons, loading };
}