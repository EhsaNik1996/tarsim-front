import Link from "next/link";
import Image from "next/image";
import LogoNoneBg from "@/public/Logo-noneBg.png";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-col items-center gap-1 pb-2">
            <div className="relative size-16 overflow-hidden md:size-20">
                <Image
                    alt="لوگوی ترسیم"
                    className="object-cover"
                    src={LogoNoneBg}
                    fill
                />
            </div>
            <h2 className="z-10 -mt-6 text-[8px] font-bold tracking-widest text-on-surface uppercase md:-mt-7 md:text-[10px]">
                Tarsim
            </h2>
        </Link>
    );
}
