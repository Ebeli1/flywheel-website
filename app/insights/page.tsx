import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsightsIndex from "@/components/insights/InsightsIndex";
import { getAllInsights } from "@/lib/mdx";

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <Navbar />
      <main>
        <InsightsIndex insights={insights} />
      </main>
      <Footer />
    </>
  );
}
