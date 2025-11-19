"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ visible, onClose, children }: any) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* BACKDROP */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 
            bg-stone-900 rounded-2xl border border-white/10 shadow-2xl p-8 w-[90%] max-w-lg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
