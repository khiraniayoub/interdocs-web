import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL } from "@/data/content";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Doctor at Your Hotel | Private Doctor Costa del Sol | Interdocs",
    template: "%s | Interdocs",
  },
  description:
    "Private English-speaking doctors available 24/7 for tourists across Costa del Sol. Fast hotel & home visits in Málaga and Marbella. Call or WhatsApp now.",
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
      "x-default": `${SITE_URL}/`,
    },
  },
  // ── OpenGraph ───────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Interdocs",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Private Doctor Home Visit Costa del Sol",
      },
    ],
  },
  // ── Twitter ─────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@interdocs_es",
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
    "private doctor costa del sol",
    "doctor hotel malaga",
    "home visit doctor marbella",
    "english speaking doctor spain",
    "emergency doctor tourist spain",
    "visita medica domicilio malaga",
    "doctor fuengirola",
    "medico turistico costa del sol",
  ],
  authors: [{ name: "Interdocs", url: SITE_URL }],
  creator: "Interdocs",
  publisher: "Interdocs",
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
    <html lang={lang} className={outfit.variable} data-scroll-behavior="smooth">
      <head>
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
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <FloatingCTA locale={lang} />
        <CookieBanner locale={lang} />
      </body>
    </html>
  );
}
