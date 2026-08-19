"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
const services = {
  main: {
    eyebrow: "ENGINEERING",
    title: "محصولات\nدیجیتال",
    description:
      "طراحی و توسعه نرم‌افزارهای اختصاصی، سامانه‌های سازمانی، CMS اختصاصی و پلتفرم‌های تحت وب.",
    tags: ["Web Applications", "Custom Software", "Digital Products"],
  },
  smallTop: {
    eyebrow: "INFRASTRUCTURE",
    title: "زیرساخت فناوری",
    description: "زیرساخت‌هایی پایدار برای سازمان‌های در حال رشد.",
  },
  smallBottom: {
    eyebrow: "KNOWLEDGE",
    title: "مدیریت دانش",
    description: "راهکارهای تخصصی برای کتابخانه‌ها، آرشیوها و مراکز اسناد.",
  },
  blue: {
    eyebrow: "#CULTURAL_TECH",
    title: "موزه و\nمیراث فرهنگی",
    description:
      "از طراحی روایت موزه و مستندسازی آثار تا ویترین، بازدید مجازی و سامانه‌های دیجیتال.",
    tags: [
      "Museum Systems",
      "Documentation",
      "Virtual Experience",
      "Digital Heritage",
    ],
  },
  bottomLeft: {
    eyebrow: "ENGINEERING",
    title: "خدمات مهندسی",
    description:
      "مشاوره، معماری سیستم، استانداردسازی، مستندسازی، نظارت فنی و طراحی فرآیند.",
  },
  bottomRight: {
    eyebrow: "END-TO-END",
    title: "از طراحی تا نگهداری",
    description:
      "ما فقط پروژه تحویل نمی‌دهیم؛ سیستم‌هایی می‌سازیم که برای سال‌ها قابل توسعه و نگهداری باشند.",
  },
};
const cardTransition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };
export default function CapabilitiesSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden px-6 py-0 md:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-350">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={cardTransition}
        >
          <div className="mb-2 font-mono text-xs font-medium text-electric-blue">
            WHAT WE DO
          </div>
          <div className="relative">
            <h2 className="relative z-10 text-4xl md:text-6xl font-black md:leading-15 pt-2">
              توانمندی‌های <br />
              <span className="text-electric-blue">ترسیم</span>
            </h2>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none text-[clamp(5rem,13vw,12rem)] font-black leading-none text-transparent"
            >
              SYSTEMS
            </span>
          </div>
        </motion.div>
        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 mt-7 md:mt-16">
          {/* Main green card */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...cardTransition, delay: 0.05 }}
            className="group relative min-h-96 md:min-h-105 overflow-hidden rounded-[28px] bg-green-500/80 p-5 md:p-8 text-right transition-transform duration-300 ease-out hover:-translate-y-1.5 lg:col-span-5 lg:min-h-125 lg:p-10"
          >
            <div className="flex items-center w-fit gap-x-1.5 rounded-full bg-black/95 px-2.5 py-2 text-[10px] font-bold tracking-wide text-white">
              HIGH PERFORMANCE
              <Zap className="size-3" />
            </div>

            <div className="absolute inset-x-10 bottom-10">
              <div className="hidden md:block mb-4 text-xs font-medium tracking-wider text-black/60">
                {services.main.eyebrow}
              </div>
              <h3 className="whitespace-pre-line text-4xl font-black leading-10 md:leading-16 text-black md:text-6xl">
                {services.main.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-black/70">
                {services.main.description}
              </p>
              <div className="mt-6 border-t border-black/15 pt-5">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {services.main.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider text-black/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
          {/* Middle column */}
          <div className="flex w-full flex-row gap-4 md:flex-col lg:col-span-3">
            {/* Small white card */}
            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.25 }}
              className="group flex basis-1/2 gap-y-2.5 flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1.5 rounded-[28px] border border-black/10 bg-white p-7 hover:border-black/20"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-black/4 group-hover:bg-electric-blue/5 group-hover:text-electric-blue transition duration-300 text-lg">
                ◈
              </span>

              <div>
                <div className="mb-2 text-[9px] font-bold text-black/35">
                  {services.smallTop.eyebrow}
                </div>
                <h3 className="text-base md:text-2xl font-bold tracking-tight text-black group-hover:text-electric-blue transition duration-300">
                  {services.smallTop.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-black/45">
                  {services.smallTop.description}
                </p>
              </div>
            </motion.article>
            {/* Small white card */}
            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.25 }}
              className="group flex basis-1/2 gap-y-2.5 flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1.5 rounded-[28px] border border-black/10 bg-white p-7 hover:border-black/20"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-black/4 text-lg group-hover:bg-electric-blue/5 group-hover:text-electric-blue transition duration-300">
                ◎
              </span>

              <div>
                <div className="mb-2 text-[9px] font-bold text-black/35">
                  {services.smallBottom.eyebrow}
                </div>
                <h3 className="text-base md:text-2xl font-bold text-black group-hover:text-electric-blue transition duration-300">
                  {services.smallBottom.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-black/45">
                  {services.smallBottom.description}
                </p>
              </div>
            </motion.article>
          </div>
          {/* Blue featured card */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...cardTransition, delay: 0.2 }}
            className="group relative min-h-96 md:min-h-105 transition-transform duration-300 ease-out hover:-translate-y-1.5 overflow-hidden rounded-[28px] bg-[#2450ff] p-8 text-white lg:col-span-4 lg:min-h-125 lg:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-bold tracking-[0.15em] text-white/55">
                {services.blue.eyebrow}
              </span>
              <span className="text-7xl font-black leading-none text-white/[0.07] transition-transform duration-700 group-hover:scale-110">
                AI
              </span>
            </div>
            <div className="absolute inset-x-8 bottom-8 lg:inset-x-10 lg:bottom-10">
              <h3 className="whitespace-pre-line text-4xl font-black leading-11 md:leading-16 md:text-6xl">
                {services.blue.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                {services.blue.description}
              </p>
              <div className="mt-6 border-t border-white/15 pt-5">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {services.blue.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
          {/* Bottom left */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...cardTransition, delay: 0.3 }}
            className="group relative min-h-47.5 transition-transform duration-300 ease-out hover:-translate-y-1.5 overflow-hidden rounded-[28px] bg-[#090909] p-8 text-white lg:col-span-6"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold group-hover:text-electric-blue transition-transform duration-500">
                  {services.bottomLeft.title}
                </h3>
                <span className="text-4xl text-white/15 transition-transform duration-500 group-hover:rotate-12 group-hover:text-electric-blue">
                  ✦
                </span>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/45">
                {services.bottomLeft.description}
              </p>
            </div>
          </motion.article>
          {/* Bottom right */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...cardTransition, delay: 0.4 }}
            className="group relative min-h-47.5 transition-transform duration-300 ease-out hover:-translate-y-1.5 overflow-hidden rounded-[28px] bg-[#090909] p-8 text-white lg:col-span-6"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold tracking-tight group-hover:text-electric-blue transition-transform duration-500">
                  {services.bottomRight.title}
                </h3>

                <span className="text-4xl text-white/15 group-hover:text-electric-blue transition-transform duration-500 group-hover:-rotate-12">
                  ◌
                </span>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/45">
                {services.bottomRight.description}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
