"use client";

import { motion } from "framer-motion";

export default function ConceptSection() {
  return (
    <section className="w-full py-32 px-10 bg-stone-800 text-white" id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Une ambiance chaleureuse,
            <br />
            une cuisine raffinée.
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            L’Univers d’Alex est un lieu où la gastronomie rencontre le plaisir
            de partager : une cuisine faite maison, un bar élégant et une salle
            des fêtes pouvant accueillir vos plus beaux événements.
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
             backdrop-blur-xl rounded-xl text-lg shadow-lg
             hover:bg-white/30 transition"
          >
            Découvrir le menu
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
          <motion.img
            src="/images/restaurant-interieur.jpg"
            alt="Ambiance du restaurant"
            className="w-full h-[420px] object-cover group-hover:scale-[1.03] transition duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
