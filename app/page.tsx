export const dynamic = "force-dynamic";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import PipelineStepper from "@/components/PipelineStepper";
import FrameworksGrid from "@/components/FrameworksGrid";
import LiveTerminal from "@/components/LiveTerminal";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <NavBar />
      <HeroSection />
      <MetricsBar />
      <PipelineStepper />
      <FrameworksGrid />
      <LiveTerminal />
      <CaseStudies />
      <ContactSection />
      <Footer />
    </main>
  );
}
