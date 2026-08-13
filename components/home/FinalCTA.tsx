export default function FinalCTA() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-content text-center">
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
          Content-to-Community Flywheel™
        </p>
        <p className="mt-2 font-sans text-[13px] text-cream/50">
          By Ngozi Chizaram
        </p>

        <h2 className="mx-auto mt-8 max-w-2xl font-sans text-[2.25rem] font-extrabold leading-tight tracking-tight text-cream sm:text-[3rem]">
          Don&apos;t just get found.
          <br />
          Give people a reason to{" "}
          <span className="font-serif font-normal italic text-gold">stay.</span>
        </h2>

        <a
          href="/framework"
          className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-gold/90"
        >
          Explore the Framework <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
