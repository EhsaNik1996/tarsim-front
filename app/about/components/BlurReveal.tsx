"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type BlurRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  immediate?: boolean;
};

export default function BlurReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.22,
  immediate = false,
}: BlurRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 18, filter: "blur(8px)" }
      }
      animate={immediate ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={immediate ? undefined : { once: true, amount }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.75, delay, ease: [0.2, 0.65, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
