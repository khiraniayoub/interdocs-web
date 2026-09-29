"use client";

import { useState, useRef, useEffect } from "react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, PHONE_URL } from "@/data/content";

export interface AIMedicalConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: string;
  initialSymptom?: string;
  autoStartRecord?: boolean;
}

interface TriageResult {
  status: "SUCCESS" | "NEED_MORE_INFO" | "EMERGENCY_REDIRECT";
  isEmergency: boolean;
  conditionName: string;
  urgencyLevel: string;
  eta: string;
  summary: string;
  doctorAction: string;
  supplies?: string;
  provider?: string;
}

interface ModalTranslations {
  headerSubtitle: string;
  step1: string;
  step2: string;
  step3: string;
  quickSelectLabel: string;
  popularSymptoms: { icon: string; label: string; text: string }[];
  voiceBannerTitle: string;
  voiceBannerSubtitle: string;
  orTypeDivider: string;
  recordBtn: string;
  stopRecordBtn: string;
  recordingBadge: string;
  transcribingBadge: string;
  symptomsPlaceholder: string;
  hotelPlaceholder: string;
  roomPlaceholder: string;
  analyzeBtn: string;
  analyzingTitle: string;
  eligibleTitle: string;
  doctorActionText: string;
  paymentNotice: string;
  selectInsuranceLabel: string;
  insuranceGuarantee: string;
  backBtn: string;
  continueBtn: string;
  ticketTitle: string;
  conditionLabel: string;
  locationLabel: string;
  insuranceLabel: string;
  paymentTermsLabel: string;
  paymentTermsValue: string;
  etaLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  whatsappBtn: string;
  callHotline: string;
}

export const MODAL_LANGUAGES = [
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
  { code: "sv", flag: "🇸🇪", label: "SV" },
  { code: "no", flag: "🇳🇴", label: "NO" },
  { code: "da", flag: "🇩🇰", label: "DA" },
  { code: "fi", flag: "🇫🇮", label: "FI" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
  { code: "ar", flag: "🇸🇦", label: "AR" },
];

const MODAL_TEXTS: Record<string, ModalTranslations> = {
  es: {
    headerSubtitle: "Médicos Privados a Hoteles · Llegada Media: 30-60 min",
    step1: "1. Síntomas",
    step2: "2. Evaluación",
    step3: "3. Despacho",
    quickSelectLabel: "Selección rápida:",
    popularSymptoms: [
      { icon: "👂", label: "Otitis", text: "Dolor agudo de oído e inflamación tras nadar en la piscina." },
      { icon: "🤢", label: "Vómitos", text: "Vómitos continuos, náuseas y signos de deshidratación." },
      { icon: "🤒", label: "Fiebre", text: "Fiebre alta superior a 38.5°C con dolor de garganta y escalofríos." },
      { icon: "👶", label: "Niños", text: "Bebé o niño con fiebre, malestar general y decaimiento." },
      { icon: "☀️", label: "Insolación", text: "Golpe de calor, mareo y quemaduras solares intensas por el sol." },
      { icon: "🤕", label: "Migraña", text: "Dolor agudo de cabeza o migraña fuerte que no remite." },
    ],
    voiceBannerTitle: "Grabar Audio con sus Síntomas",
    voiceBannerSubtitle: "Hable en cualquier idioma · Detección instantánea",
    orTypeDivider: "O escribir síntomas en texto",
    recordBtn: "Pulsar para Grabar Voz",
    stopRecordBtn: "⏹️ Detener y Guardar",
    recordingBadge: "🔴 Grabando voz... Hable con normalidad",
    transcribingBadge: "Procesando audio...",
    symptomsPlaceholder: "¿Qué síntomas tiene? Descríbalo brevemente...",
    hotelPlaceholder: "Hotel, apartamento o dirección en Costa del Sol...",
    roomPlaceholder: "Nº Habitación (Opcional)",
    analyzeBtn: "⚡ Iniciar Triaje Clínico Inmediato",
    analyzingTitle: "Evaluando síntomas y disponibilidad médica...",
    eligibleTitle: "Médico de Guardia Disponible",
    doctorActionText: "Un médico colegiado acude a su habitación para exploración física, alivio del dolor y prescripción del tratamiento.",
    paymentNotice: "La consulta médica en el hotel se abona directamente al médico al finalizar la visita. Se le entrega Factura Oficial en regla e Informe Médico Clínico para solicitar el reembolso íntegro a su seguro de viaje.",
    selectInsuranceLabel: "Aseguradora para la factura oficial:",
    insuranceGuarantee: "Factura oficial e informe clínico para tramitar su reembolso.",
    backBtn: "← Volver",
    continueBtn: "Continuar al Despacho →",
    ticketTitle: "Resumen de Asistencia Médica",
    conditionLabel: "Condición:",
    locationLabel: "Ubicación:",
    insuranceLabel: "Seguro:",
    paymentTermsLabel: "Condición de Pago:",
    paymentTermsValue: "Abono directo al médico · Factura para reclamar",
    etaLabel: "Llegada Estimada:",
    nameLabel: "Nombre del Paciente (Opcional):",
    namePlaceholder: "Ej: Juan Pérez",
    whatsappBtn: "Enviar Ticket Directo a WhatsApp del Médico",
    callHotline: "¿Prefiere hablar ahora? Llame 24/7:",
  },
  en: {
    headerSubtitle: "Private Doctor Hotel Visits · Average Arrival: 30-60 min",
    step1: "1. Symptoms",
    step2: "2. Assessment",
    step3: "3. Dispatch",
    quickSelectLabel: "Quick select:",
    popularSymptoms: [
      { icon: "👂", label: "Ear Pain", text: "Sharp ear pain, fullness and blockage after swimming in the pool." },
      { icon: "🤢", label: "Vomiting", text: "Continuous vomiting, stomach cramps and signs of dehydration." },
      { icon: "🤒", label: "High Fever", text: "Fever above 38.5°C with severe throat pain, shivering and chills." },
      { icon: "👶", label: "Child Sick", text: "Toddler with high fever, lethargy and poor feeding." },
      { icon: "☀️", label: "Sunstroke", text: "Severe sunstroke, heat exhaustion and painful sunburn after beach." },
      { icon: "🤕", label: "Headache", text: "Severe acute headache or migraine needing bedside doctor examination." },
    ],
    voiceBannerTitle: "Record Voice Audio Note",
    voiceBannerSubtitle: "Speak in any language · Instant transcription",
    orTypeDivider: "Or type your symptoms below",
    recordBtn: "Tap to Record Audio",
    stopRecordBtn: "⏹️ Stop & Save Audio",
    recordingBadge: "🔴 Recording voice... Speak clearly",
    transcribingBadge: "Processing audio...",
    symptomsPlaceholder: "Describe your symptoms or condition...",
    hotelPlaceholder: "Hotel name, apartment or address in Costa del Sol...",
    roomPlaceholder: "Room # (Optional)",
    analyzeBtn: "⚡ Start Instant Clinical Triage",
    analyzingTitle: "Assessing symptoms and doctor availability...",
    eligibleTitle: "Doctor On-Call Ready",
    doctorActionText: "A licensed doctor will arrive at your room for physical examination, rapid pain relief, and prescription treatment.",
    paymentNotice: "The hotel doctor consultation is paid directly to the attending physician on-site upon completion of the visit. The doctor issues your Official Invoice and detailed Clinical Medical Report so you can claim 100% reimbursement back from your insurance company.",
    selectInsuranceLabel: "Insurance company for your invoice:",
    insuranceGuarantee: "Official invoice & clinical report provided for insurance reimbursement claim.",
    backBtn: "← Back",
    continueBtn: "Continue to Dispatch →",
    ticketTitle: "Medical Dispatch Summary",
    conditionLabel: "Condition:",
    locationLabel: "Location:",
    insuranceLabel: "Insurance:",
    paymentTermsLabel: "Payment Terms:",
    paymentTermsValue: "Direct pay to doctor · Invoice provided for claim",
    etaLabel: "Estimated Arrival:",
    nameLabel: "Patient Name (Optional):",
    namePlaceholder: "E.g., John Smith",
    whatsappBtn: "Send Direct Ticket to Doctor WhatsApp",
    callHotline: "Prefer to call now? 24/7 Hotline:",
  },
  de: {
    headerSubtitle: "Privatarzt Hotelbesuche · Durchschnittl. Ankunft: 30-60 Min",
    step1: "1. Symptome",
    step2: "2. Bewertung",
    step3: "3. Einsatz",
    quickSelectLabel: "Häufige Beschwerden:",
    popularSymptoms: [
      { icon: "👂", label: "Ohrenschmerzen", text: "Starke Ohrenschmerzen und Druckgefühl nach dem Schwimmen." },
      { icon: "🤢", label: "Magen-Darm", text: "Anhaltendes Erbrechen, Magenkrämpfe und Dehydrierung." },
      { icon: "🤒", label: "Hohes Fieber", text: "Fieber über 38,5°C mit Schüttelfrost und Halsschmerzen." },
      { icon: "👶", label: "Kind krank", text: "Kind mit hohem Fieber, Schwäche und Unwohlsein." },
      { icon: "☀️", label: "Sonnenstich", text: "Sonnenstich, Kreislaufprobleme und schwere Verbrennungen nach der Sonne." },
      { icon: "🤕", label: "Migräne", text: "Starke Kopfschmerzen oder Migräne, bitte um Hilfe." },
    ],
    voiceBannerTitle: "Sprachnachricht aufnehmen",
    voiceBannerSubtitle: "In jeder Sprache sprechen · Automatische Erkennung",
    orTypeDivider: "Oder Symptome schriftlich beschreiben",
    recordBtn: "Sprachaufnahme starten",
    stopRecordBtn: "⏹️ Stoppen & Speichern",
    recordingBadge: "🔴 Aufnahme läuft... Bitte sprechen",
    transcribingBadge: "Audio wird verarbeitet...",
    symptomsPlaceholder: "Welche Beschwerden haben Sie?...",
    hotelPlaceholder: "Hotelname, Apartment oder Adresse an der Costa del Sol...",
    roomPlaceholder: "Zimmer-Nr. (Optional)",
    analyzeBtn: "⚡ Sofortige Notfall-Triage starten",
    analyzingTitle: "Prüfe Symptome und Arzt-Verfügbarkeit...",
    eligibleTitle: "Bereitschaftsarzt Einsatzbereit",
    doctorActionText: "Ein Arzt untersucht Sie direkt im Zimmer, verabreicht Medikamente zur schnellen Linderung und stellt Rezepte aus.",
    paymentNotice: "Die ärztliche Konsultation im Hotel wird direkt beim eintreffenden Arzt nach der Untersuchung bezahlt. Sie erhalten die offizielle Rechnung und den detaillierten Arztbericht zur Kostenerstattung durch Ihre Auslandskrankenversicherung.",
    selectInsuranceLabel: "Versicherung für die offizielle Rechnung:",
    insuranceGuarantee: "Offizielle Rechnung & Arztbericht zur Erstattung bei Ihrer Versicherung.",
    backBtn: "← Zurück",
    continueBtn: "Weiter zum Einsatz →",
    ticketTitle: "Zusammenfassung des Notfalltickets",
    conditionLabel: "Krankheitsbild:",
    locationLabel: "Standort:",
    insuranceLabel: "Versicherung:",
    paymentTermsLabel: "Zahlungsmodalität:",
    paymentTermsValue: "Direktzahlung beim Arzt · Rechnung für Erstattung",
    etaLabel: "Geschätzte Ankunft:",
    nameLabel: "Name des Patienten (Optional):",
    namePlaceholder: "Z.B. Max Mustermann",
    whatsappBtn: "Notfallticket per WhatsApp an den Arzt senden",
    callHotline: "Lieber direkt anrufen? 24/7 Hotline:",
  },
  fr: {
    headerSubtitle: "Visites Médicales en Hôtel · Arrivée Moyenne : 30-60 min",
    step1: "1. Symptômes",
    step2: "2. Évaluation",
    step3: "3. Envoi",
    quickSelectLabel: "Symptômes fréquents :",
    popularSymptoms: [
      { icon: "👂", label: "Otite", text: "Douleur aiguë à l'oreille et sensation de bouchon après la baignade." },
      { icon: "🤢", label: "Gastro", text: "Vomissements continus, crampes d'estomac et déshydratation." },
      { icon: "🤒", label: "Forte Fièvre", text: "Fièvre supérieure à 38,5°C avec frissons et maux de gorge." },
      { icon: "👶", label: "Enfant", text: "Enfant avec forte fièvre, abattement et perte d'appétit." },
      { icon: "☀️", label: "Insolation", text: "Coup de chaleur, malaise et coups de soleil intenses." },
      { icon: "🤕", label: "Migraine", text: "Céphalée aiguë sévère ou crise de migraine insupportable." },
    ],
    voiceBannerTitle: "Enregistrer un Message Vocal",
    voiceBannerSubtitle: "Parlez dans votre langue · Détection instantanée",
    orTypeDivider: "Ou décrivez vos symptômes par écrit",
    recordBtn: "Appuyer pour enregistrer",
    stopRecordBtn: "⏹️ Arrêter et Sauvegarder",
    recordingBadge: "🔴 Écoute en cours... Parlez normalement",
    transcribingBadge: "Traitement de l'audio...",
    symptomsPlaceholder: "Décrivez vos symptômes ou votre état...",
    hotelPlaceholder: "Hôtel, appartement ou adresse sur la Costa del Sol...",
    roomPlaceholder: "Chambre (Optionnel)",
    analyzeBtn: "⚡ Lancer le Triage Clinique Immédiat",
    analyzingTitle: "Évaluation médicale et disponibilité...",
    eligibleTitle: "Médecin de Garde Prêt",
    doctorActionText: "Un médecin se déplace dans votre chambre pour examen physique, soulagement rapide et prescription.",
    paymentNotice: "La consultation médicale à l'hôtel se règle directement auprès du médecin à l'issue de la visite. Le médecin vous remet votre Facture Officielle et le Rapport Médical Clinique pour votre remboursement auprès de votre assurance.",
    selectInsuranceLabel: "Assurance pour votre facture officielle :",
    insuranceGuarantee: "Facture officielle et rapport clinique remis pour votre remboursement.",
    backBtn: "← Retour",
    continueBtn: "Continuer vers l'envoi →",
    ticketTitle: "Récapitulatif de la Demande",
    conditionLabel: "Pathologie :",
    locationLabel: "Lieu :",
    insuranceLabel: "Assurance :",
    paymentTermsLabel: "Modalité de Règlement :",
    paymentTermsValue: "Règlement direct au médecin · Facture pour remboursement",
    etaLabel: "Arrivée Estimée :",
    nameLabel: "Nom du Patient (Optionnel) :",
    namePlaceholder: "Ex : Pierre Dupont",
    whatsappBtn: "Envoyer le Ticket par WhatsApp au Médecin",
    callHotline: "Vous préférez appeler ? 24h/24 :",
  },
  nl: {
    headerSubtitle: "Privéarts Hotelbezoeken · Gemiddelde Aankomst: 30-60 min",
    step1: "1. Symptomen",
    step2: "2. Beoordeling",
    step3: "3. Verzending",
    quickSelectLabel: "Veelvoorkomende klachten:",
    popularSymptoms: [
      { icon: "👂", label: "Oorpijn", text: "Hevige oorpijn en verstopping na het zwemmen." },
      { icon: "🤢", label: "Overgeven", text: "Voortdurend overgeven, maagkrampen en uitdroging." },
      { icon: "🤒", label: "Hoge Koorts", text: "Koorts boven 38,5°C met keelpijn en koude rillingen." },
      { icon: "👶", label: "Ziek Kind", text: "Kind met hoge koorts en lusteloosheid." },
      { icon: "☀️", label: "Zonnesteek", text: "Zonnesteek, duizeligheid en zware zonnebrand na het strand." },
      { icon: "🤕", label: "Migraine", text: "Ernstige acute hoofdpijn of migraineaanval." },
    ],
    voiceBannerTitle: "Spraakbericht opnemen",
    voiceBannerSubtitle: "Spreek in uw eigen taal · Automatische detectie",
    orTypeDivider: "Of typ uw klachten hieronder",
    recordBtn: "Tik om in te spreken",
    stopRecordBtn: "⏹️ Stoppen & Opslaan",
    recordingBadge: "🔴 Luisteren... Spreek rustig",
    transcribingBadge: "Audio verwerken...",
    symptomsPlaceholder: "Welke klachten heeft u?...",
    hotelPlaceholder: "Hotelnaam, appartement of adres aan Costa del Sol...",
    roomPlaceholder: "Kamernummer (Optioneel)",
    analyzeBtn: "⚡ Start Directe Klinische Triage",
    analyzingTitle: "Symptomen en arts-beschikbaarheid controleren...",
    eligibleTitle: "Dienstdoende Arts Beschikbaar",
    doctorActionText: "Een bevoegd arts bezoekt uw kamer voor lichamelijk onderzoek, directe pijnstilling en medicatievoorschrift.",
    paymentNotice: "Het medisch consult wordt na afloop direct aan de arts betaald. U ontvangt een officiële factuur en medisch rapport voor volledige declaratie bij uw reisverzekering.",
    selectInsuranceLabel: "Verzekeraar voor uw officiële factuur:",
    insuranceGuarantee: "Officiële factuur en rapport voor declaratie bij uw verzekeraar.",
    backBtn: "← Terug",
    continueBtn: "Doorgaan naar verzending →",
    ticketTitle: "Overzicht Medische Aanvraag",
    conditionLabel: "Aandoening:",
    locationLabel: "Locatie:",
    insuranceLabel: "Verzekering:",
    paymentTermsLabel: "Betaling:",
    paymentTermsValue: "Direct aan de arts · Factuur voor declaratie",
    etaLabel: "Verwachte Aankomst:",
    nameLabel: "Naam Patiënt (Optioneel):",
    namePlaceholder: "Bijv. Jan Jansen",
    whatsappBtn: "Stuur Ticket Direct naar WhatsApp Arts",
    callHotline: "Liever direct bellen? 24/7 Hotline:",
  },
  sv: {
    headerSubtitle: "Privatläkare Hotellbesök · Genomsnittlig Ankomst: 30-60 min",
    step1: "1. Symtom",
    step2: "2. Bedömning",
    step3: "3. Utskick",
    quickSelectLabel: "Vanliga symtom:",
    popularSymptoms: [
      { icon: "👂", label: "Öronvärk", text: "Akut öronvärk och lockkänsla efter bad." },
      { icon: "🤢", label: "Magsjuka", text: "Ihållande kräkningar, magkramper och uttorkning." },
      { icon: "🤒", label: "Hög Feber", text: "Feber över 38,5°C med frossa och halsont." },
      { icon: "👶", label: "Sjukt Barn", text: "Barn med hög feber, slöhet och matleda." },
      { icon: "☀️", label: "Solsting", text: "Solsting, yrsel och kraftig solbränna efter stranden." },
      { icon: "🤕", label: "Migrän", text: "Svår huvudvärk eller akut migränanfall." },
    ],
    voiceBannerTitle: "Spela in Röstmeddelande",
    voiceBannerSubtitle: "Tala på ditt eget språk · Direkt tolkning",
    orTypeDivider: "Eller skriv dina symtom nedan",
    recordBtn: "Tryck för att tala",
    stopRecordBtn: "⏹️ Stoppa & Spara",
    recordingBadge: "🔴 Lyssnar... Tala normalt",
    transcribingBadge: "Bearbetar ljud...",
    symptomsPlaceholder: "Beskriv dina symtom...",
    hotelPlaceholder: "Hotellnamn, lägenhet eller adress på Costa del Sol...",
    roomPlaceholder: "Rumsnummer (Valfritt)",
    analyzeBtn: "⚡ Starta Klinisk Triage Direkt",
    analyzingTitle: "Bedömer symtom och läkartillgänglighet...",
    eligibleTitle: "Jourhavande Läkare Redo",
    doctorActionText: "En legitimerad läkare undersöker dig på hotellrummet, ger smärtlindring och skriver ut recept.",
    paymentNotice: "Läkarbesöket betalas direkt till läkaren efter undersökningen. Du får officiell faktura och läkarintyg för ersättning från din reseförsäkring.",
    selectInsuranceLabel: "Försäkringsbolag för faktura:",
    insuranceGuarantee: "Officiell faktura och läkarintyg för försäkringsersättning.",
    backBtn: "← Tillbaka",
    continueBtn: "Fortsätt till utskick →",
    ticketTitle: "Sammanfattning av Läkarärende",
    conditionLabel: "Tillstånd:",
    locationLabel: "Plats:",
    insuranceLabel: "Försäkring:",
    paymentTermsLabel: "Betalning:",
    paymentTermsValue: "Direkt till läkaren · Faktura för ersättning",
    etaLabel: "Beräknad Ankomst:",
    nameLabel: "Patientens Namn (Valfritt):",
    namePlaceholder: "T.ex. Sven Svensson",
    whatsappBtn: "Skicka Ärende Direkt till Läkarens WhatsApp",
    callHotline: "Föredrar du att ringa? 24/7 Hotline:",
  },
  no: {
    headerSubtitle: "Privat Lege Hotellbesøk · Gjennomsnittlig Ankomst: 30-60 min",
    step1: "1. Symptomer",
    step2: "2. Vurdering",
    step3: "3. Utsending",
    quickSelectLabel: "Vanlige symptomer:",
    popularSymptoms: [
      { icon: "👂", label: "Øresmerter", text: "Akutte øresmerter og trykkfølelse etter bading." },
      { icon: "🤢", label: "Oppkast", text: "Vedvarende oppkast, magekramper og dehydrering." },
      { icon: "🤒", label: "Høy Feber", text: "Feber over 38,5°C med frostrier og sår hals." },
      { icon: "👶", label: "Sykt Barn", text: "Barn med høy feber og nedsatt allmenntilstand." },
      { icon: "☀️", label: "Solstikk", text: "Solstikk, svimmelhet og kraftig solforbrenning." },
      { icon: "🤕", label: "Migrene", text: "Kraftig hodepine eller akutt migreneanfall." },
    ],
    voiceBannerTitle: "Ta opp Talemelding",
    voiceBannerSubtitle: "Snakk på ditt eget språk · Umiddelbar tolkning",
    orTypeDivider: "Eller skriv dine symptomer under",
    recordBtn: "Trykk for å snakke",
    stopRecordBtn: "⏹️ Stopp & Lagre",
    recordingBadge: "🔴 Lytter... Snakk normalt",
    transcribingBadge: "Behandler lyd...",
    symptomsPlaceholder: "Beskriv symptomene dine...",
    hotelPlaceholder: "Hotellnavn, leilighet eller adresse på Costa del Sol...",
    roomPlaceholder: "Romnummer (Valgfritt)",
    analyzeBtn: "⚡ Start Klinisk Triage Nå",
    analyzingTitle: "Vurderer symptomer og legetilgjengelighet...",
    eligibleTitle: "Vaktlege Klar til Utrykning",
    doctorActionText: "En autorisert lege kommer til hotellrommet for undersøkelse, smertelindring og resept.",
    paymentNotice: "Konsultasjonen betales direkte til legen etter besøket. Du mottar offisiell faktura og legeerklæring for full refusjon fra reiseforsikringen.",
    selectInsuranceLabel: "Forsikringsselskap for faktura:",
    insuranceGuarantee: "Offisiell faktura og legeerklæring for refusjonskrav.",
    backBtn: "← Tilbake",
    continueBtn: "Fortsett til utsending →",
    ticketTitle: "Sammendrag av Legeforespørsel",
    conditionLabel: "Tilstand:",
    locationLabel: "Sted:",
    insuranceLabel: "Forsikring:",
    paymentTermsLabel: "Betaling:",
    paymentTermsValue: "Direkte til legen · Faktura for refusjon",
    etaLabel: "Forventet Ankomst:",
    nameLabel: "Pasientnavn (Valgfritt):",
    namePlaceholder: "F.eks. Ola Nordmann",
    whatsappBtn: "Send Henvendelse til Legens WhatsApp",
    callHotline: "Vil du heller ringe? 24/7 Døgnvakt:",
  },
  da: {
    headerSubtitle: "Privat Lægebesøg på Hotel · Gennemsnitlig Ankomst: 30-60 min",
    step1: "1. Symptomer",
    step2: "2. Vurdering",
    step3: "3. Afsendelse",
    quickSelectLabel: "Hyppige symptomer:",
    popularSymptoms: [
      { icon: "👂", label: "Øresmerter", text: "Akutte øresmerter og trykfølelse efter svømning." },
      { icon: "🤢", label: "Maveonde", text: "Konstant opkastning, mavekramper og dehydrering." },
      { icon: "🤒", label: "Høj Feber", text: "Feber over 38,5°C med kulderystelser og ondt i halsen." },
      { icon: "👶", label: "Sygt Barn", text: "Barn med høj feber og sløvhed." },
      { icon: "☀️", label: "Solstik", text: "Solstik, svimmelhed og slem solskoldning efter stranden." },
      { icon: "🤕", label: "Hovedpine", text: "Svær hovedpine eller akut migræneanfald." },
    ],
    voiceBannerTitle: "Optag Stemmebesked",
    voiceBannerSubtitle: "Tal på dit eget sprog · Øjeblikkelig genkendelse",
    orTypeDivider: "Eller skriv dine symptomer herunder",
    recordBtn: "Tryk for at tale",
    stopRecordBtn: "⏹️ Stop & Gem",
    recordingBadge: "🔴 Lytter... Tal tydeligt",
    transcribingBadge: "Behandler lyd...",
    symptomsPlaceholder: "Beskriv dine symptomer...",
    hotelPlaceholder: "Hotelnavn, lejlighed eller adresse på Costa del Sol...",
    roomPlaceholder: "Værelsesnr. (Valgfrit)",
    analyzeBtn: "⚡ Start Hurtig Klinisk Triage",
    analyzingTitle: "Vurderer symptomer og lægetilgængelighed...",
    eligibleTitle: "Vagtlæge Klar til Besøg",
    doctorActionText: "En autoriseret læge undersøger dig på hotelværelset, yder smertelindring og udsteder recepter.",
    paymentNotice: "Konsultationen afregnes direkte med lægen efter endt besøg. Du modtager officiel faktura og lægeattest til godtgørelse hos din rejseforsikring.",
    selectInsuranceLabel: "Forsikringsselskab til officiel faktura:",
    insuranceGuarantee: "Officiel faktura og lægeattest til anmeldelse hos forsikringen.",
    backBtn: "← Tilbage",
    continueBtn: "Fortsæt til afsendelse →",
    ticketTitle: "Oversigt over Lægeanmodning",
    conditionLabel: "Tilstand:",
    locationLabel: "Sted:",
    insuranceLabel: "Forsikring:",
    paymentTermsLabel: "Betaling:",
    paymentTermsValue: "Direkte til lægen · Faktura til godtgørelse",
    etaLabel: "Forventet Ankomst:",
    nameLabel: "Patientens Navn (Valgfrit):",
    namePlaceholder: "F.eks. Lars Hansen",
    whatsappBtn: "Send Anmodning Direkte til Lægens WhatsApp",
    callHotline: "Foretrækker du at ringe? 24/7 Døgnlinje:",
  },
  fi: {
    headerSubtitle: "Yksityislääkäri Hotellikäynnit · Saapumisaika: 30-60 min",
    step1: "1. Oireet",
    step2: "2. Arvio",
    step3: "3. Lähetys",
    quickSelectLabel: "Yleiset oireet:",
    popularSymptoms: [
      { icon: "👂", label: "Korvakipu", text: "Kova korvasärky ja tukkoisuus uinnin jälkeen." },
      { icon: "🤢", label: "Vatsatauti", text: "Jatkuva oksentelu, vatsakrampit ja nestehukka." },
      { icon: "🤒", label: "Korkea Kuume", text: "Kuume yli 38,5°C, vilunväristykset ja kurkkukipu." },
      { icon: "👶", label: "Sairas Lapsi", text: "Lapsella korkea kuume ja huono vointi." },
      { icon: "☀️", label: "Auringonpistos", text: "Auringonpistos, huimaus ja paha auringonpolttama." },
      { icon: "🤕", label: "Päänsärky", text: "Kova päänsärky tai akuutti migreenikohtaus." },
    ],
    voiceBannerTitle: "Äänitä Ääniviesti",
    voiceBannerSubtitle: "Puhu omalla kielelläsi · Automaattinen tunnistus",
    orTypeDivider: "Tai kirjoita oireesi tähän",
    recordBtn: "Puhu mikrofonille",
    stopRecordBtn: "⏹️ Lopeta ja Tallenna",
    recordingBadge: "🔴 Kuunnellaan... Puhu rauhallisesti",
    transcribingBadge: "Käsitellään ääntä...",
    symptomsPlaceholder: "Kuvaile oireitasi lyhyesti...",
    hotelPlaceholder: "Hotelli, huoneisto tai osoite Costa del Solilla...",
    roomPlaceholder: "Huonenumero (Valinnainen)",
    analyzeBtn: "⚡ Aloita Lääkärin Triage Heti",
    analyzingTitle: "Arvioidaan oireita ja lääkärin saatavuutta...",
    eligibleTitle: "Päivystävä Lääkäri Valmiina",
    doctorActionText: "Laillistettu lääkäri tutkii sinut hotellihuoneessasi, antaa kivunlievityksen ja kirjoittaa reseptit.",
    paymentNotice: "Lääkärikäynti maksetaan suoraan lääkärille käynnin päätteeksi. Saat virallisen laskun ja lääkärintodistuksen matkavakuutuksen täyttä korvausta varten.",
    selectInsuranceLabel: "Vakuutusyhtiösi laskua varten:",
    insuranceGuarantee: "Virallinen lasku ja lääkärintodistus korvaushakemukseen.",
    backBtn: "← Takaisin",
    continueBtn: "Jatka lääkärin tilaukseen →",
    ticketTitle: "Lääkäripyynnön Yhteenveto",
    conditionLabel: "Tila:",
    locationLabel: "Sijainti:",
    insuranceLabel: "Vakuutus:",
    paymentTermsLabel: "Maksutapa:",
    paymentTermsValue: "Suoraan lääkärille · Kuitti vakuutukseen",
    etaLabel: "Arvioitu Saapuminen:",
    nameLabel: "Potilaan Nimi (Valinnainen):",
    namePlaceholder: "Esim. Matti Meikäläinen",
    whatsappBtn: "Lähetä Pyyntö Suoraan Lääkärin WhatsAppiin",
    callHotline: "Haluatko soittaa heti? 24/7 Päivystys:",
  },
  ru: {
    headerSubtitle: "Вызов Частного Врача в Отель · Прибытие: 30-60 мин",
    step1: "1. Симптомы",
    step2: "2. Оценка",
    step3: "3. Вызов",
    quickSelectLabel: "Частые симптомы:",
    popularSymptoms: [
      { icon: "👂", label: "Боль в ухе", text: "Острая боль в ухе и заложенность после купания." },
      { icon: "🤢", label: "Рвота", text: "Непрекращающаяся рвота, спазмы желудка и обезвоживание." },
      { icon: "🤒", label: "Температура", text: "Высокая температура выше 38.5°C с ознобом и болью в горле." },
      { icon: "👶", label: "Ребенок", text: "Ребенок с высокой температурой и слабостью." },
      { icon: "☀️", label: "Солнечный удар", text: "Тепловой или солнечный удар, головокружение и сильные ожоги." },
      { icon: "🤕", label: "Мигрень", text: "Сильная головная боль или приступ мигрени." },
    ],
    voiceBannerTitle: "Записать Голосовое Сообщение",
    voiceBannerSubtitle: "Говорите на своем языке · Моментальная расшифровка",
    orTypeDivider: "Или опишите симптомы текстом",
    recordBtn: "Нажмите для записи голоса",
    stopRecordBtn: "⏹️ Остановить и Сохранить",
    recordingBadge: "🔴 Слушаем... Говорите в микрофон",
    transcribingBadge: "Обработка аудио...",
    symptomsPlaceholder: "Опишите ваши симптомы...",
    hotelPlaceholder: "Название отеля, апартаменты или адрес...",
    roomPlaceholder: "Номер комнаты (Необязательно)",
    analyzeBtn: "⚡ Начать Экспресс-Триаж Врача",
    analyzingTitle: "Оценка симптомов и готовность врача...",
    eligibleTitle: "Дежурный Врач Готов к Выезду",
    doctorActionText: "Врач приедет в ваш номер для осмотра, быстрого снятия боли и выписки рецепта.",
    paymentNotice: "Консультация оплачивается врачу по завершении визита. Вы получаете официальный счет и медицинское заключение для 100% компенсации в страховой.",
    selectInsuranceLabel: "Страховая компания для официального счета:",
    insuranceGuarantee: "Официальный счет и отчет с печатью для страховой компании.",
    backBtn: "← Назад",
    continueBtn: "Перейти к вызову →",
    ticketTitle: "Данные Медицинского Вызова",
    conditionLabel: "Состояние:",
    locationLabel: "Адрес:",
    insuranceLabel: "Страховка:",
    paymentTermsLabel: "Оплата:",
    paymentTermsValue: "Напрямую врачу · Счет для компенсации",
    etaLabel: "Время прибытия:",
    nameLabel: "Имя пациента (Необязательно):",
    namePlaceholder: "Например: Иван Петров",
    whatsappBtn: "Отправить Заявку в WhatsApp Врачу",
    callHotline: "Предпочитаете позвонить? 24/7 Линия:",
  },
  ar: {
    headerSubtitle: "زيارة طبيب خاص للفندق · الوصول: 30-60 دقيقة",
    step1: "1. الأعراض",
    step2: "2. التقييم",
    step3: "3. إرسال",
    quickSelectLabel: "أعراض شائعة:",
    popularSymptoms: [
      { icon: "👂", label: "ألم الأذن", text: "ألم حاد في الأذن والتهاب بعد السباحة." },
      { icon: "🤢", label: "قيء وغثيان", text: "قيء مستمر، تقلصات في المعدة وبوادر جفاف." },
      { icon: "🤒", label: "حمى شديدة", text: "حمى أعلى من 38.5 درجة مع قشعريرة وألم بالحلق." },
      { icon: "👶", label: "طفل مريض", text: "طفل يعاني من حمى حادة وخمول وضعف عام." },
      { icon: "☀️", label: "ضربة شمس", text: "ضربة شمس، دوخة شديدة وإجهاد حراري ناتج عن الشمس." },
      { icon: "🤕", label: "صداع حاد", text: "صداع حاد وشقيقة تتطلب فحصاً طبياً عاجلاً." },
    ],
    voiceBannerTitle: "تسجيل صوتي للأعراض",
    voiceBannerSubtitle: "تحدث بأي لغة · كشف فوري وترجمة تلقائية",
    orTypeDivider: "أو اكتب الأعراض كتابةً أدناه",
    recordBtn: "اضغط للتسجيل الصوتي",
    stopRecordBtn: "⏹️ إيقاف وحفظ الصوت",
    recordingBadge: "🔴 جاري الاستماع... تحدث الآن",
    transcribingBadge: "جاري معالجة الصوت...",
    symptomsPlaceholder: "صف الأعراض التي تشعر بها...",
    hotelPlaceholder: "اسم الفندق أو الشقة أو العنوان في كوستا ديل سول...",
    roomPlaceholder: "رقم الغرفة (اختياري)",
    analyzeBtn: "⚡ بدء الفرز الطبي الفوري",
    analyzingTitle: "جاري تقييم الحالة وتوفر الطبيب...",
    eligibleTitle: "الطبيب المناوب جاهز للتحرك",
    doctorActionText: "يحضر الطبيب إلى غرفتك الفندقية للفحص السريري وتسكين الألم وصرف العلاج اللازم فوراً.",
    paymentNotice: "يتم سداد رسوم الزيارة مباشرة للطبيب عند انتهاء الفحص. يسلمك الطبيب فاتورة رسمية وتقرير طبي معتمد لطلب التعويض الكامل من شركة التأمين.",
    selectInsuranceLabel: "شركة التأمين الخاصة بك لإصدار الفاتورة:",
    insuranceGuarantee: "فاتورة رسمية وتقرير طبي معتمد لطلب التعويض من تأمينك.",
    backBtn: "← رجوع",
    continueBtn: "متابعة الطلب ←",
    ticketTitle: "ملخص طلب الطبيب",
    conditionLabel: "الحالة:",
    locationLabel: "الموقع:",
    insuranceLabel: "التأمين:",
    paymentTermsLabel: "طريقة السداد:",
    paymentTermsValue: "سداد مباشر للطبيب · فاتورة رسمية للتعويض",
    etaLabel: "الوقت المقدر:",
    nameLabel: "اسم المريض (اختياري):",
    namePlaceholder: "مثال: محمد علي",
    whatsappBtn: "إرسال الطلب مباشرة إلى واتساب الطبيب",
    callHotline: "تفضل الاتصال المباشر؟ خط 24/7:",
  },
};

const INSURERS = [
  { id: "allianz", name: "Allianz Global Assistance / Allianz Care" },
  { id: "bupa", name: "Bupa Global / Bupa International" },
  { id: "axa", name: "AXA Travel Insurance / AXA Assistance" },
  { id: "adac", name: "ADAC Auslandskrankenschutz (Germany)" },
  { id: "ergo-hansemerkur", name: "ERGO / HanseMerkur (Germany)" },
  { id: "tk-barmer", name: "Techniker Krankenkasse (TK) / Barmer / DAK (Germany)" },
  { id: "swica-helsana", name: "Swica / Helsana / CSS (Switzerland)" },
  { id: "uniqa", name: "UNIQA / Wiener Städtische (Austria)" },
  { id: "folksam-if", name: "Folksam / If Skadeförsäkring (Nordics)" },
  { id: "tryg-gjensidige", name: "Tryg / Gjensidige / Fremtind (Nordics)" },
  { id: "fennia-pohjola", name: "Fennia / Pohjola / SOS International (Finland)" },
  { id: "dutch", name: "CZ / VGZ / Menzis / Zilveren Kruis (Netherlands)" },
  { id: "belgium", name: "DKV Belgium / Mutualité Chrétienne (Belgium)" },
  { id: "france", name: "Europ Assistance / April International (France)" },
  { id: "uk-travel", name: "Aviva / Staysure / Admiral / Post Office (UK)" },
  { id: "vitality-vhi", name: "Vitality Health / Vhi Healthcare (UK & Ireland)" },
  { id: "cigna", name: "Cigna Global / Aetna / GeoBlue (USA & Expat)" },
  { id: "other", name: "Other Travel Insurance / Otro seguro de viaje" },
  { id: "direct", name: "Pago directo privado (Con factura para seguro)" },
];

export default function AIMedicalConcierge({
  isOpen,
  onClose,
  locale = "en",
  initialSymptom,
  autoStartRecord = false,
}: AIMedicalConciergeProps) {
  const [currentLocale, setCurrentLocale] = useState<string>(locale);

  useEffect(() => {
    if (locale && MODAL_TEXTS[locale]) {
      setCurrentLocale(locale);
    }
  }, [locale]);

  const t = MODAL_TEXTS[currentLocale] || MODAL_TEXTS.en;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [symptoms, setSymptoms] = useState("");
  const [location, setLocation] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [patientName, setPatientName] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState(INSURERS[0].name);

  // Audio recording state
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);

  // Clinical assessment loading and result
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [triageResult, setTriageResult] = useState<TriageResult | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (initialSymptom) {
        setSymptoms(initialSymptom);
      }
      if (autoStartRecord) {
        const timer = setTimeout(() => {
          handleStartRecording();
        }, 350);
        return () => clearTimeout(timer);
      }
    } else {
      document.body.style.overflow = "unset";
      setStep(1);
      setTriageResult(null);
      stopRecordingCleanup();
    }
    return () => {
      document.body.style.overflow = "unset";
      stopRecordingCleanup();
    };
  }, [isOpen, initialSymptom, autoStartRecord]);

  const stopRecordingCleanup = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsRecording(false);
  };

  const handleStartRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await handleTranscribeAudio(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err: any) {
      console.error("Microphone access error:", err);
      setMicError("Microphone permission denied. Please type your symptoms.");
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsRecording(false);
  };

  const handleTranscribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "voice-recording.webm");

      const res = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success && data.text) {
        setSymptoms((prev) => (prev ? `${prev} ${data.text}` : data.text));
      } else {
        setMicError("Could not transcribe. Please type your symptoms.");
      }
    } catch (err) {
      console.error("Transcription error:", err);
      setMicError("Transcription error. Please type your symptoms.");
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    if (isRecording) {
      handleStopRecording();
    }

    setIsAnalyzing(true);
    setStep(2);

    try {
      const res = await fetch("/api/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symptoms,
          language: currentLocale,
          location,
          insurance: selectedInsurance,
        }),
      });

      const data: TriageResult = await res.json();
      setTriageResult(data);
    } catch (err) {
      setTriageResult({
        status: "SUCCESS",
        isEmergency: false,
        conditionName: t.popularSymptoms[0]?.label || "Consulta Médica en Hotel",
        urgencyLevel: "Standard Hotel Visit",
        eta: "30-60 min",
        summary: t.doctorActionText,
        doctorAction: t.doctorActionText,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFinalDispatch = () => {
    const roomInfo = roomNumber ? `(Room: ${roomNumber})` : "";
    
    const message = `🚨 *URGENT MEDICAL VISIT REQUEST (INTERDOCS)*\n` +
      `🏨 *Location:* ${location} ${roomInfo}\n` +
      `👤 *Patient:* ${patientName || "Guest / Patient"}\n` +
      `🩺 *Symptoms / Condition:* ${triageResult?.conditionName || symptoms}\n` +
      `⚡ *ETA:* ${triageResult?.eta || "30-60 min"}\n` +
      `🛡️ *Insurance Claim:* ${selectedInsurance}\n` +
      `💳 *Payment Terms:* Paid directly on-site to doctor · Official Invoice & Medical Report provided for claim\n` +
      `📋 *Notes:* ${symptoms}\n\n` +
      `_Please confirm dispatch and doctor ETA._`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-slate-900 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.18)] flex flex-col max-h-[92vh] overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Brand + Language Switcher + Close */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-800 text-sm tracking-wide text-white">Interdocs Medical</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  30-60 min
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Minimal Language Switcher Pills */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-[130px] sm:max-w-none scrollbar-none">
              {MODAL_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setCurrentLocale(lang.code)}
                  className={`text-[11px] font-bold px-1.5 py-0.5 rounded-lg transition-all flex-shrink-0 ${
                    currentLocale === lang.code
                      ? "bg-cyan-500 text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                  title={lang.code.toUpperCase()}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="grid grid-cols-3 text-center border-b border-slate-800/60 text-[11px] font-700 bg-slate-950/30">
          <div className={`py-1.5 sm:py-2 border-b-2 transition-all ${step === 1 ? "border-cyan-400 text-cyan-300" : "border-transparent text-slate-500"}`}>
            {t.step1}
          </div>
          <div className={`py-1.5 sm:py-2 border-b-2 transition-all ${step === 2 ? "border-cyan-400 text-cyan-300" : "border-transparent text-slate-500"}`}>
            {t.step2}
          </div>
          <div className={`py-1.5 sm:py-2 border-b-2 transition-all ${step === 3 ? "border-cyan-400 text-cyan-300" : "border-transparent text-slate-500"}`}>
            {t.step3}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4">
          
          {/* ──────────────── STEP 1: SÍNTOMAS Y UBICACIÓN ──────────────── */}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-200">
              
              {/* Quick Select Symptoms (Compact, direct) */}
              <div>
                <span className="text-[10px] sm:text-[11px] font-700 uppercase tracking-wider text-slate-400 block mb-1.5">
                  {t.quickSelectLabel}
                </span>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {t.popularSymptoms.map((symp) => (
                    <button
                      key={symp.label}
                      type="button"
                      onClick={() => setSymptoms(symp.text)}
                      className="px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 hover:border-cyan-400/50 text-left transition-all text-[11px] sm:text-xs font-600 text-slate-200 flex items-center gap-1 sm:gap-1.5 cursor-pointer truncate"
                    >
                      <span className="text-sm sm:text-base">{symp.icon}</span>
                      <span className="truncate">{symp.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dedicated Large Voice Recording Card with Photo & Audio Wave Visuals */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/60 border-2 border-cyan-500/40 p-3 sm:p-4 shadow-[0_4px_24px_rgba(6,182,212,0.18)]">
                <div className="flex flex-row items-center gap-3 sm:gap-4">
                  {/* Significant Photo of Microphone & Audio Waves */}
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <img
                      src="/voice-record.jpg"
                      alt="Voice audio recording illustration"
                      className="w-full h-full object-cover"
                    />
                    {isRecording && (
                      <div className="absolute inset-0 bg-red-600/30 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Text & Large Action Button */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                      <h4 className="font-extrabold text-white text-xs sm:text-base leading-tight truncate">
                        {t.voiceBannerTitle}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 mb-2 leading-tight truncate">
                      {t.voiceBannerSubtitle}
                    </p>

                    {/* Button States */}
                    {isRecording ? (
                      <div className="space-y-1">
                        <button
                          type="button"
                          onClick={handleStopRecording}
                          className="w-full py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/40 animate-pulse transition-all cursor-pointer"
                        >
                          <span className="h-2 w-2 rounded-full bg-white" />
                          <span>{t.stopRecordBtn}</span>
                        </button>
                        <div className="flex items-center gap-1.5 py-0.5">
                          <span className="text-[10px] sm:text-[11px] font-bold text-red-400 truncate">{t.recordingBadge}</span>
                          <span className="flex items-center gap-0.5 h-2.5">
                            <span className="w-1 h-2 bg-red-500 animate-pulse rounded-full" />
                            <span className="w-1 h-3 bg-red-400 animate-pulse rounded-full" />
                            <span className="w-1 h-1.5 bg-red-500 animate-pulse rounded-full" />
                            <span className="w-1 h-3.5 bg-red-300 animate-pulse rounded-full" />
                          </span>
                        </div>
                      </div>
                    ) : isTranscribing ? (
                      <div className="w-full py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl bg-cyan-900/60 border border-cyan-500/50 text-cyan-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2">
                        <svg className="animate-spin h-3.5 w-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t.transcribingBadge}</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleStartRecording}
                        className="w-full py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span className="text-base sm:text-lg">🎙️</span>
                        <span className="truncate">{t.recordBtn}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {micError && (
                <p className="text-xs text-rose-400">{micError}</p>
              )}

              {/* Text Divider */}
              <div className="flex items-center gap-2.5 text-slate-500 py-0.5">
                <div className="h-px bg-slate-800 flex-1" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.orTypeDivider}
                </span>
                <div className="h-px bg-slate-800 flex-1" />
              </div>

              {/* Textarea for symptoms */}
              <div className="relative">
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder={t.symptomsPlaceholder}
                  rows={2}
                  className="w-full p-3 rounded-2xl bg-slate-800/70 border border-slate-700 focus:border-cyan-400 text-xs sm:text-sm text-white placeholder-slate-400 outline-none resize-none transition-all"
                />
              </div>

              {/* Location Input (Hotel + Room) */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={t.hotelPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700 focus:border-cyan-400 text-xs text-white placeholder-slate-400 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    placeholder={t.roomPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700 focus:border-cyan-400 text-xs text-white placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              {/* Single Primary Action Button */}
              <button
                type="button"
                onClick={handleAnalyze}
                disabled={!symptoms.trim() || isAnalyzing}
                className={`w-full py-3.5 rounded-2xl font-800 text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                  !symptoms.trim() || isAnalyzing
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 cursor-pointer hover:scale-[1.01]"
                }`}
              >
                <span>{t.analyzeBtn}</span>
              </button>
            </div>
          )}

          {/* ──────────────── STEP 2: EVALUACIÓN IA (DIRECTA Y LIMPIA) ──────────────── */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {isAnalyzing ? (
                <div className="py-10 text-center space-y-3">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-cyan-400 border-t-transparent"></div>
                  <p className="text-sm font-700 text-cyan-300">{t.analyzingTitle}</p>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {/* Doctor Ready + Diagnosis */}
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-700 text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        {t.eligibleTitle}
                      </span>
                      <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                        ⏱️ ~30-60 min
                      </span>
                    </div>
                    <h3 className="text-base font-800 text-white">
                      {triageResult?.conditionName || "Consulta Médica General"}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {triageResult?.doctorAction || t.doctorActionText}
                    </p>
                  </div>

                  {/* Payment & Official Documentation Card */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-800 uppercase tracking-wider">
                      <span>💳</span>
                      <span>Pago y Factura Oficial</span>
                    </div>
                    <p className="text-xs text-amber-100/90 leading-relaxed">
                      {t.paymentNotice}
                    </p>
                  </div>

                  {/* Insurance Claim Selector */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                    <label className="block text-[11px] font-700 text-slate-300">
                      {t.selectInsuranceLabel}
                    </label>
                    <select
                      value={selectedInsurance}
                      onChange={(e) => setSelectedInsurance(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:border-cyan-400 cursor-pointer"
                    >
                      {INSURERS.map((ins) => (
                        <option key={ins.id} value={ins.name}>
                          {ins.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span>✓</span>
                      <span>{t.insuranceGuarantee}</span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-600 transition-colors cursor-pointer"
                    >
                      {t.backBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-800 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                    >
                      <span>{t.continueBtn}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ──────────────── STEP 3: DESPACHO MÉDICO ──────────────── */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/60 font-700">
                  <span className="text-slate-400 uppercase tracking-wider">{t.ticketTitle}</span>
                  <span className="text-emerald-400">✓ Listo</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.conditionLabel}</span>
                  <span className="font-600 text-white">{triageResult?.conditionName}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.locationLabel}</span>
                  <span className="font-600 text-white">{location || "Costa del Sol"} {roomNumber ? `· Rm ${roomNumber}` : ""}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.insuranceLabel}</span>
                  <span className="font-600 text-white truncate max-w-[60%]">{selectedInsurance}</span>
                </div>

                <div className="flex justify-between items-start pt-1.5 border-t border-slate-700/50">
                  <span className="text-slate-400">{t.paymentTermsLabel}</span>
                  <span className="font-600 text-amber-300 text-right max-w-[65%] text-[11px] leading-snug">
                    {t.paymentTermsValue}
                  </span>
                </div>

                <div className="flex justify-between pt-1 border-t border-slate-700/40 font-700">
                  <span className="text-slate-400">{t.etaLabel}</span>
                  <span className="text-emerald-400">~{triageResult?.eta || "30-60 min"}</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-700 uppercase tracking-wider text-slate-400 mb-1">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 text-xs text-white outline-none"
                />
              </div>

              {/* Instant WhatsApp Dispatch Button */}
              <button
                type="button"
                onClick={handleFinalDispatch}
                className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-800 text-sm shadow-xl shadow-green-500/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>{t.whatsappBtn}</span>
              </button>

              {/* Direct Call Option */}
              <div className="text-center pt-1">
                <span className="text-xs text-slate-400">{t.callHotline} </span>
                <a href={PHONE_URL} className="text-xs font-700 text-cyan-400 hover:underline">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
