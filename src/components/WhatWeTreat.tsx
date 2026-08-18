"use client";

import { useEffect, useRef, useState } from "react";
import { treatmentsData } from "@/data/treatments";
import type { Locale } from "@/data/content";

export default function WhatWeTreat({ locale }: { locale: Locale }) {
  const t = treatmentsData[locale] || treatmentsData.en;
  
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(t.items.length).fill(false)
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
          t.items.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 150);
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [t.items.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50"
      aria-labelledby="treatments-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="treatments-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {t.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {t.items.map((treatment, index) => (
            <li
              key={treatment.id}
              style={{
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index]
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.95)",
                transition:
                  "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0A6EBD]/30 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${treatment.color} group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                {treatment.icon}
              </div>
              <h3 className="font-800 text-xl text-slate-900 mb-3 group-hover:text-[#0A6EBD] transition-colors duration-300">
                {treatment.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {treatment.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
