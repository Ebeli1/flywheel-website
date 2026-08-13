import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllInsightSlugs, getInsightBySlug } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = getInsightBySlug(params.slug);
  if (!entry) return {};
  return {
    title: `${entry.meta.title} | Content-to-Community Flywheel`,
    description: entry.meta.excerpt,
    openGraph: {
      title: entry.meta.title,
      description: entry.meta.excerpt,
      type: "article",
      publishedTime: entry.meta.date,
    },
  };
}

export default function InsightArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getInsightBySlug(params.slug);

  // Article not written yet — friendly placeholder instead of a hard 404,
  // since this slug is likely already linked from the homepage preview.
  if (!entry) {
    return (
      <>
        <Navbar />
        <main className="container-content py-20 text-center">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
            Coming Soon
          </p>
          <h1 className="mx-auto mt-3 max-w-xl font-sans text-[2rem] font-extrabold text-navy">
            This article is still being written.
          </h1>
          <a
            href="/insights"
            className="focus-ring mt-6 inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-navy underline decoration-teal decoration-2 underline-offset-4"
          >
            Back to all insights <span aria-hidden="true">→</span>
          </a>
        </main>
        <Footer />
      </>
    );
  }

  const { meta, content } = entry;

  return (
    <>
      <Navbar />
      <main className="container-content max-w-3xl py-16 md:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="font-sans text-[13px] text-charcoal/50">
          <a href="/" className="hover:text-navy">Home</a>
          <span className="mx-2" aria-hidden="true">/</span>
          <a href="/insights" className="hover:text-navy">Insights</a>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-charcoal/70">{meta.title}</span>
        </nav>

        <p className="mt-6 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-teal">
          {meta.category}
        </p>
        <h1 className="mt-3 font-sans text-[2rem] font-extrabold leading-tight text-navy sm:text-[2.5rem]">
          {meta.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 font-sans text-[13px] text-charcoal/50">
          <time dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTimeText}</span>
        </div>

        {/* Article body */}
        <article className="prose prose-headings:font-sans prose-headings:text-navy prose-p:font-sans prose-p:text-charcoal/80 prose-p:leading-relaxed prose-a:text-teal prose-strong:text-navy mt-10 max-w-none">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>

        {/* Tags */}
        {meta.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-navy/10 pt-6">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy/5 px-3 py-1 font-sans text-[12px] font-semibold text-navy/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
