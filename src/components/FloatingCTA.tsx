"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHONE_URL, PHONE_NUMBER, WHATSAPP_URL } from "@/data/content";
import AIMedicalConcierge from "./AIMedicalConcierge";

const TRANSLATIONS: Record<string, any> = {
  en: { call: "Call 24/7", whatsapp: "WhatsApp", whatsappSub: "Direct Line", triage: "Medical Triage", triageBadge: "Instant 24/7 Triage" },
  es: { call: "Llamar 24/7", whatsapp: "WhatsApp", whatsappSub: "Línea Directa", triage: "Triaje Médico", triageBadge: "Triaje Inmediato 24/7" },
  de: { call: "Anrufen 24/7", whatsapp: "WhatsApp", whatsappSub: "Direkter Kontakt", triage: "Arzt-Triage", triageBadge: "Sofortige Triage 24/7" },
  fr: { call: "Appeler 24/7", whatsapp: "WhatsApp", whatsappSub: "Ligne Directe", triage: "Triage Médical", triageBadge: "Triage 24/7" },
  fi: { call: "Soita 24/7", whatsapp: "WhatsApp", whatsappSub: "Suora yhteys", triage: "Lääkäritriage", triageBadge: "Välitön triage 24/7" },
  ar: { call: "اتصل 24/7", whatsapp: "WhatsApp", whatsappSub: "خط مباشر", triage: "الفرز الطبي", triageBadge: "فرز فوري 24/7" },
  no: { call: "Ring 24/7", whatsapp: "WhatsApp", whatsappSub: "Direkte linje", triage: "Legetriage", triageBadge: "Øyeblikkelig triage" },
  da: { call: "Ring 24/7", whatsapp: "WhatsApp", whatsappSub: "Direkte linje", triage: "Lægetriage", triageBadge: "Øjeblikkelig triage" },
  sv: { call: "Ring 24/7", whatsapp: "WhatsApp", whatsappSub: "Direktkontakt", triage: "Läkartriage", triageBadge: "Omedelbar triage" },
  ru: { call: "Позвонить 24/7", whatsapp: "WhatsApp", whatsappSub: "Прямая связь", triage: "Триаж врача", triageBadge: "Быстрый триаж 24/7" },
  nl: { call: "Bel 24/7", whatsapp: "WhatsApp", whatsappSub: "Directe lijn", triage: "Dokters Triage", triageBadge: "Directe triage 24/7" }
};

export default function FloatingCTA({ locale: propLocale = "en" }: { locale?: string }) {
  const pathname = usePathname();
  const pathLocale = pathname ? pathname.split('/')[1] : null;
  const initialLocale = (pathLocale && TRANSLATIONS[pathLocale]) ? pathLocale : propLocale;
  const [activeLocale, setActiveLocale] = useState(initialLocale);
  
  const [isOpen, setIsOpen] = useState(false);
  const [initialSymptom, setInitialSymptom] = useState<string | undefined>(undefined);
  const [autoRecord, setAutoRecord] = useState(false);
  const [showDesktopFloating, setShowDesktopFloating] = useState(false);
  const t = TRANSLATIONS[activeLocale] || TRANSLATIONS["en"];

  useEffect(() => {
    if (pathLocale && TRANSLATIONS[pathLocale]) {
      setActiveLocale(pathLocale);
    } else if (propLocale && TRANSLATIONS[propLocale]) {
      setActiveLocale(propLocale);
    }
  }, [pathLocale, propLocale]);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.locale) {
        setActiveLocale(customEvent.detail.locale);
      }
      if (customEvent.detail?.symptom) {
        setInitialSymptom(customEvent.detail.symptom);
      } else {
        setInitialSymptom(undefined);
      }
      setAutoRecord(Boolean(customEvent.detail?.startRecording));
      setIsOpen(true);
    };
    window.addEventListener('openTriage', handleOpen);
    return () => window.removeEventListener('openTriage', handleOpen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating buttons once user scrolls past hero & LiveDispatchRadar (380px)
      setShowDesktopFloating(window.scrollY > 380);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenTriage = (e: React.MouseEvent) => {
    e.preventDefault();
    setInitialSymptom(undefined);
    setAutoRecord(false);
    setIsOpen(true);
  };

  const whatsappIcon = (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  return (
    <>
      {/* Revolutionary Full Medical Concierge Modal */}
      <AIMedicalConcierge
        isOpen={isOpen}
        onClose={() => { setIsOpen(false); setAutoRecord(false); }}
        locale={activeLocale}
        initialSymptom={initialSymptom}
        autoStartRecord={autoRecord}
      />

      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:bottom-6 lg:right-6 lg:left-auto"
        role="region"
        aria-label="Quick contact"
      >
        {/* Mobile: Full-width 3-action bar (Call + WhatsApp Direct + Doctor Triage) */}
        <div className="flex lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative z-10 border-t border-slate-800">
          <a
            href={PHONE_URL}
            id="floating-call-btn"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-1.5 bg-slate-950 text-white active:bg-slate-800 transition-colors border-r border-slate-800"
            aria-label={`${t.call} ${PHONE_NUMBER}`}
          >
            <svg
              className="w-4 h-4 text-sky-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase font-bold text-slate-400 leading-none">{t.call}</span>
              <span className="text-[11px] font-extrabold text-white leading-tight mt-0.5">{PHONE_NUMBER}</span>
            </div>
          </a>

          {/* Direct WhatsApp Link */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-mobile"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-1.5 bg-[#25D366] text-white active:bg-[#1da851] transition-colors border-r border-emerald-600"
            aria-label={t.whatsapp}
          >
            {whatsappIcon}
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase font-bold text-emerald-100 leading-none">{t.whatsappSub}</span>
              <span className="text-[11px] font-extrabold text-white leading-tight mt-0.5">{t.whatsapp}</span>
            </div>
          </a>

          <button
            onClick={handleOpenTriage}
            id="floating-ai-triage-btn"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white active:from-cyan-700 active:to-blue-700 transition-all cursor-pointer"
            aria-label={t.triage}
          >
            <span className="text-base">🩺</span>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase font-bold text-cyan-200 leading-none">24/7</span>
              <span className="text-[11px] font-extrabold text-white leading-tight mt-0.5">{t.triage}</span>
            </div>
          </button>
        </div>

        {/* Desktop: Floating buttons with Doctor Triage & Direct WhatsApp */}
        <div className={`hidden lg:flex flex-col gap-2.5 relative z-10 transition-all duration-300 ${
          showDesktopFloating ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}>
          {/* Doctor Triage Button */}
          <button
            onClick={handleOpenTriage}
            id="floating-ai-desktop"
            className="group relative flex items-center justify-start gap-3.5 px-5 py-3.5 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-2xl shadow-2xl border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 transition-all duration-300 min-w-[240px] cursor-pointer overflow-hidden"
            aria-label="Open Clinical Triage"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <div className="flex flex-col text-left relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 leading-tight">
                {t.triageBadge}
              </span>
              <span className="text-sm font-extrabold text-white tracking-wide leading-tight">
                {t.triage} →
              </span>
            </div>
          </button>

          {/* WhatsApp Direct (Opens wa.me directly without opening triage modal) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-desktop"
            className="flex items-center justify-start gap-3.5 px-5 py-3.5 bg-[#25D366] text-white rounded-2xl shadow-xl hover:bg-[#1da851] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[240px] cursor-pointer"
            aria-label={t.whatsapp}
          >
            {whatsappIcon}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-tight">{t.whatsappSub}</span>
              <span className="text-sm font-extrabold tracking-wide leading-tight">{t.whatsapp}</span>
            </div>
          </a>

          {/* Hotline Call */}
          <a
            href={PHONE_URL}
            id="floating-call-desktop"
            className="flex items-center justify-start gap-3.5 px-5 py-3 bg-slate-900/90 backdrop-blur-md text-white rounded-2xl shadow-lg border border-white/10 hover:bg-slate-800 transition-all duration-200 min-w-[240px]"
            aria-label={`${t.call} ${PHONE_NUMBER}`}
          >
            <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">{t.call}</span>
              <span className="text-xs font-bold text-white tracking-wide leading-tight">{PHONE_NUMBER}</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
