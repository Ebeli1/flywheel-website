import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import FrameworkIntro from "@/components/framework/FrameworkIntro";
import InteractiveFlywheel from "@/components/framework/InteractiveFlywheel";
import TwoLoops from "@/components/framework/TwoLoops";
import IndustrySection from "@/components/home/IndustrySection";
import AboutPreview from "@/components/home/AboutPreview";
import ProofSection from "@/components/home/ProofSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import InsightsPreview from "@/components/home/InsightsPreview";
import FlywheelLabPreview from "@/components/home/FlywheelLabPreview";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import WorkWithMe from "@/components/home/WorkWithMe";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FrameworkIntro />
        <InteractiveFlywheel />
        <TwoLoops />
        <IndustrySection />
        <AboutPreview />
        <ProofSection />
        <CaseStudyPreview />
        <InsightsPreview />
        <FlywheelLabPreview />
        <NewsletterCTA />
        <WorkWithMe />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
