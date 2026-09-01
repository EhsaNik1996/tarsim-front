"use client";

import { ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tracks = [
  {
    number: "01",
    eyebrow: "از ایده تا محصول",
    title: "توسعه محصول",
    description:
      "یک فرایند عملیاتی را به نرم‌افزاری قابل نگهداری با مسیر روشن از کشف مسئله تا انتشار تبدیل می‌کنیم.",
    bestFor:
      "محصولات جدید، ابزارهای داخلی، پورتال مشتریان، اپلیکیشن‌های موبایل و سامانه‌هایی که به نقطه شروع روشن نیاز دارند.",
    accent: "#315bff",
    tint: "rgba(49,91,255,.045)",
    items: [
      [
        "تعریف محصول",
        "شفاف‌سازی کاربران، جریان‌های کاری، محدوده، ریسک‌ها و معیارهای پذیرش.",
      ],
      [
        "تحویل اپلیکیشن",
        "طراحی و پیاده‌سازی رابط، سرویس‌های بک‌اند، جریان داده و یکپارچه‌سازی.",
      ],
      [
        "نوسازی جریان کار",
        "جایگزینی فرایندهای دستی با ابزارهای قابل اتکا و متناسب با عملیات.",
      ],
      [
        "پایه‌های انتشار",
        "نسخه‌بندی، استقرار، مشاهده‌پذیری و مستندات لازم برای ادامه مسیر.",
      ],
    ],
    tags: ["طراحی محصول", "اپلیکیشن وب", "اپلیکیشن موبایل"],
  },
  {
    number: "02",
    eyebrow: "از اصطکاک تا جریان هوشمند",
    title: "اتوماسیون هوشمند و هوش مصنوعی",
    description:
      "کارهای تکراری را خودکار می‌کنیم و هوش مصنوعی را فقط جایی به‌کار می‌گیریم که تصمیم یا جریان کار را بهتر کند.",
    bestFor:
      "تیم‌هایی با جابه‌جایی زیاد اطلاعات، پردازش اسناد، تولید محتوا یا گلوگاه‌های عملیاتی تکرارشونده.",
    accent: "#8b5cf6",
    tint: "rgba(139,92,246,.045)",
    reverse: true,
    items: [
      [
        "اتوماسیون جریان کار",
        "اتصال محرک‌ها، قوانین کسب‌وکار، صف‌ها و تصمیم‌های انسانی.",
      ],
      [
        "هوش مصنوعی کاربردی",
        "دسته‌بندی، استخراج و تولید محتوا فقط در نقاط ارزش‌آفرین.",
      ],
      ["کنترل انسانی", "حفظ تأیید، بازبینی و امکان اصلاح در تصمیم‌های حساس."],
      ["بازخورد عملیاتی", "ثبت خطاها و استثناها برای سنجش و بهبود سیستم."],
    ],
    tags: ["اتوماسیون", "عامل‌های هوشمند", "بازبینی انسانی"],
  },
  {
    number: "03",
    eyebrow: "از اصطکاک تا کارایی",
    title: "بازمهندسی سیستم",
    description:
      "علت کندی، شکنندگی یا هزینه بالای نرم‌افزار را پیدا می‌کنیم و بدون بازنویسی غیرضروری آن را بهبود می‌دهیم.",
    bestFor:
      "محصولاتی با کندی رشد، کد ناپایدار، هزینه مقیاس‌پذیری بالا، یکپارچه‌سازی ضعیف یا ریسک عملیاتی.",
    accent: "#ff6b21",
    tint: "rgba(255,107,33,.05)",
    items: [
      [
        "تشخیص مبتنی بر شواهد",
        "بررسی رفتار اجرا، وابستگی‌ها، مسیر داده و نقاط شکست.",
      ],
      [
        "مهندسی هدفمند",
        "اصلاح گلوگاه‌هایی که بیشترین اثر را بر قابلیت اتکا دارند.",
      ],
      [
        "کارایی داده و عملیات",
        "بهبود کوئری‌ها، کش، پردازش پس‌زمینه و مسیرهای حساس.",
      ],
      [
        "پایه‌های قابلیت اتکا",
        "افزودن مشاهده‌پذیری، هشدار و رویه‌های عملیاتی.",
      ],
    ],
    tags: ["بهینه‌سازی", "مهندسی هدفمند", "اعتبارسنجی"],
  },
  {
    number: "04",
    eyebrow: "از ابزارها تا یک سیستم",
    title: "یکپارچه‌سازی فناوری",
    description:
      "ابزارهای جدا و جریان‌های داده را به یک مدل عملیاتی منسجم متصل می‌کنیم که اطلاعات در آن دقیق و قابل دسترس باشد.",
    bestFor:
      "کسب‌وکارهایی با چند پلتفرم، داده تکراری، فرایندهای دستی اتصال و نقاط انتقال شکننده.",
    accent: "#0798db",
    tint: "rgba(7,152,219,.045)",
    reverse: true,
    items: [
      [
        "یکپارچه‌سازی API",
        "اتصال سیستم‌های داخلی و بیرونی از طریق قراردادهای مستند.",
      ],
      ["همگام‌سازی داده", "تعریف مالکیت منبع، نگاشت، تبدیل و مدیریت خطا."],
      ["هویت و دسترسی", "هم‌راستا کردن احراز هویت، نقش‌ها و مجوزها."],
      ["مهاجرت و تجمیع", "انتقال داده و قابلیت‌ها بدون اختلال غیرضروری."],
    ],
    tags: ["مهندسی سیستم", "یکپارچه‌سازی", "مدیریت شکست"],
  },
  {
    number: "05",
    eyebrow: "از تحویل تا مالکیت",
    title: "همکاری بلندمدت",
    description:
      "برای محصولاتی که فراتر از یک تحویل یک‌باره به قضاوت فنی پیوسته نیاز دارند، راهبری ارشد مستقیم فراهم می‌کنیم.",
    bestFor:
      "بنیان‌گذاران و تیم‌هایی که به مسیر مهندسی پایدار، تصمیم‌گیری روشن و انتقال دانش نیاز دارند.",
    accent: "#d629e8",
    tint: "rgba(214,41,232,.04)",
    items: [
      [
        "همکاری در نقشه راه",
        "تبدیل اولویت‌های کسب‌وکار به توالی واقع‌بینانه تصمیم‌ها.",
      ],
      ["تحویل پیوسته", "ارسال بهبودها با حفظ پایداری و قابلیت نگهداری محصول."],
      ["راهبری فنی", "بازبینی معماری، کیفیت و تصمیم‌های کلیدی محصول."],
      ["مستندسازی و انتقال", "حفظ تصمیم‌ها و دانش عملیاتی برای تیم محصول."],
    ],
    tags: ["تحویل محصول", "مشاوره", "همکاری مستمر"],
  },
] as const;

export default function ServiceTracks() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [routeVisible, setRouteVisible] = useState(false);

  useEffect(() => {
    const updateRoute = () => {
      const sections = tracks
        .map((track) => document.getElementById(`service-${track.number}`))
        .filter((section): section is HTMLElement => Boolean(section));
      if (!sections.length) return;

      const probe = window.innerWidth >= 768 ? 82 : 68;
      const firstRect = sections[0].getBoundingClientRect();
      const lastRect = sections[sections.length - 1].getBoundingClientRect();
      setRouteVisible(firstRect.top <= probe && lastRect.bottom > probe);

      const index = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probe && rect.bottom > probe;
      });
      if (index < 0) return;

      setActiveTrack(index);
    };

    updateRoute();
    window.addEventListener("scroll", updateRoute, { passive: true });
    window.addEventListener("resize", updateRoute);
    return () => {
      window.removeEventListener("scroll", updateRoute);
      window.removeEventListener("resize", updateRoute);
    };
  }, []);

  return (
    <div>
      <ServiceRoute activeTrack={activeTrack} visible={routeVisible} />
      {tracks.map((track) => (
        <section
          id={`service-${track.number}`}
          key={track.number}
          className="scroll-mt-44"
          style={{
            background: `linear-gradient(115deg, ${track.tint}, transparent 34%)`,
          }}
        >
          <div className="relative mx-auto w-full max-w-330 border-t border-black/10 px-6 py-20 md:px-10 md:py-28">
            <i aria-hidden="true" style={{ backgroundColor: track.accent }} className="absolute top-0 right-6 h-0.5 w-24 md:right-10 md:w-32" />
            <div
              className={`flex gap-7 md:items-start md:gap-16 ${"reverse" in track && track.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <motion.span
                style={{ color: track.accent }}
                className="shrink-0 text-5xl leading-none font-light tracking-tighter md:text-6xl"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 1] }}
              >
                {track.number}
              </motion.span>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.65, 0.3, 1] }}
              >
                <span
                  style={{ color: track.accent }}
                  className="text-[9px] font-black tracking-[0.16em]"
                >
                  {track.eyebrow}
                </span>
                <h2 className="max-w-4xl text-4xl leading-[0.95] font-black tracking-[-0.055em] md:text-6xl mt-3">
                  {track.title}
                </h2>
                <p className="max-w-2xl text-xs leading-6 text-black/45 md:text-sm mt-4">
                  {track.description}
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-[0.9fr_1fr_1fr] md:gap-14 mt-12 md:mt-20">
              <motion.div
                style={{ borderColor: track.accent }}
                className="border-t py-5"
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.2, 0.65, 0.3, 1] }}
              >
                <span
                  style={{ color: track.accent }}
                  className="text-[8px] font-black tracking-[0.18em]"
                >
                  مناسب برای
                </span>
                <p className="text-[11px] leading-6 text-black/50 mt-3">
                  {track.bestFor}
                </p>
              </motion.div>
              {[track.items.slice(0, 2), track.items.slice(2)].map(
                (column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col">
                    {column.map(([title, description], itemIndex) => (
                      <motion.div
                        key={title}
                        className="relative border-t border-black/10 pr-5 py-5"
                        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.75, delay: 0.12 + columnIndex * 0.08 + itemIndex * 0.1, ease: [0.2, 0.65, 0.3, 1] }}
                      >
                        <i
                          style={{ backgroundColor: track.accent }}
                          className="absolute right-0 top-7 size-1.5"
                        />
                        <h3 className="text-sm font-extrabold">{title}</h3>
                        <p className="text-[10px] leading-5 text-black/40 mt-2">
                          {description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ),
              )}
            </div>

            <motion.div
              className="grid gap-8 border-t border-black/10 md:grid-cols-[1.2fr_1fr_auto] mt-12 pt-7"
              initial={{ opacity: 0, y: 14, filter: "blur(7px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.2, 0.65, 0.3, 1] }}
            >
              <div>
                <span
                  style={{ color: track.accent }}
                  className="text-[8px] font-black tracking-[0.18em]"
                >
                  رویکرد ما
                </span>
                <p className="max-w-xl text-[10px] leading-5 font-medium mt-2">
                  {track.description}
                </p>
              </div>
              <div>
                <span
                  style={{ color: track.accent }}
                  className="text-[8px] font-black tracking-[0.18em]"
                >
                  توانمندی‌ها
                </span>
                <div className="flex flex-wrap gap-2 text-[9px] text-black/40 mt-3">
                  {track.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="flex items-center gap-2 border-b border-black text-[10px] font-bold md:self-end pb-1"
              >
                بررسی این خدمت <ArrowUpLeft className="size-3" />
              </a>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}

function ServiceRoute({ activeTrack, visible }: { activeTrack: number; visible: boolean }) {
  return (
    <nav
      aria-label="مسیر خدمات"
      className={`fixed inset-x-0 top-17 z-40 border-y border-black/10 bg-white/95 backdrop-blur-xl transition-all duration-500 md:top-20 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
    >
      <div className="flex flex-col md:hidden">
        <div className="flex h-10 items-center justify-center gap-3 border-b border-black/10 px-4">
          <span className="text-[7px] font-black tracking-[0.16em] text-black/35">مسیر خدمات</span>
          <strong style={{ color: tracks[activeTrack].accent }} className="text-[8px] font-black">
            {String(activeTrack + 1).padStart(2, "0")} / 05
          </strong>
          <span className="max-w-45 truncate text-[9px] font-extrabold text-black/80">
            {tracks[activeTrack].title}
          </span>
        </div>
        <div className="flex h-9 items-stretch">
          {tracks.map((track, index) => {
            const active = index === activeTrack;
            return (
              <a key={track.number} href={`#service-${track.number}`} className="relative flex flex-1 items-center justify-center text-[8px] font-bold text-black/35">
                <span style={{ color: active ? track.accent : undefined }}>{track.number}</span>
                <i
                  aria-hidden="true"
                  className="absolute right-1 bottom-0 left-1 h-px origin-center transition-all duration-300"
                  style={{
                    backgroundColor: track.accent,
                    opacity: active ? 1 : index < activeTrack ? 0.28 : 0,
                    transform: `scaleX(${index <= activeTrack ? 1 : 0})`,
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="hidden w-full items-stretch mx-auto px-16 md:flex">
        <div className="flex w-48 shrink-0 flex-col justify-center border-l border-black/10 py-4">
          <span className="text-[8px] font-black tracking-[0.18em] text-black/35">مسیر خدمات</span>
          <strong style={{ color: tracks[activeTrack].accent }} className="text-[10px] font-black mt-2">
            {String(activeTrack + 1).padStart(2, "0")} / 05
          </strong>
        </div>
        <div className="flex flex-1">
          {tracks.map((track, index) => {
            const active = index === activeTrack;
            return (
              <a
                key={track.number}
                href={`#service-${track.number}`}
                className="relative flex flex-1 items-center gap-3 text-[10px] font-bold transition-colors duration-300 px-5 py-5"
                style={{ color: active ? "#111" : "rgba(0,0,0,.38)" }}
              >
                <span style={{ color: active ? track.accent : "inherit" }}>{track.number}</span>
                <span>{track.title}</span>
                <i
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 h-0.5 w-full origin-right transition-transform duration-500"
                  style={{
                    backgroundColor: track.accent,
                    transform: `scaleX(${active ? 1 : 0})`,
                    transition: "transform 360ms cubic-bezier(.22,1,.36,1)",
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
