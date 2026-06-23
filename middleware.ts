import { geolocation, next } from "@vercel/edge";

// Vercel Edge Middleware — runs at the edge before static files are served.
// Sends visitors to the French site (/fr/...) when EITHER their IP is in
// France OR their browser's primary language is French. A manual choice
// (pinkha_lang cookie, set by the language switcher) always wins, and known
// crawlers are never redirected so Google indexes both locales cleanly.

export const config = {
  // Run on every HTML route EXCEPT the French tree, Vercel internals, and
  // anything with a file extension (og.png, scripts, favicons…).
  matcher: "/((?!fr|_vercel|.*\\.).*)",
};

// Conservative crawler list — we skip auto-redirect for these.
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|whatsapp|telegram|slackbot|discordbot|googlebot|bingbot|duckduckbot|baiduspider|yandex|sogou|lighthouse|headless|chrome-lighthouse|google-inspectiontool/i;

function toFr(url: URL): Response {
  const dest = new URL(url);
  dest.pathname = url.pathname === "/" ? "/fr/" : `/fr${url.pathname}`;
  return Response.redirect(dest, 307);
}

export default function middleware(request: Request): Response {
  const url = new URL(request.url);

  // Defensive: never touch the French tree (matcher already excludes it).
  if (url.pathname === "/fr" || url.pathname.startsWith("/fr/")) return next();

  // 1. Respect a manual language choice (set by the switcher).
  const cookie = request.headers.get("cookie") ?? "";
  const choice = /(?:^|;\s*)pinkha_lang=(en|fr)/.exec(cookie)?.[1];
  if (choice === "en") return next();
  if (choice === "fr") return toFr(url);

  // 2. Don't auto-redirect crawlers — let them index / and /fr/ independently.
  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return next();

  // 3. France (geo) OR French as the browser's primary language → French.
  const { country } = geolocation(request);
  const accept = request.headers.get("accept-language") ?? "";
  const primaryLang = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const prefersFrench = country === "FR" || primaryLang.startsWith("fr");

  return prefersFrench ? toFr(url) : next();
}
