import Link from "next/link";
import { pasta, meat, pinsa } from "@/data/menu";
import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, type Locale } from "@/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const highlights = [
    { ...pasta.items[2], badge: dict.home.signature },
    { ...meat.items[2], badge: dict.home.premium },
    { ...pinsa.items[11], badge: dict.home.chefPick },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative text-center px-6 max-w-3xl">
          <p className="text-[#c41e3a] uppercase tracking-[0.3em] text-sm mb-6">
            {dict.hero.location}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl text-white mb-6">
            Ambra
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10">
            {dict.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/menu`}
              className="px-8 py-3 bg-[#c41e3a] text-white uppercase text-sm tracking-widest hover:bg-[#a01830] transition-colors"
            >
              {dict.hero.viewMenu}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-3 border border-white/40 text-white uppercase text-sm tracking-widest hover:border-[#c41e3a] hover:text-[#c41e3a] transition-colors"
            >
              {dict.hero.bookTable}
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle>{dict.home.highlights}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 border border-[#e0d8cf] hover:border-[#c41e3a]/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-widest text-[#c41e3a] mb-4 block">
                {item.badge}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2">
                {item.name}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="text-[#c41e3a] font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c41e3a] uppercase tracking-[0.3em] text-sm mb-6">
            {dict.home.philosophy}
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white leading-snug">
            &ldquo;{dict.home.philosophyQuote}&rdquo;
          </p>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle>{dict.home.freshPasta}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl mx-auto">
          {pasta.items.slice(0, 6).map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/menu`}
            className="inline-block px-8 py-3 border border-[#c41e3a] text-[#c41e3a] uppercase text-sm tracking-widest hover:bg-[#c41e3a] hover:text-white transition-colors"
          >
            {dict.home.viewFullMenu}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c41e3a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white mb-6">
            {dict.home.bookYourTable}
          </h2>
          <p className="text-white/80 mb-8 font-light">
            {dict.home.ctaText}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-10 py-4 bg-white text-[#c41e3a] uppercase text-sm tracking-widest font-bold hover:bg-[#f5f0e8] transition-colors"
          >
            {dict.home.contact}
          </Link>
        </div>
      </section>
    </main>
  );
}
