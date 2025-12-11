"use client";

import { motion } from "framer-motion";

export default function ConceptSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-stone-800 text-white" id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Bien plus qu'un restaurant
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-6 md:mb-8 font-light">
            Une table, des saveurs, des moments.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            Au cœur de Paris, L'univers d'Alex cultive l'art du partage autour
            d'une cuisine généreuse et faite maison. Entre le restaurant, le bar
            et notre salle des fêtes, chaque espace raconte une histoire. La
            vôtre.
          </p>

          <motion.button
            onClick={() => {
              const section = document.getElementById("menu");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white/20 border border-white/20 
             backdrop-blur-xl rounded-xl text-lg shadow-lg font-medium
             hover:bg-white/30 transition"
          >
            Explorer le menu
          </motion.button>
        </motion.div>

        {/* IMAGE BLOCK — version premium avec Glow & Spotlight */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 
             bg-stone-800/40 backdrop-blur-lg"
        >
          {/* SPOTLIGHT */}
          <div
            className="
      pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 
      transition duration-700
    "
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(255,215,130,0.35), transparent 70%)",
            }}
          />

          {/* IMAGE */}
          <img
            src="/images/ambiance-restau.jpg"
            alt="Ambiance chaleureuse du restaurant L'univers d'Alex"
            className="w-full h-[420px] object-cover group-hover:scale-[1.03] transition duration-700"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
