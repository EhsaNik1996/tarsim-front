"use client";
import { motion } from "framer-motion";

const partners = ["DATA ADVISOR", "TECH LAB", "CLOUD INFRA", "CYBER SHIELD", "NEXUS CO", "CORE CORE"];

export default function Partners() {
  return (
    <section className="py-6 bg-gray-50 border-t border-b border-stroke-gray overflow-hidden relative">
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
      
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["100%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-20 text-4xl font-extrabold text-stroke-gray/60 font-mono tracking-widest pr-20"
        >
          {[...partners, ...partners].map((name, idx) => (
            <span key={idx} className="hover:text-electric-blue transition-colors duration-300 cursor-default">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}