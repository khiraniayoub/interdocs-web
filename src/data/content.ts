// ============================================================
// CONTENT DATA — All localized text, SEO copy, blog posts,
// FAQs, cities, and services for the medical lead-gen site.
// ============================================================

export type Locale = "en" | "es" | "de" | "fr" | "fi" | "ar" | "no" | "da" | "sv";

// ────────────────────────────────────────────────────────────
// PHONE / WHATSAPP CONFIG (update these values)
// ────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "34600000000"; // no + or spaces
export const PHONE_NUMBER = "+34 600 000 000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:+34600000000`;

// ────────────────────────────────────────────────────────────
// LOCALES
// ────────────────────────────────────────────────────────────
export const LOCALES: Locale[] = ["en", "es", "de", "fr", "fi", "ar", "no", "da", "sv"];
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
        "Interdocs coordinates requests with independent licensed medical professionals. We do not ourselves provide medical treatment. In a life-threatening emergency, please call 112.",
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
      disclaimer: "Interdocs coordina solicitudes con profesionales médicos independientes con licencia. No prestamos tratamiento médico directamente. En una emergencia, llame al 112.",
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
      disclaimer: "Interdocs koordiniert Anfragen mit unabhängigen zugelassenen Medizinern. Wir selbst erbringen keine medizinische Behandlung. Im lebensbedrohlichen Notfall rufen Sie bitte 112 an.",
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
      disclaimer: "Interdocs coordonne les demandes avec des professionnels médicaux indépendants agréés. Nous ne fournissons pas nous-mêmes de traitement médical. En cas d'urgence vitale, appelez le 112.",
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
      disclaimer: "Interdocs koordinoi pyyntöjä itsenäisten lisensoitujen lääkäreiden kanssa. Emme itse tarjoa lääketieteellistä hoitoa. Hengenvaarallisessa hätätilanteessa soita numeroon 112.",
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
      disclaimer: "تقوم Interdocs بتنسيق الطلبات مع أطباء مرخصين مستقلين. نحن لا نقدم علاجاً طبياً بأنفسنا. في حالات الطوارئ التي تهدد الحياة، يرجى الاتصال بالرقم 112.",
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
      disclaimer: "Interdocs koordinerer forespørsler med uavhengige lisensierte leger. Vi tilbyr ikke medisinsk behandling selv. Ved livstruende nødsituasjoner, ring 112.",
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
      disclaimer: "Interdocs koordinerer anmodninger med uafhængige autoriserede læger. Vi yder ikke selv lægebehandling. Ring 112 i tilfælde af livsfare.",
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
      disclaimer: "Interdocs samordnar förfrågningar med oberoende legitimerade läkare. Vi tillhandahåller inte medicinsk behandling själva. Vid livshotande nödsituationer, ring 112.",
      rights: "Alla rättigheter förbehållna.",
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
    },
  },
];

// ────────────────────────────────────────────────────────────
// BLOG POSTS
// ────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  localeSlugs: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  metaDesc: Record<Locale, string>;
  date: string;
  dateModified: string;
  readTime: number;
  content: Record<Locale, string>;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-see-a-doctor-malaga-tourist",
    localeSlugs: {
      en: "how-to-see-a-doctor-in-malaga-as-a-tourist",
      es: "como-ver-a-un-medico-en-malaga-siendo-turista",
      de: "wie-man-als-tourist-einen-arzt-in-malaga-aufsucht",
      fr: "comment-consulter-un-medecin-a-malaga-en-tant-que-touriste",
      fi: "miten-nahda-laakari-malagassa-turistina",
      ar: "kayfa-tazur-tabiban-fi-malaga-kasayih",
      no: "hvordan-besoke-en-lege-i-malaga-som-turist",
      da: "hvordan-man-besoeger-en-laege-i-malaga-som-turist",
      sv: "hur-man-besoker-en-lakare-i-malaga-som-turist",
    },
    title: {
      en: "How to See a Doctor in Malaga as a Tourist",
      es: "Cómo Ver a un Médico en Málaga como Turista",
      de: "Wie Man als Tourist einen Arzt in Málaga Aufsucht",
      fr: "Comment Consulter un Médecin à Málaga en Tant que Touriste",
      fi: "Miten päästä lääkärille Málagassa turistina",
      ar: "كيفية زيارة طبيب في مالقة كالسائح",
      no: "Hvordan oppsøke lege i Málaga som turist",
      da: "Hvordan man besøger en læge i Málaga som turist",
      sv: "Hur man besöker en läkare i Málaga som turist",
    },
    excerpt: {
      en: "Getting medical care in Spain as a tourist can be confusing. Here's everything you need to know about seeing a doctor in Malaga — from public hospitals to private home-visit services.",
      es: "Obtener atención médica en España como turista puede ser confuso. Aquí tienes todo lo que necesitas saber sobre ver a un médico en Málaga.",
      de: "Als Tourist medizinische Versorgung in Spanien zu erhalten, kann verwirrend sein. Hier ist alles, was Sie über den Arztbesuch in Málaga wissen müssen.",
      fr: "Obtenir des soins médicaux en Espagne en tant que touriste peut être déroutant. Voici tout ce que vous devez savoir sur la consultation d'un médecin à Málaga.",
      fi: "Lääkärinhoidon saaminen Espanjassa turistina voi olla hämmentävää. Tässä on kaikki mitä sinun tulee tietää lääkärillä käynnistä Málagassa.",
      ar: "قد يكون الحصول على رعاية طبية في إسبانيا كالسائح أمرًا مربكًا. إليك كل ما تحتاج إلى معرفته حول زيارة طبيب في مالقة.",
      no: "Det kan være forvirrende å få medisinsk behandling i Spania som turist. Her er alt du trenger å vite om å oppsøke lege i Málaga.",
      da: "Det kan være forvirrende at få lægehjælp i Spanien som turist. Her er alt, hvad du behøver at vide om at besøge en læge i Málaga.",
      sv: "Att få läkarvård i Spanien som turist kan vara förvirrande. Här är allt du behöver veta om att träffa en läkare i Málaga — från offentliga sjukhus till privata hembesökstjänster.",
    },
    metaTitle: {
      en: "How to See a Doctor in Malaga as a Tourist | Medical Guide",
      es: "Cómo Ver a un Médico en Málaga como Turista | Guía Médica",
      de: "Wie man als Tourist einen Arzt in Málaga aufsucht | Medizinischer Leitfaden",
      fr: "Comment consulter un médecin à Málaga en tant que touriste | Guide médical",
      fi: "Miten päästä lääkärille Málagassa turistina | Lääkäriopas",
      ar: "كيفية زيارة طبيب في مالقة كالسائح | الدليل الطبي",
      no: "Hvordan oppsøke lege i Málaga som turist | Legeguide",
      da: "Hvordan man besøger en læge i Málaga som turist | Lægeguide",
      sv: "Hur man besöker en läkare i Málaga som turist | Läkarhandbok",
    },
    metaDesc: {
      en: "Complete guide on how to see a doctor in Malaga as a tourist. Learn about your options: public hospitals, private clinics and doctor home visit services.",
      es: "Guía completa sobre cómo ver a un médico en Málaga siendo turista. Conoce tus opciones: hospitales públicos, clínicas privadas y servicios de visita médica.",
      de: "Vollständiger Leitfaden, wie man als Tourist in Málaga einen Arzt aufsucht. Erfahren Sie mehr über Ihre Optionen.",
      fr: "Guide complet sur la façon de consulter un médecin à Málaga en tant que touriste. Apprenez vos options.",
      fi: "Täydellinen opas lääkärillä käymiseen Málagassa turistina. Tutustu vaihtoehtoihisi: julkiset sairaalat, yksityiset klinikat ja lääkärin kotikäynnit.",
      ar: "دليل كامل حول كيفية زيارة طبيب في مالقة كالسائح. تعرف على خياراتك: المستشفيات العامة، العيادات الخاصة وخدمات الزيارات المنزلية للأطباء.",
      no: "Komplett guide om hvordan du oppsøker lege i Málaga som turist. Lær om dine alternativer: offentlige sykehus, private klinikker og legehjemmebesøk.",
      da: "Komplet guide til, hvordan man besøger en læge i Málaga som turist. Lær om dine muligheder: offentlige hospitaler, private klinikker og lægehjemmebesøg.",
      sv: "Komplett guide om hur du besöker en läkare i Málaga som turist. Lär dig om dina alternativ: offentliga sjukhus, privata kliniker och läkarhembesökstjänster.",
    },
    date: "2024-06-15",
    dateModified: "2024-06-15",
    readTime: 6,
    content: {
      en: `<h2>Your Options for Medical Care in Málaga</h2>
<p>When you fall ill on holiday in Málaga, you have several options for accessing medical care. Understanding these options ahead of time can save you precious time when you need help most.</p>
<h2>1. Private Doctor Home Visit Service</h2>
<p>The fastest and most convenient option for tourists is a private doctor home visit service. A licensed doctor comes directly to your hotel room or apartment, so you don't have to worry about transportation, language barriers, or navigating an unfamiliar healthcare system.</p>
<h2>2. Private Clinics in Málaga</h2>
<p>Málaga has several private clinics, including those that cater specifically to international patients with English-speaking staff.</p>
<h2>3. Public Hospitals (Emergency)</h2>
<p>For genuine emergencies, the public hospital system provides emergency care.</p>`,
      es: `<h2>Tus Opciones para Atención Médica en Málaga</h2>
<p>Cuando te pones enfermo de vacaciones en Málaga, tienes varias opciones para acceder a la atención médica. Entender estas opciones con anticipación puede ahorrarte un tiempo valioso cuando más lo necesitas.</p>
<h2>1. Servicio de Visita Médica a Domicilio Privado</h2>
<p>La opción más rápida y conveniente para los turistas es un servicio de visita médica a domicilio privado. Un médico con licencia llega directamente a tu habitación de hotel o apartamento.</p>
<h2>2. Clínicas Privadas en Málaga</h2>
<p>Málaga tiene varias clínicas privadas, incluidas las que atienden específicamente a pacientes internacionales con personal que habla inglés.</p>
<h2>3. Hospitales Públicos (Urgencias)</h2>
<p>Para emergencias genuinas, el sistema hospitalario público proporciona atención de urgencias.</p>`,
      de: `<h2>Ihre Optionen für medizinische Versorgung in Málaga</h2>
<p>Wenn Sie im Urlaub in Málaga krank werden, haben Sie mehrere Möglichkeiten, medizinische Versorgung zu erhalten.</p>
<h2>1. Privater Ärztlicher Hausbesuchsdienst</h2>
<p>Die schnellste und bequemste Option für Touristen ist ein privater Hausbesuchsdienst. Ein zugelassener Arzt kommt direkt in Ihr Hotelzimmer oder Apartment.</p>
<h2>2. Privatkliniken in Málaga</h2>
<p>Málaga verfügt über mehrere Privatkliniken, darunter solche, die speziell auf internationale Patienten mit englischsprachigem Personal ausgerichtet sind.</p>
<h2>3. Öffentliche Krankenhäuser (Notfall)</h2>
<p>Bei echten Notfällen bietet das öffentliche Krankenhaussystem Notfallversorgung an.</p>`,
      fr: `<h2>Vos Options pour les Soins Médicaux à Málaga</h2>
<p>Lorsque vous tombez malade en vacances à Málaga, vous avez plusieurs options pour accéder aux soins médicaux.</p>
<h2>1. Service de Visite Médicale à Domicile Privé</h2>
<p>L'option la plus rapide et la plus pratique pour les touristes est un service de visite médicale à domicile. Un médecin agréé vient directement dans votre chambre d'hôtel ou appartement.</p>
<h2>2. Cliniques Privées à Málaga</h2>
<p>Málaga dispose de plusieurs cliniques privées, dont certaines s'adressent spécifiquement aux patients internationaux avec du personnel anglophone.</p>
<h2>3. Hôpitaux Publics (Urgences)</h2>
<p>Pour les vraies urgences, le système hospitalier public fournit des soins d'urgence.</p>`,
      fi: `<h2>Vaihtoehtosi lääkärinhoitoon Málagassa</h2>
<p>Kun sairastut lomallasi Málagassa, sinulla on useita vaihtoehtoja lääkärinhoidon saamiseen.</p>
<h2>1. Yksityislääkärin kotikäyntipalvelu</h2>
<p>Nopein ja mukavin vaihtoehto matkailijoille on yksityislääkärin kotikäyntipalvelu. Laillistettu lääkäri saapuu suoraan hotellihuoneeseesi tai asuntoosi.</p>
<h2>2. Yksityiset klinikat Málagassa</h2>
<p>Málagassa on useita yksityisiä klinikoita, mukaan lukien klinikat, jotka palvelevat erityisesti kansainvälisiä potilaita englanninkielisellä henkilökunnalla.</p>
<h2>3. Julkiset sairaalat (Päivystys)</h2>
<p>Todellisissa hätätilanteissa julkinen sairaalajärjestelmä tarjoaa hätähoitoa.</p>`,
      ar: `<h2>خياراتك للرعاية الطبية في مالقة</h2>
<p>عندما تمرض أثناء عطلتك في مالقة، يكون لديك عدة خيارات للحصول على الرعاية الطبية.</p>
<h2>1. خدمة زيارة الطبيب الخاص للمنزل</h2>
<p>الخيار الأسرع والأكثر ملاءمة للسياح هو خدمة زيارة الطبيب الخاص للمنزل. يأتي طبيب مرخص مباشرة إلى غرفتك في الفندق أو شقتك.</p>
<h2>2. العيادات الخاصة في مالقة</h2>
<p>يوجد في مالقة العديد من العيادات الخاصة، بما في ذلك تلك التي تلبي احتياجات المرضى الدوليين بفرق عمل تتحدث الإنجليزية.</p>
<h2>3. المستشفيات العامة (الطوارئ)</h2>
<p>في حالات الطوارئ الحقيقية، يوفر نظام المستشافيات العامة رعاية الطوارئ.</p>`,
      no: `<h2>Dine alternativer for medisinsk behandling i Málaga</h2>
<p>Når du blir syk på ferie i Málaga, har du flere alternativer for å få medisinsk behandling.</p>
<h2>1. Privat legehjemmebesøk</h2>
<p>Det raskeste og mest praktiske alternativet for turister er et privat legehjemmebesøk. En autorisert lege kommer direkte til hotellrommet eller leiligheten din.</p>
<h2>2. Private klinikker i Málaga</h2>
<p>Málaga har flere private klinikker, inkludert de som henvender seg spesielt til internasjonale pasienter med engelsktalende ansatte.</p>
<h2>3. Offentlige sykehus (Akuttmottak)</h2>
<p>Ved reelle nødsituasjoner tilbyr det offentlige sykehussystemet akutthjelp.</p>`,
      da: `<h2>Dine muligheder for lægehjælp i Málaga</h2>
<p>Når du bliver syg på ferie i Málaga, har du flere muligheder for at få lægehjælp.</p>
<h2>1. Privat lægehjemmebesøg</h2>
<p>Den hurtigste og mest bekvemme mulighed for turister er et privat lægehjemmebesøg. En autoriseret læge kommer direkte til dit hotelværelse eller din lejlighed.</p>
<h2>2. Private klinikker i Málaga</h2>
<p>Málaga har flere private klinikker, herunder nogle der henvender sig specifikt til internationale patienter med engelsktalende personale.</p>
<h2>3. Hospitaler (Skadestue)</h2>
<p>Ved reelle nødsituationer yder det offentlige hospitalsvæsen akut lægehjælp.</p>`,
      sv: `<h2>Dina alternativ för medicinsk vård i Málaga</h2>
<p>När du blir sjuk på semestern i Málaga har du flera alternativ för att få tillgång till läkarvård. Att förstå dessa alternativ i förväg kan spara värdefull tid när du behöver hjälp som mest.</p>
<h2>1. Privat läkarhembesökstjänst</h2>
<p>Det snabbaste och mest bekväma alternativet för turister är ett privat läkarhembesök. En legitimerad läkare kommer direkt till ditt hotellrum eller din lägenhet, så du slipper oroa dig för transport, språkbarriärer eller att navigera i ett främmande vårdsystem.</p>
<h2>2. Privata kliniker i Málaga</h2>
<p>Málaga har flera privata kliniker, inklusive sådana som vänder sig specifikt till internationella patienter med engelsktalande personal.</p>
<h2>3. Offentliga sjukhus (Akutvård)</h2>
<p>För allvarliga nödsituationer erbjuder det offentliga sjukhussystemet akutvård.</p>`,
    },
  },
  {
    slug: "travel-insurance-spain",
    localeSlugs: {
      en: "travel-insurance-spain-what-tourists-need-to-know",
      es: "seguro-de-viaje-en-espana-lo-que-necesitan-saber-los-turistas",
      de: "reiseversicherung-spanien-was-touristen-wissen-muessen",
      fr: "assurance-voyage-espagne-ce-que-les-touristes-doivent-savoir",
      fi: "matkavakuutus-espanjassa-mita-matkailijan-tulee-tietaa",
      ar: "tamin-alsafar-fi-isbania-ma-yajib-ala-alsuyah-marifatuh",
      no: "reiseforsikring-i-spania-hva-turister-ma-vite",
      da: "rejseforsikring-i-spanien-hvad-turister-skal-vide",
      sv: "reseforsakring-i-spanien-vad-turister-maste-veta",
    },
    title: {
      en: "Travel Insurance in Spain: What Tourists Need to Know",
      es: "Seguro de Viaje en España: Lo que los Turistas Deben Saber",
      de: "Reiseversicherung in Spanien: Was Touristen Wissen Müssen",
      fr: "Assurance Voyage en Espagne: Ce que les Touristes Doivent Savoir",
      fi: "Matkavakuutus Espanjassa: Mitä matkailijan tulee tietää",
      ar: "تأمين السفر في إسبانيا: ما يجب على السياح معرفته",
      no: "Reiseforsikring i Spania: Hva turister må vite",
      da: "Rejseforsikring i Spanien: Hvad turister skal vide",
      sv: "Reseförsäkring i Spanien: Vad turister behöver veta",
    },
    excerpt: {
      en: "Understanding your travel insurance coverage before visiting Spain can make all the difference in a medical emergency. Here's what you need to know.",
      es: "Entender tu cobertura de seguro de viaje antes de visitar España puede marcar la diferencia en una emergencia médica.",
      de: "Ihre Reiseversicherungsdeckung zu verstehen, bevor Sie Spanien besuchen, kann in einem medizinischen Notfall den Unterschied machen.",
      fr: "Comprendre votre couverture d'assurance voyage avant de visiter l'Espagne peut faire toute la différence en cas d'urgence médicale.",
      fi: "Matkavakuutuksen kattavuuden ymmärtäminen ennen Espanjaan saapumista voi tehdä suuren eron lääketieteellisessä hätätilanteessa.",
      ar: "إن فهم تغطية تأمين السفر الخاص بك قبل زيارة إسبانيا يمكن أن يصنع كل الفرق في الحالات الطبية الطارئة.",
      no: "Å forstå reiseforsikringsdekningen din før du besøker Spania kan utgjøre hele forskjellen i en medisinsk nødsituasjon.",
      da: "At forstå din rejseforsikringsdækning, før du besøger Spanien, kan gøre hele gør forskellen i en medicinsk nödsituation.",
      sv: "Att förstå ditt reseförsäkringsskydd innan du besöker Spanien kan göra hela skillnaden i en medicinsk nödsituation. Här är vad du behöver veta.",
    },
    metaTitle: {
      en: "Travel Insurance Spain | Medical Care for Tourists | Costa del Sol",
      es: "Seguro de Viaje España | Atención Médica Turistas | Costa del Sol",
      de: "Reiseversicherung Spanien | Medizinische Versorgung für Touristen",
      fr: "Assurance Voyage Espagne | Soins Médicaux Touristes | Costa del Sol",
      fi: "Matkavakuutus Espanja | Lääkäri matkailijoille | Aurinkorannikko",
      ar: "تأمين السفر إسبانيا | الرعاية الطبية للسياح | كوستا ديل سول",
      no: "Reiseforsikring Spania | Medisinsk behandling turister | Costa del Sol",
      da: "Rejseforsikring Spanien | Lægehjælp til turister | Costa del Sol",
      sv: "Reseförsäkring Spanien | Medicinsk vård för turister",
    },
    metaDesc: {
      en: "What does travel insurance cover in Spain? How to claim medical expenses on holiday. Private doctor receipts for insurance claims on the Costa del Sol.",
      es: "¿Qué cubre el seguro de viaje en España? Cómo reclamar gastos médicos de vacaciones. Recibos médicos privados para reclamaciones de seguros.",
      de: "Was deckt die Reiseversicherung in Spanien ab? Wie man medizinische Ausgaben im Urlaub geltend macht.",
      fr: "Que couvre l'assurance voyage en Espagne ? Comment réclamer des frais médicaux en vacances.",
      fi: "Mitä matkavakuutus kattaa Espanjassa? Miten vaatia sairaanhoitokuluja takaisin. Yksityislääkärin kuitit vakuutusyhtiölle.",
      ar: "ماذا يغطي تأمين السفر في إسبانيا؟ كيفية المطالبة بالمصاريف الطبية أثناء العطلة. إيصالات الطبيب الخاص للمطالبة بالتأمين.",
      no: "Hva dekker reiseforsikringen i Spania? Hvordan kreve refusjon for medisinske utgifter på ferie. Private legekvitteringer.",
      da: "Hvad dækker rejseforsikringen i Spanien? Hvordan man anmelder medicinske udgifter på ferien. Private lægekvitteringer.",
      sv: "Vad täcker reseförsäkringen i Spanien? Hur man kräver ersättning för medicinska kostnader på semestern. Privata läkarrecept.",
    },
    date: "2024-07-02",
    dateModified: "2024-07-02",
    readTime: 5,
    content: {
      en: `<h2>Does Travel Insurance Cover Private Doctors in Spain?</h2>
<p>Most comprehensive travel insurance policies cover private medical treatment in Spain, including private doctor home visits. You'll typically need to pay upfront and then claim the costs back from your insurer.</p>
<h2>What You Need for an Insurance Claim</h2>
<ul>
<li>An official medical report from the attending doctor</li>
<li>An itemised receipt showing the cost of the consultation</li>
<li>Any prescriptions issued</li>
</ul>`,
      es: `<h2>¿El Seguro de Viaje Cubre Médicos Privados en España?</h2>
<p>La mayoría de las pólizas de seguro de viaje integrales cubren el tratamiento médico privado en España, incluidas las visitas médicas privadas a domicilio.</p>
<h2>Lo que Necesitas para una Reclamación al Seguro</h2>
<ul>
<li>Un informe médico oficial del médico asistente</li>
<li>Un recibo detallado que muestre el costo de la consulta</li>
<li>Cualquier receta emitida</li>
</ul>`,
      de: `<h2>Deckt die Reiseversicherung private Ärzte in Spanien ab?</h2>
<p>Die meisten umfassenden Reiseversicherungspolicen decken private medizinische Behandlung in Spanien ab, einschließlich privater ärztlicher Hausbesuche.</p>
<h2>Was Sie für einen Versicherungsanspruch benötigen</h2>
<ul>
<li>Ein offizieller Arztbericht des behandelnden Arztes</li>
<li>Eine aufgeschlüsselte Quittung</li>
<li>Ausgestellte Rezepte</li>
</ul>`,
      fr: `<h2>L'assurance voyage couvre-t-elle les médecins privés en Espagne ?</h2>
<p>La plupart des polices d'assurance voyage complètes couvrent les traitements médicaux privés en Espagne, y compris les visites médicales à domicile.</p>
<h2>Ce dont vous avez besoin pour une réclamation d'assurance</h2>
<ul>
<li>Un rapport médical officiel du médecin traitant</li>
<li>Un reçu détaillé</li>
<li>Les ordonnances délivrées</li>
</ul>`,
      fi: `<h2>Kattaako matkavakuutus yksityislääkärit Espanjassa?</h2>
<p>Useimmat kattavat matkavakuutukset korvaavat yksityisen lääkärinhoidon Espanjassa, mukaan lukien yksityislääkärin kotikäynnit. Yleensä maksat ensin itse ja haet sitten korvausta vakuutusyhtiöltäsi.</p>
<h2>Mitä tarvitset vakuutuskorvausta varten</h2>
<ul>
<li>Virallisen lääkärintodistuksen hoitavalta lääkäriltä</li>
<li>Yksilöidyn kuitin, josta käy ilmi konsultaation hinta</li>
<li>Mahdolliset reseptit</li>
</ul>`,
      ar: `<h2>هل يغطي تأمين السفر الأطباء الخصوصيين في إسبانيا؟</h2>
<p>تغطي معظم وثائق تأمين السفر الشاملة العلاج الطبي الخاص في إسبانيا، بما في ذلك زيارات الأطباء الخصوصيين للمنازل. ستحتاج عادةً إلى الدفع مسبقًا ثم المطالبة باسترداد التكاليف من شركة التأمين الخاصة بك.</p>
<h2>ما تحتاجه للمطالبة بالتأمين</h2>
<ul>
<li>تقرير طبي رسمي من الطبيب المعالج</li>
<li>إيصال مفصل يوضح تكلفة الاستشارة</li>
<li>أي وصفات طبية تم إصدارها</li>
</ul>`,
      no: `<h2>Dekker reiseforsikringen privatpraktiserende leger i Spania?</h2>
<p>De fleste omfattende reiseforsikringer dekker privat medisinsk behandling i Spania, inkludert private legehjemmebesøk. Du må vanligvis betale på forhånd og deretter kreve kostnadene refundert fra forsikringsselskapet ditt.</p>
<h2>Hva du trenger for et forsikringskrav</h2>
<ul>
<li>En offisiell medisinsk rapport fra den behandlende legen</li>
<li>En spesifisert kvittering som viser kostnaden for konsultasjonen</li>
<li>Eventuelle resepter som er skrevet ut</li>
</ul>`,
      da: `<h2>Dækker rejseforsikringen private læger i Spanien?</h2>
<p>De fleste omfattende rejseforsikringer dækker privat medicinsk behandling i Spanien, herunder private lægehjemmebesøg. Du skal typisk betale forud og derefter kræve udgifterne refunderet fra dit forsikringsselskab.</p>
<h2>Hvad du skal bruge til en forsikringsanmeldelse</h2>
<ul>
<li>En officiel lægeerklæring fra den behandlende læge</li>
<li>En specificeret kvittering, der viser prisen for konsultationen</li>
<li>Eventuelle udstedte recepter</li>
</ul>`,
      sv: `<h2>Täcker reseförsäkringen privatläkare i Spanien?</h2>
<p>De flesta heltäckande reseförsäkringar täcker privat medicinsk behandling i Spanien, inklusive privata läkarhembesök. Du måste vanligtvis betala på plats och sedan kräva tillbaka kostnaderna från ditt försäkringsbolag.</p>
<h2>Vad du behöver för ett försäkringsärende</h2>
<ul>
<li>Ett officiellt läkarintyg från den behandlende läkaren</li>
<li>Ett specificerat kvitto som visar kostnaden för konsultationen</li>
<li>Eventuella recept som skrivits ut</li>
</ul>`,
    },
  },
  {
    slug: "can-doctor-visit-my-hotel",
    localeSlugs: {
      en: "can-a-doctor-visit-my-hotel-in-spain",
      es: "puede-un-medico-visitar-mi-hotel-en-espana",
      de: "kann-ein-arzt-mein-hotel-in-spanien-besuchen",
      fr: "un-medecin-peut-il-visiter-mon-hotel-en-espagne",
      fi: "voiko-laakari-tulla-hotelliini-espanjassa",
      ar: "hal-yimkin-litabib-ziarat-funduqi-fi-isbania",
      no: "kan-en-lege-besoke-meg-pa-hotellet-i-spania",
      da: "kan-en-laege-besoege-mit-hotel-i-spanien",
      sv: "kan-en-lakare-besoka-mitt-hotell-i-spanien",
    },
    title: {
      en: "Can a Doctor Visit My Hotel in Spain?",
      es: "¿Puede un Médico Visitar Mi Hotel en España?",
      de: "Kann ein Arzt Mein Hotel in Spanien Besuchen?",
      fr: "Un Médecin Peut-il Visiter Mon Hôtel en Espagne ?",
      fi: "Voiko lääkäri tulla hotelliini Espanjassa?",
      ar: "هل يمكن لطبيب زيارة فندقي في إسبانيا؟",
      no: "Kan en lege besøke meg på hotellet i Spania?",
      da: "Kan en læge besøge mit hotel i Spanien?",
      sv: "Kan en läkare besöka mitt hotell i Spanien?",
    },
    excerpt: {
      en: "Yes — private doctors can and do visit tourists in their hotel rooms across the Costa del Sol. Here's how the hotel doctor service works.",
      es: "Sí: los médicos privados pueden y de hecho visitan a turistas en sus habitaciones de hotel en toda la Costa del Sol.",
      de: "Ja — Privatärzte können und besuchen Touristen in ihren Hotelzimmern an der Costa del Sol.",
      fr: "Oui — les médecins privés peuvent et visitent les touristes dans leurs chambres d'hôtel sur la Costa del Sol.",
      fi: "Kyllä — yksityiset lääkärit voivat vierailla ja vierailevatkin matkailijoiden hotellihuoneissa Aurinkorannikolla. Tässä on tietoa palvelusta.",
      ar: "نعم - يمكن للأطباء الخصوصيين زيارة السياح في غرفهم بالفنادق في جميع أنحاء كوستا ديل سول. إليك كيف تعمل الخدمة.",
      no: "Ja – privatleger kan besøke, og besøker ofte, turister på hotellrommet over hele Costa del Sol. Slik fungerer tjenesten.",
      da: "Ja – privatlæger kan og besøger turister på deres hotelværelser over hele Costa del Sol. Sådan fungerer hotellægeværktøjet.",
      sv: "Ja – privata läkare besöker regelbundet turister på deras hotellrum på Costa del Sol. Så här fungerar hotelläkarservicen.",
    },
    metaTitle: {
      en: "Can a Doctor Visit My Hotel in Spain? | Hotel Doctor Service Málaga",
      es: "¿Puede un Médico Visitar Mi Hotel? | Médico a Hotel Málaga",
      de: "Kann ein Arzt mein hotel besuchen? | Hoteldoktor-Service Málaga",
      fr: "Un médecin peut-il visiter mon hôtel ? | Service Médecin Hôtel Málaga",
      fi: "Voiko lääkäri tulla hotelliini Espanjassa? | Hotellilääkäri Málaga",
      ar: "هل يمكن لطبيب زيارة فندقي في إسبانيا؟ | خدمة طبيب الفندق بمالقة",
      no: "Kan en lege besøke mitt hotell i Spania? | Hotell-legetjeneste Málaga",
      da: "Kan en læge besøge mit hotel i Spanien? | Hotellæge service Málaga",
      sv: "Kan en läkare besöka mitt hotell? | Hotelläkare Málaga",
    },
    metaDesc: {
      en: "How the hotel doctor service works in Málaga and the Costa del Sol. Private doctors visit your room within the hour. Includes info on costs, insurance and languages.",
      es: "Cómo funciona el servicio de médico de hotel en Málaga y la Costa del Sol. Médicos privados visitan tu habitación en una hora.",
      de: "So funktioniert der Hoteldoktor-Service in Málaga und an der Costa del Sol.",
      fr: "Comment fonctionne le service de médecin à l'hôtel à Málaga et sur la Costa del Sol.",
      fi: "Miten hotellilääkäripalvelu toimii Málagassa ja Aurinkorannikolla. Yksityinen lääkäri vierailee huoneessasi noin tunnissa.",
      ar: "كيف تعمل خدمة طبيب الفندق في مالقة وكوستا ديل سول. يزور الأطباء الخصوصيون غرفتك في غضون ساعة.",
      no: "Hvordan hotell-legetjenesten fungerer i Málaga og på Costa del Sol. Private leger besøker rommet ditt innen en time.",
      da: "Hvordan hotellæge-tjenesten fungerer i Málaga og på Costa del Sol. Private læger besøger dit værelse inden for en time.",
      sv: "Hur hotelläkarservicen fungerar i Málaga och på Costa del Sol. Privata läkare besöker ditt rum inom en timme. Information om kostnader och försäkring.",
    },
    date: "2024-07-10",
    dateModified: "2024-07-10",
    readTime: 4,
    content: {
      en: `<h2>Hotel Doctor Service on the Costa del Sol</h2>
<p>Yes, private doctors regularly visit tourists in their hotel rooms across the Costa del Sol. This is a well-established service designed specifically for international visitors who need medical attention without leaving the comfort of their accommodation.</p>
<h2>How It Works</h2>
<ol>
<li>You contact us by WhatsApp or phone with your hotel name, room number and symptoms</li>
<li>We dispatch the nearest available doctor to your location</li>
<li>The doctor arrives at your room and carries out a full medical consultation</li>
</ol>`,
      es: `<h2>Servicio de Médico de Hotel en la Costa del Sol</h2>
<p>Sí, los médicos privados visitan regularmente a turistas en sus habitaciones de hotel en toda la Costa del Sol.</p>
<h2>Cómo Funciona</h2>
<ol>
<li>Nos contactas por WhatsApp o teléfono con el nombre de tu hotel, número de habitación y síntomas</li>
<li>Enviamos al médico disponible más cercano</li>
<li>El médico llega a tu habitación y realiza una consulta médica completa</li>
</ol>`,
      de: `<h2>Hoteldoktor-Service an der Costa del Sol</h2>
<p>Ja, Privatärzte besuchen regelmäßig Touristen in ihren Hotelzimmern an der Costa del Sol.</p>
<h2>So Funktioniert Es</h2>
<ol>
<li>Sie kontaktieren uns per WhatsApp oder Telefon mit Ihrem Hotelnamen, Zimmernummer und Symptomen</li>
<li>Wir entsenden den nächstverfügbaren Arzt</li>
<li>Der Arzt kommt in Ihr Zimmer und führt eine vollständige medizinische Konsultation durch</li>
</ol>`,
      fr: `<h2>Service Médecin à l'Hôtel sur la Costa del Sol</h2>
<p>Oui, les médecins privés visitent régulièrement les touristes dans leurs chambres d'hôtel sur la Costa del Sol.</p>
<h2>Comment Ça Fonctionne</h2>
<ol>
<li>Vous nous contactez par WhatsApp ou téléphone avec le nom de votre hôtel, le numéro de chambre et vos symptômes</li>
<li>Nous dépêchons le médecin disponible le plus proche</li>
<li>Le médecin arrive dans votre chambre et effectue une consultation médicale complète</li>
</ol>`,
      fi: `<h2>Hotellilääkäripalvelu Aurinkorannikolla</h2>
<p>Kyllä, yksityiset lääkärit vierailevat säännöllisesti matkailijoiden hotellihuoneissa Aurinkorannikolla. Tämä on vakiintunut palvelu, joka on suunniteltu erityisesti kansainvälisille vieraille.</p>
<h2>Miten se toimii</h2>
<ol>
<li>Ota meihin yhteyttä WhatsAppilla tai puhelimitse ja ilmoita hotellisi nimi, huonenumero ja oireet</li>
<li>Lähetämme lähimmän vapaan lääkärin luoksesi</li>
<li>Lääkäri saapuu huoneeseesi ja suorittaa täyden lääketieteellisen konsultaation</li>
</ol>`,
      ar: `<h2>خدمة طبيب الفندق في كوستا ديل سول</h2>
<p>نعم، يزور الأطباء الخصوصيون بانتظام السياح في غرفهم بالفنادق في جميع أنحاء كوستا ديل سول. هذه خدمة مخصصة للزوار الدوليين.</p>
<h2>كيف تعمل</h2>
<ol>
<li>تواصل معنا عبر الواتساب أو الهاتف واذكر اسم فندقك ورقم الغرفة والأعراض</li>
<li>نرسل أقرب طبيب متاح إلى موقعك</li>
<li>يصل الطبيب إلى غرفتك ويجري استشارة طبية كاملة</li>
</ol>`,
      no: `<h2>Hotell-legetjeneste på Costa del Sol</h2>
<p>Ja, privatleger besøker regelmessig turister på hotellrommene deres over hele Costa del Sol. Dette er en etablert tjeneste designet spesielt for internasjonale besøkende.</p>
<h2>Slik fungerer det</h2>
<ol>
<li>Du kontakter oss på WhatsApp or telefon med hotellnavn, romnummer og symptomer</li>
<li>Vi sender den nærmeste tilgjengelige legen til deg</li>
<li>Legen ankommer rommet ditt og utfører en fullstendig medisinsk konsultasjon</li>
</ol>`,
      da: `<h2>Hotellæge-service på Costa del Sol</h2>
<p>Ja, privatlæger besøger regelmæssigt turister på deres hotelværelser over hele Costa del Sol. Dette er en veletableret service designet specifikt til internationale gæster.</p>
<h2>Sådan fungerer det</h2>
<ol>
<li>Du kontakter os via WhatsApp or telefon med dit hotelnavn, værelsesnummer og symptomer</li>
<li>Vi sender den nærmeste ledige læge til din placering</li>
<li>Lægen ankommer til dit værelse og udfører en komplet medicinsk konsultation</li>
</ol>`,
      sv: `<h2>Hotelläkarservice på Costa del Sol</h2>
<p>Ja, privata läkare besöker regelbundet turister på deras hotellrum över hela Costa del Sol. Detta är en väletablerad tjänst utformad specifikt för internationella besökare som behöver läkarvård utan att lämna sitt boende.</p>
<h2>Hur det fungerar</h2>
<ol>
<li>Du kontaktar oss via WhatsApp eller telefon med ditt hotellnamn, rumsnummer och symptom</li>
<li>Vi skickar den närmaste lediga läkaren till din plats</li>
<li>Läkaren anländer till ditt rum och utför en fullständig medicinsk konsultation</li>
</ol>`,
    },
  },
  {
    slug: "english-speaking-doctors-malaga",
    localeSlugs: {
      en: "english-speaking-doctors-malaga",
      es: "medicos-que-hablan-ingles-malaga",
      de: "englischsprachige-aerzte-malaga",
      fr: "medecins-anglophones-malaga",
      fi: "englanninkieliset-laakarit-malagassa",
      ar: "atiba-yatahadatahuna-alingliziat-fi-malaga",
      no: "engelsktalende-leger-i-malaga",
      da: "engelsktalende-laeger-i-malaga",
      sv: "engelsktalande-lakare-i-malaga",
    },
    title: {
      en: "English Speaking Doctors in Málaga",
      es: "Médicos que Hablan Inglés en Málaga",
      de: "Englischsprachige Ärzte in Málaga",
      fr: "Médecins Anglophones à Málaga",
      fi: "Englanninkieliset lääkärit Málagassa",
      ar: "أطباء يتحدثون الإنجليزية في مالقة",
      no: "Engelsktalende leger i Málaga",
      da: "Engelsktalende læger i Málaga",
      sv: "Engelsktalande läkare i Málaga",
    },
    excerpt: {
      en: "Finding an English-speaking doctor in Málaga is easier than you think. Our partner doctors all speak fluent English and will visit you wherever you're staying.",
      es: "Encontrar un médico que hable inglés en Málaga es más fácil de lo que crees.",
      de: "Einen englischsprachigen Arzt in Málaga zu finden ist einfacher als Sie denken.",
      fr: "Trouver un médecin anglophone à Málaga est plus facile que vous ne le pensez.",
      fi: "Englanninkielisen lääkärin löytäminen Málagassa on helpompaa kuin luulet. Kaikki kumppanilääkärimme puhuvat sujuvaa englantia.",
      ar: "العثور على طبيب يتحدث الإنجليزية في مالقة أسهل مما تعتقد. يتحدث جميع الأطباء الشركاء لدينا الإنجليزية بطلاقة.",
      no: "Å finne en engelsktalende lege i Málaga er enklere enn du tror. Våre partnerleger snakker flytende engelsk.",
      da: "Det er nemmere at finde en engelsktalende læge i Málaga, end du tror. Vores partnerlæger taler alle flydende engelsk.",
      sv: "Att hitta en engelsktalande läkare i Málaga är enklare än du tror. Alla våra partnerläkare talar flytande engelska och besöker dig var du än bor.",
    },
    metaTitle: {
      en: "English Speaking Doctors Málaga | English Doctor Home Visit",
      es: "Médicos que Hablan Inglés Málaga | Visita Médica a Domicilio",
      de: "Englischsprachige Ärzte Málaga | Ärztlicher Hausbesuch",
      fr: "Médecins Anglophones Málaga | Visite Médicale à Domicile",
      fi: "Englanninkieliset lääkärit Málaga | Lääkärin kotikäynti",
      ar: "أطباء يتحدثون الإنجليزية في مالقة | زيارة منزلية لطبيب إنجليزي",
      no: "Engelsktalende leger Málaga | Legehjemmebesøk",
      da: "Engelsktalende læger Málaga | Lægehjemmebesøg",
      sv: "Engelsktalande Läkare Málaga | Läkarhembesök",
    },
    metaDesc: {
      en: "Find an English speaking doctor in Málaga. Our doctors visit your hotel or apartment 24/7. Fluent English, professional care, medical certificates for insurance.",
      es: "Encuentra un médico que hable inglés en Málaga. Nuestros médicos visitan tu hotel o apartamento 24/7.",
      de: "Finden Sie einen englischsprachigen Arzt in Málaga. Unsere Ärzte besuchen Ihr Hotel oder Apartment rund um die Uhr.",
      fr: "Trouvez un médecin anglophone à Málaga. Nos médecins visitent votre hôtel ou appartement 24h/24.",
      fi: "Löydä englanninkielinen lääkäri Málagassa. Lääkärimme vierailevat hotellissasi 24/7. Sujuva englanti, lääkärintodistukset vakuutukseen.",
      ar: "ابحث عن طبيب يتحدث الإنجليزية في مالقة. يزور أطباؤنا فندقك أو شقتك 24/7. إنجليزية طليقة ورعاية مهنية.",
      no: "Finn en engelsktalende lege i Málaga. Våre leger besøker ditt hotell eller din leilighet 24/7. Flytende engelsk, profesjonell behandling.",
      da: "Find en engelsktalende læge i Málaga. Vores læger besøger dit hotel eller din lejlighed 24/7. Flydende engelsk, professionel pleje.",
      sv: "Hitta en engelsktalande läkare i Málaga. Våra läkare besöker ditt hotel eller din lägenhet 24/7. Flytande engelska, professionell vård.",
    },
    date: "2024-07-18",
    dateModified: "2024-07-18",
    readTime: 4,
    content: {
      en: `<h2>Why You Need an English-Speaking Doctor on Holiday</h2>
<p>When you're unwell on holiday, clear communication with your doctor is essential. Trying to describe your symptoms in a second language can lead to misunderstandings.</p>
<p>Our partner doctors all speak fluent English. Many also speak German and French.</p>`,
      es: `<h2>Por Qué Necesitas un Médico que Hable Inglés en Vacaciones</h2>
<p>Cuando estás enfermo de vacaciones, la comunicación clara con tu médico es esencial.</p>
<p>Nuestros médicos colaboradores hablan inglés con fluidez. Muchos también hablan alemán y francés.</p>`,
      de: `<h2>Warum Sie im Urlaub einen englischsprachigen Arzt brauchen</h2>
<p>Wenn Sie im Urlaub krank sind, ist eine klare Kommunikation mit Ihrem Arzt unerlässlich.</p>
<p>Unsere Partnerärzte sprechen alle fließend Englisch. Viele sprechen auch Deutsch und Französisch.</p>`,
      fr: `<h2>Pourquoi vous avez besoin d'un médecin anglophone en vacances</h2>
<p>Lorsque vous êtes malade en vacances, une communication claire avec votre médecin est essentielle.</p>
<p>Nos médecins partenaires parlent tous couramment anglais. Beaucoup parlent aussi allemand et français.</p>`,
      fi: `<h2>Miksi tarvitset englanninkielisen lääkärin lomalla</h2>
<p>Kun olet sairas lomalla, selkeä viestintä lääkärin kanssa on välttämätöntä. Oireiden kuvailu vieraalla kielellä voi johtaa väärinkäsityksiin.</p>
<p>Kumppanilääkärimme puhuvat sujuvaa englantia. Monet puhuvat myös saksaa ja ranskaa.</p>`,
      ar: `<h2>لماذا تحتاج إلى طبيب يتحدث الإنجليزية أثناء الإجازة</h2>
<p>عندما تكون مريضًا في الإجازة، فإن التواصل الواضح مع طبيبك أمر ضروري. قد تؤدي محاولة وصف أعراضك بلغة ثانية إلى حدوث سوء تفاهم.</p>
<p>يتحدث جميع الأطباء الشركاء لدينا اللغة الإنجليزية بطلاقة. يتحدث الكثير منهم أيضًا الألمانية والفرنسية.</p>`,
      no: `<h2>Hvorfor du trenger en engelsktalende lege på ferie</h2>
<p>Når du er syk på ferie, er tydelig kommunikasjon med legen din avgjørende. Å prøve å beskrive symptomene dine på et annet språk kan føre til misforståelser.</p>
<p>Våre partnerleger snakker flytende engelsk. Mange snakker også tysk og fransk.</p>`,
      da: `<h2>Hvorfor du har brug for en engelsktalende læge på ferien</h2>
<p>Når du er syg på ferien, er klar kommunikation med din læge afgørende. At prøve at beskrive dine symptomer på et andet sprog kan føre til misforståelser.</p>
<p>Vores partnerlæger taler alle flydende engelsk. Mange taler også tysk og fransk.</p>`,
      sv: `<h2>Varför du behöver en engelsktalande läkare på semestern</h2>
<p>När du är sjuk på semestern är tydlig kommunikation med din läkare avgörande. Att försöka beskriva dina symptom på ett annat språk kan leda till missförstånd.</p>
<p>Alla våra partnerläkare talar flytande engelska. Många talar även tyska och franska.</p>`,
    },
  },
  {
    slug: "medical-care-families-holiday",
    localeSlugs: {
      en: "medical-care-for-families-on-holiday-costa-del-sol",
      es: "atencion-medica-familias-vacaciones-costa-del-sol",
      de: "medizinische-versorgung-fuer-familien-im-urlaub-costa-del-sol",
      fr: "soins-medicaux-pour-les-familles-en-vacances-costa-del-sol",
      fi: "lapsiperheiden-laakarihoito-lomalla-aurinkorannikolla",
      ar: "alriaayat-altibiyat-lilaayilat-fi-alajazat-kusta-dil-sul",
      no: "medisinsk-behandling-for-familier-pa-ferie-costa-del-sol",
      da: "laegehjaelp-til-familier-paa-ferie-costa-del-sol",
      sv: "lakare-for-familjer-pa-semester-costa-del-sol",
    },
    title: {
      en: "Medical Care for Families on Holiday in the Costa del Sol",
      es: "Atención Médica para Familias de Vacaciones en la Costa del Sol",
      de: "Medizinische Versorgung für Familien im Urlaub an der Costa del Sol",
      fr: "Soins Médicaux pour les Familles en Vacances sur la Costa del Sol",
      fi: "Perheiden lääkärihoito lomalla Aurinkorannikolla",
      ar: "الرعاية الطبية للعائلات أثناء الإجازة في كوستا ديل سول",
      no: "Medisinsk behandling for familier på ferie på Costa del Sol",
      da: "Lægehjælp til familier på ferie på Costa del Sol",
      sv: "Läkarvård för familjer på semester på Costa del Sol",
    },
    excerpt: {
      en: "When a child or family member falls ill on holiday, you need fast access to a doctor who speaks your language. Our family-friendly medical service covers all ages.",
      es: "Cuando un niño o familiar se enferma de vacaciones, necesitas acceso rápido a un médico que hable tu idioma.",
      de: "Wenn ein Kind oder Familienmitglied im Urlaub krank wird, brauchen Sie schnellen Zugang zu einem Arzt, der Ihre Sprache spricht.",
      fr: "Quand un enfant ou un membre de la famille tombe malade en vacances, vous avez besoin d'un accès rapide à un médecin qui parle votre langue.",
      fi: "Kun lapsi tai perheenjäsen sairastuu lomalla, tarvitset nopean yhteyden lääkäriin, joka puhuu kieltäsi.",
      ar: "عندما يمرض طفل أو أحد أفراد العائلة أثناء الإجازة، فإنك تحتاج إلى وصول سريع إلى طبيب يتحدث لغتك.",
      no: "Når et barn eller familiemedlem blir sykt på ferie, trenger du rask tilgang til en lege som snakker ditt språk.",
      da: "Når et barn eller et familiemedlem bliver syg på ferien, har du brug for hurtig adgang til en læge, der taler dit sprog.",
      sv: "Når et barn eller et familiemedlem bliver syg på ferien, har du brug for hurtig adgang til en læge, der taler dit sprog. Vår familjevänliga tjänst täcker alla åldrar.",
    },
    metaTitle: {
      en: "Family Medical Care on Holiday Costa del Sol | Children's Doctor",
      es: "Atención Médica Familiar Vacaciones Costa del Sol | Médico Infantil",
      de: "Familienmedizinische Versorgung im Urlaub Costa del Sol | Kinderarzt",
      fr: "Soins Médicaux Familiaux en Vacances Costa del Sol | Médecin Enfants",
      fi: "Perheen lääkärihoito lomalla Aurinkorannikolla | Lastenlääkäri",
      ar: "الرعاية الطبية العائلية في الإجازة كوستا ديل سول | طبيب الأطفال",
      no: "Familiemedisin på ferie Costa del Sol | Barnelege",
      da: "Familiemedicin på ferie Costa del Sol | Børnelæge",
      sv: "Läkarvård för familjer Costa del Sol | Barnläkare",
    },
    metaDesc: {
      en: "Family doctor service on the Costa del Sol. English-speaking doctors visit your hotel or apartment for children and adults. Paediatric care available 24/7.",
      es: "Servicio de médico de familia en la Costa del Sol. Médicos que hablan inglés visitan tu hotel o apartamento para niños y adultos.",
      de: "Familienarzt-Service an der Costa del Sol. Englischsprachige Ärzte besuchen Ihr Hotel für Kinder und Erwachsene.",
      fr: "Service de médecin de famille sur la Costa del Sol. Des médecins anglophones visitent votre hôtel pour enfants et adultes.",
      fi: "Perhelääkäripalvelu Aurinkorannikolla. Englanninkieliset lääkärit vierailevat hotellissasi lapsia ja aikuisia varten. Saatavilla 24/7.",
      ar: "خدمة طبيب العائلة في كوستا ديل سول. يزور أطباء يتحدثون الإنجليزية فندقك أو شقتك للأطفال والكبار.",
      no: "Familielegetjeneste på Costa del Sol. Engelsktalende leger besøker ditt hotell for barn og voksne. Tilgjengelig 24/7.",
      da: "Familielæge-service på Costa del Sol. Engelsktalende læger besøger dit hotel eller din lejlighed til børn og voksne. Akut lægehjælp 24/7.",
      sv: "Familjeläkarservice på Costa del Sol. Engelsktalande läkare besöker ditt hotell eller din lägenhet för barn och vuxna. Pediatrisk vård tillgänglig 24/7.",
    },
    date: "2024-08-01",
    dateModified: "2024-08-01",
    readTime: 5,
    content: {
      en: `<h2>Children's Medical Care on Holiday</h2>
<p>A sick child on holiday is stressful enough without having to navigate a foreign healthcare system. Our doctors are experienced in treating children of all ages, from infants to teenagers.</p>
<h2>Common Conditions We Treat in Children</h2>
<ul>
<li>Fever and high temperature</li>
<li>Gastroenteritis and stomach bugs</li>
<li>Ear infections and earache</li>
<li>Skin rashes and allergic reactions</li>
<li>Respiratory infections and coughs</li>
<li>Sunburn and heat exhaustion</li>
</ul>
<h2>Adult Medical Care for Families</h2>
<p>We also treat adult family members for a full range of conditions. Our doctors can see multiple patients in one visit if necessary, making it convenient for the whole family.</p>`,
      es: `<h2>Atención Médica para Niños en Vacaciones</h2>
<p>Un niño enfermo de vacaciones es suficientemente estresante sin tener que navegar por un sistema sanitario extranjero.</p>
<h2>Condiciones Comunes que Tratamos en Niños</h2>
<ul>
<li>Fiebre y temperatura alta</li>
<li>Gastroenteritis</li>
<li>Infecciones de oído</li>
<li>Erupciones cutáneas y reacciones alérgicas</li>
</ul>`,
      de: `<h2>Kinderkrankenpflege im Urlaub</h2>
<p>Ein krankes Kind im Urlaub ist stressig genug, ohne ein fremdes Gesundheitssystem navigieren zu müssen.</p>
<h2>Häufige Erkrankungen, die wir bei Kindern behandeln</h2>
<ul>
<li>Fieber und hohe Temperatur</li>
<li>Magen-Darm-Infektionen</li>
<li>Ohrenentzündungen</li>
<li>Hautausschläge und allergische Reaktionen</li>
</ul>`,
      fr: `<h2>Soins médicaux pour enfants en vacances</h2>
<p>Un enfant malade en vacances est déjà suffisamment stressant sans avoir à naviguer dans un système de santé étranger.</p>
<h2>Conditions courantes que nous traitons chez les enfants</h2>
<ul>
<li>Fièvre et haute température</li>
<li>Gastro-entérite</li>
<li>Infections auriculaires</li>
<li>Éruptions cutanées et réactions allergiques</li>
</ul>`,
      fi: `<h2>Lasten lääkärihoito lomalla</h2>
<p>Sairas lapsi lomalla on erittäin stressaavaa ilman tarvetta navigoida vieraassa terveydenhuoljaan terveydenhuoltojärjestelmässä. Lääkärimme ovat kokeneita kaikenikäisten lasten hoidossa.</p>
<h2>Yleiset hoidettavat vaivat lapsilla</h2>
<ul>
<li>Kuume ja korkea lämpötila</li>
<li>Vatsatauti ja vatsavaivat</li>
<li>Korvatulehdukset ja korvakipu</li>
<li>Ihottumat ja allergiset reaktiot</li>
</ul>`,
      ar: `<h2>الرعاية الطبية للأطفال أثناء الإجازة</h2>
<p>إن وجود طفل مريض أثناء الإجازة أمر مرهق بما فيه الكفاية دون الحاجة إلى التعامل مع نظام رعاية صحية أجنبي. أطباؤنا ذوو خبرة في علاج الأطفال من جميع الأعمار.</p>
<h2>الحالات الشائعة التي نعالجها لدى الأطفال</h2>
<ul>
<li>الحمى وارتفاع درجة الحرارة</li>
<li>التهاب المعدة والأمعاء ومشاكل المعدة</li>
<li>التهابات الأذن وآلامها</li>
<li>الطفح الجلدي وردود الفعل التحسسية</li>
</ul>`,
      no: `<h2>Medisinsk behandling for barn på ferie</h2>
<p>Et sykt barn på ferie er stressende nok uten å måtte navigere i et fremmed helsevesen. Våre leger har lang erfaring med å behandle barn i alle aldre.</p>
<h2>Vanlige tilstander vi behandler hos barn</h2>
<ul>
<li>Feber og høy temperatur</li>
<li>Omgangssyke og mageproblemer</li>
<li>Ørebetennelse og øreverk</li>
<li>Bleieutslett og allergiske reaksjoner</li>
</ul>`,
      da: `<h2>Lægehjælp til børne på ferien</h2>
<p>Et sygt barn på ferien er stressende nok i sig selv uden at skulle navigere i et fremmed sundhedsvæsen. Vores læger har stor erfaring med at behandle børn i alle aldre.</p>
<h2>Almindelige tilstande vi behandler hos børn</h2>
<ul>
<li>Feber og høj temperatur</li>
<li>Maveinfluenza og maveproblemer</li>
<li>Øreinfektioner og ørepine</li>
<li>Udslæt og allergiske reaktioner</li>
</ul>`,
      sv: `<h2>Barnläkarvård på semestern</h2>
<p>Ett sjukt barn på semestern är stressigt nog utan att behöva navigera i ett främmande vårdsystem. Våra läkare har stor erfarenhet av att behandla barn i alla åldrar.</p>
<h2>Vanliga tillstånd vi behandlar hos barn</h2>
<ul>
<li>Feber och hög temperatur</li>
<li>Magsjuka och magproblem</li>
<li>Öroninflammation och öronvärk</li>
<li>Utslag och allergiska reaktioner</li>
</ul>`,
    },
  },
  {
    slug: "emergency-medical-assistance-costa-del-sol",
    localeSlugs: {
      en: "emergency-medical-assistance-costa-del-sol",
      es: "asistencia-medica-de-emergencia-costa-del-sol",
      de: "notfallmedizinische-hilfe-costa-del-sol",
      fr: "assistance-medicale-urgence-costa-del-sol",
      fi: "hata-laakariapu-aurinkorannikolla",
      ar: "musaadat-medical-emergencies-costa-del-sol",
      no: "akutt-legehjelp-pa-costa-del-sol",
      da: "akut-laegehjaelp-paa-costa-del-sol",
      sv: "akut-medicinsk-hjalp-pa-costa-del-sol",
    },
    title: {
      en: "Emergency Medical Assistance on the Costa del Sol",
      es: "Asistencia Médica de Emergencia en la Costa del Sol",
      de: "Notfallmedizinische Hilfe an der Costa del Sol",
      fr: "Assistance Médicale d'Urgence sur la Costa del Sol",
      fi: "Hätätilanteen lääkäriapu Aurinkorannikolla",
      ar: "المساعدة الطبية الطارئة في كوستا ديل سول",
      no: "Akutt medisinsk hjelp på Costa del Sol",
      da: "Akut lægehjælp på Costa del Sol",
      sv: "Akut medicinsk hjälp på Costa del Sol",
    },
    excerpt: {
      en: "What to do in a medical emergency on the Costa del Sol. From calling 112 to arranging a private doctor, here's how to get the help you need fast.",
      es: "Qué hacer en una emergencia médica en la Costa del Sol. Desde llamar al 112 hasta contratar un médico privado.",
      de: "Was in einem medizinischen Notfall an der Costa del Sol zu tun ist.",
      fr: "Que faire en cas d'urgence médicale sur la Costa del Sol.",
      fi: "Mitä tehdä lääketieteellisessä hätätilanteessa Aurinkorannikolla. Tietoa hätänumeroista ja yksityislääkärin tilaamisesta.",
      ar: "ماذا تفعل في الحالات الطبية الطارئة في كوستا ديل سول. من الاتصال برقم 112 إلى ترتيب طبيب خاص.",
      no: "Hva du skal gjøre ved en medisinsk nødsituasjon på Costa del Sol. Fra å ringe 112 til å kontakte privatlege.",
      da: "Hvad du skal gøre i en medicinsk nødsituation på Costa del Sol. Fra at ringe 112 til at arrangere en privat læge.",
      sv: "Vad du ska göra vid en medicinsk nödsituation på Costa del Sol. Från att ringa 112 till att ordna en privatläkare.",
    },
    metaTitle: {
      en: "Emergency Medical Assistance Costa del Sol | Doctor Now Málaga",
      es: "Asistencia Médica Urgente Costa del Sol | Médico Urgente Málaga",
      de: "Notfallmedizinische Hilfe Costa del Sol | Arzt jetzt Málaga",
      fr: "Assistance Médicale d'Urgence Costa del Sol | Médecin Urgent Málaga",
      fi: "Hätälääkäriapu Aurinkorannikolla | Lääkäri heti Málaga",
      ar: "المساعدة الطبية الطارئة كوستا ديل سول | طبيب الآن مالقة",
      no: "Akutt medisinsk hjelp Costa del Sol | Lege nå Málaga",
      da: "Akut lægehjælp Costa del Sol | Læge nu Málaga",
      sv: "Akut Medicinsk Hjälp Costa del Sol | Läkare Nu Málaga",
    },
    metaDesc: {
      en: "Emergency medical assistance on the Costa del Sol. Know when to call 112, when to use a private doctor, and how to get fast care as a tourist in Málaga.",
      es: "Asistencia médica de emergencia en la Costa del Sol. Saber cuándo llamar al 112 y cómo obtener atención rápida como turista.",
      de: "Notfallmedizinische Hilfe an der Costa del Sol. Wann Sie 112 anrufen und wie Sie als Tourist schnelle Versorgung erhalten.",
      fr: "Assistance médicale d'urgence sur la Costa del Sol. Savoir quand appeler le 112 et comment obtenir des soins rapides en tant que touriste.",
      fi: "Lääkärin apu hätätilanteessa Aurinkorannikolla. Tiedä milloin soittaa 112, milloin käyttää yksityislääkäriä ja miten saada nopeaa hoitoa.",
      ar: "المساعدة الطبية الطارئة في كوستا ديل سول. تعرف على وقت الاتصال برقم 112، ومتى تستعين بطبيب خاص، وكيفية الحصول على رعاية سريعة.",
      no: "Akutt medisinsk hjelp på Costa del Sol. Vit når du skal ringe 112, når du skal bruke privatlege, og hvordan du får rask hjelp.",
      da: "Akut lægehjælp på Costa del Sol. Vide, hvornår du skal ringe 112, hvornår du skal bruge en privat læge, og hvordan du får hurtig hjælp.",
      sv: "Akut medicinsk hjälp på Costa del Sol. Vet när du ska ringa 112, när du ska använda en privatläkare och hur du får snabb vård som turist i Málaga.",
    },
    date: "2024-08-12",
    dateModified: "2024-08-12",
    readTime: 5,
    content: {
      en: `<h2>In a Life-Threatening Emergency, Always Call 112</h2>
<p>If you are experiencing a life-threatening emergency such as a heart attack, stroke, severe trauma or loss of consciousness, call 112 immediately. This is Spain's emergency number and operators speak English. Emergency services are free for everyone.</p>
<h2>For Non-Life-Threatening Medical Issues</h2>
<p>For urgent but non-life-threatening conditions — such as high fever, vomiting, chest pain, severe headache, severe allergic reaction, or a child who is very unwell — a private doctor home visit is often the fastest way to receive professional medical attention.</p>
<p>Our doctors can be with you within 45–60 minutes and can assess whether you need hospital care or can be treated at your location.</p>
<h2>Useful Emergency Numbers in Spain</h2>
<ul>
<li><strong>112</strong> — General emergency (police, fire, ambulance)</li>
<li><strong>061</strong> — Medical emergency (Andalucía)</li>
<li><strong>091</strong> — National Police</li>
<li><strong>062</strong> — Civil Guard</li>
</ul>`,
      es: `<h2>En una Emergencia que Ponga en Peligro la Vida, Llama Siempre al 112</h2>
<p>Si experimentas una emergencia que ponga en peligro tu vida, llama al 112 inmediatamente. Este es el número de emergencias de España.</p>
<h2>Para Problemas Médicos que No Pongan en Peligro la Vida</h2>
<p>Para condiciones urgentes pero no críticas, una visita médica privada a domicilio suele ser la forma más rápida de recibir atención médica profesional.</p>`,
      de: `<h2>In einem lebensbedrohlichen Notfall: Rufen Sie immer 112 an</h2>
<p>Wenn Sie einen lebensbedrohlichen Notfall erleben, rufen Sie sofort 112 an. Das ist Spaniens Notrufnummer.</p>
<h2>Bei nicht lebensbedrohlichen medizinischen Problemen</h2>
<p>Bei dringenden, aber nicht lebensbedrohlichen Erkrankungen ist ein privater Hausbesuch oft der schnellste Weg zur professionellen medizinischen Versorgung.</p>`,
      fr: `<h2>En cas d'urgence vitale, appelez toujours le 112</h2>
<p>Si vous vivez une urgence vitale, appelez immédiatement le 112. C'est le numéro d'urgence de l'Espagne.</p>
<h2>Pour les problèmes médicaux non vitaux</h2>
<p>Pour les conditions urgentes mais non vitales, une visite médicale privée à domicile es souvent le moyen le plus rapide d'obtenir des soins médicaux professionnels.</p>`,
      fi: `<h2>Hätätilanteessa soita aina 112</h2>
<p>Jos kyseessä on hengenvaarallinen hätätilanne, soita heti 112. Tämä on Espanjan yleinen hätänumero ja päivystäjät puhuvat englantia. Hätäpalvelut ovat maksuttomia kaikille.</p>
<h2>Kiireelliset lääkäriasiat (ei hengenvaaralliset)</h2>
<p>Kiireellisissä mutta ei-hengenvaarallisissa tapauksissa — kuten korkea kuume, oksentelu, voimakas allerginen reaktio — yksityislääkärin kotikäynti on usein nopein tapa saada hoitoa.</p>`,
      ar: `<h2>في حالات الطوارئ التي تهدد الحياة، اتصل دائمًا بالرقم 112</h2>
<p>إذا كنت تواجه حالة طوارئ تهدد الحياة، فاتصل بالرقم 112 على الفور. هذا هو رقم الطوارئ في إسبانيا ويتحدث المشغلون الإنجليزية.</p>
<h2>للمشاكل الطبية التي لا تهدد الحياة</h2>
<p>في الحالات العاجلة غير المهددة للحياة، تعد زيارة الطبيب الخاص للمنزل هي الطريقة الأسرع لتلقي الرعاية الطبية المهنية.</p>`,
      no: `<h2>Ved livstruende nødsituasjoner, ring alltid 112</h2>
<p>Hvis du opplever en livstruende nødsituasjon, ring 112 umiddelbart. Dette er Spanias nødnummer og operatørene snakker engelsk. Nødetatene er gratis for alle.</p>
<h2>For ikke-livstruende medisinske problemer</h2>
<p>For akutte, men ikke-livstruende tilstander — som høy feber, oppkast, eller allergiske reaksjoner — er et privat legehjemmebesøk ofte den raskeste løsningen.</p>`,
      da: `<h2>I en livstruende nødsituation skal du altid ringe 112</h2>
<p>Hvis du oplever en livstruende nødsituation, skal du straks ringe 112. Dette er Spaniens alarmnummer, og operatørerne taler engelsk. Nødtjenester er gratis for alle.</p>
<h2>Til ikke-livstruende medicinske problemer</h2>
<p>Til akutte, men ikke-livstruende tilstande — som høj feber, opkastning eller svære allergiske reaktioner — er et privat lægehjemmebesøg ofte den hurtigste måde at få hjælp på.</p>`,
      sv: `<h2>Vid livshotande nödsituationer, ring alltid 112</h2>
<p>Om du upplever en livsavgörande nödsituation, ring 112 omedelbart. Detta är Spaniens nödnummer och operatörerna talar engelska. Nödutryckning är gratis för alla.</p>
<h2>För icke-livshotande medicinska problem</h2>
<p>För akuta men icke-livshotande tillstånd — som hög feber, kräkningar eller svåra allergiska reaktioner — är ett privat läkarhembesök ofta det snabbaste sättet att få professionell hjälp.</p>`,
    },
  },
];

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
