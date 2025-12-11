import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'univers d'Alex | Restaurant, Bar & Salle des fêtes",
  description:
    "Découvrez L'univers d'Alex : un restaurant raffiné, un bar élégant et une salle des fêtes à Paris. Cuisine authentique, ambiance chaleureuse et expérience inoubliable.",
  keywords: [
    "restaurant Paris",
    "bar Paris",
    "salle des fêtes Paris",
    "cuisine africaine",
    "événements privés",
    "réservation restaurant",
  ],
  authors: [{ name: "L'univers d'Alex" }],
  openGraph: {
    title: "L'univers d'Alex | Restaurant, Bar & Salle des fêtes",
    description:
      "Restaurant raffiné, bar élégant et salle des fêtes à Paris. Cuisine authentique et ambiance chaleureuse.",
    type: "website",
    locale: "fr_FR",
    siteName: "L'univers d'Alex",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'univers d'Alex | Restaurant, Bar & Salle des fêtes",
    description:
      "Restaurant raffiné, bar élégant et salle des fêtes à Paris. Cuisine authentique et ambiance chaleureuse.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
