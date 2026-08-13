import Navbar from "@/components/layout/Navbar";

// Placeholder Case Studies index — unblocks the "Explore the Case Studies"
// CTA. Populate with the Web3, EdTech, and Community Growth case studies
// per the blueprint once those are written.
export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="container-content py-20">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
          Case Studies
        </p>
        <h1 className="mt-3 max-w-2xl font-sans text-[2rem] font-extrabold leading-tight text-navy sm:text-[2.5rem]">
          Numbers tell you what happened. Case studies tell you why.
        </h1>
        <p className="mt-5 max-w-xl font-sans text-[17px] leading-relaxed text-charcoal/70">
          Case studies coming soon: Web3, EdTech, and Community Growth.
        </p>
      </main>
    </>
  );
}
