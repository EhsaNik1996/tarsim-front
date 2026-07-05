"use client";
import Image from "next/image";
import Logo from "@/public/Logo.png"
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center py-20 mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full relative z-10 px-6 md:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                    className="space-y-8 text-center md:text-right mt-6"
                >
                    <div className="inline-flex items-center gap-3 bg-surface-container px-4 py-2 rounded-full">
                        <span className="flex h-2 w-2 rounded-full bg-electric-blue animate-pulse"></span>
                        <span className="text-on-surface-variant uppercase tracking-widest text-[9px] md:text-xs font-mono">Pioneering Digital Architecture Since 2003</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl leading-tight text-on-surface font-extrabold">
                        <span className="text-electric-blue">ترسیم</span>؛ معماری نوآوری و تکنولوژی
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                        ما با بیش از دو دهه تجربه، راهکارهای دیجیتالی هوشمندی را خلق می‌کنیم که کسب‌وکار شما را برای آینده‌ای مبتنی بر تکنولوژی آماده می‌سازد. از طراحی وب‌سایت تا زیرساخت‌های ابری.
                    </p>
                    <div className="flex flex-col w-[50%] xl:w-full place-self-center xl:flex-row gap-4">
                        <button className="bg-on-surface text-white px-8 py-4 rounded-lg font-bold text-sm xl:text-lg hover:bg-electric-blue transition-all duration-500">
                            شروع پروژه
                        </button>
                        <button className="border border-stroke-gray text-on-surface py-4 md:px-8 rounded-lg font-bold text-sm xl:text-lg hover:border-electric-blue transition-all duration-500 group flex items-center justify-center gap-2">
                            <span>مشاهده پروژه‌ها</span>
                            <ArrowLeft className="w-4 md:w-6" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.2, 0, 0, 1], delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-10 bg-electric-blue/5 blur-3xl rounded-full"></div>
                    <div className="relative overflow-hidden border border-stroke-gray aspect-4/3 shadow-2xl rounded-2xl">
                        <Image
                            alt="Architectural Tech"
                            className="w-full h-full object-cover"
                            src={Logo}
                            fill
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl border border-stroke-gray shadow-xl hidden md:block">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-electric-blue font-mono">20Y</div>
                            <div className="h-10 w-px bg-stroke-gray"></div>
                            <div className="text-on-surface-variant text-sm leading-tight">سابقه درخشان در<br />صنعت فناوری</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}