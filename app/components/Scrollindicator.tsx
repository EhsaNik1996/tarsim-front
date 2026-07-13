"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="flex items-center justify-center mb-20">
      <div className="w-7 h-11 border-2 border-zinc-300 flex justify-center pt-2 rounded-full">
        <motion.span
          className="size-1.5 rounded-full bg-emerald-500"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}