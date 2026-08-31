"use client";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="1.3" />
        <path
          d="M9 8v8M9 8l6.5 8M15.5 8v5.5"
          stroke="#111"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#3178c6]">
        <rect
          x="8"
          y="8"
          width="240"
          height="240"
          rx="24"
          fill="currentColor"
          opacity="0.12"
        />
        <rect
          x="8"
          y="8"
          width="240"
          height="240"
          rx="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <text
          x="128"
          y="170"
          textAnchor="middle"
          fill="currentColor"
          fontSize="120"
          fontFamily="Space Grotesk"
          fontWeight="800"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 256 292" className="size-7 md:size-8 text-[#339933]">
        <path
          d="M128 0L256 73.9v146.2L128 292 0 220.1V73.9z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M128 32l96 55.4v110.8L128 253.6 32 198.2V87.4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <text
          x="128"
          y="160"
          textAnchor="middle"
          fill="currentColor"
          fontSize="80"
          fontFamily="Space Grotesk"
          fontWeight="700"
        >
          N
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#3776ab]">
        <path
          d="M126 8C80 8 56 30 56 60v28h72v8H44c-24 0-44 20-44 56s16 56 40 56h24v-32c0-24 16-44 40-44h72c20 0 36-16 36-36V60c0-28-26-52-86-52zm-40 28a12 12 0 110 24 12 12 0 010-24z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M130 248c46 0 70-22 70-52v-28h-72v-8h84c24 0 44-20 44-56s-16-56-40-56h-24v32c0 24-16 44-40 44H80c-20 0-36 16-36 36v36c0 28 26 52 86 52zm40-28a12 12 0 110-24 12 12 0 010 24z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#336791]">
        <ellipse
          cx="128"
          cy="80"
          rx="72"
          ry="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        />
        <path
          d="M56 80v96c0 22 32 40 72 40s72-18 72-40V80"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        />
        <path
          d="M56 128c0 22 32 40 72 40s72-18 72-40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#ff9900]">
        <path
          d="M44 160c28 28 72 40 112 28"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M180 100c-8-36-44-60-80-52s-56 44-48 80"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M160 188l32-12-12-32"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#2496ed]">
        <rect
          x="48"
          y="100"
          width="160"
          height="96"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        ></rect>
        <rect
          x="56"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="86"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="116"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="146"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="176"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="86"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="116"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="146"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <path
          d="M28 148c-8-4-12-12-8-20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        ></path>
      </svg>
    ),
  },
];

const badges = ["پیاده‌سازی سریع", "تحویل تمیز و مستندشده", "میزبانی پایدار"];

export default function TechStackSection() {
  return (
    <div
      className="place-self-center border border-zinc-200 bg-linear-to-br from-[#fdfeff] via-white to-[#f4f8ff] p-8 md:p-10 mx-4 md:mx-0 md:w-[84%] rounded-4xl"
      dir="rtl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.6fr] items-center">
        <div className="text-right space-y-3 pr-1">
          <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest block uppercase">
            تکنولوژی
          </span>
          <h3 className="text-[26px] md:text-4xl font-black text-zinc-900 tracking-tight leading-[1.15]">
            ابزارهای شناخته‌شده.
            <br />
            انتخاب‌های عملی.
          </h3>
          <p className="text-base text-zinc-500 leading-6 font-light max-w-xs">
            اغلب کارفرماها نیازی به دانستن جزئیات فنی ندارند. ما از ابزارهای
            اثبات‌شده استفاده می‌کنیم، بخش‌های مهم را مستند می‌کنیم و نگهداری
            محصول را بعد از راه‌اندازی ساده نگه می‌داریم.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border border-zinc-200 mt-10 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm">
          {techStack.map((tech, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            return (
              <div
                key={tech.name}
                className={`flex flex-col items-start gap-2.5 p-5 text-left ${
                  col !== 0 ? "border-r border-zinc-200" : ""
                } ${row !== 0 ? "border-t border-zinc-200" : ""}`}
                dir="ltr"
              >
                <div className="flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-base font-bold text-zinc-800">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:flex-wrap justify-center gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="text-[11.5px] font-bold text-zinc-600 bg-white border border-zinc-200/70 px-5 py-2 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
