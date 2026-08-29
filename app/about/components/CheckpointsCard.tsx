const checkpoints = [
  {
    phase: "شناخت",
    title: "واقعیت کاری را بفهم",
    description:
      "قبل از تصمیم‌گیری، زمینه، محدودیت‌ها و نتیجه‌ای که واقعاً اهمیت دارد را بشناس.",
  },
  {
    phase: "تصمیم",
    title: "تصمیم مهم را قابل مشاهده کن",
    description: "مشخص باشد چه چیزی انتخاب شده و چرا این مسیر انتخاب شده است.",
  },
  {
    phase: "ساخت",
    title: "یک برش منسجم تحویل بده",
    description: "خروجی باید واقعی، قابل بررسی و متناسب با مسئله باشد.",
  },
  {
    phase: "اعتبارسنجی",
    title: "آنچه باید دوام بیاورد را بررسی کن",
    description:
      "رفتار واقعی سیستم و کیفیت نتیجه باید قبل از عبور از مرحله بعد بررسی شود.",
  },
  {
    phase: "مستندسازی",
    title: "سیستم را قابل فهم باقی بگذار",
    description:
      "دانش، تصمیم‌ها و نکات نگهداری نباید در ذهن یک نفر باقی بماند.",
  },
  {
    phase: "یادگیری",
    title: "برای تصمیم بعدی شواهد داشته باش",
    description: "بازخورد و داده باید به تصمیم بعدی کمک کند.",
  },
];

export default function CheckpointsCard() {
  return (
    <section className="flex bg-white px-6 pb-28 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl">
        <div className="relative flex w-full flex-col gap-10 overflow-hidden bg-neutral-950 px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12 rounded-3xl">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              سیستم کاری ترسیم
            </span>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-4xl font-black leading-none tracking-tighter lg:text-6xl">
                شش نقطه بررسی،
                <br />
                نه یک مرحله
                <br />
                پایانی.
              </h2>

              <p className="max-w-md text-xs leading-7 text-white/45">
                هر پروژه مجموعه‌ای از تصمیم‌هاست. ما تلاش می‌کنیم در نقاط مهم،
                قبل از ادامه مسیر مطمئن شویم چیزی که ساخته‌ایم واقعاً ارزش ادامه
                دادن دارد.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {checkpoints.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 py-5 lg:flex-row lg:items-start lg:gap-6"
                >
                  <span className="w-8 shrink-0 text-xs text-lime-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-widest text-white/35">
                    {item.phase}
                  </span>

                  <h3 className="flex-1 text-sm font-bold">{item.title}</h3>

                  <p className="flex-1 text-xs leading-6 text-white/40">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
