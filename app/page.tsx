import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Partners from "@/app/components/Partners";
import Metrics from "@/app/components/Metrics"; // نسخه بروزرسانی شده فوت پرینت
import About from "@/app/components/About";
import Approach from "@/app/components/Approach";
import Services from "@/app/components/Services";
import FeaturedProjects from "@/app/components/FeaturedProjects"; // بخش جدید اسلایدر مارکی دار
import Timeline from "@/app/components/Timeline";
import TrackRecord from "@/app/components/TrackRecord"; // بخش جدید دارک مایلستون
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer"; // نسخه متحرک مارکی دار

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-electric-blue selection:text-white">
      {/* لایه ناوبری هوایی */}
      <Header />
      
      {/* فاز ۱: آغازین */}
      <Hero />
      <Partners />
      
      {/* فاز ۲: هویت و آمار عددی دقیق سوپرنتريکس */}
      <Metrics />
      <About />
      
      {/* فاز ۳: استراتژی، قابلیت‌ها و سرویس‌ها */}
      <Approach />
      <Services />
      
      {/* فاز ۴: مایلستون‌ها و خط زمان متحرک دَش لایو */}
      <Timeline />
      <FeaturedProjects />
      <TrackRecord />
      
      {/* فاز ۵: تعامل و اقدام نهایی */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}