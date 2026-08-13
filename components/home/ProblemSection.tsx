const systems = [
  { label: "SEO", result: "Traffic" },
  { label: "Community", result: "Engagement" },
  { label: "Content", result: "Answers" },
  { label: "Customer Data", result: "Questions" },
];

const disconnects = [
  "The blog doesn't inform the community.",
  "The community doesn't inform the content.",
  "Customer questions disappear inside support tickets.",
  "SEO stops at the click.",
  "Valuable insights never make it back into the content system.",
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      {/* Subtle depth, not decoration for its own sake — keeps the dark
          section from reading as a flat block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-teal/10 blur-[140px]"
      />

      <div className="container-content relative">
        <div className="max-w-2xl">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
            The Problem
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-cream sm:text-[2.5rem]">
            Your content can rank and still fail.
          </h2>
          <div className="mt-6 space-y-1 font-sans text-[17px] leading-relaxed text-cream/70">
            <p>You can rank on Google.</p>
            <p>You can attract thousands of visitors.</p>
            <p>You can publish consistently.</p>
            <p>You can have an active community.</p>
            <p className="pt-2 font-semibold text-cream">
              And still have all these things working separately.
            </p>
          </div>
        </div>

        {/* Four systems that don't talk to each other */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {systems.map((system) => (
            <div
              key={system.label}
              className="rounded-2xl border border-cream/10 bg-white/[0.04] px-4 py-6 text-center backdrop-blur-sm"
            >
              <p className="font-sans text-[13px] font-bold uppercase tracking-wide text-cream">
                {system.label}
              </p>
              <p className="mt-2 font-sans text-[13px] text-cream/50">
                ↓ {system.result}
              </p>
            </div>
          ))}
        </div>

        {/* The disconnect */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 border-t border-dashed border-cream/20" />
          <p className="whitespace-nowrap font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-cream/40">
            But they don&apos;t connect
          </p>
          <div className="h-px flex-1 border-t border-dashed border-cream/20" />
        </div>

        <ul className="mx-auto mt-10 max-w-xl space-y-3">
          {disconnects.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 font-sans text-[15px] leading-relaxed text-cream/65"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>

        {/* Closing statement */}
        <p className="mx-auto mt-14 max-w-2xl text-center font-sans text-[1.5rem] font-semibold leading-snug text-cream sm:text-[1.75rem]">
          The opportunity isn&apos;t always more content.
          <br />
          Sometimes it&apos;s{" "}
          <span className="font-serif font-normal italic text-gold">
            connecting
          </span>{" "}
          the content you already have.
        </p>
      </div>
    </section>
  );
}
