"use client";

import { motion, Variants } from "framer-motion";

const engineeringAreas = [
  {
    num: "01",
    title: "پلتفرم‌های SaaS",
    desc: "طراحی زیرساخت‌های چندمستاجری (Multi-tenant) و مقیاس‌پذیر.",
  },
  {
    num: "02",
    title: "سیستم‌های هوش مصنوعی",
    desc: "توسعه مدل‌های زبانی بزرگ، عامل‌های خودمختار و اتوماسیون فرآیندها.",
  },
  {
    num: "03",
    title: "اپلیکیشن‌های پیشرفته وب",
    desc: "پیاده‌سازی برنامه‌های تک‌صفحه‌ای و پویا با معماری مایکروفرانت‌اند.",
  },
];

export default function DigitalEngineering() {
  const detailVariants: Variants = {
    initial: { opacity: 0, x: 0, y: 15 },
    hover: {
      opacity: 1,
      x: -10,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const iconVariants: Variants = {
    initial: { x: 0, rotate: 45 },
    hover: {
      x: 10,
      rotate: 135,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden border-t border-zinc-900 bg-[#09090b] py-16 text-white md:py-24 mt-16">
      <div className="text-right px-6 md:px-16" dir="rtl">
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:mb-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="mb-3 block text-xs font-mono tracking-widest text-electric-blue">
              مهندسی دیجیتال
            </span>
            <h2 className="text-4xl leading-tight font-black tracking-tight text-zinc-100 md:text-6xl">
              فناوری‌هایی برای ساخت
              <span className="block text-electric-blue">محصولات دیجیتال پیشرفته</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engineeringAreas.map((item) => (
            <motion.div
              key={item.num}
              data-cursor="link"
              initial="initial"
              whileHover="hover"
              className="group relative flex min-h-65 cursor-none flex-col justify-between overflow-hidden rounded-3xl border border-zinc-900 bg-[#0d0d10] p-8 text-right md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-electric-blue" />
              <div className="pointer-events-none absolute bottom-0 left-1/2 z-30 h-0.75 w-0 -translate-x-1/2 rounded-full bg-electric-blue transition-[width] duration-500 ease-out group-hover:w-40" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-electric-blue/4 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-0 left-2 z-0 select-none font-mono text-8xl leading-none font-black text-[#131316] transition-colors duration-500 group-hover:text-electric-blue/10" dir="ltr">
                {item.num}
              </div>

              <div className="relative z-10 space-y-6">
                <motion.div
                  variants={iconVariants}
                  className="ml-auto mr-0 size-5 rounded-xs border-2 border-electric-blue/40 bg-electric-blue/10 transition-colors duration-500 group-hover:border-electric-blue group-hover:bg-electric-blue"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-electric-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 font-medium text-zinc-500">{item.desc}</p>
                </div>
              </div>

              <div className="relative z-10 mt-6 h-6 overflow-hidden">
                <motion.div variants={detailVariants} className="flex items-center gap-1 text-[11px] font-bold text-electric-blue">
                  <span>جزئیات فنی</span>
                  <span>←</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
