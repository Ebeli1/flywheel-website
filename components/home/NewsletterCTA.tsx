"use client";

import { useState, type FormEvent } from "react";

// Front-end only for now — no email service is wired up yet. Swap the
// onSubmit handler for a real provider (ConvertKit, Beehiiv, Mailchimp, etc.)
// when you're ready to actually collect subscribers.
export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[140px]"
      />
      <div className="container-content relative mx-auto max-w-lg text-center">
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
          The Flywheel Notes
        </p>
        <h2 className="mt-4 font-sans text-[2rem] font-extrabold leading-tight tracking-tight text-cream sm:text-[2.5rem]">
          Get the ideas behind the flywheel.
        </h2>
        <p className="mt-5 font-sans text-[16px] leading-relaxed text-cream/70">
          One idea. One observation. One practical lesson about SEO, AI,
          content, customer education, and community growth.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-[15px] font-semibold text-teal">
            You&apos;re on the list — welcome to the flywheel.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="focus-ring w-full flex-1 rounded-full border border-cream/20 bg-white/5 px-5 py-3.5 font-sans text-[15px] text-cream placeholder:text-cream/40"
            />
            <button
              type="submit"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-gold/90"
            >
              Join the Flywheel <span aria-hidden="true">→</span>
            </button>
          </form>
        )}

        <p className="mt-4 font-sans text-[13px] text-cream/40">
          No noise. Just useful ideas.
        </p>
      </div>
    </section>
  );
}
