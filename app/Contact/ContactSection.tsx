"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import Modal from "../Components/Modal";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";
import { SITE_CONFIG } from "../config/site";

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
      const currentTime = hour * 60 + minutes; // Total minutes since midnight

      let open = false;

      // Check if closed day
      if ((SITE_CONFIG.hours.closed as readonly number[]).includes(day)) {
        setIsOpen(false);
        return;
      }

      // Check weekday hours (Mon-Thu)
      if (
        (SITE_CONFIG.hours.weekdays.days as readonly number[]).includes(day)
      ) {
        const openTime =
          SITE_CONFIG.hours.weekdays.open.hour * 60 +
          SITE_CONFIG.hours.weekdays.open.minute;
        const closeTime =
          SITE_CONFIG.hours.weekdays.close.hour * 60 +
          SITE_CONFIG.hours.weekdays.close.minute;
        open = currentTime >= openTime && currentTime < closeTime;
      }
      // Check weekend hours (Fri-Sat)
      else if (
        (SITE_CONFIG.hours.weekend.days as readonly number[]).includes(day)
      ) {
        const openTime =
          SITE_CONFIG.hours.weekend.open.hour * 60 +
          SITE_CONFIG.hours.weekend.open.minute;
        const closeTime =
          SITE_CONFIG.hours.weekend.close.hour * 60 +
          SITE_CONFIG.hours.weekend.close.minute;
        // Handle overnight hours (e.g., 17:00 to 02:00 next day)
        open = currentTime >= openTime || currentTime < closeTime;
      }

      setIsOpen(open);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-10 bg-stone-900 text-white flex flex-col items-center"
    >
      {/* TITRE */}
      <div className="text-center max-w-3xl mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Parlons de votre projet
        </h2>
        <p className="text-lg md:text-xl text-white/60 mb-6 md:mb-8 font-light">
          Réservation, privatisation, événement
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Nous sommes là pour transformer vos envies en réalité. Une table pour
          ce soir ? Un événement à organiser ? Contactez-nous, nous vous
          répondons avec plaisir.
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
      p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl w-full max-w-2xl text-center
      hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]
      transition-shadow group
    "
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
          Nos coordonnées
        </h3>

        {/* BADGE ÉTAT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`
    inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-8 md:mb-10
    ${
      isOpen
        ? "bg-green-600/20 text-green-400 border border-green-700/30"
        : "bg-red-600/20 text-red-400 border border-red-700/30"
    }
  `}
        >
          <span
            className={`
      w-2.5 h-2.5 rounded-full mr-2 
      ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}
    `}
          />
          {isOpen ? "Ouvert actuellement" : "Fermé"}
        </motion.div>

        <div className="space-y-5 md:space-y-6 text-white/85 mx-auto">
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-3 md:gap-4 hover:text-white transition-colors"
          >
            <Phone className="text-white/70" size={20} />
            <span className="text-sm md:text-base">
              {SITE_CONFIG.contact.phone}
            </span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="flex items-center justify-center gap-3 md:gap-4 hover:text-white transition-colors"
          >
            <Mail className="text-white/70" size={20} />
            <span className="text-sm md:text-base">
              {SITE_CONFIG.contact.email}
            </span>
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              SITE_CONFIG.contact.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 md:gap-4 hover:text-white transition-colors"
          >
            <MapPin className="text-white/70" size={20} />
            <span className="text-sm md:text-base">
              {SITE_CONFIG.contact.address}
            </span>
          </a>

          <div className="flex items-start justify-center gap-3 md:gap-4 mt-4 md:mt-5">
            <Clock className="text-white/70 mt-0.5" size={20} />
            <div className="text-white/80 text-center text-sm md:text-base">
              <p>Lundi – Jeudi : 17h – 00h</p>
              <p>Vendredi – Samedi : 17h – 02h</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        {/* BOUTONS */}
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-4">
          <motion.a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-600 rounded-xl shadow-md text-white 
                   font-medium hover:bg-green-500 transition w-full max-w-xs"
            aria-label="Nous contacter sur WhatsApp"
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
