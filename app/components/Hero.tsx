"use client";

import BlurText from "./BlurText";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-white px-6 pb-24 pt-28 md:px-16 md:pb-32 md:pt-32"
      dir="rtl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(79,82,255,0.09)_1px,transparent_0)] bg-size-[29px_29px]" />
      <div className="pointer-events-none absolute -right-72 top-4 size-160 rounded-full bg-electric-blue/5 blur-[110px]" />
      <div className="pointer-events-none absolute -left-72 bottom-0 size-160 rounded-full bg-electric-blue/5 blur-[110px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col items-center text-center">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 10, filter: "blur(6px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 border border-zinc-200 bg-white/85 px-4 py-2 mb-8 text-[10px] font-bold text-zinc-500 shadow-sm backdrop-blur-sm sm:text-xs rounded-full"
        >
          <span className="size-2 bg-electric-blue shadow-sm rounded-full" />
          <span className="hidden md:block">از سال 1389</span>
          <span className="hidden md:block text-zinc-300">•</span>
          <span>مهندسی سیستم</span>
          <span className="text-zinc-300">•</span>
          <span>محصولات دیجیتال</span>
          <span className="text-zinc-300">•</span>
          <span>زیرساخت</span>
          <span className="text-zinc-300 hidden md:block">•</span>
          <span className="hidden md:block">مدیریت دانش</span>
        </motion.div>

        <h1 className="max-w-275 text-4xl xl:text-7xl font-black leading-12 xl:leading-24">
          <BlurText
            text="سیستم‌هایی می‌سازیم که سال‌ها بتوان به آن‌ها"
            delay={0.18}
            stagger={0.07}
            className="justify-center"
          />
          <BlurText
            text="اعتماد کرد."
            delay={0.75}
            stagger={0.07}
            className="justify-center"
            highlightWords={["اعتماد"]}
            highlightClassName="text-electric-blue"
          />
        </h1>

        <p className="mt-7 max-w-220 text-[15px] leading-8 text-zinc-500 sm:text-base md:text-lg md:leading-9">
          <BlurText
            text="ترسیم یک شرکت مهندسی سیستم است. از طراحی محصولات دیجیتال و زیرساخت‌های فناوری گرفته تا سامانه‌های مدیریت دانش، کتابخانه‌ها و موزه‌ها، ما سیستم‌هایی را طراحی، اجرا و نگهداری می‌کنیم که برای استفاده بلندمدت، توسعه‌پذیری و پایداری ساخته شده‌اند."
            delay={1}
            stagger={0.025}
            className="justify-center"
          />
        </p>

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 16, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 1.8,
          }}
          className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric-blue"
          >
            <span>شروع همکاری</span>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-8 py-4 text-sm font-bold text-zinc-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-blue hover:text-electric-blue"
          >
            مشاهده پروژه‌ها
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="رفتن به بخش پروژه‌ها"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 z-10 flex h-9 w-5 -translate-x-1/2 justify-center rounded-full border border-zinc-300 bg-white/80 pt-2 backdrop-blur-sm md:bottom-8"
      >
        <motion.span
          className="w-1 h-2.5 rounded-full bg-electric-blue"
          animate={
            reduceMotion ? undefined : { y: [0, 5, 0], opacity: [1, 0.6, 1] }
          }
          transition={{ duration: 1.65, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
