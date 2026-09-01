import Footer from "../components/Footer";
import ServiceTracks from "./components/ServiceTracks";
import ServicesClosing from "./components/ServicesClosing";
import ServicesHero from "./components/ServicesHero";

export default function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-x-clip bg-white text-black">
      <ServicesHero />
      <ServiceTracks />
      <ServicesClosing />
      <Footer />
    </main>
  );
}
