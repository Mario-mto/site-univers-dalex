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
      className="min-h-screen w-full py-32 px-10 bg-stone-900 text-white"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Carte des saveurs</h2>
        <p className="text-xl text-white/60 mb-6 font-light">
          Une cuisine sincère qui honore les traditions.
        </p>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Chaque plat raconte une histoire. Des produits frais, des recettes
          transmises, une passion partagée. Découvrez notre sélection, pensée
          pour vous faire voyager et vous rassembler.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex items-center justify-center gap-6 mb-16 flex-wrap">
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
