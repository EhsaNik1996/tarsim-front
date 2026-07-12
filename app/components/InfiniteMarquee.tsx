"use client";
import React from "react";

const marqueeItems = [
  "طراحی پلتفرم‌های مقیاس‌پذیر",
  "توسعه فرانت‌اند مدرن",
  "معماری مایکروکلاود",
  "سیستم‌های هوش مصنوعی خودمختار",
  "رابط‌های کاربری تعاملی",
  "اتوماسیون فرآیندهای پیچیده",
  "امنیت در تراز خطوط تولید",
];

export default function InfiniteMarquee() {
  return (
    <div className="relative w-full -rotate-1 pt-10 overflow-hidden flex items-center select-none">
      <div className="absolute inset-y-0 left-0 w-24 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 to-transparent z-10 pointer-events-none" />

      <div
        className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
        dir="rtl"
        aria-hidden="true"
      >
        {marqueeItems.map((text, idx) => (
          <div key={`dup-${idx}`} className="flex items-center gap-6 shrink-0">
            <span className="text-xl md:text-2xl font-black text-zinc-400 tracking-tight uppercase hover:text-[#02c953] transition-colors duration-300">
              {text}
            </span>
            <div className="w-2.5 h-2.5 border border-[#02c953] bg-[#02c953]/20 rotate-45 shrink-0" />
          </div>
        ))}
      </div>
      <div
        className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
        dir="rtl"
      >
        {marqueeItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-xl md:text-2xl font-black text-zinc-400 tracking-tight uppercase hover:text-[#02c953] transition-colors duration-300">
              {text}
            </span>
            <div className="w-2.5 h-2.5 border border-[#02c953] bg-[#02c953]/20 rotate-45 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
