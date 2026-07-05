"use client";
import CTA from "@/app/components/CTA";
import Hero from "@/app/components/Hero";
import { useEffect, useRef } from "react";
import About from "@/app/components/About";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Services from "@/app/components/Services";
import Timeline from "@/app/components/Timeline";
import Portfolio from "@/app/components/Portfolio";
import { useInView } from "react-intersection-observer";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <section className="border-y border-stroke-gray bg-surface-container-low py-16 relative z-10" dir="rtl">
        <div className="max-w-360 mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div className="space-y-2">
              <div className="text-electric-blue text-5xl font-extrabold font-mono flex items-center justify-center gap-1">
                <Counter from={0} to={20} />
                <span>+</span>
              </div>
              <div className="text-lg text-on-surface font-medium">سال تجربه مستمر</div>
            </div>

            <div className="space-y-2">
              <div className="text-electric-blue text-5xl font-extrabold font-mono flex items-center justify-center gap-1">
                <Counter from={0} to={500} />
                <span>+</span>
              </div>
              <div className="text-lg text-on-surface font-medium">پروژه موفق کشوری</div>
            </div>

            <div className="space-y-2">
              <div className="text-electric-blue text-5xl font-extrabold font-mono flex items-center justify-center gap-1">
                <Counter from={0} to={45} />
                <span>+</span>
              </div>
              <div className="text-lg text-on-surface font-medium">متخصص خبره</div>
            </div>

          </div>
        </div>
      </section>

      <About />
      <Services />
      <Timeline />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const count = useMotionValue(from);
  const roundedSpring = useSpring(count, {
    stiffness: 40,
    damping: 18,
  });
  const displayValue = useTransform(roundedSpring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      count.set(to);
    }
  }, [inView, count, to]);
  useEffect(() => {
    return displayValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString();
      }
    });
  }, [displayValue]);

  return <span ref={ref}><span ref={nodeRef}>{from}</span></span>;
}