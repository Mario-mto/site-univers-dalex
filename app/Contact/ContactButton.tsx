"use client";

import { motion } from "framer-motion";

interface ContactButtonProps {
  onClick: () => void;
}

export default function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-white/20 border border-white/30 
        rounded-xl text-white shadow-md hover:bg-white/30 transition-colors"
      aria-label="Ouvrir le formulaire de contact"
    >
      Envoyer un message
    </motion.button>
  );
}