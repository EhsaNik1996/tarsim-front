"use client";

import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AtSign, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";

const navItems = [
  { label: "خدمات", id: "services" },
  { label: "نمونه کارها", id: "projects" },
  { label: "درباره ما", id: "about" },
  { label: "سوالات متداول", id: "faq" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const probeLine = Math.min(180, window.innerHeight * 0.3);
      const active = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probeLine && rect.bottom > probeLine;
      });

      setActiveSection(active?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 glass-nav bg-white/80 backdrop-blur-md border-b border-stroke-gray"
      dir="rtl"
    >
      <div className="flex flex-row justify-between items-center w-full px-6 xl:px-16 py-3 mx-auto">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`border-b-2 pb-1 text-sm transition-colors duration-300 ${
                  isActive
                    ? "border-electric-blue font-bold text-electric-blue"
                    : "border-transparent text-on-surface-variant hover:text-electric-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* بخش چپ: دکمه مشاوره (دسکتاپ) و منوی همبرگری موبایل */}
        <div className="flex items-center gap-4">
          <div
            className="hidden items-center gap-2 md:flex"
            aria-label="شبکه‌های اجتماعی"
          >
            <button
              type="button"
              aria-label="اینستاگرام ترسیم"
              data-cursor="link"
              className="grid size-9 place-items-center border border-black/10 bg-white text-black/45 hover:text-black transition-all duration-300 hover:border-black/80 rounded-full"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="تردز ترسیم"
              data-cursor="link"
              className="grid size-9 place-items-center border border-black/10 bg-white text-black/45 hover:text-black transition-all duration-300 hover:border-black/80 rounded-full"
            >
              <AtSign className="size-4" strokeWidth={1.8} />
            </button>
          </div>
          {/* دکمه دسکتاپ */}
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="hidden md:block bg-electric-blue text-white text-sm font-bold hover:bg-opacity-90 transition-all px-6 py-2.5 rounded-full"
          >
            درخواست مشاوره
          </motion.a>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-on-surface hover:bg-slate-100 rounded-xl transition-colors">
                  <Menu className="size-6 text-on-surface" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-75 px-5 bg-white/80 sm:w-100"
                dir="rtl"
              >
                <SheetHeader className="text-right pb-6 border-b border-stroke-gray">
                  <SheetTitle className="text-right">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 mt-8 text-right">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <SheetClose asChild key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          onClick={() => setActiveSection(item.id)}
                          aria-current={isActive ? "location" : undefined}
                          className={`rounded-l-lg border-r-4 py-2 pr-3 text-base transition-all ${
                            isActive
                              ? "border-electric-blue bg-electric-blue/5 font-bold text-electric-blue"
                              : "border-transparent text-on-surface-variant hover:text-electric-blue"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}

                  <div className="mt-8 pt-6 border-t border-stroke-gray">
                    <SheetClose asChild>
                      <Link
                        href="#contact"
                        className="block w-full bg-electric-blue text-center text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-electric-blue/10"
                      >
                        درخواست مشاوره
                      </Link>
                    </SheetClose>
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
