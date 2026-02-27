import PokemonCard from "@/components/molecules/PokemonCard";
export default function PokemonList({ pokemons = [], loading }) {
  if (loading) return <p className="text-center">Cargando pokemones...</p>;
  if (!pokemons.length) return <p className="text-center">No hay resultados</p>;

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
      ))}
    </section>
  );
}
