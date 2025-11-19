"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GalleryButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Précharge la page galerie pour navigation instantanée
  useEffect(() => {
    router.prefetch("/Galerie");
  }, [router]);

  const handleClick = () => {
    setLoading(true);

    // délai pour laisser le loader animé se montrer un peu
    setTimeout(() => {
      router.push("/Galerie");
    }, 300);
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
        text-white hover:bg-white/30 transition shadow-xl cursor-pointer
      "
    >
      {loading ? (
        // Loader circulaire Apple
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
        />
      ) : (
        "Voir la galerie complète"
      )}
    </motion.button>
  );
}
