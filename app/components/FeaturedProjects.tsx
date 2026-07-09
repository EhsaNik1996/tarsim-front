"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeText = ["SCALE GLOBALLY", "BUILD THE FUTURE", "SHIP FAST", "ENGINEER THE OUTCOME", "TARSIM STUDIO"];

const featured = [
  { title: "MoneyOS", tag: "FINTECH APP", desc: "سیستم‌عامل مالی چند پلتفرمه برای مدیریت حساب‌ها، تراکنش‌ها و جریان‌های کاری خودکار اتصالی.", bg: "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/5 via-indigo-500/5 to-transparent" },
  { title: "Breyus", tag: "B2B TRADE PLATFORM", desc: "پلتفرم معاملاتی مبتنی بر هوش مصنوعی جهت اتصال به تامین‌کنندگان، کشف قیمت و اسناد هوشمند زنجیره تأمین.", bg: "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500/5 via-pink-500/5 to-transparent" },
  { title: "Di-Twin API", tag: "HEALTH PLATFORM", desc: "هسته زیرساختی تحلیل کلینیکال داده‌های بیومتریک، پایش لایو سلامت و الگوریتم‌های خودمختار پزشکی.", bg: "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/5 via-teal-500/5 to-transparent" }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-stroke-gray">
      {/* نوار متحرک چرخون متن بزرگ پس زمینه */}
      <div className="w-full flex whitespace-nowrap mb-16 select-none opacity-90">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex gap-16 text-6xl md:text-8xl font-black font-mono tracking-tighter text-on-surface uppercase"
        >
          {[...marqueeText, ...marqueeText].map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>{t}</span>
              <span className="text-electric-blue text-4xl">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-16 text-right" dir="rtl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-mono text-electric-blue tracking-widest block mb-2">OUR WORK</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface">پروژه‌های شاخص</h3>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-stroke-gray flex items-center justify-center hover:border-on-surface transition-colors"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
            <button className="w-10 h-10 rounded-full border border-stroke-gray flex items-center justify-center hover:border-on-surface transition-colors"><span className="material-symbols-outlined text-sm">arrow_back</span></button>
          </div>
        </div>

        {/* کارت‌های پاستیلی شیشه‌ای لوکس */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`p-10 border border-stroke-gray rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-95 shadow-xs ${item.bg}`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold font-mono tracking-wider bg-black/5 text-on-surface px-2.5 py-1 rounded-md">PRIVATE</span>
                  <span className="text-xs font-bold text-electric-blue font-mono tracking-wide">{item.tag}</span>
                </div>
                <h4 className="text-3xl font-extrabold text-on-surface font-mono mb-4">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-loose">{item.desc}</p>
              </div>
              <div className="text-5xl font-black text-stroke-gray/10 font-mono text-left mt-8">0{idx+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}