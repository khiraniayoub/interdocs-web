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

const PRICING_TEXT: Record<string, { price1: string; price2: string; title1: string; title2: string; desc: string }> = {
  en: { price1: "€130", price2: "€140", title1: "Mon-Fri", title2: "Weekends & Holidays", desc: "Medical Visit" },
  es: { price1: "130€", price2: "140€", title1: "Lun-Vie", title2: "Fines de semana y Festivos", desc: "Visita Médica" },
  de: { price1: "130€", price2: "140€", title1: "Mo-Fr", title2: "Wochenenden & Feiertage", desc: "Hausbesuch" },
  fr: { price1: "130€", price2: "140€", title1: "Lun-Ven", title2: "Week-ends et Jours fériés", desc: "Visite Médicale" },
  fi: { price1: "130€", price2: "140€", title1: "Ma-Pe", title2: "Viikonloput & Pyhäpäivät", desc: "Lääkärin kotikäynti" },
  ar: { price1: "€130", price2: "€140", title1: "الإثنين - الجمعة", title2: "عطلات نهاية الأسبوع والأعياد", desc: "زيارة طبية" },
  no: { price1: "€130", price2: "€140", title1: "Man-Fre", title2: "Helger og Helligdager", desc: "Legebesøk" },
  da: { price1: "€130", price2: "€140", title1: "Man-Fre", title2: "Weekender & Helligdage", desc: "Lægebesøg" },
  sv: { price1: "€130", price2: "€140", title1: "Mån-Fre", title2: "Helger & Helgdagar", desc: "Läkarbesök" },
};

const BADGE_TEXT: Record<string, string> = {
  en: "Available 24/7 · Costa del Sol",
  es: "Disponible 24/7 · Costa del Sol",
  de: "Verfügbar 24/7 · Costa del Sol",
  fr: "Disponible 24/7 · Costa del Sol",
  fi: "Saatavilla 24/7 · Costa del Sol",
  ar: "متاح على مدار 24/7 · كوستا ديل سول",
  no: "Tilgjengelig 24/7 · Costa del Sol",
  da: "Tilgængelig 24/7 · Costa del Sol",
  sv: "Tillgänglig 24/7 · Costa del Sol",
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
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const currentRef = useRef<HTMLVideoElement>(null);
  const nextRef = useRef<HTMLVideoElement>(null);

  const rotatingTexts = ["Interdoc", "Home Doctor Service"];

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

  // Typewriter effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = rotatingTexts[phraseIndex];

      if (!isDeleting) {
        setDisplayedText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          // Pause before deleting
          isDeleting = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        setDisplayedText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % rotatingTexts.length;
          timeout = setTimeout(tick, 400);
          return;
        }
      }

      timeout = setTimeout(tick, isDeleting ? 60 : 90);
    };

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex flex-col justify-start"
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
        
        {/* Watermark - hidden on mobile to avoid overlap */}
        <div className="fixed bottom-24 right-4 z-30 pointer-events-none hidden sm:flex flex-col items-center gap-2">
          <p
            style={{
              fontSize: '1.1rem',
              letterSpacing: '0.08em',
              color: '#fff',
              fontWeight: 600,
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              whiteSpace: 'nowrap',
              fontFamily: '"Outfit", sans-serif',
              minHeight: '1.2em',
            }}
          >
            {displayedText}
            <span style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s', color: '#25D366' }}>|</span>
          </p>
          <Image
            src="/logo_new_v2.png"
            alt="Interdoc Watermark"
            width={300}
            height={100}
            className="w-16 sm:w-20 h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12 pb-16 w-full">
        <div className="max-w-5xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          {/* Badge */}
          <div 
            className="hero-pop-in inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default"
            style={{ animationDelay: '1.5s' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-600 text-white tracking-wide">
              {BADGE_TEXT[locale || "en"] || BADGE_TEXT["en"]}
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-800 text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg"
            aria-label={headline}
          >
            {headline.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block hero-fade-in"
                style={{ animationDelay: `${index * 0.12 + 0.2}s` }}
                aria-hidden="true"
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="hero-fade-in hero-fade-in-delay-3 text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-400 drop-shadow-md">
            {subheadline}
          </p>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start w-full">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
              {/* Pricing Info */}
          <div className="hero-fade-in hero-fade-in-delay-4 mb-10 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:px-8 sm:py-5 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-[#25D366] p-3 rounded-xl shadow-lg shadow-[#25D366]/30 flex justify-center items-center min-w-[5.5rem]">
                <span className="text-2xl font-800 text-white tracking-tight leading-none">{t.price1}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-600 leading-tight text-lg">{t.title1}</span>
                <span className="text-slate-300 text-sm font-500 mt-0.5">{t.desc}</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-4">
              <div className="bg-[#0A6EBD] p-3 rounded-xl shadow-lg shadow-[#0A6EBD]/30 flex justify-center items-center min-w-[5.5rem]">
                <span className="text-2xl font-800 text-white tracking-tight leading-none">{t.price2}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-600 leading-tight text-lg">{t.title2}</span>
                <span className="text-slate-300 text-sm font-500 mt-0.5">{t.desc}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-5 flex flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start gap-4 mb-10">
            <button
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openTriage')); }}
              id="hero-whatsapp-btn"
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
            </button>

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
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/20 lg:pl-12">
              <ul className="space-y-3 text-left inline-block" aria-label="Service features">
            {trustItems.map((item, index) => (
              <li 
                key={item} 
                className="flex items-center gap-3 hero-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.4 + 0.6}s`, animationFillMode: 'forwards' }}
              >
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
