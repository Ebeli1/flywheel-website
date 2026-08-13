import { industries, type Industry } from "@/data/industries";

const accentClasses: Record<
  Industry["accent"],
  { text: string; border: string; chipBorder: string; decoration: string }
> = {
  teal: {
    text: "text-teal",
    border: "border-teal/20",
    chipBorder: "border-teal/25",
    decoration: "decoration-teal/40",
  },
  gold: {
    text: "text-gold",
    border: "border-gold/20",
    chipBorder: "border-gold/25",
    decoration: "decoration-gold/40",
  },
};

function IndustryCard({ industry }: { industry: Industry }) {
  const accent = accentClasses[industry.accent];

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border ${accent.border} bg-white p-8 shadow-[0_20px_50px_-30px_rgba(16,25,46,0.4)]`}
    >
      <p className={`font-sans text-[13px] font-bold uppercase tracking-[0.14em] ${accent.text}`}>
        {industry.eyebrow}
      </p>
      <h3 className="mt-3 font-sans text-[1.375rem] font-extrabold leading-snug text-navy">
        {industry.headline}
      </h3>
      <p className="mt-4 flex-1 font-sans text-[15px] leading-relaxed text-charcoal/70">
        {industry.body}
      </p>

      {/* Flow chips */}
      <div className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {industry.flow.map((step, index) => (
          <span key={step} className="flex items-center gap-1.5">
            <span
              className={`rounded-full border ${accent.chipBorder} bg-cream px-3 py-1 font-sans text-[12px] font-semibold text-navy`}
            >
              {step}
            </span>
            {index < industry.flow.length - 1 && (
              <span aria-hidden="true" className="font-sans text-navy/25">
                →
              </span>
            )}
          </span>
        ))}
      </div>

      <a
        href={industry.href}
        className={`focus-ring mt-7 inline-flex items-center gap-2 self-start font-sans text-[15px] font-semibold text-navy underline decoration-2 underline-offset-4 transition-colors hover:text-navy-light ${accent.decoration}`}
      >
        Explore {industry.eyebrow} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function IndustrySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            Two Industries.{" "}
            <span className="font-serif font-normal italic text-gold">
              One
            </span>{" "}
            Framework.
          </h2>
          <p className="mt-5 font-sans text-[17px] leading-relaxed text-charcoal/70">
            The Content-to-Community Flywheel is especially relevant where
            education is part of adoption.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
