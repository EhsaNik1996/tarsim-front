import { ArrowLeft } from "lucide-react";

const checks = [
  {
    number: "01",
    title: "با جریان کاری واقعی شروع می‌کنیم",
    description:
      "پیش از انتخاب راه‌حل، کاربران، محدودیت‌های اجرایی، داده‌های موجود و معیارهای موفقیت را دقیق می‌شناسیم.",
    color: "text-blue-600",
    hover: "hover:bg-blue-50",
  },
  {
    number: "02",
    title: "محدوده را واقعی و شفاف نگه می‌داریم",
    description:
      "آنچه تأیید شده، آنچه پیشنهاد شده و آنچه هنوز به دسترسی، شواهد یا تصمیم کارفرما وابسته است را از هم جدا می‌کنیم.",
    color: "text-violet-600",
    hover: "hover:bg-violet-50",
  },
  {
    number: "03",
    title: "فناوری قابل نگهداری انتخاب می‌کنیم",
    description:
      "ابزارهای امتحان‌شده و مرزهای خوانای سیستم را ترجیح می‌دهیم تا تیم‌های دیگر نیز بتوانند آن را بفهمند و ادامه دهند.",
    color: "text-orange-500",
    hover: "hover:bg-orange-50",
  },
  {
    number: "04",
    title: "نتیجه تحویل‌شده را اعتبارسنجی می‌کنیم",
    description:
      "اجرای واقعی، مسیر داده، استقرار و جریان کاربر را متناسب با ریسک هر تغییر آزمایش و بررسی می‌کنیم.",
    color: "text-emerald-600",
    hover: "hover:bg-emerald-50",
  },
] as const;

export default function AboutChecks() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="mx-auto w-full max-w-360 px-6 py-20 md:px-16 md:py-24">
        <div className="grid grid-cols-1 items-end gap-10 pb-10 md:grid-cols-2 md:gap-24">
          <div>
            <span className="text-xs font-black tracking-widest text-emerald-600">
              اصول همکاری
            </span>

            <h2 className="mt-5 max-w-2xl text-5xl leading-none font-black tracking-tighter sm:text-6xl md:text-7xl">
              چهار اصل که
              <br />
              در طول مسیر
              <br />
              بررسی می‌کنیم.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 font-medium text-zinc-500 md:justify-self-end md:text-base">
            این اصول تصمیم‌های فنی روزمره ما را شکل می‌دهند؛ نه ارزش‌هایی که
            بعد از پایان تحویل، فقط به یک اسلاید اضافه شوند.
          </p>
        </div>

        <div className="border-t border-black">
          {checks.map((item) => (
            <div
              key={item.number}
              className={`group flex min-h-28 flex-wrap items-center gap-5 border-b border-zinc-300 px-0 py-6 transition-colors duration-300 md:min-h-32 md:px-4 md:flex-nowrap ${item.hover}`}
            >
              <span className={`w-12 shrink-0 text-xs font-black ${item.color}`}>
                {item.number}
              </span>

              <h3 className="flex-1 text-xl leading-tight font-black tracking-tighter sm:text-2xl md:w-1/3 md:flex-none">
                {item.title}
              </h3>

              <p className="order-last w-full pr-16 text-sm leading-7 font-medium text-zinc-500 md:order-0 md:w-auto md:flex-1 md:pr-0">
                {item.description}
              </p>

              <ArrowLeft
                aria-hidden="true"
                className={`size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1 ${item.color}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
