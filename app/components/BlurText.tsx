"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type BlurTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
};

export default function BlurText({
  text,
  className = "",
  wordClassName = "",
  highlightWords = [],
  highlightClassName = "",
  delay = 0,
  stagger = 0.05,
}: BlurTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.trim().split(/\s+/);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : delay,
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: reduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 12, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduceMotion
        ? { duration: 0 }
        : {
            duration: 0.7,
            ease: [0.2, 0.65, 0.3, 1],
          },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap gap-x-[0.25em] gap-y-[0.05em] ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className={`inline-block ${wordClassName} ${
            highlightWords.includes(word) ? highlightClassName : ""
          }`}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
