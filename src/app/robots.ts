import type { MetadataRoute } from "next";

/**
 * Generates robots.txt dynamically via Next.js App Router.
 * This replaces the static public/robots.txt file.
 * Delete public/robots.txt after verifying this works.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://interdoc.es/sitemap.xml",
  };
}
