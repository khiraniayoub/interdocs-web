import type { MetadataRoute } from "next";
import { CITIES, BLOG_POSTS, LOCALES, SITE_URL } from "@/data/content";
import { PRESCRIPTION_PAGES } from "@/data/prescriptions";

const BASE_URL = SITE_URL;
const SITE_LAST_MODIFIED = new Date("2026-11-17T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── Home pages (with hreflang alternates) ───────────────
  const homeLanguages: Record<string, string> = {};
  for (const loc of LOCALES) {
    homeLanguages[loc] = loc === "en" ? `${BASE_URL}` : `${BASE_URL}/${loc}`;
  }

  entries.push({
    url: `${BASE_URL}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: { languages: homeLanguages },
  });

  for (const locale of LOCALES) {
    if (locale !== "en") {
      entries.push({
        url: `${BASE_URL}/${locale}`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: { languages: homeLanguages },
      });
    }
  }

  // ── English Online Prescription Pages (All Spain Hub + Top Destinations) ──
  for (const page of PRESCRIPTION_PAGES) {
    entries.push({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: page.isHub ? 0.92 : 0.85,
    });
  }

  // ── City pages (with hreflang alternates) ───────────────
  for (const city of CITIES) {
    const cityLanguages: Record<string, string> = {};
    for (const [loc, ls] of Object.entries(city.localeSlugs)) {
      cityLanguages[loc] =
        loc === "en" ? `${BASE_URL}/${ls}` : `${BASE_URL}/${loc}/${ls}`;
    }

    for (const [locale, localeSlug] of Object.entries(city.localeSlugs)) {
      const url =
        locale === "en"
          ? `${BASE_URL}/${localeSlug}`
          : `${BASE_URL}/${locale}/${localeSlug}`;
      entries.push({
        url,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.85 : 0.75,
        alternates: { languages: cityLanguages },
      });
    }
  }

  // ── Blog index (with hreflang alternates) ───────────────
  const blogIndexLanguages: Record<string, string> = {};
  for (const loc of LOCALES) {
    blogIndexLanguages[loc] =
      loc === "en" ? `${BASE_URL}/blog` : `${BASE_URL}/${loc}/blog`;
  }

  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: { languages: blogIndexLanguages },
  });

  for (const locale of LOCALES) {
    if (locale !== "en") {
      entries.push({
        url: `${BASE_URL}/${locale}/blog`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: { languages: blogIndexLanguages },
      });
    }
  }

  // ── Blog posts (with hreflang alternates) ───────────────
  for (const post of BLOG_POSTS) {
    const postLanguages: Record<string, string> = {};
    for (const [loc, ls] of Object.entries(post.localeSlugs)) {
      postLanguages[loc] =
        loc === "en"
          ? `${BASE_URL}/blog/${ls}`
          : `${BASE_URL}/${loc}/blog/${ls}`;
    }

    const postLastMod = post.dateModified
      ? new Date(post.dateModified)
      : post.date
      ? new Date(post.date)
      : SITE_LAST_MODIFIED;

    for (const [locale, localeSlug] of Object.entries(post.localeSlugs)) {
      const url =
        locale === "en"
          ? `${BASE_URL}/blog/${localeSlug}`
          : `${BASE_URL}/${locale}/blog/${localeSlug}`;
      entries.push({
        url,
        lastModified: postLastMod,
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.7 : 0.6,
        alternates: { languages: postLanguages },
      });
    }
  }

  return entries;
}
