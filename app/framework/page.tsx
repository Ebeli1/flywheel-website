import Navbar from "@/components/layout/Navbar";
import FrameworkIntro from "@/components/framework/FrameworkIntro";
import InteractiveFlywheel from "@/components/framework/InteractiveFlywheel";
import TwoLoops from "@/components/framework/TwoLoops";

// Placeholder framework page — unblocks the nav/CTA links that already
// point here. Expand with the Customer Journey and a fuller write-up of
// the framework once those sections are built.
export default function FrameworkPage() {
  return (
    <>
      <Navbar />
      <main>
        <FrameworkIntro />
        <InteractiveFlywheel />
        <TwoLoops />
      </main>
    </>
  );
}
