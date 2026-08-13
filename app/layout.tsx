import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Content-to-Community Flywheel™ | Ngozi Chizaram",
  description:
    "SEO shouldn't end with a click. It should start a relationship. Ngozi Chizaram helps Web3 and EdTech organizations connect SEO, AI, customer education, and community to turn search attention into trust, engagement, adoption, and sustainable growth.",
  openGraph: {
    title: "Content-to-Community Flywheel™ | Ngozi Chizaram",
    description:
      "SEO shouldn't end with a click. It should start a relationship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
