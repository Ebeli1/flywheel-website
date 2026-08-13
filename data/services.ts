export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "seo-content-strategy",
    title: "SEO Content Strategy",
    description:
      "Search intent, content architecture, editorial strategy, optimization.",
  },
  {
    id: "community-growth-strategy",
    title: "Community Growth Strategy",
    description:
      "Community engagement, content-to-community systems, insight gathering.",
  },
  {
    id: "ai-content-systems",
    title: "AI Content Systems",
    description:
      "AI-assisted research, optimization, workflows, and content operations.",
  },
];
