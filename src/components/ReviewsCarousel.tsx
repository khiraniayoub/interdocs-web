"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Thomas W.",
    flag: "🇬🇧",
    location: "Fuengirola",
    date: "2 weeks ago",
    text: "Incredible service. The doctor arrived at our hotel in Fuengirola in less than 45 minutes. Very professional and spoke perfect English. Saved our holiday!",
    initial: "T",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Sarah M.",
    flag: "🇦🇺",
    location: "Marbella",
    date: "1 month ago",
    text: "Quick response via WhatsApp. The doctor was very kind and diagnosed my son immediately. Got the prescription sent to my phone. Highly recommend.",
    initial: "S",
    color: "bg-emerald-600",
  },
  {
    id: 3,
    name: "Jürgen K.",
    flag: "🇩🇪",
    location: "Torremolinos",
    date: "3 weeks ago",
    text: "Sehr effizienter und freundlicher Service. Ausgezeichnete Reaktion und Diagnose. Viel besser als stundenlang in der Notaufnahme zu warten.",
    initial: "J",
    color: "bg-amber-600",
  },
  {
    id: 4,
    name: "Emma L.",
    flag: "🇸🇪",
    location: "Benalmádena",
    date: "1 month ago",
    text: "Top service! Ringte klockan 2 på natten och läkaren var i min lägenhet inom en timme. Gav en medicinsk rapport för mitt försäkringsbolag direkt.",
    initial: "E",
    color: "bg-violet-600",
  },
  {
    id: 5,
    name: "Markus H.",
    flag: "🇫🇷",
    location: "Málaga",
    date: "2 months ago",
    text: "Le médecin était agréable, compétent et a diagnostiqué mon problème efficacement. Son anglais était excellent, aucune barrière de communication.",
    initial: "M",
    color: "bg-rose-600",
  },
  {
    id: 6,
    name: "Nancy D.",
    flag: "🇳🇱",
    location: "Estepona",
    date: "3 weeks ago",
    text: "Top service! Gebeld en 45 minuten later stond de arts aan onze deur. Heeft mijn man direct professioneel geholpen. Zeer tevreden!",
    initial: "N",
    color: "bg-cyan-600",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.31 3.51v2.925h3.735c2.19-2.01 3.63-4.995 3.63-8.565z"/>
      <path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.935-2.91l-3.735-2.925c-1.08.72-2.46 1.155-4.2 1.155-3.225 0-5.955-2.175-6.93-5.1h-3.87v3.015A11.95 11.95 0 0012.24 24z"/>
      <path fill="#FBBC05" d="M5.31 15.225c-.255-.735-.405-1.53-.405-2.355 0-.825.15-1.62.405-2.355V7.5H1.44A11.972 11.972 0 000 12.87c0 1.935.465 3.78 1.44 5.37l3.87-3.015z"/>
      <path fill="#EA4335" d="M12.24 4.725c1.77 0 3.36.6 4.605 1.8l3.42-3.42C18.195 1.185 15.48 0 12.24 0 7.395 0 3.21 2.805 1.44 7.5l3.87 3.015c.975-2.925 3.705-5.1 6.93-5.1z"/>
    </svg>
  );
}

export default function ReviewsCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

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
      className="w-full bg-slate-50 border-t border-slate-100"
      aria-label="Patient reviews"
    >
      {/* Header bar — full width */}
      <div
        className={`py-10 px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Title */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-800 text-slate-900 leading-tight">
            Why Patients Trust Interdocs
          </h2>
          <p className="text-slate-500 text-sm mt-1">Real reviews from our patients across Costa del Sol</p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-12 bg-slate-200" />

        {/* Rating block */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-4xl font-800 text-slate-900 leading-none">5.0</span>
            <span className="text-xs text-slate-500 mt-1 font-500">Excellent</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GoogleIcon size={32} />
            <span className="text-xs text-slate-500 font-600">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee — edge to edge, overflow clipped only on X */}
      <div
        className={`relative pb-10 overflow-x-hidden transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-5 animate-marquee w-max py-2">
          {duplicatedReviews.map((review, i) => (
            <article
              key={`${review.id}-${i}`}
              className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-800 text-lg flex-shrink-0 ${review.color}`}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-700 text-slate-900 text-sm leading-none mb-0.5">
                      {review.name} <span className="font-400 text-base">{review.flag}</span>
                    </p>
                    <p className="text-xs text-slate-400">{review.location} · {review.date}</p>
                  </div>
                </div>
                <GoogleIcon size={18} />
              </div>

              {/* Stars */}
              <StarRating />

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mt-3 line-clamp-4">
                {review.text}
              </p>

              {/* Verified */}
              <div className="flex items-center gap-1.5 mt-4">
                <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-8 8z"/>
                </svg>
                <span className="text-xs text-slate-400">Verified patient</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
