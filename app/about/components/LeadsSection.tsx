import BlurReveal from "./BlurReveal";
import BlurText from "../../components/BlurText";

const people = [
  {
    category: "02 / مدیر فنی",
    name: "سید محسن جلالی",
    description:
      "در همان مسیر تحویل، تصمیم‌ها را بازبینی می‌کند و نتیجه را قابل نگهداری و توضیح‌پذیر نگه می‌دارد.",
    accent: "text-orange-500",
    glow: "bg-[radial-gradient(ellipse_68%_72%_at_72%_42%,rgba(255,139,76,0.07),rgba(255,190,145,0.025)_46%,transparent_74%)]",
    line: "bg-orange-500",
  },
  {
    category: "01 / مدیر محصول",
    name: "علی جواهرزاده",
    description:
      "از نخستین جلسه کاری تا جهت‌دهی محصول، اجرا، بازبینی و انتشار در کنار پروژه می‌ماند.",
    accent: "text-blue-600",
    glow: "bg-[radial-gradient(ellipse_68%_72%_at_38%_42%,rgba(85,111,255,0.075),rgba(142,158,255,0.025)_46%,transparent_74%)]",
    line: "bg-blue-500",
  },
] as const;

const principles = [
  {
    title: "زمینه واقعی کار را بفهمیم",
    description:
      "از کاربران، فرایند فعلی، داده‌ها و محدودیت‌هایی شروع می‌کنیم که تصمیم محصول باید از آن‌ها پشتیبانی کند.",
  },
  {
    title: "جهت فنی را قابل مشاهده کنیم",
    description:
      "مرزهای سیستم، محدوده، معیار پذیرش، ریسک‌ها و مصالحه‌ها را پیش از تبدیل‌شدن به دوباره‌کاری روشن می‌کنیم.",
  },
  {
    title: "در یک چرخه بسازیم و بازبینی کنیم",
    description:
      "خروجی‌های واقعی را پیاده‌سازی و تصمیم‌های مهم و مسیرهای حیاتی را پیش از انتشار بررسی می‌کنیم.",
  },
  {
    title: "تغییر بعدی را شفاف منتقل کنیم",
    description:
      "پیشرفت، ریسک‌های باز و تصمیم بعدی را برای افراد مسئول نتیجه، روشن و قابل پیگیری نگه می‌داریم.",
  },
] as const;

export default function LeadsSection() {
  return (
    <section className="bg-[#fbfbfa] px-3.5 py-4 text-black md:px-8 md:pt-28 md:pb-0">
      <div className="mx-auto w-full max-w-336">
        <div className="hidden gap-12 border-b border-[#d9d9d6] pb-16 md:grid md:grid-cols-2 md:items-end md:gap-24 md:pb-20">
          <BlurReveal>
            <span className="text-xs font-normal tracking-[0.2em] text-emerald-600">
              <BlurText text="تیم راهبر ترسیم" stagger={0.13} />
            </span>
            <h2 className="mt-7 max-w-96 text-4xl leading-[0.98] font-extrabold md:text-5xl">
              <BlurText text="دو راهبر، نزدیک به هر تصمیم مهم." delay={0.12} stagger={0.13} />
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.12}>
          <p className="max-w-lg text-sm font-normal leading-7 text-black/55 md:mb-1">
            <BlurText text="راهبران محصول و فنی مستقیماً کار را پیش می‌برند. همان افرادی که مسئله را صورت‌بندی می‌کنند، هنگام تغییر محدوده و شکل‌گیری تصمیم‌های فنی تا بازبینی نتیجه برای انتشار کنار پروژه باقی می‌مانند." delay={0.2} stagger={0.09} />
          </p>
          </BlurReveal>
        </div>

        <div
          dir="ltr"
          className="relative mt-4 grid grid-cols-2 border-y border-[#d9d9d6] bg-white pb-28 md:mt-8 md:border-t-0"
        >
          {people.map((person) => (
            <BlurReveal
              key={person.name}
              className="relative flex min-h-72 flex-col overflow-hidden px-5 py-10 md:min-h-92 md:px-18 md:py-18"
            >
              <article dir="rtl" className="contents">
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 ${person.glow}`}
              />
              <div className="relative flex h-full flex-col">
                <span
                  className={`max-w-20 text-[11px] leading-3 font-medium md:max-w-none ${person.accent}`}
                >
                  <BlurText text={person.category} stagger={0.13} />
                </span>
                <h3 className="mt-4 text-2xl leading-none font-black tracking-[-0.065em] sm:text-4xl md:mt-5 md:text-6xl">
                  <BlurText text={person.name} stagger={0.14} />
                </h3>
                <p className="mt-5 max-w-md text-[10px] leading-[1.75] text-black/50 md:mt-7 md:text-[12.5px] md:leading-7">
                  <BlurText text={person.description} delay={0.25} stagger={0.1} />
                </p>
              </div>
              </article>
            </BlurReveal>
          ))}

          <div
            aria-hidden="true"
            className="absolute top-0 bottom-26 left-1/2 w-px bg-[#d9d9d6] md:bottom-28"
          />

          <div className="absolute bottom-28 left-[5.5%] hidden h-0.5 w-[38%] bg-blue-500 md:block" />
          <div className="absolute right-[5.5%] bottom-28 hidden h-0.5 w-[38%] bg-orange-500 md:block" />

          <svg
            aria-hidden="true"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute right-0 bottom-13 h-12 w-full md:hidden"
          >
            <path
              d="M0 1 H36 C44 1 42 36 50 36"
              fill="none"
              stroke="#315bff"
              strokeWidth="0.65"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M50 36 C58 36 56 1 64 1 H100"
              fill="none"
              stroke="#ff641f"
              strokeWidth="0.65"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="absolute right-0 bottom-0 left-0 flex h-14 flex-col items-center justify-end pb-1 md:hidden">
            <span className="absolute top-0 h-5 w-px bg-emerald-500" />
            <span className="text-[7px] font-extrabold text-emerald-700">
              <BlurText text="یک مسیر کاری پاسخ‌گو" stagger={0.12} />
            </span>
            <span className="mt-1 h-3 w-px bg-emerald-500" />
          </div>

          <div className="absolute right-0 bottom-0 left-0 hidden h-28 items-end justify-center pb-3 md:flex">
            <div className="flex flex-col items-center">
              <span className="h-9 w-px bg-emerald-500" />
              <span className="mt-2 text-[10px] font-medium text-emerald-700">
                <BlurText text="یک مسیر کاری پاسخ‌گو" stagger={0.12} />
              </span>
            </div>
          </div>
        </div>

        <div className="grid min-h-144 border-b border-[#d9d9d6] bg-[#fdfdfc] md:grid-cols-[0.72fr_1.28fr]">
          <BlurReveal className="relative py-14 md:py-20 md:pl-16">
            <span className="text-xs font-medium tracking-[0.18em] text-emerald-700">
              <BlurText text="مسئولیت‌پذیری چگونه کار می‌کند" stagger={0.12} />
            </span>
            <h3 className="mt-7 max-w-lg text-[28px] leading-9 md:text-4xl md:leading-10 font-black">
              <BlurText text="هر دو راهبر آن‌قدر نزدیک می‌مانند که فرض‌ها را به چالش بکشند، تصمیم‌های یکدیگر را بازبینی کنند و مشتری با افراد مسئول سیستم در ارتباط باشد؛ نه با یک لایه جداگانه تحویل." delay={0.16} stagger={0.09} />
            </h3>
          </BlurReveal>

          <div className="mt-0 flex flex-col border-t border-[#d9d9d6] md:mt-20 md:border-t-0 md:pr-10">
            {principles.map((principle) => (
              <BlurReveal
                key={principle.title}
                className="flex flex-1 gap-6 border-t border-[#d9d9d6] py-8 last:border-b-0 md:items-start md:py-9"
              >
                <span className="mt-2 size-1.75 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                <div>
                  <h4 className="text-base font-bold md:text-lg">
                    <BlurText text={principle.title} stagger={0.12} />
                  </h4>
                  <p className="mt-0.5 max-w-3xl text-xs leading-6 text-black/60 md:text-[13px] md:leading-7">
                    <BlurText text={principle.description} delay={0.2} stagger={0.09} />
                  </p>
                </div>
              </BlurReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
