const stats = [
  {
    number: "01",
    title: "مشارکت مستقیم",
    description:
      "تصمیم‌های کلیدی با حضور افراد مسئول گرفته می‌شوند.",
  },
  {
    number: "02",
    title: "مسیر شفاف",
    description:
      "وضعیت و منطق تصمیم‌ها برای تیم قابل مشاهده است.",
  },
  {
    number: "03",
    title: "ساخت قابل توسعه",
    description:
      "راه‌حل برای امروز و تغییرات فردا ساخته می‌شود.",
  },
];

export default function DeliveryModel() {
  return (
    <section className="flex bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 lg:gap-20 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              مدل همکاری ترسیم
            </span>

            <h2 className="max-w-2xl text-5xl font-black leading-none tracking-tighter lg:text-7xl">
              مشارکت واقعی،
              <br />
              بخشی از مدل
              <br />
              تحویل ماست.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/50">
            در ترسیم، افراد باتجربه فقط در ابتدای پروژه تصمیم نمی‌گیرند و
            کنار نمی‌روند. از شناخت مسئله تا طراحی، ساخت و بررسی نتیجه،
            در تصمیم‌های مهم حضور دارند.
          </p>
        </div>

        <div className="flex flex-col border-y border-black/10 md:flex-row">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={[
                "flex flex-1 flex-col gap-5 py-8 md:px-8",
                index !== 0
                  ? "border-t md:border-r md:border-t-0"
                  : "",
                "border-black/10",
              ].join(" ")}
            >
              <span className="text-xs text-black/30">
                {stat.number}
              </span>

              <h3 className="text-2xl font-black tracking-tight">
                {stat.title}
              </h3>

              <p className="max-w-sm text-xs leading-6 text-black/40">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}