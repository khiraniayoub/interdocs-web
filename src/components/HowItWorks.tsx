"use client";

import { useEffect, useRef, useState } from "react";

interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: { step: string; title: string; desc: string }[];
}

export default function HowItWorks({ title, subtitle, steps }: HowItWorksProps) {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
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
          // Reveal each step one by one with 300ms delay
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [steps]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Steps */}
        <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8" aria-label="Service process steps">
          {steps.map((step, index) => (
            <li
              key={step.step}
              className="relative flex flex-col items-center text-center"
              style={{
                opacity: visibleSteps[index] ? 1 : 0,
                transform: visibleSteps[index] ? "translateY(0) scale(1)" : "translateY(32px) scale(0.9)",
                transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-[#0A6EBD]/20"
                  aria-hidden="true"
                  style={{
                    opacity: visibleSteps[index] ? 1 : 0,
                    transition: `opacity 0.4s ease ${index * 300 + 250}ms`,
                  }}
                />
              )}

              {/* Step circle */}
              <div
                className="relative z-10 w-16 h-16 rounded-2xl bg-[#0A6EBD] flex items-center justify-center mb-6 shadow-lg shadow-blue-100"
                aria-label={`Step ${step.step}`}
                style={{
                  boxShadow: visibleSteps[index]
                    ? "0 0 0 0 rgba(10,110,189,0), 0 10px 25px -5px rgba(10,110,189,0.35)"
                    : "none",
                  transition: "box-shadow 0.6s ease",
                }}
              >
                <span className="text-2xl font-800 text-white" aria-hidden="true">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div className="px-4">
                <h3 className="text-lg font-700 text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
