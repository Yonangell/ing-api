"use client";

import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/molecules/ThemeToggle";
import Button from "@/components/atoms/Button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white dark:bg-neutral-600 dark:border-neutral-700">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold cursor-pointer"
      >
        PokeApi
      </h1>
      <div className="flex gap-3">
        <Button
          onClick={() => {
            router.push("/pokemons");
          }}
        >
          Pokemons
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
