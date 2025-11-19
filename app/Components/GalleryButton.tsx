"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Préchargement automatique de la page galerie
  useEffect(() => {
    router.prefetch("/galerie");
  }, [router]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/galerie");
    }, 300); // petit délai pour voir le loader
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="
        relative inline-flex items-center justify-center
        mt-12 px-8 py-4 rounded-xl text-lg font-medium overflow-hidden
        bg-white/20 backdrop-blur-md border border-white/30
        text-white hover:bg-white/30 transition shadow-xl
      "
    >
      {/* Loader circulaire quand on clique */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
        />
      ) : (
        <span>Voir la galerie complète</span>
      )}
    </motion.button>
  );
}
