"use client";

import Input from "@/components/atoms/Input";

export default function SearchBar({value, onChange}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Buscar Pokémon..."
        type="text"
      />
    </div>
  );
}