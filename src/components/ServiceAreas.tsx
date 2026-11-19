"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CITIES, type Locale } from "@/data/content";

interface ServiceAreasProps {
  title: string;
  subtitle: string;
  locale: Locale;
}

const PRICE_LABEL: Record<
  string,
  {
    weekday: string;
    weekend: string;
    flat247: string;
    from: string;
    onlineTitle: string;
    onlineSubtitle: string;
    onlinePill: string;
  }
> = {
  en: {
    weekday: "Mon–Fri",
    weekend: "Nights, Weekends & Holidays",
    flat247: "24/7 · All Days & Nights",
    from: "from",
    onlineTitle: "Online Doctor",
    onlineSubtitle: "Official QR Prescription",
    onlinePill: "24/7 · All Nerja Pharmacies",
  },
  es: {
    weekday: "Lun–Vie",
    weekend: "Noches, Fin de semana y Festivos",
    flat247: "24/7 · Todos los días y noches",
    from: "desde",
    onlineTitle: "Médico Online",
    onlineSubtitle: "Receta Oficial con QR",
    onlinePill: "24/7 · Todas las Farmacias",
  },
  de: {
    weekday: "Mo–Fr",
    weekend: "Nächte, Wochenenden & Feiertage",
    flat247: "24/7 · Tag, Nacht & Wochenende",
    from: "ab",
    onlineTitle: "Online-Arzt",
    onlineSubtitle: "Offizielles QR-Rezept",
    onlinePill: "24/7 · Alle Apotheken in Nerja",
  },
  fr: {
    weekday: "Lun–Ven",
    weekend: "Nuits, Week-ends & Jours Fériés",
    flat247: "24h/24 · Jour, Nuit & Week-end",
    from: "dès",
    onlineTitle: "Médecin en Ligne",
    onlineSubtitle: "Ordonnance Officielle QR",
    onlinePill: "24h/24 · Toutes les Pharmacies",
  },
  fi: {
    weekday: "Ma–Pe",
    weekend: "Yöt, Viikonloput & Pyhäpäivät",
    flat247: "24/7 · Kaikki päivät ja yöt",
    from: "alkaen",
    onlineTitle: "Etälääkäri",
    onlineSubtitle: "Virallinen QR-Resepti",
    onlinePill: "24/7 · Kaikki Nerjan Apteekit",
  },
  ar: {
    weekday: "الاثنين–الجمعة",
    weekend: "الليالي وعطلات نهاية الأسبوع والأعياد",
    flat247: "24/7 · طوال الأسبوع والليل",
    from: "من",
    onlineTitle: "طبيب أونلاين",
    onlineSubtitle: "وصفة طبية رسمية QR",
    onlinePill: "24/7 · جميع صيدليات نيرخا",
  },
  no: {
    weekday: "Man–Fre",
    weekend: "Netter, Helger & Helligdager",
    flat247: "24/7 · Alle dager og netter",
    from: "fra",
    onlineTitle: "Online Lege",
    onlineSubtitle: "Offisiell QR-Resept",
    onlinePill: "24/7 · Alle Apotek i Nerja",
  },
  da: {
    weekday: "Man–Fre",
    weekend: "Nætter, Weekender & Helligdage",
    flat247: "24/7 · Alle dage og nætter",
    from: "fra",
    onlineTitle: "Online Læge",
    onlineSubtitle: "Officiel QR-Recept",
    onlinePill: "24/7 · Alle Apoteker i Nerja",
  },
  sv: {
    weekday: "Mån–Fre",
    weekend: "Nätter, Helger & Helgdagar",
    flat247: "24/7 · Alla dagar och nätter",
    from: "från",
    onlineTitle: "Onlineläkare",
    onlineSubtitle: "Officiellt QR-Recept",
    onlinePill: "24/7 · Alla Apotek i Nerja",
  },
  ru: {
    weekday: "Пн–Пт",
    weekend: "Ночи, Выходные и Праздники",
    flat247: "24/7 · Будни, ночи и выходные",
    from: "от",
    onlineTitle: "Онлайн-Врач",
    onlineSubtitle: "Официальный QR-Рецепт",
    onlinePill: "24/7 · Все Аптеки Нерхи",
  },
  nl: {
    weekday: "Ma–Vr",
    weekend: "Nachten, Weekenden & Feestdagen",
    flat247: "24/7 · Dag, nacht & weekend",
    from: "vanaf",
    onlineTitle: "Online Arts",
    onlineSubtitle: "Officieel QR-Recept",
    onlinePill: "24/7 · Alle Apotheken in Nerja",
  },
};

const ARIA_LABELS: Record<Locale, (name: string) => string> = {
  en: (name) => `Doctor in ${name} — 24/7 Home & Hotel Visits`,
  es: (name) => `Médico en ${name} — Visitas a Domicilio y Hotel 24/7`,
  de: (name) => `Arzt in ${name} — Haus- und Hotelbesuche rund um die Uhr`,
  fr: (name) => `Médecin à ${name} — Visites à Domicile et à l'Hôtel 24h/24`,
  fi: (name) => `Lääkäri ${name} — Kotikäynnit ja hotellivierailut 24/7`,
  ar: (name) => `طبيب في ${name} — زيارات منزلية وفندقية على مدار الساعة`,
  no: (name) => `Lege i ${name} — Hjemme- og hotellbesøk 24/7`,
  da: (name) => `Læge i ${name} — Hjemme- og hotelbesøg 24/7`,
  sv: (name) => `Läkare i ${name} — Hembesök och hotellbesök 24/7`,
  ru: (name) => `Врач в ${name} — Вызовы на дом и в отель 24/7`,
  nl: (name) => `Arts in ${name} — 24/7 Huis- en hotelbezoeken`,
};

const ALT_LABELS: Record<Locale, (name: string) => string> = {
  en: (name) => `${name} — private doctor service and home visits`,
  es: (name) => `${name} — servicio médico privado y visitas a domicilio`,
  de: (name) => `${name} — privater ärztlicher Notdienst und Hausbesuche`,
  fr: (name) => `${name} — service de médecin privé et visites à domicile`,
  fi: (name) => `${name} — yksityislääkäripalvelu ja kotikäynnit`,
  ar: (name) => `${name} — خدمة طبيب خاص وزيارات منزلية`,
  no: (name) => `${name} — privat legetjeneste og hjemmebesøk`,
  da: (name) => `${name} — privat lægetjeneste og hjemmebesøg`,
  sv: (name) => `${name} — privat läkartjänst och hembesök`,
  ru: (name) => `${name} — частная медицинская помощь и вызовы на дом`,
  nl: (name) => `${name} — particuliere artsendienst en huisbezoeken`,
};

export default function ServiceAreas({ title, subtitle, locale }: ServiceAreasProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(CITIES.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          CITIES.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const t = PRICE_LABEL[locale] || PRICE_LABEL["en"];

  const cityPrefix: Record<Locale, string> = {
    en: "Doctor in ",
    es: "Médico en ",
    de: "Arzt in ",
    fr: "Médecin à ",
    fi: "Lääkäri ",
    ar: "طبيب في ",
    no: "Lege i ",
    da: "Læge i ",
    sv: "Läkare i ",
    ru: "Врач в ",
    nl: "Arts in ",
  };

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="bg-white"
      aria-labelledby="areas-heading"
    >
      {/* Header — contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <h2
          id="areas-heading"
          className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
        >
          {title}
        </h2>
        <p className="text-lg text-[#0A6EBD] max-w-xl mx-auto font-500">{subtitle}</p>
      </div>

      {/* Full-width grid — no side padding */}
      <ul
        className="grid grid-cols-2 lg:grid-cols-4 w-full"
        role="list"
        aria-label="Service areas"
      >
        {CITIES.map((city, index) => {
          const localeSlug = city.localeSlugs[locale];
          const href =
            locale === "en"
              ? `/${localeSlug}`
              : `/${locale}/${localeSlug}`;
          const ariaLabel = (ARIA_LABELS[locale] || ARIA_LABELS.en)(city.name);
          const altText = (ALT_LABELS[locale] || ALT_LABELS.en)(city.name);

          return (
            <li
              key={city.slug}
              className="relative overflow-hidden"
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "scale(1)" : "scale(0.96)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="group block relative w-full h-72 lg:h-96 overflow-hidden">
                {/* Image */}
                <img
                  src={`/areas/${city.slug}.webp`}
                  alt={altText}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark gradient overlay — always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2C6E]/90 via-[#0A2C6E]/30 to-transparent pointer-events-none" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                  <p className="font-800 text-2xl leading-tight mb-3 drop-shadow pointer-events-auto">
                    <Link
                      href={href}
                      className="focus:outline-none after:absolute after:inset-0 hover:underline"
                      aria-label={ariaLabel}
                    >
                      <span className="sr-only">
                        {cityPrefix[locale] || cityPrefix.en}
                      </span>
                      {city.name}
                    </Link>
                  </p>
                  {city.slug === "nerja" ? (
                    <>
                      <div className="mb-2">
                        <span className="text-xl sm:text-2xl font-800">{t.onlineTitle}</span>
                        <p className="text-white/80 text-sm mt-0.5">{t.onlineSubtitle}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-600 text-white mt-1">
                        {t.onlinePill}
                      </div>
                    </>
                  ) : city.slug === "marbella" || city.slug === "estepona" ? (
                    <>
                      <div className="mb-2">
                        <span className="text-3xl font-800">€140</span>
                        <span className="text-white/70 text-sm font-500 ml-2">*</span>
                        <p className="text-white/70 text-sm mt-0.5">{t.weekday}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-600 text-white mt-1">
                        €140* · {t.weekend}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Weekday price */}
                      <div className="mb-2">
                        <span className="text-3xl font-800">€130</span>
                        <span className="text-white/70 text-sm font-500 ml-2">*</span>
                        <p className="text-white/70 text-sm mt-0.5">{t.weekday}</p>
                      </div>
                      {/* Weekend price pill */}
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-600 text-white mt-1">
                        €140* · {t.weekend}
                      </div>
                    </>
                  )}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Bottom note */}
      <p className="text-center text-xs text-slate-400 py-4 px-4">
        * Prices may vary. Contact us for exact quote.
      </p>
    </section>
  );
}
