"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHONE_URL, PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/content";

const TRANSLATIONS: Record<string, any> = {
  en: {
    call: "Call Now",
    callMobile: "Call 24/7",
    whatsapp: "WhatsApp Now",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Request Doctor to Hotel / Home",
    subVisit: "In-person doctor visit in 30–60 min · Costa del Sol",
    titleRx: "🩺 Online Consultation + QR Prescription",
    subRx: "15-min doctor teleconsultation · Official Spanish QR Prescription · All Spain",
    q1: "1. Where are you staying?",
    q1Rx: "1. Your City / Location in Spain",
    p1: "Hotel name, apartment or address...",
    p1Rx: "City or area in Spain (e.g. Marbella, Mallorca, Tenerife, Madrid)...",
    q2: "2. What are your symptoms?",
    q2Rx: "2. Reason for consultation / symptoms or regular medication",
    p2: "Briefly describe what happens...",
    p2Rx: "Describe your symptoms or regular medication for the doctor's evaluation...",
    btn: "Continue to WhatsApp",
    msg: "Hello, I need a doctor visit at my hotel/home.\n\n📍 Location: {location}\n🤒 Symptoms: {symptoms}",
    msgRx:
      "Hello, I would like to book an Express Online Doctor Consultation for medical evaluation & Official QR Prescription.\n\n📍 City in Spain: {location}\n🩺 Symptoms / Medication to evaluate: {symptoms}",
  },
  es: {
    call: "Llamar Ahora",
    callMobile: "Llamar 24/7",
    whatsapp: "WhatsApp Ahora",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Solicitar Médico a Hotel / Domicilio",
    subVisit: "Visita médica presencial en 30–60 min · Costa del Sol",
    titleRx: "🩺 Teleconsulta Médica + Receta QR",
    subRx: "Valoración médica telemática en 15 min · Receta Electrónica QR · Toda España",
    q1: "1. ¿Dónde estás alojado?",
    q1Rx: "1. ¿En qué ciudad de España estás?",
    p1: "Nombre del hotel, apartamento o dirección...",
    p1Rx: "Ciudad o zona (ej. Marbella, Mallorca, Tenerife, Madrid)...",
    q2: "2. ¿Cuáles son tus síntomas?",
    q2Rx: "2. Motivo de consulta / síntomas o medicación habitual",
    p2: "Describe brevemente qué ocurre...",
    p2Rx: "Describe tus síntomas o la medicación que necesitas valorar con el médico...",
    btn: "Continuar a WhatsApp",
    msg: "Hola, necesito un médico a domicilio/hotel.\n\n📍 Ubicación: {location}\n🤒 Síntomas: {symptoms}",
    msgRx:
      "Hola, quiero solicitar una Teleconsulta Médica Express para valoración médica y Receta Electrónica QR.\n\n📍 Ciudad: {location}\n🩺 Síntomas / Medicación a valorar: {symptoms}",
  },
  de: {
    call: "Jetzt anrufen",
    callMobile: "Anrufen 24/7",
    whatsapp: "WhatsApp jetzt",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Arztbesuch im Hotel / Haus anfordern",
    subVisit: "Persönlicher Arztbesuch in 30–60 Min · Costa del Sol",
    titleRx: "🩺 Online-Arztkonsultation + QR-Rezept",
    subRx: "Ärztliche Telekonsultation in 15 Min · Offizielles QR-Rezept · Ganz Spanien",
    q1: "1. Wo übernachten Sie?",
    q1Rx: "1. Stadt / Ort in Spanien",
    p1: "Hotelname oder Adresse...",
    p1Rx: "Stadt oder Ort in Spanien...",
    q2: "2. Was sind Ihre Symptome?",
    q2Rx: "2. Grund der Konsultation / Symptome oder Medikament",
    p2: "Beschreiben Sie kurz...",
    p2Rx: "Symptome oder Medikament für die ärztliche Bewertung...",
    btn: "Weiter zu WhatsApp",
    msg: "Hallo, ich brauche einen Arztbesuch im Hotel/Haus.\n\n📍 Ort: {location}\n🤒 Symptome: {symptoms}",
    msgRx:
      "Hallo, ich möchte eine Express-Online-Arztkonsultation für ärztliche Bewertung & QR-Rezept buchen.\n\n📍 Ort: {location}\n🩺 Symptome / Medikament: {symptoms}",
  },
  fr: {
    call: "Appeler",
    callMobile: "Appeler 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Demander un Médecin à l'Hôtel / Domicile",
    subVisit: "Visite médicale sur place en 30–60 min · Costa del Sol",
    titleRx: "🩺 Téléconsultation Médicale + Ordonnance QR",
    subRx: "Consultation médicale en ligne en 15 min · Ordonnance QR · Toute l'Espagne",
    q1: "1. Où séjournez-vous ?",
    q1Rx: "1. Ville en Espagne",
    p1: "Nom de l'hôtel ou adresse...",
    p1Rx: "Ville en Espagne...",
    q2: "2. Quels sont vos symptômes ?",
    q2Rx: "2. Motif de consultation / symptômes ou traitement",
    p2: "Décrivez brièvement...",
    p2Rx: "Symptômes ou traitement à évaluer par le médecin...",
    btn: "Aller sur WhatsApp",
    msg: "Bonjour, j'ai besoin d'un médecin à mon hôtel/domicile.\n\n📍 Lieu : {location}\n🤒 Symptômes : {symptoms}",
    msgRx:
      "Bonjour, je souhaite demander une Téléconsultation Médicale Express avec évaluation médicale et Ordonnance QR.\n\n📍 Ville : {location}\n🩺 Symptômes / Traitement : {symptoms}",
  },
  fi: {
    call: "Soita Nyt",
    callMobile: "Soita 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Tilaa Lääkäri Hotellille / Asunnolle",
    subVisit: "Lääkärin kotikäynti 30–60 min · Costa del Sol",
    titleRx: "🩺 Etälääkärikonsultaatio + QR-Resepti",
    subRx: "15 min lääkärin etäarviointi · Virallinen QR-resepti · Koko Espanja",
    q1: "1. Missä majoitut?",
    q1Rx: "1. Kaupunki Espanjassa",
    p1: "Hotellin nimi tai osoite...",
    p1Rx: "Kaupunki tai sijainti Espanjassa...",
    q2: "2. Mitkä ovat oireesi?",
    q2Rx: "2. Konsultaation syy / oireet tai lääkitys",
    p2: "Kuvaile lyhyesti...",
    p2Rx: "Oireet tai lääkitys lääkärin arviointia varten...",
    btn: "Jatka WhatsAppiin",
    msg: "Hei, tarvitsen lääkärin käynnin hotellille/asunnolle.\n\n📍 Sijainti: {location}\n🤒 Oireet: {symptoms}",
    msgRx:
      "Hei, haluan varata Lääkärin Pikakonsultaation arviointia ja QR-reseptiä varten.\n\n📍 Kaupunki: {location}\n🩺 Oireet / Lääkitys: {symptoms}",
  },
  ar: {
    call: "اتصل الان",
    callMobile: "اتصال 24/7",
    whatsapp: "واتساب",
    whatsappMobile: "واتساب 24/7",
    title: "🏨 طلب زيارة طبيب للفندق / المنزل",
    subVisit: "زيارة طبية خلال 30–60 دقيقة · كوستا ديل سول",
    titleRx: "🩺 استشارة طبية أونلاين + وصفة QR",
    subRx: "تقييم طبي عن بعد خلال 15 دقيقة · وصفة QR رسمية · كل إسبانيا",
    q1: "1. أين تقيم؟",
    q1Rx: "1. المدينة في إسبانيا",
    p1: "اسم الفندق أو العنوان...",
    p1Rx: "المدينة أو الموقع في إسبانيا...",
    q2: "2. ما هي الأعراض؟",
    q2Rx: "2. سبب الاستشارة / الأعراض أو الدواء",
    p2: "صف باختصار...",
    p2Rx: "الأعراض أو الدواء لتقييم الطبيب...",
    btn: "متابعة إلى الواتساب",
    msg: "مرحباً، أحتاج إلى زيارة طبيب للفندق/المنزل.\n\n📍 الموقع: {location}\n🤒 الأعراض: {symptoms}",
    msgRx:
      "مرحباً، أود طلب استشارة طبية سريعة أونلاين للتقييم الطبي وإصدار وصفة QR.\n\n📍 المدينة: {location}\n🩺 الأعراض / الدواء: {symptoms}",
  },
  no: {
    call: "Ring nå",
    callMobile: "Ring 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Bestill Lege til Hotell / Bolig",
    subVisit: "Legebesøk på stedet innen 30–60 min · Costa del Sol",
    titleRx: "🩺 Online Legekonsultasjon + QR-Resept",
    subRx: "15 min legevurdering på telefon/nett · Offisiell QR-resept · Hele Spania",
    q1: "1. Hvor bor du?",
    q1Rx: "1. By / Sted i Spania",
    p1: "Hotellnavn eller adresse...",
    p1Rx: "By eller sted i Spania...",
    q2: "2. Hva er symptomene dine?",
    q2Rx: "2. Årsak til konsultasjon / symptomer eller medisin",
    p2: "Beskriv kort...",
    p2Rx: "Symptomer eller medisin for legens vurdering...",
    btn: "Gå til WhatsApp",
    msg: "Hei, jeg trenger legebesøk på hotellet/boligen.\n\n📍 Sted: {location}\n🤒 Symptomer: {symptoms}",
    msgRx:
      "Hei, jeg ønsker en Ekspress Online Legekonsultasjon for medisinsk vurdering og QR-resept.\n\n📍 Sted: {location}\n🩺 Symptomer / Medisin: {symptoms}",
  },
  da: {
    call: "Ring nu",
    callMobile: "Ring 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Bestil Læge til Hotel / Feriebolig",
    subVisit: "Lægebesøg inden for 30–60 min · Costa del Sol",
    titleRx: "🩺 Online Lægekonsultation + QR-Recept",
    subRx: "15 min lægevurdering online · Officiel QR-recept · Hele Spanien",
    q1: "1. Hvor bor du?",
    q1Rx: "1. By i Spanien",
    p1: "Hotelnavn eller adresse...",
    p1Rx: "By eller sted i Spanien...",
    q2: "2. Hvad er dine symptomer?",
    q2Rx: "2. Årsag til konsultation / symptomer eller medicin",
    p2: "Beskriv kort...",
    p2Rx: "Symptomer eller medicin til lægens vurdering...",
    btn: "Gå til WhatsApp",
    msg: "Hej, jeg har brug for lægebesøg på mit hotel/feriebolig.\n\n📍 Sted: {location}\n🤒 Symptomer: {symptoms}",
    msgRx:
      "Hej, jeg ønsker en Ekspres Online Lægekonsultation til medicinsk vurdering og QR-recept.\n\n📍 Sted: {location}\n🩺 Symptomer / Medicin: {symptoms}",
  },
  sv: {
    call: "Ring nu",
    callMobile: "Ring 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Boka Läkare till Hotell / Lägenhet",
    subVisit: "Läkarbesök på plats inom 30–60 min · Costa del Sol",
    titleRx: "🩺 Online Läkarbedömning + QR-Recept",
    subRx: "15 min läkarkonsultation online · Officiellt QR-recept · Hela Spanien",
    q1: "1. Var bor du?",
    q1Rx: "1. Stad i Spanien",
    p1: "Hotellnamn eller adress...",
    p1Rx: "Stad eller plats i Spanien...",
    q2: "2. Vad har du för symptom?",
    q2Rx: "2. Orsak till konsultation / symptom eller medicin",
    p2: "Beskriv kort...",
    p2Rx: "Symptom eller medicin för läkarens bedömning...",
    btn: "Gå till WhatsApp",
    msg: "Hej, jag behöver läkarbesök på mitt hotell/boende.\n\n📍 Plats: {location}\n🤒 Symptom: {symptoms}",
    msgRx:
      "Hej, jag vill boka en Express Online Läkarkonsultation för medicinsk bedömning och QR-recept.\n\n📍 Plats: {location}\n🩺 Symptom / Medicin: {symptoms}",
  },
  ru: {
    call: "Позвонить",
    callMobile: "Звонок 24/7",
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Вызов врача в отель / на дом",
    subVisit: "Выезд врача за 30–60 мин · Коста-дель-Соль",
    titleRx: "🩺 Онлайн-консультация врача + QR-рецепт",
    subRx: "Дистанционная консультация врача за 15 мин · Официальный QR-рецепт · Вся Испания",
    q1: "1. Где вы находитесь?",
    q1Rx: "1. Город в Испании",
    p1: "Название отеля или адрес...",
    p1Rx: "Город в Испании...",
    q2: "2. Какие у вас симптомы?",
    q2Rx: "2. Причина консультации / симптомы или препарат",
    p2: "Кратко опишите проблему...",
    p2Rx: "Опишите симптомы или препарат для оценки врачом...",
    btn: "Перейти в WhatsApp",
    msg: "Здравствуйте, мне нужен вызов врача в отель/на дом.\n\n📍 Местоположение: {location}\n🤒 Симптомы: {symptoms}",
    msgRx:
      "Здравствуйте, я хочу записаться на Экспресс онлайн-консультацию врача для медицинской оценки и получения QR-рецепта.\n\n📍 Город: {location}\n🩺 Симптомы / Препарат: {symptoms}",
  },
  nl: {
    call: "Bel nu",
    callMobile: "Bellen 24/7",
    whatsapp: "WhatsApp nu",
    whatsappMobile: "WhatsApp 24/7",
    title: "🏨 Dokter aanvragen in Hotel / Appartement",
    subVisit: "Persoonlijk doktersbezoek binnen 30–60 min · Costa del Sol",
    titleRx: "🩺 Online Doktersconsult + QR-Recept",
    subRx: "Medisch teleconsult in 15 min · Officieel Spaans QR-recept · Heel Spanje",
    q1: "1. Waar verblijft u?",
    q1Rx: "1. Stad / Locatie in Spanje",
    p1: "Hotelnaam of adres...",
    p1Rx: "Stad of locatie in Spanje...",
    q2: "2. Wat zijn uw symptomen?",
    q2Rx: "2. Reden voor consult / symptomen of medicatie",
    p2: "Beschrijf kort uw klachten...",
    p2Rx: "Symptomen of medicatie ter beoordeling door de arts...",
    btn: "Verder naar WhatsApp",
    msg: "Hallo, ik heb een doktersbezoek nodig in mijn hotel/appartement.\n\n📍 Locatie: {location}\n🤒 Symptomen: {symptoms}",
    msgRx:
      "Hallo, ik wil een Spoed Online Doktersconsult aanvragen voor medische beoordeling en QR-recept.\n\n📍 Locatie: {location}\n🩺 Symptomen / Medicatie: {symptoms}",
  },
};

export default function FloatingCTA({ locale: propLocale = "en" }: { locale?: string }) {
  const pathname = usePathname();
  const pathLocale = pathname ? pathname.split("/")[1] : null;
  const activeLocale = (pathLocale && TRANSLATIONS[pathLocale]) ? pathLocale : propLocale;
  
  const [isOpen, setIsOpen] = useState(false);
  const [requestType, setRequestType] = useState<"visit" | "rx">("visit");
  const [location, setLocation] = useState("");
  const [symptoms, setSymptoms] = useState("");
  
  const t = TRANSLATIONS[activeLocale] || TRANSLATIONS["en"];

  useEffect(() => {
    const handleOpen = () => {
      setRequestType("visit");
      setIsOpen(true);
    };
    const handleOpenRx = () => {
      setRequestType("rx");
      setIsOpen(true);
    };
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const rxTrigger = target.closest("[data-triage='rx']");
      if (rxTrigger) {
        e.preventDefault();
        setRequestType("rx");
        setIsOpen(true);
        return;
      }
      const visitTrigger = target.closest("[data-triage='visit']");
      if (visitTrigger) {
        e.preventDefault();
        setRequestType("visit");
        setIsOpen(true);
      }
    };
    window.addEventListener("openTriage", handleOpen);
    window.addEventListener("openTriagePrescription", handleOpenRx);
    document.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("openTriage", handleOpen);
      window.removeEventListener("openTriagePrescription", handleOpenRx);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setRequestType("visit");
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    let text = "";
    const loc = location.trim();
    const sym = symptoms.trim();
    const template = requestType === "rx" ? t.msgRx || t.msg : t.msg;
    const baseGreeting =
      template.split("\n\n")[0] ||
      (requestType === "rx"
        ? "Hello, I need an Express Online Consultation + QR Prescription."
        : "Hello, I need a doctor.");

    if (loc && sym) {
      text = template.replace("{location}", loc).replace("{symptoms}", sym);
    } else if (loc) {
      text = `${baseGreeting}\n\n📍 ${loc}`;
    } else if (sym) {
      text = `${baseGreeting}\n\n${requestType === "rx" ? "💊" : "🤒"} ${sym}`;
    } else {
      text = baseGreeting;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
    setIsOpen(false);
    setLocation("");
    setSymptoms("");
  };

  const whatsappIcon = (
    <svg className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  return (
    <>
      {/* ── Mobile & Tablet Sticky Emergency Bar (< lg) ── */}
      <aside
        className="fixed bottom-0 left-0 right-0 z-[10000] lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
        aria-label="Emergency Contact Bar"
      >
        <div className="max-w-lg mx-auto flex items-center gap-2.5">
          {/* Call 24/7 Button */}
          <a
            href={PHONE_URL}
            id="mobile-sticky-call-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            aria-label={`${t.callMobile} ${PHONE_NUMBER}`}
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <svg
              className="w-4 h-4 text-sky-400 flex-shrink-0"
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
            <span className="truncate">{t.callMobile}</span>
          </a>

          {/* WhatsApp 24/7 Button */}
          <button
            onClick={handleWhatsAppClick}
            id="mobile-sticky-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] active:bg-[#1da851] text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all active:scale-[0.98]"
            aria-label={t.whatsappMobile}
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="truncate">{t.whatsappMobile}</span>
          </button>
        </div>
      </aside>

      {/* ── Dedicated Triage Modals: Separate Modal for Home Visit vs Teleconsultation ── */}
      {isOpen && (
        <div
          dir={activeLocale === "ar" ? "rtl" : "ltr"}
          className="fixed inset-0 z-[10002] flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs"
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 mb-16 sm:mb-0 transform transition-all animate-in fade-in slide-in-from-bottom-6 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-start gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0 ${
                      requestType === "rx" ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                  ></div>
                  <p className="font-800 text-slate-900 text-base leading-snug">
                    {requestType === "rx" ? t.titleRx : t.title}
                  </p>
                </div>
                <p className="text-xs text-slate-500 font-600 mt-1">
                  {requestType === "rx" ? t.subRx : t.subVisit}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-700 text-slate-600 mb-1.5 uppercase tracking-wider">
                  {requestType === "rx" ? t.q1Rx : t.q1}
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={requestType === "rx" ? t.p1Rx : t.p1}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0A6EBD] focus:ring-1 focus:ring-[#0A6EBD] transition-all bg-slate-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-700 text-slate-600 mb-1.5 uppercase tracking-wider">
                  {requestType === "rx" ? t.q2Rx : t.q2}
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder={requestType === "rx" ? t.p2Rx : t.p2}
                  rows={2}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0A6EBD] focus:ring-1 focus:ring-[#0A6EBD] transition-all bg-slate-50 focus:bg-white resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-800 text-sm hover:bg-[#1da851] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 active:scale-[0.98]"
              >
                {whatsappIcon}
                {t.btn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Desktop Floating Action Cards (lg:flex) ── */}
      <aside
        dir={activeLocale === "ar" ? "rtl" : "ltr"}
        className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col gap-3 pointer-events-auto"
        aria-label="Quick contact"
      >
        <button
          onClick={handleWhatsAppClick}
          id="floating-whatsapp-desktop"
          className="flex items-center justify-start gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-2xl shadow-xl hover:bg-[#1da851] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[230px]"
          aria-label={t.whatsapp}
        >
          {whatsappIcon}
          <div className="flex flex-col text-start">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-tight">Online 24/7</span>
            <span className="text-sm font-extrabold tracking-wide leading-tight">{t.whatsapp}</span>
          </div>
        </button>
        <a
          href={PHONE_URL}
          id="floating-call-desktop"
          className="flex items-center justify-start gap-3 px-5 py-3.5 bg-[#0A6EBD] text-white rounded-2xl shadow-xl hover:bg-[#085a99] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[230px]"
          aria-label={`${t.call} ${PHONE_NUMBER}`}
        >
          <svg className="w-5 h-5 text-sky-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="flex flex-col text-start">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-200 leading-tight">{t.call}</span>
            <span dir="ltr" className="text-sm font-extrabold tracking-wide leading-tight">{PHONE_NUMBER}</span>
          </div>
        </a>
      </aside>
    </>
  );
}
