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
export const EMAIL_ADDRESS = "interdocsmedical@gmail.com";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:+34637255224`;
export const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

// ────────────────────────────────────────────────────────────
// DOMAIN / SITE URL CONFIG
// ────────────────────────────────────────────────────────────
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.interdocsmedical.com";

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
      headline: "Doctor at Your Hotel or Apartment in Málaga",
      subheadline:
        "Private doctors available 24/7 for tourists across the Costa del Sol. Fast, professional and English-speaking.",
      whatsapp: "WhatsApp Now",
      call: "Call Now",
      trusts: [
        "English Speaking Doctors",
        "Hotel & Home Visits",
        "Fast Response",
        "Medical Receipts for Insurance",
        "Adults & Children",
      ],
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "From first contact to medical care in minutes.",
      steps: [
        {
          step: "1",
          title: "Contact Us",
          desc: "Send a WhatsApp message or call us directly. Available 24 hours a day, 7 days a week.",
        },
        {
          step: "2",
          title: "Tell Us Your Location",
          desc: "Let us know which hotel, apartment or address you are staying at.",
        },
        {
          step: "3",
          title: "Doctor is Dispatched",
          desc: "We immediately assign one of our licensed partner doctors to visit you.",
        },
        {
          step: "4",
          title: "Receive Medical Care",
          desc: "The doctor arrives, examines you and provides a full medical report and receipt for insurance.",
        },
      ],
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive private medical care delivered to your door.",
      list: [
        {
          icon: "hotel",
          title: "Doctor at Hotel",
          desc: "Full medical consultation in the comfort of your hotel room.",
        },
        {
          icon: "home",
          title: "Doctor at Apartment",
          desc: "We visit your rental apartment or private residence.",
        },
        {
          icon: "emergency",
          title: "Emergency Home Visit",
          desc: "Urgent medical attention when you need it most.",
        },
        {
          icon: "prescription",
          title: "Prescription Assistance",
          desc: "Obtain necessary medications prescribed by a licensed doctor.",
        },
        {
          icon: "certificate",
          title: "Medical Certificates",
          desc: "Official documentation for your travel insurance provider.",
        },
        {
          icon: "tourist",
          title: "Tourist Medical Care",
          desc: "Specialised care for international visitors unfamiliar with the local system.",
        },
        {
          icon: "gp",
          title: "General Practitioner",
          desc: "Full GP consultation including diagnosis and treatment plan.",
        },
        {
          icon: "ambulance",
          title: "Ambulance Transfer",
          desc: "Safe and fast medical transport to the nearest hospital.",
        },

      ],
    },
    areas: {
      title: "Areas We Cover",
      subtitle: "We serve the entire Costa del Sol region.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our service.",
      items: [
        {
          q: "Do you visit hotels?",
          a: "Yes. Our doctors visit all hotels across the Costa del Sol, including Malaga, Marbella, Fuengirola, Benalmadena and more.",
        },
        {
          q: "Can you visit apartments?",
          a: "Absolutely. We visit rental apartments, private residences and any address where you are staying during your holiday.",
        },
        {
          q: "How fast can a doctor arrive?",
          a: "Response times vary by location, but we aim to have a doctor with you within 45–60 minutes of your initial contact.",
        },
        {
          q: "Do you speak English?",
          a: "Yes. All our partner doctors speak English fluently. We also have doctors available who speak German, French and other languages.",
        },
        {
          q: "Can I use travel insurance?",
          a: "Yes. We provide official medical receipts and documentation suitable for all major travel insurance providers.",
        },
        {
          q: "Can children be treated?",
          a: "Yes. We provide paediatric medical care for children of all ages.",
        },
        {
          q: "Can I receive a prescription?",
          a: "Yes. Our doctors can issue prescriptions for necessary medications, which can then be collected at a local pharmacy.",
        },
      ],
    },
    blog: {
      title: "Health & Travel Guides",
      subtitle: "Useful information for tourists visiting the Costa del Sol.",
      readMore: "Read article",
    },
    contact: {
      title: "Request a Doctor",
      subtitle: "Fill in the form and we will arrange a doctor for you immediately.",
      name: "Full Name",
      phone: "Phone Number",
      hotel: "Hotel / Address",
      symptoms: "Describe Your Symptoms",
      language: "Preferred Language",
      submit: "Send via WhatsApp",
      languages: ["English", "Spanish", "German", "French", "Finnish", "Arabic", "Norwegian", "Danish"],
      disclaimer:
        "By submitting this form, your details will be sent via WhatsApp for processing.",
    },
    footer: {
      disclaimer:
        "Interdocs Medical coordinates requests with independent licensed medical professionals. We do not ourselves provide medical treatment. In a life-threatening emergency, please call 112.",
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
      headline: "Médico en Tu Hotel o Apartamento en Málaga",
      subheadline:
        "Médicos privados disponibles 24/7 para turistas en toda la Costa del Sol.",
      whatsapp: "WhatsApp Ahora",
      call: "Llámanos",
      trusts: [
        "Médicos en Inglés",
        "Visitas a Hotel y Domicilio",
        "Respuesta Rápida",
        "Justificante para el Seguro",
        "Adultos y Niños",
      ],
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Del primer contacto a la atención médica en minutos.",
      steps: [
        {
          step: "1",
          title: "Contáctanos",
          desc: "Envíanos un mensaje de WhatsApp o llámanos directamente. Disponible 24 horas al día.",
        },
        {
          step: "2",
          title: "Indícanos tu Ubicación",
          desc: "Dinos en qué hotel, apartamento o dirección te encuentras.",
        },
        {
          step: "3",
          title: "Asignamos un Médico",
          desc: "Asignamos de inmediato uno de nuestros médicos colaboradores para visitarte.",
        },
        {
          step: "4",
          title: "Recibe Atención Médica",
          desc: "El médico llega, te examina y proporciona un informe médico y recibo para el seguro.",
        },
      ],
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Atención médica privada entregada en tu puerta.",
      list: [
        { icon: "hotel", title: "Médico en Hotel", desc: "Consulta médica completa en tu habitación de hotel." },
        { icon: "home", title: "Médico en Apartamento", desc: "Visitamos tu apartamento de alquiler o residencia." },
        { icon: "emergency", title: "Visita de Urgencia", desc: "Atención médica urgente cuando más lo necesitas." },
        { icon: "prescription", title: "Recetas Médicas", desc: "Obtén los medicamentos necesarios prescritos por un médico licenciado." },
        { icon: "certificate", title: "Certificados Médicos", desc: "Documentación oficial para tu seguro de viaje." },
        { icon: "tourist", title: "Atención al Turista", desc: "Cuidado especializado para visitantes internacionales." },
        { icon: "gp", title: "Médico General", desc: "Consulta completa con diagnóstico y plan de tratamiento." },
        {
          icon: "ambulance",
          title: "Traslado en Ambulancia",
          desc: "Transporte médico seguro y rápido al hospital más cercano.",
        },

      ],
    },
    areas: { title: "Zonas que Cubrimos", subtitle: "Cubrimos toda la Costa del Sol." },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestro servicio.",
      items: [
        { q: "¿Visitan hoteles?", a: "Sí. Nuestros médicos visitan todos los hoteles de la Costa del Sol." },
        { q: "¿Pueden visitar apartamentos?", a: "Por supuesto. Visitamos apartamentos de alquiler y cualquier alojamiento." },
        { q: "¿Cuánto tarda en llegar el médico?", a: "Nuestro objetivo es que el médico llegue en 45–60 minutos." },
        { q: "¿Hablan inglés?", a: "Sí. Todos nuestros médicos colaboradores hablan inglés con fluidez." },
        { q: "¿Puedo usar mi seguro de viaje?", a: "Sí. Proporcionamos recibos médicos oficiales para todos los seguros." },
        { q: "¿Se puede atender a niños?", a: "Sí. Ofrecemos atención pediátrica para niños de todas las edades." },
        { q: "¿Puedo obtener una receta?", a: "Sí. Nuestros médicos pueden emitir recetas para medicamentos necesarios." },
      ],
    },
    blog: { title: "Guías de Salud y Viaje", subtitle: "Información útil para turistas en la Costa del Sol.", readMore: "Leer artículo" },
    contact: {
      title: "Solicitar un Médico",
      subtitle: "Rellena el formulario y organizaremos un médico para ti de inmediato.",
      name: "Nombre Completo",
      phone: "Número de Teléfono",
      hotel: "Hotel / Dirección",
      symptoms: "Describe tus Síntomas",
      language: "Idioma Preferido",
      submit: "Enviar por WhatsApp",
      languages: ["Inglés", "Español", "Alemán", "Francés", "Finlandés", "Árabe", "Noruego", "Danés"],
      disclaimer: "Al enviar este formulario, tus datos se enviarán por WhatsApp.",
    },
    footer: {
      disclaimer: "Interdocs Medical coordina solicitudes con profesionales médicos independientes con licencia. No prestamos tratamiento médico directamente. En una emergencia, llame al 112.",
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
      title: "Arzt anfordern",
      subtitle: "Füllen Sie das Formular aus und wir organisieren sofort einen Arzt für Sie.",
      name: "Vollständiger Name",
      phone: "Telefonnummer",
      hotel: "Hotel / Adresse",
      symptoms: "Beschreiben Sie Ihre Symptome",
      language: "Bevorzugte Sprache",
      submit: "Per WhatsApp senden",
      languages: ["Englisch", "Spanisch", "Deutsch", "Französisch", "Finnisch", "Arabisch", "Norwegisch", "Dänisch"],
      disclaimer: "Durch das Absenden dieses Formulars werden Ihre Daten per WhatsApp übermittelt.",
    },
    footer: {
      disclaimer: "Interdocs Medical koordiniert Anfragen mit unabhängigen zugelassenen Medizinern. Wir selbst erbringen keine medizinische Behandlung. Im lebensbedrohlichen Notfall rufen Sie bitte 112 an.",
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
      title: "Demander un Médecin",
      subtitle: "Remplissez le formulaire et nous organiserons immédiatement un médecin pour vous.",
      name: "Nom Complet",
      phone: "Numéro de Téléphone",
      hotel: "Hôtel / Adresse",
      symptoms: "Décrivez vos Symptômes",
      language: "Langue Préférée",
      submit: "Envoyer via WhatsApp",
      languages: ["Anglais", "Espagnol", "Allemand", "Français", "Finnois", "Arabe", "Norvégien", "Danois"],
      disclaimer: "En soumettant ce formulaire, vos données seront envoyées par WhatsApp.",
    },
    footer: {
      disclaimer: "Interdocs Medical coordonne les demandes avec des professionnels médicaux indépendants agréés. Nous ne fournissons pas nous-mêmes de traitement médical. En cas d'urgence vitale, appelez le 112.",
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
      title: "Pyydä Lääkäriä",
      subtitle: "Täytä lomake ja järjestämme sinulle lääkärin välittömästi.",
      name: "Koko Nimi",
      phone: "Puhelinnumero",
      hotel: "Hotelli / Osoite",
      symptoms: "Kuvaile Oireitasi",
      language: "Toivottu Kieli",
      submit: "Lähetä WhatsAppilla",
      languages: ["Englanti", "Espanja", "Saksa", "Ranska", "Suomi", "Arabia", "Norja", "Tanska"],
      disclaimer: "Lähettämällä tämän lomakkeen tietosi lähetetään WhatsAppilla käsiteltäväksi.",
    },
    footer: {
      disclaimer: "Interdocs Medical koordinoi pyyntöjä itsenäisten lisensoitujen lääkäreiden kanssa. Emme itse tarjoa lääketieteellistä hoitoa. Hengenvaarallisessa hätätilanteessa soita numeroon 112.",
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
      title: "طلب طبيب",
      subtitle: "ملأ النموذج وسنقوم بترتيب طبيب لك على الفور.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      hotel: "الفندق / العنوان",
      symptoms: "صف أعراضك",
      language: "اللغة المفضلة",
      submit: "إرسال عبر واتساب",
      languages: ["الإنجليزية", "الإسبانية", "الألمانية", "الفرنسية", "الفنلندية", "العربية", "النرويجية", "الدنماركية"],
      disclaimer: "بإرسال هذا النموذج، سيتم إرسال بياناتك عبر واتساب للمعالجة.",
    },
    footer: {
      disclaimer: "تقوم Interdocs Medical بتنسيق الطلبات مع أطباء مرخصين مستقلين. نحن لا نقدم علاجاً طبياً بأنفسنا. في حالات الطوارئ التي تهدد الحياة، يرجى الاتصال بالرقم 112.",
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
      title: "Bestill en Lege",
      subtitle: "Fyll ut skjemaet, så arrangerer vi en lege for deg umiddelbart.",
      name: "Fullt Navn",
      phone: "Telefonnummer",
      hotel: "Hotell / Adresse",
      symptoms: "Beskriv Dine Symptomer",
      language: "Foretrukket Språk",
      submit: "Send via WhatsApp",
      languages: ["Engelsk", "Spansk", "Tysk", "Fransk", "Finsk", "Arabisk", "Norsk", "Dansk", "Svensk"],
      disclaimer: "Ved å sende inn dette skjemaet, vil opplysningene dine bli sendt via WhatsApp for behandling.",
    },
    footer: {
      disclaimer: "Interdocs Medical koordinerer forespørsler med uavhengige lisensierte leger. Vi tilbyr ikke medisinsk behandling selv. Ved livstruende nødsituasjoner, ring 112.",
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
      title: "Bestil en Læge",
      subtitle: "Udfyld formularen, så arrangerer vi en læge til dig med det samme.",
      name: "Fulde Navn",
      phone: "Telefonnummer",
      hotel: "Hotel / Adresse",
      symptoms: "Beskriv Dine Symptomer",
      language: "Foretrukket Sprog",
      submit: "Send via WhatsApp",
      languages: ["Engelsk", "Spansk", "Tysk", "Fransk", "Finsk", "Arabisk", "Norsk", "Dansk", "Svensk"],
      disclaimer: "Ved at indsende denne formular vil dine oplysninger blive sendt via WhatsApp til behandling.",
    },
    footer: {
      disclaimer: "Interdocs Medical koordinerer anmodninger med uafhængige autoriserede læger. Vi yder ikke selv lægebehandling. Ring 112 i tilfælde af livsfare.",
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
      title: "Beställ en Läkare",
      subtitle: "Fyll i formuläret så ordnar vi en läkare till dig omedelbart.",
      name: "Fullständigt Namn",
      phone: "Telefonnummer",
      hotel: "Hotell / Adress",
      symptoms: "Beskriv Dina Symptom",
      language: "Föredraget Språk",
      submit: "Skicka via WhatsApp",
      languages: ["Engelska", "Spanska", "Tyska", "Franska", "Finska", "Arabiska", "Norska", "Danska", "Svenska"],
      disclaimer: "Genom att skicka in detta formulär kommer dina uppgifter att skickas via WhatsApp för behandling.",
    },
    footer: {
      disclaimer: "Interdocs Medical samordnar förfrågningar med oberoende legitimerade läkare. Vi tillhandahåller inte medicinsk behandling själva. Vid livshotande nödsituationer, ring 112.",
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
        "Приезд за 30-45 минут",
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
      title: "Вызвать врача",
      subtitle: "Заполните форму, и мы организуем визит доктора немедленно.",
      name: "Ваше имя",
      phone: "Номер телефона",
      hotel: "Отель / Адрес",
      symptoms: "Опишите ваши симптомы",
      language: "Предпочтительный язык",
      submit: "Вызвать врача через WhatsApp",
      languages: ["English", "Español", "Русский", "Deutsch", "Français"],
      disclaimer: "В случае экстренной угрозы жизни немедленно звоните 112.",
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
        "Binnen 45 minuten",
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
      title: "Vraag een Arts aan",
      subtitle: "Vul het formulier in en wij regelen direct een arts voor u.",
      name: "Volledige Naam",
      phone: "Telefoonnummer",
      hotel: "Hotel / Adres",
      symptoms: "Beschrijf uw klachten",
      language: "Voorkeurstaal",
      submit: "Verstuur via WhatsApp",
      languages: ["English", "Nederlands", "Español", "Deutsch", "Français"],
      disclaimer: "Bel bij direct levensgevaar altijd direct 112.",
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
      en: "Doctor in Málaga | English Doctor Home Visit | Private GP Málaga",
      es: "Médico en Málaga | Visita Médica a Domicilio Málaga | GP Privado",
      de: "Arzt in Málaga | Ärztlicher Hausbesuch Málaga | Privatarzt",
      fr: "Médecin à Málaga | Visite Médicale à Domicile Málaga | Médecin Privé",
      fi: "Lääkäri Málagassa | Yksityislääkäri kotikäynti Málagassa",
      ar: "طبيب في مالقة | زيارة منزلية لطبيب خاص | طبيب عام في مالقة",
      no: "Lege i Málaga | Privat lege hjemmebesøk | Privatpraktiserende lege Málaga",
      da: "Læge i Málaga | Privat læge hjemmebesøg | Praktiserende læge Málaga",
      sv: "Läkare i Málaga | Engelsktalande Läkare Hembesök | Privat Läkare Málaga",
      ru: "Врач в Малаге | Вызов врача на дом Малага | Частный доктор 24/7",
      nl: "Arts in Málaga | Huisbezoek dokter Málaga | Privéarts 24/7",
    },
    metaDesc: {
      en: "Need a doctor in Málaga? Our English-speaking private doctors visit your hotel or apartment 24/7. Fast response, medical certificates for insurance. Contact us now.",
      es: "¿Necesitas un médico en Málaga? Nuestros médicos privados visitan tu hotel o apartamento las 24h. Respuesta rápida, certificados médicos para el seguro.",
      de: "Brauchen Sie einen Arzt in Málaga? Unsere englischsprachigen Privatärzte besuchen Ihr Hotel oder Apartment rund um die Uhr.",
      fr: "Besoin d'un médecin à Málaga ? Nos médecins privés visitent votre hôtel ou appartement 24h/24. Réponse rapide, certificats médicaux pour l'assurance.",
      fi: "Tarvitsetko lääkäriä Málagassa? Englanninkieliset yksityislääkärimme vierailevat hotellissasi tai asunnossasi 24/7. Nopea vastaus, lääkärintodistukset vakuutukseen.",
      ar: "هل تحتاج إلى طبيب في مالقة؟ أطباؤنا الخصوصيون المتحدثون بالإنجليزية يزورون فندقك أو شقتك على مدار الساعة طوال أيام الأسبوع. استجابة سريعة وشهادات طبية.",
      no: "Trenger du lege i Málaga? Våre engelsktalende privatleger besøker ditt hotell eller leilighet 24/7. Rask respons, medisinske attester for forsikring.",
      da: "Har du brug for en læge i Málaga? Vores engelsktalende privatlæger besøger dit hotel eller lejlighed 24/7. Hurtig respons, lægeerklæring til forsikringen.",
      sv: "Behöver du en läkare i Málaga? Våre engelsktalende privatläkare besöker ditt hotell eller din lägenhet 24/7. Snabb respons, läkarintyg för försäkring.",
      ru: "Нужен врач в Малаге? Англоязычные частные доктора приедут в ваш отель или апартаменты 24/7. Быстрый выезд, чеки для страховки.",
      nl: "Arts nodig in Málaga? Onze meertalige privéartsen bezoeken uw hotel of appartement 24/7. Snelle respons, medische attesten voor verzekering.",
    },
    h1: {
      en: "Private Doctor in Málaga — Hotel & Home Visits",
      es: "Médico Privado en Málaga — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Málaga — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Málaga — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Málagassa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في مالقة — زيارات الفنادق والمنازل",
      no: "Privat lege i Málaga — Hotell- og hjemmebesøk",
      da: "Privat læge i Málaga — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Málaga — Hotell- och Hembesök",
      ru: "Вызов частного врача в Малаге — На дом и в отель 24/7",
      nl: "Privéarts in Málaga — Hotel- en huisbezoeken 24/7",
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
      en: "Doctor in Marbella | Private Doctor Visit | Hotel Doctor Marbella",
      es: "Médico en Marbella | Visita Médica Privada | Médico Hotel Marbella",
      de: "Arzt in Marbella | Privatarzt Besuch | Hoteldoktor Marbella",
      fr: "Médecin à Marbella | Visite Médicale Privée | Médecin Hôtel Marbella",
      fi: "Lääkäri Marbellassa | Yksityinen lääkärivierailu Marbella",
      ar: "طبيب في ماربيا | زيارة طبيب خاصة | طبيب فندق ماربيا",
      no: "Lege i Marbella | Privat legebesøk | Hotell-lege Marbella",
      da: "Læge i Marbella | Privat legebesøg | Hotellæge Marbella",
      sv: "Läkare i Marbella | Privat Läkarbesök | Hotelläkare Marbella",
      ru: "Врач в Марбелье | Вызов частного доктора Марбелья 24/7",
      nl: "Arts in Marbella | Doktersbezoek hotel Marbella | Privéarts 24/7",
    },
    metaDesc: {
      en: "Doctor in Marbella available 24/7. English-speaking private GP visits your hotel, villa or apartment in Marbella and Puerto Banús. Fast response guaranteed.",
      es: "Médico en Marbella disponible 24/7. Médico de cabecera privado visita tu hotel, villa o apartamento en Marbella y Puerto Banús.",
      de: "Arzt in Marbella rund um die Uhr verfügbar. Englischsprachiger Privatarzt besucht Ihr Hotel, Ihre Villa oder Apartment.",
      fr: "Médecin à Marbella disponible 24h/24. Médecin généraliste privé visite votre hôtel, villa ou appartement.",
      fi: "Lääkäri saatavilla Marbellassa 24/7. Englanninkielinen yksityislääkäri vierailee hotellissasi tai asunnossasi Marbellassa ja Puerto Banúsissa.",
      ar: "طبيب في ماربيا متاح 24/7. طبيب عام خاص يتحدث الإنجليزية يزور فندقك أو فيلتك أو شقتك في ماربيا وبورتو بانوس. استجابة سريعة.",
      no: "Lege i Marbella tilgjengelig 24/7. Engelsktalende privat lege besøker ditt hotell, villa eller leilighet i Marbella og Puerto Banús.",
      da: "Læge i Marbella tilgængelig 24/7. Engelsktalende privatlæge besøger dit hotel, din villa eller din lejlighed i Marbella og Puerto Banús.",
      sv: "Läkare i Marbella tillgänglig 24/7. Engelsktalende privatläkare besöker ditt hotell, din villa eller din lägenhet i Marbella och Puerto Banús.",
      ru: "Врач в Марбелье для туристов и экспатов. Выезд доктора в отель, виллу или апартаменты круглосуточно. Документы для страховки.",
      nl: "Arts nodig in Marbella? Onze privéartsen bezoeken uw hotel, villa of appartement 24/7. Officiële declaratiebewijzen.",
    },
    h1: {
      en: "Private Doctor in Marbella — Hotel & Villa Visits",
      es: "Médico Privado en Marbella — Visitas a Hotel y Villa",
      de: "Privatarzt in Marbella — Hotel- und Villabesuche",
      fr: "Médecin Privé à Marbella — Visites à l'Hôtel et à la Villa",
      fi: "Yksityinen lääkäri Marbellassa — Hotelli- ja villakäynnit",
      ar: "طبيب خاص في ماربيا — زيارات الفنادق والفيلات",
      no: "Privat lege i Marbella — Hotell- og villabesøk",
      da: "Privat læge i Marbella — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Marbella — Hotell- och Villabesök",
      ru: "Частный врач в Марбелье — Отель, вилла и дом 24/7",
      nl: "Privéarts in Marbella — Hotel- en huisbezoeken 24/7",
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
      en: "Doctor in Fuengirola | English Doctor | Hotel Visit Fuengirola",
      es: "Médico en Fuengirola | Médico Inglés | Visita a Hotel Fuengirola",
      de: "Arzt in Fuengirola | Englischer Arzt | Hotelbesuch Fuengirola",
      fr: "Médecin à Fuengirola | Médecin Anglophone | Visite Hôtel Fuengirola",
      fi: "Lääkäri Fuengirolassa | Englanninkielinen lääkäri Fuengirola",
      ar: "طبيب في فوينخيرولا | طبيب يتحدث الإنجليزية | زيارة فندق فوينخيرولا",
      no: "Lege i Fuengirola | Engelsktalende lege | Hotellbesøk Fuengirola",
      da: "Læge i Fuengirola | Engelsktalende læge | Hotelbesøg Fuengirola",
      sv: "Läkare i Fuengirola | Engelsktalende Läkare | Hotellbesök Fuengirola",
      ru: "Врач в Фуэнхироле | Вызов доктора в отель 24/7",
      nl: "Arts in Fuengirola | Hotelarts Fuengirola | Privéarts 24/7",
    },
    metaDesc: {
      en: "Need a doctor in Fuengirola? English-speaking private doctors visit your hotel or apartment in Fuengirola 24/7. Fast, professional medical care.",
      es: "¿Necesitas un médico en Fuengirola? Médicos privados visitan tu hotel o apartamento en Fuengirola 24/7.",
      de: "Brauchen Sie einen Arzt in Fuengirola? Englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment.",
      fr: "Besoin d'un médecin à Fuengirola ? Médecins privés visitant votre hôtel ou appartement 24h/24.",
      fi: "Tarvitsetko lääkäriä Fuengirolassa? Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi Fuengirolassa 24/7.",
      ar: "هل تحتاج إلى طبيب في فوينخيرولا؟ أطباء خصوصيون يتحدثون الإنجليزية يزورون فندقك أو شقتك في فوينخيرولا على مدار الساعة. رعاية طبية سريعة.",
      no: "Trenger du lege i Fuengirola? Engelsktalende privatleger besøker ditt hotell eller leilighet i Fuengirola 24/7. Rask, profesjonell medisinsk behandling.",
      da: "Har du brug for en læge i Fuengirola? Engelsktalende privatlæger besøger dit hotel eller lejlighed i Fuengirola 24/7. Hurtig, professionel lægehjælp.",
      sv: "Behöver du en läkare i Fuengirola? Engelsktalende privatläkare besöker ditt hotell eller din lägenhet i Fuengirola 24/7. Snabb, professionell läkarvård.",
      ru: "Медицинская помощь в Фуэнхироле для туристов. Частный врач приедет к вам в отель в течение 45 минут.",
      nl: "Medische hulp in Fuengirola voor toeristen. Privéarts bezoekt uw hotel binnen 45 minuten.",
    },
    h1: {
      en: "Private Doctor in Fuengirola — Hotel & Home Visits",
      es: "Médico Privado en Fuengirola — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Fuengirola — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Fuengirola — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Fuengirolassa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في فوينخيرولا — زيارات الفنادق والمنازل",
      no: "Privat lege i Fuengirola — Hotell- og hjemmebesøk",
      da: "Privat læge i Fuengirola — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Fuengirola — Hotell- och Hembesök",
      ru: "Врач в Фуэнхироле — Вызов в отель и на дом 24/7",
      nl: "Privéarts in Fuengirola — Hotel- en huisbezoek 24/7",
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
      en: "Doctor in Benalmadena | Private Doctor | Hotel Visit Benalmadena",
      es: "Médico en Benalmádena | Médico Privado | Visita a Hotel",
      de: "Arzt in Benalmadena | Privatarzt | Hotelbesuch Benalmadena",
      fr: "Médecin à Benalmadena | Médecin Privé | Visite Hôtel Benalmadena",
      fi: "Lääkäri Benalmádenassa | Yksityislääkäri Benalmádena",
      ar: "طبيب في بينالمادينا | طبيب خاص | زيارة فندق بينالمادينا",
      no: "Lege i Benalmádena | Privat lege | Hotellbesøk Benalmádena",
      da: "Læge i Benalmádena | Privat læge | Hotelbesøg Benalmádena",
      sv: "Läkare i Benalmádena | Privat Läkare | Hotellbesök Benalmádena",
      ru: "Врач в Бенальмадене | Вызов доктора на дом Бенальмадена",
      nl: "Arts in Benalmádena | Huisarts Benalmádena Costa 24/7",
    },
    metaDesc: {
      en: "Doctor in Benalmadena available 24/7. Private GP visits your hotel or apartment in Benalmadena. English, German, French speaking doctors.",
      es: "Médico en Benalmádena disponible 24/7. Médico de cabecera privado visita tu hotel o apartamento.",
      de: "Arzt in Benalmadena rund um die Uhr. Privatarzt besucht Ihr Hotel oder Apartment in Benalmadena.",
      fr: "Médecin à Benalmadena disponible 24h/24. Médecin généraliste privé visite votre hôtel ou appartement.",
      fi: "Lääkäri Benalmádenassa saatavilla 24/7. Yksityinen yleislääkäri vierailee hotellissasi tai asunnossasi Benalmádenassa.",
      ar: "طبيب في بينالمادينا متاح 24/7. طبيب عام خاص يزور فندقك أو شقتك في بينالمادينا. أطباء يتحدثون الإنجليزية والألمانية والفرنسية.",
      no: "Lege i Benalmádena tilgjengelig 24/7. Privat allmennlege besøker ditt hotell eller leilighet i Benalmádena. Engelsktalende leger.",
      da: "Læge i Benalmádena tilgængelig 24/7. Privat praktiserende læge besøger dit hotel eller din lejlighed i Benalmádena. Engelsktalende læger.",
      sv: "Läkare i Benalmádena tillgänglig 24/7. Privat allmenläkare besöker ditt hotell eller din lägenhet i Benalmádena. Engelsktalende läkare.",
      ru: "Частный врач в Бенальмадене. Выезд в отель и апартаменты за 45 минут. Рецепты и чеки для страховой.",
      nl: "Privéarts in Benalmádena. Bezoek aan hotel of appartement binnen 45 min. Recepten en factuur voor verzekering.",
    },
    h1: {
      en: "Private Doctor in Benalmadena — Hotel & Home Visits",
      es: "Médico Privado en Benalmádena — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Benalmadena — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Benalmadena — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Benalmádenassa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في بينالمادينا — زيارات الفنادق والمنازل",
      no: "Privat lege i Benalmádena — Hotell- og hjemmebesøk",
      da: "Privat læge i Benalmádena — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Benalmádena — Hotell- och Hembesök",
      ru: "Частный врач в Бенальмадене — Вызов в отель 24/7",
      nl: "Privéarts in Benalmádena — Hotel- en huisbezoek 24/7",
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
      en: "Doctor in Torremolinos | English Doctor | Hotel Visit Torremolinos",
      es: "Médico en Torremolinos | Médico en Inglés | Visita Hotel",
      de: "Arzt in Torremolinos | Englischer Arzt | Hotelbesuch",
      fr: "Médecin à Torremolinos | Médecin Anglophone | Visite Hôtel",
      fi: "Lääkäri Torremolinosissa | Englanninkielinen lääkäri Torremolinos",
      ar: "طبيب في توريمولينوس | طبيب إنجليزي | زيارة فندق توريمولينوس",
      no: "Lege i Torremolinos | Engelsktalende lege | Hotellbesøk Torremolinos",
      da: "Læge i Torremolinos | Engelsktalende læge | Hotelbesøg Torremolinos",
      sv: "Läkare i Torremolinos | Engelsktalende Läkare | Hotellbesök Torremolinos",
      ru: "Врач в Торремолиносе | Вызов доктора в отель 24/7",
      nl: "Arts in Torremolinos | Hotelarts Torremolinos 24/7",
    },
    metaDesc: {
      en: "Need a doctor in Torremolinos? English-speaking private doctors visit your hotel or apartment 24/7. Fast professional care.",
      es: "¿Necesitas un médico en Torremolinos? Médicos privados visitan tu hotel o apartamento 24/7.",
      de: "Brauchen Sie einen Arzt in Torremolinos? Privatärzte besuchen Ihr Hotel oder Apartment rund um die Uhr.",
      fr: "Besoin d'un médecin à Torremolinos ? Médecins privés visitant votre hôtel ou appartement 24h/24.",
      fi: "Tarvitsetko lääkäriä Torremolinosissa? Englanninkieliset yksityislääkärit vierailevat hotellissasi tai asunnossasi 24/7. Nopea ammatillinen hoito.",
      ar: "هل تحتاج إلى طبيب في توريمولينوس؟ أطباء خصوصيون يتحدثون الإنجليزية يزورون فندقك أو شقتك على مدار الساعة طوال أيام الأسبوع. رعاية مهنية سريعة.",
      no: "Trenger du lege i Torremolinos? Engelsktalende privatleger besøker ditt hotell eller leilighet 24/7. Rask profesjonell behandling.",
      da: "Har du brug for en læge i Torremolinos? Engelsktalende privatlæger besøger dit hotel eller lejlighed 24/7. Hurtig og professionel hjælp.",
      sv: "Behöver du en läkare i Torremolinos? Engelsktalende privatläkare besöker ditt hotell eller din lägenhet 24/7. Snabb och professionell vård.",
      ru: "Частный доктор в Торремолиносе. Быстрый выезд в отель, диагностика и выписка рецептов круглосуточно.",
      nl: "Privédokter in Torremolinos. Snel ter plaatse in uw hotel, diagnose en recepten 24 uur per dag.",
    },
    h1: {
      en: "Private Doctor in Torremolinos — Hotel & Home Visits",
      es: "Médico Privado en Torremolinos — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Torremolinos — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Torremolinos — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Torremolinosissa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في توريمولينوس — زيارات الفنادق والمنازل",
      no: "Privat lege i Torremolinos — Hotell- og hjemmebesøk",
      da: "Privat læge i Torremolinos — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Torremolinos — Hotell- och Hembesök",
      ru: "Врач в Торремолиносе — Визиты в отель 24/7",
      nl: "Privéarts in Torremolinos — Hotelbezoek 24/7",
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
      en: "Doctor in Nerja | English Doctor | Hotel Visit Nerja",
      es: "Médico en Nerja | Médico en Inglés | Visita Hotel Nerja",
      de: "Arzt in Nerja | Englischer Arzt | Hotelbesuch Nerja",
      fr: "Médecin à Nerja | Médecin Anglophone | Visite Hôtel Nerja",
      fi: "Lääkäri Nerjassa | Englanninkielinen lääkäri Nerja",
      ar: "طبيب في نيرخا | طبيب يتحدث الإنجليزية | زيارة فندق نيرخا",
      no: "Lege i Nerja | Engelsktalende lege | Hotellbesøk Nerja",
      da: "Læge i Nerja | Engelsktalende læge | Hotelbesøg Nerja",
      sv: "Läkare i Nerja | Engelsktalende Läkare | Hotellbesök Nerja",
      ru: "Врач в Нерхе | Вызов врача на дом Нерха 24/7",
      nl: "Arts in Nerja | Doktersvisite Nerja & Torrox 24/7",
    },
    metaDesc: {
      en: "Need a doctor in Nerja? English-speaking private doctors visit your hotel or apartment in Nerja. Available 24/7.",
      es: "¿Necesitas un médico en Nerja? Médicos privados visitan tu hotel o apartamento en Nerja. Disponible 24/7.",
      de: "Brauchen Sie einen Arzt in Nerja? Englischsprachige Privatärzte besuchen Ihr Hotel oder Apartment.",
      fr: "Besoin d'un médecin à Nerja ? Médecins privés visitant votre hôtel ou appartement 24h/24.",
      fi: "Tarvitsetko lääkäriä Nerjassa? Englanninkieliset yksityislääkärimme vierailevat hotellissasi tai asunnossasi Nerjassa. Saatavilla 24/7.",
      ar: "هل تحتاج إلى طبيب في نيرخا؟ أطباء خصوصيون يتحدثون الإنجليزية يزورون فندقك أو شقتك في نيرخا. متاح على مدار الساعة.",
      no: "Trenger du lege i Nerja? Engelsktalende privatleger besøker ditt hotel eller leilighet i Nerja. Tilgjengelig 24/7.",
      da: "Har du brug for en læge i Nerja? Engelsktalende privatlæger besøger dit hotel eller lejlighed i Nerja. Tilgængelig 24/7.",
      sv: "Behöver du en läkare i Nerja? Engelsktalende privatläkare besöker ditt hotel eller din lägenhet i Nerja. Tillgänglig 24/7.",
      ru: "Нужен врач в Нерхе? Частные врачи выезжают в ваш отель или виллу круглосуточно. Отчеты для страховки.",
      nl: "Arts nodig in Nerja? Onze artsen bezoeken uw hotel of vakantievilla 24/7. Facturen voor uw verzekering.",
    },
    h1: {
      en: "Private Doctor in Nerja — Hotel & Home Visits",
      es: "Médico Privado en Nerja — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Nerja — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Nerja — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Nerjassa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في نيرخا — زيارات الفنادق والمنازل",
      no: "Privat lege i Nerja — Hotell- og hjemmebesøk",
      da: "Privat lege i Nerja — Hotell- og hjemmebesøk",
      sv: "Privatläkare i Nerja — Hotell- och Hembesök",
      ru: "Частный врач в Нерхе — Вызов в отель и на дом 24/7",
      nl: "Privéarts in Nerja — Hotel- en huisbezoek 24/7",
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
      en: "Doctor in Estepona | Private GP | Hotel Visit Estepona",
      es: "Médico en Estepona | Médico Privado | Visita Hotel Estepona",
      de: "Arzt in Estepona | Privatarzt | Hotelbesuch Estepona",
      fr: "Médecin à Estepona | Médecin Privé | Visite Hôtel Estepona",
      fi: "Lääkäri Esteponassa | Yksityinen yleislääkäri Estepona",
      ar: "طبيب في إيستيبونا | طبيب عام خاص | زيارة فندق إيستيبونا",
      no: "Lege i Estepona | Privat allmennlege | Hotellbesøk Estepona",
      da: "Læge i Estepona | Privat praktiserende læge | Hotelbesøg Estepona",
      sv: "Läkare i Estepona | Privat Allmänläkare | Hotellbesök Estepona",
      ru: "Врач в Эстепоне | Вызов врача на дом Эстепона 24/7",
      nl: "Arts in Estepona | Hotelarts Estepona 24/7",
    },
    metaDesc: {
      en: "Doctor in Estepona available 24/7. English-speaking private doctors visit your hotel or apartment in Estepona. Fast response.",
      es: "Médico en Estepona disponible 24/7. Médicos privados visitan tu hotel o apartamento en Estepona.",
      de: "Arzt in Estepona rund um die Uhr. Privatärzte besuchen Ihr Hotel oder Apartment in Estepona.",
      fr: "Médecin à Estepona disponible 24h/24. Médecins privés visitant votre hôtel ou appartement.",
      fi: "Lääkäri Esteponassa saatavilla 24/7. Englanninkieliset yksityislääkärimme vierailevat hotellissasi tai asunnossasi Esteponassa.",
      ar: "طبيب في إيستيبونا متاح 24/7. أطباء خصوصيون يتحدثون الإنجليزية يزورون فندقك أو شقتك في إيستيبونا. استجابة سريعة.",
      no: "Lege i Estepona tilgjengelig 24/7. Engelsktalende privatleger besøker ditt hotell eller leilighet i Estepona. Rask respons.",
      da: "Læge i Estepona tilgængelig 24/7. Engelsktalende privatlæger besøger dit hotel eller lejlighed i Estepona. Hurtig respons.",
      sv: "Läkare i Estepona tillgänglig 24/7. Engelsktalende privatläkare besöker ditt hotell eller din lägenhet i Estepona. Snabb respons.",
      ru: "Вызов врача в Эстепоне. Частный доктор приедет в ваш отель, апартаменты или виллу за 45 минут.",
      nl: "Dokter aan huis in Estepona. Privéarts bezoekt uw hotel of vakantiehuis binnen 45 minuten.",
    },
    h1: {
      en: "Private Doctor in Estepona — Hotel & Home Visits",
      es: "Médico Privado en Estepona — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Estepona — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Estepona — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Esteponassa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في إيستيبونا — زيارات الفنادق والمنازل",
      no: "Privat lege i Estepona — Hotell- og hjemmebesøk",
      da: "Privat læge i Estepona — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Estepona — Hotell- och Hembesök",
      ru: "Частный врач в Эстепоне — Вызов в отель 24/7",
      nl: "Privéarts in Estepona — Hotel- en huisbezoek 24/7",
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
      en: "Doctor in Mijas | Private Doctor | Hotel Visit Mijas Costa",
      es: "Médico en Mijas | Médico Privado | Visita Hotel Mijas Costa",
      de: "Arzt in Mijas | Privatarzt | Hotelbesuch Mijas Costa",
      fr: "Médecin à Mijas | Médecin Privé | Visite Hôtel Mijas Costa",
      fi: "Lääkäri Mijasissa | Yksityinen lääkäri Mijas Costa",
      ar: "طبيب في ميخاس | طبيب خاص | زيارة فندق ميخاس كوستا",
      no: "Lege i Mijas | Privat lege | Hotellbesøk Mijas Costa",
      da: "Læge i Mijas | Privat lege | Hotelbesøg Mijas Costa",
      sv: "Läkare i Mijas | Privat Läkare | Hotellbesök Mijas Costa",
      ru: "Врач в Михасе | Частный доктор Михас-Коста 24/7",
      nl: "Arts in Mijas | Huisarts Mijas Costa & Calahonda 24/7",
    },
    metaDesc: {
      en: "Doctor in Mijas available 24/7. Private doctors visit Mijas Costa, Mijas Pueblo and La Cala. English, German, French speaking.",
      es: "Médico en Mijas disponible 24/7. Médicos privados visitan Mijas Costa, Mijas Pueblo y La Cala.",
      de: "Arzt in Mijas rund um die Uhr. Privatärzte besuchen Mijas Costa, Mijas Pueblo und La Cala.",
      fr: "Médecin à Mijas disponible 24h/24. Médicos privés à Mijas Costa, Mijas Pueblo et La Cala.",
      fi: "Lääkäri Mijasissa saatavilla 24/7. Yksityiset lääkärit vierailevat Mijas Costassa, Mijas Pueblossa ja La Calassa. Englantia, saksaa, ranskaa puhuvat.",
      ar: "طبيب في ميخاس متاح 24/7. أطباء خصوصيون يزورون ميخاس كوستا وميخاس بويبلو ولا كالا. يتحدثون الإنجليزية والألمانية والفرنسية.",
      no: "Lege i Mijas tilgjengelig 24/7. Privatleger besøker Mijas Costa, Mijas Pueblo og La Cala. Engelsk-, tysk-, fransktalende.",
      da: "Læge i Mijas tilgængelig 24/7. Privatlæger besøger Mijas Costa, Mijas Pueblo og La Cala. Taler engelsk, tysk og fransk.",
      sv: "Läkare i Mijas tillgänglig 24/7. Privatläkare besöker Mijas Costa, Mijas Pueblo och La Cala. Engelsktalande.",
      ru: "Частный врач в Михасе и Михас-Коста. Быстрый выезд в отели и виллы. Все документы для страховки.",
      nl: "Privéarts in Mijas en Mijas Costa. Snelle service aan uw hotel of vakantiehuis. Officiële declaraties.",
    },
    h1: {
      en: "Private Doctor in Mijas — Hotel & Home Visits",
      es: "Médico Privado en Mijas — Visitas a Hotel y Domicilio",
      de: "Privatarzt in Mijas — Hotel- und Hausbesuche",
      fr: "Médecin Privé à Mijas — Visites à l'Hôtel et à Domicile",
      fi: "Yksityinen lääkäri Mijasissa — Hotelli- ja kotikäynnit",
      ar: "طبيب خاص في ميخاس — زيارات الفنادق والمنازل",
      no: "Privat lege i Mijas — Hotell- og hjemmebesøk",
      da: "Privat lege i Mijas — Hotel- og hjemmebesøg",
      sv: "Privatläkare i Mijas — Hotell- och Hembesök",
      ru: "Частный врач в Михасе — Вызов в отель 24/7",
      nl: "Privéarts in Mijas — Hotel- en huisbezoek 24/7",
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
