"use client";

import { useParams, useRouter } from "next/navigation";
import usePokemonDetail from "@/hooks/usePokemonsDetail";
import PokemonDetail from "@/components/organism/PokemonDetail";
import Loader from "@/components/atoms/Loader";
import Button from "@/components/atoms/Button";

export default function PokemonDetailPage() {
  const params = useParams();
  const router = useRouter();

  const { pokemon, loading } = usePokemonDetail(params.name);

  if (loading) return <Loader />;

  if (!pokemon) {
    return (
      <div className="text-center py-10">
        <p>No se encontró el Pokémon</p>
        <Button onClick={() => router.push("/pokemons")}>Volver</Button>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <Button onClick={() => router.back()} variant="outline">
        ← Volver
      </Button>

      <PokemonDetail pokemon={pokemon} />
    </section>
  );
}
