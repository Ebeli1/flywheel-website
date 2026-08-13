export type FlywheelStage = {
  id: string;
  number: string;
  label: string;
  tagline: string;
  description: string;
  accent: string;
};

// The nine-stage cycle. Order matters — it's also the click/tab order and
// the order rendered in the mobile vertical journey. Each stage carries its
// own accent color, chosen as a coordinated warm-to-cool arc (no purple, to
// stay clear of the brand's retired accent) so the ring reads as a
// deliberate palette rather than random color.
export const flywheelStages: FlywheelStage[] = [
  {
    id: "search",
    number: "01",
    label: "Search",
    tagline: "Discovery",
    description: "What questions are people already asking?",
    accent: "#3B6E8F",
  },
  {
    id: "content",
    number: "02",
    label: "Content",
    tagline: "Education",
    description: "Create useful answers around real search intent.",
    accent: "#1F8A7A",
  },
  {
    id: "trust",
    number: "03",
    label: "Trust",
    tagline: "Credibility",
    description: "Helpful experiences give people reasons to believe you.",
    accent: "#6B8F5A",
  },
  {
    id: "community",
    number: "04",
    label: "Community",
    tagline: "Connection",
    description: "Give people somewhere to continue the conversation.",
    accent: "#C08A28",
  },
  {
    id: "insights",
    number: "05",
    label: "Insights",
    tagline: "Learning",
    description: "Conversations reveal questions, needs, language, and gaps.",
    accent: "#C2703D",
  },
  {
    id: "better-content",
    number: "06",
    label: "Better Content",
    tagline: "Iteration",
    description: "Turn real insights into more useful content.",
    accent: "#A6482E",
  },
  {
    id: "adoption",
    number: "07",
    label: "Product Adoption",
    tagline: "Action",
    description:
      "Help people understand and successfully use what you've built.",
    accent: "#8C3B4A",
  },
  {
    id: "advocacy",
    number: "08",
    label: "Advocacy",
    tagline: "Growth",
    description: "Satisfied users become repeat users, advocates, and referrers.",
    accent: "#3B4A6B",
  },
  {
    id: "revenue",
    number: "09",
    label: "Revenue",
    tagline: "Business Outcome",
    description:
      "Build a system where education and trust contribute to sustainable growth.",
    accent: "#8A6A3F",
  },
];
