"use client";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
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
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
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
      <svg viewBox="0 0 24 24" className="size-4">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="700"
          fill="white"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z"
          stroke="#3C873A"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16M9 10.5L15 13.5M15 10.5L9 13.5"
          stroke="#3C873A"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M12 3c-3.5 0-3.3 1.5-3.3 1.5v2h3.4v.6H6.9S4 6.7 4 10.2s2.5 3.4 2.5 3.4h1.6v-2.1s-.1-2.5 2.4-2.5h3.3s2.3.03 2.3-2.2V5.3S16.4 3 12 3z"
          fill="#3776AB"
        />
        <path
          d="M12 21c3.5 0 3.3-1.5 3.3-1.5v-2H11.9v-.6h5.2S20 17.3 20 13.8s-2.5-3.4-2.5-3.4h-1.6v2.1s.1 2.5-2.4 2.5H10.2s-2.3-.03-2.3 2.2v3.5S7.6 21 12 21z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <ellipse
          cx="12"
          cy="6"
          rx="7"
          ry="2.5"
          stroke="#336791"
          strokeWidth="1.3"
        />
        <path
          d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
          stroke="#336791"
          strokeWidth="1.3"
        />
        <path
          d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"
          stroke="#336791"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M4 15c4 2.5 12 2.5 16 0"
          stroke="#FF9900"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M17 13.5l2 1-1 2.2"
          stroke="#FF9900"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="12"
          y="10"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="#111"
        >
          aws
        </text>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <rect x="3" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="7" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="11" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="7" y="6.5" width="3" height="3" fill="#2496ED" />
        <rect x="11" y="6.5" width="3" height="3" fill="#2496ED" />
        <path
          d="M2.5 13.2c0 3.6 2.8 5.3 6.5 5.3 5.8 0 9.3-3.2 10.6-7.3 1.9.15 3.3-.9 3.3-.9s-.9-1.6-2.9-1.3c-.5-.9-1.4-1.4-1.4-1.4l-.7 1c-.5-.15-1-.2-1-.2s-1.9 3.6-6.4 4.6c-2 .4-6.2.2-6.2.2H2.5z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
];

const badges = ["پیاده‌سازی سریع", "تحویل تمیز و مستندشده", "میزبانی پایدار"];

export default function TechStackSection() {
  return (
    <div
      className="mt-20 place-self-center border border-zinc-100 bg-linear-to-br from-[#fdfeff] via-white to-[#f4f8ff] p-8 md:p-10 w-[84%] rounded-4xl"
      dir="rtl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.6fr] gap-8 items-center">
        <div className="text-right space-y-3 pr-1">
          <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest block uppercase">
            تکنولوژی
          </span>
          <h3 className="text-[26px] md:text-[30px] font-black text-zinc-900 tracking-tight leading-[1.15]">
            ابزارهای شناخته‌شده.
            <br />
            انتخاب‌های عملی.
          </h3>
          <p className="text-[13px] text-zinc-500 leading-relaxed font-medium max-w-xs">
            اغلب کارفرماها نیازی به دانستن جزئیات فنی ندارند. ما از ابزارهای
            اثبات‌شده استفاده می‌کنیم، بخش‌های مهم را مستند می‌کنیم و نگهداری
            محصول را بعد از راه‌اندازی ساده نگه می‌داریم.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border border-zinc-100 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm">
          {techStack.map((tech, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            return (
              <div
                key={tech.name}
                className={`flex flex-col items-start gap-2.5 p-5 text-left ${
                  col !== 0 ? "border-r border-zinc-100" : ""
                } ${row !== 0 ? "border-t border-zinc-100" : ""}`}
                dir="ltr"
              >
                <div className="flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[12.5px] font-bold text-zinc-800">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
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
