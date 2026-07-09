"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "کشف و تحلیل نیاز", desc: "بررسی عمیق ساختار فعلی کسب‌وکار، تحلیل رقبا و مهندسی معکوس فرآیندها جهت ترسیم نقشه راه." },
  { num: "02", title: "معماری و توسعه خلاق", desc: "طراحی راه‌حل هوشمند دیجیتال، پیاده‌سازی زیرساخت‌های پایدار نرم‌افزاری و کدنویسی بهینه." },
  { num: "03", title: "تضمین کیفیت و استقرار", desc: "تست‌های امنیتی لایه‌ای، بهینه‌سازی سرعت و راه‌اندازی بدون پرش سیستم بر روی سرورهای ابری." }
];

export default function Approach() {
  return (
    <section className="py-32 bg-linear-to-b from-white to-background-deep px-6 md:px-16 max-w-360 mx-auto border-t border-stroke-gray">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="text-right lg:sticky lg:top-32 h-fit">
          <div className="font-mono text-electric-blue mb-4 text-sm tracking-widest">HOW WE WORK</div>
          <h2 className="text-4xl font-bold text-on-surface leading-tight">رویکرد استراتژیک ترسیم در اجرای پروژه‌ها</h2>
        </div>

        <div className="lg:col-span-2 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 border-b border-stroke-gray pb-8 text-right flex-row-reverse"
            >
              <span className="font-mono text-electric-blue text-4xl font-extrabold">{step.num}</span>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-on-surface">{step.title}</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}