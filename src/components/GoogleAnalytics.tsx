"use client";

import Script from "next/script";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

// ─── Configuration ────────────────────────────────────────────────────────────

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const STORAGE_KEY = "interdocs_cookie_consent";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CookieConsentData {
  prefs: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  state: string;
  ts: number;
  expires: number;
}

// ─── Helper: check if analytics cookies are accepted ──────────────────────────

function getAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data: CookieConsentData = JSON.parse(raw);
    if (Date.now() > data.expires) return false;
    return data.prefs.analytics === true;
  } catch {
    return false;
  }
}

// ─── Helper: send GA4 event ───────────────────────────────────────────────────

function gtag(...args: unknown[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== "undefined" && (window as any).gtag) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag(...args);
  }
}

// ─── Exported helper for manual event tracking ────────────────────────────────

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  gtag("event", eventName, params);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const pathname = usePathname();

  // Check consent on mount and listen for changes (user updates cookie prefs)
  useEffect(() => {
    const checkConsent = () => {
      setConsentGiven(getAnalyticsConsent());
    };

    checkConsent();

    // Re-check when localStorage changes (e.g. user updates cookie preferences)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) checkConsent();
    };
    window.addEventListener("storage", handleStorage);

    // Also poll briefly in case the cookie banner saves within the same tab
    const interval = setInterval(checkConsent, 2000);
    const timeout = setTimeout(() => clearInterval(interval), 30000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (consentGiven && GA_MEASUREMENT_ID) {
      gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, consentGiven]);

  // Track conversion events (WhatsApp clicks, phone calls)
  const setupConversionTracking = useCallback(() => {
    if (!consentGiven || !GA_MEASUREMENT_ID) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";

      // Track WhatsApp clicks
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("whatsapp_click", {
          link_url: href,
          page_path: pathname || "/",
        });
      }

      // Track phone call clicks
      if (href.startsWith("tel:")) {
        trackEvent("phone_call_click", {
          phone_number: href.replace("tel:", ""),
          page_path: pathname || "/",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consentGiven, pathname]);

  useEffect(() => {
    const cleanup = setupConversionTracking();
    return cleanup;
  }, [setupConversionTracking]);

  // Don't render anything if no GA ID or no consent
  if (!GA_MEASUREMENT_ID || !consentGiven) return null;

  return (
    <>
      {/* Google Analytics 4 — Global Site Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  );
}
