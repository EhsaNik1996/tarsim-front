"use client";
import React from "react";
import { motion } from "framer-motion";

const servicesData = [
    { id: "01", icon: "web_asset", title: "طراحی وب‌سایت مدرن", desc: "خلق تجربه‌های دیجیتال منحصر‌به‌فرد با تمرکز بر رابط کاربری (UI) و تجربه کاربری (UX) در سطح استانداردهای جهانی." },
    { id: "02", icon: "terminal", title: "برنامه‌نویسی و توسعه", desc: "توسعه اپلیکیشن‌های سفارشی و سیستم‌های پیچیده نرم‌افزاری با استفاده از تکنولوژی‌های روز دنیا." },
    { id: "03", icon: "shield_lock", title: "شبکه و امنیت اطلاعات", desc: "راه‌اندازی و نگهداری زیرساخت‌های حساس شبکه و تامین امنیت لایه‌های مختلف داده در سازمان‌های بزرگ." },
    { id: "04", icon: "video_settings", title: "مالتی‌مدیا و گرافیک", desc: "تولید محتوای ویدئویی، انیمیشن و هویت بصری متناسب با استراتژی‌های برندینگ و تبلیغات مدرن." }
];

export default function Services() {
    return (
        <section className="px-6 md:px-16 py-32 bg-background-deep relative">
            <div className=" mx-auto">
                <div className="mb-20 text-center">
                    <div className="font-mono text-electric-blue mb-4 text-sm tracking-widest">OUR CAPABILITIES</div>
                    <h2 className="text-4xl font-bold text-on-surface">خدمات تخصصی ترسیم</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="bg-white border border-stroke-gray p-10 hover:border-electric-blue transition-colors duration-500 group rounded-2xl shadow-xs"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="bg-surface-container p-4 rounded-xl group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
                                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                                </div>
                                <span className="font-mono text-stroke-gray text-4xl opacity-30 group-hover:opacity-100 group-hover:text-electric-blue transition-all duration-300">
                                    {service.id}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4 transition-colors group-hover:text-electric-blue">
                                {service.title}
                            </h3>
                            <p className="text-on-surface-variant text-base leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}