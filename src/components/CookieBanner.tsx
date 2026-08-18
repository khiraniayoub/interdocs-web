"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

type ConsentState = "pending" | "accepted" | "rejected" | "custom";

// ─── Translations ─────────────────────────────────────────────────────────────

const t: Record<string, Record<string, string>> = {
  en: {
    title: "We value your privacy",
    description:
      "We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. You can manage your preferences below.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    savePrefs: "Save Preferences",
    customise: "Customise",
    necessary: "Necessary",
    necessaryDesc:
      "Essential for the website to function properly. Cannot be disabled.",
    analytics: "Analytics",
    analyticsDesc:
      "Help us understand how visitors interact with our site (e.g. Google Analytics). No personal data is shared.",
    marketing: "Marketing",
    marketingDesc:
      "Used to deliver relevant advertisements and track campaign effectiveness.",
    learnMore: "Privacy Policy",
    badge: "Cookie Settings",
    alwaysOn: "Always on",
  },
  es: {
    title: "Valoramos tu privacidad",
    description:
      "Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puedes gestionar tus preferencias a continuación.",
    acceptAll: "Aceptar todas",
    rejectAll: "Rechazar todas",
    savePrefs: "Guardar preferencias",
    customise: "Personalizar",
    necessary: "Necesarias",
    necessaryDesc:
      "Esenciales para el correcto funcionamiento del sitio web. No se pueden desactivar.",
    analytics: "Analítica",
    analyticsDesc:
      "Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio (ej. Google Analytics). No se comparten datos personales.",
    marketing: "Marketing",
    marketingDesc:
      "Utilizadas para mostrar publicidad relevante y medir la efectividad de las campañas.",
    learnMore: "Política de privacidad",
    badge: "Configuración de cookies",
    alwaysOn: "Siempre activas",
  },
  de: {
    title: "Wir schätzen Ihre Privatsphäre",
    description:
      "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, den Website-Traffic zu analysieren und Inhalte zu personalisieren.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    savePrefs: "Einstellungen speichern",
    customise: "Anpassen",
    necessary: "Notwendig",
    necessaryDesc:
      "Für die einwandfreie Funktion der Website unerlässlich. Kann nicht deaktiviert werden.",
    analytics: "Analyse",
    analyticsDesc:
      "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
    marketing: "Marketing",
    marketingDesc:
      "Werden verwendet, um relevante Werbung zu schalten und die Kampagneneffektivität zu verfolgen.",
    learnMore: "Datenschutzrichtlinie",
    badge: "Cookie-Einstellungen",
    alwaysOn: "Immer aktiv",
  },
  fr: {
    title: "Nous respectons votre vie privée",
    description:
      "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic et personnaliser le contenu.",
    acceptAll: "Tout accepter",
    rejectAll: "Tout refuser",
    savePrefs: "Enregistrer les préférences",
    customise: "Personnaliser",
    necessary: "Nécessaires",
    necessaryDesc:
      "Indispensables au bon fonctionnement du site. Ne peuvent pas être désactivés.",
    analytics: "Analytique",
    analyticsDesc:
      "Nous aident à comprendre comment les visiteurs interagissent avec notre site.",
    marketing: "Marketing",
    marketingDesc:
      "Utilisés pour diffuser des publicités pertinentes et mesurer l'efficacité des campagnes.",
    learnMore: "Politique de confidentialité",
    badge: "Paramètres des cookies",
    alwaysOn: "Toujours actif",
  },
  fi: {
    title: "Arvostamme yksityisyyttäsi",
    description:
      "Käytämme evästeitä parantaaksemme selauskokemustasi, analysoidaksemme sivuston liikennettä ja personoidaksemme sisältöä.",
    acceptAll: "Hyväksy kaikki",
    rejectAll: "Hylkää kaikki",
    savePrefs: "Tallenna asetukset",
    customise: "Mukauta",
    necessary: "Välttämättömät",
    necessaryDesc:
      "Välttämättömiä verkkosivuston asianmukaiselle toiminnalle. Ei voida poistaa käytöstä.",
    analytics: "Analytiikka",
    analyticsDesc:
      "Auttaa meitä ymmärtämään, miten kävijät vuorovaikuttavat sivustomme kanssa.",
    marketing: "Markkinointi",
    marketingDesc:
      "Käytetään relevanttien mainosten näyttämiseen ja kampanjoiden tehokkuuden seurantaan.",
    learnMore: "Tietosuojakäytäntö",
    badge: "Evästeasetukset",
    alwaysOn: "Aina päällä",
  },
  ar: {
    title: "نحن نقدر خصوصيتك",
    description:
      "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة الموقع وتخصيص المحتوى.",
    acceptAll: "قبول الكل",
    rejectAll: "رفض الكل",
    savePrefs: "حفظ التفضيلات",
    customise: "تخصيص",
    necessary: "ضرورية",
    necessaryDesc: "ضرورية لعمل الموقع بشكل صحيح. لا يمكن تعطيلها.",
    analytics: "تحليلات",
    analyticsDesc:
      "تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا (مثل Google Analytics).",
    marketing: "تسويق",
    marketingDesc: "تُستخدم لعرض الإعلانات ذات الصلة وقياس فعالية الحملات.",
    learnMore: "سياسة الخصوصية",
    badge: "إعدادات ملفات تعريف الارتباط",
    alwaysOn: "دائماً مفعّل",
  },
  no: {
    title: "Vi verdsetter personvernet ditt",
    description:
      "Vi bruker informasjonskapsler for å forbedre nettleseropplevelsen din, analysere trafikk og tilpasse innhold.",
    acceptAll: "Godta alle",
    rejectAll: "Avvis alle",
    savePrefs: "Lagre preferanser",
    customise: "Tilpass",
    necessary: "Nødvendige",
    necessaryDesc:
      "Nødvendige for at nettstedet skal fungere korrekt. Kan ikke deaktiveres.",
    analytics: "Analyse",
    analyticsDesc:
      "Hjelper oss å forstå hvordan besøkende samhandler med nettstedet vårt.",
    marketing: "Markedsføring",
    marketingDesc:
      "Brukes til å vise relevante annonser og spore kampanjeeffektivitet.",
    learnMore: "Personvernerklæring",
    badge: "Informasjonskapselinnstillinger",
    alwaysOn: "Alltid på",
  },
  da: {
    title: "Vi respekterer dit privatliv",
    description:
      "Vi bruger cookies til at forbedre din browsing-oplevelse, analysere trafik og personalisere indhold.",
    acceptAll: "Accepter alle",
    rejectAll: "Afvis alle",
    savePrefs: "Gem præferencer",
    customise: "Tilpas",
    necessary: "Nødvendige",
    necessaryDesc:
      "Nødvendige for at hjemmesiden fungerer korrekt. Kan ikke deaktiveres.",
    analytics: "Analyse",
    analyticsDesc:
      "Hjælper os med at forstå, hvordan besøgende interagerer med vores side.",
    marketing: "Markedsføring",
    marketingDesc:
      "Bruges til at vise relevante annoncer og spore kampagneeffektivitet.",
    learnMore: "Privatlivspolitik",
    badge: "Cookie-indstillinger",
    alwaysOn: "Altid aktiv",
  },
  sv: {
    title: "Vi värnar om din integritet",
    description:
      "Vi använder cookies för att förbättra din surfupplevelse, analysera trafik och anpassa innehåll.",
    acceptAll: "Acceptera alla",
    rejectAll: "Avvisa alla",
    savePrefs: "Spara inställningar",
    customise: "Anpassa",
    necessary: "Nödvändiga",
    necessaryDesc:
      "Nödvändiga för att webbplatsen ska fungera korrekt. Kan inte inaktiveras.",
    analytics: "Analys",
    analyticsDesc:
      "Hjälper oss att förstå hur besökare interagerar med vår webbplats.",
    marketing: "Marknadsföring",
    marketingDesc:
      "Används för att visa relevanta annonser och spåra kampanjeffektivitet.",
    learnMore: "Integritetspolicy",
    badge: "Cookie-inställningar",
    alwaysOn: "Alltid aktiv",
  },
};

const KNOWN_LOCALES = ["es", "de", "fr", "fi", "ar", "no", "da", "sv"];

const STORAGE_KEY = "interdocs_cookie_consent";
const EXPIRY_DAYS = 180;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function saveConsent(prefs: CookiePreferences, state: ConsentState) {
  const payload = {
    prefs,
    state,
    ts: Date.now(),
    expires: Date.now() + EXPIRY_DAYS * 86_400_000,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore in SSR / private browsing
  }
}

function loadConsent(): { prefs: CookiePreferences; state: ConsentState } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() > data.expires) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent
        transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#0A6EBD] focus-visible:ring-offset-2
        ${disabled ? "cursor-not-allowed opacity-70" : ""}
        ${checked ? "bg-[#0A6EBD]" : "bg-slate-200"}
      `}
      style={{ minWidth: 44 }}
    >
      <span
        className={`
          pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md
          ring-0 transition-transform duration-300 ease-in-out
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}

// ─── Category Row ─────────────────────────────────────────────────────────────

function CategoryRow({
  id,
  label,
  desc,
  checked,
  onChange,
  disabled,
  alwaysOnLabel,
}: {
  id: string;
  label: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  alwaysOnLabel: string;
}) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-600 text-slate-800">{label}</span>
          {disabled && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-600 bg-[#0A6EBD]/10 text-[#0A6EBD] uppercase tracking-wide">
              {alwaysOnLabel}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
      <Toggle
        id={`cookie-toggle-${id}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

// ─── Main Banner ──────────────────────────────────────────────────────────────

export default function CookieBanner({ locale = "en" }: { locale?: string }) {
  // usePathname() is reactive: it updates on every client-side navigation,
  // so the banner language always reflects the current route automatically.
  const pathname = usePathname();
  const pathSegment = pathname?.split("/").find(Boolean) ?? "";
  const activeLocale = KNOWN_LOCALES.includes(pathSegment) ? pathSegment : "en";

  const lang = t[activeLocale] ?? t["en"];
  const isRTL = activeLocale === "ar";

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Load saved consent on mount
  useEffect(() => {
    const saved = loadConsent();
    if (!saved) {
      // Small delay so the banner animates in after the page loads
      const timer = setTimeout(() => {
        setVisible(true);
        setAnimating(true);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setPrefs(saved.prefs);
      setBadgeVisible(true);
    }
  }, []);

  const dismiss = useCallback(
    (finalPrefs: CookiePreferences, state: ConsentState) => {
      setAnimating(false);
      setTimeout(() => {
        setVisible(false);
        setBadgeVisible(true);
        saveConsent(finalPrefs, state);
      }, 400);
    },
    []
  );

  const handleAcceptAll = () => {
    const all: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPrefs(all);
    dismiss(all, "accepted");
  };

  const handleRejectAll = () => {
    const none: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPrefs(none);
    dismiss(none, "rejected");
  };

  const handleSave = () => {
    dismiss(prefs, "custom");
  };

  const openBanner = () => {
    setBadgeVisible(false);
    setVisible(true);
    setTimeout(() => setAnimating(true), 10);
  };

  if (!visible && !badgeVisible) return null;

  return (
    <>
      {/* ── Cookie Consent Banner ─────────────────────────── */}
      {visible && (
        <div
          dir={isRTL ? "rtl" : "ltr"}
          aria-live="polite"
          aria-label="Cookie consent"
          role="dialog"
          aria-modal="false"
          className={`
            fixed bottom-0 left-0 right-0 z-[9999]
            transition-all duration-500 ease-out
            ${animating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
        >
          {/* Backdrop blur at bottom */}
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative mx-auto max-w-5xl m-3 sm:m-4">
            {/* Glass card */}
            <div
              className="
                relative overflow-hidden rounded-2xl
                bg-white/95 backdrop-blur-xl
                border border-slate-200/80
                shadow-[0_-4px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset]
              "
            >
              {/* Decorative gradient top strip */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A6EBD] via-[#25D366] to-[#0ea5e9]" />

              <div className="px-5 py-5 sm:px-7 sm:py-6">
                {/* Header row */}
                <div className="flex items-start gap-3 mb-4">
                  {/* Cookie icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A6EBD]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#0A6EBD]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A10.083 10.083 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.003-.146a1.001 1.001 0 0 0-.399-.79zM12 20c-4.411 0-8-3.589-8-8a8.06 8.06 0 0 1 5.966-7.775A5.008 5.008 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 3.999A8.033 8.033 0 0 1 20 13c0 3.859-2.618 7.108-6.155 8.081" />
                      <circle cx="9" cy="13" r="1.25" />
                      <circle cx="13" cy="17" r="1.25" />
                      <circle cx="7.5" cy="17" r="1" />
                      <circle cx="15" cy="10" r="1" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-700 text-slate-900 leading-tight">
                      {lang.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {lang.description}{" "}
                      <a
                        href={activeLocale === "en" ? "/privacy" : `/${activeLocale}/privacy`}
                        className="text-[#0A6EBD] hover:underline font-500 whitespace-nowrap"
                      >
                        {lang.learnMore} →
                      </a>
                    </p>
                  </div>
                </div>

                {/* Expanded preferences panel */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${expanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-1">
                    <CategoryRow
                      id="necessary"
                      label={lang.necessary}
                      desc={lang.necessaryDesc}
                      checked={true}
                      disabled={true}
                      alwaysOnLabel={lang.alwaysOn}
                    />
                    <CategoryRow
                      id="analytics"
                      label={lang.analytics}
                      desc={lang.analyticsDesc}
                      checked={prefs.analytics}
                      onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                      alwaysOnLabel={lang.alwaysOn}
                    />
                    <CategoryRow
                      id="marketing"
                      label={lang.marketing}
                      desc={lang.marketingDesc}
                      checked={prefs.marketing}
                      onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                      alwaysOnLabel={lang.alwaysOn}
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {/* Customise toggle */}
                  <button
                    id="cookie-customise-btn"
                    onClick={() => setExpanded((e) => !e)}
                    className="
                      inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                      text-sm font-500 text-slate-600
                      border border-slate-200 bg-white
                      hover:bg-slate-50 hover:border-slate-300
                      transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6EBD]
                    "
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {lang.customise}
                  </button>

                  <div className="flex-1" />

                  {/* Reject All */}
                  <button
                    id="cookie-reject-btn"
                    onClick={handleRejectAll}
                    className="
                      inline-flex items-center px-4 py-2 rounded-xl
                      text-sm font-500 text-slate-600
                      border border-slate-200 bg-white
                      hover:bg-slate-50 hover:border-slate-300
                      transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6EBD]
                    "
                  >
                    {lang.rejectAll}
                  </button>

                  {/* Save (only when expanded) */}
                  {expanded && (
                    <button
                      id="cookie-save-btn"
                      onClick={handleSave}
                      className="
                        inline-flex items-center px-5 py-2 rounded-xl
                        text-sm font-600 text-white
                        bg-slate-700 hover:bg-slate-800
                        border border-transparent
                        transition-all duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700
                      "
                    >
                      {lang.savePrefs}
                    </button>
                  )}

                  {/* Accept All */}
                  <button
                    id="cookie-accept-btn"
                    onClick={handleAcceptAll}
                    className="
                      inline-flex items-center gap-1.5 px-5 py-2 rounded-xl
                      text-sm font-600 text-white
                      bg-gradient-to-r from-[#0A6EBD] to-[#0ea5e9]
                      hover:from-[#085a99] hover:to-[#0891b2]
                      shadow-[0_2px_12px_rgba(10,110,189,0.35)]
                      hover:shadow-[0_4px_16px_rgba(10,110,189,0.45)]
                      transition-all duration-200 hover:-translate-y-px
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6EBD]
                    "
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {lang.acceptAll}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Badge (after consent given) ─────────── */}
      {badgeVisible && (
        <button
          id="cookie-settings-badge"
          onClick={openBanner}
          aria-label={lang.badge}
          title={lang.badge}
          className="
            fixed bottom-4 left-4 z-[9998]
            flex items-center justify-center
            w-10 h-10 rounded-full
            bg-white border border-slate-200
            shadow-[0_2px_12px_rgba(0,0,0,0.12)]
            hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]
            hover:-translate-y-0.5
            transition-all duration-200
            group
          "
        >
          <svg
            className="w-4.5 h-4.5 text-slate-500 group-hover:text-[#0A6EBD] transition-colors duration-200"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A10.083 10.083 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.003-.146a1.001 1.001 0 0 0-.399-.79zM12 20c-4.411 0-8-3.589-8-8a8.06 8.06 0 0 1 5.966-7.775A5.008 5.008 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 3.999A8.033 8.033 0 0 1 20 13c0 3.859-2.618 7.108-6.155 8.081" />
            <circle cx="9" cy="13" r="1.25" />
            <circle cx="13" cy="17" r="1.25" />
            <circle cx="7.5" cy="17" r="1" />
            <circle cx="15" cy="10" r="1" />
          </svg>
        </button>
      )}
    </>
  );
}
