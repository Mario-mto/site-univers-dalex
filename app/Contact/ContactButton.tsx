"use client";

import { motion } from "framer-motion";

export default function ContactButton({ onClick }: any) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="px-8 py-4 bg-white/20 border border-white/30 
        rounded-xl text-white shadow-md hover:bg-white/30"
    >
      Contactez-nous
    </motion.button>
  );
}