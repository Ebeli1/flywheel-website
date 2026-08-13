import Navbar from "@/components/layout/Navbar";
import InsightsPreview from "@/components/home/InsightsPreview";

// Placeholder Insights index — unblocks "Explore all insights" and
// "Read article" CTAs. Becomes the real MDX-powered article list + category
// filters (blueprint Step 5) once the content system is built.
export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InsightsPreview />
      </main>
    </>
  );
}