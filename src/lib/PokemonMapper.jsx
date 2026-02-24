// 🔹 Mapper para la lista (cuando solo tienes name y url)
export function mapPokemonList(data) {
  return {
    name: data.name,
    url: data.url,
  };
}

// 🔹 Mapper para el detalle completo
export function mapPokemonDetail(data) {
  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites?.other?.["official-artwork"]?.front_default ??
      data.sprites?.front_default,
    types: data.types.map((t) => t.type.name),
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((a) => a.ability.name),
  };
}
