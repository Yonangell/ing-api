import PokemonTypes from "@/components/molecules/PokemonTypes";
import Title from "@/components/atoms/Title";
import Image from "next/image";

export default function PokemonDetail({ pokemon }) {
  const heightInMeters = pokemon.height / 10;
  const weightInKilos = pokemon.weight / 10;

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-mono font-bold text-gray-400">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
        <PokemonTypes types={pokemon.types} />
      </div>

      <div className="relative bg-gray-50 dark:bg-gray-900 rounded-full p-4 mb-4">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={160}
          height={160}
          className="mx-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="text-center space-y-4">
        <Title className="capitalize text-3xl font-black tracking-tight text-gray-800 dark:text-white">
          {pokemon.name}
        </Title>

        <div className="flex justify-around py-4 border-y border-gray-100 dark:border-gray-700">
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Peso</p>
            <p className="font-medium">{weightInKilos} kg</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Altura</p>
            <p className="font-medium">{heightInMeters} m</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-left text-sm font-bold text-gray-600 dark:text-gray-300">
            Estadísticas Base
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {pokemon.stats?.map((s) => (
              <div key={s.stat.name} className="flex items-center">
                <span className="w-24 text-left text-xs capitalize text-gray-500">
                  {s.stat.name.replace("-", " ")}
                </span>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${Math.min((s.base_stat / 150) * 100, 100)}%`,
                    }}
                  />
                </div>
                <span className="w-8 text-right text-xs font-bold ml-2">
                  {s.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 text-sm text-left bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
          <p className="mb-1">
            <span className="text-gray-500">Habilidades:</span>{" "}
            <span className="font-semibold capitalize">
              {pokemon.abilities.join(", ")}
            </span>
          </p>
          <p>
            <span className="text-gray-500">Experiencia Base:</span>{" "}
            <span className="font-semibold">{pokemon.base_experience} XP</span>
          </p>
        </div>
      </div>
    </div>
  );
}
