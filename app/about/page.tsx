import AboutCTA from "./components/AboutCTA";
import AboutHero from "./components/AboutHero";
import AboutChecks from "./components/AboutChecks"
import AboutMarquee from "./components/AboutMarquee";
import LeadsSection from "./components/LeadsSection";
import DeliveryModel from "./components/DeliveryModel";
import AboutStatement from "./components/AboutStatement";
import CheckpointsCard from "./components/CheckpointsCard";

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white/90 text-black/95"
    >
      <AboutHero />

      <AboutMarquee />

      <DeliveryModel />

      <AboutChecks />

      <CheckpointsCard />

      <LeadsSection />

      <AboutStatement />

      <AboutCTA />

    </main>
  );
}
