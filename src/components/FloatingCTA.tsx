"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHONE_URL, WHATSAPP_NUMBER } from "@/data/content";

const TRANSLATIONS: Record<string, any> = {
  en: { call: "Call Now", whatsapp: "WhatsApp Now", whatsappMobile: "WhatsApp", title: "Quick Medical Request", q1: "1. Where are you staying?", p1: "Hotel name or address...", q2: "2. What are your symptoms?", p2: "Briefly describe what happens...", btn: "Continue to WhatsApp", msg: "Hello, I need a doctor.\n\n📍 Location: {location}\n🤒 Symptoms: {symptoms}" },
  es: { call: "Llamar Ahora", whatsapp: "WhatsApp Ahora", whatsappMobile: "WhatsApp", title: "Petición Médica", q1: "1. ¿Dónde estás alojado?", p1: "Nombre del hotel o dirección...", q2: "2. ¿Cuáles son tus síntomas?", p2: "Describe brevemente qué ocurre...", btn: "Continuar a WhatsApp", msg: "Hola, necesito un médico.\n\n📍 Ubicación: {location}\n🤒 Síntomas: {symptoms}" },
  de: { call: "Jetzt anrufen", whatsapp: "WhatsApp jetzt", whatsappMobile: "WhatsApp", title: "Schnelle ärztliche Anfrage", q1: "1. Wo übernachten Sie?", p1: "Hotelname oder Adresse...", q2: "2. Was sind Ihre Symptome?", p2: "Beschreiben Sie kurz...", btn: "Weiter zu WhatsApp", msg: "Hallo, ich brauche einen Arzt.\n\n📍 Ort: {location}\n🤒 Symptome: {symptoms}" },
  fr: { call: "Appeler", whatsapp: "WhatsApp", whatsappMobile: "WhatsApp", title: "Demande Médicale Rapide", q1: "1. Où séjournez-vous ?", p1: "Nom de l'hôtel ou adresse...", q2: "2. Quels sont vos symptômes ?", p2: "Décrivez brièvement...", btn: "Aller sur WhatsApp", msg: "Bonjour, j'ai besoin d'un médecin.\n\n📍 Lieu : {location}\n🤒 Symptômes : {symptoms}" },
  fi: { call: "Soita Nyt", whatsapp: "WhatsApp", whatsappMobile: "WhatsApp", title: "Nopea pyyntö", q1: "1. Missä majoitut?", p1: "Hotellin nimi tai osoite...", q2: "2. Mitkä ovat oireesi?", p2: "Kuvaile lyhyesti...", btn: "Jatka WhatsAppiin", msg: "Hei, tarvitsen lääkäriä.\n\n📍 Sijainti: {location}\n🤒 Oireet: {symptoms}" },
  ar: { call: "اتصل الان", whatsapp: "واتساب", whatsappMobile: "واتساب", title: "طلب طبي سريع", q1: "1. أين تقيم؟", p1: "اسم الفندق أو العنوان...", q2: "2. ما هي الأعراض؟", p2: "صف باختصار...", btn: "متابعة إلى الواتساب", msg: "مرحباً، أحتاج إلى طبيب.\n\n📍 الموقع: {location}\n🤒 الأعراض: {symptoms}" },
  no: { call: "Ring nå", whatsapp: "WhatsApp", whatsappMobile: "WhatsApp", title: "Rask forespørsel", q1: "1. Hvor bor du?", p1: "Hotellnavn eller adresse...", q2: "2. Hva er symptomene dine?", p2: "Beskriv kort...", btn: "Gå til WhatsApp", msg: "Hei, jeg trenger en lege.\n\n📍 Sted: {location}\n🤒 Symptomer: {symptoms}" },
  da: { call: "Ring nu", whatsapp: "WhatsApp", whatsappMobile: "WhatsApp", title: "Hurtig anmodning", q1: "1. Hvor bor du?", p1: "Hotelnavn eller adresse...", q2: "2. Hvad er dine symptomer?", p2: "Beskriv kort...", btn: "Gå til WhatsApp", msg: "Hej, jeg har brug for en læge.\n\n📍 Sted: {location}\n🤒 Symptomer: {symptoms}" },
  sv: { call: "Ring nu", whatsapp: "WhatsApp", whatsappMobile: "WhatsApp", title: "Snabb begäran", q1: "1. Var bor du?", p1: "Hotellnamn eller adress...", q2: "2. Vad har du för symptom?", p2: "Beskriv kort...", btn: "Gå till WhatsApp", msg: "Hej, jag behöver en läkare.\n\n📍 Plats: {location}\n🤒 Symptom: {symptoms}" }
};

export default function FloatingCTA({ locale: propLocale = "en" }: { locale?: string }) {
  const pathname = usePathname();
  const pathLocale = pathname ? pathname.split('/')[1] : null;
  const activeLocale = (pathLocale && TRANSLATIONS[pathLocale]) ? pathLocale : propLocale;
  
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [symptoms, setSymptoms] = useState("");
  
  const t = TRANSLATIONS[activeLocale] || TRANSLATIONS["en"];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openTriage', handleOpen);
    return () => window.removeEventListener('openTriage', handleOpen);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    const text = t.msg.replace("{location}", location).replace("{symptoms}", symptoms);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
    setLocation("");
    setSymptoms("");
  };

  const whatsappIcon = (
    <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:bottom-6 lg:right-6 lg:left-auto"
      role="region"
      aria-label="Quick contact"
    >
      {/* Triage Modal */}
      {isOpen && (
        <div className="absolute bottom-full right-4 left-4 lg:left-auto lg:right-0 mb-4 lg:w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 transform origin-bottom transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="font-700 text-slate-800">{t.title}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-600 text-slate-500 mb-1.5 uppercase tracking-wider">
                {t.q1}
              </label>
              <input 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder={t.p1} 
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0A6EBD] focus:ring-1 focus:ring-[#0A6EBD] transition-all bg-slate-50 focus:bg-white" 
              />
            </div>
            <div>
              <label className="block text-xs font-600 text-slate-500 mb-1.5 uppercase tracking-wider">
                {t.q2}
              </label>
              <textarea 
                value={symptoms} 
                onChange={(e) => setSymptoms(e.target.value)} 
                placeholder={t.p2} 
                rows={2} 
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0A6EBD] focus:ring-1 focus:ring-[#0A6EBD] transition-all bg-slate-50 focus:bg-white resize-none" 
              />
            </div>
            <button 
              onClick={handleSend} 
              disabled={!location || !symptoms} 
              className="w-full py-3 bg-[#25D366] text-white rounded-xl font-700 text-sm hover:bg-[#1da851] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              {whatsappIcon}
              {t.btn}
            </button>
          </div>
        </div>
      )}

      {/* Mobile: Full-width bar */}
      <div className="flex lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative z-10">
        <a
          href={PHONE_URL}
          id="floating-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-600 text-base active:bg-slate-700 transition-colors"
          aria-label={t.call}
        >
          <svg
            className="w-5 h-5"
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
          onClick={handleWhatsAppClick}
          id="floating-whatsapp-btn"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-600 text-base active:bg-[#1da851] transition-colors"
          aria-label={t.whatsappMobile}
        >
          {whatsappIcon}
          {t.whatsappMobile}
        </button>
      </div>

      {/* Desktop: Floating buttons */}
      <div className="hidden lg:flex flex-col gap-3 relative z-10">
        <button
          onClick={handleWhatsAppClick}
          id="floating-whatsapp-desktop"
          className="flex items-center justify-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-2xl shadow-xl hover:bg-[#1da851] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 font-600"
          aria-label={t.whatsapp}
        >
          {whatsappIcon}
          {t.whatsapp}
        </button>
        <a
          href={PHONE_URL}
          id="floating-call-desktop"
          className="flex items-center gap-3 px-5 py-3.5 bg-[#0A6EBD] text-white rounded-2xl shadow-xl hover:bg-[#085a99] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 font-600"
          aria-label={t.call}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t.call}
        </a>
      </div>
    </div>
  );
}
