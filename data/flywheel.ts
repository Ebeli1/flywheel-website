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
// own accent color based on the Content-to-Community Flywheel design.
export const flywheelStages: FlywheelStage[] = [
  {
    id: "search",
    number: "01",
    label: "Search",
    tagline: "People search. You're discovered.",
    description: "What questions are people already asking?",
    accent: "#4A90D9", // Bright Blue - Search
  },
  {
    id: "content",
    number: "02",
    label: "Content",
    tagline: "You create valuable answers.",
    description: "Create useful answers around real search intent.",
    accent: "#2ECC71", // Emerald Green - Content
  },
  {
    id: "trust",
    number: "03",
    label: "Trust",
    tagline: "Consistent value builds credibility.",
    description: "Helpful experiences give people reasons to believe you.",
    accent: "#F39C12", // Golden Orange - Trust
  },
  {
    id: "community",
    number: "04",
    label: "Community",
    tagline: "People join, engage & connect.",
    description: "Give people somewhere to continue the conversation.",
    accent: "#E74C3C", // Red - Community
  },
  {
    id: "insights",
    number: "05",
    label: "Insights",
    tagline: "Conversations reveal real needs.",
    description: "Conversations reveal questions, needs, language, and gaps.",
    accent: "#9B59B6", // Purple - Insights
  },
  {
    id: "better-content",
    number: "06",
    label: "Better Content",
    tagline: "You create more relevant content.",
    description: "Turn real insights into more useful content.",
    accent: "#E67E22", // Orange - Better Content
  },
  {
    id: "adoption",
    number: "07",
    label: "Adoption",
    tagline: "People understand, use, and get results.",
    description: "Help people understand and successfully use what you've built.",
    accent: "#1ABC9C", // Teal - Adoption
  },
  {
    id: "advocacy",
    number: "08",
    label: "Advocacy",
    tagline: "They recommend, refer & come back.",
    description: "Satisfied users become repeat users, advocates, and referrers.",
    accent: "#E74C3C", // Red - Advocacy
  },
  {
    id: "revenue",
    number: "09",
    label: "Revenue",
    tagline: "Trust, loyalty, and value drive growth.",
    description: "Build a system where education and trust contribute to sustainable growth.",
    accent: "#2ECC71", // Emerald Green - Revenue
  },
];