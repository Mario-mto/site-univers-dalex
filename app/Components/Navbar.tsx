"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navitem from "./NavItem";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          w-full fixed top-0 left-0 z-50 
          flex items-center justify-between
          px-8 transition-all duration-300

          backdrop-blur-md 
          border-b border-white/20

          ${scrolled ? "bg-white/10 py-3" : "bg-white/5 py-5"}
        `}
      >
        {/* LOGO */}
        <div className="text-2xl font-semibold text-white">
          <Navitem target="hero">L'univers d'Alex</Navitem>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Navitem target="home">Accueil</Navitem>
          <Navitem target="menu">Menu</Navitem>
          <Navitem target="salle">Salle des fêtes</Navitem>

          <motion.button
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white/20 rounded-xl text-white 
             hover:bg-white/30 transition shadow-lg backdrop-blur-md"
          >
            Contactez-nous
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
