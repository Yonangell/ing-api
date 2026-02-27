"use client";

import { useEffect, useState } from "react";
import { mapPokemonDetail } from "@/lib/PokemonMapper";

export default function usePokemons(page = 1, limit = 12) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const offset = (page - 1) * limit;

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();

        setTotal(data.count);

        const details = await Promise.all(
          data.results.map((p) => fetch(p.url).then((r) => r.json()))
        );

        setPokemons(details.map(mapPokemonDetail));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, limit]);

  const totalPages = Math.ceil(total / limit);

  return { pokemons, loading, totalPages };
}