"use client";

import { useState } from "react";
import type { InsightMeta } from "@/lib/mdx";

const CATEGORIES = [
  "All",
  "SEO",
  "AI",
  "Community",
  "Framework",
  "Web3",
  "EdTech",
  "Customer Education",
];

export default function InsightsIndex({ insights }: { insights: InsightMeta[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === activeCategory);

  return (
    <section className="container-content py-16 md:py-20">
      <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
        Insights
      </p>
      <h1 className="mt-3 max-w-xl font-sans text-[2rem] font-extrabold leading-tight text-navy sm:text-[2.5rem]">
        Ideas worth exploring.
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`focus-ring rounded-full border px-4 py-2 font-sans text-[13px] font-semibold transition-colors ${
              activeCategory === category
                ? "border-navy bg-navy text-cream"
                : "border-navy/15 text-navy/60 hover:border-navy/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 font-sans text-[15px] text-charcoal/60">
          No articles in this category yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filtered.map((insight) => (
            <a
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="focus-ring group flex flex-col rounded-3xl border border-navy/10 bg-white p-7 transition-colors hover:border-teal/30"
            >
              <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-navy/60">
                {insight.category}
              </span>
              <h2 className="mt-4 font-sans text-[1.125rem] font-bold leading-snug text-navy transition-colors group-hover:text-teal">
                {insight.title}
              </h2>
              <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-charcoal/65">
                {insight.excerpt}
              </p>
              <span className="mt-5 font-sans text-[13px] text-charcoal/45">
                {insight.readingTimeText}
              </span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
