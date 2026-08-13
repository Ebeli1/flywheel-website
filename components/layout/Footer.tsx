import { primaryNav } from "@/data/navigation";

// TODO: replace with your real LinkedIn URL and contact email.
const LINKEDIN_URL = "https://www.linkedin.com/in/ngozi-chizaram";
const CONTACT_EMAIL = "chizaramngozi@gmail.com";

const footerLinks = [
  ...primaryNav,
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy py-16">
      <div className="container-content">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <p className="font-sans text-[15px] font-extrabold uppercase leading-tight tracking-tight text-cream">
              Content-to-Community
              <br />
              Flywheel<span className="align-super text-[9px]">™</span>
            </p>
            <div className="mt-4 space-y-0.5 font-sans text-[13px] leading-relaxed text-cream/50">
              <p>From search to trust.</p>
              <p>From trust to community.</p>
              <p>From community to growth.</p>
            </div>
            <p className="mt-4 font-sans text-[13px] text-cream/40">
              Built and explored by Ngozi Chizaram.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-sm font-sans text-[14px] text-cream/60 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-5 lg:flex-col lg:gap-3">
            <a
              href={LINKEDIN_URL}
              className="focus-ring rounded-sm font-sans text-[14px] text-cream/60 transition-colors hover:text-cream"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="focus-ring rounded-sm font-sans text-[14px] text-cream/60 transition-colors hover:text-cream"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/10 pt-6 font-sans text-[12px] text-cream/35">
          © {new Date().getFullYear()} Ngozi Chizaram
        </p>
      </div>
    </footer>
  );
}
