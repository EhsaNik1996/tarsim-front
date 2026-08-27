"use client";
import "swiper/css";
import styles from "./ProjectsSlider.module.css";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { CSSProperties, useCallback, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";

const SLIDE_SPEED = 360;

function getVisibleRange(swiper: SwiperType) {
  const fullyVisibleClass =
    swiper.params.slideFullyVisibleClass ?? "swiper-slide-fully-visible";
  const fullyVisible = [...swiper.slides]
    .map((slide, index) => ({ slide, index }))
    .filter(({ slide }) => slide.classList.contains(fullyVisibleClass))
    .map(({ index }) => index);

  if (fullyVisible.length > 0) {
    return {
      start: fullyVisible[0],
      end: fullyVisible[fullyVisible.length - 1],
    };
  }

  const perView = swiper.params.slidesPerView;
  const count = Math.max(1, Math.floor(typeof perView === "number" ? perView : 1));
  const start = swiper.activeIndex;
  return {
    start,
    end: Math.min(start + count - 1, swiper.slides.length - 1),
  };
}

function slideToKeepIndexVisible(swiper: SwiperType, index: number) {
  const { start, end } = getVisibleRange(swiper);
  if (index >= start && index <= end) return;

  const visibleCount = end - start + 1;
  if (index > end) {
    swiper.slideTo(index - visibleCount + 1, SLIDE_SPEED);
    return;
  }

  swiper.slideTo(index, SLIDE_SPEED);
}

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
    title: "اختام",
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

type Project = (typeof projectsData)[number];

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="grid h-full min-h-0 grid-cols-1 overflow-y-auto md:grid-cols-12 md:overflow-hidden">
      <div
        className={`${styles.scrollbar} flex flex-col justify-between bg-white p-6 md:col-span-5 md:overflow-y-auto md:p-12`}
      >
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-3xl leading-tight font-black text-zinc-900">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed font-medium text-zinc-500">
              {project.desc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-zinc-400">
              مرور کلی پروژه
            </h4>
            <p className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-5 text-xs leading-relaxed font-medium text-zinc-600">
              {project.longDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-zinc-400">
              تکنولوژی‌ها
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-100 pt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-zinc-900"
          >
            <span>ورود به وب‌سایت اصلی</span>
            <ExternalLink className="size-4 text-zinc-400 transition-colors group-hover:text-white" />
          </a>
        </div>
      </div>

      <div
        className="flex min-h-80 flex-col justify-center border-zinc-100 bg-zinc-50 p-5 md:col-span-7 md:min-h-0 md:border-r md:p-8"
        dir="ltr"
      >
        <span className="mb-5 block text-right text-xs font-bold text-zinc-800">
          {project.title}
        </span>

        <div className="flex min-h-72 flex-1 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
          <div className="flex shrink-0 items-center gap-2 border-b border-zinc-200 bg-zinc-50/80 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400" />
              <div className="size-2.5 rounded-full bg-yellow-400" />
              <div className="size-2.5 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto flex-1 max-w-md truncate rounded-md border border-zinc-200 bg-white px-3 py-0.5 text-center font-mono text-xs text-zinc-400 select-none">
              {project.url.replace("https://", "").replace("http://", "")}/
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/screenshots/${project.screenshotName}.jpeg`}
              alt={project.title}
              className={`min-h-full w-full object-cover ${
                project.screenshotName === "mostanad"
                  ? "object-left"
                  : "object-center"
              }`}
              onError={(event) => {
                const image = event.currentTarget;
                if (!image.src.endsWith(".png")) {
                  image.src = `/screenshots/${project.screenshotName}.png`;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDialog({
  open,
  selectedIndex,
  onIndexChange,
  onClose,
}: {
  open: boolean;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const detailSwiperRef = useRef<SwiperRef>(null);

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent
        className="isolate flex h-[85vh] max-w-7xl flex-col overflow-visible rounded-4xl border border-zinc-200 bg-white p-0 text-right shadow-2xl"
        dir="rtl"
      >
        <button
          type="button"
          onPointerDown={(event) => {
            event.stopPropagation();
            onClose();
          }}
          onClick={onClose}
          aria-label="بستن جزئیات پروژه"
          className="pointer-events-auto absolute top-6 left-6 z-50 flex size-8 touch-manipulation items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-xs transition-all hover:border-zinc-400 hover:text-zinc-900"
        >
          <X className="size-4" />
        </button>

        <div className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 rounded-full border border-zinc-200 bg-white/95 px-3 py-1 font-manrope text-xs font-bold text-zinc-500 shadow-sm backdrop-blur-sm">
          {selectedIndex + 1}/{projectsData.length}
        </div>

        <button
          type="button"
          onClick={() => detailSwiperRef.current?.swiper.slidePrev()}
          aria-label="پروژه قبلی"
          className="absolute top-1/2 right-2 z-50 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-500 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-400 hover:text-black md:-right-16"
        >
          <ArrowRight className="size-5" strokeWidth={1.7} />
        </button>
        <button
          type="button"
          onClick={() => detailSwiperRef.current?.swiper.slideNext()}
          aria-label="پروژه بعدی"
          className="absolute top-1/2 left-2 z-50 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-500 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-400 hover:text-black md:-left-16"
        >
          <ArrowLeft className="size-5" strokeWidth={1.7} />
        </button>

        {open && (
          <Swiper
            ref={detailSwiperRef}
            initialSlide={selectedIndex}
            slidesPerView={1}
            spaceBetween={0}
            loop
            onSlideChange={(swiper) => onIndexChange(swiper.realIndex)}
            className="h-full w-full overflow-hidden rounded-4xl"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-full!">
                <ProjectDetails project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsSlider() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const draggedRef = useRef(false);

  const goToIndex = useCallback((index: number) => {
    const next = Math.min(projectsData.length - 1, Math.max(0, index));
    setActiveIndex(next);
    const swiper = swiperRef.current?.swiper;
    if (swiper) slideToKeepIndexVisible(swiper, next);
  }, []);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-white py-16 text-zinc-950 md:py-24 md:pt-18"
    >
      <div className="mx-auto w-[94%] max-w-380" dir="rtl">
        <div className="mb-14 flex flex-col items-start justify-between gap-7 md:mb-16 md:flex-row md:items-center">
          <div className="space-y-2 text-right">
            <h2 className="text-4xl leading-none font-black text-black md:text-6xl">
              تجربه‌هایی که به نتیجه رسیدند
            </h2>
            <h3 className="text-base text-gray-500">
              هر پروژه، یک مسئله واقعی بود
            </h3>
          </div>

          <div className="flex items-center gap-3" dir="ltr">
            <span className="mr-1 min-w-10 font-manrope text-xs font-extrabold text-black">
              {activeIndex + 1}/{projectsData.length}
            </span>
            <button
              type="button"
              onClick={() => goToIndex(activeIndex + 1)}
              aria-label="پروژه قبلی"
              className={`${styles.navButton} z-10 flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all`}
            >
              <ArrowLeft className="size-4 text-zinc-500" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goToIndex(activeIndex - 1)}
              aria-label="پروژه بعدی"
              className={`${styles.navButton} z-10 flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all`}
            >
              <ArrowRight className="size-4 text-zinc-500" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            speed={SLIDE_SPEED}
            watchSlidesProgress
            onSliderFirstMove={() => {
              draggedRef.current = true;
            }}
            onTransitionEnd={(swiper) => {
              if (!draggedRef.current) return;
              draggedRef.current = false;
              const { start, end } = getVisibleRange(swiper);
              setActiveIndex((current) => {
                if (current >= start && current <= end) return current;
                if (current < start) return start;
                return end;
              });
            }}
            breakpoints={{
              640: { slidesPerView: 1.35 },
              768: { slidesPerView: 2 },
              1150: { slidesPerView: 3 },
            }}
            className={`${styles.swiper} w-full`}
          >
            {projectsData.map((project, projectIndex) => (
              <SwiperSlide key={project.id} className="h-auto! px-0.5 py-2">
                <div
                  onClick={() => {
                    setSelectedProjectIndex(projectIndex);
                    setIsProjectDialogOpen(true);
                  }}
                  style={
                    {
                      "--project-accent":
                        projectPalettes[project.id - 1].accent,
                      "--project-tint": projectPalettes[project.id - 1].tint,
                      "--project-border":
                        projectPalettes[project.id - 1].border,
                    } as CSSProperties
                  }
                  className={`${styles.card} ${projectIndex === activeIndex ? styles.cardActive : ""} group relative flex h-full min-h-102.5 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border p-7 text-right transition-all duration-500 md:p-8`}
                  dir="rtl"
                >
                  <div className="relative z-10">
                    <div className="mb-9 flex items-center justify-between gap-3">
                      <span
                        className={`${styles.category} max-w-3/4 truncate rounded-full border px-3 py-1.5 text-xs leading-none font-extrabold`}
                      >
                        {project.subtitle}
                      </span>
                      <span className="shrink-0 rounded-full border border-zinc-200/80 bg-white/75 px-3 py-1.5 font-manrope text-xs leading-none font-bold text-zinc-400">
                        {project.privacy}
                      </span>
                    </div>

                    <h3 className="mb-4 text-3xl leading-tight font-black text-black">
                      {project.title}
                    </h3>
                    <p className="max-w-11/12 text-sm leading-7 font-medium text-zinc-500">
                      {project.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col gap-5">
                    <div
                      className="flex items-center justify-between pt-1"
                      dir="ltr"
                    >
                      <div
                        className={`${styles.link} flex h-full flex-col items-start justify-end gap-y-6 border-b border-transparent pb-0.5 font-manrope text-xs font-extrabold transition-all`}
                      >
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <div
                              key={tag}
                              className="flex rounded-full border border-zinc-200/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-zinc-500 backdrop-blur-sm"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                        <div className={`${styles.detailsCta} transition-transform duration-500`}>
                          مشاهده جزئیات <span>↗</span>
                        </div>
                      </div>
                      <div
                        className={`${styles.number} pointer-events-none z-0 select-none font-manrope text-8xl leading-none font-extrabold transition-all duration-500`}
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
            dir="rtl"
            aria-label="انتخاب پروژه"
          >
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`نمایش پروژه ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                style={
                  {
                    "--pagination-accent": projectPalettes[index].accent,
                  } as CSSProperties
                }
                className={`${styles.bullet} ${
                  activeIndex === index ? styles.bulletActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectDialog
        open={isProjectDialogOpen}
        selectedIndex={selectedProjectIndex}
        onIndexChange={setSelectedProjectIndex}
        onClose={() => setIsProjectDialogOpen(false)}
      />
    </section>
  );
}
