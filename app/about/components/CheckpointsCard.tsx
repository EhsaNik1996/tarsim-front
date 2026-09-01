"use client";

import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import BlurText from "../../components/BlurText";

const checkpoints = [
  {
    phase: "شناخت",
    title: "واقعیت کاری را بفهم",
    description:
      "قبل از تصمیم‌گیری، زمینه، محدودیت‌ها و نتیجه‌ای که واقعاً اهمیت دارد را بشناس.",
  },
  {
    phase: "تصمیم",
    title: "تصمیم مهم را قابل مشاهده کن",
    description: "مشخص باشد چه چیزی انتخاب شده و چرا این مسیر انتخاب شده است.",
  },
  {
    phase: "ساخت",
    title: "یک برش منسجم تحویل بده",
    description: "خروجی باید واقعی، قابل بررسی و متناسب با مسئله باشد.",
  },
  {
    phase: "اعتبارسنجی",
    title: "آنچه باید دوام بیاورد را بررسی کن",
    description:
      "رفتار واقعی سیستم و کیفیت نتیجه باید قبل از عبور از مرحله بعد بررسی شود.",
  },
  {
    phase: "مستندسازی",
    title: "سیستم را قابل فهم باقی بگذار",
    description:
      "دانش، تصمیم‌ها و نکات نگهداری نباید در ذهن یک نفر باقی بماند.",
  },
  {
    phase: "یادگیری",
    title: "برای تصمیم بعدی شواهد داشته باش",
    description: "بازخورد و داده باید به تصمیم بعدی کمک کند.",
  },
];

export default function CheckpointsCard() {
  return (
    <section className="flex bg-white px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-337.5">
        <div className="relative flex w-full flex-col gap-10 overflow-hidden bg-neutral-950 px-6 py-10 text-white sm:px-8 md:px-10 md:py-12 rounded-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_540px_at_83%_4%,rgba(62,78,170,0.16)_0%,rgba(35,52,111,0.11)_42%,rgba(17,28,57,0.055)_64%,transparent_88%)] md:bg-[radial-gradient(circle_720px_at_86%_2%,rgba(62,78,170,0.16)_0%,rgba(35,52,111,0.11)_42%,rgba(17,28,57,0.055)_64%,transparent_88%)]"
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-72 -top-85 size-190 rounded-full bg-[#101a2b]/75"
            animate={{ scale: [0.92, 1.04, 0.92], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-20 rounded-full border border-emerald-400/10 bg-[#182044]/65" />
          </motion.div>

          <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-10">
            <BlurReveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              <BlurText text="سیستم کاری ترسیم" stagger={0.13} />
            </span>
            </BlurReveal>

            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <BlurReveal>
              <h2 className="max-w-2xl text-4xl font-black leading-none tracking-tighter md:text-6xl">
                <BlurText text="شش نقطه بررسی، نه یک مرحله پایانی." stagger={0.13} />
              </h2>
              </BlurReveal>

              <BlurReveal delay={0.12}>
              <p className="max-w-md text-xs leading-7 text-white/45">
                <BlurText text="هر پروژه مجموعه‌ای از تصمیم‌هاست. ما تلاش می‌کنیم در نقاط مهم، قبل از ادامه مسیر مطمئن شویم چیزی که ساخته‌ایم واقعاً ارزش ادامه دادن دارد." delay={0.18} stagger={0.09} />
              </p>
              </BlurReveal>
            </div>

            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {checkpoints.map((item, index) => (
                <BlurReveal
                  key={item.title}
                  delay={index * 0.045}
                  className="flex flex-col gap-4 py-5 md:flex-row md:items-start md:gap-6"
                >
                  <span className="w-8 shrink-0 text-xs text-lime-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-widest text-white/35">
                    <BlurText text={item.phase} delay={index * 0.16} stagger={0.12} />
                  </span>

                  <h3 className="flex-1 text-sm font-bold">
                    <BlurText text={item.title} delay={index * 0.16} stagger={0.11} />
                  </h3>

                  <p className="flex-1 text-xs leading-6 text-white/40">
                    <BlurText text={item.description} delay={0.2 + index * 0.16} stagger={0.09} />
                  </p>
                </BlurReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
