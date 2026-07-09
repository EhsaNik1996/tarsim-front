"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const tickerItems = ["ESTABLISHED 2003", "DESIGNING FUTURE", "ZINC INFRASTRUCTURE", "HIGH LEVEL SECURITY", "TARSIM ARCHITECTURE"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stroke-gray relative z-10 overflow-hidden">
      <div className="bg-electric-blue py-4 border-b border-stroke-gray flex whitespace-nowrap overflow-hidden select-none">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex gap-20 text-xs font-mono font-bold text-white tracking-widest uppercase pr-20"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span>✦</span> {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-16 py-16 max-w-360 mx-auto text-right" dir="rtl">
        <div className="space-y-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-10 overflow-hidden relative">
              <Image 
                alt="لوگوی ترسیم" 
                className="object-contain absolute top-0" 
                src="/Logo-removebg-preview.png" 
                width={56} 
                height={56} 
              />
            </div>
            <span className="text-2xl text-on-surface font-black">ترسیم</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            استودیو معماری فناوری ترسیم؛ پیشرو در مهندسی پلتفرم‌های حساس تحت وب، یکپارچه‌سازی ابری و هوش مصنوعی کاربردی از سال ۱۳۸۲.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 mt-8 md:mt-0">
          <a className="text-on-surface-variant hover:text-electric-blue transition-colors text-sm" href="#">تماس با ما</a>
          <a className="text-on-surface-variant hover:text-electric-blue transition-colors text-sm" href="#">سوالات متداول</a>
          <a className="text-on-surface-variant hover:text-electric-blue transition-colors text-sm" href="#">قوانین استودیو</a>
          <a className="text-on-surface-variant hover:text-electric-blue transition-colors text-sm" href="#">حریم داده‌ها</a>
        </div>

        <div className="mt-8 md:mt-0 text-sm font-mono text-on-surface-variant">
          © ۲۰۲۶ Tarsim Studio. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}