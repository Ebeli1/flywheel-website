export type Industry = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  flow: string[];
  href: string;
  accent: "teal" | "gold";
};

export const industries: Industry[] = [
  {
    id: "web3",
    eyebrow: "Web3",
    headline: "In Web3, education is part of adoption.",
    body: "People often need to understand the technology, product, use case, risks, and value before they're ready to act.",
    flow: ["SEO", "Education", "Trust", "Community", "Adoption"],
    href: "/web3",
    accent: "teal",
  },
  {
    id: "edtech",
    eyebrow: "EdTech",
    headline: "In EdTech, learning doesn't end at enrollment.",
    body: "Learners have questions before, during, and after a learning experience. Communities can reveal those questions — and content can help answer them.",
    flow: ["Search", "Learn", "Participate", "Feedback", "Better Learning"],
    href: "/edtech",
    accent: "gold",
  },
];
