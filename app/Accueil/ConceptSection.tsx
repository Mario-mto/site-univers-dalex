"use client";

import { motion } from "framer-motion";

export default function ConceptSection() {
  return (
    <section className="w-full py-32 px-10 bg-stone-800 text-white"
    id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Une ambiance chaleureuse,<br />une cuisine raffinée.
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            L’Univers d’Alex est un lieu où la gastronomie rencontre 
            le plaisir de partager : une cuisine faite maison,
            un bar élégant et une salle des fêtes pouvant accueillir 
            vos plus beaux événements.
          </p>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white/20 border border-white/20 
                       backdrop-blur-xl rounded-xl text-lg shadow-lg
                       hover:bg-white/30 transition"
          >
            Découvrir le menu
          </motion.a>
        </motion.div>

        {/* IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src="/images/restaurant-interieur.jpg"
            className="w-full h-[420px] object-cover"
            alt="Ambiance du restaurant"
          />
        </motion.div>

      </div>
    </section>
  );
}
