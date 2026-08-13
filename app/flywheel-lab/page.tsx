import Navbar from "@/components/layout/Navbar";
import FlywheelLabPreview from "@/components/home/FlywheelLabPreview";

// Placeholder Flywheel Lab index — unblocks "Enter the Flywheel Lab" CTA.
// Becomes a real running log of experiments/write-ups once you start
// documenting them.
export default function FlywheelLabPage() {
  return (
    <>
      <Navbar />
      <main>
        <FlywheelLabPreview />
      </main>
    </>
  );
}
