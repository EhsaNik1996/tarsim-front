const deliveryFacts = [
  {
    value: "02",
    label: "توسعه‌دهنده ارشد",
  },
  {
    value: "مستقیم",
    label: "ارتباط فنی",
  },
  {
    value: "منعطف",
    label: "ظرفیت تخصصی، درست زمانی که پروژه به آن نیاز دارد",
  },
];

export default function DeliveryModel() {
  return (
    <section className="flex w-full bg-white" dir="rtl">
      <div className="mx-auto w-full max-w-360 flex-col px-6 pt-20 md:px-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="text-xs font-black tracking-widest text-zinc-700">
              شیوه کار ترسیم
            </span>

            <h2 className="mt-5 max-w-xl text-5xl leading-none font-black tracking-tighter sm:text-6xl md:text-7xl">
              مشارکت افراد ارشد،
              <br />
              مدل تحویل
              <br />
              ماست.
            </h2>
          </div>

          <p className="flex flex-col gap-5 md:col-span-7 md:pt-1 text-base leading-8 font-medium text-zinc-500 md:text-lg">
            ترسیم یک استودیوی نرم‌افزاری با راهبری افراد ارشد است؛ برای تیم‌هایی
            که به محصولات کاربردی، یکپارچه‌سازی قابل اتکا و تصمیم‌های فنی شفاف
            نیاز دارند.
            توسعه‌دهندگان ارشد ما مستقیماً در شناخت مسئله، انتخاب رویکرد،
              ساخت سیستم، بررسی کیفیت و پشتیبانی از فرایند تحویل حضور دارند.
          </p>
        </div>

        <div className="mt-10 md:mt-24 border-t border-zinc-300 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {deliveryFacts.map((fact, index) => (
              <div
                key={fact.value}
                className={`flex min-h-20 items-baseline gap-3 py-4 md:px-6 ${
                  index === 0
                    ? ""
                    : "border-t border-zinc-300 md:border-t-0 md:border-r"
                }`}
              >
                <strong className="shrink-0 text-4xl leading-none font-black tracking-tighter md:text-5xl">
                  {fact.value}
                </strong>
                <span className="max-w-52 text-xs leading-5 font-medium text-zinc-500">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
