"use client";
import { motion, Variants } from "framer-motion"; // ۱. ایمپورت کردن نوع Variants

const capabilitiesData = [
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

export default function Capabilities() {
  // ۲. نسبت دادن نوع صریح Variants به متغیر برای رفع کامل ارور
  const buttonVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    hover: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-32 bg-[#09090b] text-white border-t border-zinc-900 overflow-hidden relative">
      <div className="px-6 md:px-36 text-right" dir="rtl">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono text-[#02c953] tracking-widest block mb-3 uppercase">
              حوزه فعالیت ما
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 leading-tight tracking-tight">
              توسعه زیرساخت‌ها در{" "}
              <span className="text-[#02c953]">بالاترین تراز فنی</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilitiesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileHover="hover"
              className="group relative border border-zinc-900 bg-[#0d0d10] p-10 overflow-hidden flex flex-col justify-between min-h-65 cursor-pointer rounded-3xl text-right"
            >
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#02c953] transition-all duration-500 pointer-events-none z-20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#02c953]/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div
                className="absolute bottom-0 left-2 font-mono text-8xl font-black leading-none text-[#131316] select-none pointer-events-none group-hover:text-[#02c953]/10 transition-colors duration-500 z-0"
                dir="ltr"
              >
                {item.num}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="size-5 border-2 border-[#02c953]/40 bg-[#02c953]/10 rotate-45 rounded-xs transition-colors duration-500 group-hover:border-[#02c953] group-hover:bg-[#02c953] mr-auto ml-0" />

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-[#02c953] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 overflow-hidden h-6" dir="ltr">
                <motion.div
                  variants={buttonVariants}
                  className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#02c953] justify-start"
                >
                  <span>Explore</span>
                  <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}