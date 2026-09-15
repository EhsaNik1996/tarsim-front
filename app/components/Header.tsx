"use client";

import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AtSign, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DialogTrigger,
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "./ui/dialog";

const navItems = [
  { label: "خدمات", id: "services", href: "/services", route: true },
  { label: "نمونه کارها", id: "projects", href: "/#projects" },
  { label: "درباره ما", id: "about", href: "/about", route: true },
  { label: "سوالات متداول", id: "faq", href: "/#faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.route)
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const updateHeader = () => {
      setIsScrolled(window.scrollY > 8);

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
      className={
        isScrolled
          ? "fixed top-0 z-50 w-full bg-white/80 border-b border-gray-500/15 backdrop-blur-lg transition-[background-color,backdrop-filter] duration-300"
          : "fixed top-0 z-50 w-full bg-linear-to-b from-white via-white/50 to-transparent transition-[background-color,backdrop-filter] duration-300"
      }
    >
      <div className="relative mx-auto flex h-15 w-full items-center justify-between px-4 md:h-auto md:max-w-[80%]">
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
            <Dialog>
              <DialogTrigger aria-label="باز کردن منو">
                <Menu className="size-6 text-on-surface" strokeWidth={2} />
              </DialogTrigger>

              <DialogContent
                className="mobile-menu-dialog w-[95%] max-w-none gap-0 bg-white p-0 text-on-surface rounded-4xl"
                dir="rtl"
              >
                <DialogHeader className="flex-row items-center justify-between border-b border-stroke-gray px-5 py-3 text-right">
                  <DialogTitle className="text-right">
                    <Logo />
                  </DialogTitle>
                  <DialogClose
                    aria-label="بستن منو"
                    className="grid size-11 place-items-center rounded-full border border-black/15 text-on-surface transition-transform duration-300 hover:rotate-90 hover:border-black/40"
                  >
                    <X className="size-6" strokeWidth={1.5} />
                  </DialogClose>
                </DialogHeader>

                <div className="px-5 pb-5 pt-6 text-right">
                  <div className="flex flex-col">
                    {navItems.map((item) => {
                      const isActive = item.route
                        ? pathname === item.href ||
                          pathname.startsWith(`${item.href}/`)
                        : pathname === "/" && activeSection === item.id;

                      return (
                        <DialogClose
                          key={item.id}
                          className="group border-b border-stroke-gray"
                        >
                          <Link
                            href={item.href}
                            onClick={() =>
                              !item.route && setActiveSection(item.id)
                            }
                            aria-current={isActive ? "location" : undefined}
                            className="flex items-center justify-between py-4 transition-colors duration-300 group-hover:text-electric-blue"
                          >
                            <h2
                              className={`text-3xl font-black transition-colors duration-300 ${
                                isActive
                                  ? "text-electric-blue"
                                  : "text-on-surface group-hover:text-electric-blue"
                              }`}
                            >
                              {item.label}
                            </h2>
                            <span className="font-space-grotesk text-xs font-bold text-gray-400">
                              {String(navItems.indexOf(item) + 1).padStart(
                                2,
                                "0",
                              )}
                            </span>
                          </Link>
                        </DialogClose>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center gap-2 h-12">
                    <button
                      type="button"
                      aria-label="اینستاگرام ترسیم"
                      className="flex items-center justify-center basis-1/2 h-full gap-x-1 border border-black/10 text-on-surface transition-colors hover:border-black/50 rounded-full"
                    >
                      <p>Instagram</p>
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
                      className="flex items-center justify-center basis-1/2 h-full gap-x-1 border border-black/10 text-on-surface transition-colors hover:border-black/50 rounded-full"
                    >
                      <p>Twitter</p>
                      <AtSign className="size-4" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
