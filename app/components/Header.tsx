"use client";
import Logo from "./Logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";

export default function Header() {
  return (
    <nav
      className="fixed top-0 w-full z-50 glass-nav bg-white/80 backdrop-blur-md border-b border-stroke-gray"
      dir="rtl"
    >
      <div className="flex flex-row justify-between items-center w-full px-6 xl:px-16 py-3 mx-auto">
        <div className="flex items-center gap-12">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-electric-blue font-bold text-sm border-b-2 border-electric-blue pb-1"
              href="#"
            >
              خدمات
            </Link>
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300 text-sm"
              href="#"
            >
              نمونه کارها
            </Link>
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300 text-sm"
              href="#"
            >
              درباره ما
            </Link>
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300 text-sm"
              href="#"
            >
              بلاگ
            </Link>
          </div>
        </div>

        {/* بخش چپ: دکمه مشاوره (دسکتاپ) و منوی همبرگری موبایل */}
        <div className="flex items-center gap-4">
          {/* دکمه دسکتاپ */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="hidden md:block bg-electric-blue text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all"
          >
            درخواست مشاوره
          </motion.button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-on-surface hover:bg-slate-100 rounded-xl transition-colors">
                  <Menu className="size-6 text-on-surface" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-75 px-5 bg-white/80 sm:w-100" dir="rtl">
                <SheetHeader className="text-right pb-6 border-b border-stroke-gray">
                  <SheetTitle className="text-right">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 mt-8 text-right">
                  <Link
                    className="text-electric-blue font-bold text-base py-2 border-r-4 border-electric-blue pr-3 bg-electric-blue/5 rounded-l-lg"
                    href="#"
                  >
                    خدمات
                  </Link>
                  <Link
                    className="text-on-surface-variant hover:text-electric-blue pr-3 py-2 text-base transition-all"
                    href="#"
                  >
                    نمونه کارها
                  </Link>
                  <Link
                    className="text-on-surface-variant hover:text-electric-blue pr-3 py-2 text-base transition-all"
                    href="#"
                  >
                    درباره ما
                  </Link>
                  <Link
                    className="text-on-surface-variant hover:text-electric-blue pr-3 py-2 text-base transition-all"
                    href="#"
                  >
                    بلاگ
                  </Link>

                  <div className="mt-8 pt-6 border-t border-stroke-gray">
                    <button className="w-full bg-electric-blue text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-electric-blue/10">
                      درخواست مشاوره
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
