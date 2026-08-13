import Navbar from "@/components/layout/Navbar";
import { industries } from "@/data/industries";

// Placeholder EdTech page — unblocks the "Explore EdTech" CTA. Expand with
// EdTech-specific case studies, articles, and a fuller write-up later.
export default function EdTechPage() {
  const industry = industries.find((item) => item.id === "edtech")!;

  return (
    <>
      <Navbar />
      <main className="container-content py-20">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
          {industry.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-sans text-[2rem] font-extrabold leading-tight text-navy sm:text-[2.5rem]">
          {industry.headline}
        </h1>
        <p className="mt-5 max-w-xl font-sans text-[17px] leading-relaxed text-charcoal/70">
          {industry.body}
        </p>
      </main>
    </>
  );
}
