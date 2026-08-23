"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    category: "حوزه همکاری",
    question: "چه نوع پروژه‌هایی را می‌توان به ترسیم سپرد؟",
    answer:
      "از طراحی محصولات دیجیتال و سامانه‌های سازمانی تا زیرساخت فناوری، مدیریت دانش، کتابخانه‌ها، آرشیوها، موزه‌ها و میراث فرهنگی؛ ترسیم پروژه را از معماری و اجرا تا نگهداری همراهی می‌کند.",
  },
  {
    category: "رویکرد",
    question: "رویکرد ترسیم با اجرای معمول یک پروژه چه تفاوتی دارد؟",
    answer:
      "ما کار را با شناخت مسئله آغاز می‌کنیم، سپس معماری سیستم را شکل می‌دهیم و در نهایت فناوری مناسب را انتخاب می‌کنیم. خروجی فقط یک تحویل فنی نیست؛ سیستمی توسعه‌پذیر و قابل اتکا برای آینده سازمان است.",
  },
  {
    category: "فرایند",
    question: "یک پروژه در ترسیم چه مسیری را طی می‌کند؟",
    answer:
      "مسیر هر پروژه پنج مرحله روشن دارد: شناخت مسئله، طراحی سیستم، پیاده‌سازی، پشتیبانی و بهبود مستمر. جزئیات هر مرحله متناسب با ابعاد و نیاز واقعی پروژه تعریف می‌شود.",
  },
  {
    category: "پشتیبانی",
    question: "آیا همکاری پس از راه‌اندازی سیستم ادامه پیدا می‌کند؟",
    answer:
      "بله. نگهداری و توسعه آینده بخشی از نگاه مهندسی ترسیم است. تصمیم‌ها از ابتدا با توجه به استفاده بلندمدت گرفته می‌شوند و پشتیبانی و بهبود سیستم پس از بهره‌برداری نیز ادامه پیدا می‌کند.",
  },
  {
    category: "راهکار",
    question: "راهکارهای ترسیم همیشه به‌صورت اختصاصی توسعه داده می‌شوند؟",
    answer:
      "بسته به مسئله، راهکار می‌تواند مهندسی و توسعه کاملاً اختصاصی باشد یا بر محصولات تخصصی ترسیم مانند DOCiBOX و Hepino تکیه کند. معیار انتخاب، تناسب راهکار با نیاز و مسیر رشد سازمان است.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-black py-16 md:py-24 text-white md:py-32"
      dir="rtl"
    >
      <div className="mx-auto flex max-w-360 justify-center px-6 md:px-16">
        <div className="w-full max-w-4xl">
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-16 md:mb-19"
          >
            <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
              سوالات متداول
            </h2>
            <div className="flex items-center mt-6 gap-x-1.5 text-[15px] text-zinc-500 md:text-[17px]">
              <p>هر آنچه معمولاً</p>
              <span className="mr-1 font-bold text-electric-blue">
                پیش از شروع همکاری
              </span>
              {""}
              <p>می‌پرسید</p>
            </div>
          </motion.header>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="border-b border-[#202527] first:border-t"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_24px] gap-5 py-6 text-right md:py-7"
                  >
                    <span>
                      <span className="mb-3 inline-flex rounded-full border border-[#292e31] px-3 py-1 font-manrope text-[9px] font-bold tracking-[0.16em] text-[#76b9e6]">
                        {faq.category}
                      </span>
                      <span className="block text-[18px] font-extrabold leading-7 text-zinc-100 transition-colors duration-300 group-hover:text-electric-blue md:text-[21px]">
                        {faq.question}
                      </span>
                    </span>

                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-1.5 flex size-5 items-center justify-center text-electric-blue"
                    >
                      <Plus className="size-4" strokeWidth={2.2} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-7 pl-11 text-[13px] leading-7 text-[#79b7df] md:text-[15px] md:leading-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
