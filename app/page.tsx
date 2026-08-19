import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Hero from "@/app/components/Hero";
import Timeline from "./components/Timeline";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Metrics from "@/app/components/Metrics";
import Partners from "@/app/components/Partners";
import Approach from "@/app/components/Approach";
import Expertise from "@/app/components/Expertise";
import Capabilities from "./components/Capabilities";
import TrackRecord from "@/app/components/TrackRecord";
import ProjectsSlider from "./components/ProjectsSlider";
import InfiniteMarquee from "./components/InfiniteMarquee";
import TechStackSection from "./components/Techstacksection ";
import FeaturedProjects from "@/app/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-electric-blue selection:text-white">
      <Header />
      <Hero />
      <Partners />
      <Metrics />
      <Capabilities />
      <InfiniteMarquee /> 
      <ProjectsSlider/>
      <TechStackSection/>
      <TrackRecord />
      <Expertise />
      <Timeline />
      <Approach />
      <FeaturedProjects />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
