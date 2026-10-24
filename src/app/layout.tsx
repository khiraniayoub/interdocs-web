import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL } from "@/data/content";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "24/7 Doctor & Urgent Care Near You | Marbella & Costa del Sol — Interdocs Medical",
    template: "%s | Urgent Care 24H · Interdocs Medical",
  },
  description:
    "Urgent care near you: English-speaking private doctor visits your hotel room, villa or apartment in Marbella & Costa del Sol in 30–60 min. Call 24/7.",
  metadataBase: new URL(SITE_URL),
  // ── Canonical & alternates ──────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": `${SITE_URL}/`,
      "es": `${SITE_URL}/es/`,
      "de": `${SITE_URL}/de/`,
      "fr": `${SITE_URL}/fr/`,
      "fi": `${SITE_URL}/fi/`,
      "ar": `${SITE_URL}/ar/`,
      "no": `${SITE_URL}/no/`,
      "da": `${SITE_URL}/da/`,
      "sv": `${SITE_URL}/sv/`,
      "ru": `${SITE_URL}/ru/`,
      "nl": `${SITE_URL}/nl/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  // ── OpenGraph ───────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Urgent Care 24H — Interdocs Medical",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Private Doctor Home Visit Costa del Sol — Interdocs Medical",
      },
    ],
  },
  // ── Twitter ─────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@urgentcare24h",
  },
  // ── Robots ──────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // ── Icons ───────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/mi_logo.webp",
    shortcut: "/favicon.ico",
  },
  // ── Manifest ────────────────────────────────────────
  manifest: "/site.webmanifest",
  // ── Extra SEO ───────────────────────────────────────
  keywords: [
    "urgent care costa del sol",
    "urgent care malaga",
    "urgent care marbella",
    "hotel doctor marbella",
    "hotel doctor costa del sol",
    "doctor to hotel room",
    "english speaking doctor marbella",
    "private doctor costa del sol",
    "fit to fly certificate marbella",
    "emergency doctor tourist spain",
    "doctor hotel benalmadena",
    "doctor hotel fuengirola",
    "puerto banus doctor",
    "visita medica hotel marbella",
    "medico domicilio costa del sol",
    "interdocs medical",
    "interdocs medical costa del sol",
  ],
  // ── Google Search Console Verification ──────────────
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "9c413d8a69c4d485",
  },
  authors: [{ name: "Interdocs Medical · Urgent Care 24H", url: SITE_URL }],
  creator: "Interdocs Medical",
  publisher: "Interdocs Medical",
  category: "health",
};

import { headers } from "next/headers";

const LOCALE_MAP: Record<string, string> = {
  es: "es",
  de: "de",
  fr: "fr",
  fi: "fi",
  ar: "ar",
  no: "no",
  da: "da",
  sv: "sv",
  ru: "ru",
  nl: "nl",
};

function getLangFromPath(pathname: string): string {
  const segment = pathname.split("/")[1];
  return LOCALE_MAP[segment] ?? "en";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? headersList.get("x-invoke-path") ?? "/";
  const lang = getLangFromPath(pathname);

  return (
    <html lang={lang} className={outfit.variable} data-scroll-behavior="smooth" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="theme-color" content="#0A6EBD" />
        {/* ── Geo / Local SEO meta tags ─────────────────── */}
        <meta name="geo.region" content="ES-MA" />
        <meta name="geo.placename" content="Málaga, Costa del Sol, Spain" />
        <meta name="geo.position" content="36.7213;-4.4214" />
        <meta name="ICBM" content="36.7213, -4.4214" />
        {/* ── Performance hints ─────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <FloatingCTA locale={lang} />
        <CookieBanner locale={lang} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
