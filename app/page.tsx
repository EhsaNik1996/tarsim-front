import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Timeline from "./components/Timeline";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Metrics from "@/app/components/Metrics";
import Partners from "@/app/components/Partners";
import Approach from "@/app/components/Approach";
import Services from "@/app/components/Services";
import Capabilities from "./components/Capabilities";
import TrackRecord from "@/app/components/TrackRecord";
import InfiniteMarquee from "./components/InfiniteMarquee";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import ProjectsSlider from "./components/ProjectsSlider";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-electric-blue selection:text-white">
      <Header />

      <Hero />
      <Partners />
      <Metrics />
      <About />
      <Capabilities />
      <InfiniteMarquee /> 
      <ProjectsSlider/>
      <Approach />
      <Services />
      <Timeline />
      <FeaturedProjects />
      <TrackRecord />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
