// PokemonCard.js
import Link from "next/link";
import Image from "next/image";

export default function PokemonCard({ pokemon, index }) {
  if (!pokemon) return null;

  const pokemonId = pokemon.id || pokemon.url?.split("/").filter(Boolean).pop();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <Link href={`/pokemons/${pokemon.name}`}>
      <article className="group relative p-6 rounded-2xl border border-white/10 bg-blue-200 dark:bg-blue-400 backdrop-blur-md hover:bg-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] cursor-pointer overflow-hidden box-border">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {imageUrl ? (
          <div className="relative z-10">
            <Image
              src={imageUrl}
              alt={pokemon.name}
              width={150}
              height={150}
              className="w-32 h-32 mx-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 ease-out"
              priority={index < 5}
            />
          </div>
        ) : (
          <div className="w-32 h-32 mx-auto bg-zinc-700/50 animate-pulse rounded-full" />
        )}

        <div className="relative z-10 mt-4">
          <p className="text-center text-[12px] font-bold text-gray-500 dark:text-white opacity-80 tracking-widest uppercase">
            # {pokemonId?.toString().padStart(3, "0")}
          </p>
          <h3 className="text-center capitalize text-lg font-black text-gray-500 dark:text-gray-700 group-hover:text-blue-300 transition-colors duration-300 tracking-tight">
            {pokemon.name}
          </h3>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
}
