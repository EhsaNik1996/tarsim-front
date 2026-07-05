"use client";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="px-6 md:px-16 md:py-32 mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-electric-blue p-12 md:p-24 text-center relative overflow-hidden shadow-2xl rounded-[32px]"
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                        آماده‌اید تا با هم معماری آینده را ترسیم کنیم؟
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        تیم متخصصان ما آماده است تا ایده‌های شما را به واقعیت‌های دیجیتالی قدرتمند تبدیل کند. همین امروز مشاوره رایگان خود را آغاز کنید.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-electric-blue px-10 py-5 rounded-2xl font-bold text-xl transition-transform"
                        >
                            درخواست جلسه مشاوره
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl transition-all"
                        >
                            تماس با ما
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}