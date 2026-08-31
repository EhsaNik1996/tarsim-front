"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "شناخت مسئله",
    desc: "نیازها، محدودیت‌ها و هدف واقعی پروژه را پیش از هر تصمیم فنی روشن می‌کنیم.",
  },
  {
    num: "02",
    title: "سیستم",
    desc: "معماری، مسیر اجرا و فناوری مناسب را متناسب با آینده سیستم طراحی می‌کنیم.",
  },
  {
    num: "03",
    title: "پیاده‌سازی",
    desc: "راهکار را مرحله‌به‌مرحله، مستند و قابل ارزیابی توسعه می‌دهیم.",
  },
  {
    num: "04",
    title: "پشتیبانی",
    desc: "پس از راه‌اندازی، عملکرد سیستم را پایش و مسیر نگهداری آن را همراهی می‌کنیم.",
  },
  {
    num: "05",
    title: "بهبود مستمر",
    desc: "بر پایه داده، بازخورد و نیازهای تازه، سیستم را پیوسته کامل‌تر می‌کنیم.",
  },
];

export default function Approach() {
  return (
    <section
      className="w-full bg-linear-to-b from-white to-background-deep px-6 py-16 md:px-16 md:py-24"
      dir="rtl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-360 place-self-center">
        <div className="h-fit text-right md:sticky md:top-28">
          <div className="font-mono text-electric-blue mb-4 text-sm tracking-widest">
            روش کار
          </div>
          <h2 className="text-4xl font-bold text-on-surface leading-tight">
            هر پروژه، یک مسیر مشخص دارد.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-on-surface-variant md:text-base md:leading-8">
            ما باور داریم کیفیت، نتیجه یک مرحله نیست؛ حاصل تصمیم‌هایی است که از
            اولین جلسه تا سال‌ها پس از بهره‌برداری ادامه پیدا می‌کند.
          </p>
        </div>

        <div className="space-y-8 md:col-span-2 md:space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex justify-end gap-6 border-b border-stroke-gray pb-8 text-right transition-colors duration-300 hover:border-electric-blue/35 md:gap-8"
            >
              <span className="font-mono text-xl font-normal text-gray-400 transition-transform duration-300 group-hover:-translate-y-1">
                {step.num}
              </span>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-on-surface">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
