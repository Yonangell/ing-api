"use client";

import { useState } from "react";
import { usePokemons } from "@/hooks/usePokemons";
import SearchBar from "@/components/molecules/SearchBar";
import PokemonList from "@/components/organism/PokemonList";
import useDebounce from "@/hooks/useDebounce";
import Paginacion from "@/components/molecules/Paginacion";

export default function PokemonsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const { pokemons, loading, error } = usePokemons(page, debouncedSearch);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <main className="container mx-auto p-4 space-y-6">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <PokemonList pokemons={pokemons} loading={loading} />
      {!search && <Paginacion page={page} onPageChange={setPage} />}
    </main>
  );
}
