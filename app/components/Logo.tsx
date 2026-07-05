import Image from "next/image";
import LogoNoneBg from "@/public/Logo-noneBg.png";

export default function Logo() {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="size-20 overflow-hidden relative">
                <Image
                    alt="لوگوی ترسیم"
                    className="object-cover"
                    src={LogoNoneBg}
                    fill
                />
            </div>
            <h2 className="text-[10px] tracking-widest text-on-surface uppercase font-bold -mt-7 z-10">
                Tarsim
            </h2>
        </div>
    );
}
