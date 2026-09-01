import { ArrowUpLeft } from "lucide-react";
import BlurReveal from "./BlurReveal";

export default function AboutStatement() {
  return (
    <section className="flex px-6 md:pb-16 md:px-8 bg-[#fbfbfa]">
      <div className="mx-auto flex w-full max-w-7xl">
        <div className="flex w-full flex-col gap-10 overflow-hidden bg-linear-to-br from-indigo-50 via-purple-50 to-orange-50 px-6 py-10 sm:px-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-12 rounded-3xl">
          <BlurReveal className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
              فلسفه ترسیم
            </span>

            <h2 className="max-w-3xl text-4xl font-black md:leading-16 tracking-tighter md:text-6xl">
              شما یک مسئله واقعی،
              <br />
              یک نتیجه مفید،
              <br />
              و فضایی برای تصمیم‌های
              <br />
              صادقانه دارید.
            </h2>
          </BlurReveal>

          <BlurReveal className="flex flex-col gap-6" delay={0.14}>
            <p className="max-w-sm text-xs leading-6 text-black/50">
              ما تلاش می‌کنیم مسیر رسیدن از مسئله به محصول را ساده، شفاف و قابل
              ادامه نگه داریم.
            </p>

            <button
              type="button"
              className="flex w-fit items-center gap-3 border-b border-black pb-2 text-xs font-bold"
            >
              درباره روش کار ترسیم
              <ArrowUpLeft size={14} />
            </button>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
