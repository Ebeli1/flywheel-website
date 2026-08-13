import Navbar from "@/components/layout/Navbar";
import FrameworkIntro from "@/components/framework/FrameworkIntro";
import InteractiveFlywheel from "@/components/framework/InteractiveFlywheel";
import TwoLoops from "@/components/framework/TwoLoops";

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