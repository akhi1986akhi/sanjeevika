"use client";

/**
 * Header — sticky nav that starts fully transparent over the hero and
 * locks to a fixed, light (cream) bar with a soft shadow once the page
 * has scrolled past the hero. Matches the reference <header>/<nav> markup
 * 1:1 in content, rebuilt with Tailwind v4 utilities from the Mamta
 * theme tokens (styles/mamta_theme.css).
 */

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#doctors", label: "Doctors" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/95 shadow-call backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-4">
        {/* ---------------- Brand ---------------- */}
        <a href="#" className="flex items-center gap-3">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle
              cx="21"
              cy="21"
              r="20"
              fill="#fff"
              stroke="#f0d3de"
              strokeWidth="1.5"
            />
            <path
              d="M21 12c-3.5 0-6 2.6-6 6 0 2.4 1.3 4.1 3 5.4v3.1c0 .6.5 1 1 1h4c.5 0 1-.4 1-1v-3.1c1.7-1.3 3-3 3-5.4 0-3.4-2.5-6-6-6z"
              fill="#c21858"
            />
            <path
              d="M14.5 30c1-3 3.6-5 6.5-5s5.5 2 6.5 5"
              stroke="#1c7a6e"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="text-[1.28rem] leading-[1.1] font-bold text-ink">
            Sanjeevika
            <span className="mt-0.5 block font-sans text-[0.62rem] font-medium tracking-[0.06em] text-ink-soft">
              MOTHER &amp; CHILD CARE
            </span>
          </div>
        </a>

        {/* ---------------- Desktop links ---------------- */}
        <nav className="hidden items-center gap-[34px] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="btn-nav-cta hidden md:inline-flex"
            href="tel:+919453022762"
          >
            Call Now
          </a>

          {/* ---------------- Mobile toggle ---------------- */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 flex-none items-center justify-center rounded-full border border-line bg-paper/80 text-ink md:hidden"
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute inset-x-0 top-0 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ---------------- Mobile panel ---------------- */}
      <div
        className={`overflow-hidden bg-cream/98 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-64 border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="wrap flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-2 py-3 text-[0.98rem] font-medium text-ink-soft transition-colors hover:bg-blush hover:text-rose"
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn-primary mt-2 justify-center"
            href="tel:+919453022762"
            onClick={() => setMenuOpen(false)}
          >
            📞 Call 94530 22762
          </a>
        </nav>
      </div>
    </header>
  );
}