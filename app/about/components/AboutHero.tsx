"use client";

import type { ElementType } from "react";
import { Code2, Compass, PenLine, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

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
    <section className="relative isolate flex min-h-svh w-full flex-col justify-end overflow-hidden border-b border-black/10 bg-[#f8f9ff] text-black">
      <BackgroundTypography />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_58%_at_92%_100%,rgba(155,143,255,0.20)_0%,rgba(192,196,255,0.12)_48%,transparent_78%),linear-gradient(180deg,#f1f4ff_0%,#fbfcff_46%,#f7f5ff_100%)] md:bg-[radial-gradient(ellipse_58%_72%_at_88%_57%,rgba(105,116,255,0.13)_0%,rgba(149,131,255,0.075)_38%,rgba(210,218,255,0.035)_62%,transparent_82%)]"
      />

      <div
        dir="ltr"
        className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-stretch justify-between px-5 pb-5 mt-32 md:mt-16 md:min-h-180 md:flex-row md:items-center md:px-16 md:py-0"
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
      className="pointer-events-none absolute inset-x-0 top-20 z-0 flex h-64 -rotate-4 flex-col overflow-hidden opacity-90 select-none md:top-14 md:opacity-75"
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
  const rowText = items.join("   ");

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
            className="flex shrink-0 items-center pl-12"
          >
            <span className="shrink-0 whitespace-pre text-7xl leading-none font-semibold tracking-tighter text-[#f3f5ff] [-webkit-text-stroke:1px_rgba(139,157,255,0.28)] [paint-order:stroke_fill] sm:text-8xl md:text-9xl md:text-[#fbfcff]/90 md:[-webkit-text-stroke:0.95px_rgba(139,157,255,0.32)]">
              {rowText}&nbsp;&nbsp;&nbsp;{rowText}&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function HeroIntro() {
  return (
    <BlurReveal immediate className="order-1 min-w-0 basis-1/2 text-right md:order-2">
    <div dir="rtl">
      <div className="flex items-center gap-3 text-xs leading-none font-extrabold tracking-wide">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-100"
        />
        <span>مهندسی محصول با راهبری ارشد</span>
      </div>

      <h1 className="mt-6 mr-auto flex max-w-3xl flex-col text-4xl leading-10 font-black tracking-[-0.055em] md:text-7xl md:leading-19">
        <span className="block whitespace-nowrap">آدم‌هایی که</span>
        <em className="text-electric-blue font-semibold">
          تصمیم‌ها را
        </em>
        <span className="block whitespace-nowrap">می‌سازند،</span>
        <span className="block whitespace-nowrap">محصول را</span>
        <span className="block whitespace-nowrap">می‌سازند.</span>
      </h1>

      <p className="mt-7 mb-9 max-w-80 text-sm leading-7 font-medium text-black/50 sm:text-base md:my-8 md:max-w-none">
        مالکیت مستقیم فنی از مرحله کشف و شناخت تا تحویل نهایی محصول.
      </p>
    </div>
    </BlurReveal>
  );
}

function Process() {
  return (
    <BlurReveal immediate className="order-2 w-full basis-1/2 text-right md:order-1 pb-10 md:pb-0" delay={0.16}>
    <div dir="rtl">
      <div className="flex min-h-13 items-start justify-between gap-4 border-b border-black/15 pt-1 sm:gap-8 md:min-h-8 md:pt-0">
        <strong className="text-xs font-extrabold sm:text-sm">
          بدون واسطه میان فروش و تحویل.
        </strong>
        <span className="text-xs font-semibold text-black/40 max-sm:text-left">
          راهبری ارشد در تمام مراحل
        </span>
      </div>

      <div>
        {decisions.map((decision, index) => (
          <BlurReveal immediate key={decision.number} delay={0.22 + index * 0.06} amount={0.1}>
            <DecisionItem {...decision} />
          </BlurReveal>
        ))}
      </div>

      <p className="pt-5 pb-1 text-[11px] leading-6 font-medium text-black/45 md:pt-4 md:pb-0 md:text-xs">
        یک مسیر کاری پاسخ‌گو، از اولین جلسه تا انتشار نهایی.
      </p>
    </div>
    </BlurReveal>
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
    <div className="flex min-h-16 items-center gap-3 border-b border-black/10 md:gap-4">
      <span className={`grid size-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white/50 ${iconClass}`}>
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <span className="w-6 shrink-0 text-xs font-semibold text-black/30">{number}</span>
      <strong className="w-20 shrink-0 text-xs font-extrabold sm:w-32 sm:text-sm">
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
