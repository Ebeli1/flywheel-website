export type CaseStudyPreview = {
  id: string;
  eyebrow: string;
  headline: string;
  teaser: string;
  accent: "teal" | "gold" | "sage";
};

export const caseStudyPreviews: CaseStudyPreview[] = [
  {
    id: "web3",
    eyebrow: "Web3",
    headline: "When rankings weren't the real problem",
    teaser:
      "A Web3 brand ranked well and still struggled to convert visitors into believers. Here's what actually moved the needle.",
    accent: "teal",
  },
  {
    id: "edtech",
    eyebrow: "EdTech",
    headline: "When content and community operated separately",
    teaser:
      "Two systems, one audience, no connection between them — until the content and community strategies started talking to each other.",
    accent: "gold",
  },
  {
    id: "community",
    eyebrow: "Community",
    headline: "What happens when engagement becomes insight?",
    teaser:
      "A look at how real community conversations became a documented content growth engine for a learning community.",
    accent: "sage",
  },
];