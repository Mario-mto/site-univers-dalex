"use client";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-cyan-500 text-white">
      <Hero />
      
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center"
      >
        <h1 className="text-6xl">Accueil</h1>
      </section>

      {/* SECTION MENU */}
      <section id="menu" className="min-h-screen w-full pt-24">
        <h1 className="text-4xl p-12">Menu</h1>
      </section>

      {/* SECTION À PROPOS */}
      <section id="about" className="min-h-screen w-full pt-24">
        <h1 className="text-4xl p-12">À propos</h1>
      </section>

    </main>
  );
}
