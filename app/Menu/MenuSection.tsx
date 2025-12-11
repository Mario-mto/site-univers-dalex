"use client";

import { useState } from "react";
import MenuCarousel from "./MenuCarousel";
import { menuItems } from "@/app/Menu/menu-items";

export default function MenuSection() {
  const [filter, setFilter] = useState("tout");

  const categories = ["tout", "entrées", "plats", "desserts", "boissons"];

  const filteredItems =
    filter === "tout"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section
      id="menu"
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-stone-900 text-white"
    >
      {/* HEADER */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Carte des saveurs</h2>
        <p className="text-lg md:text-xl text-white/60 mb-6 md:mb-8 font-light">
          Une cuisine sincère qui honore les traditions.
        </p>
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Chaque plat raconte une histoire. Des produits frais, des recettes
          transmises, une passion partagée. Découvrez notre sélection, pensée
          pour vous faire voyager et vous rassembler.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 flex-wrap px-4">
        {categories.map((cat) => {
          const labels: Record<string, string> = {
            tout: "Tout voir",
            entrées: "Entrées",
            plats: "Plats",
            desserts: "Desserts",
            boissons: "Boissons & Vins",
          };
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black shadow-xl scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {labels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          );
        })}
      </div>

      {/* CAROUSEL PREMIUM */}
      <MenuCarousel items={filteredItems} />
    </section>
  );
}
