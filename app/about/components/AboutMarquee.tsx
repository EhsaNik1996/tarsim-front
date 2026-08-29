const marqueeItems = [
  "تصمیم درست",
  "دامنه واقعی",
  "سیستم قابل نگهداری",
  "تحویل قابل اعتماد",
  "طراحی هدفمند",
  "فناوری مناسب",
];

export default function AboutMarquee() {
  return (
    <section className="flex overflow-hidden border-b border-black bg-black py-3 text-white">
      <div className="flex min-w-max shrink-0 animate-[about-marquee_28s_linear_infinite] items-center">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  );
}

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <div
          key={item}
          className="flex shrink-0 items-center gap-6 px-6"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            {item}
          </span>

          <span className="size-1 rounded-full bg-white/35" />
        </div>
      ))}
    </div>
  );
}