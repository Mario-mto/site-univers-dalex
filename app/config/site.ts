/**
 * Site configuration constants
 * Centralized configuration for easy maintenance and updates
 */

export const SITE_CONFIG = {
  name: "L'univers d'Alex",
  description: "Restaurant, Bar et Salle des fêtes",
  url: "https://universdalex.com", // Update with your actual domain
  contact: {
    phone: "+33 6 01 02 03 04",
    email: "contact@universdalex.com",
    address: "12 rue de la Dégustation, Paris",
    whatsapp: "330601020304", // International format without +
  },
  hours: {
    weekdays: {
      // Monday - Thursday
      open: { hour: 17, minute: 0 }, // 17:00
      close: { hour: 0, minute: 0 }, // 00:00 (midnight)
      days: [1, 2, 3, 4], // Mon-Thu
    },
    weekend: {
      // Friday - Saturday
      open: { hour: 17, minute: 0 }, // 17:00
      close: { hour: 2, minute: 0 }, // 02:00 (next day)
      days: [5, 6], // Fri-Sat
    },
    closed: [0], // Sunday
  },
  social: {
    instagram: "https://instagram.com/universdalex", // Update with actual links
    facebook: "https://facebook.com/universdalex",
  },
} as const;

