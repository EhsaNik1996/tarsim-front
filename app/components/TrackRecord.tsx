"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const milestones = [
  {
    year: "1389",
    category: "آغاز مسیر",
    title: "تأسیس ترسیم",
    description:
      "ترسیم با تمرکز بر مهندسی سیستم و ساخت راهکارهایی شکل گرفت که برای استفاده بلندمدت، توسعه‌پذیری و پایداری طراحی می‌شوند.",
  },
  {
    year: "1390",
    category: "توسعه محصول",
    title: "نخستین CMS اختصاصی و نرم‌افزارهای کتابخانه",
    description:
      "توسعه سامانه‌های اختصاصی مدیریت محتوا و راهکارهای کتابخانه‌ای، مسیر ورود ترسیم به حوزه مدیریت دانش و اطلاعات را تثبیت کرد.",
  },
  {
    year: "1395",
    category: "گسترش حوزه فعالیت",
    title: "ورود به پروژه‌های موزه و پروژه‌های عراق",
    description:
      "دامنه خدمات ترسیم از نرم‌افزار فراتر رفت و طراحی روایت، مستندسازی آثار، زیرساخت و تجربه دیجیتال موزه‌ها را نیز در بر گرفت.",
  },
  {
    year: "امروز",
    category: "محصول و تداوم",
    title: "تولد داکـیباکس و ادامه مسیر",
    description:
      "داکـیباکس از دل تجربه پروژه‌های واقعی متولد شد؛ اکوسیستمی برای مدیریت دانش، کتابخانه، آرشیو، ناشران و مراکز فرهنگی که همچنان توسعه پیدا می‌کند.",
  },
];

const tags = [
  "تأسیس ترسیم",
  "CMS اختصاصی",
  "مدیریت دانش",
  "پروژه‌های موزه",
  "داکـیباکس",
];

export default function TrackRecord() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-16 border-y border-white/10 bg-[#090a0a] py-16 md:py-24 text-white">
      <div
        className="mx-auto grid max-w-360 grid-cols-1 gap-16 px-6 md:px-16 md:grid-cols-12 md:gap-20"
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="h-fit space-y-7 md:col-span-5"
        >
          <div>
            <h3 className="text-4xl md:text-7xl font-black leading-[0.98] tracking-[-0.055em]">
              مسیر ترسیم
              <span className="mt-2 block">
                و <span className="text-electric-blue">نقاط عطف</span>
              </span>
            </h3>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#8eb7d2]">
              بیش از پانزده سال تجربه در طراحی محصول، زیرساخت فناوری، مدیریت
              دانش و میراث فرهنگی؛ مسیری که هر مرحله آن، پایه‌ای برای ساخت
              سیستم‌های ماندگارتر بوده است.
            </p>
          </div>

          <div className="flex max-w-xl flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-white/2 px-3 py-1.5 text-[10px] font-bold text-[#a9cae0] transition-colors duration-300 hover:border-[#00d563]/60 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="md:col-span-7" dir="ltr">
          {milestones.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `milestone-content-${index}`;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="border-b border-[#243139] first:border-t"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group grid w-full grid-cols-[54px_minmax(0,1fr)_24px] items-start gap-4 py-6 text-left md:grid-cols-[56px_minmax(0,1fr)_28px] md:gap-5 md:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="relative mt-2 block size-4 shrink-0 text-electric-blue"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 block origin-center"
                    >
                      <Plus className="size-4" strokeWidth={2} />
                    </motion.span>
                  </span>
                  <div className="flex flex-col justify-center items-end">
                    <span className="mb-3 text-right border border-zinc-700/70 bg-white/2 px-3 py-1 font-vazir text-[9px] font-bold tracking-wide text-[#91bfe0] rounded-full">
                      {item.category}
                    </span>
                    <span className="block text-right text-[19px] font-extrabold leading-7 text-zinc-100 transition-colors duration-300 group-hover:text-white md:text-[21px]">
                      {item.title}
                    </span>
                  </div>

                  <span className="pt-1 font-manrope text-[13px] font-bold text-[#53636d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.3,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: -4,
                          filter: "blur(3px)",
                          transition: { duration: 0.18, ease: "easeOut" },
                        }}
                        className="pb-7 pl-18.5 text-right text-[13px] leading-7 text-zinc-400 md:pl-20.25"
                        dir="rtl"
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
