"use client";

import { motion } from "framer-motion";
import TransitionWrapper from "@/app/Components/Transitions/TransitionWrapper";
import ContactButton from "./ContactButton";
import { useState } from "react";

const images = [
  "/images/salle1.jpg",
  "/images/salle2.jpg",
  "/images/salle3.jpg",
  "/images/salle4.jpg",
  "/images/salle5.jpg",
  "/images/salle6.jpg",
];

const categories = ["tout", "restaurant", "bar", "salle"];

export default function GaleriePage() {

  // ✅ Hook placé AU BON ENDROIT
  const [filter, setFilter] = useState("tout");

  return (
    <TransitionWrapper>
      <main className="min-h-screen bg-stone-900 text-white pt-32 px-10">
       
        {/* FILTRE — TABS ARRONDIS */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 rounded-full text-lg capitalize transition-all duration-300
                ${filter === cat 
                  ? "bg-white text-black shadow-md scale-105" 
                  : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SLIDER HORIZONTAL */}
        <div className="overflow-x-auto scrollbar-hide py-4">
          <div className="flex gap-6 w-max">
            {images
              .filter(img => filter === "tout" || img.includes(filter))
              .map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[300px] h-[200px] rounded-xl overflow-hidden bg-white/10 shadow-lg border border-white/10"
                >
                  <motion.img
                    src={src}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
          </div>
        </div>

        {/* HERO INTRO */}
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 mt-10" >Galerie</h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Découvrez l'ambiance unique de notre restaurant, bar et salle des fêtes.  
            Chaque espace peut être aménagé selon vos besoins pour vos événements.
          </p>
        </section>

        {/* GRID FILTRÉE */}
        <section className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images
              .filter(img => filter === "tout" || img.includes(filter))
              .map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                  className="relative rounded-xl overflow-hidden bg-white/10 
                             backdrop-blur-xl border border-white/10 shadow-xl"
                >
                  <motion.img
                    src={src}
                    className="w-full h-[320px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
          </div>
        </section>

        {/* CTA DE CONTACT */}
        <div className="text-center mt-20 mb-10">
          <ContactButton />
        </div>

      </main>
    </TransitionWrapper>
  );
}
