"use client";

import { useState } from "react";
import Toast from "../Components/Toast";
import { motion } from "framer-motion";
  

export default function ContactForm() {
    const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    // Affiche le toast
    setShowToast(true);

    // Le toast disparaît après 3 sec
    setTimeout(() => setShowToast(false), 3000);
  };

    return(
    <>
      <Toast show={showToast} message="Message envoyé avec succès !" />

      <motion.form
        action="https://formsubmit.co/TON_EMAIL"
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-stone-800/70 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl"
      >
        {/* HIDDEN FIELDS */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://universdalex.com/#contact" />

        <h3 className="text-3xl font-semibold mb-6">Envoyer un message</h3>

        <div className="space-y-6">
          <input
            name="Nom"
            placeholder="Nom complet"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-white/10 text-white
            placeholder-white/40 focus:outline-none focus:border-white/40"
          />

          <input
            type="email"
            name="Email"
            placeholder="Adresse email"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-white/10 text-white
            placeholder-white/40 focus:outline-none focus:border-white/40"
          />

          <textarea
            name="Message"
            placeholder="Votre message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-white/10 text-white
            placeholder-white/40 focus:outline-none focus:border-white/40"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white/20 border border-white/20 text-white rounded-xl
            hover:bg-white/30 transition shadow-lg"
          >
            Envoyer
          </motion.button>
        </div>
      </motion.form>
    </>
  );
}
