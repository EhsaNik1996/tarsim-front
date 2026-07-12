"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const metricsData = [
  {
    to: 25,
    label: "پروژه‌های تحویل شده",
    num: "01",
    desc: "سامانه‌های سازمانی تحت وب و پلتفرم‌های خصوصی ابری.",
    color: "from-[#3ce36a]/5",
  },
  {
    to: 100,
    label: "رضایت و حفظ مشتری",
    num: "02",
    desc: "روابط پایدار بلندمدت بر پایه تعهد و کیفیت فنی.",
    color: "from-[#4f52ff]/5",
  },
  {
    to: 5,
    label: "سال ساخت و توسعه مستمر",
    num: "03",
    desc: "توسعه محصول هوشمند، هوش مصنوعی و مهندسی داده.",
    color: "from-[#ffb597]/5",
  },
  {
    to: 10,
    label: "سرعت بالاتر در زیرساخت",
    num: "04",
    desc: "مدیریت چابک، دپلوی مداوم و معماری تمیز کامپوننت‌ها.",
    color: "from-cyan-400/5",
  },
];

// تنظیم سرعت و میزان تأخیر متوالی بین هر کلمه
const createContainerVariant = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.05, // سرعت ترتیبی نوشته شدن کلمات
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

  const titleText = "فراتر از کدنویسی؛ خلق ساختار مدرن دیجیتال";
  const paragraph1 =
    "استودیو ترسیم پلتفرم‌های پیشرفته وب، فرآیندهای اتوماسیون مبتنی بر هوش مصنوعی، و زیرساخت‌های ابری پایدار را برای کسب‌وکارهای آینده‌نگر طراحی و مهندسی می‌کند.";
  const paragraph2 =
    "تمرکز عملیاتی ما روی خروجی محصول است: دامنه‌های شفاف، توسعه پرسرعت و مهندسی تمیزی که در ترافیک واقعی زنده می‌ماند.";

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-16 max-w-360 mx-auto text-right"
      dir="rtl"
    >
      <div className="mb-16 space-y-6 select-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex gap-2 mb-2"
        >
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-surface-container rounded-full border border-stroke-gray">
            ABOUT US
          </span>
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-surface-container rounded-full border border-stroke-gray">
            THE VISION
          </span>
        </motion.div>

        {/* ۱. اجرای انیمیشن تیتر اصلی */}
        <motion.h2
          variants={createContainerVariant(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight tracking-tight flex flex-wrap gap-x-2 gap-y-1"
        >
          {titleText.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordBlurVariant}
              className="inline-block"
            >
              {word.includes("خلق") ||
              word.includes("ساختار") ||
              word.includes("مدرن") ||
              word.includes("دیجیتال") ? (
                <span className="text-[#02c953]">{word}</span>
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
          className="text-xl text-on-surface max-w-4xl leading-relaxed font-medium flex flex-wrap gap-x-1.5 gap-y-1"
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

      {/* بخش کارت‌های ۴ تایی سوپرنتريکس */}
      <div className="border border-stroke-gray rounded-3xl overflow-hidden bg-surface-container-low/40 grid grid-cols-1 md:grid-cols-12 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="p-8 md:p-12 md:col-span-4 flex flex-col justify-center border-b md:border-b-0 md:border-l border-stroke-gray bg-white/40"
        >
          <span className="text-xs font-mono text-on-surface-variant tracking-widest uppercase mb-2 block">
            DELIVERY SNAPSHOT
          </span>
          <h3 className="text-3xl font-extrabold text-on-surface mb-4">
            اثبات توانایی، بدون حاشیه.
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            نمایی واقع‌بینانه از معیارهایی که اهمیت دارند: کدهای مستقر شده،
            مشتریان وفادار و اجرای دقیق بدون وقفه.
          </p>
        </motion.div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metricsData.map((item, idx) => (
            <div
              key={idx}
              className="p-8 border-b sm:border-b-0 border-l last:border-l-0 border-stroke-gray flex flex-col justify-between relative group hover:bg-white/60 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] hover:z-20 transition-all duration-300 ease-out"
            >
              <div
                className={`absolute inset-0 bg-linear-to-b ${item.color} to-transparent transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-4xl font-black text-on-surface flex items-center gap-1 font-mono mb-1">
                  <span>+</span>
                  <Counter from={0} to={item.to} />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="text-sm font-bold text-on-surface mb-4"
                >
                  {item.label}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + idx * 0.12 }}
                  className="text-xs text-on-surface-variant leading-relaxed"
                >
                  {item.desc}
                </motion.p>
              </div>

              <div className="text-6xl font-black text-stroke-gray/20 font-mono absolute bottom-4 left-4 group-hover:text-electric-blue/10 transition-colors">
                {item.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const count = useMotionValue(from);
  const roundedSpring = useSpring(count, { stiffness: 35, damping: 18 });
  const displayValue = useTransform(roundedSpring, (latest) =>
    Math.floor(latest),
  );

  useEffect(() => {
    if (inView) count.set(to);
  }, [inView, count, to]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString();
      }
    });
  }, [displayValue]);

  return (
    <span ref={ref}>
      <span ref={nodeRef}>{from}</span>
    </span>
  );
}
