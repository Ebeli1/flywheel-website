import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightFrontmatter = {
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2026-08-13"
  tags: string[];
  coverImage?: string; // path under /public, e.g. "/insights/flywheel-cover.jpg"
};

export type InsightMeta = InsightFrontmatter & {
  slug: string;
  readingTimeText: string;
};

function getInsightSlugs(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllInsightSlugs(): string[] {
  return getInsightSlugs();
}

export function getInsightBySlug(
  slug: string
): { meta: InsightMeta; content: string } | null {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    meta: {
      title: data.title,
      category: data.category,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags ?? [],
      slug,
      readingTimeText: stats.text,
    },
    content,
  };
}

export function getAllInsights(): InsightMeta[] {
  return getInsightSlugs()
    .map((slug) => getInsightBySlug(slug))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    .map((entry) => entry.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
