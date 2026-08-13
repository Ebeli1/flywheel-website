export default function FrameworkIntro() {
  return (
    <section id="framework" className="scroll-mt-24 py-20 md:py-24">
      <div className="container-content text-center">
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
          The Framework
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
          Meet the Content-to-Community Flywheel™
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-[17px] leading-relaxed text-charcoal/75">
          A framework for connecting the systems that are often treated
          separately: search, content, trust, community, customer education,
          product adoption, and growth.
        </p>
        <a
          href="/framework"
          className="focus-ring mt-8 inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-navy underline decoration-teal decoration-2 underline-offset-4 transition-colors hover:text-navy-light"
        >
          Explore the full framework <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
