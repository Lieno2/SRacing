import { derived, writable } from "svelte/store";
import translations from "./translations.js"; 

type Locale = keyof typeof translations;
type TranslationKey = keyof typeof translations['en'];

export const locale = writable<Locale>("it");
export const locales = Object.keys(translations) as Locale[];

function translate(locale: Locale, key: string, vars: Record<string, string> = {}): string {
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    let text: string = translations[locale]?.[key as TranslationKey];

    if (!text) {
        console.warn(`no translation found for ${locale}.${key}`);
        return key; // fallback alla chiave invece di crashare
    }

    Object.keys(vars).forEach((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(locale, ($locale) => (key: string, vars: Record<string, string> = {}) =>
    translate($locale, key, vars)
);