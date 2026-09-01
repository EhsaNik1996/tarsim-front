import { ArrowUpLeft } from "lucide-react";

export default function ServicesClosing() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto w-full max-w-360 border-t border-black/10 px-6 py-20 md:px-16 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.18em] text-zinc-500"><i className="size-1.5 rounded-full bg-emerald-500" />از جایی شروع کنید که کار کند شده است</span>
            <h2 className="max-w-2xl text-5xl leading-[0.92] font-black tracking-[-0.06em] md:text-7xl mt-7">از همان چیزی شروع کنید که سرعت کار را گرفته است.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs leading-7 text-black/45">اصطکاک را با ما در میان بگذارید؛ بررسی می‌کنیم چه چیزی آن را ایجاد کرده و چه مسیر عملی‌ای می‌تواند کار را دوباره به حرکت درآورد.</p>
            <a href="mailto:hello@tarsim.dev" className="flex w-fit items-center gap-2 border-b border-black text-xs font-bold mt-5 pb-1">یک گفت‌وگو را شروع کنید <ArrowUpLeft className="size-3.5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
