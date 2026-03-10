"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { locales, localeNames, localeFlags, type Locale, type Dictionary } from "@/i18n";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/menu`, label: dict.nav.menu },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.reservations },
  ];

  function switchLocalePath(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

  // Close lang dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#c41e3a]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white tracking-wider">
          AMBRA
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#c41e3a] transition-colors text-sm uppercase tracking-widest font-light"
            >
              {l.label}
            </Link>
          ))}

          {/* Desktop language dropdown */}
          <div ref={langRef} className="relative ml-4 border-l border-white/20 pl-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label={`${localeNames[locale]}. Change language`}
              aria-haspopup="true"
              aria-expanded={langOpen}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <span aria-hidden="true">{localeFlags[locale]}</span>
              <span className="uppercase tracking-widest text-xs">{locale}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-3 w-44 bg-[#1a1a1a] border border-white/10 shadow-xl"
              >
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={switchLocalePath(loc)}
                    role="menuitem"
                    aria-label={localeNames[loc]}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      loc === locale
                        ? "text-[#c41e3a] bg-white/5"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span aria-hidden="true" className="text-base">{localeFlags[loc]}</span>
                    <span>{localeNames[loc]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-[#c41e3a] text-sm uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile language switcher */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 mt-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={switchLocalePath(loc)}
                onClick={() => setMenuOpen(false)}
                aria-label={localeNames[loc]}
                className={`flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                  loc === locale
                    ? "border border-[#c41e3a] text-[#c41e3a]"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                <span aria-hidden="true" className="text-base">{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
