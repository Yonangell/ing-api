"use client";

import { useMemo, useState } from "react";
import usePokemons from "@/hooks/usePokemons";
import useDebounce from "@/hooks/useDebounce";

import PokemonCard from "@/components/organism/PokemonCard";
import Loader from "@/components/atoms/Loader";
import Title from "@/components/atoms/Title";
import SearchBar from "@/components/molecules/SearchBar";
import Paginacion from "@/components/molecules/Paginacion";

export default function PokemonsPage() {
  const [page, setPage] = useState(1);

  const { pokemons, loading, totalPages } = usePokemons(page, 12);

  // 🔎 búsqueda
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  // 🔎 filtro
  const filteredPokemons = useMemo(() => {
    if (!debouncedSearch) return pokemons;

    return pokemons.filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [pokemons, debouncedSearch]);

  if (loading) return <Loader />;

  return (
    <section className="space-y-6">
      <div className="text-center">
        <Title>Listado de Pokémons</Title>
      </div>

      {/* 🔎 Search */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* empty */}
      {filteredPokemons.length === 0 && (
        <p className="text-center opacity-70">
          No se encontraron pokémons
        </p>
      )}

      {/* 📄 Pagination */}
      <Paginacion
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}