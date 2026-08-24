import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ArrowUpLeft, AtSign, Camera } from "lucide-react";
import logoImg from "@/public/Logo-noneBg.png";

const quickLinks = [
  { label: "خانه", href: "#" },
  { label: "درباره ما", href: "#about" },
  { label: "خدمات", href: "#services" },
  { label: "نمونه‌کارها", href: "#projects" },
  { label: "تماس", href: "#contact" },
];

const legalLinks = [
  { title: "حریم خصوصی", caption: "شیوه نگهداری و استفاده از داده‌ها" },
  { title: "شرایط همکاری", caption: "قوانین وب‌سایت و گفتگوهای پروژه" },
  { title: "منشور همکاری", caption: "چارچوب تعامل ما با مشتریان" },
];

const columnTitleClass =
  "mb-2 text-xs font-extrabold tracking-[.12em] text-[#909090]";

export default function Footer() {
  return (
    <footer
      className="relative z-3 bg-[#f7f7f7] px-3 pt-8 pb-4 sm:px-6 lg:px-[8vw] lg:pt-15.5 lg:pb-7.5"
      dir="rtl"
    >
      <div className="mx-auto max-w-[1600px] rounded-[30px] border border-[#dedede] bg-white/70 px-6 py-9 sm:rounded-[48px] sm:px-10 sm:py-12 lg:px-16 lg:py-15.5">
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-8 sm:items-end">
          <div>
            <p className={columnTitleClass}>درخواست همکاری</p>
            <h2 className="mt-3 text-[clamp(26px,2.2vw,36px)] leading-[1.3] font-black tracking-[-.035em]">
              بگویید چه چیزی باید تغییر کند.
            </h2>
            <a
              href="mailto:hello@tarsim.studio"
              className="mt-1.5 inline-flex items-center gap-1 text-lg font-semibold text-[#5f5f5f] transition-colors hover:text-electric-blue"
            >
              شروع گفت‌وگوی پروژه <ArrowUpLeft size={18} />
            </a>
          </div>

          <div
            className="flex items-center gap-3"
            aria-label="شبکه‌های اجتماعی"
          >
            <a
              className="grid size-10 place-items-center rounded-full bg-[#f0f0f0] text-[#888] transition hover:-translate-y-0.5 hover:bg-electric-blue hover:text-white sm:size-11.5"
              href="#"
              aria-label="اینستاگرام ترسیم"
            >
              <Camera size={18} />
            </a>
            <a
              className="grid size-10 place-items-center rounded-full bg-[#f0f0f0] text-[#888] transition hover:-translate-y-0.5 hover:bg-electric-blue hover:text-white sm:size-11.5"
              href="mailto:hello@tarsim.studio"
              aria-label="ایمیل ترسیم"
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-2 xl:grid-cols-[1.7fr_.75fr_1.35fr_1fr] xl:gap-6">
          <div className="rounded-[18px] bg-[#f5f5f5] p-6 sm:p-8">
            <p className="text-[11px] font-black tracking-[.08em] text-[#00bb68]">
              دانشنامه ترسیم
            </p>
            <div className="my-3 flex items-center gap-3">
              <span className="grid size-10.5 place-items-center overflow-hidden rounded-xl border border-[#ddd] bg-white">
                <Image
                  className="object-cover"
                  src={logoImg}
                  alt="لوگوی ترسیم"
                  width={46}
                  height={46}
                />
              </span>
              <strong className="font-manrope text-[29px] font-black tracking-[-.04em]">
                Tarsim
              </strong>
            </div>
            <p className="max-w-107.5 text-sm leading-[1.8] text-[#666]">
              دانش مهندسی، زمانی ارزشمند است که به اشتراک گذاشته شود. اینجا فقط
              بلاگ نیست. اینجا تجربه پانزده سال اجرای پروژه‌های واقعی مستند
              می‌شود.
            </p>
            <small className="mt-3.5 block text-xs text-[#aaa]">
              فعال در سراسر ایران؛ همراه شما از راه دور.
            </small>
          </div>

          <nav
            className="flex flex-col items-start gap-3 py-1"
            aria-label="لینک‌های سریع"
          >
            <h3 className={columnTitleClass}>دسترسی سریع</h3>
            {quickLinks.map((link) => (
              <Link
                className="text-sm text-[#242424] transition-colors hover:text-electric-blue"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start py-1">
            <h3 className={columnTitleClass}>قوانین</h3>
            {legalLinks.map((link) => (
              <a
                className="group flex w-full items-center justify-between gap-3 border-b border-[#dedede] py-2.5 last:border-0"
                href="#"
                key={link.title}
              >
                <span>
                  <strong className="block text-sm text-[#161616] transition-colors group-hover:text-electric-blue">
                    {link.title}
                  </strong>
                  <small className="mt-0.5 block text-[11px] text-[#9a9a9a]">
                    {link.caption}
                  </small>
                </span>
                <ArrowUpLeft
                  className="shrink-0 text-[#9a9a9a] transition-colors group-hover:text-electric-blue"
                  size={15}
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4.5 py-1">
            <h3 className={columnTitleClass}>ارتباط با ما</h3>
            <div className="flex flex-col items-start gap-1">
              <small className="text-[10px] font-extrabold text-[#aaa]">
                پروژه‌ها
              </small>
              <a
                className="inline-flex items-center gap-1 text-sm text-[#181818] transition-colors hover:text-electric-blue"
                href="mailto:hello@tarsim.studio"
              >
                ارسال درخواست <ArrowLeft size={14} />
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <small className="text-[10px] font-extrabold text-[#aaa]">
                گفت‌وگو
              </small>
              <a
                className="text-sm text-[#181818] transition-colors hover:text-electric-blue"
                href="mailto:hello@tarsim.studio"
              >
                صحبت با تیم
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <small className="text-[10px] font-extrabold text-[#aaa]">
                اینستاگرام
              </small>
              <a
                className="text-sm text-[#181818] transition-colors hover:text-electric-blue"
                href="#"
                dir="ltr"
              >
                @tarsim.studio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-11 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 border-t border-[#dedede] pt-6 text-xs text-[#aaa] sm:mt-16 sm:items-center">
          <p>© 2026 ترسیم. تمامی حقوق محفوظ است.</p>
          <a
            className="inline-flex items-center gap-1 transition-colors hover:text-electric-blue"
            href="#"
            aria-label="بازگشت به بالای صفحه"
          >
            بازگشت به بالا <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
