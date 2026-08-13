import Navbar from "@/components/layout/Navbar";
import { industries } from "@/data/industries";

// Placeholder Web3 page — unblocks the "Explore Web3" CTA. Expand with
// Web3-specific case studies, articles, and a fuller write-up later.
export default function Web3Page() {
  const industry = industries.find((item) => item.id === "web3")!;

  return (
    <>
      <Navbar />
      <main className="container-content py-20">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-teal">
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
