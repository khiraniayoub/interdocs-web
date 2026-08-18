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
          // Reveal each step sequentially with 350ms gap
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 350);
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
        <ol
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Service process steps"
        >
          {steps.map((step, index) => (
            <li
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* ── Animated connector line (desktop only) ── */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-0.5 overflow-hidden"
                  aria-hidden="true"
                >
                  {/* Background track */}
                  <div className="absolute inset-0 bg-[#0A6EBD]/15 rounded-full" />
                  {/* Animated fill */}
                  <div
                    className={`absolute inset-0 bg-[#0A6EBD] rounded-full connector-line ${
                      visibleSteps[index] ? "active" : ""
                    }`}
                    style={
                      visibleSteps[index]
                        ? { animationDelay: `${index * 350 + 200}ms` }
                        : {}
                    }
                  />
                  {/* Moving dot along the line */}
                  {visibleSteps[index] && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0A6EBD]"
                      style={{
                        left: 0,
                        animation: `travelDot 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 350 + 180}ms forwards`,
                      }}
                    />
                  )}
                </div>
              )}

              {/* ── Step circle ── */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl bg-[#0A6EBD] flex items-center justify-center mb-6 shadow-lg shadow-blue-100 ${
                  visibleSteps[index] ? "step-circle-active" : ""
                }`}
                aria-label={`Step ${step.step}`}
                style={
                  visibleSteps[index]
                    ? { animationDelay: `${index * 350}ms` }
                    : {}
                }
              >
                {/* Outer ring pulse */}
                {visibleSteps[index] && (
                  <span
                    className="absolute inset-0 rounded-2xl ring-2 ring-[#0A6EBD]/40"
                    style={{
                      animation: `ringExpand 0.7s ease-out ${index * 350}ms forwards`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="text-2xl font-800 text-white" aria-hidden="true">
                  {step.step}
                </span>
              </div>

              {/* ── Content ── */}
              <div
                className={`px-4 ${visibleSteps[index] ? "step-reveal" : "opacity-0"}`}
                style={
                  visibleSteps[index]
                    ? { animationDelay: `${index * 350 + 100}ms` }
                    : {}
                }
              >
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

      {/* Inline keyframes for the travelling dot */}
      <style>{`
        @keyframes travelDot {
          0%   { left: 0;    opacity: 1; }
          90%  { left: calc(100% - 8px); opacity: 1; }
          100% { left: calc(100% - 8px); opacity: 0; }
        }
        @keyframes ringExpand {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
