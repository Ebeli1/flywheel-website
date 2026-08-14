import { serviceOffers, type ServiceOffer } from "@/data/service-offers";

// TODO: replace with your real contact email.
const CONTACT_EMAIL = "hello@ngozichizaram.com";

function OfferCard({ offer }: { offer: ServiceOffer }) {
  return (
    <div
      id={offer.id}
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_20px_50px_-30px_rgba(16,25,46,0.4)]"
    >
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-sans text-[13px] font-bold text-cream">
            {offer.number}
          </span>
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
            {offer.eyebrow}
          </p>
        </div>

        <h3 className="mt-4 font-sans text-[1.5rem] font-extrabold leading-snug text-navy">
          {offer.title}
        </h3>
        {offer.tagline && (
          <p className="mt-1 font-serif text-[1.1rem] italic text-teal">
            {offer.tagline}
          </p>
        )}

        <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-charcoal/70">
          {offer.intro}
        </p>

        {/* Who it's for */}
        {offer.whoFor && (
          <div className="mt-7">
            <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-navy/50">
              Who It&apos;s For
            </p>
            <ul className="mt-3 space-y-2">
              {offer.whoFor.map((line) => (
                <li key={line} className="flex items-start gap-2.5 font-sans text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What we examine (Audit) */}
        {offer.examine && (
          <div className="mt-7">
            <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-navy/50">
              What We Examine
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {offer.examine.map((item) => (
                <div key={item.label} className="rounded-xl bg-cream p-4">
                  <p className="font-sans text-[13px] font-bold text-navy">{item.label}</p>
                  <p className="mt-1 font-sans text-[13px] text-charcoal/65">{item.question}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline (Pilot) */}
        {offer.timeline && (
          <div className="mt-7">
            <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-navy/50">
              The 4-Week Build
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {offer.timeline.map((step) => (
                <div key={step.week} className="rounded-xl border border-navy/10 p-4">
                  <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-teal">
                    {step.week}
                  </p>
                  <p className="mt-1 font-sans text-[14px] font-medium text-navy">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Work includes (Retainer) */}
        {offer.workIncludes && (
          <div className="mt-7">
            <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-navy/50">
              The Work Includes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {offer.workIncludes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-navy/10 bg-cream px-3 py-1.5 font-sans text-[13px] font-medium text-navy"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deliverable */}
        <div className="mt-7 rounded-2xl bg-navy p-6">
          <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-gold">
            Deliverable
          </p>
          <p className="mt-2 font-sans text-[15px] font-semibold text-cream">
            {offer.deliverable.title}
          </p>
          {offer.deliverable.bullets.length > 0 && (
            <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {offer.deliverable.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 font-sans text-[13px] text-cream/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        {offer.note && (
          <p className="mt-5 font-sans text-[14px] italic leading-relaxed text-charcoal/60">
            {offer.note}
          </p>
        )}

        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(offer.title)}`}
          className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-gold/90"
        >
          {offer.ctaLabel} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default function ServiceOffers() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Services
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            Three ways to work together.
          </h2>
          <p className="mt-5 font-sans text-[16px] leading-relaxed text-charcoal/70">
            Each offer solves a specific version of the same problem: SEO,
            content, community, and support operating as separate systems
            instead of one connected flywheel.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-8">
          {serviceOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
