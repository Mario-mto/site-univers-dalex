"use client";

import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Shutter from "./Shutter";
import Reveal from "./Reveal";
import { useState } from "react";
import type { ReactNode } from "react";

type TransitionWrapperProps = {
    children: ReactNode;
  };
  

export default function TransitionWrapper({ children }:TransitionWrapperProps) {
  const [loading, setLoading] = useState(true);

  // Masque le loader après 900ms
  setTimeout(() => setLoading(false), 900);

  return (
    <AnimatePresence mode="wait">
      {loading && <Loader />}
      {!loading && (
        <>
          <Reveal>{children}</Reveal>
          <Shutter />
        </>
      )}
    </AnimatePresence>
  );
}
