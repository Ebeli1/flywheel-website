import { services } from "@/data/services";

// TODO: replace with your real contact email or a proper contact form.
const CONTACT_EMAIL = "hello@ngozichizaram.com";

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.5rem]">
            Let&apos;s connect the pieces.
          </h2>
          <p className="mt-5 font-sans text-[16px] leading-relaxed text-charcoal/70">
            If your organization has content, search traffic, a community,
            customer questions, and valuable expertise — but they&apos;re
            operating separately — let&apos;s explore what connecting them
            could look like.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="focus-ring group rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-teal/30"
            >
              <p className="font-sans text-[15px] font-bold text-navy transition-colors group-hover:text-teal">
                {service.title}
              </p>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-charcoal/65">
                {service.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-teal">
                See details <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-navy-light"
          >
            Have a problem worth exploring? Let&apos;s talk{" "}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
