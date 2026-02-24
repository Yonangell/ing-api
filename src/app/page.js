import Title from "@/components/atoms/Title";

export default function Home() {
  return (
    <section className="text-center py-4">
      <Title>Bienvenido al mundo pokemon</Title>
      <p className="mt-4 opacity-70 max-w-xl mx-auto">
        Explora pokemones consumiento la PokeApi usando Next.js, TailwindCSS,
        hooks y diseño atómico
      </p>
    </section>
  );
}
