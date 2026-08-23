"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const processItems = ["طراحی", "توسعه", "اجرا", "رشد"];
const expertiseItems = [
  "پلتفرم‌های وب",
  "اپلیکیشن موبایل",
  "هوش مصنوعی",
  "زیرساخت ابری",
];

function MarqueeBand({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex h-14 w-full min-w-0 max-w-full items-center overflow-hidden whitespace-nowrap sm:h-19 ${
        reverse
          ? "border-t-4 border-white bg-electric-blue text-white"
          : "bg-[#c7ff00] text-black"
      }`}
      aria-hidden="true"
      dir="ltr"
    >
      <div className={`flex w-max shrink-0 animate-[contactTicker_24s_linear_infinite] ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {[...items, ...items, ...items].map((item, index) => (
          <span
            className="me-4 inline-flex items-center gap-4 font-vazir text-2xl font-black tracking-[-0.04em] sm:text-[clamp(25px,2.8vw,42px)]"
            key={`${item}-${index}`}
          >
            {item}
            <span className="text-[.85em]">✦</span>
            <span className="text-[.42em]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative z-2 mt-28 w-full max-w-full scroll-mt-20 overflow-x-clip px-3 pb-23 sm:px-8 sm:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative grid min-h-155 place-items-center overflow-hidden rounded-[48px] bg-electric-blue text-center text-white sm:min-h-162.5 sm:rounded-[64px]"
      >
        <div
          className="absolute inset-[-20%] bg-[radial-gradient(circle_at_50%_32%,rgba(101,125,255,.55),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(20,51,220,.5),transparent_38%)]"
          aria-hidden="true"
        />
        <div className="relative z-1 w-[min(800px,calc(100%-40px))] pb-16 sm:pb-11">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[.08em] text-white/75 sm:px-5 sm:text-xs">
            <span className="size-2 rounded-full bg-[#05e986] shadow-[0_0_12px_rgba(5,233,134,.55)]" />
            یک همکاری ماندگار
          </div>
          <h2 className="mt-8 text-[34px] leading-tight font-black tracking-[-.045em] sm:text-5xl sm:leading-[1.15] md:mt-10 md:text-6xl">
            بیایید سیستمی بسازیم
            <span className="block">که برای سال‌های آینده</span>
            <span className="block text-[#c7ff00]">ارزش داشته باشد.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-170 text-[13px] leading-[1.9] text-white/70 sm:text-[17px]">
            اگر به دنبال یک پیمانکار هستید، احتمالاً گزینه‌های زیادی وجود دارد. اگر به دنبال یک شریک مهندسی برای طراحی، توسعه و نگهداری یک سیستم ماندگار هستید، خوشحال می‌شویم گفت‌وگو را آغاز کنیم.
          </p>
          <div className="mt-7 flex items-center justify-center sm:mt-8">
            <motion.a
              href="mailto:hello@tarsim.studio"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-13 w-full max-w-67.5 min-w-49.5 items-center justify-center gap-3.5 rounded-full bg-[#c7ff00] px-7 text-sm font-black text-[#090909] transition-colors hover:bg-[#d7ff43] sm:w-auto"
            >
              شروع همکاری <ArrowLeft size={18} strokeWidth={2.4} />
            </motion.a>
          </div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -inset-x-24 bottom-4 z-4 rotate-[-1.45deg] sm:-inset-x-16 sm:bottom-7">
        <MarqueeBand items={processItems} />
        <MarqueeBand items={expertiseItems} reverse />
      </div>
    </section>
  );
}
