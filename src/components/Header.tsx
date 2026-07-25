"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PHONE_URL, WHATSAPP_URL } from "@/data/content";

const languages = [
  { code: "en", label: "English", flagCode: "gb" },
  { code: "es", label: "Español", flagCode: "es" },
  { code: "de", label: "Deutsch", flagCode: "de" },
  { code: "fr", label: "Français", flagCode: "fr" },
  { code: "fi", label: "Suomi", flagCode: "fi" },
  { code: "ar", label: "العربية", flagCode: "ma" },
  { code: "no", label: "Norsk", flagCode: "no" },
  { code: "da", label: "Dansk", flagCode: "dk" },
  { code: "sv", label: "Svenska", flagCode: "se" },
];

interface HeaderProps {
  locale?: string;
  currentPath?: string;
}

export default function Header({ locale = "en" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const navLinks = {
    en: [
      { href: "/#services", label: "Services" },
      { href: "/#areas", label: "Areas" },
      { href: "/blog", label: "Blog" },
      { href: "/#contact", label: "Contact" },
    ],
    es: [
      { href: "/es/#services", label: "Servicios" },
      { href: "/es/#areas", label: "Zonas" },
      { href: "/es/blog", label: "Blog" },
      { href: "/es/#contact", label: "Contacto" },
    ],
    de: [
      { href: "/de/#services", label: "Leistungen" },
      { href: "/de/#areas", label: "Gebiete" },
      { href: "/de/blog", label: "Blog" },
      { href: "/de/#contact", label: "Kontakt" },
    ],
    fr: [
      { href: "/fr/#services", label: "Services" },
      { href: "/fr/#areas", label: "Zones" },
      { href: "/fr/blog", label: "Blog" },
      { href: "/fr/#contact", label: "Contact" },
    ],
    fi: [
      { href: "/fi/#services", label: "Palvelut" },
      { href: "/fi/#areas", label: "Alueet" },
      { href: "/fi/blog", label: "Blogi" },
      { href: "/fi/#contact", label: "Yhteystiedot" },
    ],
    ar: [
      { href: "/ar/#services", label: "الخدمات" },
      { href: "/ar/#areas", label: "المناطق" },
      { href: "/ar/blog", label: "المدونة" },
      { href: "/ar/#contact", label: "اتصل بنا" },
    ],
    no: [
      { href: "/no/#services", label: "Tjenester" },
      { href: "/no/#areas", label: "Områder" },
      { href: "/no/blog", label: "Blogg" },
      { href: "/no/#contact", label: "Kontakt" },
    ],
    da: [
      { href: "/da/#services", label: "Ydelser" },
      { href: "/da/#areas", label: "Områder" },
      { href: "/da/blog", label: "Blog" },
      { href: "/da/#contact", label: "Kontakt" },
    ],
    sv: [
      { href: "/sv/#services", label: "Tjänster" },
      { href: "/sv/#areas", label: "Områden" },
      { href: "/sv/blog", label: "Blogg" },
      { href: "/sv/#contact", label: "Kontakt" },
    ],
  };

  const localePaths: Record<string, string> = {
    en: "/",
    es: "/es/",
    de: "/de/",
    fr: "/fr/",
    fi: "/fi/",
    ar: "/ar/",
    no: "/no/",
    da: "/da/",
    sv: "/sv/",
  };

  const btnTranslations: Record<string, { call: string; whatsapp: string }> = {
    en: { call: "Call Now", whatsapp: "WhatsApp" },
    es: { call: "Llamar", whatsapp: "WhatsApp" },
    de: { call: "Anrufen", whatsapp: "WhatsApp" },
    fr: { call: "Appeler", whatsapp: "WhatsApp" },
    fi: { call: "Soita Nyt", whatsapp: "WhatsApp" },
    ar: { call: "اتصل الان", whatsapp: "واتساب" },
    no: { call: "Ring nå", whatsapp: "WhatsApp" },
    da: { call: "Ring nu", whatsapp: "WhatsApp" },
    sv: { call: "Ring nu", whatsapp: "WhatsApp" },
  };

  const links = navLinks[locale as keyof typeof navLinks] || navLinks.en;
  const t = btnTranslations[locale as keyof typeof btnTranslations] || btnTranslations.en;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm flex flex-col">
      {/* Mobile Top Bar for Languages */}
      <div className="lg:hidden w-full bg-slate-50 border-b border-slate-100 py-2.5 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-2 w-max">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={localePaths[lang.code] || "/"}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[13px] border transition-colors ${lang.code === locale
                ? "bg-[#e8f4fd] border-[#0A6EBD] text-[#0A6EBD] font-600"
                : "bg-white border-slate-200 text-slate-600 hover:bg-[#f0f7ff]"
                }`}
            >
              <span aria-hidden="true" className="w-3.5 h-3.5 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 flex items-center justify-center">
                <img
                  src={`https://flagcdn.com/${lang.flagCode}.svg`}
                  alt={lang.label}
                  className="w-full h-full object-cover scale-110"
                />
              </span>
              <span>{lang.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-100 lg:border-none">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <Link
            href={localePaths[locale] || "/"}
            className="flex items-center gap-2 group"
            aria-label="Interdoc - Home"
          >
            <Image
              src="/logo_new_v2.png"
              alt="Interdoc logo"
              width={60}
              height={60}
              priority
              className="h-16 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="text-lg lg:text-xl font-800 text-slate-900 leading-tight tracking-tight uppercase transition-colors duration-200 group-hover:text-[#0A6EBD]">
                Interdoc
              </p>
              <p className="text-sm text-[#0A6EBD] font-600 uppercase tracking-widest transition-opacity duration-200 group-hover:opacity-80">
                Home Doctor Service
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-base font-600 text-slate-600 hover:text-[#0A6EBD] transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-[#0A6EBD] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                id="lang-switcher-btn"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 border border-slate-200 transition-colors duration-200"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
              >
                <span aria-hidden="true" className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={`https://flagcdn.com/${currentLang.flagCode}.svg`}
                    alt={currentLang.label}
                    className="w-full h-full object-cover scale-110"
                  />
                </span>
                <span className="font-500">{currentLang.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {langOpen && (
                <div
                  role="listbox"
                  aria-label="Languages"
                  className="absolute right-0 mt-2 w-44 bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={localePaths[lang.code] || "/"}
                      role="option"
                      aria-selected={lang.code === locale}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${lang.code === locale
                        ? "bg-[#e8f4fd] hover:bg-[#d6ebfa] text-[#0A6EBD] font-600"
                        : "text-slate-700 hover:bg-[#f0f7ff] hover:text-[#0A6EBD] font-500"
                        }`}
                    >
                      <span aria-hidden="true" className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={`https://flagcdn.com/${lang.flagCode}.svg`}
                          alt={lang.label}
                          className="w-full h-full object-cover scale-110"
                        />
                      </span>
                      <span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={PHONE_URL}
              id="header-call-btn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-600 hover:bg-slate-700 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
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
              {t.call}
            </a>

            <button
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openTriage')); }}
              id="header-whatsapp-btn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-600 hover:bg-[#1da851] transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t.whatsapp}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t border-slate-100 py-4"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-500 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 px-1">


              <a
                href={PHONE_URL}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.call}
              </a>
              <button
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openTriage')); }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-sm font-600"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.whatsapp}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
