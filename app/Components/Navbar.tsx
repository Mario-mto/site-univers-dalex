"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Navitem from "./NavItem" 
import BackToTop from "./BackToTop";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  {/* <BackToTop /> */}
  

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
        <div className="text-2xl font-semibold text-white">Univers d'Alex</div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Navitem target="home">Accueil</Navitem>
          <Navitem target="menu">Menu</Navitem>
          <Navitem target="about">À propos</Navitem>

          <button className="px-4 py-2 bg-white/20 rounded-xl text-white hover:bg-white/30 transition">
            Réserver
          </button>
        </div>

        {/* <div className="md:hidden">
          {open ? (
            <X
              onClick={() => setOpen(false)}
              className="text-white w-7 h-7 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setOpen(true)}
              className="text-white w-7 h-7 cursor-pointer"
            />
          )}
        </div> */}
        
      </motion.nav>

      {/* <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-900/95 
                         backdrop-blur-xl z-50 p-8 flex flex-col gap-6"
            >
              <a className="text-white text-xl" onClick={() => setOpen(false)}>
                Accueil
              </a>
              <a className="text-white text-xl" onClick={() => setOpen(false)}>
                Menu
              </a>
              <a className="text-white text-xl" onClick={() => setOpen(false)}>
                À propos
              </a>

              <button className="mt-4 px-4 py-3 bg-white/20 rounded-xl text-white hover:bg-white/30 transition">
                Réserver
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
      
    </>
  );
};

export default Navbar;
