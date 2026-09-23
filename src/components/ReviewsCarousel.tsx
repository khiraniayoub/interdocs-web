"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/data/content";

interface WhyChooseProps {
  locale?: string;
}

interface Commitment {
  icon: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  highlight: Record<Locale, string>;
  color: string;
  badgeBg: string;
}

const SECTION_STRINGS: {
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  trustTitle: Record<Locale, string>;
  trustSubtitle: Record<Locale, string>;
} = {
  badge: {
    en: "Our Commitments",
    es: "Garantías del Servicio",
    de: "Unsere Garantien",
    fr: "Nos Engagements",
    fi: "Palvelutakuumme",
    ar: "ضمانات خدمتنا",
    no: "Våre garantier",
    da: "Vores garantier",
    sv: "Våra garantier",
    ru: "Наши гарантии",
    nl: "Onze garanties",
  },
  title: {
    en: "Why Choose Interdocs Medical?",
    es: "¿Por Qué Elegir Interdocs Medical?",
    de: "Warum Interdocs Medical wählen?",
    fr: "Pourquoi Choisir Interdocs Medical ?",
    fi: "Miksi valita Interdocs Medical?",
    ar: "لماذا تختار Interdocs Medical؟",
    no: "Hvorfor velge Interdocs Medical?",
    da: "Hvorfor vælge Interdocs Medical?",
    sv: "Varför välja Interdocs Medical?",
    ru: "Почему выбирают Interdocs Medical?",
    nl: "Waarom kiezen voor Interdocs Medical?",
  },
  subtitle: {
    en: "High-standard private medical care delivered directly to your accommodation with zero hospital delays.",
    es: "Atención médica privada de máxima calidad, directa en tu alojamiento sin esperas hospitalarias.",
    de: "Erstklassige private medizinische Versorgung direkt in Ihrer Unterkunft ohne Wartezeiten im Krankenhaus.",
    fr: "Des soins médicaux privés de haute qualité dispensés directement à votre hébergement sans attente à l'hôpital.",
    fi: "Korkealaatuista yksityistä sairaanhoitoa suoraan majapaikkaasi ilman sairaalajonoja.",
    ar: "رعاية طبية خاصة عالية الجودة تصل مباشرة إلى مكان إقامتك دون أي انتظار في المستشفيات.",
    no: "Førsteklasses privat legehjelp levert direkte til ditt overnattingssted uten sykehuskøer.",
    da: "Privat lægehjælp af højeste kvalitet leveret direkte til din feriebolig uden hospitalsventetid.",
    sv: "Privat läkarvård av högsta kvalitet levererad direkt till ditt boende utan sjukhusköer.",
    ru: "Частная медицинская помощь высшего уровня прямо в вашем отеле или апартаментах без ожидания в больницах.",
    nl: "Hoogwaardige particuliere medische zorg rechtstreeks op uw verblijfplaats zonder ziekenhuiswachttijden.",
  },
  trustTitle: {
    en: "100% Licensed Doctors",
    es: "Doctores Colegiados",
    de: "100% Approbierte Ärzte",
    fr: "Médecins 100% Agréés",
    fi: "Laillistetut lääkärit",
    ar: "أطباء مرخصون 100%",
    no: "Autoriserte leger",
    da: "Autoriserede læger",
    sv: "Legitimerade läkare",
    ru: "100% лицензированные врачи",
    nl: "100% Gecertificeerde artsen",
  },
  trustSubtitle: {
    en: "Registered & verified physicians",
    es: "Médicos colegiados en España",
    de: "In Spanien registrierte Ärzte",
    fr: "Médecins inscrits à l'Ordre en Espagne",
    fi: "Espanjassa rekisteröidyt lääkärit",
    ar: "أطباء مسجلون ومعتمدون في إسبانيا",
    no: "Registrerte leger i Spania",
    da: "Registrerede læger i Spanien",
    sv: "Registrerade läkare i Spanien",
    ru: "Зарегистрированные врачи в Испании",
    nl: "Geregistreerde artsen in Spanje",
  },
};

const COMMITMENTS: Commitment[] = [
  {
    icon: "⏱️",
    badge: {
      en: "Fast Response",
      es: "Respuesta Rápida",
      de: "Schnelle Ankunft",
      fr: "Intervention Rapide",
      fi: "Nopea saapuminen",
      ar: "استجابة سريعة",
      no: "Rask respons",
      da: "Hurtig respons",
      sv: "Snabb inställelse",
      ru: "Быстрый ответ",
      nl: "Snelle reactie",
    },
    title: {
      en: "At Your Door in 45–60 Minutes",
      es: "En tu Puerta en 45–60 Minutos",
      de: "In 45–60 Minuten vor Ort",
      fr: "À Votre Porte en 45–60 Minutes",
      fi: "Ovellasi 45–60 minuutissa",
      ar: "عند بابك خلال 45-60 دقيقة",
      no: "På døren innen 45–60 minutter",
      da: "Ved din dør på 45–60 minutter",
      sv: "Vid din dörr inom 45–60 minuter",
      ru: "У вашей двери через 45–60 минут",
      nl: "Binnen 45–60 minuten bij u aan de deur",
    },
    description: {
      en: "Avoid crowded waiting rooms in unfamiliar hospitals. A private licensed doctor travels directly to your hotel room, apartment, or villa anywhere along the Costa del Sol.",
      es: "Evita colas y largas esperas en hospitales desconocidos. Un médico privado acude directamente a tu habitación de hotel, apartamento o villa en toda la Costa del Sol.",
      de: "Vermeiden Sie überfüllte Wartezimmer in fremden Krankenhäusern. Ein approbierter Privatarzt kommt direkt in Ihr Hotel, Apartment oder Ihre Villa an der Costa del Sol.",
      fr: "Évitez les salles d'attente bondées des hôpitaux inconnus. Un médecin privé agréé se rend directement dans votre chambre d'hôtel ou appartement sur la Costa del Sol.",
      fi: "Vältä ruuhkaiset odotushuoneet vieraissa sairaaloissa. Laillistettu lääkäri matkustaa suoraan hotellihuoneeseesi tai asuntoosi Costa del Solilla.",
      ar: "تجنب غرف الانتظار المزدحمة في المستشفيات غير المألوفة. ينتقل طبيب خاص مرخص مباشرة إلى غرفتك الفندقية أو شقتك في أي مكان على طول كوستا ديل سول.",
      no: "Unngå overfylte venterom på ukjente sykehus. En autorisert privatlege reiser direkte til ditt hotellrom eller leilighet hvor som helst på Costa del Sol.",
      da: "Undgå overfyldte venteværelser på ukendte hospitaler. En autoriseret privatlæge kører direkte til dit hotelværelse eller lejlighed på Costa del Sol.",
      sv: "Undvik trånga väntrum på obekanta sjukhus. En legitimerad privatläkare reser direkt till ditt hotellrum eller lägenhet längs hela Costa del Sol.",
      ru: "Избегайте переполненных залов ожидания в незнакомых больницах. Лицензированный частный врач приедет прямо в ваш номер отеля или апартаменты по всему побережью Коста-дель-Соль.",
      nl: "Vermijd overvolle wachtkamers in onbekende ziekenhuizen. Een gediplomeerde privéarts reist rechtstreeks naar uw hotelkamer, appartement of villa overal aan de Costa del Sol.",
    },
    highlight: {
      en: "Direct hotel & home visits",
      es: "Visitas directas a hotel y domicilio",
      de: "Direkte Hotel- und Hausbesuche",
      fr: "Visites directes à l'hôtel et à domicile",
      fi: "Suorat hotelli- ja kotikäynnit",
      ar: "زيارات مباشرة للفندق والمنزل",
      no: "Direkte hotell- og hjemmebesøk",
      da: "Direkte hotel- og hjemmebesøg",
      sv: "Direkta hotell- och hembesök",
      ru: "Прямые визиты в отель и на дом",
      nl: "Directe hotel- en huisbezoeken",
    },
    color: "from-blue-500/10 to-blue-500/5 text-blue-700 border-blue-100",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: "🌐",
    badge: {
      en: "Multilingual",
      es: "Multilingüe",
      de: "Mehrsprachig",
      fr: "Multilingue",
      fi: "Monikielinen",
      ar: "متعدد اللغات",
      no: "Flerspråklig",
      da: "Flersproget",
      sv: "Flerspråkig",
      ru: "Многоязычный сервис",
      nl: "Meertalig",
    },
    title: {
      en: "Fluent Care with No Language Barrier",
      es: "Atención Fluida Sin Barrera de Idioma",
      de: "Reibungslose Behandlung ohne Sprachbarriere",
      fr: "Des Soins Fluides Sans Barrière de la Langue",
      fi: "Sujuvaa hoitoa ilman kielimuuria",
      ar: "رعاية سلسة دون أي عائق لغوي",
      no: "Trygg behandling uten språkbarrierer",
      da: "Flydende lægehjælp uden sprogbarrierer",
      sv: "Smidig vård utan språkbarriärer",
      ru: "Консультации без языкового барьера",
      nl: "Vloeiende zorg zonder taalbarrière",
    },
    description: {
      en: "Consultations conducted in English, Spanish, German, and French. Explain your symptoms comfortably and clearly understand your diagnosis, treatment, and medication.",
      es: "Consultas en inglés, español, alemán y francés. Explica tus síntomas con tranquilidad y entiende tu diagnóstico y tratamiento sin confusiones.",
      de: "Konsultationen auf Englisch, Spanisch, Deutsch und Französisch. Erklären Sie Ihre Symptome entspannt und verstehen Sie Diagnose und Medikation ganz genau.",
      fr: "Consultations en anglais, espagnol, allemand et français. Expliquez vos symptômes en toute confiance et comprenez clairement votre diagnostic et ordonnance.",
      fi: "Lääkärikonsultaatiot englanniksi, espanjaksi, saksaksi ja ranskaksi. Kerro oireistasi vaivattomasti ja ymmärrä diagnoosi ja hoito selkeästi.",
      ar: "استشارات تجرى باللغات الإنجليزية والإسبانية والألمانية والفرنسية. اشرح أعراضك بكل راحة وافهم تشخيصك وعلاجك بدقة.",
      no: "Konsultasjoner på engelsk, spansk, tysk og fransk. Forklar symptomene dine i ro og mak og forstå diagnose og behandling fullt ut.",
      da: "Konsultationer på engelsk, spansk, tysk og fransk. Forklar dine symptomer uden besvær og få fuld klarhed over diagnose og behandling.",
      sv: "Konsultationer på engelska, spanska, tyska och franska. Förklara dina symtom i lugn och ro och förstå din diagnos och behandling tydligt.",
      ru: "Консультации на английском, испанском, немецком и французском языках. Опишите ваши симптомы в комфортной обстановке и получите понятный диагноз и схему лечения.",
      nl: "Consultaties in het Engels, Spaans, Duits en Frans. Leg uw symptomen comfortabel uit en begrijp uw diagnose, behandeling en medicatie volkomen helder.",
    },
    highlight: {
      en: "English & European languages",
      es: "Inglés y lenguas europeas",
      de: "Englisch & europäische Sprachen",
      fr: "Anglais & langues européennes",
      fi: "Englanti ja eurooppalaiset kielet",
      ar: "الإنجليزية واللغات الأوروبية",
      no: "Engelsk og europeiske språk",
      da: "Engelsk og europæiske sprog",
      sv: "Engelska och europeiska språk",
      ru: "Английский и европейские языки",
      nl: "Engels en Europese talen",
    },
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-700 border-emerald-100",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: "📋",
    badge: {
      en: "Travel Insurance",
      es: "Seguros de Viaje",
      de: "Reiseversicherung",
      fr: "Assurance Voyage",
      fi: "Matkavakuutus",
      ar: "تأمين السفر",
      no: "Reiseforsikring",
      da: "Rejseforsikring",
      sv: "Reseförsäkring",
      ru: "Туристическая страховка",
      nl: "Reisverzekering",
    },
    title: {
      en: "Official Reports for 100% Reimbursement",
      es: "Informes Oficiales para Reembolso del Seguro",
      de: "Offizielle Berichte für 100% Kostenerstattung",
      fr: "Rapports Officiels pour Remboursement Intégral",
      fi: "Viralliset todistukset täyteen korvaukseen",
      ar: "تقارير رسمية لتعويض التأمين بنسبة 100%",
      no: "Offisielle rapporter for 100 % refusjon",
      da: "Officielle attester til 100% godtgørelse",
      sv: "Officiella intyg för 100 % ersättning",
      ru: "Официальные отчеты для 100% компенсации",
      nl: "Officiële rapporten voor 100% vergoeding",
    },
    description: {
      en: "We issue fully detailed, signed medical reports and itemized invoices accepted by all major international travel insurance companies (Allianz, AXA, Bupa, Cigna, etc.).",
      es: "Emitimos informes médicos firmados y facturas detalladas válidas para el reembolso completo con aseguradoras internacionales (Allianz, AXA, Bupa, etc.).",
      de: "Wir stellen detaillierte, unterzeichnete Arztberichte und Einzelrechnungen aus, die von allen führenden Auslandskrankenversicherungen anerkannt werden.",
      fr: "Nous délivrons des rapports médicaux signés et des factures détaillées acceptées par toutes les grandes assurances internationales.",
      fi: "Kirjoitamme yksityiskohtaiset, allekirjoitetut lääkärintodistukset ja eritellyt laskut, jotka kaikki kansainväliset matkavakuutusyhtiöt hyväksyvät.",
      ar: "نصدر تقارير طبية موقعة ومفصلة وفواتير رسمية تقبلها جميع شركات تأمين السفر الدولية الكبرى.",
      no: "Vi utsteder detaljerte, signerte medisinske rapporter og spesifiserte fakturaer som godtas av alle internasjonale reiseforsikringsselskaper.",
      da: "Vi udsteder detaljerede, underskrevne lægeerklæringer og specificerede fakturaer, der accepteres af alle store rejseforsikringsselskaber.",
      sv: "Vi utfärdar utförliga, signerade läkarintyg och specificerade fakturor som godkänns av alla större internationella försäkringsbolag.",
      ru: "Мы выдаем подробные подписанные медицинские заключения и счета, принимаемые всеми ведущими международными страховыми компаниями (Allianz, AXA, Bupa и др.).",
      nl: "Wij verstrekken gedetailleerde, ondertekende medische rapporten en gespecificeerde facturen die door alle grote internationale reisverzekeraars worden geaccepteerd.",
    },
    highlight: {
      en: "Insurance claim ready",
      es: "Documentación lista para tu póliza",
      de: "Fertig für Ihren Versicherungsanspruch",
      fr: "Prêt pour votre demande d'assurance",
      fi: "Valmiit asiakirjat vakuutusyhtiölle",
      ar: "مستندات جاهزة لمطالبة التأمين",
      no: "Klar for forsikringskrav",
      da: "Klar til forsikringsanmeldelse",
      sv: "Redo för försäkringsanspråk",
      ru: "Документы готовы для страховой",
      nl: "Klaar voor verzekeringsclaim",
    },
    color: "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-100",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: "💊",
    badge: {
      en: "On-Site Care",
      es: "Atención In Situ",
      de: "Vor-Ort-Behandlung",
      fr: "Soins sur Place",
      fi: "Hoito paikan päällä",
      ar: "رعاية في مكانك",
      no: "Behandling på stedet",
      da: "Behandling på stedet",
      sv: "Vård på plats",
      ru: "Помощь на месте",
      nl: "Zorg ter plaatse",
    },
    title: {
      en: "Clinical Diagnostics & E-Prescriptions",
      es: "Diagnóstico Clínico y Receta Electrónica",
      de: "Klinische Diagnostik & E-Rezepte",
      fr: "Diagnostics Cliniques et Ordonnances",
      fi: "Kliininen diagnostiikka ja sähköiset reseptit",
      ar: "تشخيص سريري ووصفات إلكترونية",
      no: "Klinisk diagnostikk og e-resepter",
      da: "Klinisk diagnostik og e-recepter",
      sv: "Klinisk diagnostik och e-recept",
      ru: "Клиническая диагностика и электронные рецепты",
      nl: "Klinische diagnostiek & e-recepten",
    },
    description: {
      en: "Complete physical assessment at your bedside, administration of urgent relief medications when needed, and official electronic prescriptions sent directly to your phone.",
      es: "Exploración médica completa junto a tu cama, medicación in situ para alivio rápido si es precisa y recetas electrónicas enviadas directamente a tu móvil.",
      de: "Vollständige körperliche Untersuchung am Krankenbett, Gabe von Akutmedikamenten bei Bedarf und offizielle elektronische Rezepte direkt auf Ihr Smartphone.",
      fr: "Examen physique complet à votre chevet, administration de médicaments d'urgence si nécessaire et ordonnances officielles envoyées sur votre téléphone.",
      fi: "Täydellinen lääkärintarkastus vuoteesi vierellä, ensiapulääkitys tarvittaessa ja viralliset sähköiset reseptit suoraan puhelimeesi.",
      ar: "فحص سريري كامل بجانب سريرك، وتقديم أدوية الإغاثة العاجلة عند الحاجة، ووصفات طبية إلكترونية رسمية ترسل إلى هاتفك مباشرة.",
      no: "Full fysisk undersøkelse ved sengen, administrering av akuttmedisiner ved behov, og offisielle e-resepter sendt rett til mobilen din.",
      da: "Grundig fysisk undersøgelse på værelset, akut smertelindrende medicin efter behov og officielle e-recepter sendt direkte til mobilen.",
      sv: "Komplett undersökning vid din säng, administrering av akutmedicin vid behov och officiella e-recept skickade direkt till telefonen.",
      ru: "Полный осмотр у вашей постели, введение необходимых экстренных медикаментов и отправка официальных электронных рецептов прямо на ваш телефон.",
      nl: "Volledig lichamelijk onderzoek aan uw bed, toediening van acute medicatie indien nodig, en officiële elektronische recepten rechtstreeks naar uw telefoon verzonden.",
    },
    highlight: {
      en: "Digital prescriptions & medicine",
      es: "Recetas y medicación in situ",
      de: "Rezepte & Medikamente vor Ort",
      fr: "Ordonnances et soins sur place",
      fi: "Reseptit ja lääkkeet paikan päällä",
      ar: "وصفات وأدوية في مكانك",
      no: "Resepter og medisiner på stedet",
      da: "Recepter og medicin på stedet",
      sv: "Recept och medicin på plats",
      ru: "Рецепты и медикаменты на месте",
      nl: "Digitale recepten & medicatie",
    },
    color: "from-purple-500/10 to-purple-500/5 text-purple-700 border-purple-100",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: "🌙",
    badge: {
      en: "Always On Duty",
      es: "Siempre de Guardia",
      de: "Rund um die Uhr",
      fr: "Toujours de Garde",
      fi: "Aina päivystyksessä",
      ar: "في الخدمة دائماً",
      no: "Alltid på vakt",
      da: "Altid på vagt",
      sv: "Alltid i tjänst",
      ru: "Всегда на связи",
      nl: "Altijd paraat",
    },
    title: {
      en: "24/7 Availability, 365 Days a Year",
      es: "Disponibilidad 24/7 los 365 Días del Año",
      de: "24/7 Verfügbarkeit an 365 Tagen",
      fr: "Disponibilité 24h/24, 365 Jours par An",
      fi: "Saatavilla 24/7 vuoden jokaisena päivänä",
      ar: "متاحون 24/7 على مدار 365 يوماً في السنة",
      no: "Tilgjengelig 24/7, 365 dager i året",
      da: "Tilgængelig 24/7, 365 dage om året",
      sv: "Tillgänglig 24/7, 365 dagar om året",
      ru: "Круглосуточно, 365 дней в году",
      nl: "24/7 Beschikbaarheid, 365 dagen per jaar",
    },
    description: {
      en: "Medical emergencies don't wait for office hours. Our doctors are on active duty day and night, including weekends and public holidays across Málaga and Marbella.",
      es: "Los problemas médicos no tienen horario de oficina. Disponemos de facultativos de guardia día y noche, incluyendo fines de semana y festivos.",
      de: "Medizinische Notfälle kennen keine Öffnungszeiten. Unsere Ärzte sind Tag und Nacht im Einsatz, auch an Wochenenden und Feiertagen in Málaga und Marbella.",
      fr: "Les urgences médicales n'attendent pas les heures de bureau. Nos médecins sont de garde jour et nuit, week-ends et jours fériés inclus.",
      fi: "Terveysongelmat eivät katso kelloa. Lääkärimme päivystävät vuorokauden ympäri, mukaan lukien viikonloput ja pyhäpäivät Málagassa ja Marbellassa.",
      ar: "الطوارئ الطبية لا تنتظر مواعيد العمل الرسمية. أطباؤنا في الخدمة ليلاً ونهاراً، بما في ذلك عطلات نهاية الأسبوع والعطلات الرسمية.",
      no: "Medisinske problemer venter ikke på kontortiden. Våre leger er på vakt dag og natt, inkludert helger og helligdager på hele Costa del Sol.",
      da: "Medicinske problemer opstår ikke kun i åbningstiden. Vores læger er på vagt dag og nat, inklusive weekender og helligdage.",
      sv: "Medicinska besvär väntar inte på kontorstid. Våra läkare har jour dygnet runt, även helger och röda dagar i Málaga och Marbella.",
      ru: "Болезнь не знает рабочих часов. Наши дежурные врачи готовы выехать день и ночь, включая выходные и праздничные дни в Малаге и Марбелье.",
      nl: "Medische noodgevallen wachten niet op kantooruren. Onze artsen hebben dag en nacht dienst, inclusief in het weekend en op feestdagen in Málaga en Marbella.",
    },
    highlight: {
      en: "Day, night & holidays",
      es: "Día, noche y días festivos",
      de: "Tag, Nacht & Feiertage",
      fr: "Jour, nuit & jours fériés",
      fi: "Päivällä, yöllä ja pyhinä",
      ar: "ليلاً ونهاراً وفي العطلات",
      no: "Dag, natt og helligdager",
      da: "Dag, nat og helligdage",
      sv: "Dag, natt och helgdagar",
      ru: "Днем, ночью и в праздники",
      nl: "Dag, nacht & feestdagen",
    },
    color: "from-indigo-500/10 to-indigo-500/5 text-indigo-700 border-indigo-100",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    icon: "🩺",
    badge: {
      en: "Family Medicine",
      es: "Medicina Familiar",
      de: "Familienmedizin",
      fr: "Médecine Familiale",
      fi: "Perhelääketiede",
      ar: "طب الأسرة",
      no: "Familiemedisin",
      da: "Familiemedicin",
      sv: "Familjemedicin",
      ru: "Семейная медицина",
      nl: "Gezinsgeneeskunde",
    },
    title: {
      en: "Comprehensive Care for All Ages",
      es: "Atención Integral para Toda la Familia",
      de: "Umfassende Betreuung für jedes Alter",
      fr: "Soins Complets pour Tous les Âges",
      fi: "Kattavaa hoitoa kaikenikäisille",
      ar: "رعاية شاملة لجميع الأعمار",
      no: "Helhetlig behandling for alle aldre",
      da: "Omfattende behandling for alle aldre",
      sv: "Omfattande vård för alla åldrar",
      ru: "Комплексная помощь для всех возрастов",
      nl: "Uitgebreide zorg voor alle leeftijden",
    },
    description: {
      en: "Specialized in treating frequent holiday health issues: gastroenteritis, swimmer's ear (otitis), severe sunburn, tonsillitis, allergies, and minor injuries for children and adults.",
      es: "Especialistas en afecciones comunes de vacaciones: gastroenteritis, otitis de piscina, insolaciones, faringitis, alergias y curas para niños y adultos.",
      de: "Spezialisiert auf typische Urlaubsbeschwerden: Magen-Darm-Grippe, Badeotitis, Sonnenbrand, Mandelentzündung, Allergien und Wundversorgung für Kinder und Erwachsene.",
      fr: "Spécialisés dans les pathologies courantes des vacances : gastro, otite du baigneur, coups de soleil sévères, angines, allergies et petites blessures.",
      fi: "Erikoistunut loman yleisimpiin vaivoihin: vatsatauti, uimarin korvatulehdus, auringonpolttamat, nielurisatulehdukset, allergiat ja pienet haavat lapsille ja aikuisille.",
      ar: "متخصصون في علاج مشاكل العطلات الصحية الشائعة: النزلة المعوية، أذن السباح، حروق الشمس الشديدة، التهاب اللوزتين، الحساسية، والإصابات الطفيفة.",
      no: "Spesialisert på vanlige ferieplager: omgangssyke, svømmeøre, kraftig solbrenthet, halsbetennelse, allergier og sårskader for barn og voksne.",
      da: "Specialiseret i typiske feriesygdomme: maveinfektion, svømmerøre, solskoldning, halsbetennelse, allergi og mindre skader hos børn og voksne.",
      sv: "Specialiserade på vanliga semesterbesvär: magsjuka, simmaröra, svår solbränna, halsfluss, allergier och mindre sårskador för barn och vuxna.",
      ru: "Лечение типичных курортных заболеваний: гастроэнтерит, наружный отит (ухо пловца), солнечные удары, тонзиллит, аллергии и мелкие травмы у взрослых и детей.",
      nl: "Gespecialiseerd in veelvoorkomende vakantiekwalen: gastro-enteritis, zwemmersoor (otitis), zonnebrand, amandelontsteking, allergieën en kleine verwondingen bij kinderen en volwassenen.",
    },
    highlight: {
      en: "Adults, children & seniors",
      es: "Adultos, niños y personas mayores",
      de: "Erwachsene, Kinder & Senioren",
      fr: "Adultes, enfants & seniors",
      fi: "Aikuiset, lapset ja ikäihmiset",
      ar: "الكبار والأطفال وكبار السن",
      no: "Voksne, barn og eldre",
      da: "Voksne, børn og ældre",
      sv: "Vuxna, barn och äldre",
      ru: "Взрослые, дети и пожилые",
      nl: "Volwassenen, kinderen & senioren",
    },
    color: "from-rose-500/10 to-rose-500/5 text-rose-700 border-rose-100",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function ReviewsCarousel({ locale = "en" }: WhyChooseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const currentLocale = (locale && locale in SECTION_STRINGS.badge ? locale : "en") as Locale;

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
      className="w-full bg-slate-50 border-t border-slate-200 py-16 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A6EBD]/10 border border-[#0A6EBD]/20 text-[#0A6EBD] text-xs font-700 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0A6EBD]" />
              {SECTION_STRINGS.badge[currentLocale] || SECTION_STRINGS.badge.en}
            </div>
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 leading-tight"
            >
              {SECTION_STRINGS.title[currentLocale] || SECTION_STRINGS.title.en}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-2">
              {SECTION_STRINGS.subtitle[currentLocale] || SECTION_STRINGS.subtitle.en}
            </p>
          </div>

          {/* Trust Banner Card */}
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A6EBD] text-white flex items-center justify-center font-800 text-xl shadow-md shadow-blue-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-800 text-slate-900 text-sm leading-tight">
                  {SECTION_STRINGS.trustTitle[currentLocale] || SECTION_STRINGS.trustTitle.en}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-500">
                  {SECTION_STRINGS.trustSubtitle[currentLocale] || SECTION_STRINGS.trustSubtitle.en}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Guarantee Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITMENTS.map((item, index) => (
            <article
              key={index}
              className={`bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0A6EBD]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span
                    className={`text-xs font-700 px-3 py-1 rounded-full border ${item.badgeBg}`}
                  >
                    {item.badge[currentLocale] || item.badge.en}
                  </span>
                </div>

                {/* Title */}
                <p className="font-800 text-slate-900 text-lg sm:text-xl leading-snug mb-3">
                  {item.title[currentLocale] || item.title.en}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description[currentLocale] || item.description.en}
                </p>
              </div>

              {/* Bottom highlight pill */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-600 text-[#0A6EBD]">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item.highlight[currentLocale] || item.highlight.en}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
