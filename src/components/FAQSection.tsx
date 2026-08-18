"use client";

import { useState, useEffect, useRef } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export default function FAQSection({ title, subtitle, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Build FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <dl className="space-y-4" aria-label="Frequently asked questions">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${isOpen
                    ? "border-[#0A6EBD]/30 shadow-lg shadow-blue-50"
                    : "border-slate-100 hover:border-slate-200"
                  } ${isVisible ? 'hero-fade-in opacity-0' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${index * 0.15 + 0.1}s`, animationFillMode: 'forwards' } : {}}
              >
                <dt>
                  <button
                    id={itemId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="font-600 text-slate-900 text-base leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${isOpen
                          ? "bg-[#0A6EBD] text-white"
                          : "bg-slate-100 text-slate-500"
                        }`}
                      aria-hidden="true"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>

                <dd
                  id={answerId}
                  role="region"
                  aria-labelledby={itemId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
