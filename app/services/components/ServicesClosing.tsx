"use client";

import { ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesClosing() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto w-full max-w-360 border-t border-black/10 px-6 py-20 md:px-16 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 22, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 1] }}>
            <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.18em] text-zinc-500"><i className="size-1.5 rounded-full bg-emerald-500" />از جایی شروع کنید که کار کند شده است</span>
            <h2 className="max-w-2xl text-5xl md:leading-20 font-black tracking-[-0.06em] md:text-7xl mt-7">از همان چیزی شروع کنید که سرعت کار را گرفته است.</h2>
          </motion.div>
          <motion.div className="max-w-md" initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: 0.14, ease: [0.2, 0.65, 0.3, 1] }}>
            <p className="text-xs leading-7 text-black/45">اصطکاک را با ما در میان بگذارید؛ بررسی می‌کنیم چه چیزی آن را ایجاد کرده و چه مسیر عملی‌ای می‌تواند کار را دوباره به حرکت درآورد.</p>
            <a href="mailto:hello@tarsim.dev" className="flex w-fit items-center gap-2 border-b border-black text-xs font-bold mt-5 pb-1">یک گفت‌وگو را شروع کنید <ArrowUpLeft className="size-3.5" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
