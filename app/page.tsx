import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Hero from "@/app/components/Hero";
import WorkProcess from "./components/WorkProcess";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Metrics from "@/app/components/Metrics";
import Approach from "@/app/components/Approach";
import Capabilities from "./components/Capabilities";
import TrackRecord from "@/app/components/TrackRecord";
import ProjectsSlider from "./components/ProjectsSlider";
import InfiniteMarquee from "./components/InfiniteMarquee";
import TechStackSection from "./components/Techstacksection ";
import DigitalEngineering from "./components/DigitalEngineering";

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-full overflow-x-clip bg-white selection:bg-electric-blue selection:text-white">
      <Header />
      <Hero />
      <Metrics />
      <DigitalEngineering />
      <InfiniteMarquee /> 
      <ProjectsSlider/>
      <TechStackSection/>
      <TrackRecord />
      <Capabilities />
      <WorkProcess />
      <Approach />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
