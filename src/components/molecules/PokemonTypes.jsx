import Badge from "@/components/atoms/Badge";

export default function PokemonTypes({ types }) {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {types.map((type) => (
        <Badge key={type}>{type}</Badge>
      ))}
    </div>
  );
}
