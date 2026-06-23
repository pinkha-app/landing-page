import { ui, defaultLang, type Lang } from "./ui";

/** Detect the active locale from the URL (e.g. /fr/privacy → "fr"). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  if (seg === "fr") return "fr";
  return defaultLang;
}

/** Return the string table for a locale. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Strip a leading /fr segment, yielding the prefix-free (EN) path. */
export function barePath(pathname: string): string {
  const p = pathname.replace(/^\/fr(?=\/|$)/, "");
  return p === "" ? "/" : p;
}

/** Map any path to its equivalent in the target locale. */
export function localizePath(pathname: string, lang: Lang): string {
  const bare = barePath(pathname);
  if (lang === defaultLang) return bare;
  return bare === "/" ? "/fr/" : `/fr${bare}`;
}
