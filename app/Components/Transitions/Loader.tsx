"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      {/* Logo animé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/images/Logo.jpeg" // Ton logo "L'univers d'Alex"
          alt="Logo"
          width={120}
          height={120}
          className="opacity-90"
        />

        {/* Cercle Apple-style */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
