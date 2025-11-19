"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/15145559871" // <-- Change avec ton numéro
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white w-16 h-16 rounded-full shadow-xl
        flex items-center justify-center
      "
      style={{
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
      }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
