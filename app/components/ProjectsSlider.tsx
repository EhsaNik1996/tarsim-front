"use client";
import { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
  {
    id: 1,
    title: "داکیباکس",
    subtitle: "پلتفرم مدیریت کتابخانه ها",
    desc: "بانک بزرگی از کتاب ها و کتابخانه ها و دسترسی به فایل کتاب های دیجیتال",
    longDesc:
      "پلتفرم داکیباکس به یک بستر یکپارچه وب با مدیریت فرآیندهای پیشرفته محتوا نیاز داشت. ما زیرساخت‌های فرانت‌اند، جریان‌های داینامیک استوری، چت‌های زنده معماری‌شده و فیدهای الگوریتمی هوشمند را به گونه‌ای توسعه دادیم که در ترافیک زنده و مقیاس بالا بدون وقفه عمل کند.",
    tags: ["Next.js", "React.js", "tailwind"],
    url: "https://docibox.ir",
    screenshotName: "docibox",
    privacy: "public",
    bgGradient: "from-orange-50/60 via-white to-white",
    hoverBorder: "hover:border-orange-200",
    activeColor: "text-orange-500",
    numColor: "group-hover:text-orange-100/80",
    badgeBg: "bg-orange-100/60 text-orange-700",
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
    bgGradient: "from-emerald-50/60 via-white to-white",
    hoverBorder: "hover:border-emerald-200",
    activeColor: "text-emerald-500",
    numColor: "group-hover:text-emerald-100/80",
    badgeBg: "bg-emerald-100/60 text-emerald-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-teal-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-teal-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-emerald-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-teal-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-teal-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
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
    bgGradient: "from-teal-50/60 via-white to-white",
    hoverBorder: "hover:border-teal-200",
    activeColor: "text-teal-500",
    numColor: "group-hover:text-teal-100/80",
    badgeBg: "bg-teal-100/60 text-teal-700",
  },
];

export default function ProjectsSlider() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="bg-white text-zinc-900 relative">
      <div className="w-[84%] place-self-center" dir="rtl">
        {/* هدر بخش به همراه نویگیشن */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="text-right">
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest block mb-2 uppercase">
              پروژه‌های شاخص
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
              آثار توسعه‌یافته
            </h2>
          </div>

          <div className="flex gap-2 items-center" dir="ltr">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="size-10 border border-zinc-200 flex items-center justify-center bg-white hover:border-zinc-400 transition-all cursor-pointer rounded-full z-10"
            >
              <ArrowLeft className="size-4 text-zinc-600" />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="size-10 border border-zinc-200 flex items-center justify-center bg-white hover:border-zinc-400 transition-all cursor-pointer rounded-full z-10"
            >
              <ArrowRight className="size-4 text-zinc-600" />
            </button>
          </div>
        </div>

        {/* محفظه Swiper */}
        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={false}
            allowTouchMove={false}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="py-4 px-1.5">
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`group relative border border-zinc-100 bg-linear-to-br ${project.bgGradient} rounded-4xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.015] hover:z-10 origin-bottom ${project.hoverBorder} shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between p-10 min-h-115 text-right`}
                  dir="rtl"
                >
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${project.badgeBg}`}
                      >
                        {project.subtitle}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-zinc-400 tracking-widest bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-sm">
                        {project.privacy}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">
                      {project.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium bg-zinc-100 border border-zinc-200/60 text-zinc-600 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex justify-between items-center pt-2"
                      dir="ltr"
                    >
                      <span
                        className={`text-[11px] font-mono font-bold ${project.activeColor} flex items-center gap-1 border-b border-transparent group-hover:border-current transition-all pb-0.5`}
                      >
                        VIEW CASE STUDY <span className="text-xs">↗</span>
                      </span>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-4 right-6 font-mono text-8xl font-black leading-none text-zinc-100 select-none pointer-events-none transition-colors duration-500 z-0 ${project.numColor}`}
                    style={{ WebkitTextStroke: "1px currentColor" }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex justify-center w-full relative z-30">
          <div className="custom-swiper-pagination flex gap-2 justify-center items-center h-6" />
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
            <div className="md:col-span-5 p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar bg-white">
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
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #e4e4e7 !important;
          opacity: 1 !important;
          width: 6px !important;
          height: 6px !important;
          transition: all 0.4s ease !important;
          border-radius: 9999px !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #000000 !important;
          width: 20px !important;
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
