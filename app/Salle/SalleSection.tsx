"use client";

import { motion } from "framer-motion";
import GalleryButton from "../Components/GalleryButton";


export default function SalleSection() {
  return (
    <>
      {/* SECTION SALLE DES FÊTES */}
      <section
        id="salle"
        className="min-h-screen w-full py-32 px-10 bg-stone-800 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Salle des fêtes</h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16">
            Découvrez notre salle des fêtes élégante, parfaite pour les
            événements privés, anniversaires, réceptions et soirées privées.
            Notre équipe peut aménager la salle selon vos besoins pour garantir
            une soirée mémorable.
          </p>


          {/* GALLERY PREVIEW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/salle1.jpg",
              "/images/salle2.jpg",
              "/images/salle3.jpg",
            ].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // ⭐ cascade
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="h-72 bg-white/10 rounded-xl overflow-hidden"
              >
                <motion.img
                  src={img}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>

          <GalleryButton />

        </div>
      </section>
    </>
  );
}
