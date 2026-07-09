"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "مدت زمان اجرای یک پروژه نرم‌افزاری چقدر است؟", a: "بسته به حجم و پیچیدگی زیرساخت درخواستی شما، بازه زمانی مشخص می‌شود اما معمولاً فاز طراحی و تحلیل اولیه بین ۲ تا ۴ هفته زمان می‌برد." },
  { q: "آیا پشتیبانی پس از تحویل سیستم هم ارائه می‌شود؟", a: "بله، تمام پروژه‌های استودیو ترسیم شامل پشتیبانی همه‌جانبه فنی، مانیتورینگ امنیتی لایو و آپدیت‌های دوره‌ای زیرساخت خواهند بود." },
  { q: "چگونه می‌توانیم فرآیند همکاری را آغاز کنیم؟", a: "کافی است از طریق دکمه‌های فراخوان جلسات مشاوره، اطلاعات تماس خود را بگذارید تا کارشناسان ما ظرف ۲۴ ساعت برای تنظیم جلسه اختصاصی با شما تماس بگیرند." }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-16 max-w-200 mx-auto text-right">
      <div className="mb-16 text-center">
        <div className="font-mono text-electric-blue mb-4 text-sm tracking-widest">QUESTIONS & ANSWERS</div>
        <h2 className="text-4xl font-bold text-on-surface">سوالات متداول کاربران</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIdx === index;
          return (
            <div key={index} className="border border-stroke-gray rounded-2xl overflow-hidden bg-white/50 backdrop-blur-md">
              <button 
                onClick={() => setActiveIdx(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-6 text-right font-bold text-lg text-on-surface hover:text-electric-blue transition-colors"
              >
                <motion.span 
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  className="material-symbols-outlined text-electric-blue"
                >
                  add
                </motion.span>
                <span>{faq.q}</span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="p-6 pt-0 text-on-surface-variant leading-loose border-t border-stroke-gray/40 text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}