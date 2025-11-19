"use client";
import  MenuSection  from "@/app/Menu/MenuSection"
import { useScroll, motion } from "framer-motion";
import Hero from "./Components/Hero";
import ContactSection from "./Contact/ContactSection";
import Salle from "./Salle/SalleSection"; 


const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-white/60 z-[999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="hero" className="w-full min-h-screen bg-stone-900 text-white">
        <Hero />

        <section
          id="home"
          className="relative h-screen w-full flex items-center justify-center"
        >
          <h1 className="text-6xl">Accueil</h1>
        </section>

        {/* SECTION MENU */}
        < MenuSection />

        {/* SALLE DES FÊTES */}
        < Salle />

        {/* SECTION À PROPOS */}
       <ContactSection />
      </main>
    </>
  );
}
