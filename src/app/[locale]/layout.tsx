import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const localeToOg: Record<string, string> = {
  es: "es_ES",
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const alternateLanguages: Record<string, string> = {};
  for (const loc of locales) {
    alternateLanguages[loc] = `/${loc}`;
  }

  return {
    title: {
      template: `%s | ${dict.metadata.siteName}`,
      default: `${dict.metadata.homeTitle} | ${dict.metadata.siteName}`,
    },
    description: dict.metadata.siteDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: dict.metadata.siteName,
      description: dict.metadata.siteDescription,
      url: `/${locale}`,
      siteName: dict.metadata.siteName,
      locale: localeToOg[locale] || "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.siteName,
      description: dict.metadata.siteDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Navbar locale={locale as Locale} dict={dict} />
      {children}
      <Footer dict={dict} />
    </>
  );
}
