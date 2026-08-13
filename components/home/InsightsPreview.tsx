import { featuredInsights } from "@/data/insights";

export default function InsightsPreview() {
  return (
    <section className="border-t border-navy/10 bg-white/40 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Insights
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            Ideas worth exploring.
          </h2>
          <p className="mt-5 font-sans text-[16px] leading-relaxed text-charcoal/70">
            Perspectives on SEO, AI, content, customer education, community,
            Web3, and EdTech.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {featuredInsights.map((insight) => (
            <a
              key={insight.id}
              href="/insights"
              className="focus-ring group flex flex-col rounded-3xl border border-navy/10 bg-cream p-7 transition-colors hover:border-teal/30"
            >
              <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-navy/60">
                {insight.category}
              </span>
              <h3 className="mt-4 font-sans text-[1.125rem] font-bold leading-snug text-navy transition-colors group-hover:text-teal">
                {insight.title}
              </h3>
              <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-charcoal/65">
                {insight.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[14px] font-semibold text-navy">
                Read article <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/insights"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 font-sans text-[15px] font-semibold text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
          >
            Explore all insights <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
