"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed bottom-8 left-1/2 -translate-x-1/2
            bg-stone-800 text-white px-6 py-3 rounded-xl shadow-xl
            border border-white/10 backdrop-blur-lg
            z-[9999]
          "
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
