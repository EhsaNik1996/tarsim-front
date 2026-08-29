"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const checks = [
  {
    title: "با مسئله واقعی شروع می‌کنیم",
    description:
      "قبل از ساخت، مسئله، محدودیت‌ها، کاربران و نتیجه‌ای که باید به آن برسیم را مشخص می‌کنیم.",
  },
  {
    title: "شفافیت را حفظ می‌کنیم",
    description:
      "تصمیم‌ها، تغییرات و مسیر اجرا باید برای افراد درگیر در پروژه قابل فهم باشد.",
  },
  {
    title: "فناوری قابل نگهداری انتخاب می‌کنیم",
    description:
      "به جای راه‌حل‌های پیچیده و موقت، فناوری‌ای انتخاب می‌کنیم که تیم بتواند آن را ادامه دهد.",
  },
  {
    title: "نتیجه تحویل‌شده را بررسی می‌کنیم",
    description:
      "کار زمانی تمام نمی‌شود که کد نوشته شود؛ نتیجه واقعی باید بررسی و اعتبارسنجی شود.",
  },
];

export default function AboutChecks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              اصول کاری
            </span>

            <h2 className="max-w-xl text-5xl font-black leading-none tracking-tighter lg:text-6xl">
              چهار چیزی که
              <br />
              در طول مسیر
              <br />
              بررسی می‌کنیم.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-black/45">
            برای ما تحویل فقط پایان یک پروژه نیست. هر مرحله باید دلیل مشخص،
            خروجی قابل بررسی و مسیر قابل ادامه داشته باشد.
          </p>
        </div>

        <div className="flex flex-col border-t border-black/15">
          {checks.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full flex-col border-b border-black/10 text-right"
              >
                <div className="flex items-center gap-4 py-6 lg:gap-8">
                  <span className="w-8 shrink-0 text-xs font-bold text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-bold lg:text-base">
                    {item.title}
                  </span>

                  <span className="hidden flex-1 text-xs leading-6 text-black/40 lg:block">
                    {item.description}
                  </span>

                  <span className="flex size-7 shrink-0 items-center justify-center">
                    <Plus
                      size={16}
                      className={[
                        "transition-transform duration-300",
                        isOpen ? "rotate-45" : "",
                      ].join(" ")}
                    />
                  </span>
                </div>

                <div
                  className={[
                    "flex overflow-hidden pr-12 transition-all duration-300 lg:hidden",
                    isOpen ? "max-h-40 pb-6" : "max-h-0",
                  ].join(" ")}
                >
                  <p className="text-xs leading-6 text-black/45">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
