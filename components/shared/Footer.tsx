"use client";

/**
 * Footer — dark-theme footer (bg-ink) extending the reference page's
 * minimal <footer>, rebuilt with Tailwind v4 utilities from the Mamta
 * theme tokens (styles/mamta_theme.css). Adds icon-led contact rows,
 * an email address, a legal row (Terms / Privacy), and a soft
 * rose/teal glow so the dark section doesn't feel flat.
 */

import { Clock, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const QUICK_LINKS = [
  { href: "#doctors", label: "Doctors" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const CARE_AREAS = [
  { href: "#services", label: "Women's & maternity care" },
  { href: "#services", label: "Child & newborn care" },
];

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex size-9 flex-none items-center justify-center rounded-sm bg-white/8 text-[#f2b6cd]">
        {icon}
      </span>
      <span className="pt-1.5 text-[0.9rem] leading-snug text-[#c9b9c0]">
        {children}
      </span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-[#eadfe3]">
      {/* ---------------- Decorative top accent + glow ---------------- */}
      <div className="h-[3px] w-full bg-gradient-to-r from-rose-deep via-rose to-teal-deep" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 size-72 rounded-full bg-rose/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-teal/20 blur-[100px]"
      />

      <div className="wrap relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.75fr_0.75fr_1.1fr] lg:gap-8">
        {/* ---------------- Brand ---------------- */}
        <div>
          <div className="flex items-center gap-3">
            <svg width="30" height="30" viewBox="0 0 42 42" fill="none">
              <circle
                cx="21"
                cy="21"
                r="20"
                fill="#3a2530"
                stroke="#5c4650"
                strokeWidth="1.5"
              />
              <path
                d="M21 12c-3.5 0-6 2.6-6 6 0 2.4 1.3 4.1 3 5.4v3.1c0 .6.5 1 1 1h4c.5 0 1-.4 1-1v-3.1c1.7-1.3 3-3 3-5.4 0-3.4-2.5-6-6-6z"
                fill="#e6538f"
              />
              <path
                d="M14.5 30c1-3 3.6-5 6.5-5s5.5 2 6.5 5"
                stroke="#4fc4b0"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="font-serif text-[1.15rem] font-semibold text-white">
              Sanjeevika
              <span className="mt-0.5 block font-sans text-[0.6rem] font-medium tracking-[0.08em] text-[#c9b9c0]">
                MOTHER &amp; CHILD CARE
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-[34ch] text-[0.92rem] leading-relaxed text-[#c9b9c0]">
            Gynaecology and paediatric care together under one roof in
            Rapti Nagar, Gorakhpur — led by Dr. Ruby Verma and Dr. Ashish
            Verma.
          </p>
        </div>

        {/* ---------------- Quick links ---------------- */}
        <div>
          <h4 className="text-[0.82rem] font-semibold tracking-[0.02em] text-white">
            Quick links
          </h4>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9rem] text-[#c9b9c0] transition-colors hover:text-[#f2b6cd]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Care areas ---------------- */}
        <div>
          <h4 className="text-[0.82rem] font-semibold tracking-[0.02em] text-white">
            Care areas
          </h4>
          <ul className="mt-4 flex flex-col gap-3">
            {CARE_AREAS.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-[0.9rem] text-[#c9b9c0] transition-colors hover:text-[#7fd9c8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Visit & call ---------------- */}
        <div>
          <h4 className="text-[0.82rem] font-semibold tracking-[0.02em] text-white">
            Visit &amp; call
          </h4>
          <ul className="mt-4 flex flex-col gap-4">
            <ContactRow icon={<MapPin size={16} />}>
              Shop No. 102, A-5 Rapti Nagar, Phase-2, Gorakhpur – 273013
            </ContactRow>
            <ContactRow icon={<Phone size={16} />}>
              <a href="tel:+919453022762" className="hover:text-[#f2b6cd]">
                94530 22762
              </a>{" "}
              /{" "}
              <a href="tel:+919214216616" className="hover:text-[#f2b6cd]">
                92142 16616
              </a>
            </ContactRow>
            <ContactRow icon={<Mail size={16} />}>
              <a
                href="mailto:care@sanjeevkamothernchildcare.com"
                className="break-all hover:text-[#f2b6cd]"
              >
                care@sanjeevkamothernchildcare.com
              </a>
            </ContactRow>
            <ContactRow icon={<Clock size={16} />}>
              Open all days — call ahead to confirm timing
            </ContactRow>
          </ul>
        </div>
      </div>

      {/* ---------------- Bottom bar ---------------- */}
      <div className="relative border-t border-white/10">
        <div className="wrap flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.82rem] text-[#b6a3ac]">
            © 2026 Sanjeevika Mother &amp; Child Care. All information for
            reference — please call to confirm timings.
          </p>

          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] text-[#b6a3ac] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Back to top"
              className="flex size-9 flex-none items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-rose hover:text-rose"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}