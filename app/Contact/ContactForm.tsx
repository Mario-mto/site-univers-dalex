"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "../Components/Toast";

export default function ContactForm() {
  // STATE
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // VALIDATION LIVE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Réservation");
  const [message, setMessage] = useState("");

  const [shake, setShake] = useState(false);

  // TOAST
  const [toast, setToast] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((p) => ({ ...p, show: false })), 3000);
  };

  // VALIDATION CHECK
  const isStep1Valid = name.length > 1 && /\S+@\S+\.\S+/.test(email);
  const isStep2Valid = message.length > 3;

  const animateShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleNext = () => {
    if (!isStep1Valid) return animateShake();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid) return animateShake();

    setLoading(true);
    try {
      // FormSubmit.co will handle the submission
      // The form action will be triggered by the native form submission
      showToast("success", "Message envoyé avec succès !");
      
      // Reset form after a delay
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setType("Réservation");
        setStep(1);
        setLoading(false);
      }, 2000);
    } catch (error) {
      showToast("error", "Erreur lors de l'envoi. Veuillez réessayer.");
      setLoading(false);
    }
  };

  return (
    <>
      <Toast show={toast.show} type={toast.type} message={toast.message} />

      <motion.form
        action="https://formsubmit.co/mario.montcho@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        className="bg-stone-800/70 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl relative"
      >
        {/* HONEYPOT ANTI SPAM */}
        <input type="text" name="_honey" className="hidden" />

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="http://localhost:3000" />

        {/* PROGRESS BAR */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded-t-xl overflow-hidden">
          <motion.div
            className="h-full bg-white/60"
            animate={{ width: step === 1 ? "50%" : "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 45 }}
              transition={{ duration: 0.4 }}
              className={shake ? "animate-shake" : ""}
            >
              <h3 className="text-3xl font-semibold mb-6">Vos informations</h3>

              <input
                name="Nom"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom complet"
                required
                minLength={2}
                className={`w-full px-4 py-3 rounded-xl border ${
                  name.length > 1 ? "border-green-500" : "border-red-500"
                } bg-stone-900/50 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20`}
              />

              <input
                name="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse email"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                className={`w-full px-4 py-3 rounded-xl border ${
                  /\S+@\S+\.\S+/.test(email)
                    ? "border-green-500"
                    : "border-red-500"
                } bg-stone-900/50 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20`}
              />

              <select
                name="Type de demande"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-white/10 text-white"
              >
                <option>Réservation</option>
                <option>Privatisation</option>
                <option>Question</option>
              </select>

              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.04 }}
                className="w-full py-3 mt-4 bg-white/20 text-white rounded-xl"
              >
                Suivant →
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.4 }}
              className={shake ? "animate-shake" : ""}
            >
              <h3 className="text-3xl font-semibold mb-6">Votre message</h3>

              <textarea
                name="Message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                required
                minLength={4}
                className={`w-full px-4 py-3 rounded-xl border ${
                  isStep2Valid ? "border-green-500" : "border-red-500"
                } bg-stone-900/50 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none`}
              />

              <div className="flex gap-4 mt-4">
                <motion.button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-white/10 rounded-xl text-white"
                >
                  ← Retour
                </motion.button>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-white/20 rounded-xl text-white flex justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Envoyer"
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </>
  );
}
