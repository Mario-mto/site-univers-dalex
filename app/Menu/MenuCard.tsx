"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function MenuCard({ title, description, price, image }: Props) {
  return (
    <motion.div
      className="relative group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform duration-200 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;

        const spotlight = card.querySelector(".spotlight") as HTMLElement;
        spotlight.style.opacity = "0.35";
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;

        card.style.transform = `
          perspective(900px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;

        const spotlight = card.querySelector(".spotlight") as HTMLElement;
        spotlight.style.opacity = "0";
      }}
    >
      {/* SPOTLIGHT */}
      <div
        className="spotlight pointer-events-none absolute w-40 h-40 rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.5), transparent)",
        }}
      />

      {/* IMAGE */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-white/70 mt-2">{description}</p>
        <p className="text-white mt-4 text-xl font-bold">{price}</p>
      </div>
    </motion.div>
  );
}
