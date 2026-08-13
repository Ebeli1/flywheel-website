# Content-to-Community Flywheel™ — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS, built from the site blueprint.

## What's built so far (Step 1 + Step 2)

- Project scaffold: Next.js, TypeScript, Tailwind, next/font
- Design tokens: navy / purple / teal / cream / charcoal in `tailwind.config.ts`
- Typography: Manrope (sans) + Fraunces (serif accent) loaded via `next/font/google`
- `Navbar` — desktop nav, mobile hamburger menu, sticky + blurred on scroll
- `Hero` — headline, dual CTAs, and the "orbit words" signature motion element
  around a portrait placeholder (swap the monogram block in `Hero.tsx` for a
  real photo via `next/image` when you have one)
- Reduced-motion support and visible focus rings are already in `globals.css`

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Next up (per the blueprint's build order)

3. Problem section
4. Framework intro + Interactive Flywheel (this is the one that needs the
   most thought — client component with stage state)
5. Two Loops
6. Web3 + EdTech industry cards
7. About / Proof / Case studies preview
8. Insights preview
9. Flywheel Lab preview
10. Newsletter + Work With Me + Final CTA
11. Footer

Then MDX content system, SEO metadata/sitemap/structured data, and the first
five pillar articles — same order as the blueprint's Step 5–7.
