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
          <h2 className="text-5xl font-bold mb-4">Un espace pour vos moments</h2>
          <p className="text-xl text-white/60 mb-8 font-light">
            Célébrations, réceptions, événements privés
          </p>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Notre salle des fêtes s'adapte à vos envies. Anniversaires, cocktails,
            réceptions d'entreprise, mariages... Nous créons l'ambiance parfaite
            pour transformer chaque occasion en souvenir précieux. À discuter
            ensemble, selon vos besoins.
          </p>


          {/* GALLERY PREVIEW - Refined masonry-style layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              "/images/salle-des-fetes/salle-fete-1.jpeg",
              "/images/salle-des-fetes/salle-fete-2.jpeg",
              "/images/salle-des-fetes/salle-fete-3.jpeg",
              "/images/salle-des-fetes/salle-fete-4.jpeg",
              "/images/salle-des-fetes/salle-fete-5.jpeg",
              "/images/salle-des-fetes/salle-fete-6.jpeg",
              "/images/salle-des-fetes/salle-fete-7.jpeg",
            ].map((img, index) => {
              // Create a masonry-like layout: first image larger, alternating heights
              const isLarge = index === 0;
              const height = isLarge ? "h-96" : index % 2 === 0 ? "h-72" : "h-80";
              
              return (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`${height} ${
                    isLarge ? "sm:col-span-2 lg:col-span-2" : ""
                  } bg-white/5 rounded-xl overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <img
                    src={img}
                    alt={`Ambiance de la salle des fêtes - Vue ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              );
            })}
          </div>

          <GalleryButton />

        </div>
      </section>
    </>
  );
}
