"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProjectsSlider.module.css";
import { CSSProperties, useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "داکیباکس",
    subtitle: "پلتفرم مدیریت کتابخانه ها",
    desc: "اکوسیستم مدیریت دانش، کتابخانه، آرشیو، ناشران و مراکز فرهنگی.",
    longDesc:
      "پلتفرم داکیباکس به یک بستر یکپارچه وب با مدیریت فرآیندهای پیشرفته محتوا نیاز داشت. ما زیرساخت‌های فرانت‌اند، جریان‌های داینامیک استوری، چت‌های زنده معماری‌شده و فیدهای الگوریتمی هوشمند را به گونه‌ای توسعه دادیم که در ترافیک زنده و مقیاس بالا بدون وقفه عمل کند.",
    tags: ["Next.js", "React.js", "tailwind"],
    url: "https://docibox.ir",
    screenshotName: "docibox",
    privacy: "public",
  },
  {
    id: 2,
    title: "کتابخانه مجازی ادبیات",
    subtitle: "دسترسی به کتب ادبی",
    desc: "بستری آزاد برای تحقیق و دسترسی به منابع تمام متن ادبی",
    longDesc:
      "«کتابخانۀ مجازی ادبیات» بستری است برای دستیابی پژوهشگران ارجمند حوزۀ ادبیات به فایل تمام‌متن پی‌دی‌اف (pdf) کتاب‌های حوزۀ ادبیات فارسی و عربی.",
    tags: ["Next.js", "Laravel", "tailwind"],
    privacy: "public",
    url: "https://eliteraturebook.com",
    screenshotName: "adabiat",
  },
  {
    id: 3,
    title: "کتابخانه تخصصی تاریخ اسلام و ایران",
    subtitle: "مرجع دیجیتال پژوهش‌های تاریخی",
    desc: "سامانه جامع دسترسی به منابع، کتاب‌ها، مقالات و اسناد تخصصی تاریخ اسلام و ایران برای پژوهشگران و علاقه‌مندان.",
    longDesc:
      "وب‌سایت کتابخانه تخصصی تاریخ اسلام و ایران با هدف ارائه دسترسی سریع و سازمان‌یافته به منابع معتبر تاریخی طراحی و توسعه شد. این پلتفرم امکان جستجوی پیشرفته، معرفی کتاب‌ها و مقالات، مدیریت آرشیو منابع و ارائه اطلاعات پژوهشی را در بستری مدرن و کاربرپسند فراهم می‌کند تا پژوهشگران، دانشجویان و علاقه‌مندان بتوانند به آسانی به محتوای تخصصی مورد نیاز خود دسترسی داشته باشند.",
    tags: ["Next.js", "آرشیو دیجیتال", "کتابخانه"],
    privacy: "public",
    url: "https://historylib.com/",
    screenshotName: "tarikh",
  },
  {
    id: 4,
    title: "الاختام",
    subtitle: "پلتفرم رسانه‌ای و آرشیو محتوای تاریخی",
    desc: "وب‌سایت چندرسانه‌ای برای انتشار مستندها، پادکست‌ها، پژوهش‌ها، نسخه‌های خطی و رویدادهای فرهنگی و تاریخی.",
    longDesc:
      "این پلتفرم با هدف ارائه و انتشار محتوای پژوهشی و رسانه‌ای در حوزه تاریخ و فرهنگ طراحی و توسعه شد. امکاناتی مانند معرفی مستندها، انتشار مقالات و پژوهش‌ها، آرشیو نسخه‌های خطی، پادکست، پوشش رویدادها و مدیریت محتوای چندرسانه‌ای در بستری مدرن و واکنش‌گرا، تجربه‌ای روان برای مخاطبان و پژوهشگران فراهم می‌کند.",
    tags: ["Next.js", "CMS", "چندرسانه‌ای"],
    privacy: "public",
    url: "https://akhtam.net/",
    screenshotName: "akhtam",
  },
  {
    id: 5,
    title: "الفائزون",
    subtitle: "پلتفرم معرفی آثار سینمایی و تلویزیونی",
    desc: "وب‌سایت رسمی شرکت تولیدات هنری برای معرفی سریال‌ها، فیلم‌ها، پروژه‌های در حال تولید و اخبار رسانه‌ای.",
    longDesc:
      "این وب‌سایت با هدف معرفی آثار و فعالیت‌های شرکت تولیدات هنری طراحی و توسعه شد. پلتفرم امکان نمایش پروژه‌های در حال تولید، معرفی آثار منتشرشده، ارائه اخبار، مدیریت محتوای چندرسانه‌ای و معرفی تیم تولید را در محیطی مدرن، واکنش‌گرا و بهینه برای تمامی دستگاه‌ها فراهم می‌کند.",
    tags: ["Next.js", "رسانه", "چندرسانه‌ای"],
    privacy: "public",
    url: "https://alfaazon.com/",
    screenshotName: "faezoon",
  },
  {
    id: 6,
    title: "عقائد",
    subtitle: "پلتفرم پژوهشی و آموزشی",
    desc: "وب‌سایت رسمی شرکت تولیدات هنری برای معرفی سریال‌ها، فیلم‌ها، پروژه‌های در حال تولید و اخبار رسانه‌ای.",
    longDesc:
      "این وب‌سایت با هدف معرفی آثار و فعالیت‌های شرکت تولیدات هنری طراحی و توسعه شد. پلتفرم امکان نمایش پروژه‌های در حال تولید، معرفی آثار منتشرشده، ارائه اخبار، مدیریت محتوای چندرسانه‌ای و معرفی تیم تولید را در محیطی مدرن، واکنش‌گرا و بهینه برای تمامی دستگاه‌ها فراهم می‌کند.",
    tags: ["Next.js", "رسانه", "چندرسانه‌ای"],
    privacy: "public",
    url: "https://aqaed.net",
    screenshotName: "aqaed",
  },
  {
    id: 7,
    title: "شرکت بازرگانی سفیر آفاق تجارت سبز",
    subtitle: "تامین تجهیزات تصفیه آب صنعتی",
    desc: "وب‌سایت شرکتی برای معرفی محصولات، برندهای بین‌المللی و خدمات تخصصی در حوزه فیلترهای ممبران و تجهیزات تصفیه آب صنعتی.",
    longDesc:
      "این وب‌سایت با هدف معرفی خدمات و محصولات شرکت سفیر آفاق تجارت سبز طراحی و توسعه شد. پلتفرم امکان معرفی برندهای معتبر جهانی، نمایش مشخصات فنی محصولات، ارائه اطلاعات تخصصی درباره فناوری‌های تصفیه آب صنعتی و ایجاد بستری حرفه‌ای برای ارتباط با مشتریان و دریافت درخواست‌های تجاری را فراهم می‌کند.",
    tags: ["Next.js", "وب‌سایت شرکتی", "تجارت بین‌الملل"],
    privacy: "public",
    url: "http://sats-co.com/",
    screenshotName: "safir",
  },
  {
    id: 8,
    title: "المستند",
    subtitle: "سایت خبری و اطلاعات",
    desc: "سایت اطلاعات مدیران و ارگان های موسسه آل البیت التراث",
    longDesc:
      "این پروژه با هدف خودکارسازی زیرساخت‌های ابری پایدار برای پلتفرم‌های حساس مهندسی شد. معماری دیتابیس‌های توزیع‌شده، کانتینرهای داکر و مانیتورینگ بلادرنگ فرآیندها به تیم‌های توسعه اجازه می‌دهد تا دپلوی محصولات را با حداکثر سرعت انجام دهند.",
    tags: ["Docker", "زیرساخت", "امنیت"],
    privacy: "private",
    url: "https://new.al-mostanad.com",
    screenshotName: "mostanad",
  },
];

const projectPalettes = [
  {
    accent: "#7c3aed",
    tint: "rgba(124, 58, 237, 0.085)",
    border: "rgba(124, 58, 237, 0.42)",
  },
  {
    accent: "#138fc8",
    tint: "rgba(19, 143, 200, 0.085)",
    border: "rgba(19, 143, 200, 0.25)",
  },
  {
    accent: "#db720d",
    tint: "rgba(219, 114, 13, 0.075)",
    border: "rgba(219, 114, 13, 0.22)",
  },
  {
    accent: "#159b73",
    tint: "rgba(21, 155, 115, 0.08)",
    border: "rgba(21, 155, 115, 0.24)",
  },
  {
    accent: "#d94f7d",
    tint: "rgba(217, 79, 125, 0.075)",
    border: "rgba(217, 79, 125, 0.23)",
  },
  {
    accent: "#5562df",
    tint: "rgba(85, 98, 223, 0.08)",
    border: "rgba(85, 98, 223, 0.24)",
  },
  {
    accent: "#0f9994",
    tint: "rgba(15, 153, 148, 0.075)",
    border: "rgba(15, 153, 148, 0.23)",
  },
  {
    accent: "#bd861b",
    tint: "rgba(189, 134, 27, 0.08)",
    border: "rgba(189, 134, 27, 0.24)",
  },
];

export default function ProjectsSlider() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 relative overflow-hidden bg-white py-16 md:py-24 text-zinc-950 md:pt-18"
    >
      <div className="mx-auto w-[94%] max-w-380" dir="rtl">
        <div className="mb-14 flex flex-col items-start justify-between gap-7 md:mb-16 md:flex-row md:items-center">
          <div className="text-right space-y-1">
            <h2 className="text-4xl md:6xl font-black leading-none tracking-[-0.055em] text-black">
              تجربه هایی که به نتیجه رسیدند
            </h2>
            <h3 className="text-base text-gray-500">
              هر پروژه، یک مسئله واقعی بود
            </h3>
          </div>

          <div className="flex items-center gap-3" dir="ltr">
            <span className="mr-1 min-w-10 font-manrope text-[12px] font-extrabold tracking-[-0.04em] text-black">
              {activeIndex + 1}/{projectsData.length}
            </span>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="پروژه قبلی"
              className={`${styles.navButton} z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white transition-all`}
            >
              <ArrowLeft className="size-4 text-zinc-500" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="پروژه بعدی"
              className={`${styles.navButton} z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white transition-all`}
            >
              <ArrowRight className="size-4 text-zinc-500" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* محفظه Swiper */}
        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            pagination={{
              clickable: true,
              el: `.${styles.pagination}`,
            }}
            breakpoints={{
              640: { slidesPerView: 1.35 },
              768: { slidesPerView: 2 },
              1150: { slidesPerView: 3 },
            }}
            className={`${styles.swiper} w-full`}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-auto! py-2 px-0.5">
                <div
                  onClick={() => setSelectedProject(project)}
                  style={
                    {
                      "--project-accent":
                        projectPalettes[project.id - 1].accent,
                      "--project-tint": projectPalettes[project.id - 1].tint,
                      "--project-border":
                        projectPalettes[project.id - 1].border,
                    } as CSSProperties
                  }
                  className={`${styles.card} group relative flex min-h-102.5 h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] border p-7 text-right transition-all duration-500 md:p-8`}
                  dir="rtl"
                >
                  <div className="relative z-10">
                    <div className="mb-9 flex items-center justify-between gap-3">
                      <span
                        className={`${styles.category} max-w-[76%] truncate rounded-full border px-3 py-1.5 text-[10px] font-extrabold leading-none`}
                      >
                        {project.subtitle}
                      </span>
                      <span className="shrink-0 rounded-full border border-zinc-200/80 bg-white/75 px-3 py-1.5 font-manrope text-[9px] font-bold uppercase leading-none tracking-[0.16em] text-zinc-400">
                        {project.privacy}
                      </span>
                    </div>

                    <h3 className="mb-4 text-[clamp(1.7rem,2.3vw,2.45rem)] font-black leading-[1.2] tracking-[-0.04em] text-black">
                      {project.title}
                    </h3>
                    <p className="max-w-[92%] text-[13px] font-medium leading-[1.9] text-zinc-500">
                      {project.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col gap-5">
                    <div
                      className="flex items-center justify-between pt-1"
                      dir="ltr"
                    >
                      <div
                        className={`${styles.link} flex flex-col items-start justify-end h-full gap-y-6 border-b border-transparent pb-0.5 font-manrope text-[10px] font-extrabold tracking-[0.02em] transition-all`}
                      >
                        <div className="flex gap-x-0.5">
                          {project.tags.map((tag, i) => (
                            <div
                              key={i}
                              className="flex border border-zinc-200/60 bg-white/70 px-3 py-1.5 text-[9px] font-bold text-zinc-500 backdrop-blur-sm rounded-full"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                        <div className="group-hover:scale-105">
                          VIEW CASE STUDY <span className="text-xs">↗</span>
                        </div>
                      </div>
                      <div
                        className={`${styles.number} pointer-events-none z-0 select-none font-manrope text-[7.5rem] font-extrabold leading-none tracking-[-0.08em] transition-all duration-500`}
                        dir="ltr"
                      >
                        {String(project.id).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative z-30 mt-9 flex w-full justify-center">
          <div
            className={`${styles.pagination} flex h-6 items-center justify-center gap-2`}
          />
        </div>
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent
          className="max-w-6xl bg-white border border-zinc-200 p-0 overflow-hidden flex flex-col max-h-[90vh] text-right shadow-2xl rounded-4xl"
          dir="rtl"
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 left-6 size-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white hover:border-zinc-400 transition-all cursor-pointer z-50 shadow-xs"
          >
            <X className="size-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden min-h-0">
            {/* ستون سمت چپ */}
            <div
              className={`${styles.scrollbar} md:col-span-5 p-12 flex flex-col justify-between overflow-y-auto bg-white`}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
                    {selectedProject?.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {selectedProject?.desc}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    مرور کلی پروژه
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium bg-zinc-50/60 p-5 rounded-2xl border border-zinc-100">
                    {selectedProject?.longDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    تکنولوژی‌ها
                  </h4>
                  <div className="flex flex-wrap gap-1.5" dir="rtl">
                    {selectedProject?.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-white border border-zinc-200 text-zinc-600 px-3 py-1.5 rounded-md shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-zinc-100">
                {selectedProject && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black hover:bg-zinc-900 text-white font-bold w-full py-4 rounded-xl text-sm transition-all shadow-md group"
                  >
                    <span>ورود به وب‌سایت اصلی</span>
                    <ExternalLink className="size-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>

            {/* ستون سمت راست: نمایش اسکرین‌شات ثابت از پوشه public */}
            <div
              className="md:col-span-7 bg-zinc-50 p-8 flex flex-col justify-center border-r border-zinc-100 min-h-0"
              dir="ltr"
            >
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 mb-2 block uppercase text-right">
                LIVE PREVIEW
              </span>
              <span className="text-xs font-bold text-zinc-800 mb-4 block text-right">
                {selectedProject?.title.toLowerCase()}
              </span>

              <div className="flex-1 border border-zinc-200 rounded-xl bg-white shadow-xl overflow-hidden flex flex-col min-h-0">
                <div className="bg-zinc-50/80 px-4 py-3 border-b border-zinc-200 flex items-center gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-400" />
                    <div className="size-2.5 rounded-full bg-yellow-400" />
                    <div className="size-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto bg-white border border-zinc-200 rounded-md text-[10px] text-zinc-400 py-0.5 px-3 text-center font-mono truncate select-none">
                    {selectedProject?.url
                      .replace("https://", "")
                      .replace("http://", "")}
                    /
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto bg-zinc-100">
                  {selectedProject ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/screenshots/${selectedProject.screenshotName}.jpeg`}
                      alt={selectedProject.title ?? "Project screenshot"}
                      className="w-full min-h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.src.endsWith(".png")) {
                          img.src = `/screenshots/${selectedProject.screenshotName}.png`;
                        }
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-zinc-400 text-xs">
                      در حال بارگذاری پیش‌نمایش...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .projects-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .project-card {
          border-color: var(--project-border);
          background:
            radial-gradient(
              circle at 100% 0%,
              var(--project-tint),
              transparent 57%
            ),
            linear-gradient(
              145deg,
              color-mix(in srgb, var(--project-tint) 44%, white) 0%,
              white 66%
            );
          box-shadow: 0 12px 30px rgba(24, 24, 27, 0.025);
        }
        .project-card:hover {
          border-color: var(--project-accent);
          background:
            radial-gradient(
              circle at 100% 0%,
              color-mix(in srgb, var(--project-tint) 135%, transparent),
              transparent 61%
            ),
            linear-gradient(
              145deg,
              color-mix(in srgb, var(--project-tint) 58%, white) 0%,
              white 68%
            );
          box-shadow:
            0 24px 44px -30px
              color-mix(in srgb, var(--project-accent) 32%, transparent),
            0 10px 28px rgba(24, 24, 27, 0.045);
          transform: translateY(-4px);
        }
        .project-category {
          border-color: color-mix(
            in srgb,
            var(--project-accent) 22%,
            transparent
          );
          background: color-mix(in srgb, var(--project-accent) 10%, white);
          color: var(--project-accent);
        }
        .project-link {
          color: var(--project-accent);
        }
        .project-number {
          color: transparent;
          -webkit-text-stroke: 1px
            color-mix(in srgb, var(--project-accent) 25%, transparent);
          opacity: 0.8;
        }
        .project-card:hover .project-number {
          -webkit-text-stroke-color: color-mix(
            in srgb,
            var(--project-accent) 43%,
            transparent
          );
          opacity: 1;
          transform: translateY(-2px);
        }
        .project-nav-button:hover {
          border-color: #a1a1aa;
          background: #fafafa;
          transform: translateY(-1px);
        }
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #dedee3 !important;
          opacity: 1 !important;
          width: 5px !important;
          height: 5px !important;
          transition: all 0.4s ease !important;
          border-radius: 9999px !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #7c3aed !important;
          width: 32px !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e4e4e7;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
