import type { MetadataRoute } from "next";
import { CITIES, BLOG_POSTS, LOCALES } from "@/data/content";

const BASE_URL = "https://interdocs.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── Home pages ────────────────────────────────────────
  entries.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  });

  for (const locale of LOCALES) {
    if (locale !== "en") {
      entries.push({
        url: `${BASE_URL}/${locale}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  // ── City pages ────────────────────────────────────────
  for (const city of CITIES) {
    for (const [locale, localeSlug] of Object.entries(city.localeSlugs)) {
      const url =
        locale === "en"
          ? `${BASE_URL}/${localeSlug}/`
          : `${BASE_URL}/${locale}/${localeSlug}/`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.85 : 0.75,
      });
    }
  }

  // ── Blog index ────────────────────────────────────────
  entries.push({
    url: `${BASE_URL}/blog/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  });

  for (const locale of LOCALES) {
    if (locale !== "en") {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // ── Blog posts ────────────────────────────────────────
  for (const post of BLOG_POSTS) {
    for (const [locale, localeSlug] of Object.entries(post.localeSlugs)) {
      const url =
        locale === "en"
          ? `${BASE_URL}/blog/${localeSlug}/`
          : `${BASE_URL}/${locale}/blog/${localeSlug}/`;
      entries.push({
        url,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.7 : 0.6,
      });
    }
  }

  return entries;
}
