export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Framework", href: "/framework" },
  { label: "Insights", href: "/insights" },
  { label: "Web3", href: "/web3" },
  { label: "EdTech", href: "/edtech" },
  { label: "Flywheel Lab", href: "/flywheel-lab" },
  { label: "About", href: "/about" },
];

export const ctaLink: NavLink = {
  label: "Let's Connect",
  href: "/work-with-me",
};
