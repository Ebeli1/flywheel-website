export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "audit",
    title: "Content-to-Community Audit",
    description:
      "A Content-to-Community Gap Report covering your SEO, content, community, and support.",
    href: "/work-with-me#audit",
  },
  {
    id: "pilot",
    title: "Flywheel Pilot",
    description: "Build the Flywheel in 30 Days — a working system, not a one-off project.",
    href: "/work-with-me#pilot",
  },
  {
    id: "retainer",
    title: "Growth Advisory",
    description: "Ongoing strategic advisory connecting search, content, community, and product.",
    href: "/work-with-me#retainer",
  },
];
