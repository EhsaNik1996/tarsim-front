"use client";

import type { ElementType } from "react";
import { Code2, Compass, PenLine, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const decisions = [
  {
    number: "01",
    title: "شناخت",
    description: "درک زمینه، پیش از تعیین محدوده",
    icon: Compass,
    iconClass: "text-blue-600",
  },
  {
    number: "02",
    title: "طراحی",
    description: "تصمیم‌هایی که دیده می‌شوند",
    icon: PenLine,
    iconClass: "text-violet-600",
  },
  {
    number: "03",
    title: "ساخت",
    description: "خروجی‌های کاربردی از همان ابتدا",
    icon: Code2,
    iconClass: "text-orange-500",
  },
  {
    number: "04",
    title: "اعتبارسنجی",
    description: "شواهد، پیش از هر ادعا",
    icon: ShieldCheck,
    iconClass: "text-emerald-500",
  },
] as const;

const tickerItems = [
  "مالکیت مستقیم",
  "محدوده واقعی و شفاف",
  "سیستم‌های قابل نگهداری",
  "تحویل اعتبارسنجی‌شده",
];

const backgroundRows = [
  ["تصمیم‌ها", "سیستم‌ها", "شواهد", "شناخت", "طراحی"],
  ["اعتبارسنجی", "محصول", "ساخت", "راهکار", "تحویل"],
];

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-svh w-full flex-col justify-end overflow-hidden border-b border-black/10 bg-[#fbfcff] text-black">
      <BackgroundTypography />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_58%_72%_at_88%_57%,rgba(105,116,255,0.13)_0%,rgba(149,131,255,0.075)_38%,rgba(210,218,255,0.035)_62%,transparent_82%)]"
      />

      <div
        dir="ltr"
        className="relative z-10 mx-auto flex flex-col md:flex-row w-full max-w-360 items-center justify-between px-6 py-18 md:min-h-180 md:px-16 md:py-0"
      >
        <Process />
        <HeroIntro />
      </div>

      <HeroTicker />
    </section>
  );
}

function BackgroundTypography() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-14 -rotate-4 -z-20 flex h-64 flex-col overflow-hidden opacity-75 select-none"
    >
      <BackgroundRow items={backgroundRows[0]} duration={40} />
      <BackgroundRow items={backgroundRows[1]} duration={25} />
    </div>
  );
}

function BackgroundRow({
  items,
  duration,
}: {
  items: readonly string[];
  duration: number;
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div dir="ltr" className="flex h-24 md:h-36 shrink-0 items-center overflow-hidden">
      <motion.div
        dir="ltr"
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((group) => (
          <div
            dir="rtl"
            key={group}
            className="flex shrink-0 items-center gap-12 pl-12"
          >
            {repeatedItems.map((item, index) => (
              <span
                key={`${group}-${item}-${index}`}
                className="flex shrink-0 items-center gap-12 whitespace-nowrap text-7xl leading-none font-semibold tracking-tighter text-[#fbfcff]/90 [-webkit-text-stroke:0.95px_rgba(139,157,255,0.32)] [paint-order:stroke_fill] sm:text-8xl md:text-9xl"
              >
                {item}
                <i className="size-3 md:size-6 shrink-0 rounded-full border-[1.25px] border-indigo-200/45 bg-transparent" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function HeroIntro() {
  return (
    <div dir="rtl" className="basis-1/2 order-1 min-w-0 text-right md:order-2">
      <div className="flex items-center gap-3 text-xs leading-none font-extrabold tracking-wide">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-100"
        />
        <span>مهندسی محصول با راهبری ارشد</span>
      </div>

      <h1 className="mt-6 mr-auto flex max-w-2xl flex-col text-5xl md:text-7xl leading-12 md:leading-19 font-black tracking-tighter">
        <span className="block whitespace-nowrap">آدم‌هایی که</span>
        <em className="text-electric-blue font-semibold">
          تصمیم‌ها را
        </em>
        <span className="block whitespace-nowrap">می‌سازند،</span>
        <span className="block whitespace-nowrap">محصول را</span>
        <span className="block whitespace-nowrap">می‌سازند.</span>
      </h1>

      <p className="my-8 text-sm font-medium text-black/50 sm:text-base">
        مالکیت مستقیم فنی از مرحله کشف و شناخت تا تحویل نهایی محصول.
      </p>
    </div>
  );
}

function Process() {
  return (
    <div dir="rtl" className="basis-1/2 order-2 w-full text-right md:order-1">
      <div className="flex min-h-8 items-start justify-between gap-4 border-b border-black/15 sm:gap-8">
        <strong className="text-xs font-extrabold sm:text-sm">
          بدون واسطه میان فروش و تحویل.
        </strong>
        <span className="text-xs font-semibold text-black/40 max-sm:text-left">
          راهبری ارشد در تمام مراحل
        </span>
      </div>

      <div>
        {decisions.map((decision) => (
          <DecisionItem key={decision.number} {...decision} />
        ))}
      </div>

      <p className="pt-4 text-xs font-medium text-black/45">
        یک مسیر کاری پاسخ‌گو، از اولین جلسه تا انتشار نهایی.
      </p>
    </div>
  );
}

type DecisionItemProps = {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
  iconClass: string;
};

function DecisionItem({
  number,
  title,
  description,
  icon: Icon,
  iconClass,
}: DecisionItemProps) {
  return (
    <div className="flex min-h-16 items-center gap-4 border-b border-black/10">
      <span className={`grid size-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white/50 ${iconClass}`}>
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <span className="w-6 shrink-0 text-xs font-semibold text-black/30">{number}</span>
      <strong className="w-24 shrink-0 text-xs font-extrabold sm:w-32 sm:text-sm">
        {title}
      </strong>
      <span className="flex-1 text-xs font-medium text-black/40 text-right">
        {description}
      </span>
    </div>
  );
}

function HeroTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      dir="ltr"
      className="relative z-20 flex h-16 shrink-0 items-center overflow-hidden bg-black text-white sm:h-20"
      aria-label={tickerItems.join("، ")}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {repeatedItems.map((item, index) => (
              <div dir="rtl" key={`${group}-${item}-${index}`} className="flex shrink-0 items-center">
                <span className="px-2 text-sm font-extrabold sm:text-base">
                  {item}
                </span>
                <i aria-hidden="true" className="mx-4 size-1.5 rounded-full bg-white" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
