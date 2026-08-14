import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-content grid grid-cols-1 items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-navy shadow-[0_25px_60px_-25px_rgba(16,25,46,0.5)] lg:max-w-none">
          <Image
            src="/NgoziOne.png"
            alt="Ngozi Chizaram"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Behind the Framework
          </p>
          <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            I&apos;m Ngozi Chizaram.
          </h2>
          <p className="mt-5 font-sans text-[17px] leading-relaxed text-charcoal/75">
            I&apos;m an SEO Content Strategist and Community Growth Strategist
            exploring what happens when search, content, AI, customer
            education, and community stop operating in silos.
          </p>

          <div className="mt-5 space-y-4 font-sans text-[15px] leading-relaxed text-charcoal/70">
            <p>
              I&apos;ve published 1,000+ SEO-optimized articles and worked
              across content, SEO, and community initiatives.
            </p>
            <p>Along the way, I noticed a recurring problem.</p>
            <p>
              Organizations were creating valuable content. Communities were
              having valuable conversations. Customers were asking valuable
              questions. But these things often existed in separate systems.
            </p>
            <p className="font-semibold text-navy">
              That&apos;s what led me to start developing the
              Content-to-Community Flywheel.
            </p>
          </div>

          <a
            href="/about"
            className="focus-ring mt-7 inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-navy underline decoration-teal decoration-2 underline-offset-4 transition-colors hover:text-navy-light"
          >
            More about Ngozi <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}