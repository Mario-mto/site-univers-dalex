"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type NavitemProps = {
  target: string;  // id de section
  children: React.ReactNode;
};

export default function Navitem({ target, children }: NavitemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname !== "/") {
      // On revient à la page principale
      router.push(`/#${target}`);
    } else {
      // On est déjà sur la page principale
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.button
      onClick={handleClick}
      className="relative text-white/70 hover:text-white transition cursor-pointer px-2 bg-transparent border-none"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {children}

      <motion.span
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute left-0 -bottom-1 h-[2px] bg-white"
      />
    </motion.button>
  );
};

