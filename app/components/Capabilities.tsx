"use client";
import { motion } from "framer-motion";
import { Paintbrush, Presentation, Zap } from "lucide-react";
const services = {
  main: {
    eyebrow: "ENGINEERING",
    title: "محصولات\nدیجیتال",
    description:
      "طراحی و توسعه نرم‌افزارهای اختصاصی، سامانه‌های سازمانی، CMS اختصاصی، پلتفرم‌های تحت وب و راهکارهای دیجیتال.",
    tags: ["Web Applications", "Custom Software", "Digital Products"],
  },
  smallTop: {
    eyebrow: "INFRASTRUCTURE",
    title: "زیرساخت فناوری",
    description:
      "طراحی و اجرای شبکه، مراکز داده، زیرساخت‌های پسیو، مانیتورینگ، مجازی‌سازی و خدمات DevOps.",
  },
  smallBottom: {
    eyebrow: "KNOWLEDGE",
    title: "سامانه‌های مدیریت دانش",
    description:
      "راهکارهای تخصصی برای کتابخانه‌ها، آرشیوها، مراکز اسناد و مدیریت اطلاعات.",
  },
  blue: {
    eyebrow: "#CULTURAL_TECH",
    title: "موزه و\nمیراث فرهنگی",
    description:
      "از طراحی روایت موزه تا زیرساخت، ویترین، مستندسازی آثار، بازدید مجازی و سامانه‌های تخصصی.",
    tags: [
      "Museum Systems",
      "Documentation",
      "Virtual Experience",
      "Digital Heritage",
    ],
  },
};

const bottomServices = [
  {
    title: "خدمات مهندسی",
    description:
      "مشاوره، معماری سیستم، استانداردسازی، مستندسازی، نظارت فنی و طراحی فرآیند.",
    icon: Presentation,
  },
  {
    title: "طراحی رابط و تجربه کاربری",
    description:
      "طراحی کاربرمحور برای جریان‌های روشن، وضعیت‌های قابل‌فهم و تصمیم‌های دقیق محصول.",
    icon: Paintbrush,
  },
];

const cardTransition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };
export default function Capabilities() {
  return (
    <section
      id="services"
      dir="rtl"
      className="relative overflow-hidden px-6 py-16 md:px-16 md:py-24"
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
            توانمندی‌ها
          </div>
          <div className="relative">
            <h2 className="relative z-10 text-4xl md:text-7xl font-black md:leading-19 pt-2">
              توانمندی‌هایی که در کنار هم،
              <span className="block text-electric-blue">یک سیستم کامل می‌سازند.</span>
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 mt-7 md:mt-16">
          {/* Main green card */}
          <motion.article
            data-cursor="link"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...cardTransition, delay: 0.05 }}
            className="group relative min-h-96 overflow-hidden rounded-[28px] bg-green-500/80 p-5 text-right transition-transform duration-300 ease-out hover:-translate-y-1.5 md:col-span-5 md:min-h-125 md:p-10"
          >
            <div className="flex items-center w-fit gap-x-1.5 rounded-full bg-black/95 px-2.5 py-2 text-[10px] font-bold tracking-wide text-white">
              HIGH PERFORMANCE
              <Zap className="size-3" />
            </div>

            <div className="absolute inset-x-10 bottom-10">
              <div className="hidden md:block mb-4 text-xs font-medium tracking-wider text-black/60">
                {services.main.eyebrow}
              </div>
              <h3 className="whitespace-pre-line text-4xl font-black leading-10 md:leading-18 text-black md:text-7xl">
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
          <div className="flex w-full flex-row gap-3 sm:gap-4 md:flex-col md:col-span-3">
            {/* Small white card */}
            <motion.article
              data-cursor="link"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.25 }}
              className="group flex min-h-73 basis-1/2 flex-col items-center justify-between rounded-[26px] border border-black/10 bg-white px-4 py-5 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/20 sm:min-h-77.5 sm:px-6 sm:py-6 md:min-h-0 md:items-start md:p-7 md:text-right"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-zinc-100 text-lg text-zinc-500 transition duration-300 group-hover:bg-electric-blue/5 group-hover:text-electric-blue">
                ◈
              </span>

              <div className="flex flex-col items-center md:items-start">
                <div className="mb-2 hidden text-[9px] font-bold text-black/35 md:block">
                  {services.smallTop.eyebrow}
                </div>
                <h3 className="text-lg font-black leading-7 tracking-tight text-black transition duration-300 group-hover:text-electric-blue md:text-2xl">
                  {services.smallTop.title}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-black/45 sm:text-xs sm:leading-6">
                  {services.smallTop.description}
                </p>
              </div>
              <span aria-hidden="true" className="text-xl leading-none text-black/15 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue">
                &#8599;
              </span>
            </motion.article>
            {/* Small white card */}
            <motion.article
              data-cursor="link"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.25 }}
              className="group flex min-h-73 basis-1/2 flex-col items-center justify-between rounded-[26px] border border-black/10 bg-white px-4 py-5 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/20 sm:min-h-77.5 sm:px-6 sm:py-6 md:min-h-0 md:items-start md:p-7 md:text-right"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-zinc-100 text-lg text-zinc-500 transition duration-300 group-hover:bg-electric-blue/5 group-hover:text-electric-blue">
                ◎
              </span>

              <div className="flex flex-col items-center md:items-start">
                <div className="mb-2 hidden text-[9px] font-bold text-black/35 md:block">
                  {services.smallBottom.eyebrow}
                </div>
                <h3 className="text-lg font-black leading-7 text-black transition duration-300 group-hover:text-electric-blue md:text-2xl">
                  {services.smallBottom.title}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-black/45 sm:text-xs sm:leading-6">
                  {services.smallBottom.description}
                </p>
              </div>
              <span aria-hidden="true" className="text-xl leading-none text-black/15 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue">
                &#8599;
              </span>
            </motion.article>
          </div>
          {/* Blue featured card */}
          <motion.article
            data-cursor="link"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...cardTransition, delay: 0.2 }}
            className="group relative min-h-96 transition-transform duration-300 ease-out hover:-translate-y-1.5 overflow-hidden rounded-[28px] bg-[#2450ff] p-8 text-white md:col-span-4 md:min-h-125 md:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-bold tracking-[0.15em] text-white/55">
                {services.blue.eyebrow}
              </span>
              <span className="text-7xl font-black leading-none text-white/[0.07] transition-transform duration-700 group-hover:scale-110">
                AI
              </span>
            </div>
            <div className="absolute inset-x-8 bottom-8 md:inset-x-10 md:bottom-10">
              <h3 className="whitespace-pre-line text-4xl font-black leading-11 md:leading-18 md:text-7xl">
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
          {bottomServices.map((service, index) => {
            const Icon = service.icon;

            return (
            <motion.article
              key={service.title}
              data-cursor="link"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...cardTransition,
                delay: 0.3 + index * 0.08,
              }}
              className="group relative min-h-64 transition-transform duration-300 ease-out hover:-translate-y-1.5 overflow-hidden rounded-[28px] bg-black p-8 text-white md:col-span-6"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold group-hover:text-electric-blue transition-transform duration-500">
                    {service.title}
                  </h3>
                  <Icon
                    aria-hidden="true"
                    className="size-12 shrink-0 text-white/15 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-electric-blue"
                    strokeWidth={1.6}
                  />
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/45">
                  {service.description}
                </p>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
