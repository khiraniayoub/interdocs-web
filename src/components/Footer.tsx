import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, PHONE_URL, WHATSAPP_NUMBER, EMAIL_ADDRESS, EMAIL_URL, CITIES, type Locale } from "@/data/content";

interface FooterProps {
  disclaimer: string;
  rights: string;
  locale: string;
}

export default function Footer({ disclaimer, rights, locale }: FooterProps) {
  const year = new Date().getFullYear();
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
    ru: "/ru/",
    nl: "/nl/",
  };
  const homeHref = localePaths[locale] || "/";

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href={homeHref}
              className="inline-flex flex-col lg:flex-row items-center gap-3 mb-5"
              aria-label="Interdocs Medical — 24/7 Private Doctor Costa del Sol"
            >
              <div className="bg-white rounded-xl px-2 py-2 flex items-center justify-center">
                <Image
                  src="/mi_logo.webp"
                  alt="Interdocs Medical logo"
                  width={200}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-700 text-white uppercase text-sm tracking-wide">Interdocs Medical</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Costa del Sol Medical Care</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              {disclaimer}
            </p>

            {/* Emergency notice */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-900/40 border border-red-700/40 rounded-xl mb-6">
              <svg
                className="w-4 h-4 text-red-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-red-300 text-xs font-600">
                Life-threatening emergency? Call{" "}
                <a href="tel:112" className="underline font-700">
                  112
                </a>
              </span>
            </div>

            {/* Trust Badges & Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 inline-flex items-center gap-3 w-56 shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-[#0A6EBD]/20 border border-[#0A6EBD]/40 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-700 text-xs text-white leading-tight">Licensed Medical Care</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">24/7 Costa del Sol</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Interdocs Medical on WhatsApp"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/interdocsmedical"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Interdocs Medical on Instagram"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61594814065218"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Interdocs Medical on Facebook"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/interdocsmedical"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Interdocs Medical on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:border-[#0077B5]/50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Sharing Options */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 w-full max-w-md">
              <p className="text-xs font-600 text-slate-400 mb-2.5">
                {locale === "es"
                  ? "Compartir este servicio:"
                  : locale === "de"
                  ? "Diesen Service teilen:"
                  : locale === "fr"
                  ? "Partager ce service :"
                  : locale === "fi"
                  ? "Jaa tämä palvelu:"
                  : locale === "ar"
                  ? "مشاركة هذه الخدمة:"
                  : locale === "no"
                  ? "Del denne tjenesten:"
                  : locale === "da"
                  ? "Del denne tjeneste:"
                  : locale === "sv"
                  ? "Dela denna tjänst:"
                  : locale === "ru"
                  ? "Поделиться сервисом:"
                  : locale === "nl"
                  ? "Deel deze dienst:"
                  : "Share this service:"}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `Interdocs Medical - Private Doctor 24/7 in Costa del Sol: https://www.interdocsmedical.com${homeHref}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-500 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://www.interdocsmedical.com${homeHref}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-700/50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white text-xs font-500 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "Private Doctor 24/7 in Costa del Sol - Home & Hotel visits"
                  )}&url=${encodeURIComponent(`https://www.interdocsmedical.com${homeHref}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white text-xs font-500 transition-colors"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X</span>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://www.interdocsmedical.com${homeHref}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-700/50 text-[#0077B5] hover:bg-[#0077B5] hover:text-white text-xs font-500 transition-colors"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
            <p className="font-700 text-white mb-5 text-sm tracking-wide uppercase">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_URL}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                  aria-label={`Call us at ${PHONE_NUMBER}`}
                >
                  <svg
                    className="w-4 h-4 text-[#0A6EBD]"
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
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                  aria-label="Contact via WhatsApp"
                >
                  <svg
                    className="w-4 h-4 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_URL}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                  aria-label={`Email us at ${EMAIL_ADDRESS}`}
                >
                  <svg
                    className="w-4 h-4 text-[#0A6EBD]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 text-[#0A6EBD]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Available 24 hours · 7 days
              </li>
              <li className="pt-2">
                <Link
                  href="/colaboradores"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors bg-sky-950/60 px-3 py-1.5 rounded-lg border border-sky-800/60"
                >
                  <span>🤝</span>
                  <span>Convenios & Colaboradores</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (SEO Hub) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
            <p className="font-700 text-white mb-5 text-sm tracking-wide uppercase">
              Service Areas
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-400">
              {CITIES.map((city) => {
                const currentLocale = (locale as Locale) || "en";
                const localeSlug = city.localeSlugs[currentLocale] || city.localeSlugs["en"];
                const href =
                  currentLocale === "en"
                    ? `/${localeSlug}/`
                    : `/${currentLocale}/${localeSlug}/`;
                return (
                  <Link
                    key={city.slug}
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            © {year} Interdocs Medical. {rights}
          </p>
          <p className="text-slate-600 text-xs">Costa del Sol · Málaga · Spain</p>
        </div>
      </div>
    </footer>
  );
}
