import { flywheelStages } from "@/data/flywheel";

// Pull the relevant stages (with their accent colors) straight from the
// shared flywheel data, so the two loops always stay in sync with the
// interactive diagram above — no duplicated stage list to fall out of date.
const discoveryIds = ["search", "content", "trust"];
const growthIds = [
  "community",
  "insights",
  "better-content",
  "adoption",
  "advocacy",
  "revenue",
];

function getStages(ids: string[]) {
  return ids
    .map((id) => flywheelStages.find((stage) => stage.id === id))
    .filter((stage): stage is (typeof flywheelStages)[number] => Boolean(stage));
}

function LoopCard({
  eyebrow,
  stages,
  description,
}: {
  eyebrow: string;
  stages: ReturnType<typeof getStages>;
  description: string;
}) {
  const gradient = `linear-gradient(90deg, ${stages
    .map((stage) => stage.accent)
    .join(", ")})`;

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_20px_50px_-30px_rgba(16,25,46,0.4)]">
      <div className="h-1.5" style={{ background: gradient }} aria-hidden="true" />
      <div className="p-8">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-navy/50">
          {eyebrow}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
          {stages.map((stage, index) => (
            <span key={stage.id} className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-navy/10 bg-cream px-3 py-1.5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: stage.accent }}
                  aria-hidden="true"
                />
                <span className="font-sans text-[13px] font-semibold text-navy">
                  {stage.label}
                </span>
              </span>
              {index < stages.length - 1 && (
                <span aria-hidden="true" className="font-sans text-navy/25">
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <p className="mt-6 font-sans text-[15px] leading-relaxed text-charcoal/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function TwoLoops() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            One Flywheel.{" "}
            <span className="font-serif font-normal italic text-gold">
              Two
            </span>{" "}
            Powerful Loops.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <LoopCard
            eyebrow="Discovery Loop"
            stages={getStages(discoveryIds)}
            description="Help people discover you, understand what you offer, and develop confidence in your expertise."
          />
          <LoopCard
            eyebrow="Growth Loop"
            stages={getStages(growthIds)}
            description="Turn real conversations into better education, stronger product experiences, advocacy, and business growth."
          />
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-sans text-[1.25rem] font-bold text-navy">
            The loops reinforce each other.
          </p>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-charcoal/70">
            We aren&apos;t saying community discussions directly cause search
            rankings. We&apos;re saying community-generated insight can help
            create more useful, relevant content — which can support the
            broader discovery system.
          </p>
        </div>
      </div>
    </section>
  );
}
