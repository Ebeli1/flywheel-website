export type ServiceOffer = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  intro: string;
  whoFor?: string[];
  examine?: { label: string; question: string }[];
  timeline?: { week: string; label: string }[];
  workIncludes?: string[];
  deliverable: { title: string; bullets: string[] };
  note?: string;
  ctaLabel: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    id: "audit",
    number: "01",
    eyebrow: "Entry-Level Consulting",
    title: "Content-to-Community Audit",
    intro:
      "For Web3 and EdTech companies that already have a blog, active SEO, a support function, a community, and existing customers — but haven't connected them.",
    whoFor: [
      "Have a blog and active SEO content",
      "Run customer support at some scale",
      "Have a community (Discord, Telegram, forum, etc.)",
      "Have existing customers or users",
    ],
    examine: [
      { label: "SEO", question: "Are you attracting the right people?" },
      {
        label: "Content",
        question: "Does your content answer the problems customers actually have?",
      },
      { label: "Community", question: "What are people repeatedly asking?" },
      { label: "Support", question: "What questions keep coming up?" },
      {
        label: "Customer Journey",
        question: "What happens after someone discovers your content?",
      },
    ],
    deliverable: {
      title: "A customized Content-to-Community Gap Report",
      bullets: [
        "Key content gaps",
        "Repeated customer questions",
        "Community insights",
        "SEO opportunities",
        "Content recommendations",
        "Support-to-content opportunities",
        "Community opportunities",
        "A recommended workflow",
      ],
    },
    ctaLabel: "Request an Audit",
  },
  {
    id: "pilot",
    number: "02",
    eyebrow: "Build Consulting",
    title: "Content-to-Community Flywheel Pilot",
    tagline: "Build the Flywheel in 30 Days",
    intro:
      "I work across your SEO, content, community, and support functions to help establish the feedback loop between them.",
    timeline: [
      { week: "Week 1", label: "Audit and discovery" },
      { week: "Week 2", label: "Customer-question and content mapping" },
      { week: "Week 3", label: "Build the cross-team workflow" },
      { week: "Week 4", label: "Test, measure, and refine" },
    ],
    deliverable: {
      title: "A documented Content-to-Community operating system for your team",
      bullets: [],
    },
    note: "This is a business transformation, not just hours — you're not buying community management, you're buying a working system.",
    ctaLabel: "Start a Pilot",
  },
  {
    id: "retainer",
    number: "03",
    eyebrow: "Retainer",
    title: "Content-to-Community Growth Advisory",
    intro:
      "Ongoing strategic advisory connecting Search → Content → Community → Support → Customer Insights → Product, on a recurring basis.",
    workIncludes: [
      "Monthly insight reviews",
      "Content strategy",
      "Community intelligence",
      "SEO and content alignment",
      "Customer-question analysis",
      "Content performance analysis",
      "Community strategy",
      "Quarterly growth recommendations",
    ],
    deliverable: {
      title: "A standing strategic partnership, not a one-off project",
      bullets: [],
    },
    note: "You don't have to execute every task personally — this scales with a team executing under your strategic lead.",
    ctaLabel: "Discuss a Retainer",
  },
];
