import Navbar from "@/components/layout/Navbar";
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
        {/*
          Next sections per the blueprint, in build order:
          <FlywheelLabPreview />
          <NewsletterCTA />
          <WorkWithMe />
          <FinalCTA />
          <Footer />
        */}
      </main>
    </>
  );
}