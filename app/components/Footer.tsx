import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-stroke-gray relative w-full z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-16 py-7 md:py-16">
        <div className="md:max-w-[25%] space-y-2">
          <Logo />
          <p className="text-on-surface-variant text-center place-items-center text-sm leading-relaxed">
            شرکت ترسیم، پیشرو در ارائه راهکارهای جامع فناوری اطلاعات و امنیت
            دیجیتال از سال ۱۳۸۲.
          </p>
        </div>
        <div className="flex flex-row justify-between w-full md:justify-end md:gap-x-5 mt-8 md:mt-0">
          <div className="flex flex-col md:flex-row gap-y-0.5 md:gap-x-5">
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300"
              href="#"
            >
              تماس با ما
            </Link>
            <Link
              className="text-on-surface-variant text-nowrap hover:text-electric-blue transition-colors duration-300"
              href="#"
            >
              سوالات متداول
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-y-0.5 md:gap-x-5">
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300"
              href="#"
            >
              قوانین و مقررات
            </Link>
            <Link
              className="text-on-surface-variant hover:text-electric-blue transition-colors duration-300"
              href="#"
            >
              حریم خصوصی
            </Link>
          </div>
        </div>
      </div>
      <p className="text-on-surface-variant text-sm text-center pb-3.5 font-mono">
        © ۲۰۲۶ ترسیم. تمامی حقوق محفوظ است.
      </p>
    </footer>
  );
}
