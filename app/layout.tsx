import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "./components/CustomCursor";
import { Vazirmatn, Manrope } from "next/font/google";


const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap"
});


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ترسیم | معماری نوآوری و تکنولوژی",
  description: "راهکارهای دیجیتال هوشمند و مدرن",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="selection:bg-electric-blue selection:text-white">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="grid-line-v right-16"></div>
          <div className="grid-line-v left-16"></div>
          <div className="grid-line-v left-1/2"></div>
        </div>
        <div className="relative z-10">{children}</div>
        <CustomCursor />
      </body>
    </html>
  );
}