"use client";

import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AtSign, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";

const navItems = [
  { label: "خدمات", id: "services", href: "/services", route: true },
  { label: "نمونه کارها", id: "projects", href: "/#projects" },
  { label: "درباره ما", id: "about", href: "/about", route: true },
  { label: "سوالات متداول", id: "faq", href: "/#faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.route)
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const updateHeader = () => {
      /* Active section */
      const probeLine = Math.min(180, window.innerHeight * 0.3);

      const active = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= probeLine && rect.bottom > probeLine;
      });

      setActiveSection(active?.id ?? "");
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });

    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [pathname]);

  return (
    <motion.nav
      dir="rtl"
      className="glass-nav fixed top-0 z-50 w-full border-b border-stroke-gray bg-white/95 backdrop-blur-md"
    >
      <div className="relative mx-auto flex h-17 w-full items-center justify-between px-4 md:h-auto md:px-16">
        <Logo />

        {/* Navigation */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = item.route
              ? pathname === item.href || pathname.startsWith(`${item.href}/`)
              : pathname === "/" && activeSection === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => !item.route && setActiveSection(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`block border-b-2 pb-1 text-sm transition-colors duration-300 ${
                    isActive
                      ? "border-electric-blue font-bold text-electric-blue"
                      : "border-transparent text-on-surface-variant hover:text-electric-blue"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Socials */}
          <div
            className="hidden items-center gap-2 md:flex"
            aria-label="شبکه‌های اجتماعی"
          >
            <button
              type="button"
              aria-label="اینستاگرام ترسیم"
              data-cursor="link"
              className="grid size-9 place-items-center rounded-full border border-black/10 bg-white text-black/45 transition-all duration-300 hover:border-black/80 hover:text-black"
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
              className="grid size-9 place-items-center rounded-full border border-black/10 bg-white text-black/45 transition-all duration-300 hover:border-black/80 hover:text-black"
            >
              <AtSign className="size-4" strokeWidth={1.8} />
            </button>
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="hidden rounded-full bg-electric-blue px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-opacity-90 md:block"
          >
            درخواست مشاوره
          </motion.a>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="باز کردن منو"
                  className="grid size-11 place-items-center rounded-full border border-black/10 bg-white text-on-surface shadow-sm transition-colors hover:bg-slate-50"
                >
                  <Menu className="size-6 text-on-surface" strokeWidth={2} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-75 bg-white/80 px-5 sm:w-100"
                dir="rtl"
              >
                <SheetHeader className="border-b border-stroke-gray pb-6 text-right">
                  <SheetTitle className="text-right">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-5 text-right">
                  {navItems.map((item) => {
                    const isActive = item.route
                      ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                      : pathname === "/" && activeSection === item.id;

                    return (
                      <SheetClose asChild key={item.id}>
                        <Link
                          href={item.href}
                          onClick={() => !item.route && setActiveSection(item.id)}
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

                  <div className="mt-8 border-t border-stroke-gray pt-6">
                    <SheetClose asChild>
                      <Link
                        href="#contact"
                        className="block w-full rounded-xl bg-electric-blue py-3 text-center text-sm font-bold text-white shadow-md shadow-electric-blue/10"
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
    </motion.nav>
  );
}
