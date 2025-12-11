"use client";

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-950 text-white py-16 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COLONNE 1 - IDENTITÉ */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">{SITE_CONFIG.name}</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Restaurant, bar & salle des fêtes à Paris. Où l'art culinaire rencontre
            l'art de recevoir.
          </p>
        </div>

        {/* COLONNE 2 - CONTACT */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Nous contacter</h4>

          <div className="space-y-3 text-white/70 text-sm">
            <a
              href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={18} /> {SITE_CONFIG.contact.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={18} /> {SITE_CONFIG.contact.email}
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MapPin size={18} /> {SITE_CONFIG.contact.address}
            </a>
          </div>
        </div>

        {/* COLONNE 3 - RÉSEAUX */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Réseaux sociaux</h4>

          <div className="flex items-center gap-4 text-white/70">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* BAS DE FOOTER */}
      <div className="text-center text-white/40 text-xs mt-12">
        © {new Date().getFullYear()} {SITE_CONFIG.name} — Tous droits réservés.
      </div>
    </footer>
  );
}
