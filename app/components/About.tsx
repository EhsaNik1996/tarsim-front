"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import office from "@/public/office.png"
import server from "@/public/server.png"

export default function About() {
    return (
        <section className="py-32 px-6 md:px-16 mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                    className="lg:col-span-5 text-right order-2 lg:order-1"
                >
                    <div className="font-mono text-electric-blue mb-4 text-sm tracking-widest">HERITAGE & TRUST</div>
                    <h2 className="text-4xl font-bold text-on-surface mb-8">تخصص و اعتماد؛ میراث دو دهه فعالیت</h2>
                    <p className="text-on-surface-variant leading-loose mb-8 text-lg">
                        ترسیم از سال ۱۳۸۲ با هدف ارتقای زیرساخت‌های فناوری اطلاعات در ایران شکل گرفت. ما در طول این سال‌ها شاهد تحولات عظیم دیجیتال بوده‌ایم و همواره تلاش کرده‌ایم با تکیه بر دانش فنی روز، پیشرو در ارائه خدمات نوین باشیم. تعهد ما به کیفیت، ریشه در سال‌ها اعتماد مشتریان ما دارد.
                    </p>
                    <a className="inline-flex items-center gap-2 text-electric-blue font-bold border-b border-electric-blue pb-1 hover:gap-4 transition-all" href="#">
                        <span>داستان ما را بخوانید</span>
                        <span className="material-symbols-outlined">arrow_back</span>
                    </a>
                </motion.div>

                <div className="lg:col-span-7 order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="h-80 bg-surface-container rounded-2xl overflow-hidden mt-12 relative border border-stroke-gray"
                        >
                            <Image
                                fill
                                className="object-cover"
                                src={office}
                                alt="دفتر مرکزی ترسیم"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-80 bg-surface-container overflow-hidden relative border border-stroke-gray rounded-2xl"
                        >
                            <Image
                                fill
                                className="object-cover"
                                src={server}
                                alt="اتاق سرور"
                            />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}