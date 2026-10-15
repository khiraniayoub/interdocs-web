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
          desc: "The doctor treats you, issues prescriptions and delivers an official clinical report with invoice for your travel insurance reimbursement.",
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
          title: "Prescriptions & Medication",
          desc: "Immediate medical prescription for antibiotics, pain relief, ear drops and urgent medication valid at all 24-hour pharmacies.",
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
          q: "Can the doctor provide prescriptions on the spot?",
          a: "Yes. Our doctors carry official medical prescription pads for antibiotics, pain relief, antiemetics and treatments that you can pick up at any local 24-hour pharmacy.",
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
        "Certificados Médicos y Fit to Fly",
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
        { icon: "prescription", title: "Recetas Médicas Oficiales", desc: "Prescripción de antibióticos, analgésicos y tratamientos de urgencia válidos en farmacias de guardia 24 horas." },
        { icon: "certificate", title: "Certificados Médicos y Fit to Fly", desc: "Emisión de certificados de aptitud para volar (Fit to Fly), justificantes médicos para cancelación de viaje e informes para aseguradoras." },
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
        { q: "¿Puedo usar mi seguro de viaje internacional?", a: "Sí. Entregamos un informe médico completo con diagnóstico codificado (CIE-10 / ICD-10) y factura desglosada válida para reembolso directo con Bupa, Allianz, AXA, Sanitas, seguros nórdicos y británicos." },
        { q: "¿Atienden a bebés y niños?", a: "Sí. Disponemos de facultativos con amplia experiencia en atención pediátrica urgente para tratar fiebres, otitis de piscina, heridas y vómitos en niños." },
        { q: "¿El médico puede recetar medicamentos?", a: "Sí. Los médicos llevan talonario oficial de recetas para prescribir antibióticos, calmantes o el tratamiento que requieras en cualquier farmacia 24 horas." },
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
        { icon: "prescription", title: "Rezeptausstellung", desc: "Notwendige Medikamente, verschrieben von einem zugelassenen Arzt." },
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
        { q: "Wie schnell kann ein Arzt kommen?", a: "Wir streben an, dass ein Arzt innerhalb von 45–60 Minuten bei Ihnen ist." },
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
        { icon: "prescription", title: "Assistance Prescription", desc: "Obtenez les médicaments nécessaires prescrits par un médecin agréé." },
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
        { q: "Combien de temps pour qu'un médecin arrive ?", a: "Nous visons à avoir un médecin chez vous dans les 45 à 60 minutes." },
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
          title: "Reseptipalvelut",
          desc: "Hanki tarvittavat lääkkeet laillistetun lääkärin määräämänä.",
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
          a: "Saapumisajat vaihtelevat sijainnin mukaan, mutta tavoitteenamme on saapua 45–60 minuutin kuluessa yhteydenotosta.",
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
      headline: "طبيب في فندقك أو شقتك في مالقة",
      subheadline: "أطباء خصوصيون متاحون على مدار الساعة طوال أيام الأسبوع للسياح في جميع أنحاء كوستا ديل سول. خدمة سريعة ومهنية ومتحدثة باللغة الإنجليزية.",
      whatsapp: "واتساب الآن",
      call: "اتصل بنا",
      trusts: [
        "أطباء يتحدثون الإنجليزية",
        "زيارات الفنادق والمنازل",
        "استجابة سريعة",
        "إيصالات طبية للتأمين",
        "البالغون والأطفال",
      ],
    },
    howItWorks: {
      title: "كيف تعمل الخدمة",
      subtitle: "من التواصل الأول إلى الرعاية الطبية في دقائق معدودة.",
      steps: [
        {
          step: "1",
          title: "اتصل بنا",
          desc: "أرسل رسالة واتساب أو اتصل بنا مباشرة. متاحون 24 ساعة في اليوم، 7 أيام في الأسبوع.",
        },
        {
          step: "2",
          title: "أخبرنا بموقعك",
          desc: "أخبرنا بالفندق أو الشقة أو العنوان الذي تقيم فيه خلال إجازتك.",
        },
        {
          step: "3",
          title: "إرسال الطبيب",
          desc: "نقوم على الفور بتكليف أحد أطبائنا الشركاء المرخصين لزيارتك.",
        },
        {
          step: "4",
          title: "تلقي الرعاية الطبية",
          desc: "يصل الطبيب، ويفحصك ويقدم تقريرًا طبيًا كاملاً وإيصالاً للتأمين.",
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
          title: "المساعدة في الوصفات الطبية",
          desc: "احصل على الأدوية اللازمة الموصوفة من قبل طبيب مرخص.",
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
          a: "تختلف أوقات الاستجابة حسب الموقع، ولكننا نهدف إلى وصول الطبيب إليك في غضون 45 إلى 60 دقيقة من الاتصال الأول.",
        },
        {
          q: "هل تتحدثون الإنجليزية؟",
          a: "نعم. يتحدث جميع الأطباء الشركاء الإنجليزية بطلاقة. لدينا أيضًا أطباء يتحدثون الألمانية والفرنسية ولغات أخرى.",
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
          title: "Resepthjelp",
          desc: "Få nødvendige medisiner foreskrevet av en lisensiert lege.",
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
          a: "Responstiden varierer etter sted, men vi har som mål å ha en lege hos deg innen 45–60 minutter fra første kontakt.",
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
          title: "Hjælp til Recepter",
          desc: "Få den nødvendige medicin ordineret af en autoriseret læge.",
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
          a: "Svartiden varierer efter placering, men vi tilstræber at have en læge hos dig inden for 45-60 minutter efter din første kontakt.",
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
          title: "Hjälp med Recept",
          desc: "Få nödvändig medicin utskriven av en legitimerad läkare.",
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
          a: "Svarstiden varierar beroende på plats, men vi strävar efter att ha en läkare hos dig inom 45-60 minuter efter din första kontakt.",
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
          title: "Выписка рецептов",
          desc: "Получение официальных рецептов на необходимые медикаменты.",
        },
        {
          icon: "certificate",
          title: "Медицинские справки",
          desc: "Официальные отчеты и счета для возмещения расходов по страховке.",
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
          a: "Обычно врач прибывает в течение 45–60 минут с момента первого обращения.",
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
          title: "Receptservice",
          desc: "Verkrijg noodzakelijke medicatie voorgeschreven door een bevoegd arts.",
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
          a: "De responstijd hangt af van uw locatie, maar gemiddeld is de arts binnen 45–60 minuten ter plaatse.",
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
      en: "Doctor home visits and hotel visits throughout Málaga city and its surroundings. Available 24/7 for tourists and residents alike.",
      es: "Visitas médicas a domicilio y a hoteles en toda la ciudad de Málaga. Disponible 24/7.",
      de: "Ärztliche Hausbesuche und Hotelbesuche in der Stadt Málaga und Umgebung. Rund um die Uhr verfügbar.",
      fr: "Visites médicales à domicile et à l'hôtel dans toute la ville de Málaga. Disponible 24h/24.",
      fi: "Lääkärin kotikäynnit ja hotellivierailut Málagassa ja sen ympäristössä. Saatavilla 24/7 turisteille ja asukkaille.",
      ar: "زيارات منزلية وفندقية للأطباء في جميع أنحاء مدينة مالقة وضواحيها. متاح على مدار الساعة طوال أيام الأسبوع للسياح والمقيمين.",
      no: "Legehjemmebesøk og hotellbesøk i hele Málaga by og omegn. Tilgjengelig 24/7 for både turister og fastboende.",
      da: "Lægehjemmebesøg og hotelbesøg i hele Málaga by og omegn. Tilgængelig 24/7 for både turister og indbyggere.",
      sv: "Läkarbesök i hemmet och på hotell i hela Málaga stad och dess omgivningar. Tillgänglig 24/7 för både turister och boende.",
      ru: "Вызов врача на дом и в отели по всей Малаге и окрестностям. Круглосуточно 24/7 для туристов и жителей.",
      nl: "Doktersbezoeken aan huis en hotel door heel Málaga en omgeving. 24/7 beschikbaar voor toeristen en bewoners.",
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
      en: "Private doctor visits to your hotel or villa in Marbella, Puerto Banús and surroundings. Discreet, professional care 24/7.",
      es: "Visitas médicas privadas a tu hotel o villa en Marbella y Puerto Banús. Atención discreta y profesional 24/7.",
      de: "Private Arztbesuche in Ihrem Hotel oder Ihrer Villa in Marbella und Puerto Banús. Diskrete, professionelle Versorgung rund um die Uhr.",
      fr: "Visites de médecins privés dans votre hôtel ou villa à Marbella et Puerto Banús. Soins discrets et professionnels 24h/24.",
      fi: "Yksityisen lääkärin käynnit hotellissasi tai villassasi Marbellassa ja Puerto Banúsissa. Hienotunteista ja ammattitaitoista hoitoa 24/7.",
      ar: "زيارات أطباء خصوصيين إلى فندقك أو فيلتك في ماربيا وبورتو بانوس وضواحيها. رعاية سرية ومهنية على مدار الساعة طوال أيام الأسبوع.",
      no: "Private legebesøk til ditt hotell eller villa i Marbella, Puerto Banús og omegn. Diskret, profesjonell behandling 24/7.",
      da: "Private lægebesøg på dit hotel eller din villa i Marbella, Puerto Banús og omegn. Diskret, professionel dækning 24/7.",
      sv: "Privata läkarbesök till ditt hotell eller din villa i Marbella, Puerto Banús och dess omgivningar. Diskret, professionell vård 24/7.",
      ru: "Премиальное медицинское обслуживание на дому и в отелях Марбельи, Пуэрто-Бануса и Сан-Педро. Доступно 24/7.",
      nl: "Hoogwaardige medische zorg aan huis en in hotels in Marbella, Puerto Banús en San Pedro. 24/7 beschikbaar.",
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
      en: "Doctor visits in Fuengirola, Los Boliches and surrounding areas. Professional private medical care for tourists staying in Fuengirola.",
      es: "Visitas médicas en Fuengirola y Los Boliches. Atención médica privada para turistas en Fuengirola.",
      de: "Arztbesuche in Fuengirola und Los Boliches. Private medizinische Versorgung für Touristen in Fuengirola.",
      fr: "Visites médicales à Fuengirola et Los Boliches. Soins médicaux privés pour les touristes à Fuengirola.",
      fi: "Lääkärin käynnit Fuengirolassa, Los Bolichesissa ja lähialueilla. Ammattimaista yksityistä sairaanhoitoa turisteille Fuengirolassa.",
      ar: "زيارات الأطباء في فوينخيرولا ولوس بوليتشيس والمناطق المجاورة. رعاية طبية خاصة ومهنية للسياح في فوينخيرولا.",
      no: "Legebesøk i Fuengirola, Los Boliches og områdene rundt. Profesjonell privat medisinsk behandling for turister i Fuengirola.",
      da: "Lægebesøg i Fuengirola, Los Boliches og de omkringliggende områder. Professionel privat lægehjælp til turister i Fuengirola.",
      sv: "Läkarbesök i Fuengirola, Los Boliches och dess omgivningar. Professionell privat läkarvård för turister i Fuengirola.",
      ru: "Вызов врача в отели и апартаменты Фуэнхиролы и Лос-Боличес 24/7. Быстрая помощь для туристов.",
      nl: "Doktersvisites aan hotels en appartementen in Fuengirola en Los Boliches. 24/7 beschikbaar.",
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
      en: "Private medical care in Benalmádena, Arroyo de la Miel, and Benalmádena Costa. Available 24/7 for tourists.",
      es: "Atención médica privada en Benalmádena, Arroyo de la Miel y Benalmádena Costa. Disponible 24/7.",
      de: "Private medizinische Versorgung in Benalmádena, Arroyo de la Miel und Benalmádena Costa.",
      fr: "Soins médicaux privés à Benalmádena, Arroyo de la Miel et Benalmádena Costa.",
      fi: "Yksityistä sairaanhoitoa Benalmádenassa, Arroyo de la Mielissä ja Benalmádena Costassa. Saatavilla 24/7 turisteille.",
      ar: "رعاية طبية خاصة في بينالمادينا، وأرويو دي لا ميل، وبينالمادينا كوستا. متاح 24/7 للسياح.",
      no: "Privat medisinsk behandling i Benalmádena, Arroyo de la Miel og Benalmádena Costa. Tilgjengelig 24/7 for turister.",
      da: "Privat lægehjælp i Benalmádena, Arroyo de la Miel og Benalmádena Costa. Tilgængelig 24/7 for turister.",
      sv: "Privat läkarvård i Benalmádena, Arroyo de la Miel och Benalmádena Costa. Tillgänglig 24/7 för turister.",
      ru: "Врач в Бенальмадене, Бенальмадена-Коста и Арройо-де-ла-Мьель. Выезд в отели 24 часа.",
      nl: "Medische zorg in Benalmádena, Benalmádena Costa en Arroyo de la Miel. 24/7 hotelbezoeken.",
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
      en: "Doctor home visits in Torremolinos and El Bajondillo. Professional private medical care for tourists in Torremolinos.",
      es: "Visitas médicas a domicilio en Torremolinos y El Bajondillo. Atención médica privada para turistas.",
      de: "Ärztliche Hausbesuche in Torremolinos und El Bajondillo. Private Versorgung für Touristen.",
      fr: "Visites médicales à domicile à Torremolinos et El Bajondillo. Soins privés pour touristes.",
      fi: "Lääkärin kotikäynnit Torremolinosissa ja El Bajondillossa. Ammattimaista yksityistä sairaanhoitoa turisteille Torremolinosissa.",
      ar: "زيارات منزلية من قبل الأطباء في توريمولينوس وإل باخونديلو. رعاية طبية خاصة ومهنية للسياح في توريمولينوس.",
      no: "Legehjemmebesøk i Torremolinos og El Bajondillo. Profesjonell privat medisinsk behandling for turister i Torremolinos.",
      da: "Lægehjemmebesøg i Torremolinos og El Bajondillo. Professionel privat lægehjælp til turister i Torremolinos.",
      sv: "Läkarhembesök i Torremolinos och El Bajondillo. Professionell privat läkarvård för turister i Torremolinos.",
      ru: "Круглосуточные визиты врача в отели Торремолиноса, Ла-Кариуэлы и Плайямар. Быстрая помощь туристам.",
      nl: "24/7 doktersvisites aan hotels in Torremolinos, La Carihuela en Playamar. Snelle medische hulp.",
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
      en: "Doctor home and hotel visits in Nerja and surrounding areas. Private medical care for tourists on the eastern Costa del Sol.",
      es: "Visitas médicas a domicilio y hoteles en Nerja y alrededores. Atención médica privada para turistas.",
      de: "Ärztliche Haus- und Hotelbesuche in Nerja und Umgebung. Private Versorgung für Touristen.",
      fr: "Visites médicales à domicile et à l'hôtel à Nerja et ses environs. Soins privés pour touristes.",
      fi: "Lääkärin koti- ja hotellikäynnit Nerjassa ja lähialueilla. Yksityistä sairaanhoitoa turisteille itäisellä Aurinkorannikolla.",
      ar: "زيارات منزلية وفندقية من قبل الأطباء في نيرخا والمناطق المحيطة بها. رعاية طبية خاصة للسياح في شرق كوستا ديل سول.",
      no: "Legehjemmebesøk og hotellbesøk i Nerja og omegn. Privat medisinsk behandling for turister på østlige Costa del Sol.",
      da: "Lægehjemmebesøg og hotelbesøg i Nerja og de omkringliggende områder. Privat lægehjælp til turister på det østlige Costa del Sol.",
      sv: "Läkarbesök i hemmet och på hotell i Nerja och dess omgivningar. Privat läkarvård för turister på östra Costa del Sol.",
      ru: "Медицинская помощь в Нерхе и Торрокс. Выезд врача в отели, виллы и апартаменты 24/7.",
      nl: "Medische zorg in Nerja en Torrox. Doktersvisites aan hotels, villa's en appartementen 24/7.",
    },
    metaTitle: {
      en: "Doctor & Urgent Care Near You in Nerja | Hotel Visits 24/7",
      es: "Médico y Urgencias Cerca de Ti en Nerja | Visitas a Hotel 24/7",
      de: "Arzt & Notfalldienst in Ihrer Nähe in Nerja | Hotelbesuche 24/7",
      fr: "Médecin & Urgences Près de Vous à Nerja | Visite Hôtel 24/7",
      fi: "Lääkäri Lähelläsi Nerja | Yksityislääkäri Hotellivierailu 24/7",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Nerja | زيارة فندق 24/7",
      no: "Lege i Nærheten i Nerja | Privat Legebesøk Hotell 24/7",
      da: "Læge Nær Dig i Nerja | Privat Lægebesøg Hotel 24/7",
      sv: "Läkare Nära Dig i Nerja | Privat Läkarbesök Hotell 24/7",
      ru: "Врач рядом с вами в Nerja | Вызов доктора в отель 24/7",
      nl: "Arts & Spoedzorg in de Buurt in Nerja | Hotelarts 24/7",
    },
    metaDesc: {
      en: "Urgent care near you in Nerja. English-speaking private doctors visit your hotel, holiday apartment or villa 24/7 in 30–60 min. Fast medical care & reports.",
      es: "¿Buscas un médico cerca de ti en Nerja? Médicos privados visitan tu hotel o apartamento 24/7 en 30–60 min. Informes médicos para seguros.",
      de: "Arzt in Ihrer Nähe in Nerja. Deutsch- und englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment 24/7 in 30–60 Min. Versicherungsberichte.",
      fr: "Médecin près de chez vous à Nerja. Médecins privés visitant votre chambre d'hôtel ou appartement 24h/24 en 30–60 min. Factures assurance.",
      fi: "Lääkäri lähelläsi Nerja. Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7 30–60 minuutissa. Vakuutuskuitit.",
      ar: "طبيب ورعاية عاجلة بالقرب منك في Nerja. أطباء خصوصيون يزورون فندقك أو شقتك على مدار الساعة خلال 30-60 دقيقة. تقارير للتأمين.",
      no: "Lege i nærheten i Nerja. Engelsktalande privatleger besøker ditt hotell eller leilighet 24/7 innen 30–60 min. Rapporter for reiseforsikring.",
      da: "Læge nær dig i Nerja. Engelsktalande privatlæger besøger dit hotel eller feriebolig 24/7 inden for 30–60 min. Forsikringsrapporter.",
      sv: "Läkare nära dig i Nerja. Engelsktalande privatläkare besöker ditt hotellrum eller lägenhet 24/7 inom 30–60 min. Läkarintyg för försäkring.",
      ru: "Частный врач рядом с вами в Nerja. Выезд доктора в отель или апартаменты круглосуточно за 30–60 минут. Документы для страховки.",
      nl: "Arts in de buurt nodig in Nerja? Meertalige privéartsen bezoeken uw hotel of appartement 24/7 binnen 30–60 min. Factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor & Urgent Care in Nerja — Hotel & Home Visits",
      es: "Médico Privado y Urgencias en Nerja — Visitas a Hotel y Domicilio",
      de: "Privatarzt & Notfallversorgung in Nerja — Hotelbesuche 24/7",
      fr: "Médecin Privé & Soins d'Urgence à Nerja — Visites Hôtel",
      fi: "Yksityinen Lääkäri & Päivystys Nerja — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص ورعاية عاجلة في Nerja — زيارات الفنادق والمنازل",
      no: "Privat Lege & Akutthjelp i Nerja — Hotell- og Hjemmebesøk",
      da: "Privat Læge & Akuthjælp i Nerja — Hotel- og Hjemmebesøg",
      sv: "Privatläkare & Akutvård i Nerja — Hotell- och Hembesök",
      ru: "Частный врач и неотложная помощь в Nerja — Вызов 24/7",
      nl: "Privéarts & Spoedzorg in Nerja — Hotel- en huisbezoeken 24/7",
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
      en: "Private doctor visits to hotels and apartments in Estepona. Fast, professional medical care for tourists.",
      es: "Visitas médicas privadas a hoteles y apartamentos en Estepona. Atención rápida y profesional.",
      de: "Private Arztbesuche in Hotels und Apartments in Estepona. Schnelle, professionelle medizinische Versorgung.",
      fr: "Visites médicales privées dans les hôtels et appartements d'Estepona. Soins rapides et professionnels.",
      fi: "Yksityisen lääkärin käynnit hotelleihin ja asuntoihin Esteponassa. Nopeaa ja ammattitaitoista sairaanhoitoa turisteille.",
      ar: "زيارات أطباء خصوصيين للفنادق والشقق في إيستيبونا. رعاية طبية سريعة ومهنية للسياح.",
      no: "Private legebesøk til hoteller og leiligheter i Estepona. Rask, profesjonell medisinsk behandling for turister.",
      da: "Private lægebesøg på hoteller og lejligheder i Estepona. Hurtig og professionel lægehjælp til turister.",
      sv: "Privata läkarbesök till hotell och lägenheter i Estepona. Snabb, professionell läkarvård för turister.",
      ru: "Медицинская помощь и визиты врача в отели и урбанизации Эстепоны и Новой Золотой Мили 24/7.",
      nl: "Medische zorg en doktersvisites aan hotels en urbanisaties in Estepona en de New Golden Mile 24/7.",
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
      en: "Doctor visits in Mijas Costa, Mijas Pueblo and La Cala de Mijas. Private medical care for tourists and residents.",
      es: "Visitas médicas en Mijas Costa, Mijas Pueblo y La Cala de Mijas. Atención médica privada.",
      de: "Arztbesuche in Mijas Costa, Mijas Pueblo und La Cala de Mijas. Private medizinische Versorgung.",
      fr: "Visites médicales à Mijas Costa, Mijas Pueblo et La Cala de Mijas. Soins médicaux privés.",
      fi: "Lääkärin käynnit Mijas Costassa, Mijas Pueblossa ja La Cala de Mijasissa. Yksityistä sairaanhoitoa turisteille ja asukkaille.",
      ar: "زيارات الأطباء في ميخاس كوستا، وميخاس بويبلو، ولا كالا دي ميخاس. رعاية طبية خاصة للسياح والمقيمين.",
      no: "Legebesøk i Mijas Costa, Mijas Pueblo og La Cala de Mijas. Privat medisinsk behandling for turister og fastboende.",
      da: "Lægebesøg i Mijas Costa, Mijas Pueblo og La Cala de Mijas. Privat lægehjælp til turister og indbyggere.",
      sv: "Läkarbesök i Mijas Costa, Mijas Pueblo och La Cala de Mijas. Privat läkarvård för turister och boende.",
      ru: "Вызов врача в Михас, Михас-Коста, Калахонду и Ла-Кала. Круглосуточный выезд в отели.",
      nl: "Doktersvisites in Mijas, Mijas Costa, Calahonda en La Cala. 24/7 beschikbaar voor hotelbezoek.",
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
