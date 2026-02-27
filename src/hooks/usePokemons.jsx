// hooks/usePokemons.js
import { useEffect, useState } from "react";

export function usePokemons(page, search) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);

      try {
        const limit = 40;
        const offset = (page - 1) * limit;

        const isSearching =
          search && typeof search === "string" && search.trim() !== "";
        {
          /*console.log("Intentando buscar:", search);*/
        }
        const url = isSearching
          ? `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase().trim()}`
          : `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "Pokémon no encontrado"
              : "Error en el servidor",
          );
        }

        const data = await res.json();

        const results = data.results ? data.results : [data];
        setPokemons(results);
      } catch (err) {
        setError(
          err.message === "Failed to fetch"
            ? "Error de conexión con la API"
            : err.message,
        );
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [page, search]);

  return { pokemons, loading, error };
}
