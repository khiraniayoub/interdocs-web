"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CITIES, type Locale } from "@/data/content";

interface ServiceAreasProps {
  title: string;
  subtitle: string;
  locale: Locale;
}

const PRICING_BADGES: Record<string, { weekday: string; weekend: string }> = {
  en: { weekday: "€130 (Mon-Fri)", weekend: "€140 (Weekends)" },
  es: { weekday: "€130 (Lun-Vie)", weekend: "€140 (Fines de semana)" },
  de: { weekday: "€130 (Mo-Fr)", weekend: "€140 (Wochenenden)" },
  fr: { weekday: "130 € (Lun-Ven)", weekend: "140 € (Week-ends)" },
  fi: { weekday: "130 € (Ma-Pe)", weekend: "140 € (Viikonloput)" },
  ar: { weekday: "€130 (الاثنين-الجمعة)", weekend: "€140 (عطلات نهاية الأسبوع)" },
  no: { weekday: "€130 (Man-Fre)", weekend: "€140 (Helger)" },
  da: { weekday: "€130 (Man-Fre)", weekend: "€140 (Weekender)" },
  sv: { weekday: "€130 (Mån-Fre)", weekend: "€140 (Helger)" },
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
            }, i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="areas-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          role="list"
          aria-label="Service areas"
        >
          {CITIES.map((city, index) => {
            const localeSlug = city.localeSlugs[locale];
            const href =
              locale === "en"
                ? `/${localeSlug}/`
                : `/${locale}/${localeSlug}/`;

            const tBadge = PRICING_BADGES[locale] || PRICING_BADGES["en"];

            return (
              <li
                key={city.slug}
                style={{
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index]
                    ? "translateY(0) scale(1)"
                    : "translateY(30px) scale(0.92)",
                  transition:
                    "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <Link
                  href={href}
                  className="group flex flex-col items-start p-0 rounded-2xl bg-white border border-slate-100 hover:border-[#0A6EBD]/50 hover:shadow-2xl hover:shadow-blue-100 text-left transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden"
                  aria-label={`Doctor in ${city.name}`}
                >
                  {/* City image */}
                  <div
                    className="w-full h-40 overflow-hidden relative"
                    aria-hidden="true"
                  >
                    <img
                      src={`/areas/${city.slug}.webp`}
                      alt={`${city.name} — private doctor service`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A6EBD]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Text content */}
                  <div className="p-5 flex flex-col flex-1 w-full">

                    {/* City name — bigger */}
                    <span className="font-800 text-xl text-slate-900 group-hover:text-[#0A6EBD] transition-colors duration-300 mb-2 leading-tight">
                      {city.name}
                    </span>

                    {/* Description — bigger */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {city.description[locale].split(".")[0]}
                    </p>

                    {/* Prices */}
                    <div className="mt-auto mb-4 flex flex-col xl:flex-row gap-2 w-full">
                      <span className="text-xs font-600 text-[#1da851] bg-[#1da851]/10 px-2 py-1.5 rounded-md border border-[#1da851]/20 flex-1 text-center truncate">
                        {tBadge.weekday}
                      </span>
                      <span className="text-xs font-600 text-[#0A6EBD] bg-[#0A6EBD]/10 px-2 py-1.5 rounded-md border border-[#0A6EBD]/20 flex-1 text-center truncate">
                        {tBadge.weekend}
                      </span>
                    </div>

                    {/* Arrow indicator on hover */}
                    <span
                      className="text-[#0A6EBD] text-sm font-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 flex items-center gap-1"
                    >
                      Ver más
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
