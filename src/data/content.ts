// ============================================================
// CONTENT DATA — All localized text, SEO copy, blog posts,
// FAQs, cities, and services for the medical lead-gen site.
// ============================================================

export type Locale = "en" | "es" | "de" | "fr" | "fi" | "ar" | "no" | "da" | "sv" | "ru" | "nl";

// ────────────────────────────────────────────────────────────
// PHONE / WHATSAPP CONFIG (update these values)
// ────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "34637255224"; // no + or spaces
export const PHONE_NUMBER = "+34 637 255 224";
export const EMAIL_ADDRESS = "contact@urgentcare24h.com";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:+34637255224`;
export const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

// ────────────────────────────────────────────────────────────
// DOMAIN / SITE URL CONFIG
// ────────────────────────────────────────────────────────────
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.urgentcare24h.com";

// ────────────────────────────────────────────────────────────
// LOCALES
// ────────────────────────────────────────────────────────────
export const LOCALES: Locale[] = ["en", "es", "de", "fr", "fi", "ar", "no", "da", "sv", "ru", "nl"];
export const DEFAULT_LOCALE: Locale = "en";

// ────────────────────────────────────────────────────────────
// TRANSLATIONS
// ────────────────────────────────────────────────────────────
export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      areas: "Areas",
      blog: "Blog",
      contact: "Contact",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "24/7 Hotel Doctor & Urgent Private GP Visits in Marbella & Costa del Sol",
      subheadline:
        "English-speaking emergency doctor directly to your hotel room, villa or holiday apartment in 30–60 minutes. Complete medical examination, prescriptions, Fit to Fly certificates and official travel insurance reports.",
      whatsapp: "WhatsApp Now",
      call: "Call Now",
      trusts: [
        "English-Speaking Doctor 24/7",
        "Hotel Room & Villa Visits in 30–60 Min",
        "Fit to Fly & Medical Certificates",
        "Official Receipts for Travel Insurance (Bupa, Allianz)",
        "Adults, Children & Urgent Care",
      ],
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "From first contact to private medical care in your hotel room in minutes.",
      steps: [
        {
          step: "1",
          title: "Contact Us 24/7",
          desc: "Send a quick WhatsApp message or call us directly. Our emergency coordination desk is available 24 hours a day, 7 days a week.",
        },
        {
          step: "2",
          title: "Share Your Location",
          desc: "Tell us which hotel, apartment or luxury villa you are staying at across Marbella, Fuengirola, Benalmadena or Malaga.",
        },
        {
          step: "3",
          title: "Doctor is Dispatched",
          desc: "We immediately dispatch an English-speaking licensed doctor with full medical equipment to your location.",
        },
        {
          step: "4",
          title: "Receive Medical Care & Reports",
          desc: "The doctor treats you, issues prescriptions and delivers an official clinical report with invoice for your travel insurance claim.",
        },
      ],
    },
    services: {
      title: "Our Medical Services",
      subtitle: "Comprehensive private medical care and emergency doctor visits delivered to your door.",
      list: [
        {
          icon: "hotel",
          title: "24/7 Hotel Doctor",
          desc: "Emergency English-speaking doctor visits directly to your hotel room in Marbella, Puerto Banus, Fuengirola, Benalmadena and Malaga.",
        },
        {
          icon: "home",
          title: "Urgent Home & Villa Doctor",
          desc: "Rapid-response private medical visits at your holiday apartment, private villa or rental residence across the Costa del Sol.",
        },
        {
          icon: "emergency",
          title: "Emergency Medical Visits",
          desc: "Urgent medical attention for acute illnesses, fevers, severe infections, stomach bugs and sudden holiday medical emergencies.",
        },
        {
          icon: "prescription",
          title: "Online Consultation & QR Prescription (€90)",
          desc: "Online/Phone Doctor Consultation in 15 min: Official Spanish QR Prescription valid at all 22,000+ pharmacies across Spain.",
        },
        {
          icon: "certificate",
          title: "Fit to Fly & Medical Certificates",
          desc: "Official Fit to Fly certificates, airline medical clearance, flight cancellation reports and travel insurance documentation.",
        },
        {
          icon: "tourist",
          title: "Tourist Medical Care",
          desc: "Specialised multilingual medical assistance for international visitors, expats and holidaymakers.",
        },
        {
          icon: "gp",
          title: "General Practitioner (GP)",
          desc: "Full private GP consultation including vital signs check, diagnosis, injections and targeted treatment plan.",
        },
        {
          icon: "ambulance",
          title: "Ambulance & Hospital Transfer",
          desc: "Immediate coordination of medical transport and private ambulance transfer to reference international hospitals when necessary.",
        },
      ],
    },
    areas: {
      title: "Areas We Cover",
      subtitle: "Rapid 30–60 minute emergency doctor dispatch across the entire Costa del Sol region.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our 24/7 private doctor and hotel visit service.",
      items: [
        {
          q: "Is there a private doctor or urgent care near me right now?",
          a: "Yes. Our on-call English-speaking doctors are stationed throughout the Costa del Sol (Marbella, Puerto Banus, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas, and Estepona). When you call or WhatsApp us, our coordination desk dispatches the nearest registered doctor directly to your hotel room, apartment, or villa within 30 to 60 minutes.",
        },
        {
          q: "Can an emergency GP or urgent care doctor visit me directly instead of going to a local clinic?",
          a: "Yes. Rather than traveling and waiting hours at a crowded hospital emergency room or searching for a clinic near you, our mobile doctors bring full clinical equipment to you, conduct on-site evaluations, provide acute treatments, and prescribe valid pharmacy medication.",
        },
        {
          q: "Do you visit hotels and resorts?",
          a: "Yes. Our doctors visit all hotels, holiday resorts and apart-hotels across the Costa del Sol, including Marbella, Puerto Banus, Malaga, Fuengirola, Benalmadena, Torremolinos, Mijas and Estepona.",
        },
        {
          q: "Can the doctor visit my holiday apartment or private villa?",
          a: "Absolutely. We provide on-call doctor visits to private rental apartments, Airbnb properties and luxury villas throughout Marbella, Nueva Andalucia, the Golden Mile and surrounding areas.",
        },
        {
          q: "How fast will the doctor arrive at my room?",
          a: "Our average response time is between 30 and 60 minutes from your initial phone or WhatsApp call.",
        },
        {
          q: "Do your doctors speak English?",
          a: "Yes. All our doctors speak fluent English. We also have doctors capable of consulting in German, French and Scandinavian languages upon request.",
        },
        {
          q: "Can the doctor issue an official Fit to Fly certificate?",
          a: "Yes. If an unexpected illness, ear infection or injury disrupts your flight home, our registered doctor can examine you and issue an official Fit to Fly certificate or airline cancellation medical report.",
        },
        {
          q: "Can I claim the visit through my travel insurance?",
          a: "Yes. Every consultation includes an official clinical report with international diagnosis coding (ICD-10) and an itemized invoice meeting standards for Bupa, Allianz, AXA, Nordic Travel, and all international insurers.",
        },
        {
          q: "Can you examine babies and children?",
          a: "Yes. Our doctors provide gentle, professional paediatric care for infants, children and adolescents suffering from fevers, earaches, rashes or stomach problems.",
        },
        {
          q: "Can I get an urgent Spanish prescription online anywhere in Spain (€90)?",
          a: "Yes. Through our €90 Express Online/Phone Consultation, our licensed doctors evaluate your case and send an Official Spanish Electronic Prescription (QR code) directly to your phone via WhatsApp or Email in 15 minutes. The QR prescription is accepted at all 22,000+ pharmacies across Mainland Spain, the Costa del Sol, Balearic Islands (Mallorca, Ibiza) and Canary Islands (Tenerife, Gran Canaria).",
        },
      ],
    },
    blog: {
      title: "Health & Travel Guides",
      subtitle: "Useful health advice and emergency guides for tourists visiting the Costa del Sol.",
      readMore: "Read article",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our medical coordination team 24/7. Fill in the form or write to us directly.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      hotel: "Hotel / Address",
      symptoms: "Describe Your Symptoms or Inquiry",
      language: "Preferred Language",
      submit: "Send Message",
      languages: ["English", "Spanish", "German", "French", "Finnish", "Arabic", "Norwegian", "Danish", "Swedish", "Russian", "Dutch"],
      disclaimer:
        "Your inquiry will be sent directly to our 24/7 medical desk at contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer:
        "Urgent Care 24H is the rapid-response home and hotel medical coordination service operated by Interdocs Medical Costa del Sol. Consultations are performed by independent licensed medical practitioners. In case of life-threatening emergency, always call 112.",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      areas: "Zonas",
      blog: "Blog",
      contact: "Contacto",
      callNow: "Llamar",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Médico en Tu Hotel o Domicilio 24h en Marbella y Costa del Sol",
      subheadline:
        "Atención médica privada inmediata directamente en tu habitación de hotel, villa o apartamento en 30–60 minutos. Médicos colegiados bilingües, recetas, certificados Fit to Fly e informes para seguro de viaje.",
      whatsapp: "WhatsApp Ahora",
      call: "Llámanos 24/7",
      trusts: [
        "Médicos Colegiados en Inglés y Español",
        "Visitas a Hoteles y Villas en 30–60 Min",
        "Certificados Fit to Fly e Informes Médicos",
        "Facturas e Informes para Seguros Médicos",
        "Atención 24/7 Adultos y Pediatría",
      ],
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "De tu primer mensaje a la atención médica en tu hotel en cuestión de minutos.",
      steps: [
        {
          step: "1",
          title: "Contacto Inmediato 24/7",
          desc: "Envíanos un WhatsApp o llámanos directamente. Nuestro centro de coordinación médica está operativo las 24 horas del día.",
        },
        {
          step: "2",
          title: "Indícanos tu Ubicación",
          desc: "Dinos en qué hotel, resort o villa te encuentras en Marbella, Fuengirola, Benalmádena o Málaga.",
        },
        {
          step: "3",
          title: "Desplazamiento del Médico",
          desc: "Asignamos de inmediato a un médico colegiado equipado con material diagnóstico para acudir a tu habitación.",
        },
        {
          step: "4",
          title: "Consulta, Receta e Informe",
          desc: "El facultativo te examina, prescribe el tratamiento y te entrega el informe clínico oficial y factura para tu aseguradora.",
        },
      ],
    },
    services: {
      title: "Nuestros Servicios Médicos",
      subtitle: "Atención médica privada y urgencias domiciliarias en tu puerta las 24 horas.",
      list: [
        { icon: "hotel", title: "Médico en Hotel 24/7", desc: "Visita médica urgente y privada directamente en tu habitación de hotel en Marbella, Puerto Banús, Fuengirola y Benalmádena." },
        { icon: "home", title: "Médico en Apartamento y Villa", desc: "Atención médica rápida en apartamentos vacacionales, residencias y villas privadas en toda la Costa del Sol." },
        { icon: "emergency", title: "Urgencias Médicas Domiciliarias", desc: "Asistencia médica urgente ante gastroenteritis, fiebre aguda, infecciones, cólicos y patologías repentinas." },
        { icon: "prescription", title: "Teleconsulta y Receta Electrónica QR (90€)", desc: "Teleconsulta médica en 15 min: Receta Oficial Española con código QR válida en las 22.000+ farmacias de España." },
        { icon: "certificate", title: "Certificados Médicos y Fit to Fly", desc: "Emisión de certificados de aptitud para volar (Fit to Fly), partes de cancelación de viaje e informes para aseguradoras." },
        { icon: "tourist", title: "Atención Médica al Turista", desc: "Asistencia médica internacional especializada para turistas extranjeros y residentes con cobertura en múltiples idiomas." },
        { icon: "gp", title: "Medicina General (GP)", desc: "Consulta clínica completa con toma de constantes, exploración física, medicación in situ y pauta de tratamiento." },
        {
          icon: "ambulance",
          title: "Traslados y Soporte de Ambulancia",
          desc: "Coordinación inmediata de ambulancia privada y traslado prioritario a hospitales internacionales de referencia si se requiere ingreso.",
        },
      ],
    },
    areas: { title: "Zonas que Cubrimos", subtitle: "Respuesta rápida de 30 a 60 minutos en toda la Costa del Sol." },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestro servicio médico urgente en hoteles y domicilios.",
      items: [
        { q: "¿Hay un médico de urgencias o a domicilio cerca de mí ahora mismo?", a: "Sí. Contamos con médicos de guardia distribuidos estratégicamente por toda la Costa del Sol (Marbella, Fuengirola, Benalmádena, Torremolinos, Málaga, Mijas y Estepona). Al contactarnos por WhatsApp o teléfono, desplazamos al médico colegiado más cercano a tu hotel, apartamento o villa en unos 30 a 60 minutos." },
        { q: "¿Puede atenderme un médico privado en mi alojamiento en lugar de ir a un centro médico?", a: "Sí. Evita traslados y largas horas de espera en salas de urgencias. Nuestro facultativo colegiado acude directamente a tu puerta con equipamiento clínico completo, realiza el diagnóstico, administra tratamiento inmediato y prescribe recetas oficiales." },
        { q: "¿Visitan hoteles y complejos turísticos?", a: "Sí. Nuestros médicos acuden a todos los hoteles, resorts y apartamentos turísticos de Marbella, Puerto Banús, Málaga, Fuengirola, Benalmádena, Torremolinos, Mijas y Estepona." },
        { q: "¿Pueden acudir a una villa privada o apartamento de alquiler?", a: "Por supuesto. Realizamos visitas a domicilio en villas de lujo, pisos turísticos de Airbnb y residencias privadas en cualquier punto de la Costa del Sol." },
        { q: "¿Cuánto tarda en llegar el médico?", a: "El tiempo medio habitual de llegada a tu hotel o domicilio es de 30 a 60 minutos tras confirmar el aviso." },
        { q: "¿Hablan los médicos en inglés?", a: "Sí. Todos nuestros facultativos hablan inglés fluido, además de español, y contamos con médicos con dominio de alemán y francés." },
        { q: "¿Puedo obtener un certificado médico 'Fit to Fly'?", a: "Sí. Si una enfermedad o lesión te impide volar o necesitas autorización médica para tu aerolínea, el médico te examina y emite el certificado oficial Fit to Fly en el acto." },
        { q: "¿Puedo usar mi seguro de viaje internacional?", a: "Sí. Entregamos un informe médico completo con diagnóstico codificado (CIE-10 / ICD-10) y factura desglosada oficial para que puedas presentar la reclamación a tu seguro de viaje o privado (Bupa, Allianz, AXA, Sanitas, aseguradoras nórdicas, británicas o internacionales)." },
        { q: "¿Atienden a bebés y niños?", a: "Sí. Disponemos de facultativos con amplia experiencia en atención pediátrica urgente para tratar fiebres, otitis de piscina, heridas y vómitos en niños." },
        { q: "¿Puedo obtener una receta médica oficial online en cualquier parte de España (90€)?", a: "Sí. Mediante nuestra Teleconsulta Express de 90€, un médico colegiado valora tu caso y te envía a tu móvil por WhatsApp o Email en 15 minutos la Receta Electrónica Oficial con código QR, válida en las más de 22.000 farmacias de toda España, Costa del Sol, Baleares y Canarias." },
      ],
    },
    blog: { title: "Guías de Salud y Consejos Médicos", subtitle: "Información médica útil para turistas y viajeros en la Costa del Sol.", readMore: "Leer artículo" },
    contact: {
      title: "Contáctanos",
      subtitle: "Ponte en contacto con nuestro equipo médico 24/7. Rellena el formulario o escríbenos directamente.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      hotel: "Hotel / Dirección",
      symptoms: "Describe tus Síntomas o Consulta",
      language: "Idioma Preferido",
      submit: "Enviar Mensaje",
      languages: ["Español", "Inglés", "Alemán", "Francés", "Finlandés", "Árabe", "Noruego", "Danés", "Sueco", "Ruso", "Holandés"],
      disclaimer: "Tu consulta será enviada directamente a nuestro equipo médico 24/7 a contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H es el servicio de coordinación médica urgente a domicilio y hoteles operado por Interdocs Medical Costa del Sol. Las consultas son realizadas por facultativos médicos independientes colegiados. En emergencias vitales, llame al 112.",
      rights: "Todos los derechos reservados.",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      areas: "Gebiete",
      blog: "Blog",
      contact: "Kontakt",
      callNow: "Jetzt anrufen",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Arzt in Ihrem Hotel oder Apartment in Málaga",
      subheadline:
        "Private Ärzte rund um die Uhr für Touristen an der Costa del Sol.",
      whatsapp: "WhatsApp Jetzt",
      call: "Uns anrufen",
      trusts: [
        "Deutschsprachige Ärzte",
        "Hotel- & Hausbesuche",
        "Schnelle Reaktion",
        "Arztbescheinigung für Versicherung",
        "Erwachsene & Kinder",
      ],
    },
    howItWorks: {
      title: "So Funktioniert Es",
      subtitle: "Vom ersten Kontakt bis zur ärztlichen Versorgung in Minuten.",
      steps: [
        { step: "1", title: "Kontaktieren Sie uns", desc: "Senden Sie uns eine WhatsApp-Nachricht oder rufen Sie uns direkt an. 24 Stunden am Tag verfügbar." },
        { step: "2", title: "Ihren Standort mitteilen", desc: "Teilen Sie uns mit, in welchem Hotel, Apartment oder an welcher Adresse Sie sich aufhalten." },
        { step: "3", title: "Arzt wird entsandt", desc: "Wir weisen sofort einen unserer lizenzierten Partnerärzte zu." },
        { step: "4", title: "Ärztliche Versorgung erhalten", desc: "Der Arzt kommt, untersucht Sie und stellt einen Arztbericht und eine Quittung für die Versicherung aus." },
      ],
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Umfassende private medizinische Versorgung direkt zu Ihnen.",
      list: [
        { icon: "hotel", title: "Arzt im Hotel", desc: "Vollständige ärztliche Beratung in Ihrem Hotelzimmer." },
        { icon: "home", title: "Arzt in der Ferienwohnung", desc: "Wir besuchen Sie in Ihrer Mietwohnung oder Unterkunft." },
        { icon: "emergency", title: "Notfall-Hausbesuch", desc: "Dringende ärztliche Versorgung, wenn Sie sie am meisten brauchen." },
        { icon: "prescription", title: "Online-Konsultation & QR-Rezept (90€)", desc: "Online-/Telefon-Konsultation in 15 Min: Offizielles spanisches QR-Rezept, gültig in allen 22.000+ Apotheken Spaniens." },
        { icon: "certificate", title: "Ärztliche Bescheinigungen", desc: "Offizielle Dokumentation für Ihre Reiseversicherung." },
        { icon: "tourist", title: "Touristenmedizin", desc: "Spezialisierte Versorgung für internationale Besucher." },
        { icon: "gp", title: "Allgemeinarzt", desc: "Vollständige Konsultation mit Diagnose und Behandlungsplan." },
        {
          icon: "ambulance",
          title: "Krankentransport",
          desc: "Sicherer und schneller medizinischer Transport zum nächsten Krankenhaus.",
        },

      ],
    },
    areas: { title: "Unser Einzugsgebiet", subtitle: "Wir betreuen die gesamte Costa del Sol." },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alles, was Sie über unseren Service wissen müssen.",
      items: [
        {
          q: "Gibt es jetzt einen Privatarzt oder Notfalldienst in meiner Nähe?",
          a: "Ja. Unsere lizenzierten Ärzte sind an der gesamten Costa del Sol (Marbella, Puerto Banus, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas und Estepona) im Einsatz. Nach Ihrer Kontaktaufnahme entsenden wir den nächstgelegenen Arzt direkt in Ihr Hotelzimmer oder Apartment (innerhalb von 30 bis 60 Minuten).",
        },
        {
          q: "Kann der Notfallarzt direkt in meine Unterkunft kommen, anstatt eine Klinik aufzusuchen?",
          a: "Ja. Statt lange Wartezeiten in einer Notaufnahme in Kauf zu nehmen, kommt unser Arzt mit vollständiger Notfallausrüstung direkt zu Ihnen, führt Diagnosen durch, verordnet Behandlungen und stellt Rezepte sowie Versicherungsberichte aus.",
        },
        { q: "Besuchen Sie Hotels?", a: "Ja. Unsere Ärzte besuchen alle Hotels an der Costa del Sol." },
        { q: "Können Sie Apartments besuchen?", a: "Ja. Wir besuchen Ferienwohnungen und jede Unterkunft." },
        { q: "Wie schnell kann ein Arzt kommen?", a: "Wir streben an, dass ein Arzt innerhalb von 30–60 Minuten bei Ihnen ist." },
        { q: "Sprechen Sie Deutsch?", a: "Ja. Wir haben deutschsprachige Ärzte verfügbar." },
        { q: "Kann ich meine Reiseversicherung nutzen?", a: "Ja. Wir stellen offizielle Arztbescheinigungen für alle Versicherungen aus." },
        { q: "Können Kinder behandelt werden?", a: "Ja. Wir bieten pädiatrische Versorgung für Kinder jeden Alters." },
        { q: "Kann ich ein Rezept erhalten?", a: "Ja. Unsere Ärzte können Rezepte für notwendige Medikamente ausstellen." },
      ],
    },
    blog: { title: "Gesundheits- & Reiseführer", subtitle: "Nützliche Informationen für Touristen an der Costa del Sol.", readMore: "Artikel lesen" },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Kontaktieren Sie unser medizinisches Koordinationsteam rund um die Uhr 24/7. Füllen Sie das Formular aus oder schreiben Sie uns direkt.",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      hotel: "Hotel / Adresse",
      symptoms: "Beschreiben Sie Ihre Symptome oder Anfrage",
      language: "Bevorzugte Sprache",
      submit: "Nachricht senden",
      languages: ["Deutsch", "Englisch", "Spanisch", "Französisch", "Finnisch", "Arabisch", "Norwegisch", "Dänisch", "Schwedisch", "Russisch", "Niederländisch"],
      disclaimer: "Ihre Anfrage wird direkt an unser medizinisches 24/7-Team an contact@urgentcare24h.com gesendet.",
    },
    footer: {
      disclaimer: "Urgent Care 24H koordiniert Anfragen mit unabhängigen zugelassenen Medizinern. Wir selbst erbringen keine medizinische Behandlung. Im lebensbedrohlichen Notfall rufen Sie bitte 112 an.",
      rights: "Alle Rechte vorbehalten.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      areas: "Zones",
      blog: "Blog",
      contact: "Contact",
      callNow: "Appeler",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Médecin à Votre Hôtel ou Appartement à Málaga",
      subheadline:
        "Médecins privés disponibles 24h/24, 7j/7 pour les touristes sur la Costa del Sol.",
      whatsapp: "WhatsApp Maintenant",
      call: "Appelez-nous",
      trusts: [
        "Médecins Francophones",
        "Visites à l'Hôtel et à Domicile",
        "Réponse Rapide",
        "Reçu Médical pour l'Assurance",
        "Adultes & Enfants",
      ],
    },
    howItWorks: {
      title: "Comment Ça Marche",
      subtitle: "Du premier contact aux soins médicaux en quelques minutes.",
      steps: [
        { step: "1", title: "Contactez-nous", desc: "Envoyez-nous un message WhatsApp ou appelez-nous directement. Disponible 24h/24." },
        { step: "2", title: "Indiquez votre Localisation", desc: "Dites-nous dans quel hôtel, appartement ou adresse vous séjournez." },
        { step: "3", title: "Un Médecin est Dépêché", desc: "Nous assignons immédiatement l'un de nos médecins partenaires agréés." },
        { step: "4", title: "Recevez des Soins Médicaux", desc: "Le médecin arrive, vous examine et fournit un rapport médical et un reçu pour l'assurance." },
      ],
    },
    services: {
      title: "Nos Services",
      subtitle: "Soins médicaux privés complets livrés à votre porte.",
      list: [
        { icon: "hotel", title: "Médecin à l'Hôtel", desc: "Consultation médicale complète dans le confort de votre chambre d'hôtel." },
        { icon: "home", title: "Médecin à l'Appartement", desc: "Nous visitons votre appartement de location ou résidence." },
        { icon: "emergency", title: "Visite d'Urgence à Domicile", desc: "Attention médicale urgente quand vous en avez le plus besoin." },
        { icon: "prescription", title: "Téléconsultation & Ordonnance QR (90€)", desc: "Téléconsultation en 15 min : Ordonnance officielle espagnole QR valable dans les 22 000+ pharmacies d'Espagne." },
        { icon: "certificate", title: "Certificats Médicaux", desc: "Documentation officielle pour votre assurance voyage." },
        { icon: "tourist", title: "Soins pour Touristes", desc: "Soins spécialisés pour les visiteurs internationaux." },
        { icon: "gp", title: "Médecin Généraliste", desc: "Consultation complète incluant diagnostic et plan de traitement." },
        {
          icon: "ambulance",
          title: "Transfert en Ambulance",
          desc: "Transport médical sûr et rapide vers l'hôpital le plus proche.",
        },

      ],
    },
    areas: { title: "Zones Couvertes", subtitle: "Nous couvrons toute la Costa del Sol." },
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Tout ce que vous devez savoir sur notre service.",
      items: [
        {
          q: "Y a-t-il un médecin privé ou un service d'urgence près de moi en ce moment ?",
          a: "Oui. Nos médecins de garde sont répartis sur toute la Costa del Sol (Marbella, Puerto Banus, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas et Estepona). Dès votre contact, nous envoyons le médecin le plus proche directement dans votre chambre d'hôtel ou appartement en 30 à 60 minutes.",
        },
        {
          q: "Un médecin urgentiste peut-il me soigner directement sur place plutôt que d'aller aux urgences ?",
          a: "Oui. Évitez les déplacements et l'attente à l'hôpital. Nos médecins se déplacent avec tout le matériel clinique nécessaire, posent un diagnostic, administrent les soins, délivrent des ordonnances et vous remettent les rapports d'assurance.",
        },
        { q: "Visitez-vous les hôtels ?", a: "Oui. Nos médecins visitent tous les hôtels de la Costa del Sol." },
        { q: "Pouvez-vous visiter des appartements ?", a: "Absolument. Nous visitons les appartements de location et tout logement." },
        { q: "Combien de temps pour qu'un médecin arrive ?", a: "Nous visons à avoir un médecin chez vous dans les 30 à 60 minutes." },
        { q: "Parlez-vous français ?", a: "Oui. Nous avons des médecins francophones disponibles." },
        { q: "Puis-je utiliser mon assurance voyage ?", a: "Oui. Nous fournissons des reçus médicaux officiels pour toutes les assurances." },
        { q: "Les enfants peuvent-ils être traités ?", a: "Oui. Nous offrons des soins pédiatriques pour les enfants de tous âges." },
        { q: "Puis-je obtenir une ordonnance ?", a: "Oui. Nos médecins peuvent délivrer des ordonnances pour les médicaments nécessaires." },
      ],
    },
    blog: { title: "Guides Santé & Voyage", subtitle: "Informations utiles pour les touristes visitant la Costa del Sol.", readMore: "Lire l'article" },
    contact: {
      title: "Contactez-nous",
      subtitle: "Contactez notre équipe de coordination médicale 24h/24, 7j/7. Remplissez le formulaire ou écrivez-nous directement.",
      name: "Nom Complet",
      email: "Adresse e-mail",
      phone: "Numéro de Téléphone",
      hotel: "Hôtel / Adresse",
      symptoms: "Décrivez vos Symptômes ou votre Demande",
      language: "Langue Préférée",
      submit: "Envoyer le message",
      languages: ["Français", "Anglais", "Espagnol", "Allemand", "Finnois", "Arabe", "Norvégien", "Danois", "Suédois", "Russe", "Néerlandais"],
      disclaimer: "Votre demande sera envoyée directement à notre équipe médicale 24h/24 à contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H coordonne les demandes avec des professionnels médicaux indépendants agréés. Nous ne fournissons pas nous-mêmes de traitement médical. En cas d'urgence vitale, appelez le 112.",
      rights: "Tous droits réservés.",
    },
  },

  fi: {
    nav: {
      home: "Etusivu",
      services: "Palvelut",
      areas: "Alueet",
      blog: "Blogi",
      contact: "Yhteystiedot",
      callNow: "Soita Nyt",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Lääkäri hotelliisi tai asuntoosi Málagassa",
      subheadline: "Yksityiset lääkärit saatavilla 24/7 turisteille Aurinkorannikolla (Costa del Sol). Nopeaa, ammattitaitoista ja englanninkielistä palvelua.",
      whatsapp: "WhatsApp Nyt",
      call: "Soita meille",
      trusts: [
        "Englanninkieliset Lääkärit",
        "Hotelli- & Kotikäynnit",
        "Nopea Vastaus",
        "Lääkärintodistukset Vakuutukseen",
        "Aikuiset & Lapset",
      ],
    },
    howItWorks: {
      title: "Miten se toimii",
      subtitle: "Ensimmäisestä yhteydenotosta lääkärinhoitoon minuuteissa.",
      steps: [
        {
          step: "1",
          title: "Ota Yhteyttä",
          desc: "Lähetä WhatsApp-viesti tai soita meille suoraan. Palvelemme 24 tuntia vuorokaudessa, 7 päivää viikossa.",
        },
        {
          step: "2",
          title: "Ilmoita Sijaintisi",
          desc: "Kerro meille, missä hotellissa, asunnossa tai osoitteessa majoitut loman aikana.",
        },
        {
          step: "3",
          title: "Lääkäri Lähetetään",
          desc: "Määritämme välittömästi yhden lisensoiduista kumppanilääkäreistämme vierailemaan luonasi.",
        },
        {
          step: "4",
          title: "Vastaanota Hoitoa",
          desc: "Lääkäri saapuu, tutkii sinut ja antaa täydellisen lääkärinraportin sekä kuitin vakuutusta varten.",
        },
      ],
    },
    services: {
      title: "Palvelumme",
      subtitle: "Kattava yksityinen sairaanhoito kotiovellesi toimitettuna.",
      list: [
        {
          icon: "hotel",
          title: "Lääkäri Hotelliin",
          desc: "Täydellinen lääkärin konsultaatio mukavasti hotellihuoneessasi.",
        },
        {
          icon: "home",
          title: "Lääkäri Asuntoon",
          desc: "Vierailemme vuokra-asunnossasi tai yksityisessä kodissasi.",
        },
        {
          icon: "emergency",
          title: "Päivystävä Kotikäynti",
          desc: "Kiireellistä lääkärinhoitoa silloin, kun tarvitset sitä eniten.",
        },
        {
          icon: "prescription",
          title: "Etäkonsultaatio & QR-Resepti (90€)",
          desc: "Etäkonsultaatio 15 minuutissa: Virallinen espanjalainen QR-resepti, voimassa kaikissa Espanjan 22 000+ apteekissa.",
        },
        {
          icon: "certificate",
          title: "Lääkärintodistukset",
          desc: "Viralliset asiakirjat matkavakuutusyhtiötäsi varten.",
        },
        {
          icon: "tourist",
          title: "Matkailijan Hoito",
          desc: "Erikoistunut hoito kansainvälisille vieraille, jotka eivät tunne paikallista järjestelmää.",
        },
        {
          icon: "gp",
          title: "Yleislääkäri",
          desc: "Täydellinen yleislääkärin konsultaatio sisältäen diagnoosin ja hoitosuunnitelman.",
        },
        {
          icon: "ambulance",
          title: "Ambulanssikuljetus",
          desc: "Turvallinen ja nopea lääketieteellinen kuljetus lähimpään sairaalaan.",
        },

      ],
    },
    areas: {
      title: "Alueet, Joita Katamme",
      subtitle: "Palvelemme koko Aurinkorannikon aluetta.",
    },
    faq: {
      title: "Usein Kysytyt Kysymykset",
      subtitle: "Kaikki mitä sinun tarvitsee tietää palvelustamme.",
      items: [
        {
          q: "Onko lähelläni yksityislääkäriä tai päivystystä juuri nyt?",
          a: "Kyllä. Päivystävät lääkärimme ovat saatavilla koko Costa del Solin alueella (Marbella, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas ja Estepona). Lähetämme lähimmän lääkärin suoraan hotellihuoneeseesi tai asuntoosi 30–60 minuutissa.",
        },
        {
          q: "Voiko lääkäri tulla suoraan hotelliini sairaalakäynnin sijaan?",
          a: "Kyllä. Vältä jonotukset paikallisissa päivystyksissä. Lääkärimme tuo tarvittavat välineet luoksesi, tekee tutkimuksen, aloittaa hoidon sekä antaa viralliset reseptit ja vakuutusraportit.",
        },
        {
          q: "Teettekö käyntejä hotelleihin?",
          a: "Kyllä. Lääkärimme vierailevat kaikissa hotelleissa ympäri Aurinkorannikkoa, mukaan lukien Málaga, Marbella, Fuengirola, Benalmádena ja muut.",
        },
        {
          q: "Voitteko tulla asuntoon?",
          a: "Ehdottomasti. Vierailemme vuokra-asunnoissa, yksityisasunnoissa ja kaikissa osoitteissa, joissa majoitut loman aikana.",
        },
        {
          q: "Kuinka nopeasti lääkäri saapuu?",
          a: "Saapumisajat vaihtelevat sijainnin mukaan, mutta tavoitteenamme on saapua 30–60 minuutin kuluessa yhteydenotosta.",
        },
        {
          q: "Puhutteko englantia?",
          a: "Kyllä. Kaikki kumppanilääkärimme puhuvat sujuvaa englantia. Palvelua on saatavilla myös saksaksi, ranskaksi ja muilla kielillä.",
        },
        {
          q: "Voinko käyttää matkavakuutusta?",
          a: "Kyllä. Tarjoamme viralliset lääkärinlausunnot ja kuitit, jotka hyväksytään kaikissa suurimmissa matkavakuutusyhtiöissä.",
        },
        {
          q: "Hoidatteko lapsia?",
          a: "Kyllä. Tarjoamme pediatrista lääkärinhoitoa kaikenikäisille lapsille.",
        },
        {
          q: "Voinko saada reseptin?",
          a: "Kyllä. Lääkärimme voivat kirjoittaa reseptejä tarvittaviin lääkkeisiin, jotka voit noutaa mistä tahansa paikallisesta apteekista.",
        },
      ],
    },
    blog: {
      title: "Terveys- & Matkaoppaat",
      subtitle: "Hyödyllistä tietoa Aurinkorannikolla vieraileville matkailijoille.",
      readMore: "Lue artikkeli",
    },
    contact: {
      title: "Ota yhteyttä",
      subtitle: "Ota yhteyttä lääkintätiimiimme ympäri vuorokauden 24/7. Täytä lomake tai kirjoita meille suoraan.",
      name: "Koko Nimi",
      email: "Sähköpostiosoite",
      phone: "Puhelinnumero",
      hotel: "Hotelli / Osoite",
      symptoms: "Kuvaile Oireitasi tai Kyselyäsi",
      language: "Toivottu Kieli",
      submit: "Lähetä viesti",
      languages: ["Suomi", "Englanti", "Espanja", "Saksa", "Ranska", "Arabia", "Norja", "Tanska", "Ruotsi", "Venäjä", "Hollanti"],
      disclaimer: "Pyyntösi lähetetään suoraan 24/7-lääkäritiimillemme osoitteeseen contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H koordinoi pyyntöjä itsenäisten lisensoitujen lääkäreiden kanssa. Emme itse tarjoa lääketieteellistä hoitoa. Hengenvaarallisessa hätätilanteessa soita numeroon 112.",
      rights: "Kaikki oikeudet pidätetään.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      areas: "المناطق",
      blog: "المدونة",
      contact: "اتصل بنا",
      callNow: "اتصل الآن",
      whatsapp: "واتساب",
    },
    hero: {
      headline: "طبيب خاص في فندقك أو شقتك أو فيلتك في ماربيا وكوستا ديل سول (24/7)",
      subheadline:
        "زيارة طبيب مرخص إلى غرفتك الفندقية أو شقتك أو فيلتك خلال 30–60 دقيقة في ماربيا، بويرتو بانوس، ملقا وكوستا ديل سول. نوفر لك تنسيقاً كاملاً وخدمة ترجمة طبية هاتفية فورية باللغة العربية طوال الزيارة مع تقارير رسمية لتأمين السفر.",
      whatsapp: "واتساب الآن",
      call: "اتصل بنا",
      trusts: [
        "تنسيق وترجمة طبية فورية باللغة العربية مجاناً",
        "زيارات للفنادق والفلل والشقق (30–60 دقيقة)",
        "أطباء مرخصون في إسبانيا مع معدات طبية متكاملة",
        "تقارير طبية وفواتير معتمدة لشركات تأمين السفر",
        "رعاية طبية خاصة للأطفال والعائلات 24/7",
      ],
    },
    howItWorks: {
      title: "كيف تعمل الخدمة",
      subtitle: "من التواصل الأول إلى الرعاية الطبية في دقائق معدودة.",
      steps: [
        {
          step: "1",
          title: "اتصل بنا أو راسلنا بالعربية",
          desc: "أرسل رسالة واتساب أو اتصل بنا مباشرة باللغة العربية. فريق التنسيق الطبي متاح 24 ساعة طوال أيام الأسبوع.",
        },
        {
          step: "2",
          title: "أخبرنا بموقعك",
          desc: "أخبرنا بالفندق أو الشقة أو العنوان الذي تقيم فيه خلال إجازتك.",
        },
        {
          step: "3",
          title: "إرسال الطبيب فوراً",
          desc: "نقوم على الفور بتكليف أحد أطبائنا الشركاء المرخصين للتوجه إلى موقعك مباشرة.",
        },
        {
          step: "4",
          title: "تلقي الرعاية الطبية مع الترجمة",
          desc: "يصل الطبيب ويفحصك بمساعدة الترجمة الهاتفية الطبية، مع تسليم الوصفة والتقرير الطبي المعتمد لتأمينك.",
        },
      ],
    },
    services: {
      title: "خدماتنا",
      subtitle: "رعاية طبية خاصة وشاملة تصل إلى باب منزلك.",
      list: [
        {
          icon: "hotel",
          title: "طبيب في الفندق",
          desc: "استشارة طبية كاملة في غرفتك بالفندق براحة تامة.",
        },
        {
          icon: "home",
          title: "طبيب في الشقة",
          desc: "نزور شقتك المستأجرة أو مسكنك الخاص.",
        },
        {
          icon: "emergency",
          title: "زيارة منزلية طارئة",
          desc: "رعاية طبية عاجلة عندما تكون في أمس الحاجة إليها.",
        },
        {
          icon: "prescription",
          title: "استشارة أونلاين ووصفة QR (€90)",
          desc: "استشارة طبية أونلاين خلال 15 دقيقة: وصفة إلكترونية رسمية برمز QR صالحة في جميع صيدليات إسبانيا.",
        },
        {
          icon: "certificate",
          title: "الشهادات الطبية",
          desc: "وثائق رسمية لمزود تأمين السفر الخاص بك.",
        },
        {
          icon: "tourist",
          title: "الرعاية الطبية للسياح",
          desc: "رعاية متخصصة للزوار الدوليين غير المعتادين على النظام الصحي المحلي.",
        },
        {
          icon: "gp",
          title: "طبيب عام",
          desc: "استشارة طبية عامة كاملة تشمل التشخيص وخطة العلاج.",
        },
        {
          icon: "ambulance",
          title: "نقل بسيارة الإسعاف",
          desc: "نقل طبي آمن وسريع إلى أقرب مستشفى.",
        },

      ],
    },
    areas: {
      title: "المناطق التي نغطيها",
      subtitle: "نحن نخدم منطقة كوستا ديل سول بأكملها.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج إلى معرفته عن خدمتنا.",
      items: [
        {
          q: "هل يوجد طبيب خاص أو رعاية عاجلة بالقرب مني الآن؟",
          a: "نعم. أطباؤنا متواجدون في جميع أنحاء كوستا ديل سول (ماربيلا، فوينخيرولا، بينالمادينا، توريمولينوس، مالقة، ميخاس وإستيبونا). عند اتصالك بنا، نرسل أقرب طبيب مرخص إلى غرفتك بالفندق أو شقتك خلال 30 إلى 60 دقيقة.",
        },
        {
          q: "هل يمكن للطبيب زيارتي مباشرة في مكان إقامتي بدلاً من الذهاب إلى المستشفى؟",
          a: "نعم. تجنب الانتظار الطويل في المستشفيات. يأتي الطبيب بمعدات طبية متكاملة لتقديم الفحص والعلاج الفوري وكتابة الوصفات والتقارير المعتمدة للتأمين الصحي.",
        },
        {
          q: "هل تزورون الفنادق؟",
          a: "نعم. يزور أطباؤنا جميع الفنادق في كوستا ديل سول، بما في ذلك مالقة وماربيا وفوينخيرولا وبينالمادينا وغيرها.",
        },
        {
          q: "هل يمكنكم زيارة الشقق؟",
          a: "بالتأكيد. نحن نزور الشقق المستأجرة والمساكن الخاصة وأي عنوان تقيم فيه خلال إجازتك.",
        },
        {
          q: "ما مدى سرعة وصول الطبيب؟",
          a: "تختلف أوقات الاستجابة حسب الموقع، ولكننا نهدف إلى وصول الطبيب إليك في غضون 30 إلى 60 دقيقة من الاتصال الأول.",
        },
        {
          q: "هل يتوفر دعم وتنسيق باللغة العربية؟",
          a: "نعم بكل تأكيد. فريق التنسيق والواتساب يتواصل معك مباشرة باللغة العربية على مدار الساعة (24/7). كما نوفر خدمة ترجمة طبية هاتفية مباشرة أثناء فحص الطبيب لضمان شرح الأعراض وفهم تعليمات العلاج بدقة وبدون أي عائق لغوي، ومشمولة مجاناً بدون أي تكلفة إضافية.",
        },
        {
          q: "هل يمكنني استخدام تأمين السفر؟",
          a: "نعم. نحن نقدم إيصالات ووثائق طبية رسمية مقبولة لدى جميع مقدمي تأمين السفر الرئيسيين.",
        },
        {
          q: "هل يمكن علاج الأطفال؟",
          a: "نعم. نحن نقدم رعاية طبية للأطفال من جميع الأعمار.",
        },
        {
          q: "هل يمكنني الحصول على وصفة طبية؟",
          a: "نعم. يمكن لأطبائنا إصدار وصفات طبية للأدوية اللازمة، والتي يمكن صرفها من أي صيدلية محلية.",
        },
      ],
    },
    blog: {
      title: "دليل الصحة والسفر",
      subtitle: "معلومات مفيدة للسياح الذين يزورون كوستا ديل سول.",
      readMore: "اقرأ المقال",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "تواصل مع فريق التنسيق الطبي لدينا على مدار الساعة 24/7. املأ النموذج أو راسلنا مباشرة.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      hotel: "الفندق / العنوان",
      symptoms: "صف أعراضك أو استفسارك",
      language: "اللغة المفضلة",
      submit: "إرسال الرسالة",
      languages: ["العربية", "الإنجليزية", "الإسبانية", "الألمانية", "الفرنسية", "الفنلندية", "النرويجية", "الدنماركية", "السويدية", "الروسية", "الهولندية"],
      disclaimer: "سيتم إرسال طلبك مباشرة إلى فريقنا الطبي على مدار الساعة على contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "تقوم Urgent Care 24H بتنسيق الطلبات مع أطباء مرخصين مستقلين. نحن لا نقدم علاجاً طبياً بأنفسنا. في حالات الطوارئ التي تهدد الحياة، يرجى الاتصال بالرقم 112.",
      rights: "جميع الحقوق محفوظة.",
    },
  },

  no: {
    nav: {
      home: "Hjem",
      services: "Tjenester",
      areas: "Områder",
      blog: "Blogg",
      contact: "Kontakt",
      callNow: "Ring Nå",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Lege til ditt hotell eller leilighet i Málaga",
      subheadline: "Private leger tilgjengelig 24/7 for turister over hele Costa del Sol. Rask, profesjonell og engelsktalende.",
      whatsapp: "WhatsApp Nå",
      call: "Ring oss",
      trusts: [
        "Engelsktalende Leger",
        "Hotell- & Hjemmebesøk",
        "Rask Respons",
        "Medisinsk Kvittering for Forsikring",
        "Voksne & Barn",
      ],
    },
    howItWorks: {
      title: "Hvordan det fungerer",
      subtitle: "Fra første kontakt til medisinsk behandling på få minutter.",
      steps: [
        {
          step: "1",
          title: "Kontakt Oss",
          desc: "Send en WhatsApp-melding eller ring oss direkte. Tilgjengelig 24 timer i døgnet, 7 dager i uken.",
        },
        {
          step: "2",
          title: "Oppgi Posisjon",
          desc: "Gi oss beskjed om hvilket hotell, leilighet eller adresse du bor på under ferien din.",
        },
        {
          step: "3",
          title: "Legen Sendes Ut",
          desc: "Vi tildeler umiddelbart en av våre lisensierte partnerleger til å besøke deg.",
        },
        {
          step: "4",
          title: "Motta Behandling",
          desc: "Legen ankommer, undersøker deg og gir en fullstendig medisinsk rapport og kvittering for forsikringen.",
        },
      ],
    },
    services: {
      title: "Våre Tjenester",
      subtitle: "Omfattende privat medisinsk behandling levert direkte på døren.",
      list: [
        {
          icon: "hotel",
          title: "Lege på Hotell",
          desc: "Full medisinsk konsultasjon i komforten av ditt eget hotellrom.",
        },
        {
          icon: "home",
          title: "Lege i Leilighet",
          desc: "Vi besøker din leieleilighet eller private bolig.",
        },
        {
          icon: "emergency",
          title: "Akutt Hjemmebesøk",
          desc: "Hurtig medisinsk hjelp når du trenger det aller mest.",
        },
        {
          icon: "prescription",
          title: "Online Konsultasjon & QR-Resept (€90)",
          desc: "Online konsultasjon på 15 min: Offisiell spansk QR-resept, gyldig på alle apotek i hele Spania.",
        },
        {
          icon: "certificate",
          title: "Legeerklæringer",
          desc: "Offentlig dokumentasjon for din reiseforsikring.",
        },
        {
          icon: "tourist",
          title: "Legehjelp for Turister",
          desc: "Spesialisert behandling for utenlandske besøkende som ikke kjenner det lokale systemet.",
        },
        {
          icon: "gp",
          title: "Allmennlege",
          desc: "Full allmennlegekonsultasjon inkludert diagnose og behandlingsplan.",
        },
        {
          icon: "ambulance",
          title: "Ambulansetransport",
          desc: "Sikker og rask medisinsk transport til nærmeste sykehus.",
        },

      ],
    },
    areas: {
      title: "Områder Vi Dekker",
      subtitle: "Vi betjener hele Costa del Sol-regionen.",
    },
    faq: {
      title: "Ofte Stilte Spørsmål",
      subtitle: "Alt du trenger å vite om tjenesten vår.",
      items: [
        {
          q: "Finnes det en privatlege eller akutthjelp i nærheten av meg nå?",
          a: "Ja. Våre vaktleger er stasjonert over hele Costa del Sol (Marbella, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas og Estepona). Når du kontakter oss, sender vi nærmeste autoriserte lege direkte til ditt hotellrom eller leilighet innen 30 til 60 minutter.",
        },
        {
          q: "Kan en lege undersøke meg direkte på hotellet i stedet for å dra til et sykehus?",
          a: "Ja. Unngå lange ventetider på legevakt eller sykehus. Våre leger kommer til deg med medisinsk utstyr, gir akutt behandling, skriver resepter og utsteder rapport for reiseforsikring.",
        },
        {
          q: "Besøker dere hoteller?",
          a: "Ja. Våre leger besøker alle hoteller over hele Costa del Sol, inkludert Malaga, Marbella, Fuengirola, Benalmadena og mer.",
        },
        {
          q: "Kan dere besøke leiligheter?",
          a: "Absolutt. Vi besøker leieleiligheter, private boliger og alle adresser der du bor under ferien.",
        },
        {
          q: "Hvor raskt kan legen komme?",
          a: "Responstiden varierer etter sted, men vi har som mål å ha en lege hos deg innen 30–60 minutter fra første kontakt.",
        },
        {
          q: "Snakker dere engelsk?",
          a: "Ja. Alle våre partnerleger snakker flytende engelsk. Vi har også leger tilgjengelig som snakker tysk, fransk og andre språk.",
        },
        {
          q: "Kan jeg bruke reiseforsikring?",
          a: "Ja. Vi tilbyr offisielle medisinske rapporter og kvitteringer som er egnet for alle store reiseforsikringsselskaper.",
        },
        {
          q: "Kan barn bli behandlet?",
          a: "Ja. Vi tilbyr medisinsk behandling for barn i alle aldre.",
        },
        {
          q: "Kan jeg få en resept?",
          a: "Ja. Våre leger kan skrive ut resepter på nødvendige medisiner, som kan hentes på et lokalt apotek.",
        },
      ],
    },
    blog: {
      title: "Helse- & Reiseguider",
      subtitle: "Nyttig informasjon for turister som besøker Costa del Sol.",
      readMore: "Les artikkelen",
    },
    contact: {
      title: "Kontakt oss",
      subtitle: "Ta kontakt med vårt medisinske team 24/7. Fyll ut skjemaet eller skriv direkte til oss.",
      name: "Fullt Navn",
      email: "E-postadresse",
      phone: "Telefonnummer",
      hotel: "Hotell / Adresse",
      symptoms: "Beskriv Dine Symptomer eller Henvendelse",
      language: "Foretrukket Språk",
      submit: "Send melding",
      languages: ["Norsk", "Engelsk", "Spansk", "Tysk", "Fransk", "Finsk", "Arabisk", "Dansk", "Svensk", "Russisk", "Nederlandsk"],
      disclaimer: "Henvendelsen din sendes direkte til vårt medisinske team på contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H koordinerer forespørsler med uavhengige lisensierte leger. Vi tilbyr ikke medisinsk behandling selv. Ved livstruende nødsituasjoner, ring 112.",
      rights: "Alle rettigheter forbeholdt.",
    },
  },

  da: {
    nav: {
      home: "Forside",
      services: "Ydelser",
      areas: "Områder",
      blog: "Blog",
      contact: "Kontakt",
      callNow: "Ring Nu",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Læge til dit hotel eller lejlighed i Málaga",
      subheadline: "Private læger tilgængelige 24/7 for turister over hele Costa del Sol. Hurtig, professionel og engelsktalende.",
      whatsapp: "WhatsApp Nu",
      call: "Ring os",
      trusts: [
        "Engelsktalende Læger",
        "Hotel- & Hjemmebesøg",
        "Hurtig Respons",
        "Medicinsk Kvittering til Forsikring",
        "Voksne & Børn",
      ],
    },
    howItWorks: {
      title: "Hvordan det fungerer",
      subtitle: "Fra første kontakt til lægehjælp på få minutter.",
      steps: [
        {
          step: "1",
          title: "Kontakt Os",
          desc: "Send en WhatsApp-besked or ring til os direkte. Tilgængelig 24 timer i døgnet, 7 dage om ugen.",
        },
        {
          step: "2",
          title: "Angiv Placering",
          desc: "Lad os vide, hvilket hotel, lejlighed eller adresse du bor på under din ferie.",
        },
        {
          step: "3",
          title: "Lægen Sendes Afsted",
          desc: "Vi tildeler med det samme en af vores autoriserede partnerlæger til at besøge dig.",
        },
        {
          step: "4",
          title: "Modtag Lægehjælp",
          desc: "Lægen ankommer, undersøger dig og giver en komplet lægeerklæring samt kvittering til forsikringen.",
        },
      ],
    },
    services: {
      title: "Vores Ydelser",
      subtitle: "Omfattende privat lægehjælp leveret direkte til din dør.",
      list: [
        {
          icon: "hotel",
          title: "Læge på Hotel",
          desc: "Komplet lægekonsultation i komforten af dit hotelværelse.",
        },
        {
          icon: "home",
          title: "Læge i Lejlighed",
          desc: "Vi besøger din lejebolig eller private bolig.",
        },
        {
          icon: "emergency",
          title: "Akut Hjemmebesøg",
          desc: "Hurtig lægehjælp, når du har allermest brug for det.",
        },
        {
          icon: "prescription",
          title: "Online Konsultation & QR-Recept (€90)",
          desc: "Online konsultation på 15 min: Officiel spansk QR-recept, gyldig på alle apoteker i hele Spanien.",
        },
        {
          icon: "certificate",
          title: "Lægeerklæringer",
          desc: "Officiel dokumentation til dit rejseforsikringsselskab.",
        },
        {
          icon: "tourist",
          title: "Turistlægehjælp",
          desc: "Specialiseret behandling til internationale gæster, der ikke kender det lokale system.",
        },
        {
          icon: "gp",
          title: "Praktiserende Læge",
          desc: "Komplet konsultation hos praktiserende læge inklusive diagnose og behandlingsplan.",
        },
        {
          icon: "ambulance",
          title: "Ambulancetransport",
          desc: "Sikker og hurtig medicinsk transport til det nærmeste hospital.",
        },

      ],
    },
    areas: {
      title: "Områder Vi Dækker",
      subtitle: "Vi dækker hele Costa del Sol-regionen.",
    },
    faq: {
      title: "Ofte Stillede Spørsmål",
      subtitle: "Alt, hvad du har brug for at vide om vores service.",
      items: [
        {
          q: "Er der en privatlæge eller akut lægehjælp nær mig lige nu?",
          a: "Ja. Vores tilkaldelæger dækker hele Costa del Sol (Marbella, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas og Estepona). Ved henvendelse sender vi den nærmeste autoriserede læge direkte til dit hotelværelse eller feriebolig inden for 30 til 60 minutter.",
        },
        {
          q: "Kan en privat læge tilse mig direkte på mit hotel i stedet for en lokal klinik?",
          a: "Ja. Undgå ventetid på skadestuer. Lægen ankommer direkte til din bolig med nødvendigt klinisk udstyr, stiller diagnose, giver akut behandling og udsteder recepter samt forsikringsdokumentation.",
        },
        {
          q: "Besøger I hoteller?",
          a: "Ja. Vores læger besøger alle hoteller på tværs af Costa del Sol, herunder Malaga, Marbella, Fuengirola, Benalmadena og mere.",
        },
        {
          q: "Kan I besøge lejligheder?",
          a: "Absolut. Vi besøger lejligheder, private boliger og enhver adresse, hvor du bor under din ferie.",
        },
        {
          q: "Hvor hurtigt kan en læge komme?",
          a: "Svartiden varierer efter placering, men vi tilstræber at have en læge hos dig inden for 30-60 minutter efter din første kontakt.",
        },
        {
          q: "Taler I engelsk?",
          a: "Ja. Alle vores partnerlæger taler flytende engelsk. Vi har også læger til rådighed, der taler tysk, fransk og andre sprog.",
        },
        {
          q: "Kan jeg bruge min rejseforsikring?",
          a: "Ja. Vi leverer officielle lægeerklæringer og kvitteringer, der er egnede til alle større rejseforsikringsudbydere.",
        },
        {
          q: "Kan børn blive behandlet?",
          a: "Ja. Vi tilbyder pædiatrisk lægehjælp til børn i alle aldre.",
        },
        {
          q: "Kan jeg få en recept?",
          a: "Ja. Vores læger kan udstede recepter på nødvendig medicin, som derefter kan hentes på et lokalt apotek.",
        },
      ],
    },
    blog: {
      title: "Sundheds- & Rejseguider",
      subtitle: "Nyttig information til turister, der besøger Costa del Sol.",
      readMore: "Læs artikel",
    },
    contact: {
      title: "Kontakt os",
      subtitle: "Kontakt vores medicinske team 24/7. Udfyld formularen eller skriv direkte til os.",
      name: "Fulde Navn",
      email: "E-mailadresse",
      phone: "Telefonnummer",
      hotel: "Hotel / Adresse",
      symptoms: "Beskriv Dine Symptomer eller Henvendelse",
      language: "Foretrukket Sprog",
      submit: "Send besked",
      languages: ["Dansk", "Engelsk", "Spansk", "Tysk", "Fransk", "Finsk", "Arabisk", "Norsk", "Svensk", "Russisk", "Hollandsk"],
      disclaimer: "Din henvendelse sendes direkte til vores medicinske team på contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H koordinerer anmodninger med uafhængige autoriserede læger. Vi yder ikke selv lægebehandling. Ring 112 i tilfælde af livsfare.",
      rights: "Alle rettigheder forbeholdes.",
    },
  },

  sv: {
    nav: {
      home: "Startsida",
      services: "Tjänster",
      areas: "Områden",
      blog: "Blogg",
      contact: "Kontakt",
      callNow: "Ring Nu",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Läkare till ditt hotell eller din lägenhet i Málaga",
      subheadline: "Privata läkare tillgängliga 24/7 för turister över hela Costa del Sol. Snabb, professionell och engelsktalande.",
      whatsapp: "WhatsApp Nu",
      call: "Ring oss",
      trusts: [
        "Engelsktalande Läkare",
        "Hotell- & Hembesök",
        "Snabb Respons",
        "Medicinskt Kvitto för Försäkring",
        "Vuxna & Barn",
      ],
    },
    howItWorks: {
      title: "Hur det fungerar",
      subtitle: "Från första kontakt till läkarvård på bara några minuter.",
      steps: [
        {
          step: "1",
          title: "Kontakta Oss",
          desc: "Skicka ett WhatsApp-meddelande eller ring oss direkt. Tillgängliga 24 timmar om dygnet, 7 dagar i veckan.",
        },
        {
          step: "2",
          title: "Ange Plats",
          desc: "Berätta vilket hotell, lägenhet eller adress du bor på under din semester.",
        },
        {
          step: "3",
          title: "Läkaren Skickas",
          desc: "Vi tilldelar omedelbart en av våra auktoriserade partnerläkare att besöka dig.",
        },
        {
          step: "4",
          title: "Få Läkarvård",
          desc: "Läkaren anländer, undersöker dig och ger ett fullständigt läkarintyg samt kvitto för försäkringen.",
        },
      ],
    },
    services: {
      title: "Våra Tjänster",
      subtitle: "Omfattande privat läkarvård levererad direkt till din dörr.",
      list: [
        {
          icon: "hotel",
          title: "Läkare på Hotell",
          desc: "Komplett läkarkonsultation i bekvämligheten av ditt hotellrum.",
        },
        {
          icon: "home",
          title: "Läkare i Lägenhet",
          desc: "Vi besöker din hyreslägenhet eller privata bostad.",
        },
        {
          icon: "emergency",
          title: "Akut Hembesök",
          desc: "Snabb läkarvård när du behöver den som mest.",
        },
        {
          icon: "prescription",
          title: "Onlinekonsultation & QR-Recept (€90)",
          desc: "Onlinekonsultation på 15 min: Officiellt spanskt QR-recept, giltigt på alla apotek i hela Spanien.",
        },
        {
          icon: "certificate",
          title: "Läkarintyg",
          desc: "Officiella dokument till ditt reseförsäkringsbolag.",
        },
        {
          icon: "tourist",
          title: "Turistläkarvård",
          desc: "Specialiserad vård för internationella gäster som inte känner till det lokala systemet.",
        },
        {
          icon: "gp",
          title: "Allmänläkare",
          desc: "Komplett konsultation hos allmänläkare inklusive diagnos och behandlingsplan.",
        },
        {
          icon: "ambulance",
          title: "Ambulanstransport",
          desc: "Säker och snabb medicinsk transport till närmaste sjukhus.",
        },

      ],
    },
    areas: {
      title: "Områden Vi Täcker",
      subtitle: "Vi betjänar hela Costa del Sol-regionen.",
    },
    faq: {
      title: "Vanliga Frågor",
      subtitle: "Allt du behöver veta om vår tjänst.",
      items: [
        {
          q: "Finns det en privatläkare eller akutvård nära mig just nu?",
          a: "Ja. Våra jourhavande läkare finns tillgängliga över hela Costa del Sol (Marbella, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas och Estepona). När du kontaktar oss skickar vi närmaste legitimerade läkare direkt till ditt hotellrum eller lägenhet inom 30 till 60 minuter.",
        },
        {
          q: "Kan en akutläkare undersöka mig på mitt hotell istället för att åka till en klinik?",
          a: "Ja. Istället för att vänta i timmar på en akutmottagning kommer vår läkare direkt till din dörr med full medicinsk utrustning, utför diagnos, påbörjar behandling och utfärdar recept och försäkringsintyg.",
        },
        {
          q: "Besöker ni hotell?",
          a: "Ja. Våra läkare besöker alla hotell över hela Costa del Sol, inklusive Malaga, Marbella, Fuengirola, Benalmadena och mer.",
        },
        {
          q: "Kan ni besöka lägenheter?",
          a: "Absolut. Vi besöker lägenheter, privata hem och alla adresser där du bor under din semester.",
        },
        {
          q: "Hur snabbt kan en läkare komma?",
          a: "Svarstiden varierar beroende på plats, men vi strävar efter att ha en läkare hos dig inom 30-60 minuter efter din första kontakt.",
        },
        {
          q: "Talar ni engelska?",
          a: "Ja. Alla våra partnerläkare talar flytande engelska. Vi har även läkare tillgängliga som talar tyska, franska och andra språk.",
        },
        {
          q: "Kan jag använda min reseförsäkring?",
          a: "Ja. Vi tillhandahåller officiella läkarintyg och kvitton som är lämpliga för alla större reseförsäkringsbolag.",
        },
        {
          q: "Kan barn behandlas?",
          a: "Ja. Vi erbjuder pediatrisk läkarvård för barn i alla åldrar.",
        },
        {
          q: "Kan jag få ett recept?",
          a: "Ja. Våra läkare kan skriva ut recept på nödvändig medicin som kan hämtas ut på ett lokalt apotek.",
        },
      ],
    },
    blog: {
      title: "Hälso- & Reseguider",
      subtitle: "Användbar information för turister som besöker Costa del Sol.",
      readMore: "Läs artikel",
    },
    contact: {
      title: "Kontakta oss",
      subtitle: "Kontakta vårt medicinska team dygnet runt 24/7. Fyll i formuläret eller skriv direkt till oss.",
      name: "Fullständigt Namn",
      email: "E-postadress",
      phone: "Telefonnummer",
      hotel: "Hotell / Adress",
      symptoms: "Beskriv Dina Symptom eller Ärende",
      language: "Föredraget Språk",
      submit: "Skicka meddelande",
      languages: ["Svenska", "Engelska", "Spanska", "Tyska", "Franska", "Finska", "Arabiska", "Norska", "Danska", "Ryska", "Nederländska"],
      disclaimer: "Din förfrågan skickas direkt till vårt medicinska team på contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Urgent Care 24H samordnar förfrågningar med oberoende legitimerade läkare. Vi tillhandahåller inte medicinsk behandling själva. Vid livshotande nödsituationer, ring 112.",
      rights: "Alla rättigheter förbehållna.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      areas: "Зоны",
      blog: "Блог",
      contact: "Контакты",
      callNow: "Позвонить",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Врач в отель или апартаменты в Малаге",
      subheadline:
        "Частные врачи доступны 24/7 для туристов по всему побережью Коста-дель-Соль. Быстро, профессионально и на иностранных языках.",
      whatsapp: "WhatsApp 24/7",
      call: "Позвонить",
      trusts: [
        "Англоязычные врачи",
        "Визиты в отель и на дом",
        "Приезд за 30–60 минут",
        "Чеки для страховой",
        "Взрослые и дети",
      ],
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "От первого сообщения до визита доктора — за считанные минуты.",
      steps: [
        {
          step: "1",
          title: "Свяжитесь с нами",
          desc: "Отправьте сообщение в WhatsApp или позвоните. Мы на связи 24 часа в сутки, 7 дней в неделю.",
        },
        {
          step: "2",
          title: "Укажите локацию",
          desc: "Сообщите название отеля, апартаментов или адрес, где вы остановились.",
        },
        {
          step: "3",
          title: "Выезд доктора",
          desc: "Мы немедленно направляем к вам ближайшего лицензированного врача.",
        },
        {
          step: "4",
          title: "Медицинская помощь",
          desc: "Врач проводит осмотр, назначает лечение и выдает официальный отчет для страховой компании.",
        },
      ],
    },
    services: {
      title: "Наши услуги",
      subtitle: "Комплексная частная медицинская помощь с выездом к вашей двери.",
      list: [
        {
          icon: "hotel",
          title: "Врач в отель",
          desc: "Полноценная медицинская консультация в комфорте вашего номера.",
        },
        {
          icon: "home",
          title: "Врач в апартаменты",
          desc: "Выезд в арендованные квартиры или частные виллы.",
        },
        {
          icon: "emergency",
          title: "Срочный вызов на дом",
          desc: "Неотложная помощь при внезапном ухудшении самочувствия.",
        },
        {
          icon: "prescription",
          title: "Онлайн-консультация и QR-рецепт (90€)",
          desc: "Онлайн-консультация за 15 мин: официальный испанский QR-рецепт, действующий во всех аптеках Испании.",
        },
        {
          icon: "certificate",
          title: "Медицинские справки",
          desc: "Официальные отчеты и счета для вашей страховой компании.",
        },
        {
          icon: "tourist",
          title: "Медицина для туристов",
          desc: "Индивидуальный подход к гостям Испании без очередей в больницах.",
        },
        {
          icon: "gp",
          title: "Терапевт общей практики",
          desc: "Полная консультация терапевта с планом лечения.",
        },
        {
          icon: "ambulance",
          title: "Транспортировка в клинику",
          desc: "Организация трансфера при необходимости госпитализации.",
        },
      ],
    },
    areas: {
      title: "Зоны обслуживания",
      subtitle: "Мы обслуживаем все побережье Коста-дель-Соль.",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Все, что нужно знать о нашем медицинском сервисе.",
      items: [
        {
          q: "Есть ли частный врач или неотложная помощь рядом со мной прямо сейчас?",
          a: "Да. Наши дежурные врачи находятся по всему побережью Коста-дель-Соль (Марбелья, Фуэнхирола, Бенальмадена, Торремолинос, Малага, Михас и Эстепона). После вашего звонка или сообщения в WhatsApp ближайший лицензированный доктор выезжает к вам в отель или апартаменты в течение 30–60 минут.",
        },
        {
          q: "Может ли врач приехать прямо в отель вместо поездки в местную клинику?",
          a: "Да. Вам не придется ждать часами в приемном покое. Врач приедет со всем необходимым оборудованием, проведет осмотр, назначит лечение, выпишет официальные рецепты и предоставит отчет для вашей страховки.",
        },
        {
          q: "Вы выезжаете в отели?",
          a: "Да. Наши врачи посещают любые отели на Коста-дель-Соль: Малага, Марбелья, Торремолинос, Фуэнхирола и др.",
        },
        {
          q: "Можно ли вызвать врача в апартаменты?",
          a: "Безусловно. Мы выезжаем в апартаменты, съемные квартиры и частные виллы.",
        },
        {
          q: "Как быстро приедет доктор?",
          a: "Обычно врач прибывает в течение 30–60 минут с момента первого обращения.",
        },
        {
          q: "На каких языках говорят врачи?",
          a: "Все наши доктора свободно говорят по-английски и по-испански, также есть специалисты с немецким и французским.",
        },
        {
          q: "Подойдут ли документы для страховой?",
          a: "Да. Мы выдаем официальные счета и медицинские заключения, принимаемые всеми страховыми компаниями.",
        },
        {
          q: "Оказываете ли помощь детям?",
          a: "Да, мы оказываем педиатрическую помощь детям любого возраста.",
        },
        {
          q: "Выписывает ли врач рецепты?",
          a: "Да. Врач выписывает официальные испанские рецепты, по которым можно купить лекарства в любой аптеке.",
        },
      ],
    },
    blog: {
      title: "Гид по здоровью и отдыху",
      subtitle: "Полезная информация для туристов на Коста-дель-Соль.",
      readMore: "Читать статью",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Свяжитесь с нашей медицинской координационной службой 24/7. Заполните форму или напишите нам напрямую.",
      name: "Ваше имя",
      email: "Электронная почта",
      phone: "Номер телефона",
      hotel: "Отель / Адрес",
      symptoms: "Опишите ваши симптомы или вопрос",
      language: "Предпочтительный язык",
      submit: "Отправить сообщение",
      languages: ["Русский", "English", "Español", "Deutsch", "Français", "Nederlands"],
      disclaimer: "Ваш запрос будет отправлен напрямую нашей медицинской службе 24/7 на contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Частная медицинская служба на Коста-дель-Соль. Официальные медицинские отчеты для туристической страховки.",
      rights: "Все права защищены.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      areas: "Gebieden",
      blog: "Blog",
      contact: "Contact",
      callNow: "Bel Nu",
      whatsapp: "WhatsApp",
    },
    hero: {
      headline: "Arts aan uw hotel of appartement in Málaga",
      subheadline:
        "Particuliere artsen 24/7 beschikbaar voor toeristen aan de Costa del Sol. Snel, professioneel en meertalig.",
      whatsapp: "WhatsApp Nu",
      call: "Bel Nu",
      trusts: [
        "Engelssprekende artsen",
        "Hotel- & huisbezoeken",
        "Binnen 30-60 minuten",
        "Nota voor verzekering",
        "Volwassenen & kinderen",
      ],
    },
    howItWorks: {
      title: "Hoe het werkt",
      subtitle: "Van eerste contact tot medische hulp in enkele minuten.",
      steps: [
        {
          step: "1",
          title: "Neem contact op",
          desc: "Stuur een WhatsApp-bericht of bel direct. 24 uur per dag, 7 dagen per week bereikbaar.",
        },
        {
          step: "2",
          title: "Geef uw locatie door",
          desc: "Laat ons weten in welk hotel, appartement of adres u verblijft.",
        },
        {
          step: "3",
          title: "Arts vertrekt direct",
          desc: "We sturen onmiddellijk een bevoegde arts naar uw locatie.",
        },
        {
          step: "4",
          title: "Ontvang medische zorg",
          desc: "De arts onderzoekt u en overhandigt een officieel rapport en declaratienota voor uw verzekering.",
        },
      ],
    },
    services: {
      title: "Onze Diensten",
      subtitle: "Uitgebreide particuliere medische zorg direct aan uw deur.",
      list: [
        {
          icon: "hotel",
          title: "Arts in het Hotel",
          desc: "Volledig medisch consult in het comfort van uw hotelkamer.",
        },
        {
          icon: "home",
          title: "Arts aan uw Appartement",
          desc: "Wij bezoeken uw vakantieappartement of privévilla.",
        },
        {
          icon: "emergency",
          title: "Spoedvisite aan Huis",
          desc: "Dringende medische aandacht wanneer u die het hardst nodig heeft.",
        },
        {
          icon: "prescription",
          title: "Online Consult & QR-Recept (€90)",
          desc: "Online consult in 15 min: Officieel Spaans QR-recept, geldig bij alle apotheken in heel Spanje.",
        },
        {
          icon: "certificate",
          title: "Medische Attesten",
          desc: "Officiële documentatie voor uw reisverzekeraar.",
        },
        {
          icon: "tourist",
          title: "Zorg voor Toeristen",
          desc: "Gespecialiseerde zorg voor internationale bezoekers zonder ziekenhuiswachttijden.",
        },
        {
          icon: "gp",
          title: "Huisartsenzorg",
          desc: "Volledig consult inclusief diagnose en behandelplan.",
        },
        {
          icon: "ambulance",
          title: "Ambulancevervoer",
          desc: "Veilig en snel vervoer indien opname nodig is.",
        },
      ],
    },
    areas: {
      title: "Onze Werkgebieden",
      subtitle: "Wij bedienen de gehele Costa del Sol.",
    },
    faq: {
      title: "Veelgestelde Vragen",
      subtitle: "Alles wat u moet weten over onze medische service.",
      items: [
        {
          q: "Is er nu een privéarts of spoedzorg in de buurt beschikbaar?",
          a: "Ja. Onze artsen zijn strategisch gestationeerd langs de hele Costa del Sol (Marbella, Fuengirola, Benalmadena, Torremolinos, Malaga, Mijas en Estepona). Na uw bericht sturen we de dichtstbijzijnde erkende arts direct naar uw hotelkamer of appartement binnen 30 tot 60 minuten.",
        },
        {
          q: "Kan een arts rechtstreeks naar mijn hotel of appartement komen in plaats van naar een ziekenhuis?",
          a: "Ja. Voorkom lange wachttijden in lokale ziekenhuizen. Onze artsen komen met een volledige medische uitrusting naar uw accommodatie, verrichten onderzoek, geven behandelingen en voorzien u van een rapport voor uw reisverzekering.",
        },
        {
          q: "Bezoekt u hotels?",
          a: "Ja. Onze artsen bezoeken alle hotels aan de Costa del Sol: Málaga, Marbella, Torremolinos, Fuengirola en meer.",
        },
        {
          q: "Kunt u ook appartementen bezoeken?",
          a: "Zeker. Wij bezoeken vakantiewoningen, appartementen en privévilla's.",
        },
        {
          q: "Hoe snel kan de dokter er zijn?",
          a: "De responstijd hangt af van uw locatie, maar gemiddeld is de arts binnen 30–60 minuten ter plaatse.",
        },
        {
          q: "Spreekt de arts Engels?",
          a: "Ja. Al onze partnerartsen spreken vloeiend Engels en Spaans. Tevens zijn er artsen met Frans en Duits beschikbaar.",
        },
        {
          q: "Kan ik declareren bij mijn reisverzekering?",
          a: "Ja. Wij leveren officiële facturen en medische rapporten die door alle reisverzekeraars worden geaccepteerd.",
        },
        {
          q: "Behandelt u ook kinderen?",
          a: "Ja. Wij bieden kindergeneeskundige zorg voor kinderen van alle leeftijden.",
        },
        {
          q: "Kan ik een recept krijgen?",
          a: "Ja. De arts kan direct een Spaans recept uitschrijven dat bij iedere apotheek geldig is.",
        },
      ],
    },
    blog: {
      title: "Gezondheids- & Reisgidsen",
      subtitle: "Nuttige medische informatie voor toeristen aan de Costa del Sol.",
      readMore: "Lees artikel",
    },
    contact: {
      title: "Neem contact op",
      subtitle: "Neem 24/7 contact op met ons medische coördinatieteam. Vul het formulier in of stuur ons direct een bericht.",
      name: "Volledige Naam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      hotel: "Hotel / Adres",
      symptoms: "Beschrijf uw klachten of vraag",
      language: "Voorkeurstaal",
      submit: "Bericht versturen",
      languages: ["Nederlands", "English", "Español", "Deutsch", "Français"],
      disclaimer: "Uw aanvraag wordt rechtstreeks verzonden naar ons medisch team op contact@urgentcare24h.com.",
    },
    footer: {
      disclaimer: "Particuliere medische thuiszorg aan de Costa del Sol. Officiële medische rapporten voor reisverzekeringen.",
      rights: "Alle rechten voorbehouden.",
    },
  },
} as const;

// ────────────────────────────────────────────────────────────
// CITIES
// ────────────────────────────────────────────────────────────
export interface City {
  slug: string;
  name: string;
  geo: { lat: number; lng: number };
  localeSlugs: Record<Locale, string>;
  description: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  metaDesc: Record<Locale, string>;
  h1: Record<Locale, string>;
}

export const CITIES: City[] = [
  {
    slug: "malaga",
    name: "Málaga",
    geo: { lat: 36.7213, lng: -4.4214 },
    localeSlugs: {
      en: "doctor-malaga",
      es: "medico-malaga",
      de: "arzt-malaga",
      fr: "medecin-malaga",
      fi: "laakari-malaga",
      ar: "tabib-malaga",
      no: "lege-malaga",
      da: "laege-malaga",
      sv: "lakare-malaga",
      ru: "vrach-malaga",
      nl: "arts-malaga",
    },
    description: {
      en: "24/7 English-speaking private doctor visits to hotels, Airbnbs and apartments in Málaga Historic Centre, La Malagueta, Soho, Muelle Uno, El Palo, Pedregalejo and Airport hotels in 30–60 minutes (€130 day / €140 night & weekends). Need an urgent prescription? Get an official Spanish QR prescription online in 15 minutes (€90).",
      es: "Visitas médicas privadas 24/7 a hoteles, Airbnbs y apartamentos en Málaga Centro Histórico, La Malagueta, Soho, Muelle Uno, El Palo, Pedregalejo y zona Aeropuerto en 30–60 minutos (130 € día / 140 € noche y festivos). ¿Necesitas una receta urgente? Obtén tu receta electrónica oficial con QR en 15 minutos (90 €).",
      de: "24/7 Privatarzt-Besuche im Hotel, Airbnb oder Apartment in der Altstadt von Málaga, La Malagueta, Soho, Muelle Uno, El Palo und Pedregalejo in 30–60 Min. (130 € Tag / 140 € Nacht & Wochenende). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Visites médicales privées 24h/24 à votre hôtel ou appartement dans le Centre Historique de Málaga, La Malagueta, Soho, Muelle Uno, El Palo et Pedregalejo en 30–60 min (130 € jour / 140 € nuit et week-end). Besoin d'une ordonnance ? Ordonnance espagnole officielle avec QR en ligne en 15 min (90 €).",
      fi: "24/7 yksityislääkärin kotikäynnit ja hotellivierailut Málagan vanhassakaupungissa, La Malaguetassa, Sohossa, Muelle Unossa, El Palossa ja Pedregalejossa 30–60 minuutissa (130 € päivä / 140 € yö & viikonloppu). Tai virallinen espanjalainen QR-resepti puhelimeesi 15 minuutissa (90 €).",
      ar: "زيارات أطباء خصوصيين 24/7 للفنادق والشقق في وسط مالقة التاريخي، لا مالاغيتا، سوهو، مويلي أونو، إل بالو وبيدريغاليخو خلال 30-60 دقيقة (130 يورو نهاراً / 140 يورو ليلاً وعطلات نهاية الأسبوع). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة أونلاين (90 يورو).",
      no: "24/7 privatlege til hotell og leilighet i Málaga sentrum, La Malagueta, Soho, Muelle Uno, El Palo og Pedregalejo innen 30–60 min (€130 dag / €140 natt & helg). Trenger du kun resept? Få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "24/7 privatlæge til hotel og feriebolig i Málaga centrum, La Malagueta, Soho, Muelle Uno, El Palo og Pedregalejo inden for 30–60 min (€130 dag / €140 nat & weekend). Kun brug for en recept? Få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "24/7 privatläkare till hotell och lägenhet i Málagas historiska centrum, La Malagueta, Soho, Muelle Uno, El Palo och Pedregalejo inom 30–60 min (€130 dag / €140 natt & helg). Behöver du bara recept? Få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Круглосуточный выезд частного врача в отели и апартаменты в историческом центре Малаги, Ла-Малагете, Сохо, Муэлье-Уно, Эль-Пало и Педрегалехо за 30–60 минут (130 € день / 140 € ночь и выходные). Или получите официальный испанский рецепт с QR-кодом онлайн за 15 минут (90 €).",
      nl: "24/7 privéarts bezoekt uw hotel of appartement in het historisch centrum van Málaga, La Malagueta, Soho, Muelle Uno, El Palo en Pedregalejo binnen 30–60 min (€130 dag / €140 nacht & weekend). Alleen een recept nodig? Ontvang binnen 15 min online een officieel Spaans QR-recept (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Málaga | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Málaga | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Málaga | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Málaga | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Málaga | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Málaga | زيارة فندق 24/7",
      no: "Lege i Nærheten i Málaga | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Málaga | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Málaga | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Málaga | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Málaga | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Málaga. English-speaking private doctors visit your hotel room or apartment 24/7 in 30–60 min. Travel insurance reports & official prescriptions.",
      es: "¿Buscas un médico cerca de ti en Málaga? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Málaga. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Málaga. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Málaga. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Málaga. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Málaga. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Málaga. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Málaga. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Málaga. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Málaga? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Málaga — Hotel & Home Visits",
      es: "Médico Privado y Urgencias en Málaga — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Málaga — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Málaga — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Málaga — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Málaga — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Málaga — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Málaga — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Málaga — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Málaga — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Málaga — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "marbella",
    name: "Marbella",
    geo: { lat: 36.5101, lng: -4.8825 },
    localeSlugs: {
      en: "doctor-marbella",
      es: "medico-marbella",
      de: "arzt-marbella",
      fr: "medecin-marbella",
      fi: "laakari-marbella",
      ar: "tabib-marbella",
      no: "lege-marbella",
      da: "laege-marbella",
      sv: "lakare-marbella",
      ru: "vrach-marbella",
      nl: "arts-marbella",
    },
    description: {
      en: "Skip crowded waiting rooms in Marbella. Our English-speaking private doctors visit your hotel, villa or apartment 24/7 in 30–60 minutes across Marbella Centre, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara, Elviria, Las Chapas and Cabopino (€140 flat rate). Need medication only? Get an official Spanish QR prescription on your phone in 15 minutes (€90).",
      es: "Evita largas esperas en urgencias en Marbella. Nuestros médicos privados van a tu hotel, villa o apartamento 24/7 en 30–60 min en Marbella Centro, Puerto Banús, Nueva Andalucía, Milla de Oro, San Pedro Alcántara, Elviria, Las Chapas y Cabopino (tarifa única 140 €). ¿Solo necesitas medicación? Recibe tu receta oficial con QR en 15 min por teléfono/WhatsApp (90 €).",
      de: "Vermeiden Sie lange Wartezeiten in Marbella. Unsere Privatärzte besuchen Ihr Hotel, Ihre Villa oder Ihr Apartment 24/7 in 30–60 Min. in Marbella Zentrum, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara und Elviria (140 € Festpreis). Nur Medikamente nötig? Offizielles spanisches QR-Rezept in 15 Min. aufs Handy (90 €).",
      fr: "Évitez les longues attentes à Marbella. Nos médecins privés se déplacent à votre hôtel, villa ou appartement 24h/24 en 30–60 min à Marbella Centre, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara et Elviria (tarif unique 140 €). Besoin uniquement d'une ordonnance ? Ordonnance officielle QR en 15 min (90 €).",
      fi: "Vältä jonot Marbellassa. Yksityislääkärimme vierailevat hotellissasi, huvilassasi tai asunnossasi 24/7 30–60 minuutissa Marbellan keskustassa, Puerto Banúsissa, Nueva Andalucíassa, Golden Milella, San Pedro Alcántarassa ja Elviriassa (kiinteä hinta 140 €). Tarvitsetko vain reseptin? Virallinen espanjalainen QR-resepti 15 minuutissa (90 €).",
      ar: "تجنب الانتظار الطويل في ماربيا. أطباءنا الخصوصيون يزورون فندقك أو فيلتك أو شقتك 24/7 خلال 30-60 دقيقة في وسط ماربيا، بورتو بانوس، نويفا أندلوسيا، الميل الذهبي، سان بيدرو ألكانتارا وإلفيرا (سعر ثابت 140 يورو). تحتاج فقط إلى دواء؟ احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "Unngå lange ventetider i Marbella. Våre engelsktalende privatleger besøker ditt hotell, villa eller leilighet 24/7 innen 30–60 min i Marbella sentrum, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara og Elviria (fastpris €140). Trenger du kun medisin? Få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "Undgå lange ventetider i Marbella. Vores engelsktalende privatlæger besøger dit hotel, din villa eller lejlighed 24/7 inden for 30–60 min i Marbella centrum, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara og Elviria (fast pris €140). Kun brug for medicin? Få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "Undvik långa väntetider i Marbella. Våra engelsktalande privatläkare besöker ditt hotell, din villa eller lägenhet 24/7 inom 30–60 min i Marbella centrum, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara och Elviria (fast pris €140). Behöver du bara medicin? Få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Без очередей в Марбелье: частный врач приедет в ваш отель, виллу или апартаменты 24/7 за 30–60 минут в центре Марбельи, Пуэрто-Банусе, Нуэва-Андалусии, на Золотой Миле, в Сан-Педро и Эльвирии (фиксированный тариф 140 €). Нужен только рецепт? Официальный испанский QR-рецепт за 15 минут онлайн (90 €).",
      nl: "Vermijd lange wachttijden in Marbella. Onze privéartsen bezoeken uw hotel, villa of appartement 24/7 binnen 30–60 min in Marbella Centrum, Puerto Banús, Nueva Andalucía, Golden Mile, San Pedro Alcántara en Elviria (vast tarief €140). Alleen medicatie nodig? Ontvang binnen 15 min een officieel Spaans QR-recept op uw telefoon (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Marbella | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Marbella | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Marbella | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Marbella | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Marbella | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Marbella | زيارة فندق 24/7",
      no: "Lege i Nærheten i Marbella | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Marbella | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Marbella | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Marbella | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Marbella | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Marbella & Puerto Banús. English-speaking private GP visits your hotel room or villa 24/7 in 30–60 min. Travel insurance reports & prescriptions.",
      es: "¿Buscas un médico cerca de ti en Marbella? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Marbella. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Marbella. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Marbella. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Marbella. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Marbella. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Marbella. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Marbella. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Marbella. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Marbella? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Marbella — Hotel & Villa Visits",
      es: "Médico Privado y Urgencias en Marbella — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Marbella — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Marbella — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Marbella — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Marbella — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Marbella — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Marbella — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Marbella — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Marbella — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Marbella — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "fuengirola",
    name: "Fuengirola",
    geo: { lat: 36.5395, lng: -4.6267 },
    localeSlugs: {
      en: "doctor-fuengirola",
      es: "medico-fuengirola",
      de: "arzt-fuengirola",
      fr: "medecin-fuengirola",
      fi: "laakari-fuengirola",
      ar: "tabib-fuengirola",
      no: "lege-fuengirola",
      da: "laege-fuengirola",
      sv: "lakare-fuengirola",
      ru: "vrach-fuengirola",
      nl: "arts-fuengirola",
    },
    description: {
      en: "Fast private doctor visits to hotels, apartments and villas across Fuengirola, Los Boliches, Torreblanca, Carvajal and Miramar/Sohail in 30–60 minutes (€130 day / €140 night & weekends). Need a prescription fast? Receive an official Spanish QR prescription on your phone in 15 minutes (€90).",
      es: "Visitas médicas rápidas a hoteles, apartamentos y villas en Fuengirola, Los Boliches, Torreblanca, Carvajal y Miramar/Sohail en 30–60 minutos (130 € día / 140 € noche y festivos). ¿Necesitas una receta urgente? Recibe tu receta oficial española con QR en el móvil en 15 minutos (90 €).",
      de: "Schnelle Privatarzt-Besuche im Hotel, Apartment oder in der Villa in Fuengirola, Los Boliches, Torreblanca, Carvajal und Miramar in 30–60 Min. (130 € Tag / 140 € Nacht & Wochenende). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Visites médicales rapides à votre hôtel, appartement ou villa à Fuengirola, Los Boliches, Torreblanca, Carvajal et Miramar en 30–60 min (130 € jour / 140 € nuit et week-end). Besoin d'une ordonnance ? Ordonnance espagnole officielle QR sur votre téléphone en 15 min (90 €).",
      fi: "Nopeat yksityislääkärin käynnit hotelleihin ja asuntoihin Fuengirolassa, Los Bolichesissa, Torreblancassa, Carvajalissa ja Miramarissa 30–60 minuutissa (130 € päivä / 140 € yö & viikonloppu). Tarvitsetko vain reseptin? Virallinen espanjalainen QR-resepti puhelimeesi 15 minuutissa (90 €).",
      ar: "زيارات أطباء خصوصيين سريعة للفنادق والشقق في فوينخيرولا، لوس بوليتشيس، توريبلانكا، كارفاخال وميرامار خلال 30-60 دقيقة (130 يورو نهاراً / 140 يورو ليلاً وعطلات نهاية الأسبوع). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "Raske privatlegebesøk til hotell, leilighet og villa i Fuengirola, Los Boliches, Torreblanca, Carvajal og Miramar innen 30–60 min (€130 dag / €140 natt & helg). Trenger du kun resept? Få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "Hurtige privatlægebesøg på hotel, lejlighed og villa i Fuengirola, Los Boliches, Torreblanca, Carvajal og Miramar inden for 30–60 min (€130 dag / €140 nat & weekend). Kun brug for en recept? Få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "Snabba privatläkarbesök till hotell, lägenhet och villa i Fuengirola, Los Boliches, Torreblanca, Carvajal och Miramar inom 30–60 min (€130 dag / €140 natt & helg). Behöver du bara recept? Få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Быстрый выезд частного врача в отели и апартаменты Фуэнхиролы, Лос-Боличес, Торребланки, Карвахаля и Мирамар за 30–60 минут (130 € день / 140 € ночь и выходные). Или получите официальный испанский QR-рецепт онлайн за 15 минут (90 €).",
      nl: "Snelle doktersvisites aan hotels en appartementen in Fuengirola, Los Boliches, Torreblanca, Carvajal en Miramar binnen 30–60 min (€130 dag / €140 nacht & weekend). Alleen een recept nodig? Ontvang binnen 15 min een officieel Spaans QR-recept op uw telefoon (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Fuengirola | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Fuengirola | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Fuengirola | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Fuengirola | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Fuengirola | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Fuengirola | زيارة فندق 24/7",
      no: "Lege i Nærheten i Fuengirola | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Fuengirola | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Fuengirola | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Fuengirola | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Fuengirola | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Fuengirola & Los Boliches. English-speaking private doctors visit your hotel or apartment 24/7 in 30–60 min. Fast response medical care.",
      es: "¿Buscas un médico cerca de ti en Fuengirola? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Fuengirola. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Fuengirola. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Fuengirola. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Fuengirola. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Fuengirola. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Fuengirola. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Fuengirola. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Fuengirola. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Fuengirola? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Fuengirola — Hotel Visits",
      es: "Médico Privado y Urgencias en Fuengirola — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Fuengirola — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Fuengirola — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Fuengirola — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Fuengirola — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Fuengirola — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Fuengirola — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Fuengirola — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Fuengirola — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Fuengirola — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "benalmadena",
    name: "Benalmádena",
    geo: { lat: 36.5981, lng: -4.5131 },
    localeSlugs: {
      en: "doctor-benalmadena",
      es: "medico-benalmadena",
      de: "arzt-benalmadena",
      fr: "medecin-benalmadena",
      fi: "laakari-benalmadena",
      ar: "tabib-benalmadena",
      no: "lege-benalmadena",
      da: "laege-benalmadena",
      sv: "lakare-benalmadena",
      ru: "vrach-benalmadena",
      nl: "arts-benalmadena",
    },
    description: {
      en: "24/7 English-speaking doctor visits directly to your hotel room or holiday apartment in Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada and Benalmádena Pueblo within 30–60 minutes (€130 day / €140 night & weekends). Or get an express 15-minute online consultation with an official Spanish QR prescription valid at any pharmacy in Benalmádena (€90).",
      es: "Visitas médicas 24/7 en inglés y español directamente en tu hotel o apartamento en Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada y Benalmádena Pueblo en 30–60 minutos (130 € día / 140 € noche y festivos). O solicita nuestra consulta online exprés en 15 minutos con receta oficial QR válida en cualquier farmacia de Benalmádena (90 €).",
      de: "24/7 Privatarzt-Besuche direkt in Ihrem Hotelzimmer oder Apartment in Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada und Benalmádena Pueblo in 30–60 Min. (130 € Tag / 140 € Nacht & Wochenende). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Visites médicales 24h/24 directement à votre hôtel ou appartement à Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada et Benalmádena Pueblo en 30–60 min (130 € jour / 140 € nuit et week-end). Ou obtenez en 15 min une ordonnance officielle espagnole QR en ligne (90 €).",
      fi: "24/7 yksityislääkärin käynnit suoraan hotellihuoneeseesi tai asuntoosi Benalmádena Costassa, Puerto Marinassa, Arroyo de la Mielissä, Torrequebradassa ja Benalmádena Pueblossa 30–60 minuutissa (130 € päivä / 140 € yö & viikonloppu). Tai virallinen espanjalainen QR-resepti verkossa 15 minuutissa (90 €).",
      ar: "زيارات أطباء 24/7 مباشرة إلى غرفتك في الفندق أو شقتك في بينالمادينا كوستا، بويرتو مارينا، أرويو دي لا ميل، توريكيبرادا وبينالمادينا بويبلو خلال 30-60 دقيقة (130 يورو نهاراً / 140 يورو ليلاً وعطلات نهاية الأسبوع). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "24/7 privatlege direkte til ditt hotellrom eller leilighet i Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada og Benalmádena Pueblo innen 30–60 min (€130 dag / €140 natt & helg). Eller få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "24/7 privatlæge direkte til dit hotelværelse eller lejlighed i Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada og Benalmádena Pueblo inden for 30–60 min (€130 dag / €140 nat & weekend). Eller få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "24/7 privatläkare direkt till ditt hotellrum eller lägenhet i Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada och Benalmádena Pueblo inom 30–60 min (€130 dag / €140 natt & helg). Eller få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Круглосуточный выезд частного врача в отели и апартаменты в Бенальмадена-Коста, Пуэрто-Марине, Арройо-де-ла-Мьель, Торрекебраде и Бенальмадена-Пуэбло за 30–60 минут (130 € день / 140 € ночь и выходные). Или официальный испанский QR-рецепт за 15 минут онлайн (90 €).",
      nl: "24/7 doktersvisites direct in uw hotelkamer of appartement in Benalmádena Costa, Puerto Marina, Arroyo de la Miel, Torrequebrada en Benalmádena Pueblo binnen 30–60 min (€130 dag / €140 nacht & weekend). Of ontvang binnen 15 min online een officieel Spaans QR-recept (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Benalmádena | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Benalmádena | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Benalmádena | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Benalmádena | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Benalmádena | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Benalmádena | زيارة فندق 24/7",
      no: "Lege i Nærheten i Benalmádena | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Benalmádena | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Benalmádena | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Benalmádena | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Benalmádena | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Benalmádena Costa & Arroyo de la Miel. English-speaking private GP visits your hotel or apartment 24/7 in 30–60 min. Insurance reports.",
      es: "¿Buscas un médico cerca de ti en Benalmádena? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Benalmádena. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Benalmádena. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Benalmádena. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Benalmádena. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Benalmádena. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Benalmádena. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Benalmádena. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Benalmádena. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Benalmádena? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Benalmádena — Hotel Visits",
      es: "Médico Privado y Urgencias en Benalmádena — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Benalmádena — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Benalmádena — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Benalmádena — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Benalmádena — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Benalmádena — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Benalmádena — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Benalmádena — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Benalmádena — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Benalmádena — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "torremolinos",
    name: "Torremolinos",
    geo: { lat: 36.6243, lng: -4.4997 },
    localeSlugs: {
      en: "doctor-torremolinos",
      es: "medico-torremolinos",
      de: "arzt-torremolinos",
      fr: "medecin-torremolinos",
      fi: "laakari-torremolinos",
      ar: "tabib-torremolinos",
      no: "lege-torremolinos",
      da: "laege-torremolinos",
      sv: "lakare-torremolinos",
      ru: "vrach-torremolinos",
      nl: "arts-torremolinos",
    },
    description: {
      en: "24/7 private GP and hotel doctor visits across Torremolinos, La Carihuela, El Bajondillo, Playamar, Los Álamos and Montemar in 30–60 minutes (€130 day / €140 night & weekends). Avoid leaving your hotel room when unwell — or request our €90 express 15-minute phone consultation for an official Spanish QR prescription.",
      es: "Médico privado 24/7 a domicilio y hoteles en Torremolinos, La Carihuela, El Bajondillo, Playamar, Los Álamos y Montemar en 30–60 minutos (130 € día / 140 € noche y festivos). No salgas de tu habitación si te encuentras mal — o pide nuestra consulta telefónica exprés de 90 € en 15 minutos con receta oficial QR.",
      de: "24/7 Privatarzt-Besuche im Hotel oder Apartment in Torremolinos, La Carihuela, El Bajondillo, Playamar, Los Álamos und Montemar in 30–60 Min. (130 € Tag / 140 € Nacht & Wochenende). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Visites médicales 24h/24 à l'hôtel ou appartement à Torremolinos, La Carihuela, El Bajondillo, Playamar, Los Álamos et Montemar en 30–60 min (130 € jour / 140 € nuit et week-end). Ou consultation express en 15 min avec ordonnance officielle QR (90 €).",
      fi: "24/7 yksityislääkärin kotikäynnit ja hotellivierailut Torremolinosissa, La Carihuelassa, El Bajondillossa, Playamarissa ja Los Álamosissa 30–60 minuutissa (130 € päivä / 140 € yö & viikonloppu). Tai virallinen espanjalainen QR-resepti 15 minuutissa (90 €).",
      ar: "زيارات أطباء 24/7 للفنادق والشقق في توريمولينوس، لا كاريويلا، إل باخونديلو، بلايامار ولوس ألاموس خلال 30-60 دقيقة (130 يورو نهاراً / 140 يورو ليلاً وعطلات نهاية الأسبوع). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "24/7 privatlege til hotell og leilighet i Torremolinos, La Carihuela, El Bajondillo, Playamar og Los Álamos innen 30–60 min (€130 dag / €140 natt & helg). Eller få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "24/7 privatlæge til hotel og lejlighed i Torremolinos, La Carihuela, El Bajondillo, Playamar og Los Álamos inden for 30–60 min (€130 dag / €140 nat & weekend). Eller få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "24/7 privatläkare till hotell och lägenhet i Torremolinos, La Carihuela, El Bajondillo, Playamar och Los Álamos inom 30–60 min (€130 dag / €140 natt & helg). Eller få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Круглосуточные визиты врача в отели Торремолиноса, Ла-Кариуэлы, Эль-Бахондильо, Плайямар и Лос-Аламос за 30–60 минут (130 € день / 140 € ночь и выходные). Или официальный испанский QR-рецепт за 15 минут онлайн (90 €).",
      nl: "24/7 doktersvisites aan hotels in Torremolinos, La Carihuela, El Bajondillo, Playamar en Los Álamos binnen 30–60 min (€130 dag / €140 nacht & weekend). Of ontvang binnen 15 min een officieel Spaans QR-recept op uw telefoon (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Torremolinos | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Torremolinos | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Torremolinos | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Torremolinos | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Torremolinos | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Torremolinos | زيارة فندق 24/7",
      no: "Lege i Nærheten i Torremolinos | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Torremolinos | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Torremolinos | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Torremolinos | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Torremolinos | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Torremolinos & La Carihuela. English-speaking private doctors visit your hotel or apartment 24/7 in 30–60 min. Fast professional care.",
      es: "¿Buscas un médico cerca de ti en Torremolinos? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Torremolinos. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Torremolinos. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Torremolinos. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Torremolinos. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Torremolinos. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Torremolinos. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Torremolinos. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Torremolinos. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Torremolinos? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Torremolinos — Hotel Visits",
      es: "Médico Privado y Urgencias en Torremolinos — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Torremolinos — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Torremolinos — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Torremolinos — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Torremolinos — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Torremolinos — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Torremolinos — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Torremolinos — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Torremolinos — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Torremolinos — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "nerja",
    name: "Nerja",
    geo: { lat: 36.7471, lng: -3.8740 },
    localeSlugs: {
      en: "doctor-nerja",
      es: "medico-nerja",
      de: "arzt-nerja",
      fr: "medecin-nerja",
      fi: "laakari-nerja",
      ar: "tabib-nerja",
      no: "lege-nerja",
      da: "laege-nerja",
      sv: "lakare-nerja",
      ru: "vrach-nerja",
      nl: "arts-nerja",
    },
    description: {
      en: "24/7 Online Doctor Consultation & Official Spanish Electronic Prescription (QR Code) for tourists in Nerja, Burriana Beach, Capistrano, Frigiliana and Torrox. Fast WhatsApp intake with an English-speaking doctor in Spain — valid at all pharmacies in Nerja.",
      es: "Consulta Médica Online 24/7 y Receta Electrónica Oficial con código QR para turistas y residentes en Nerja, Playa Burriana, Frigiliana y Torrox. Atención rápida por WhatsApp con médico colegiado — válida en todas las farmacias de Nerja.",
      de: "24/7 Online-Arztkonsultation & Offizielles Spanisches QR-Rezept für Touristen in Nerja, Burriana, Frigiliana und Torrox. Schnelle Hilfe per WhatsApp — gültig in allen Apotheken in Nerja.",
      fr: "Téléconsultation Médicale 24h/24 & Ordonnance Électronique Officielle (Code QR) pour les touristes à Nerja, Frigiliana et Torrox. Prise en charge rapide via WhatsApp — valable dans toutes les pharmacies de Nerja.",
      fi: "24/7 Etälääkärikonsultaatio & Virallinen Espanjalainen QR-Resepti turisteille Nerjassa, Frigilianassa ja Torroxissa. Nopea yhteys WhatsAppilla — voimassa kaikissa Nerjan apteekeissa.",
      ar: "استشارة طبية أونلاين 24/7 ووصفة طبية إسبانية رسمية برمز QR للسياح في نيرخا وتوروكس. تواصل سريع عبر واتساب — صالحة في جميع صيدليات نيرخا.",
      no: "24/7 Online Legekonsultasjon & Offisiell Spansk QR-Resept for turister i Nerja, Frigiliana og Torrox. Rask hjelp via WhatsApp — gyldig på alle apotek i Nerja.",
      da: "24/7 Online Lægekonsultation & Officiel Spansk QR-Recept for turister i Nerja, Frigiliana og Torrox. Hurtig hjælp via WhatsApp — gyldig på alle apoteker i Nerja.",
      sv: "24/7 Onlineläkare & Officiellt Spanskt QR-Recept för turister i Nerja, Burriana, Frigiliana och Torrox. Snabb kontakt via WhatsApp — giltigt på alla apotek i Nerja.",
      ru: "Круглосуточная онлайн-консультация врача и официальный испанский электронный рецепт (QR-код) для туристов в Нерхе и Торроксе. Быстрая связь в WhatsApp — рецепт действует во всех аптеках Нерхи.",
      nl: "24/7 Online Doktersconsult & Officieel Spaans QR-Recept voor toeristen in Nerja, Frigiliana en Torrox. Snelle hulp via WhatsApp — geldig bij alle apotheken in Nerja.",
    },
    metaTitle: {
      en: "Online Doctor & Official QR Prescription in Nerja 24/7",
      es: "Médico Online y Receta Oficial QR en Nerja 24/7",
      de: "Online-Arzt & Offizielles QR-Rezept in Nerja 24/7",
      fr: "Médecin en Ligne & Ordonnance Officielle QR à Nerja 24/7",
      fi: "Etälääkäri & Virallinen QR-Resepti Nerja 24/7",
      ar: "طبيب أونلاين ووصفة طبية رسمية QR في Nerja 24/7",
      no: "Online Lege & Offisiell QR-Resept i Nerja 24/7",
      da: "Online Læge & Officiel QR-Recept i Nerja 24/7",
      sv: "Onlineläkare & Officiellt QR-Recept i Nerja 24/7",
      ru: "Онлайн-Врач и Официальный QR-Рецепт в Nerja 24/7",
      nl: "Online Arts & Officieel QR-Recept in Nerja 24/7",
    },
    metaDesc: {
      en: "Need a doctor or prescription in Nerja? 24/7 online consultation with an English-speaking doctor in Spain. Receive an Official Spanish QR Prescription valid at all Nerja pharmacies.",
      es: "¿Necesitas médico o receta en Nerja? Consulta médica online 24/7 con médico colegiado. Recibe tu Receta Electrónica Oficial con QR válida en todas las farmacias de Nerja.",
      de: "Brauchen Sie einen Arzt oder ein Rezept in Nerja? 24/7 Online-Konsultation mit einem Arzt in Spanien. Offizielles spanisches QR-Rezept für alle Apotheken in Nerja.",
      fr: "Besoin d'un médecin ou d'une ordonnance à Nerja ? Téléconsultation 24h/24 avec un médecin en Espagne. Ordonnance officielle QR valable dans toutes les pharmacies de Nerja.",
      fi: "Tarvitsetko lääkäriä tai reseptiä Nerjassa? 24/7 etälääkäri ja virallinen espanjalainen QR-resepti suoraan puhelimeesi kaikkiin Nerjan apteekkeihin.",
      ar: "تحتاج طبيب أو وصفة طبية في Nerja؟ استشارة طبية أونلاين 24/7 ووصفة طبية إسبانية رسمية برمز QR صالحة في جميع صيدليات نيرخا.",
      no: "Trenger du lege eller resept i Nerja? 24/7 online konsultasjon og offisiell spansk QR-resept på mobilen, gyldig på alle apotek i Nerja.",
      da: "Brug for læge eller recept i Nerja? 24/7 online konsultation og officiel spansk QR-recept på mobilen, gyldig på alle apoteker i Nerja.",
      sv: "Behöver du läkare eller recept i Nerja? 24/7 onlineläkare och officiellt spanskt QR-recept direkt i mobilen, giltigt på alla apotek i Nerja.",
      ru: "Нужен врач или рецепт в Нерхе? Онлайн-консультация 24/7 и официальный испанский QR-рецепт на телефон для любой аптеки в Нерхе.",
      nl: "Arts of recept nodig in Nerja? 24/7 online consult met een arts in Spanje. Ontvang een officieel Spaans QR-recept geldig bij alle apotheken in Nerja.",
    },
    h1: {
      en: "Online Doctor & Official Spanish QR Prescription in Nerja — 24/7",
      es: "Médico Online y Receta Electrónica Oficial QR en Nerja — 24/7",
      de: "Online-Arzt & Offizielles Spanisches QR-Rezept in Nerja — 24/7",
      fr: "Médecin en Ligne & Ordonnance Officielle QR à Nerja — 24/7",
      fi: "Etälääkäri & Virallinen Espanjalainen QR-Resepti Nerja — 24/7",
      ar: "طبيب أونلاين ووصفة طبية رسمية QR في Nerja — 24/7",
      no: "Online Lege & Offisiell Spansk QR-Resept i Nerja — 24/7",
      da: "Online Læge & Officiel Spansk QR-Recept i Nerja — 24/7",
      sv: "Onlineläkare & Officiellt Spanskt QR-Recept i Nerja — 24/7",
      ru: "Онлайн-Врач и Официальный Испанский QR-Рецепт в Nerja — 24/7",
      nl: "Online Arts & Officieel Spaans QR-Recept in Nerja — 24/7",
    },
  },
  {
    slug: "estepona",
    name: "Estepona",
    geo: { lat: 36.4278, lng: -5.1468 },
    localeSlugs: {
      en: "doctor-estepona",
      es: "medico-estepona",
      de: "arzt-estepona",
      fr: "medecin-estepona",
      fi: "laakari-estepona",
      ar: "tabib-estepona",
      no: "lege-estepona",
      da: "laege-estepona",
      sv: "lakare-estepona",
      ru: "vrach-estepona",
      nl: "arts-estepona",
    },
    description: {
      en: "English-speaking private doctors dispatched 24/7 in 30–60 minutes to hotels, resorts and villas in Estepona Town, Estepona Port, New Golden Mile, Cancelada, Selwo, Guadalmina and Valle Romano (€140 flat rate). Also available: 15-minute online doctor consultation + official Spanish QR prescription (€90).",
      es: "Médicos privados 24/7 en 30–60 minutos en hoteles, resorts y villas de Estepona Centro, Puerto de Estepona, Nueva Milla de Oro, Cancelada, Selwo, Guadalmina y Valle Romano (tarifa única 140 €). También disponible: consulta médica online en 15 minutos + receta oficial QR (90 €).",
      de: "Privatarzt-Besuche 24/7 in 30–60 Min. im Hotel, Resort oder in der Villa in Estepona Zentrum, Hafen Estepona, New Golden Mile, Cancelada, Selwo und Guadalmina (140 € Festpreis). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Médecins privés 24h/24 en 30–60 min dans les hôtels, resorts et villas d'Estepona Centre, Port d'Estepona, New Golden Mile, Cancelada, Selwo et Guadalmina (tarif unique 140 €). Aussi disponible : consultation en ligne en 15 min + ordonnance officielle QR (90 €).",
      fi: "Yksityisen lääkärin käynnit 24/7 30–60 minuutissa hotelleihin ja huviloihin Esteponan keskustassa, satamassa, New Golden Milella, Canceladassa ja Selwossa (kiinteä hinta 140 €). Tai virallinen espanjalainen QR-resepti puhelimeesi 15 minuutissa (90 €).",
      ar: "زيارات أطباء خصوصيين 24/7 خلال 30-60 دقيقة للفنادق والفيلات في وسط إيستيبونا، ميناء إيستيبونا، الميل الذهبي الجديد، كانسيلادا وسيلفو (سعر ثابت 140 يورو). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "Privatlege 24/7 innen 30–60 min til hotell, resort og villa i Estepona sentrum, Estepona havn, New Golden Mile, Cancelada, Selwo og Guadalmina (fastpris €140). Eller få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "Privatlæge 24/7 inden for 30–60 min på hotel, resort og villa i Estepona centrum, Estepona havn, New Golden Mile, Cancelada, Selwo og Guadalmina (fast pris €140). Eller få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "Privatläkare 24/7 inom 30–60 min till hotell, resort och villa i Estepona centrum, Esteponas hamn, New Golden Mile, Cancelada, Selwo och Guadalmina (fast pris €140). Eller få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Круглосуточный выезд частного врача в отели и виллы Эстепоны, порта Эстепоны, Новой Золотой Мили, Канселады и Сельво за 30–60 минут (фиксированный тариф 140 €). Или официальный испанский QR-рецепт за 15 минут онлайн (90 €).",
      nl: "24/7 doktersvisites binnen 30–60 min aan hotels, resorts en villa's in Estepona Centrum, Haven van Estepona, New Golden Mile, Cancelada en Selwo (vast tarief €140). Of ontvang binnen 15 min een officieel Spaans QR-recept op uw telefoon (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Estepona | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Estepona | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Estepona | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Estepona | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Estepona | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Estepona | زيارة فندق 24/7",
      no: "Lege i Nærheten i Estepona | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Estepona | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Estepona | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Estepona | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Estepona | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Estepona & New Golden Mile. English-speaking private doctors visit your hotel room or villa 24/7 in 30–60 min. Fast response.",
      es: "¿Buscas un médico cerca de ti en Estepona? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Estepona. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Estepona. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Estepona. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Estepona. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Estepona. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Estepona. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Estepona. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Estepona. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Estepona? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Estepona — Hotel & Villa Visits",
      es: "Médico Privado y Urgencias en Estepona — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Estepona — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Estepona — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Estepona — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Estepona — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Estepona — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Estepona — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Estepona — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Estepona — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Estepona — Hotel- en huisbezoeken 24/7",
    },
  },
  {
    slug: "mijas",
    name: "Mijas",
    geo: { lat: 36.5948, lng: -4.6366 },
    localeSlugs: {
      en: "doctor-mijas",
      es: "medico-mijas",
      de: "arzt-mijas",
      fr: "medecin-mijas",
      fi: "laakari-mijas",
      ar: "tabib-mijas",
      no: "lege-mijas",
      da: "laege-mijas",
      sv: "lakare-mijas",
      ru: "vrach-mijas",
      nl: "arts-mijas",
    },
    description: {
      en: "24/7 private doctor visits to hotels, golf resorts and villas in Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol, Miraflores and Mijas Pueblo in 30–60 minutes (€130 day / €140 night & weekends). Need medication fast? Get an official Spanish QR prescription online in 15 minutes (€90).",
      es: "Visitas médicas privadas 24/7 a hoteles, resorts de golf y villas en Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol, Miraflores y Mijas Pueblo en 30–60 minutos (130 € día / 140 € noche y festivos). ¿Necesitas medicación urgente? Recibe tu receta oficial QR en 15 minutos (90 €).",
      de: "24/7 Privatarzt-Besuche im Hotel, Golfresort oder in der Villa in Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol und Mijas Pueblo in 30–60 Min. (130 € Tag / 140 € Nacht & Wochenende). Oder in 15 Min. online ein offizielles spanisches QR-Rezept erhalten (90 €).",
      fr: "Visites médicales privées 24h/24 à votre hôtel ou villa à Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol et Mijas Pueblo en 30–60 min (130 € jour / 140 € nuit et week-end). Ou obtenez en 15 min une ordonnance officielle espagnole QR en ligne (90 €).",
      fi: "24/7 yksityislääkärin käynnit hotelleihin ja huviloihin Mijas Costassa, La Cala de Mijasissa, Calahondassa, Riviera del Solissa ja Mijas Pueblossa 30–60 minuutissa (130 € päivä / 140 € yö & viikonloppu). Tai virallinen espanjalainen QR-resepti 15 minuutissa (90 €).",
      ar: "زيارات أطباء خصوصيين 24/7 للفنادق والفيلات في ميخاس كوستا، لا كالا دي ميخاس، كالاهوندا، ريفييرا ديل سول وميخاس بويبلو خلال 30-60 دقيقة (130 يورو نهاراً / 140 يورو ليلاً وعطلات نهاية الأسبوع). أو احصل على وصفة طبية إسبانية رسمية برمز QR خلال 15 دقيقة (90 يورو).",
      no: "24/7 privatlege til hotell, golfresort og villa i Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol og Mijas Pueblo innen 30–60 min (€130 dag / €140 natt & helg). Eller få offisiell spansk QR-resept på mobilen på 15 minutter (€90).",
      da: "24/7 privatlæge til hotel, golfresort og villa i Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol og Mijas Pueblo inden for 30–60 min (€130 dag / €140 nat & weekend). Eller få officiel spansk QR-recept på 15 minutter (€90).",
      sv: "24/7 privatläkare till hotell, golfresort och villa i Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol och Mijas Pueblo inom 30–60 min (€130 dag / €140 natt & helg). Eller få officiellt spanskt QR-recept på 15 minuter (€90).",
      ru: "Круглосуточный выезд врача в отели и виллы в Михас-Коста, Ла-Кала-де-Михас, Калахонду, Ривьера-дель-Соль и Михас-Пуэбло за 30–60 минут (130 € день / 140 € ночь и выходные). Или официальный испанский QR-рецепт за 15 минут онлайн (90 €).",
      nl: "24/7 doktersvisites aan hotels en villa's in Mijas Costa, La Cala de Mijas, Calahonda, Riviera del Sol en Mijas Pueblo binnen 30–60 min (€130 dag / €140 nacht & weekend). Of ontvang binnen 15 min een officieel Spaans QR-recept op uw telefoon (€90).",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Mijas | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Mijas | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Mijas | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Mijas | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Mijas | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Mijas | زيارة فندق 24/7",
      no: "Lege i Nærheten i Mijas | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Mijas | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Mijas | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Mijas | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Mijas | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Mijas Costa, La Cala & Calahonda. English-speaking private doctors visit your hotel, apartment or villa 24/7 in 30–60 min.",
      es: "¿Buscas un médico cerca de ti en Mijas? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Mijas. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Mijas. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Mijas. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Mijas. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Mijas. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Mijas. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Mijas. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Mijas. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Mijas? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Mijas — Hotel & Home Visits",
      es: "Médico Privado y Urgencias en Mijas — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Mijas — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Mijas — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Mijas — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Mijas — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Mijas — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Mijas — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Mijas — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Mijas — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Mijas — Hotel- en huisbezoeken 24/7",
    },
  },
];

// ────────────────────────────────────────────────────────────
// BLOG POSTS
// ────────────────────────────────────────────────────────────
import { BLOG_POSTS, type BlogPost } from "./blogPosts";
export { BLOG_POSTS, type BlogPost };

// ────────────────────────────────────────────────────────────
// ROUTE MAP HELPERS
// ────────────────────────────────────────────────────────────
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(
    (c) =>
      c.slug === slug ||
      Object.values(c.localeSlugs).includes(slug)
  );
}

export function getLocaleForCitySlug(slug: string): Locale {
  for (const city of CITIES) {
    for (const [locale, localeSlug] of Object.entries(city.localeSlugs)) {
      if (localeSlug === slug) return locale as Locale;
    }
  }
  return DEFAULT_LOCALE;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(
    (p) =>
      p.slug === slug ||
      Object.values(p.localeSlugs).includes(slug)
  );
}

export function getLocaleForBlogSlug(slug: string): Locale {
  for (const post of BLOG_POSTS) {
    for (const [locale, localeSlug] of Object.entries(post.localeSlugs)) {
      if (localeSlug === slug) return locale as Locale;
    }
  }
  return DEFAULT_LOCALE;
}

// Derive locale from URL path prefix
export function getLocaleFromPath(segments: string[]): Locale {
  const first = segments[0] as Locale;
  if (LOCALES.includes(first) && first !== DEFAULT_LOCALE) return first;
  return DEFAULT_LOCALE;
}

// Strip locale prefix to get the slug
export function getSlugFromPath(segments: string[]): string {
  const first = segments[0] as Locale;
  if (LOCALES.includes(first) && first !== DEFAULT_LOCALE) {
    return segments.slice(1).join("/");
  }
  return segments.join("/");
}
