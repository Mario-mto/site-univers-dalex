"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useTransform, useScroll } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#f6eee3] text-[#4a3722] py-32 px-10"
    >
        {/* BACKGROUND PARALLAX */}
<motion.div
  className="absolute inset-0 bg-[url('/images/wood-texture.jpg')] bg-cover bg-center opacity-10"
  style={{
    y: useTransform(useScroll().scrollYProgress, [0, 1], [0, 150]),
    scale: useTransform(useScroll().scrollYProgress, [0, 1], [1, 1.1]),
  }}
/>

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
          Contactez-nous
        </h2>
        <p className="text-lg text-[#6b4e2e] max-w-2xl mx-auto">
          Une question, une demande spéciale ou envie de réserver ?  
          Nous sommes là pour vous aider.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT – Contact Infos */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Adresse */}
          <div className="flex items-start gap-5">
            <MapPin size={32} className="text-[#8b6f47]" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Adresse</h3>
              <p className="text-[#4a3722]/80">
                123 Rue du Bon Goût,  
                Montréal, QC H2X 1Y3
              </p>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex items-start gap-5">
            <Phone size={32} className="text-[#8b6f47]" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Téléphone</h3>
              <p className="text-[#4a3722]/80">+1 (514) 555-9871</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <Mail size={32} className="text-[#8b6f47]" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Email</h3>
              <p className="text-[#4a3722]/80">contact@universdalex.ca</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex items-start gap-5">
            <Clock size={32} className="text-[#8b6f47]" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Horaires</h3>

              <ul className="text-[#4a3722]/80 leading-relaxed">
                <li>Lundi - Jeudi : 11h30 - 22h00</li>
                <li>Vendredi : 11h30 - 23h00</li>
                <li>Samedi : 12h00 - 23h00</li>
                <li>Dimanche : 12h00 - 21h00</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – Formulaire */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          action="https://formspree.io/f/yourFormID_here"
          method="POST"
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-[#8b6f47]/20"
        >
          {/* NOM */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Nom *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f6eee3] border border-[#8b6f47]/30 text-[#4a3722] outline-none focus:border-[#8b6f47]"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f6eee3] border border-[#8b6f47]/30 text-[#4a3722] outline-none focus:border-[#8b6f47]"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Message *</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f6eee3] border border-[#8b6f47]/30 text-[#4a3722] outline-none focus:border-[#8b6f47]"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-4 bg-[#8b6f47] hover:bg-[#7d613f] text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Envoyer le message
          </button>
        </motion.form>
      </div>
      <WhatsAppButton />
    </section>
  );
}
