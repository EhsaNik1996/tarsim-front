"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

type Stage = {
  number: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  question: string;
  points: string[];
  output: string;
  note: string;
  color: string;
  tint: string;
};

type MotionPreference = boolean | null;

const DESKTOP_CARD_STEP = 84;
const DESKTOP_CARD_INACTIVE_SCALE = 0.95;

const stages: Stage[] = [
  {
    number: "01",
    shortTitle: "چارچوب",
    eyebrow: "تعریف محدوده",
    title: "چارچوب",
    description:
      "ایده اولیه را به تعریفی مشترک از مسئله، افراد درگیر و نخستین نتیجه مفید تبدیل می‌کنیم.",
    question: "چه چیزی باید آسان‌تر شود؟",
    points: ["هدف و کاربران", "محدودیت‌ها و ریسک‌ها", "مرز نخستین انتشار"],
    output: "شرح محدوده",
    note: "کار از اینجا آغاز می‌شود",
    color: "#2f6bff",
    tint: "rgba(47,107,255,.08)",
  },
  {
    number: "02",
    shortTitle: "طراحی",
    eyebrow: "نقشه محصول",
    title: "طراحی",
    description:
      "محصول را پیش از پرهزینه شدن قابل بازبینی می‌کنیم؛ جریان‌ها، وضعیت‌ها، مسیرهای داده و انتخاب‌های فنی را آشکار می‌سازیم.",
    question: "کار باید چگونه رفتار کند؟",
    points: ["مسیرهای اصلی", "وضعیت‌های صفحه و سیستم", "جهت معماری"],
    output: "نقشه محصول",
    note: "پیش از ادامه بازبینی شود",
    color: "#8247ff",
    tint: "rgba(130,71,255,.08)",
  },
  {
    number: "03",
    shortTitle: "ساخت",
    eyebrow: "سیستم عملیاتی",
    title: "ساخت",
    description:
      "بخش‌های منسجم را با مسیرهای داده واقعی، نمایش‌های مکرر و پیشرفتی تحویل می‌دهیم که همه تیم بتوانند آن را بررسی کنند.",
    question: "آیا می‌توانیم پیشرفت را زود اثبات کنیم؟",
    points: ["بخش‌های قابل استفاده", "کیفیت و بازبینی", "ریتم تحویل قابل مشاهده"],
    output: "سیستم در حال کار",
    note: "پیش از ادامه بازبینی شود",
    color: "#0096b7",
    tint: "rgba(0,150,183,.08)",
  },
  {
    number: "04",
    shortTitle: "انتشار",
    eyebrow: "انتشار زنده",
    title: "انتشار",
    description:
      "محصول و افراد پیرامون آن را آماده می‌کنیم؛ انتشار امن، مشاهده سیستم و تحویل آنچه تیم بهره‌بردار نیاز دارد.",
    question: "آیا تیم می‌تواند با اطمینان آن را اجرا کند؟",
    points: ["آمادگی انتشار", "پایش و بازیابی", "تحویل عملیاتی"],
    output: "انتشار زنده",
    note: "پیش از ادامه بازبینی شود",
    color: "#e97900",
    tint: "rgba(233,121,0,.08)",
  },
  {
    number: "05",
    shortTitle: "بهبود",
    eyebrow: "نقشه راه بعدی",
    title: "بهبود",
    description:
      "از رفتار واقعی، بازخورد و نشانه‌های عملیاتی برای انتخاب بهبود بعدی استفاده می‌کنیم؛ نه حدس‌زدن در نقشه راه.",
    question: "شواهد، قدم بعدی را چه می‌گویند؟",
    points: ["نشانه‌های استفاده", "بازخورد تیم", "تصمیم ارزش بعدی"],
    output: "نقشه راه بعدی",
    note: "چرخه بعدی از اینجا آغاز می‌شود",
    color: "#007d73",
    tint: "rgba(0,125,115,.08)",
  },
];

function ProgressBar({
  activeIndex,
  reduceMotion,
}: {
  activeIndex: number;
  reduceMotion: MotionPreference;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="process-meta">شروع</span>
      <div className="relative flex h-0.5 flex-1 overflow-hidden rounded-full bg-zinc-300">
        {stages.map((stage, index) => {
          const nextColor = stages[index + 1]?.color ?? stage.color;

          return (
            <motion.span
              key={stage.number}
              className="h-full flex-1 origin-right"
              initial={false}
              animate={{ scaleX: index <= activeIndex ? 1 : 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                background: `linear-gradient(to left, ${stage.color}, ${nextColor})`,
              }}
            />
          );
        })}
      </div>
      <span className="process-meta">بهره‌برداری</span>
    </div>
  );
}

function StageTabs({
  activeIndex,
  reduceMotion,
  onSelect,
}: {
  activeIndex: number;
  reduceMotion: MotionPreference;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-3 grid grid-cols-5 border-y border-zinc-300">
      {stages.map((stage, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={stage.number}
            type="button"
            onClick={() => onSelect(index)}
            aria-current={isActive ? "step" : undefined}
            className="relative flex items-center gap-3 border-l border-zinc-300 px-4 py-3 text-right last:border-l-0"
            style={{
              background: isActive
                ? `linear-gradient(to bottom, ${stage.tint}, transparent)`
                : undefined,
            }}
          >
            <span
              className="font-manrope text-xs font-black"
              style={{ color: stage.color }}
            >
              {stage.number}
            </span>
            <span
              className={`text-sm font-bold ${
                isActive ? "text-black" : "text-zinc-400"
              }`}
            >
              {stage.shortTitle}
            </span>
            <motion.span
              className="absolute inset-x-2 bottom-0 h-0.5 origin-right"
              initial={false}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              style={{
                background: `linear-gradient(to left, ${stage.color}, ${stages[index + 1]?.color ?? stage.color})`,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

function DesktopStageCard({
  stage,
  index,
  activeIndex,
  stageProgress,
  reduceMotion,
}: {
  stage: Stage;
  index: number;
  activeIndex: number;
  stageProgress: MotionValue<number>;
  reduceMotion: MotionPreference;
}) {
  const offset = index - activeIndex;
  const isActive = offset === 0;
  const left = useTransform(
    stageProgress,
    (progress) => `${50 - (index - progress) * DESKTOP_CARD_STEP}%`,
  );
  const opacity = useTransform(stageProgress, (progress) => {
    const distance = Math.abs(index - progress);
    return Math.max(0, 1 - Math.min(distance, 1.14) * 0.88);
  });
  const scale = useTransform(stageProgress, (progress) => {
    const distance = Math.min(Math.abs(index - progress), 1);
    return 1 - distance * (1 - DESKTOP_CARD_INACTIVE_SCALE);
  });
  const filter = useTransform(stageProgress, (progress) => {
    const distance = Math.min(Math.abs(index - progress), 1);
    return `blur(${distance * 2}px)`;
  });

  return (
    <motion.article
      initial={false}
      animate={
        reduceMotion
          ? {
              left: `${50 - offset * DESKTOP_CARD_STEP}%`,
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : DESKTOP_CARD_INACTIVE_SCALE,
              filter: isActive ? "blur(0px)" : "blur(2px)",
            }
          : undefined
      }
      className={`process-card ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        left: reduceMotion ? undefined : left,
        opacity: reduceMotion ? undefined : opacity,
        scale: reduceMotion ? undefined : scale,
        filter: reduceMotion ? undefined : filter,
        borderColor: isActive ? stage.color : undefined,
        zIndex: stages.length - Math.abs(offset),
      }}
    >
      <div className="grid h-full grid-cols-12">
        <div className="relative col-span-7 flex min-w-0 flex-col overflow-hidden border-l border-zinc-200 px-10 py-8 text-right xl:px-12">
          <div
            className="pointer-events-none absolute -right-48 -top-60 size-144 rounded-full border opacity-20"
            style={{
              borderColor: stage.color,
              backgroundColor: stage.tint,
            }}
          />

          <div className="relative flex items-center gap-3">
            <span className="process-meta font-manrope">
              {stage.number} / 05
            </span>
            <span
              className="h-px w-32"
              style={{ backgroundColor: stage.color }}
            />
            <span className="process-meta" style={{ color: stage.color }}>
              {stage.eyebrow}
            </span>
          </div>

          <h3 className="process-stage-title relative mt-4">{stage.title}</h3>
          <p className="process-copy relative mt-5 max-w-3xl">
            {stage.description}
          </p>
          <div className="process-meta relative mt-auto border-t border-zinc-200 pt-4">
            {stage.note}
          </div>
        </div>

        <div className="col-span-5 flex min-w-0 flex-col px-10 py-8 text-right xl:px-12">
          <h4 className="process-question max-w-lg">{stage.question}</h4>

          <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">
            {stage.points.map((point, pointIndex) => (
              <div
                key={point}
                className="flex items-center gap-6 py-3 text-sm font-bold text-zinc-600"
              >
                <span
                  className="font-manrope text-xs font-black"
                  style={{ color: stage.color }}
                >
                  {String(pointIndex + 1).padStart(2, "0")}
                </span>
                {point}
              </div>
            ))}
          </div>

          <div
            className="mt-auto flex items-center justify-between border-t pt-4"
            style={{ borderColor: stage.color }}
          >
            <span className="process-meta">خروجی مرحله</span>
            <strong
              className="text-lg font-black"
              style={{ color: stage.color }}
            >
              {stage.output}
            </strong>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function DesktopProcess({
  activeIndex,
  stageProgress,
  reduceMotion,
  onSelect,
}: {
  activeIndex: number;
  stageProgress: MotionValue<number>;
  reduceMotion: MotionPreference;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="hidden min-h-180 overflow-hidden lg:sticky lg:top-0 lg:block lg:h-svh">
      <div className="process-grid pointer-events-none opacity-75 absolute inset-0" />

      <div className="relative mx-auto flex flex-col h-full max-w-screen-2xl px-8 py-16 md:py-24 xl:px-12">
        <div className="grid grid-cols-12 items-end gap-12">
          <div className="col-span-6">
            <span className="process-kicker mb-2">شیوه کار ما</span>
            <h2 className="process-display text-4xl md:text-7xl">
              از ایده تا
              <span className="block text-4xl md:text-7xl">انتشار.</span>
            </h2>
          </div>

          <div className="col-span-6 pb-1">
            <p className="process-copy max-w-2xl">
              هر مرحله با نتیجه‌ای ملموس تمام می‌شود؛ نتیجه‌ای که بتوان آن را
              بازبینی، استفاده یا بهره‌برداری کرد. با اسکرول معمولی در مسیر کار
              حرکت کنید.
            </p>
            <div className="mt-4">
              <ProgressBar
                activeIndex={activeIndex}
                reduceMotion={reduceMotion}
              />
            </div>
          </div>
        </div>

        <StageTabs
          activeIndex={activeIndex}
          reduceMotion={reduceMotion}
          onSelect={onSelect}
        />

        <div className="relative mt-7 min-h-104 flex-1">
          {stages.map((stage, index) => (
            <DesktopStageCard
              key={stage.number}
              stage={stage}
              index={index}
              activeIndex={activeIndex}
              stageProgress={stageProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileProcess({
  reduceMotion,
}: {
  reduceMotion: MotionPreference;
}) {
  return (
    <div className="relative px-3 py-20 lg:hidden">
      <div className="process-grid process-mobile-grid pointer-events-none absolute inset-0" />
      <div className="process-mobile-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-xl">
        <span className="process-kicker mb-3">شیوه کار ما</span>
        <h2 className="process-display">
          از ایده تا
          <span className="block">انتشار.</span>
        </h2>
        <p className="process-copy mt-6 max-w-lg">
          پنج مرحله قابل بازبینی، نخستین تعریف مسئله را به محصولی تبدیل می‌کند
          که تیم بتواند از آن استفاده و نگهداری کند.
        </p>

        <div className="process-meta mt-8 flex items-center justify-between border-b border-zinc-300 pb-4">
          <span>شروع با مسئله</span>
          <span>پایان با نتیجه</span>
        </div>

        <div className="relative">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative border-b border-zinc-300 py-9 pr-9 first:pt-8 last:border-b-0 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-0 size-24 rounded-full blur-xl"
                style={{
                  backgroundColor: stage.color,
                  opacity: 0.08,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-1.5 top-10.5 w-px"
                style={{
                  background: `linear-gradient(to bottom, ${stage.color}, ${stage.color} 60%, transparent)`,
                }}
              />
              <span
                className="absolute right-0 top-9 z-10 size-3 rounded-full border bg-white"
                style={{
                  borderColor: stage.color,
                  boxShadow: `0 0 0 5px ${stage.tint}`,
                }}
              />

              <div className="process-meta relative flex items-center gap-2 font-manrope">
                <span style={{ color: stage.color }}>{stage.number}</span>
                <span className="text-zinc-300">/</span>
                <span style={{ color: stage.color }}>{stage.eyebrow}</span>
              </div>

              <h3 className="process-mobile-stage-title relative mt-4">
                {stage.title}
              </h3>
              <p className="process-copy relative mt-4 leading-6">
                {stage.description}
              </p>
              <h4 className="relative mt-4 text-sm leading-6 font-black text-zinc-800">
                {stage.question}
              </h4>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const stageProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, stages.length - 1],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      stages.length - 1,
      Math.round(latest * (stages.length - 1)),
    );

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const selectStage = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollableDistance = section.offsetHeight - window.innerHeight;

    window.scrollTo({
      top:
        section.offsetTop +
        scrollableDistance * (index / (stages.length - 1)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-scroll relative border-y border-zinc-200 bg-zinc-50"
      dir="rtl"
    >
      <DesktopProcess
        activeIndex={activeIndex}
        stageProgress={stageProgress}
        reduceMotion={reduceMotion}
        onSelect={selectStage}
      />
      <MobileProcess reduceMotion={reduceMotion} />
    </section>
  );
}
