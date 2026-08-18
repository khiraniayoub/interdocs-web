"use client";

import { useEffect, useRef, useState } from "react";

const INSURANCES = [
  "Allianz Care",
  "AXA Global",
  "Bupa Global",
  "Cigna",
  "ERGO Reiseversicherung",
  "Mapfre Asistencia",
  "Gouda Travel Insurance",
  "Europ Assistance",
  "IF Skadeförsäkring",
  "Tryg Forsikring"
];

export default function InsuranceLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Triplicate the array for seamless infinite scroll
  const duplicatedLogos = [...INSURANCES, ...INSURANCES, ...INSURANCES];

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
      className="bg-white py-12 border-y border-slate-100 overflow-hidden"
      aria-label="Insurance partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h3 className={`text-sm font-700 tracking-wider text-slate-400 uppercase transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Medical Reports Provided for Major Travel Insurances
        </h3>
      </div>

      <div
        className={`relative overflow-x-hidden transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-8 animate-marquee w-max py-4 items-center">
          {duplicatedLogos.map((insurance, i) => (
            <div
              key={`${insurance}-${i}`}
              className="flex-shrink-0 px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 font-700 text-lg sm:text-xl grayscale hover:grayscale-0 hover:bg-white hover:shadow-md hover:text-[#0A6EBD] transition-all duration-300 cursor-default"
            >
              {insurance}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
