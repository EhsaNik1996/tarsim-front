"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
  {
    id: 1,
    title: "کورسو پلتفرم",
    subtitle: "سیستم اشتراک خلاقیت",
    desc: "شبکه اختصاصی به اشتراک‌گذاری مفاهیم هنری، ایده‌های دیزاین و خلق تعامل لایو بین هنرمندان مدرن.",
    longDesc: "پلتفرم کورسو به یک بستر یکپارچه وب با مدیریت فرآیندهای پیشرفته محتوا نیاز داشت. ما زیرساخت‌های فرانت‌اند، جریان‌های داینامیک استوری، چت‌های زنده معماری‌شده و فیدهای الگوریتمی هوشمند را به گونه‌ای توسعه دادیم که در ترافیک زنده و مقیاس بالا بدون وقفه عمل کند.",
    tags: ["Next.js", "توسعه ابری", "هوش مصنوعی"],
    url: "https://example.com",
    bgGradient: "from-orange-50/60 via-white to-white",
    hoverBorder: "hover:border-orange-200",
    activeColor: "text-orange-500",
    numColor: "group-hover:text-orange-100/80",
    badgeBg: "bg-orange-100/60 text-orange-700",
  },
  {
    id: 2,
    title: "ترسیم کپیتال",
    subtitle: "داشبورد مالی و وب‌سایت",
    desc: "پلتفرم مدیریت دارایی‌های دیجیتال و زنجیره تامین مالی پروژه‌ها مجهز به سیستم‌های تحلیلی زنده.",
    longDesc: "ترسیم کپیتال نیازمند یک بستر لایو برای پایش فرآیندهای مالی با امنیت تراز سازمانی بود. ساختار کاستوم وب‌سایت، جریان‌های ورود داده و نمودارهای پیشرفته آماری را به صورت ماژولار پیاده‌سازی کردیم تا تحلیلگران بدون نیاز به دانش مهندسی، خروجی‌ها را مدیریت کنند.",
    tags: ["React", "داشبورد", "مهندسی داده"],
    url: "https://tailwindcss.com",
    bgGradient: "from-emerald-50/60 via-white to-white",
    hoverBorder: "hover:border-emerald-200",
    activeColor: "text-emerald-500",
    numColor: "group-hover:text-emerald-100/80",
    badgeBg: "bg-emerald-100/60 text-emerald-700",
  },
  {
    id: 3,
    title: "اتوماسیون کلاود",
    subtitle: "زیرساخت ابری هوشمند",
    desc: "پلتفرم اتوماسیون فرآیندهای ابری، دپلوی مداوم لایه‌ها و مدیریت هوشمند ترافیک سرورها.",
    longDesc: "این پروژه با هدف خودکارسازی زیرساخت‌های ابری پایدار برای پلتفرم‌های حساس مهندسی شد. معماری دیتابیس‌های توزیع‌شده، کانتینرهای داکر و مانیتورینگ بلادرنگ فرآیندها به تیم‌های توسعه اجازه می‌دهد تا دپلوی محصولات را با حداکثر سرعت انجام دهند.",
    tags: ["Docker", "زیرساخت", "امنیت"],
    url: "https://vercel.com",
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

  const getScreenshotUrl = (url: string) => {
    return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
  };

  return (
    <section className="py-32 bg-white text-zinc-900 relative">
      <div className="px-6 md:px-36 mx-auto" dir="rtl">
        
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
              className="w-10 h-10 border border-zinc-200 flex items-center justify-center bg-white hover:border-zinc-400 transition-all cursor-pointer rounded-full z-10"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-600" />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 border border-zinc-200 flex items-center justify-center bg-white hover:border-zinc-400 transition-all cursor-pointer rounded-full z-10"
            >
              <ArrowRight className="w-4 h-4 text-zinc-600" />
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
            allowTouchMove={false}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="py-4">
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`group relative border border-zinc-100 bg-linear-to-br ${project.bgGradient} rounded-4xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.025] origin-bottom ${project.hoverBorder} shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between p-10 min-h-115 text-right`}
                  dir="rtl"
                >
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${project.badgeBg}`}>
                        {project.subtitle}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-zinc-400 tracking-widest bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-sm">
                        PUBLIC
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
                        <span key={i} className="text-[10px] font-medium bg-zinc-100 border border-zinc-200/60 text-zinc-600 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2" dir="ltr">
                      <span className={`text-[11px] font-mono font-bold ${project.activeColor} flex items-center gap-1 border-b border-transparent group-hover:border-current transition-all pb-0.5`}>
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

        {/* المان پجینیشن کاستوم با کنترل موقعیت */}
        <div className="mt-12 flex justify-center w-full relative z-30">
          <div className="custom-swiper-pagination flex gap-2 justify-center items-center h-6" />
        </div>
      </div>

      {/* دیالوگ دو ستونه با فیلدهای کاملاً فارسی‌شده */}
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
            
            {/* ستون سمت چپ: اطلاعات فارسی به همراه دکمه خروج وب‌سایت */}
            <div className="md:col-span-5 p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar bg-white">
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
                    {selectedProject?.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {selectedProject?.desc}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">مرور کلی پروژه</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium bg-zinc-50/60 p-5 rounded-2xl border border-zinc-100">
                    {selectedProject?.longDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">تکنولوژی‌ها</h4>
                  <div className="flex flex-wrap gap-1.5" dir="rtl">
                    {selectedProject?.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] font-medium bg-white border border-zinc-200 text-zinc-600 px-3 py-1.5 rounded-md shadow-2xs">
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

            {/* ستون سمت راست: نمایش مرورگر زنده و اسکرین‌شات محصول */}
            <div className="md:col-span-7 bg-zinc-50 p-8 flex flex-col justify-center border-r border-zinc-100 min-h-0" dir="ltr">
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 mb-2 block uppercase text-left">LIVE PREVIEW</span>
              <span className="text-xs font-bold text-zinc-800 mb-4 block text-left">{selectedProject?.title.toLowerCase()}-assets website</span>
              
              <div className="flex-1 border border-zinc-200 rounded-xl bg-white shadow-xl overflow-hidden flex flex-col min-h-0">
                <div className="bg-zinc-50/80 px-4 py-3 border-b border-zinc-200 flex items-center gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto bg-white border border-zinc-200 rounded-md text-[10px] text-zinc-400 py-0.5 px-3 text-center font-mono truncate select-none">
                    {selectedProject?.url.replace("https://", "")}/
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar bg-zinc-100 p-0 relative min-h-0">
                  {selectedProject && (
                    <div className="relative w-full min-h-225">
                      <Image
                        src={getScreenshotUrl(selectedProject.url)}
                        alt={selectedProject.title}
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
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