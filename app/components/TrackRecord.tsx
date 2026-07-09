"use client";
import { motion } from "framer-motion";

const milestones = [
  { year: "2026", cat: "ACTIVE BUILD", title: "Construction AI Systems", desc: "توسعه زیرساخت یکپارچه پردازش تصویر کارگاهی، تحلیل ریسک سیگنال‌های محیطی و پایش زنده ترافیک تجهیزات." },
  { year: "2026", cat: "PRIVATE PLATFORM", title: "WhatsApp MRV + Field Rewards", desc: "سیستم جامع ردیابی پاداش میدانی متصل به بات‌های ارتباطی متمرکز سازمانی با هدف یکپارچه‌سازی فرآیند فروش." },
  { year: "2025", cat: "INTERNAL TOOLING", title: "AI Content Operations", desc: "کاهش بار پردازش داده‌های مالتی‌مدیا با اتوماسیون زنجیره تامین محتوای خلاق دپارتمان برندینگ." },
  { year: "2025", cat: "PLATFORM BUILDS", title: "Finance + Trade Platforms", desc: "طراحی هسته لایه معاملاتی صرافی‌های مدرن ابری و بهینه‌سازی سرعت پاسخ‌دهی پورت‌ها." }
];

const tags = ["MONEYOS", "VOICEGUARD AI", "GG KRISHI", "EVERKIND AI", "ONSITE", "SITESALES AI"];

export default function TrackRecord() {
  return (
    <section className="py-32 bg-[#09090b] text-white border-t border-white/10">
      <div className="max-w-360 mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 text-right" dir="rtl">
        
        {/* سایدبار فیلترها و تایتل دارک */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
          <div>
            <h3 className="text-4xl font-extrabold tracking-tight mb-4">
              TRACK RECORD <br />
              <span className="text-[#02c953]">& MILESTONES</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">نمای واقعی از کل پورتفولیو شامل لایه‌های امنیتی سازمان‌ها، فرآیندهای ابری تحت هوش مصنوعی و کارهای مستقر شده.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {tags.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full hover:border-[#02c953] hover:text-white transition-colors cursor-pointer">{t}</span>
            ))}
          </div>
        </div>

        {/* لیست دستاوردهای ریلیز شده */}
        <div className="lg:col-span-8 space-y-12">
          {milestones.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-zinc-800 pb-8 flex flex-col md:flex-row gap-6 justify-between items-start" 
              key={idx}
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#02c953] bg-[#02c953]/10 border border-[#02c953]/20 px-2 py-0.5 rounded">{item.cat}</span>
                  <h4 className="text-xl font-bold font-mono text-zinc-100">{item.title}</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-loose">{item.desc}</p>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-t-0 border-zinc-900 pt-4 md:pt-0">
                <span className="font-mono text-zinc-500 font-bold">{item.year}</span>
                <span className="material-symbols-outlined text-zinc-600 hidden md:block text-sm mt-2">add</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}