import Footer from "../components/Footer";
import AboutHero from "./components/AboutHero";
import AboutChecks from "./components/AboutChecks";
import LeadsSection from "./components/LeadsSection";
import DeliveryModel from "./components/DeliveryModel";
import AboutStatement from "./components/AboutStatement";
import CheckpointsCard from "./components/CheckpointsCard";
import SpecialistBoundary from "./components/SpecialistBoundary";

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white/90 text-black/95"
    >
      <AboutHero />

      <DeliveryModel />

      <AboutChecks />

      <CheckpointsCard />

      <LeadsSection />

      <SpecialistBoundary />

      <AboutStatement />

      <Footer />
    </main>
  );
}
