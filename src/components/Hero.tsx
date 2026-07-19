"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PHONE_URL, WHATSAPP_NUMBER } from "@/data/content";

const VIDEOS = ["/video1.mp4", "/video4.mp4", "/video2.mp4", "/video3.mp4"];

interface HeroProps {
  headline: string;
  subheadline: string;
  whatsappLabel: string;
  callLabel: string;
  trustItems: string[];
  locale?: string;
}

const PRICING_TEXT: Record<string, { weekday: string; weekend: string; desc: string }> = {
  en: { weekday: "Mon - Fri", weekend: "Weekends & Holidays", desc: "Medical Visit" },
  es: { weekday: "Lunes - Viernes", weekend: "Fines de semana y Festivos", desc: "Visita Médica" },
  de: { weekday: "Mo - Fr", weekend: "Wochenenden & Feiertage", desc: "Arztbesuch" },
  fr: { weekday: "Lun - Ven", weekend: "Week-ends & Jours Fériés", desc: "Visite Médicale" },
  fi: { weekday: "Ma - Pe", weekend: "Viikonloput & Pyhät", desc: "Lääkärikäynti" },
  ar: { weekday: "الإثنين - الجمعة", weekend: "عطلات نهاية الأسبوع والأعياد", desc: "زيارة طبية" },
  no: { weekday: "Man - Fre", weekend: "Helger & Helligdager", desc: "Legebesøk" },
  da: { weekday: "Man - Fre", weekend: "Weekender & Helligdage", desc: "Lægebesøg" },
  sv: { weekday: "Mån - Fre", weekend: "Helger & Helgdagar", desc: "Läkarbesök" },
};

export default function Hero({
  headline,
  subheadline,
  whatsappLabel,
  callLabel,
  trustItems,
  locale = "es",
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fading, setFading] = useState(false);
  const currentRef = useRef<HTMLVideoElement>(null);
  const nextRef = useRef<HTMLVideoElement>(null);

  const t = PRICING_TEXT[locale] || PRICING_TEXT["en"];

  const whatsappMsg = encodeURIComponent(
    "Hello, I need a doctor to visit my hotel/apartment. My name is: [NAME]. Hotel/Address: [HOTEL]. Symptoms: [SYMPTOMS]."
  );

  useEffect(() => {
    const video = currentRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Start fade transition
      setFading(true);
      // After crossfade, swap videos
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
        setNextIndex((prev) => (prev + 1) % VIDEOS.length);
        setFading(false);
      }, 600);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [currentIndex]);

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        <video
          key={`current-${currentIndex}`}
          ref={currentRef}
          src={VIDEOS[currentIndex]}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-kenburns"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.6s ease" }}
        />
        <video
          key={`next-${nextIndex}`}
          ref={nextRef}
          src={VIDEOS[nextIndex]}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: fading ? 1 : 0, transition: "opacity 0.6s ease" }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Watermark */}
        <div className="absolute bottom-20 right-8 z-10 w-16 sm:w-20 pointer-events-none opacity-80">
          <Image
            src="/logo_new_v2.png"
            alt="Interdoc Watermark"
            width={300}
            height={100}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          {/* Badge */}
          <div className="hero-fade-in hero-fade-in-delay-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span
              className="w-2 h-2 rounded-full bg-green-400"
              aria-hidden="true"
            />
            <span className="text-sm font-600 text-white shadow-sm">
              Available 24/7 · Costa del Sol
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="hero-fade-in hero-fade-in-delay-2 text-4xl sm:text-5xl lg:text-6xl font-800 text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg"
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="hero-fade-in hero-fade-in-delay-3 text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-400 drop-shadow-md">
            {subheadline}
          </p>

          {/* Pricing Info */}
          <div className="hero-fade-in hero-fade-in-delay-4 mb-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:px-6 border border-white/20 shadow-xl w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-[#25D366]/20 p-2 rounded-xl border border-[#25D366]/30">
                <span className="text-2xl font-800 text-white tracking-tight">€130</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-600 leading-tight">{t.weekday}</span>
                <span className="text-slate-300 text-xs font-500">{t.desc}</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="bg-[#0A6EBD]/30 p-2 rounded-xl border border-[#0A6EBD]/50">
                <span className="text-2xl font-800 text-white tracking-tight">€140</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-600 leading-tight">{t.weekend}</span>
                <span className="text-slate-300 text-xs font-500">{t.desc}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-5 flex flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start gap-4 mb-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              id="hero-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-700 text-lg hover:bg-[#1da851] transition-colors duration-200 shadow-lg shadow-green-900/50"
              aria-label="Contact us via WhatsApp now"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {whatsappLabel}
            </a>

            <a
              href={PHONE_URL}
              id="hero-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-2xl font-700 text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-black/20"
              aria-label="Call us now"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {callLabel}
            </a>
          </div>

          {/* Trust Indicators */}
          <ul className="hero-fade-in hero-fade-in-delay-5 space-y-3 text-left inline-block" aria-label="Service features">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-white font-500 drop-shadow-md">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Dot indicators for video */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {VIDEOS.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "dot-active" : ""}`}
            style={{
              background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.4)",
              transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
