import { ArrowUpLeft } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="flex bg-white px-6 pb-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl">
        <div className="flex w-full flex-col gap-10 border border-black/10 bg-white px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-12 rounded-3xl">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              پروژه بعدی
            </span>

            <h2 className="text-4xl font-black tracking-tighter lg:text-5xl">
              چیزی برای تغییر دارید؟
            </h2>

            <p className="max-w-xl text-sm leading-7 text-black/45">
              اگر مسئله‌ای دارید که نیاز به طراحی، ساخت یا یک تصمیم فنی درست
              دارد، از همان مسئله شروع کنیم.
            </p>
          </div>

          <button
            type="button"
            className="group flex w-fit shrink-0 items-center gap-4 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 rounded-full"
          >
            شروع یک گفتگو
            <span className="flex size-7 items-center justify-center bg-white/10 rounded-full">
              <ArrowUpLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
