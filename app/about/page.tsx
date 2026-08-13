import Navbar from "@/components/layout/Navbar";
import AboutPreview from "@/components/home/AboutPreview";

// Placeholder About page — unblocks the "More about Ngozi" CTA. Expand
// with a fuller personal story, timeline, and photos later.
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPreview />
      </main>
    </>
  );
}
