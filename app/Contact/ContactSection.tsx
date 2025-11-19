"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full py-32 px-10 bg-stone-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Contactez-nous</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Pour une réservation, une privatisation de notre salle des fêtes ou
          toute autre demande, notre équipe est à votre écoute.
        </p>
      </div>

      {/* GRID INFO + FORMULAIRE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* BLOC INFOS — style dark premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-stone-800/70 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-semibold mb-6">Informations</h3>

          <div className="space-y-6 text-white/85">
            <div className="flex items-center gap-4">
              <Phone className="text-white/70" />
              <span>+33 6 01 02 03 04</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-white/70" />
              <span>contact@universdalex.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-white/70" />
              <span>12 rue de la Dégustation, Paris</span>
            </div>

            <div className="flex items-start gap-4 mt-4">
              <Clock className="text-white/70" />
              <div className="text-white/80">
                <p>Lundi – Jeudi : 17h – 00h</p>
                <p>Vendredi – Samedi : 17h – 02h</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div className="mt-10 flex flex-col gap-4">
            <motion.a
              href="https://wa.me/330601020304"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-green-600 rounded-xl shadow-md text-white font-medium hover:bg-green-500 transition"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* FORMULAIRE — thème stone 800 */}
        <ContactForm />
      </div>
    </section>
  );
}
