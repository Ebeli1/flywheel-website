"use client";

import { useState } from "react";
import { flywheelStages } from "@/data/flywheel";

// Nine stages placed at equal 40° intervals on a circle (360° / 9 stages),
// starting at the top and going clockwise — same technique as the Hero's
// orbit words, just with more points.
const RADIUS = 42;
const positions = flywheelStages.map((stage, index) => {
  const angle = -90 + index * (360 / flywheelStages.length);
  const radians = (angle * Math.PI) / 180;
  return {
    id: stage.id,
    top: `${50 + RADIUS * Math.sin(radians)}%`,
    left: `${50 + RADIUS * Math.cos(radians)}%`,
  };
});

export default function InteractiveFlywheel() {
  const [activeId, setActiveId] = useState(flywheelStages[0].id);
  const active =
    flywheelStages.find((stage) => stage.id === activeId) ?? flywheelStages[0];

  // Full-circle gradient built from every stage's accent, in order — used
  // for the colorful ring behind the nodes.
  const ringGradient = `conic-gradient(${flywheelStages
    .map(
      (stage, index) =>
        `${stage.accent} ${(index / flywheelStages.length) * 360}deg ${
          ((index + 1) / flywheelStages.length) * 360
        }deg`
    )
    .join(", ")})`;

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        style={{ backgroundColor: active.accent }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[130px] transition-colors duration-500"
      />
      <div className="container-content relative">
        {/* Desktop / tablet: circular interactive diagram */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
          {/* Colorful ring — a conic gradient of every stage's accent,
              masked down to a thin band so it reads as a wheel, not a disc */}
          <div
            className="absolute rounded-full"
            style={{ inset: "13%", background: ringGradient }}
            aria-hidden="true"
          />
          <div
            className="absolute rounded-full bg-cream"
            style={{ inset: "16.5%" }}
            aria-hidden="true"
          />

          {/* Center panel — updates with the selected stage */}
          <div
            className="absolute flex flex-col items-center justify-center rounded-full bg-white px-8 text-center shadow-[0_25px_60px_-20px_rgba(16,26,46,0.35)] transition-shadow"
            style={{ inset: "27%" }}
          >
            <p
              className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300"
              style={{ color: active.accent }}
            >
              {active.number} — {active.tagline}
            </p>
            <p className="mt-2 font-sans text-xl font-extrabold text-navy">
              {active.label}
            </p>
            <p className="mt-3 font-sans text-[14px] leading-snug text-charcoal/70">
              {active.description}
            </p>
          </div>

          {/* Stage nodes */}
          {flywheelStages.map((stage, index) => {
            const pos = positions[index];
            const isActive = stage.id === activeId;
            return (
              <span
                key={stage.id}
                style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
                className="absolute"
              >
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(stage.id)}
                  onFocus={() => setActiveId(stage.id)}
                  className={`focus-ring flex flex-col items-center gap-1.5 rounded-full transition-transform ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <span
                    style={
                      isActive
                        ? { backgroundColor: stage.accent, boxShadow: `0 8px 20px -6px ${stage.accent}99` }
                        : { borderColor: `${stage.accent}55`, color: stage.accent }
                    }
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-sans text-[12px] font-bold transition-colors ${
                      isActive ? "text-cream" : "border-2 bg-white"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span
                    style={isActive ? { color: stage.accent } : undefined}
                    className={`whitespace-nowrap font-sans text-[11px] font-semibold tracking-wide transition-colors ${
                      isActive ? "" : "text-charcoal/50"
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              </span>
            );
          })}
        </div>

        <p className="mx-auto mt-6 hidden max-w-sm text-center font-sans text-[13px] text-charcoal/50 md:block">
          Revenue feeds back into new search demand — the cycle continues. ↻
        </p>

        {/* Mobile: vertical journey, accordion-style */}
        <div className="mx-auto max-w-md md:hidden">
          {flywheelStages.map((stage) => {
            const isActive = stage.id === activeId;
            return (
              <div
                key={stage.id}
                style={{ borderLeftColor: isActive ? stage.accent : "transparent" }}
                className="border-b border-l-4 border-navy/10 pl-3 transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(isActive ? activeId : stage.id)}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      style={
                        isActive
                          ? { backgroundColor: stage.accent }
                          : { borderColor: `${stage.accent}55`, color: stage.accent }
                      }
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-[11px] font-bold ${
                        isActive ? "text-cream" : "border-2"
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span className="font-sans text-[15px] font-semibold text-navy">
                      {stage.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`font-sans text-navy/40 transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {isActive && (
                  <div className="animate-fade-up pb-5 pl-11">
                    <p
                      className="font-sans text-[12px] font-bold uppercase tracking-wide"
                      style={{ color: stage.accent }}
                    >
                      {stage.tagline}
                    </p>
                    <p className="mt-1.5 font-sans text-[14px] leading-relaxed text-charcoal/70">
                      {stage.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
