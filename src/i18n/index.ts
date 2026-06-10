import type { Locale, Translations } from "./types";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-BR";
import { es } from "./locales/es";

export type { Locale, Translations };

export const locales: Locale[] = ["en", "pt-BR", "es"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT",
  es: "ES",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
  es: "Español",
};

export const translations: Record<Locale, Translations> = {
  en,
  "pt-BR": ptBR,
  es,
};

export const defaultLocale: Locale = "en";

export const STORAGE_KEY = "portfolio-locale";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;

  const lang = navigator.language;
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es";
  return "en";
}
