"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, localeNames, type Locale, type Dictionary } from "@/i18n";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/menu`, label: dict.nav.menu },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.reservations },
  ];

  function switchLocalePath(newLocale: Locale) {
    // Replace current locale in path
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

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

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-4 border-l border-white/20 pl-4">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={switchLocalePath(loc)}
                className={`text-xs px-2 py-1 transition-colors ${
                  loc === locale
                    ? "text-[#c41e3a] font-bold"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-[#c41e3a] text-sm uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-2 pt-3 border-t border-white/10 mt-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={switchLocalePath(loc)}
                onClick={() => setOpen(false)}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  loc === locale
                    ? "border-[#c41e3a] text-[#c41e3a]"
                    : "border-white/20 text-white/50 hover:text-white/80"
                }`}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
