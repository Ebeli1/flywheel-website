"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    accent: stage.accent,
  };
});

export default function InteractiveFlywheel() {
  const [activeId, setActiveId] = useState(flywheelStages[0].id);
  const active =
    flywheelStages.find((stage) => stage.id === activeId) ?? flywheelStages[0];

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="container-content relative">
        {/* Desktop / tablet: circular interactive diagram */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
          {/* Gold outer ring - the main decorative circle */}
          <div
            className="absolute rounded-full border-2 border-gold/30"
            style={{ inset: "-4%" }}
            aria-hidden="true"
          />
          
          {/* Gold glow behind the wheel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[60px]"
          />

          {/* Gold guide ring — suggests the cycle */}
          <div
            className="absolute rounded-full border border-dashed border-gold/20"
            style={{ inset: "16%" }}
            aria-hidden="true"
          />

          {/* Center panel — updates with the selected stage */}
          <div
            className="absolute flex flex-col items-center justify-center rounded-full bg-navy px-6 text-center shadow-[0_25px_60px_-20px_rgba(16,26,46,0.5)]"
            style={{ inset: "27%" }}
          >
            <p 
              className="font-sans text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: active.accent }}
            >
              {active.number} — {active.tagline}
            </p>
            <p className="mt-2 font-sans text-xl font-extrabold text-white">
              {active.label}
            </p>
            <p className="mt-3 font-sans text-[14px] leading-snug text-white/70">
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
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-sans text-[12px] font-bold transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-lg"
                        : "border-2 bg-white text-navy/70"
                    }`}
                    style={{
                      backgroundColor: isActive ? stage.accent : "white",
                      borderColor: isActive ? stage.accent : `${stage.accent}40`,
                      boxShadow: isActive ? `0 8px 24px ${stage.accent}40` : "none",
                    }}
                  >
                    {stage.number}
                  </span>
                  <span
                    className={`whitespace-nowrap font-sans text-[11px] font-semibold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                    style={{
                      color: isActive ? stage.accent : undefined,
                    }}
                  >
                    {stage.label}
                  </span>
                </button>
              </span>
            );
          })}
        </div>

        <p className="mx-auto mt-4 hidden max-w-sm text-center font-sans text-[13px] text-gold/50 md:block">
          Revenue feeds back into new search demand — the cycle continues. ↻
        </p>

        {/* Mobile: vertical journey, accordion-style */}
        <div className="mx-auto max-w-md md:hidden bg-navy rounded-2xl p-4 shadow-xl">
          <div className="mb-4 text-center border-b border-gold/20 pb-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-gold/60">
              Content-to-Community Flywheel™
            </h3>
            <p className="font-sans text-[10px] text-white/40 mt-1">
              By Ngozi Chizaram
            </p>
          </div>
          
          {flywheelStages.map((stage) => {
            const isActive = stage.id === activeId;
            return (
              <div key={stage.id} className="border-b border-white/10 last:border-0">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(isActive ? activeId : stage.id)}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-[11px] font-bold transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "border-2 bg-white/10 text-white/60"
                      }`}
                      style={{
                        backgroundColor: isActive ? stage.accent : "transparent",
                        borderColor: isActive ? stage.accent : `${stage.accent}30`,
                      }}
                    >
                      {stage.number}
                    </span>
                    <span 
                      className="font-sans text-[14px] font-semibold transition-colors duration-300 text-white"
                      style={{
                        color: isActive ? stage.accent : "white",
                      }}
                    >
                      {stage.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    style={{ color: stage.accent }}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>
                {isActive && (
                  <div className="animate-fade-up pb-4 pl-11">
                    <p 
                      className="font-sans text-[11px] font-bold uppercase tracking-wide"
                      style={{ color: stage.accent }}
                    >
                      {stage.tagline}
                    </p>
                    <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-white/70">
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