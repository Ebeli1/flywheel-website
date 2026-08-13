export type InsightPreview = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
};

export const featuredInsights: InsightPreview[] = [
  {
    id: "content-to-community-flywheel",
    category: "Framework",
    title: "The Content-to-Community Flywheel",
    excerpt:
      "Why search, content, trust, and community work better as one connected system than as separate departments — and what changes when you connect them.",
  },
  {
    id: "why-rankings-dont-build-communities",
    category: "Community",
    title: "Why Rankings Don't Build Communities",
    excerpt:
      "Ranking #1 gets you the click. It doesn't get you a reader who comes back, joins a conversation, or tells someone else about you.",
  },
  {
    id: "seo-isnt-just-about-google-anymore",
    category: "SEO",
    title: "Why SEO Isn't Just About Google Anymore",
    excerpt:
      "Search now happens across AI assistants, community platforms, and marketplaces — not just a search bar. Here's what that means for content strategy.",
  },
];