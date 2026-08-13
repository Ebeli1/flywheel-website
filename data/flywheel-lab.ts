export type LabExperiment = {
  id: string;
  number: string;
  question: string;
};

export const labExperiments: LabExperiment[] = [
  {
    id: "content-briefs",
    number: "01",
    question: "Can community questions become better content briefs?",
  },
  {
    id: "support-seo",
    number: "02",
    question: "What can customer support conversations teach us about SEO?",
  },
  {
    id: "ai-research",
    number: "03",
    question:
      "Can AI accelerate content research without replacing human insight?",
  },
];
