import { caseStudyPreviews, type CaseStudyPreview } from "@/data/case-studies";

const accentText: Record<CaseStudyPreview["accent"], string> = {
  teal: "text-teal",
  gold: "text-gold",
  sage: "text-sage",
};

const accentBar: Record<CaseStudyPreview["accent"], string> = {
  teal: "bg-teal",
  gold: "bg-gold",
  sage: "bg-sage",
};

export default function CaseStudyPreviewSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Proof, With Context
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            The stories behind the numbers.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudyPreviews.map((study) => (
            <div
              key={study.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_20px_50px_-30px_rgba(16,25,46,0.4)]"
            >
              <div className={`h-1.5 ${accentBar[study.accent]}`} aria-hidden="true" />
              <div className="flex flex-1 flex-col p-7">
                <p
                  className={`font-sans text-[12px] font-bold uppercase tracking-[0.14em] ${accentText[study.accent]}`}
                >
                  {study.eyebrow}
                </p>
                <h3 className="mt-3 font-sans text-[1.125rem] font-bold leading-snug text-navy">
                  {study.headline}
                </h3>
                <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-charcoal/65">
                  {study.teaser}
                </p>
                <a
                  href="/case-studies"
                  className={`focus-ring mt-5 inline-flex items-center gap-1.5 self-start font-sans text-[14px] font-semibold ${accentText[study.accent]}`}
                >
                  Read case study <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}