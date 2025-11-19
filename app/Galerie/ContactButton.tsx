"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/#contact")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="px-8 py-4 bg-white/20 border border-white/30 
                 backdrop-blur-md rounded-xl shadow-xl text-lg
                 hover:bg-white/30 transition inline-block"
    >
      Réserver notre salle des fêtes
    </motion.button>
  );
}
