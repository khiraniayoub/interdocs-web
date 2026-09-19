"use client";

import { useEffect, useRef, useState } from "react";

interface WhyChooseProps {
  locale?: string;
}

interface Commitment {
  icon: string;
  badge: { en: string; es: string };
  title: { en: string; es: string };
  description: { en: string; es: string };
  highlight: { en: string; es: string };
  color: string;
  badgeBg: string;
}

const COMMITMENTS: Commitment[] = [
  {
    icon: "⏱️",
    badge: { en: "Fast Response", es: "Respuesta Rápida" },
    title: {
      en: "At Your Door in 45–60 Minutes",
      es: "En tu Puerta en 45–60 Minutos",
    },
    description: {
      en: "Avoid crowded waiting rooms in unfamiliar hospitals. A private licensed doctor travels directly to your hotel room, apartment, or villa anywhere along the Costa del Sol.",
      es: "Evita colas y largas esperas en hospitales desconocidos. Un médico privado acude directamente a tu habitación de hotel, apartamento o villa en toda la Costa del Sol.",
    },
    highlight: { en: "Direct hotel & home visits", es: "Visitas directas a hotel y domicilio" },
    color: "from-blue-500/10 to-blue-500/5 text-blue-700 border-blue-100",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: "🌐",
    badge: { en: "Multilingual", es: "Multilingüe" },
    title: {
      en: "Fluent Care with No Language Barrier",
      es: "Atención Fluida Sin Barrera de Idioma",
    },
    description: {
      en: "Consultations conducted in English, Spanish, German, and French. Explain your symptoms comfortably and clearly understand your diagnosis, treatment, and medication.",
      es: "Consultas en inglés, español, alemán y francés. Explica tus síntomas con tranquilidad y entiende tu diagnóstico y tratamiento sin confusiones.",
    },
    highlight: { en: "English & European languages", es: "Inglés y lenguas europeas" },
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-700 border-emerald-100",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: "📋",
    badge: { en: "Travel Insurance", es: "Seguros de Viaje" },
    title: {
      en: "Official Reports for 100% Reimbursement",
      es: "Informes Oficiales para Reembolso del Seguro",
    },
    description: {
      en: "We issue fully detailed, signed medical reports and itemized invoices accepted by all major international travel insurance companies (Allianz, AXA, Bupa, Cigna, etc.).",
      es: "Emitimos informes médicos firmados y facturas detalladas válidas para el reembolso completo con aseguradoras internacionales (Allianz, AXA, Bupa, etc.).",
    },
    highlight: { en: "Insurance claim ready", es: "Documentación lista para tu póliza" },
    color: "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-100",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: "💊",
    badge: { en: "On-Site Care", es: "Atención In Situ" },
    title: {
      en: "Clinical Diagnostics & E-Prescriptions",
      es: "Diagnóstico Clínico y Receta Electrónica",
    },
    description: {
      en: "Complete physical assessment at your bedside, administration of urgent relief medications when needed, and official electronic prescriptions sent directly to your phone.",
      es: "Exploración médica completa junto a tu cama, medicación in situ para alivio rápido si es precisa y recetas electrónicas enviadas directamente a tu móvil.",
    },
    highlight: { en: "Digital prescriptions & medicine", es: "Recetas y medicación in situ" },
    color: "from-purple-500/10 to-purple-500/5 text-purple-700 border-purple-100",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: "🌙",
    badge: { en: "Always On Duty", es: "Siempre de Guardia" },
    title: {
      en: "24/7 Availability, 365 Days a Year",
      es: "Disponibilidad 24/7 los 365 Días del Año",
    },
    description: {
      en: "Medical emergencies don't wait for office hours. Our doctors are on active duty day and night, including weekends and public holidays across Málaga and Marbella.",
      es: "Los problemas médicos no tienen horario de oficina. Disponemos de facultativos de guardia día y noche, incluyendo fines de semana y festivos.",
    },
    highlight: { en: "Day, night & holidays", es: "Día, noche y días festivos" },
    color: "from-indigo-500/10 to-indigo-500/5 text-indigo-700 border-indigo-100",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    icon: "🩺",
    badge: { en: "Family Medicine", es: "Medicina Familiar" },
    title: {
      en: "Comprehensive Care for All Ages",
      es: "Atención Integral para Toda la Familia",
    },
    description: {
      en: "Specialized in treating frequent holiday health issues: gastroenteritis, swimmer's ear (otitis), severe sunburn, tonsillitis, allergies, and minor injuries for children and adults.",
      es: "Especialistas en afecciones comunes de vacaciones: gastroenteritis, otitis de piscina, insolaciones, faringitis, alergias y curas para niños y adultos.",
    },
    highlight: { en: "Adults, children & seniors", es: "Adultos, niños y personas mayores" },
    color: "from-rose-500/10 to-rose-500/5 text-rose-700 border-rose-100",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function ReviewsCarousel({ locale = "en" }: WhyChooseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const isEs = locale === "es";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 border-t border-slate-200 py-16 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A6EBD]/10 border border-[#0A6EBD]/20 text-[#0A6EBD] text-xs font-700 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0A6EBD]" />
              {isEs ? "Garantías del Servicio" : "Our Commitments"}
            </div>
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 leading-tight"
            >
              {isEs
                ? "¿Por Qué Elegir Interdocs Medical?"
                : "Why Choose Interdocs Medical?"}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-2">
              {isEs
                ? "Atención médica privada de máxima calidad, directa en tu alojamiento sin esperas hospitalarias."
                : "High-standard private medical care delivered directly to your accommodation with zero hospital delays."}
            </p>
          </div>

          {/* Trust Banner Card */}
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A6EBD] text-white flex items-center justify-center font-800 text-xl shadow-md shadow-blue-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-800 text-slate-900 text-sm leading-tight">
                  {isEs ? "Doctores Colegiados" : "100% Licensed Doctors"}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-500">
                  {isEs
                    ? "Médicos colegiados en España"
                    : "Registered & verified physicians"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Guarantee Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITMENTS.map((item, index) => (
            <article
              key={index}
              className={`bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0A6EBD]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span
                    className={`text-xs font-700 px-3 py-1 rounded-full border ${item.badgeBg}`}
                  >
                    {isEs ? item.badge.es : item.badge.en}
                  </span>
                </div>

                {/* Title */}
                <p className="font-800 text-slate-900 text-lg sm:text-xl leading-snug mb-3">
                  {isEs ? item.title.es : item.title.en}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {isEs ? item.description.es : item.description.en}
                </p>
              </div>

              {/* Bottom highlight pill */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-600 text-[#0A6EBD]">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{isEs ? item.highlight.es : item.highlight.en}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
