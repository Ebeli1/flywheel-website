import { proofMetrics } from "@/data/proof";

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />

      <div className="container-content relative text-center">
        <h2 className="mx-auto max-w-xl font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-cream sm:text-[2.5rem]">
          The work behind the ideas.
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {proofMetrics.map((metric) => (
            <div key={metric.id}>
              <p className="font-sans text-[2.25rem] font-extrabold leading-none text-gold sm:text-[2.75rem]">
                {metric.value}
              </p>
              <p className="mt-3 font-sans text-[14px] leading-snug text-cream/70">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-md font-sans text-[15px] text-cream/60">
          Numbers tell you what happened. Case studies tell you why.
        </p>

        <a
          href="/case-studies"
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          Explore the Case Studies <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}