import SectionTitle from "@/components/SectionTitle";
import { getDictionary, type Locale } from "@/i18n";

export default async function AboutPage({
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
          {dict.about.ourStory}
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white mb-4">
          {dict.about.title}
        </h1>
        <p className="text-white/60 font-light max-w-xl mx-auto px-6">
          {dict.about.subtitle}
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {/* Story */}
        <section>
          <SectionTitle>{dict.about.essenceTitle}</SectionTitle>
          <div className="space-y-6 text-[#666] leading-relaxed max-w-3xl mx-auto">
            <p>{dict.about.essenceP1}</p>
            <p>{dict.about.essenceP2}</p>
            <p>{dict.about.essenceP3}</p>
          </div>
        </section>

        {/* Values */}
        <section>
          <SectionTitle>{dict.about.valuesTitle}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: dict.about.tradition, text: dict.about.traditionText },
              { title: dict.about.quality, text: dict.about.qualityText },
              { title: dict.about.passion, text: dict.about.passionText },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">{v.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="bg-[#1a1a1a] -mx-6 px-6 py-16 text-center">
          <p className="text-[#c41e3a] uppercase tracking-[0.3em] text-sm mb-4">
            {dict.about.findUs}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-4">
            Palma de Mallorca
          </h2>
          <p className="text-white/60 font-light">
            {dict.about.locationText}
          </p>
        </section>
      </div>
    </main>
  );
}
