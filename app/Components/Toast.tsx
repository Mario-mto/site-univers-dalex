"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

type ToastProps = {
  show: boolean;
  type: "success" | "error";
  message: string;
};

export default function Toast({ show, type, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed bottom-8 left-1/2 -translate-x-1/2
            px-6 py-4 rounded-xl shadow-xl backdrop-blur-lg
            z-[9999] flex items-center gap-3
            border border-white/10
          "
          style={{
            background:
              type === "success"
                ? "rgba(34,197,94,0.8)" // vert
                : "rgba(239,68,68,0.8)", // rouge
          }}
        >
          {type === "success" ? (
            <CheckCircle size={22} className="text-white" />
          ) : (
            <AlertCircle size={22} className="text-white" />
          )}
          <span className="text-white">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
