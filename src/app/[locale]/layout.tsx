import { getDictionary, locales, type Locale } from "@/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
