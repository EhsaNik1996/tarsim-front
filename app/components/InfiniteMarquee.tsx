"use client";

const marqueeItemsRow1 = [
  "طراحی پلتفرم‌های مقیاس‌پذیر",
  "توسعه فرانت‌اند مدرن",
  "معماری مایکروسرویس",
  "سیستم‌های هوش مصنوعی خودمختار",
  "رابط‌های کاربری تعاملی",
  "اتوماسیون فرآیندهای پیچیده",
  "امنیت در تراز خطوط تولید",
];

const marqueeItemsRow2 = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Php",
  "Pyton",
  "Tailwind CSS",
  "Docker",
  "CI/CD",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full flex flex-col gap-4 h-60 justify-center">
      {/* ردیف اول */}
      <div className="relative w-full -rotate-1 overflow-hidden flex items-center select-none">
        <div className="absolute inset-y-0 left-0 w-24 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 to-transparent z-10 pointer-events-none" />

        <div
          className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
          dir="rtl"
          aria-hidden="true"
        >
          {marqueeItemsRow1.map((text, idx) => (
            <div key={`r1-dup-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-xl md:text-2xl font-black text-zinc-400 tracking-tight uppercase hover:text-[#02c953] transition-colors duration-300">
                {text}
              </span>
              <div className="size-2.5 border border-[#02c953] bg-[#02c953]/20 rotate-45 shrink-0" />
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
          dir="rtl"
        >
          {marqueeItemsRow1.map((text, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-xl md:text-2xl font-black text-zinc-400 tracking-tight uppercase hover:text-[#02c953] transition-colors duration-300">
                {text}
              </span>
              <div className="size-2.5 border border-[#02c953] bg-[#02c953]/20 rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ردیف دوم - بک‌گراند آبی، تکست سفید و درشت‌تر */}
      <div className="relative w-full -rotate-1 h-32 overflow-hidden flex items-center select-none bg-[#0b5fff]">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0b5fff] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0b5fff] to-transparent z-10 pointer-events-none" />

        <div
          className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
          dir="rtl"
          aria-hidden="true"
        >
          {marqueeItemsRow2.map((text, idx) => (
            <div key={`r2-dup-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase hover:text-zinc-200 transition-colors duration-300">
                {text}
              </span>
              <div className="size-3 border border-white bg-white/20 rotate-45 shrink-0" />
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee gap-16 min-w-full justify-around pr-16"
          dir="rtl"
        >
          {marqueeItemsRow2.map((text, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase hover:text-zinc-200 transition-colors duration-300">
                {text}
              </span>
              <div className="size-3 border border-white bg-white/20 rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}