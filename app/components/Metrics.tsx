"use client";
import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const metricsData = [
  {
    value: "۱۵+",
    label: "سال تجربه",
    num: "01",
    desc: "طراحی، توسعه و نگهداری سیستم‌های قابل اتکا از سال ۱۳۸۹.",
    accent: "#7895ff",
    tint: "rgba(120, 149, 255, 0.105)",
  },
  {
    value: "۰ تا ۱۰۰",
    label: "همراهی کامل",
    num: "02",
    desc: "از شناخت مسئله و معماری تا اجرا، استقرار و پشتیبانی.",
    accent: "#58cbb0",
    tint: "rgba(88, 203, 176, 0.10)",
  },
  {
    value: "۴ حوزه",
    label: "نگاه چندتخصصی",
    num: "03",
    desc: "محصول دیجیتال، زیرساخت، مدیریت دانش و میراث فرهنگی در یک تیم.",
    accent: "#7c3aed",
    tint: "rgba(124, 58, 237, 0.095)",
  },
  {
    value: "۱۰۰٪",
    label: "مهندسی اختصاصی",
    num: "04",
    desc: "راهکارهایی متناسب با نیاز واقعی، ساختار و آینده هر سازمان.",
    accent: "#eea05a",
    tint: "rgba(238, 160, 90, 0.105)",
  },
];

const createContainerVariant = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.05,
    },
  },
});

const wordBlurVariant = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.2, 0.65, 0.3, 1] as const,
    },
  },
};

export default function Metrics() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleText = "ما فقط پروژه اجرا نمی‌کنیم؛ سیستم طراحی می‌کنیم.";
  const paragraph1 =
    "در بسیاری از پروژه‌ها، تمرکز روی تحویل یک نرم‌افزار یا راه‌اندازی یک زیرساخت است. در ترسیم، نقطه شروع متفاوت است. ما ابتدا مسئله را می‌شناسیم، سپس معماری سیستم را طراحی می‌کنیم و در نهایت مناسب‌ترین فناوری را انتخاب می‌کنیم.";
  const paragraph2 =
    "به همین دلیل، پروژه‌های ما صرفاً خروجی فنی نیستند؛ بلکه زیرساختی برای رشد، نگهداری و توسعه آینده سازمان‌ها هستند.";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-20 py-16 md:py-24 px-4 md:px-16 max-w-360 mx-auto text-right"
      dir="rtl"
    >
      <div className="mb-12 space-y-3 select-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-2 flex"
        >
          <span className="rounded-full border border-stroke-gray bg-surface-container px-3 py-1 text-xs font-bold tracking-wide text-on-surface-variant">
            بیش از کدنویسی
          </span>
        </motion.div>

        {/* ۱. اجرای انیمیشن تیتر اصلی */}
        <motion.h2
          variants={createContainerVariant(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-6xl font-black text-on-surface leading-tight flex flex-wrap gap-x-2"
        >
          {titleText.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordBlurVariant}
              className="inline-block"
            >
              {word.includes("سیستم") || word.includes("طراحی") ? (
                <span className="text-electric-blue">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          variants={createContainerVariant(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-base md:text-lg max-w-4xl leading-8 font-medium flex flex-wrap gap-x-1.5 gap-y-1 md:mt-14"
        >
          {paragraph1.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordBlurVariant}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={createContainerVariant(0.6)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-lg text-on-surface-variant max-w-4xl leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1"
        >
          {paragraph2.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordBlurVariant}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-stroke-gray bg-surface-container-low/40 backdrop-blur-md md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="metrics-summary flex flex-col justify-center border-b border-stroke-gray bg-white/70 p-5 sm:p-6 md:col-span-4 md:border-b-0 md:border-l md:p-14"
        >
          <span className="mb-3 text-[10px] font-extrabold tracking-[.14em] text-on-surface-variant md:text-xs">
            تصویر کلی ترسیم
          </span>
          <h3 className="mb-3 text-3xl font-black leading-tight tracking-[-.035em] text-on-surface md:mb-4 md:text-4xl">
            توانمندی، بدون حاشیه.
          </h3>
          <p className="text-[13px] leading-7 text-on-surface-variant md:text-sm md:leading-relaxed">
            چهار شاخص روشن از تجربه، شیوه همراهی و عمق مهندسی ترسیم.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:col-span-8 lg:grid-cols-4">
          {metricsData.map((item, idx) => (
            <div
              key={idx}
              style={
                {
                  "--metric-accent": item.accent,
                  "--metric-tint": item.tint,
                } as CSSProperties
              }
              className={`metric-card group relative flex min-h-44 flex-col justify-between overflow-hidden p-5 transition-all duration-300 ease-out hover:z-20 sm:min-h-48 sm:p-6 md:min-h-70 md:border-b-0 md:border-l md:p-7 md:last:border-l-0 xl:p-9 ${
                idx < 2 ? "border-b border-stroke-gray" : ""
              } ${idx % 2 === 0 ? "border-l border-stroke-gray" : ""}`}
            >
              <div className="relative z-10">
                <div>
                  <div className="metric-value mb-4 text-[30px] leading-none font-black tracking-[-.04em] text-on-surface transition-colors duration-300 sm:text-4xl md:mb-3 md:text-[clamp(2rem,3vw,3rem)]">
                    {item.value}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    className="text-[10px] leading-5 font-extrabold tracking-[.06em] text-on-surface-variant sm:text-[11px] md:text-xs"
                  >
                    {item.label}
                  </motion.div>
                </div>

              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + idx * 0.12 }}
                className="relative z-10 mt-5 hidden max-w-136 text-on-surface-variant md:block md:max-w-44 md:text-xs md:leading-relaxed"
              >
                {item.desc}
              </motion.p>
              <div className="metric-outline absolute bottom-2 left-2 z-0 font-mono text-6xl font-black transition-all duration-300 sm:text-7xl md:bottom-3 md:left-3">
                {item.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
