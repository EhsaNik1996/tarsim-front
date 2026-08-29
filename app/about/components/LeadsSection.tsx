const people = [
  {
    category: "01 / محصول",
    name: "رهبر محصول",
    description:
      "مسئله، اولویت‌ها و نتیجه‌ای که باید برای کاربر و کسب‌وکار ایجاد شود را دنبال می‌کند.",
    background: "bg-indigo-50",
  },
  {
    category: "02 / فناوری",
    name: "رهبر فنی",
    description:
      "معماری، کیفیت اجرا و تصمیم‌های فنی را به نتیجه واقعی محصول متصل می‌کند.",
    background: "bg-orange-50",
  },
];

const principles = [
  "درک مشترک از مسئله",
  "قابل مشاهده بودن تصمیم‌های فنی",
  "ساخت و بازبینی در یک چرخه",
  "ارتباط مستقیم میان تصمیم و نتیجه",
];

export default function LeadsSection() {
  return (
    <section className="flex bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              تیم ترسیم
            </span>

            <h2 className="max-w-2xl text-5xl font-black leading-none tracking-tighter lg:text-6xl">
              دو نگاه نزدیک
              <br />
              به هر تصمیم
              <br />
              مهم.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-black/45">
            محصول خوب نتیجه یک تخصص واحد نیست. تصمیم‌های محصول و فناوری باید در
            کنار هم شکل بگیرند.
          </p>
        </div>

        <div className="mt-12 flex flex-col border-y border-black/10 md:flex-row">
          {people.map((person, index) => (
            <div
              key={person.name}
              className={[
                "flex min-h-96 flex-1 flex-col justify-between gap-10 p-8 md:p-10",
                person.background,
                index !== 0 ? "border-t md:border-r md:border-t-0" : "",
                "border-black/10",
              ].join(" ")}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-black/35">
                {person.category}
              </span>

              <div className="flex flex-col gap-6">
                <h3 className="text-5xl font-black tracking-tighter lg:text-7xl">
                  {person.name}
                </h3>

                <div className="w-full border-t border-black/15" />

                <p className="max-w-sm text-xs leading-6 text-black/45">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col border-b border-black/10 lg:flex-row">
          <div className="flex flex-1 flex-col py-10 lg:pl-10">
            <h3 className="max-w-lg text-3xl font-black leading-tight tracking-tight">
              هر دو نگاه باید آن‌قدر به مسئله نزدیک باشند که تصمیم‌ها را از هم
              جدا نکنند.
            </h3>
          </div>

          <div className="flex flex-1 flex-col divide-y divide-black/10 border-t border-black/10 lg:border-r lg:border-t-0">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-4 py-5 lg:pr-8"
              >
                <span className="size-2 shrink-0 rounded-full bg-emerald-500" />

                <span className="text-xs font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-b border-black/10 py-8 text-xs leading-6 text-black/40 md:flex-row">
          <span className="flex-1 font-medium text-black">
            ظرفیت فنی بدون لایه پنهان تحویل.
          </span>

          <span className="flex-1">
            افراد مسئول مستقیماً در تصمیم‌های محصول و فناوری حضور دارند و خروجی
            نهایی را با همان تیمی که آن را ساخته بررسی می‌کنند.
          </span>
        </div>
      </div>
    </section>
  );
}
