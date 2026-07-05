"use client";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Monitor, Cpu, Network } from "lucide-react";

const timelineData = [
    {
        year: "1382",
        title: "تاسیس ترسیم",
        desc: "آغاز فعالیت رسمی با تمرکز بر خدمات سخت‌افزاری و شبکه‌های محلی در تهران.",
        icon: Monitor
    },
    {
        year: "1385",
        title: "ورود به حوزه نرم‌افزار",
        desc: "گسترش دپارتمان نرم‌افزار و طراحی اولین سیستم‌های اتوماسیون اداری سفارشی.",
        icon: Cpu
    },
    {
        year: "1389",
        title: "توسعه زیرساخت‌های کشوری",
        desc: "اجرای پروژه‌های بزرگ امنیت شبکه و دیتاسنتر برای نهادهای دولتی و خصوصی.",
        icon: Network
    }
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 25,
        restDelta: 0.001
    });

    const strokeDashoffset = useTransform(smoothProgress, [0, 1], [1000, 0]);

    return (
        <section ref={containerRef} className="px-6 md:px-16 py-20 md:py-32 mx-auto border-t border-stroke-gray relative overflow-hidden" dir="rtl">
            <div className="mb-16 md:mb-20 text-right">
                <div className="text-electric-blue mb-3 font-mono text-xs md:text-sm tracking-widest">OUR EVOLUTION</div>
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface">سیر تحول ترسیم</h2>
            </div>

            <div className="relative min-h-[600px]">
                <div className="absolute right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] md:w-[120px] h-full pointer-events-none z-0">
                    <svg className="w-full h-full hidden md:block" viewBox="0 0 120 950" preserveAspectRatio="none" fill="none">
                        <path
                            d="M 60,0 C 130,150 -10,300 60,450 C 130,600 -10,750 60,950"
                            stroke="#E5E5E5"
                            strokeWidth="3"
                            strokeDasharray="8 6"
                            strokeLinecap="round"
                        />
                        <motion.path
                            d="M 60,0 C 130,150 -10,300 60,450 C 130,600 -10,750 60,950"
                            stroke="#4F52FF"
                            strokeWidth="4"
                            strokeDasharray="8 6"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: "1000",
                                strokeDashoffset: strokeDashoffset,
                            }}
                        />
                    </svg>

                    <svg className="w-full h-full md:hidden" viewBox="0 0 4 1000" preserveAspectRatio="none" fill="none">
                        <line x1="2" y1="0" x2="2" y2="1000" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="6 4" />
                        <motion.line
                            x1="2" y1="0" x2="2" y2="1000"
                            stroke="#4F52FF"
                            strokeWidth="3"
                            style={{
                                strokeDasharray: "1000",
                                strokeDashoffset: strokeDashoffset,
                            }}
                        />
                    </svg>
                </div>
                <div className="space-y-16 md:space-y-40 relative z-10">
                    {timelineData.map((item, idx) => (
                        <TimelineItem key={idx} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, idx }: { item: typeof timelineData[0]; idx: number }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    const IconComponent = item.icon;

    return (
        <div
            ref={ref}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between pr-10 md:pr-0 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
        >
            <motion.div
                animate={{
                    opacity: inView ? 1 : 0.6,
                    y: inView ? 0 : 20,
                    scale: inView ? 1 : 0.98,
                    borderColor: inView ? "#4F52FF" : "#E5E5E5",
                    boxShadow: inView ? "0 20px 40px rgba(79, 82, 255, 0.06)" : "0 2px 4px rgba(0,0,0,0.01)"
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[42%] text-right bg-white border p-6 md:p-8 rounded-2xl transition-colors duration-300 z-10"
            >
                <div className="relative">
                    <motion.div
                        animate={{ color: inView ? "#4F52FF" : "#888888" }}
                        className="font-bold text-2xl md:text-3xl mb-3 font-mono transition-colors"
                    >
                        {item.year}
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${inView ? "text-on-surface" : "text-on-surface-variant"}`}>
                        {item.title}
                    </h4>
                    <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed text-justify md:text-right">{item.desc}</p>
                </div>
            </motion.div>

            <div
                className={`absolute right-[10px] md:right-auto md:left-1/2 top-6 md:top-auto size-4 md:size-8 flex items-center justify-center z-20 transition-transform duration-300 ${idx === 0 ? "md:translate-x-[4px]" :
                    idx === 1 ? "md:translate-x-[-7px]" :
                        "md:translate-x-[-35px]"
                    }`}
            >
                {inView && (
                    <motion.span
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-electric-blue/15 animate-ping rounded-full hidden md:block"
                    />
                )}
                <motion.div
                    animate={{
                        backgroundColor: inView ? "#4F52FF" : "#FFFFFF",
                        borderColor: inView ? "#4F52FF" : "#E5E5E5",
                        scale: inView ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full border-2 flex items-center justify-center shadow-sm bg-white rounded-full"
                >
                    <IconComponent
                        className={`size-2 md:size-4 transition-colors duration-400 ${inView ? "text-white" : "text-slate-400"
                            }`}
                    />
                </motion.div>
            </div>

            <div className="hidden md:block w-full md:w-[42%]" />
        </div>
    );
}