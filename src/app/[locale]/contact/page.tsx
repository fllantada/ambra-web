import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/i18n";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const alternateLanguages: Record<string, string> = {};
  for (const loc of locales) {
    alternateLanguages[loc] = `/${loc}/contact`;
  }

  return {
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDescription,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${dict.metadata.contactTitle} | ${dict.metadata.siteName}`,
      description: dict.metadata.contactDescription,
      url: `/${locale}/contact`,
    },
    twitter: {
      title: `${dict.metadata.contactTitle} | ${dict.metadata.siteName}`,
      description: dict.metadata.contactDescription,
    },
  };
}

export default async function ContactPage({
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
          {dict.contact.contactTitle}
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white mb-4">
          {dict.contact.title}
        </h1>
        <p className="text-white/60 font-light max-w-xl mx-auto px-6">
          {dict.contact.subtitle}
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <SectionTitle>{dict.contact.bookTable}</SectionTitle>
            <ContactForm dict={dict.contact} />
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <SectionTitle>{dict.contact.info}</SectionTitle>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="uppercase text-sm tracking-widest mb-2 font-semibold">{dict.contact.address}</h3>
                <p className="text-[#666] text-sm">Palma de Mallorca</p>
                <p className="text-[#666] text-sm">Islas Baleares, España</p>
              </div>
              <div>
                <h3 className="uppercase text-sm tracking-widest mb-2 font-semibold">{dict.contact.schedule}</h3>
                <p className="text-[#666] text-sm">{dict.contact.everyDay}</p>
                <p className="text-[#666] text-sm">{dict.contact.lunch}</p>
                <p className="text-[#666] text-sm">{dict.contact.dinner}</p>
              </div>
              <div>
                <h3 className="uppercase text-sm tracking-widest mb-2 font-semibold">{dict.contact.contactInfo}</h3>
                <p className="text-[#666] text-sm">info@ambra-restaurant.com</p>
                <p className="text-[#666] text-sm">+34 971 000 000</p>
              </div>
              <div className="p-6 bg-[#1a1a1a] text-center">
                <p className="text-[#c41e3a] uppercase tracking-[0.3em] text-xs mb-2">{dict.contact.tip}</p>
                <p className="text-white/70 text-sm font-light">
                  {dict.contact.tipText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
