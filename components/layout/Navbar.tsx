"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav, ctaLink } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-sm">
      <div className="container-content flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="focus-ring rounded-sm" onClick={() => setOpen(false)}>
          <span className="block font-sans text-[15px] font-extrabold uppercase tracking-tight text-navy leading-none">
            Content-to-Community
            <br />
            Flywheel<span className="align-super text-[9px]">™</span>
          </span>
          <span className="mt-1 block font-sans text-[11px] tracking-wide text-navy/50">
            By Ngozi Chizaram
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm font-sans text-[14px] font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaLink.href}
          className="focus-ring hidden rounded-full bg-navy px-5 py-2.5 font-sans text-[14px] font-semibold text-cream transition-colors hover:bg-navy-light lg:inline-flex lg:items-center lg:gap-1.5"
        >
          {ctaLink.label}
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="focus-ring rounded-sm p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-6 bg-navy transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-6 bg-navy transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[2px] w-6 bg-navy transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-navy/10 bg-cream lg:hidden"
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-sm px-1 py-3 font-sans text-[15px] font-medium text-navy/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaLink.href}
              className="focus-ring mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-5 py-3 font-sans text-[15px] font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              {ctaLink.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
