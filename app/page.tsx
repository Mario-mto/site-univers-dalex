"use client";

import MenuSection from "@/app/Menu/MenuSection";
import Hero from "./Components/Hero";
import ContactSection from "./Contact/ContactSection";
import Salle from "./Salle/SalleSection";
import ConceptSection from "./Accueil/ConceptSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-stone-900 text-white">
      <Hero />
      <ConceptSection />
      <MenuSection />
      <Salle />
      <ContactSection />
    </main>
  );
}
