import type { Metadata } from "next";
import { allSections } from "@/data/menu";
import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, locales, type Locale, type Dictionary } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const alternateLanguages: Record<string, string> = {};
  for (const loc of locales) {
    alternateLanguages[loc] = `/${loc}/menu`;
  }

  return {
    title: dict.metadata.menuTitle,
    description: dict.metadata.menuDescription,
    alternates: {
      canonical: `/${locale}/menu`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${dict.metadata.menuTitle} | ${dict.metadata.siteName}`,
      description: dict.metadata.menuDescription,
      url: `/${locale}/menu`,
    },
    twitter: {
      title: `${dict.metadata.menuTitle} | ${dict.metadata.siteName}`,
      description: dict.metadata.menuDescription,
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="text-center py-16 bg-[#1a1a1a]">
        <p className="text-[#c41e3a] uppercase tracking-[0.3em] text-sm mb-4">
          {dict.menu.restaurant}
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white mb-4">
          {dict.menu.title}
        </h1>
        <p className="text-white/60 font-light max-w-xl mx-auto px-6">
          {dict.menu.subtitle}
        </p>
      </section>

      {/* Menu Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {allSections.map((section) => (
          <section key={section.title}>
            <SectionTitle>
              {dict.sections[section.title as keyof Dictionary["sections"]] || section.title}
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {section.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* Extras */}
        <section>
          <SectionTitle>{dict.menu.extras}</SectionTitle>
          <div className="max-w-md mx-auto bg-white p-8 border border-[#e0d8cf]">
            {[
              { name: dict.menu.bread, price: "2 €" },
              { name: dict.menu.gfBread, price: "3 €" },
              { name: dict.menu.aioli, price: "2 €" },
              { name: dict.menu.olives, price: "2 €" },
            ].map((item) => (
              <div key={item.name} className="flex justify-between py-2 border-b border-[#e0d8cf] last:border-0">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-bold text-[#c41e3a]">{item.price}</span>
              </div>
            ))}
            <p className="text-xs text-[#666] mt-4 text-center italic">
              {dict.menu.gfNote}
            </p>
          </div>
        </section>

        {/* Allergens note */}
        <p className="text-center text-sm text-[#666] italic max-w-2xl mx-auto">
          &ldquo;{dict.menu.allergens}&rdquo;
        </p>
      </div>
    </main>
  );
}
