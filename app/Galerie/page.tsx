"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TransitionWrapper from "@/app/Components/Transitions/TransitionWrapper";
import Modal from "@/app/Components/Modal";
import ContactForm from "@/app/Contact/ContactForm";

const images = [
  "/images/salle-des-fetes/salle-fete-1.jpeg",
  "/images/salle-des-fetes/salle-fete-2.jpeg",
  "/images/salle-des-fetes/salle-fete-3.jpeg",
  "/images/salle-des-fetes/salle-fete-4.jpeg",
  "/images/salle-des-fetes/salle-fete-5.jpeg",
  "/images/salle-des-fetes/salle-fete-6.jpeg",
  "/images/salle-des-fetes/salle-fete-7.jpeg",
];

export default function GaleriePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TransitionWrapper>
      <main className="w-full bg-stone-900 text-white pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 px-6 md:px-10">
        {/* HERO INTRO */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            L'ambiance en images
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-6 md:mb-8 font-light">
            Immergez-vous dans l'atmosphère
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Chaque espace a son caractère. Chaque moment sa lumière. Découvrez
            l'ambiance qui vous attend, et imaginez vos prochains moments partagés.
          </p>
        </section>

        {/* REFINED GALLERY GRID - Masonry-inspired layout */}
        <section className="max-w-7xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((src, index) => {
              // Create visual variety: larger image every 3rd item
              const isLarge = index % 4 === 0;
              const height = isLarge ? "sm:col-span-2 lg:col-span-2 h-96" : "h-80";
              
              return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className={`${height} relative rounded-xl overflow-hidden bg-white/5 
                             border border-white/10 shadow-xl hover:border-white/20 
                             group transition-all duration-300`}
                >
                  <img
                    src={src}
                    alt={`Ambiance de L'univers d'Alex - Vue ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA DE CONTACT */}
        <div className="text-center">
          <motion.button
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 md:px-8 py-3 md:py-4 bg-white/20 border border-white/30 
                       backdrop-blur-md rounded-xl shadow-xl text-base md:text-lg font-medium
                       hover:bg-white/30 transition inline-block"
          >
            Réserver notre salle des fêtes
          </motion.button>
        </div>

        {/* MODAL */}
        <Modal visible={modalOpen} onClose={() => setModalOpen(false)}>
          <ContactForm />
        </Modal>
      </main>
    </TransitionWrapper>
  );
}
