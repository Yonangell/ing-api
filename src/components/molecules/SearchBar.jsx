"use client";

import Input from "@/components/atoms/Input";

export default function SearchBar({ value, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Buscar Pokémon por nombre o ID"
        type="text"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
      />
    </div>
  );
}
