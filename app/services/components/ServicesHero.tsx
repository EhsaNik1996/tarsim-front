"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const inputs = [
  {
    id: "ideas",
    label: "ایده‌ها",
    color: "#315bff",
    path: "M118 132 C225 132 230 260 390 286",
  },
  {
    id: "manual",
    label: "کار دستی",
    color: "#8b5cf6",
    path: "M118 214 C230 214 245 278 390 300",
  },
  {
    id: "legacy",
    label: "کد قدیمی",
    color: "#ff6b21",
    path: "M118 296 C235 296 275 296 390 306",
  },
  {
    id: "data",
    label: "داده‌های جدا",
    color: "#0798db",
    path: "M118 378 C225 378 235 330 390 318",
  },
  {
    id: "roadmap",
    label: "نقشه راه",
    color: "#d629e8",
    path: "M118 460 C220 460 235 352 390 326",
  },
] as const;

export default function ServicesHero() {
  return (
    <section
      dir="rtl"
      className="relative isolate min-h-svh overflow-hidden bg-white text-black pt-17 md:pt-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-white" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_47%_27%,rgba(95,113,255,0.15),transparent_24%),radial-gradient(circle_at_54%_78%,rgba(215,92,244,0.10),transparent_27%),radial-gradient(circle_at_91%_49%,rgba(52,211,153,0.16),transparent_30%),radial-gradient(circle_at_7%_80%,rgba(74,222,128,0.08),transparent_27%),linear-gradient(120deg,#ffffff_20%,#fbfcff_55%,#f7fffb_100%)]"
      />

      <div
        className="flex min-h-[calc(100svh-5rem)] w-full flex-col items-stretch justify-center gap-10 mx-auto px-6 py-12 md:flex-row md:items-center md:gap-x-56 md:px-20 md:py-8"
        dir="ltr"
      >
        <ServiceCopy />
        <DeliveryDiagram />
      </div>
    </section>
  );
}

function ServiceCopy() {
  return (
    <motion.div
      dir="rtl"
      className="order-1 text-right md:order-0 md:basis-[35%] md:shrink-0"
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 1] }}
    >
      <div className="flex items-center justify-start gap-3 text-[11px] font-black tracking-[0.2em] text-zinc-500">
        <span>خدمات</span>
        <i className="size-2 rounded-full bg-emerald-500" />
      </div>

      <div className="max-w-152 text-5xl leading-13 md:leading-20 font-black tracking-[-0.055em] sm:text-6xl lg:text-[4.3rem] mt-9">
        سیستم‌هایی که
        <motion.h2 className="relative block font-semibold text-emerald-500 my-1 pb-2">
          کار را به حرکت
          <motion.span
            aria-hidden="true"
            className="hidden md:block md:absolute inset-x-0 bottom-0 h-0.5"
            style={{
              backgroundImage:
                "linear-gradient(90deg,transparent 0%,rgba(117,235,184,.2) 18%,#6ee7b7 42%,#27c982 50%,#6ee7b7 58%,rgba(117,235,184,.2) 82%,transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              opacity: [0.45, 1, 0.45],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h2>
        درمی‌آورند.
      </div>

      <p className="max-w-136 text-sm leading-8 font-medium text-zinc-500 md:text-base mt-8">
        پنج مسیر یکپارچه‌ی خدمات، پیچیدگی را به شفافیت تبدیل می‌کنند، فناوری را
        با اهداف کسب‌وکار هم‌راستا نگه می‌دارند و از مسئله‌ی امروز، یک نرم‌افزار
        کاربردی و قابل اتکا می‌سازند.
      </p>

      <Link
        href="/#contact"
        className="inline-flex items-center gap-12 rounded-full bg-black text-xs font-extrabold text-white transition-transform duration-300 hover:-translate-y-1 mt-8 px-7 py-4"
      >
        شروع یک گفت‌وگو
        <ArrowLeft className="size-4" />
      </Link>
    </motion.div>
  );
}

function DeliveryDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      dir="rtl"
      className="relative order-2 min-h-105 overflow-visible md:order-0 md:min-h-155 md:basis-[62%] md:flex-1"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_28%_15%_at_18%_24%,rgba(49,91,255,0.14),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_39%,rgba(139,92,246,0.13),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_53%,rgba(255,107,33,0.11),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_67%,rgba(7,152,219,0.12),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_82%,rgba(214,41,232,0.13),transparent_75%),radial-gradient(ellipse_48%_60%_at_72%_54%,rgba(52,211,153,0.15),transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-[-28vw] left-[12%] z-0 opacity-55 bg-[radial-gradient(rgba(82,93,120,0.12)_0.72px,transparent_0.72px)] bg-size-[18px_18px] mask-[linear-gradient(to_left,black_0%,black_58%,rgba(0,0,0,0.72)_76%,transparent_100%)]"
      />
      <div className="flex flex-col md:flex-row-reverse justify-between">
        <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-zinc-500 md:left-10">
          <i className="size-2 rounded-full bg-emerald-500" />
          موتور تحویل
        </div>
        <div className="max-w-58 text-right text-xs leading-6 text-zinc-500 md:top-7 md:right-8 md:text-sm">
          ورودی‌های متفاوت؛ یک مسیر پاسخ‌گو تا محصول نهایی.
        </div>
      </div>

      <svg
        viewBox="0 0 760 560"
        className="absolute inset-x-0 bottom-4 h-[88%] w-full overflow-visible md:h-[108%]"
        aria-label="نمودار تبدیل ورودی‌های مختلف به نرم‌افزار کاربردی"
      >
        <defs>
          <filter id="core-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="13"
              dy="8"
              stdDeviation="4"
              floodColor="#64748b"
              floodOpacity=".28"
            />
            <feDropShadow
              dx="2"
              dy="3"
              stdDeviation="7"
              floodColor="#0f172a"
              floodOpacity=".13"
            />
          </filter>
          <clipPath id="core-clip">
            <polygon points="418,215 510,215 542,306 510,397 418,397 386,306" />
          </clipPath>
          <linearGradient id="output-line-gradient" x1="542" y1="306" x2="745" y2="306" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9be9c3" stopOpacity="0.45" />
            <stop offset="0.45" stopColor="#5edc9d" stopOpacity="0.72" />
            <stop offset="1" stopColor="#16c76a" />
          </linearGradient>
          <linearGradient id="output-capsule-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9bf0c7" />
            <stop offset="1" stopColor="#20df7d" />
          </linearGradient>
        </defs>

        {inputs.map((input, index) => (
          <g key={input.id}>
            <path
              id={`route-${input.id}`}
              d={input.path}
              fill="none"
              stroke={input.color}
              strokeOpacity=".24"
              strokeWidth="1.5"
            />
            <motion.path
              d={input.path}
              fill="none"
              stroke={input.color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="26 360"
              initial={
                reduceMotion ? undefined : { opacity: 0, strokeDashoffset: 360 }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0, 0.4, 1, 1, 1, 0.35, 0],
                      strokeDashoffset: [360, 340, 275, 58, 58, 18, 0],
                    }
              }
              transition={{
                duration: 2.4,
                delay: 0.7,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.08, 0.2, 0.66, 0.78, 0.93, 1],
                ease: [0.3, 0, 0.2, 1],
              }}
            />
            <circle cx="100" cy={132 + index * 82} r="4" fill={input.color} />
            <text
              x="76"
              y={137 + index * 82}
              textAnchor="start"
              direction="rtl"
              className="fill-zinc-500 text-base font-extrabold"
            >
              {input.label}
            </text>
          </g>
        ))}

        <motion.g
          style={{ transformOrigin: "464px 306px" }}
          animate={reduceMotion ? undefined : { scale: [1, 1, 1.055, 1] }}
          transition={{
            duration: 3.4,
            times: [0, 0.64, 0.76, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon
            points="430,215 522,215 554,306 522,397 430,397 398,306"
            fill="rgba(91,111,106,.16)"
          />
          <polygon
            points="418,215 510,215 542,306 510,397 418,397 386,306"
            fill="#070b09"
            filter="url(#core-shadow)"
          />
          <g clipPath="url(#core-clip)">
            {[286, 306, 326].map((y, index) => (
              <motion.line
                key={y}
                x1="382"
                x2="548"
                y1={y}
                y2={y}
                stroke="#3be58d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="18 148"
                animate={
                  reduceMotion
                    ? undefined
                    : { strokeDashoffset: [166, 0], opacity: [0, 0.14, 0] }
                }
                transition={{
                  duration: 1.35,
                  delay: 2.65 + index * 0.12,
                  repeat: Infinity,
                  repeatDelay: 2.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>
          <text
            x="464"
            y="272"
            textAnchor="middle"
            className="fill-zinc-400 text-[13px] font-extrabold tracking-widest"
          >
            هم‌راستا
          </text>
          <text
            x="464"
            y="311"
            textAnchor="middle"
            className="fill-white text-[16px] font-black tracking-widest"
          >
            ساخت
          </text>
          <text
            x="464"
            y="347"
            textAnchor="middle"
            className="fill-zinc-400 text-[13px] font-extrabold tracking-widest"
          >
            اعتبارسنجی
          </text>
        </motion.g>

        <path
          d="M542 306 H745"
          stroke="url(#output-line-gradient)"
          className="fill-none [stroke-linecap:round] stroke-4"
        />
        {[0, 1, 2].map((index) => (
          <motion.rect
            key={index}
            y={304 - index * 0.12}
            width="20"
            height="4"
            rx="2"
            fill="url(#output-capsule-gradient)"
            className="drop-shadow-[0_0_2px_rgba(39,240,142,0.35)]"
            initial={
              reduceMotion ? { x: 670, opacity: 0.8 } : { x: 542, opacity: 0 }
            }
            animate={
              reduceMotion
                ? undefined
                : { x: [542, 550, 709, 723], opacity: [0, 1, 1, 0] }
            }
            transition={{
              duration: 1.1,
              delay: 3.15 + index * 0.15,
              repeat: Infinity,
              repeatDelay: 2.3,
              times: [0, 0.12, 0.82, 1],
              ease: [0.35, 0, 0.2, 1],
            }}
          />
        ))}
        <motion.path
          d="M727 290 L745 306 L727 322"
          className="fill-none stroke-[#16c76a] [stroke-linecap:round] [stroke-linejoin:round] stroke-4"
          animate={reduceMotion ? undefined : { x: [0, 0, 7, 0] }}
          transition={{
            duration: 3.4,
            delay: 0.7,
            times: [0, 0.91, 0.97, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <text
          x="618"
          y="268"
          textAnchor="middle"
          className="fill-zinc-900 text-lg font-black tracking-wide"
        >
          نرم‌افزار کاربردی
        </text>
        <text x="618" y="350" textAnchor="middle" className="fill-zinc-500 text-[12px] font-medium">
          یک مسیر پاسخ‌گو
        </text>

        <line x1="0" y1="530" x2="730" y2="530" stroke="#d4d4d4" />
        <text
          x="110"
          y="550"
          textAnchor="middle"
          className="fill-zinc-500 text-xs font-bold"
        >
          ورودی‌های پراکنده
        </text>
        <text
          x="650"
          y="550"
          textAnchor="middle"
          className="fill-zinc-500 text-xs font-bold"
        >
          سیستم روشن و قابل استفاده
        </text>
      </svg>
    </div>
  );
}
