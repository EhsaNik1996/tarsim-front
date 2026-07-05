"use client";
import Image from "next/image";
import cloud from "@/public/cloud.png";
import system from "@/public/system.png";
import { motion } from "framer-motion";

const projects = [
    { title: "داشبورد هوشمند فین‌تک", tag: "FINTECH / UI-UX", img: cloud },
    { title: "زیرساخت ابری هوشمند", tag: "INFRASTRUCTURE / CLOUD", img: system }
];

export default function Portfolio() {
    return (
        <section className="px-6 md:px-16 py-8 md:py-32 bg-white mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                <div className="text-right">
                    <div className="text-electric-blue mb-4 font-mono text-sm tracking-widest">SELECTED WORK</div>
                    <h2 className="text-4xl font-bold text-on-surface">پروژه‌های اخیر ما</h2>
                </div>
                <button className="bg-on-surface text-white px-6 py-3 rounded-lg font-bold hover:bg-electric-blue transition-colors duration-300">
                    مشاهده همه پروژه‌ها
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                        className="group cursor-pointer"
                    >
                        <div className="relative overflow-hidden bg-surface-container aspect-video border border-stroke-gray mb-6 rounded-2xl">
                            <Image
                                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                src={proj.img}
                                alt={proj.title}
                                width={640}
                                height={360}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <span className="text-white font-bold text-lg flex items-center gap-2">
                                    مشاهده جزئیات پروژه <span className="material-symbols-outlined">arrow_back</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h4 className="text-xl font-bold text-on-surface">{proj.title}</h4>
                            <span className="font-mono text-on-surface-variant text-xs tracking-wider">{proj.tag}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}