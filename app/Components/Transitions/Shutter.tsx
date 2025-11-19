"use client";

import { motion } from "framer-motion";

export default function Shutter() {
  return (
    <>
      {/* Rideau gauche */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-1/2 h-full bg-black z-[9998]"
      />

      {/* Rideau droit */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-1/2 h-full bg-black z-[9998]"
      />
    </>
  );
}
