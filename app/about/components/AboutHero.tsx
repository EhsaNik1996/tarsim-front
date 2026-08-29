import { Check, Sparkles } from "lucide-react";

const decisions = [
  {
    number: "01",
    title: "شناخت",
    description: "درک مسئله، نیاز و زمینه واقعی",
  },
  {
    number: "02",
    title: "طراحی",
    description: "تبدیل مسئله به یک راه‌حل قابل اجرا",
  },
  {
    number: "03",
    title: "ساخت",
    description: "پیاده‌سازی با فناوری مناسب",
  },
  {
    number: "04",
    title: "اعتبارسنجی",
    description: "بررسی نتیجه و اصلاح مسیر",
  },
];

const backgroundWords = [
  "ترسیم",
  "DECISIONS",
  "DESIGN",
  "BUILD",
  "SYSTEMS",
  "IDEAS",
];

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden border-b border-black/10 bg-white">
      {/* Background typography */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <div className="about-hero-word about-hero-word-one">
          {backgroundWords[0]}
        </div>

        <div className="about-hero-word about-hero-word-two">
          {backgroundWords[1]}
        </div>

        <div className="about-hero-word about-hero-word-three">
          {backgroundWords[2]}
        </div>

        <div className="about-hero-word about-hero-word-four">
          {backgroundWords[3]}
        </div>

        <div className="about-hero-word about-hero-word-five">
          {backgroundWords[4]}
        </div>

        <div className="about-hero-word about-hero-word-six">
          {backgroundWords[5]}
        </div>
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-1/4 size-96 rounded-full bg-indigo-100/50 blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-20 sm:px-8 lg:flex-row lg:gap-20 lg:px-12">
        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-start">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            <span className="size-2 rounded-full bg-emerald-500" />
            درباره ترسیم
          </span>

          <h1 className="mt-6 max-w-3xl text-6xl font-black leading-none tracking-tighter sm:text-7xl lg:text-8xl">
            آدم‌هایی که
            <br />
            <span className="text-indigo-600">تصمیم‌ها</span>
            <br />
            را می‌سازند،
            <br />
            محصول را
            <br />
            می‌سازند.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/50 lg:text-lg lg:leading-8">
            ترسیم یک تیم محصول و فناوری است که با تمرکز روی مسئله واقعی،
            تصمیم‌های درست و اجرای قابل اتکا، ایده‌ها را به تجربه‌های واقعی
            تبدیل می‌کند.
          </p>
        </div>

        {/* Decision panel */}
        <div className="relative flex w-full max-w-xl bg-transparent flex-col gap-8 p-6 rounded-3xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-black/30">
                مسیر ترسیم
              </span>

              <h2 className="text-xl font-bold">تصمیم تا نتیجه</h2>
            </div>

            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/10">
              <Sparkles size={16} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {decisions.map((decision, index) => (
              <DecisionItem
                key={decision.number}
                {...decision}
                active={index === 0}
              />
            ))}
            <div className="flex items-center gap-3 border-t border-black/10 pt-6">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500" />

              <span className="text-xs text-black/45">
                هر تصمیم باید دلیلی داشته باشد.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 border-t border-gray-300 px-4 py-4 transition-colors">
      <span className="w-8 shrink-0 text-xs font-bold text-black/30">
        {number}
      </span>

      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10">
        <Check size={14} />
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-sm font-bold">{title}</span>

        <span className="text-xs text-black/40">{description}</span>
      </div>
    </div>
  );
}
