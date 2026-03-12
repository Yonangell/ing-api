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

        const url =
          search && search.trim() !== ""
            ? `https://pokeapi.co/api/v2/pokemon/?limit=1300`
            : `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al obtener datos");

        const data = await res.json();
        let results = data.results;

        if (search && search.trim() !== "") {
          const term = search.toLowerCase().trim();

          results = results.filter((p) => {
            const urlParts = p.url.split("/");
            const pokemonId = urlParts[urlParts.length - 2];

            return p.name.includes(term) || pokemonId === term;
          });

          if (results.length === 0) throw new Error("Pokémon no encontrado");
        }

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
