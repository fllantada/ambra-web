import type esDict from "./dictionaries/es.json";

export type Dictionary = typeof esDict;
export type Locale = "es" | "en" | "fr" | "de";

export const locales: Locale[] = ["es", "en", "fr", "de"];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
