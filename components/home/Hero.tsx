import Image from "next/image";

// Six words placed at equal 60° intervals on a circle around the portrait
// (radius 46% of the container, centered at 50/50) so spacing is always
// symmetric regardless of screen size — no ad-hoc left/right offsets.
const RADIUS = 46;
const orbitWords = [
  { label: "SEARCH", angle: -90, delayMs: 0 },
  { label: "CONTENT", angle: -30, delayMs: 150 },
  { label: "TRUST", angle: 30, delayMs: 300 },
  { label: "GROWTH", angle: 90, delayMs: 500 },
  { label: "INSIGHTS", angle: 150, delayMs: 700 },
  { label: "COMMUNITY", angle: 210, delayMs: 1000 },
].map((word) => {
  const radians = (word.angle * Math.PI) / 180;
  return {
    ...word,
    top: `${50 + RADIUS * Math.sin(radians)}%`,
    left: `${50 + RADIUS * Math.cos(radians)}%`,
  };
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background glow — breaks up the flat cream field behind the
          content without competing with it (kept blurred + low opacity) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-teal/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/15 blur-[110px]"
      />

      <div className="container-content grid grid-cols-1 items-center gap-16 py-16 md:py-24 lg:grid-cols-[60%_40%] lg:gap-10">
        {/* Copy column */}
        <div className="order-2 max-w-xl lg:order-1">
          <p className="animate-fade-up font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Content-to-Community Flywheel™
          </p>

          <h1 className="mt-5 animate-fade-up font-sans text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-navy [animation-delay:100ms] sm:text-[3.25rem]">
            SEO shouldn&apos;t end with a{" "}
            <span className="font-serif font-normal italic text-gold">click.</span>
            <br />
            It should start a relationship.
          </h1>

          <p className="mt-6 animate-fade-up font-sans text-[17px] leading-relaxed text-charcoal/75 [animation-delay:200ms]">
            I help Web3 and EdTech organizations connect SEO, AI, customer
            education, content, and community to turn search attention into
            trust, engagement, product adoption, and sustainable growth.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:300ms] sm:flex-row">
            <a
              href="/framework"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              Explore the Framework <span aria-hidden="true">→</span>
            </a>
            <a
              href="/insights"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
            >
              Read the Insights <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-8 animate-fade-up font-sans text-[13px] tracking-wide text-charcoal/50 [animation-delay:400ms]">
            SEO Content Strategist · Community Growth Strategist · AI Content
            &amp; Automation
          </p>
        </div>

        {/* Portrait + orbit column */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
            {/* Orbit words — the signature motion element. Positioned by
                exact angle/radius (see orbitWords above) so all six sit
                evenly spaced on a circle, then nudged to center on their
                point with -translate-x-1/2 -translate-y-1/2. */}
            {orbitWords.map((word) => (
              // Outer span: pure positioning (centers on its exact point).
              // Inner span: pure animation (drifts up/down). Kept separate
              // so the two transforms never overwrite each other.
              <span
                key={word.label}
                style={{
                  top: word.top,
                  left: word.left,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute"
              >
                <span
                  style={{ animationDelay: `${word.delayMs}ms` }}
                  className="animate-drift-slow inline-block select-none whitespace-nowrap rounded-full bg-cream/90 px-2.5 py-1 font-sans text-[10px] font-semibold tracking-[0.12em] text-navy/70 shadow-sm backdrop-blur-sm"
                >
                  {word.label}
                </span>
              </span>
            ))}

            {/* Portrait frame */}
            <div className="absolute inset-[14%] overflow-hidden rounded-[28%] bg-gradient-to-br from-navy via-navy-light to-teal shadow-[0_20px_60px_-15px_rgba(16,25,46,0.45)]">
              <Image
                src="/Ngozi.jpeg"
                alt="Ngozi Chizaram"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
