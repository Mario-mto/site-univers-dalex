"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import Modal from "../Components/Modal";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  // 🕒 Hook : calcule si le restaurant est ouvert
const [isOpen, setIsOpen] = useState(false);
const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
  const checkOpenStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0=dimanche ... 6=samedi
    const hour = now.getHours();
    const minutes = now.getMinutes();

    let open = false;

    // Horaires
    if (day >= 1 && day <= 4) {
      // Lundi → Jeudi : 17h - 00h
      open = hour >= 17 && hour < 24;
    } else if (day === 5 || day === 6) {
      // Vendredi & Samedi : 17h → 02h
      open = hour >= 17 || hour < 2;
    } else if (day === 0) {
      // Dimanche : fermé
      open = false;
    }

    setIsOpen(open);
  };

  checkOpenStatus();
  const interval = setInterval(checkOpenStatus, 60000); // rafraîchissement 1 min

  return () => clearInterval(interval);
}, []);


  return (
    <section
  id="contact"
  className="min-h-screen w-full py-40 px-6 bg-stone-900 text-white flex flex-col items-center"
>
  {/* TITRE */}
  <div className="text-center max-w-3xl mb-24">
    <h2 className="text-6xl font-bold mb-6">Contactez-nous</h2>
    <p className="text-white/70 text-lg">
      Pour une réservation ou privatisation, notre équipe est à votre écoute.
    </p>
  </div>

  {/* BLOC CENTRAL PREMIUM */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      relative bg-stone-800/70 backdrop-blur-xl
      border border-white/10 shadow-2xl
      p-12 rounded-3xl w-full max-w-2xl text-center
      hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]
      transition-shadow
    "
  >
    {/* SPOTLIGHT */}
    <div
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35), transparent 70%)",
      }}
    />

    <h3 className="text-3xl font-semibold mb-8">Informations</h3>

    <h3 className="text-3xl font-semibold mb-4">Informations</h3>

{/* BADGE ÉTAT */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
  className={`
    inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6
    ${isOpen ? "bg-green-600/20 text-green-400 border border-green-700/30" 
             : "bg-red-600/20 text-red-400 border border-red-700/30"}
  `}
>
  <span
    className={`
      w-2.5 h-2.5 rounded-full mr-2 
      ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}
    `}
  />
  {isOpen ? "Ouvert maintenant" : "Fermé actuellement"}
</motion.div>


    <div className="space-y-6 text-white/85 mx-auto">
      <div className="flex items-center justify-center gap-4">
        <Phone className="text-white/70" />
        <span>+33 6 01 02 03 04</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Mail className="text-white/70" />
        <span>contact@universdalex.com</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <MapPin className="text-white/70" />
        <span>12 rue de la Dégustation, Paris</span>
      </div>

      <div className="flex items-start justify-center gap-4 mt-4">
        <Clock className="text-white/70" />
        <div className="text-white/80 text-center">
          <p>Lundi – Jeudi : 17h – 00h</p>
          <p>Vendredi – Samedi : 17h – 02h</p>
          <p>Dimanche : Fermé</p>
        </div>
      </div>
    </div>

    {/* BOUTONS */}
    <div className="mt-12 flex flex-col items-center gap-4">
      <motion.a
        href="https://wa.me/330601020304"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 bg-green-600 rounded-xl shadow-md text-white 
                   font-medium hover:bg-green-500 transition w-full max-w-xs"
      >
        WhatsApp
      </motion.a>

      <ContactButton onClick={() => setModalOpen(true)} />
    </div>
  </motion.div>

  {/* MODAL */}
  <Modal visible={modalOpen} onClose={() => setModalOpen(false)}>
    <ContactForm />
  </Modal>
</section>

  );
}
