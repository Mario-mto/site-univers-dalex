"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed bottom-6 right-6 z-50
              bg-white/20 backdrop-blur-md
              border border-white/30
              text-white p-3 rounded-full
              shadow-lg hover:bg-white/30 transition cursor-pointer
            "
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    );
  };

export default BackToTop;