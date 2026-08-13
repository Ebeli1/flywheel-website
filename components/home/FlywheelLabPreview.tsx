import { experiments } from "@/data/experiments";

export default function FlywheelLabPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
            The Flywheel Lab
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            I&apos;m building the framework in public.
          </h2>
          <p className="mt-5 font-sans text-[16px] leading-relaxed text-charcoal/70">
            Not every idea needs to arrive fully formed. The Flywheel Lab is
            where I document experiments, observations, questions, and
            lessons as I explore the intersection of SEO, AI, content,
            customer education, and community.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className="rounded-2xl border border-navy/10 bg-white p-6"
            >
              <p className="font-sans text-[12px] font-bold uppercase tracking-wide text-gold">
                Experiment {experiment.number}
              </p>
              <p className="mt-2 font-sans text-[15px] font-medium leading-snug text-navy">
                {experiment.question}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/flywheel-lab"
            className="focus-ring inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-navy-light"
          >
            Enter the Flywheel Lab <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
