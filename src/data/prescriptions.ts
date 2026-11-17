export interface PrescriptionFaq {
  q: string;
  a: string;
}

export interface PrescriptionPageData {
  slug: string;
  isHub?: boolean;
  locationName: string;
  regionLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  badge: string;
  h1: string;
  heroSubtitle: string;
  localIntroTitle: string;
  localIntroParagraphs: string[];
  areasServed: string[];
  airportNote: string;
  pharmacyGuideTitle: string;
  pharmacyGuideText: string;
  faqs: PrescriptionFaq[];
}

export const PRESCRIPTION_PAGES: PrescriptionPageData[] = [
  {
    slug: "online-prescription-spain",
    isHub: true,
    locationName: "Spain",
    regionLabel: "Mainland Spain, Balearic & Canary Islands",
    metaTitle: "Online Prescription Spain (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, an inhaler, or lost medication in Spain? Start a fast WhatsApp intake and a licensed Spanish doctor contacts you to issue an Official Spanish QR Prescription valid at all 22,000+ pharmacies.",
    keywords: [
      "online prescription spain",
      "get a prescription in spain as a tourist",
      "online doctor prescription spain",
      "spanish electronic prescription qr",
      "buy antibiotics in spain tourist",
      "UK NHS prescription valid in spain",
      "forgot medication on holiday spain",
      "lost asthma inhaler spain",
      "UTI antibiotics spain pharmacy",
    ],
    badge: "🇪🇸 ALL SPAIN · OFFICIAL SPANISH E-PRESCRIPTION (QR CODE)",
    h1: "Online Doctor Consultation & Official Spanish Prescription Across Spain",
    heroSubtitle:
      "Need antibiotics for a UTI or ear infection, a replacement asthma inhaler, or continuity for lost or forgotten regular medication anywhere in Spain? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to evaluate your case and send your Official Spanish Electronic Prescription (QR Code) accepted at all 22,000+ pharmacies nationwide.",
    localIntroTitle: "Why Tourists Across Spain Cannot Buy Prescription Medicines Over the Counter",
    localIntroParagraphs: [
      "Under strict Spanish and EU pharmaceutical regulations, licensed Spanish pharmacies (Farmacias) are legally prohibited from dispensing antibiotics, prescription asthma inhalers, antibiotic ear or eye drops, and chronic daily medications without a valid Spanish prescription. Pharmacists face severe fines for making exceptions — even if you show an empty medication box or an urgent medical need.",
      "In addition, following Brexit, UK NHS paper prescriptions and NHS App screenshots are not legally valid at Spanish pharmacies, nor are prescriptions issued in the United States, Canada, or Australia. Instead of losing half a day of your holiday queuing at a public Centro de Salud or hospital Urgencias, our English-speaking medical coordination connects you directly with a collegiate doctor in Spain via phone or WhatsApp.",
    ],
    areasServed: [
      "Tenerife",
      "Gran Canaria",
      "Lanzarote",
      "Benidorm & Costa Blanca",
      "Mallorca",
      "Ibiza",
      "Barcelona",
      "Madrid",
      "Marbella & Costa del Sol",
      "Alicante",
      "Valencia",
      "Seville",
    ],
    airportNote:
      "Luggage delayed or medication left behind on flights into Tenerife South (TFS), Palma de Mallorca (PMI), Alicante (ALC), Barcelona El Prat (BCN), Madrid Barajas (MAD), or Málaga (AGP)? Send a photo of your medication label or NHS App via WhatsApp for fast clinical review.",
    pharmacyGuideTitle: "How to Collect Your QR Prescription at Any Spanish Pharmacy (Farmacia)",
    pharmacyGuideText:
      "Every licensed pharmacy in Spain is marked by a glowing green cross (Cruz Verde). Once our licensed doctor sends your Official Spanish Electronic Prescription (e-receta privada QR code) to your phone, simply walk into any pharmacy — including 24-hour on-duty Farmacias de Guardia at night, on Sundays, or on bank holidays — show the QR code alongside your passport or photo ID, and the pharmacist will dispense your medication on the spot.",
    faqs: [
      {
        q: "Can I buy antibiotics or an asthma inhaler over the counter in Spain?",
        a: "No. Spanish law strictly classifies antibiotics (for UTIs, throat, sinus, dental, or ear infections) and asthma inhalers (such as Ventolin/Salbutamol) as prescription-only medicines. You must have a clinical evaluation by a licensed doctor in Spain to receive a valid Spanish QR prescription before a pharmacy can dispense them.",
      },
      {
        q: "Can I use my UK NHS prescription, NHS App, or US prescription in a Spanish pharmacy?",
        a: "No. Following Brexit, UK paper prescriptions and NHS App barcodes are not valid in Spanish pharmacies. Prescriptions from the US, Canada, Australia, and other non-EU countries are also rejected. However, showing our doctor a photo of your NHS App medication list or old packaging speeds up your Spanish teleconsultation.",
      },
      {
        q: "How does the WhatsApp consultation and prescription process work?",
        a: "First, you message our 24/7 coordination desk on WhatsApp with your location, symptoms, or medication details. We confirm availability and the transparent consultation fee upfront. Immediately afterward, a licensed Spanish doctor contacts you directly via phone or WhatsApp to perform your medical assessment and, when clinically indicated, sends your Official Spanish QR Prescription straight to your phone.",
      },
      {
        q: "Which medications cannot be prescribed through an online consultation in Spain?",
        a: "Under Spanish medical regulations and clinical safety standards, controlled substances and high-risk drugs — including strong opioid painkillers (tramadol, codeine, oxycodone), benzodiazepines (diazepam, lorazepam, alprazolam), sleeping pills (zolpidem), and ADHD stimulants — cannot be prescribed via remote consultation.",
      },
      {
        q: "Does this online consultation include a medical report?",
        a: "No. This express teleconsultation service is specifically focused on rapid clinical assessment and issuing your Official Spanish Electronic Prescription (QR code) so you can collect your medication immediately at any pharmacy in Spain.",
      },
    ],
  },
  {
    slug: "online-prescription-tenerife",
    locationName: "Tenerife",
    regionLabel: "Canary Islands · Tenerife South & North",
    metaTitle: "Online Prescription Tenerife (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, ear drops, an inhaler, or forgotten medication in Tenerife? Fast WhatsApp medical coordination with a licensed Spanish doctor. Official QR prescription valid at all pharmacies in Costa Adeje, Playa de las Américas & Los Cristianos.",
    keywords: [
      "online prescription tenerife",
      "get antibiotics tenerife tourist",
      "doctor prescription tenerife",
      "lost medication costa adeje",
      "pharmacy prescription playa de las americas",
      "UK prescription tenerife pharmacy",
      "UTI antibiotics tenerife",
      "forgot inhaler tenerife",
    ],
    badge: "🇮🇨 TENERIFE · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Tenerife",
    heroSubtitle:
      "Staying in Costa Adeje, Playa de las Américas, Los Cristianos, or Puerto de la Cruz and need antibiotics, swimmer's ear drops, an asthma inhaler, or replacement regular medication? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to evaluate your case and send an Official Spanish QR Prescription accepted at every pharmacy in Tenerife.",
    localIntroTitle: "Fast Prescription Access for Tourists in Tenerife Without Waiting in Clinics",
    localIntroParagraphs: [
      "Tenerife welcomes millions of British, Irish, and international winter-sun travellers every year, and pharmacies across Costa Adeje, Los Cristianos, and Playa de las Américas strictly enforce Spanish prescription laws. Pharmacists cannot legally sell oral antibiotics for UTIs or chest infections, antibiotic ear drops for pool-related swimmer's ear, or prescription Ventolin inhalers over the counter — and UK NHS or non-EU prescriptions are not accepted.",
      "Instead of spending hours travelling to a busy Centro de Salud or paying for an unnecessary walk-in clinic wait, our coordination team takes your request on WhatsApp and connects you directly with a registered Spanish physician. Following clinical evaluation, your official Spanish e-receta QR code is sent straight to your smartphone.",
    ],
    areasServed: [
      "Costa Adeje",
      "Playa de las Américas",
      "Los Cristianos",
      "Golf del Sur",
      "Los Gigantes",
      "Puerto de la Cruz",
      "Santa Cruz de Tenerife",
      "El Médano",
      "La Caleta",
      "Callao Salvaje",
    ],
    airportNote:
      "Flying into Tenerife South Airport (TFS) or Tenerife North (TFN) and realised your daily medication or asthma inhaler was left at home or delayed with your suitcase? Send a photo of your NHS App or medication box on WhatsApp for rapid doctor review.",
    pharmacyGuideTitle: "Collecting Your Prescription at Tenerife Pharmacies & 24h Farmacias de Guardia",
    pharmacyGuideText:
      "Tenerife has well-stocked pharmacies (green cross sign) throughout every resort area, plus 24-hour rotating Farmacias de Guardia in Adeje, Arona (Los Cristianos / Las Américas), and Puerto de la Cruz. Show the official QR code on your phone together with your passport and collect your medication immediately.",
    faqs: [
      {
        q: "Can I buy antibiotics over the counter at a pharmacy in Tenerife?",
        a: "No. Even in major tourist resorts like Playa de las Américas, Costa Adeje, and Los Cristianos, Tenerife pharmacies strictly require an official Spanish doctor's prescription for all antibiotics, including UTI treatments (fosfomycin/nitrofurantoin), amoxicillin, and antibiotic ear drops.",
      },
      {
        q: "Are UK NHS prescriptions or the NHS App accepted in Tenerife pharmacies?",
        a: "No. Since Brexit, UK paper prescriptions and NHS App barcodes cannot be used to dispense medication in Tenerife. Our licensed Spanish doctor can review your NHS App medication screen during your consultation and issue an Official Spanish QR Prescription.",
      },
      {
        q: "How fast can I get a prescription in Tenerife via WhatsApp?",
        a: "Once you message our WhatsApp coordination desk and confirm your booking, our licensed doctor contacts you directly (typically within 15–30 minutes) to evaluate your symptoms or regular medication and send the official QR prescription straight to your phone.",
      },
      {
        q: "Can I collect the QR prescription at night or on Sunday in Tenerife?",
        a: "Yes. Official Spanish electronic prescriptions (QR codes) are accepted at all regular pharmacies and at 24-hour on-duty Farmacias de Guardia across Tenerife South and North. Simply bring your phone and passport.",
      },
      {
        q: "What if I need strong painkillers or sleeping pills in Tenerife?",
        a: "Under Spanish regulations, controlled substances (strong opioids, benzodiazepines, sleeping pills, and ADHD stimulants) cannot be prescribed remotely. For urgent emergencies or controlled medications, visit a local hospital Urgencias or call 112.",
      },
    ],
  },
  {
    slug: "online-prescription-gran-canaria",
    locationName: "Gran Canaria",
    regionLabel: "Canary Islands · Maspalomas, Playa del Inglés & Las Palmas",
    metaTitle: "Online Prescription Gran Canaria (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Get an Official Spanish QR Prescription in Gran Canaria without leaving your hotel. Fast WhatsApp intake and direct doctor consultation for antibiotics, inhalers & forgotten medication in Maspalomas, Playa del Inglés & Puerto Rico.",
    keywords: [
      "online prescription gran canaria",
      "get antibiotics gran canaria tourist",
      "prescription maspalomas pharmacy",
      "lost medication playa del ingles",
      "doctor prescription puerto rico gran canaria",
      "UK prescription gran canaria",
    ],
    badge: "🇮🇨 GRAN CANARIA · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Gran Canaria",
    heroSubtitle:
      "Holidaying in Maspalomas, Playa del Inglés, Meloneras, Puerto Rico, or Las Palmas and need an urgent prescription? Message our WhatsApp coordination desk and a licensed Spanish doctor will contact you directly for clinical evaluation and issue an Official Spanish Electronic Prescription (QR Code) accepted at every pharmacy in Gran Canaria.",
    localIntroTitle: "Skip Resort Clinic Queues in Maspalomas, Playa del Inglés & Puerto Rico",
    localIntroParagraphs: [
      "Whether you are dealing with a sudden urinary tract infection (UTI), painful swimmer's ear from hotel pools, or ran out of essential daily pills in southern Gran Canaria, local farmacias cannot legally hand out prescription medication without an official Spanish doctor's script — and UK NHS or Scandinavian digital prescriptions are routinely refused.",
      "With our WhatsApp medical coordination, you stay comfortably at your hotel or apartment. We take your details immediately, confirm the fee upfront, and a licensed Spanish doctor contacts you directly in English to review your case and send your official QR prescription straight to your phone.",
    ],
    areasServed: [
      "Maspalomas",
      "Playa del Inglés",
      "Meloneras",
      "Puerto Rico",
      "Puerto de Mogán",
      "San Agustín",
      "Arguineguín",
      "Las Palmas de Gran Canaria",
      "Amadores",
    ],
    airportNote:
      "Missing medication after arriving at Gran Canaria Airport (LPA)? Keep a screenshot of your NHS App or home prescription ready to share via WhatsApp so our doctor can review your continuity treatment quickly.",
    pharmacyGuideTitle: "Using Your QR Prescription at Pharmacies Across Gran Canaria",
    pharmacyGuideText:
      "Every licensed farmacia across Maspalomas, Playa del Inglés, Puerto Rico, and Las Palmas — including 24-hour Farmacias de Guardia — scans Spain's official private e-prescription QR system. Just show the QR code on your smartphone along with your passport.",
    faqs: [
      {
        q: "Can I get UTI or ear infection antibiotics at a pharmacy in Playa del Inglés without a prescription?",
        a: "No. Spanish pharmacy regulations in Gran Canaria strictly prohibit dispensing oral antibiotics or antibiotic ear drops without a valid Spanish prescription following medical evaluation.",
      },
      {
        q: "Does my UK NHS prescription work in Gran Canaria?",
        a: "No. UK prescriptions are not accepted in Gran Canaria pharmacies after Brexit. Our Spanish-registered doctor can review your NHS App record during a quick consultation and issue a local Spanish QR prescription.",
      },
      {
        q: "How does the online doctor consultation work in Gran Canaria?",
        a: "Message our WhatsApp desk with your location and symptoms or medication photo. We confirm availability and the transparent fee upfront, then our licensed doctor contacts you directly to evaluate your case and send your QR prescription.",
      },
      {
        q: "Is the QR prescription accepted in Puerto Rico, Meloneras, and Las Palmas?",
        a: "Yes. Your official Spanish electronic prescription is valid at every licensed pharmacy across the entire island of Gran Canaria, including 24-hour on-duty pharmacies.",
      },
      {
        q: "Can the doctor prescribe controlled sleeping tablets or strong opioids online?",
        a: "No. Controlled substances (opioids, benzodiazepines, sleeping pills, and ADHD stimulants) cannot be prescribed remotely under Spanish regulations.",
      },
    ],
  },
  {
    slug: "online-prescription-lanzarote",
    locationName: "Lanzarote",
    regionLabel: "Canary Islands · Puerto del Carmen, Playa Blanca & Costa Teguise",
    metaTitle: "Online Prescription Lanzarote (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, an asthma inhaler, or lost medication in Lanzarote? Quick WhatsApp intake and direct consultation with a licensed Spanish doctor. Official QR prescription valid across Puerto del Carmen, Playa Blanca & Costa Teguise.",
    keywords: [
      "online prescription lanzarote",
      "get antibiotics lanzarote tourist",
      "lost medication puerto del carmen",
      "pharmacy prescription playa blanca",
      "doctor prescription costa teguise",
      "UK prescription lanzarote",
    ],
    badge: "🇮🇨 LANZAROTE · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Lanzarote",
    heroSubtitle:
      "Staying in Puerto del Carmen, Playa Blanca, or Costa Teguise and need an urgent prescription for antibiotics, ear drops, an inhaler, or forgotten daily medication? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to send your Official Spanish QR Prescription valid at every pharmacy in Lanzarote.",
    localIntroTitle: "Quick Medical Prescriptions for Tourists Staying Anywhere in Lanzarote",
    localIntroParagraphs: [
      "Lanzarote is one of Europe's busiest year-round destinations for British and Irish travellers. If you wake up with cystitis, an ear or throat infection, or discover you left your regular blood pressure pills or asthma puffer behind, pharmacies in Puerto del Carmen, Playa Blanca, and Costa Teguise cannot legally dispense them without a Spanish prescription.",
      "Our fast WhatsApp coordination eliminates the stress of searching for an open clinic or waiting hours in Arrecife. Our coordinator takes your details immediately, confirms the fee upfront, and our licensed Spanish doctor calls or messages you directly to complete the clinical evaluation and issue your official QR prescription.",
    ],
    areasServed: [
      "Puerto del Carmen",
      "Playa Blanca",
      "Costa Teguise",
      "Arrecife",
      "Matagorda",
      "Puerto Calero",
      "Yaiza",
      "Tías",
    ],
    airportNote:
      "Did your luggage get delayed at César Manrique-Lanzarote Airport (ACE) or did you forget essential pills before boarding? Share a photo of your medication label or NHS App on WhatsApp for fast clinical review.",
    pharmacyGuideTitle: "Collecting Your Medication in Puerto del Carmen, Playa Blanca & Costa Teguise",
    pharmacyGuideText:
      "Once the doctor sends your Official Spanish Electronic Prescription (QR code) to your phone, head to any green-cross Farmacia in Lanzarote — including 24-hour rotating Farmacias de Guardia in Tías, Yaiza, and Arrecife — with your passport to pick up your medication.",
    faqs: [
      {
        q: "Can I buy antibiotics without a prescription in Puerto del Carmen or Playa Blanca?",
        a: "No. All pharmacies in Lanzarote follow Spanish national law, which strictly requires an official Spanish doctor's prescription for antibiotics, prescription ear/eye drops, and asthma inhalers.",
      },
      {
        q: "Are UK or Irish prescriptions accepted at Lanzarote pharmacies?",
        a: "UK prescriptions are not accepted after Brexit, and foreign digital scripts frequently cause delays or rejections. Getting a local Spanish electronic QR prescription via our licensed doctor ensures immediate dispensing at any Lanzarote pharmacy.",
      },
      {
        q: "How will I receive my prescription in Lanzarote?",
        a: "After our coordinator takes your WhatsApp intake and confirms the fee, our licensed Spanish doctor contacts you directly for your clinical evaluation and sends the official QR prescription straight to your phone.",
      },
      {
        q: "Can I use the QR code at a 24-hour pharmacy in Lanzarote?",
        a: "Yes. It is accepted at every regular pharmacy and 24-hour Farmacia de Guardia across Lanzarote. Remember to bring your passport or photo ID.",
      },
      {
        q: "Are controlled drugs available via online consultation?",
        a: "No. Strong opioids, benzodiazepines, sleeping pills, and ADHD stimulants cannot be prescribed remotely under Spanish regulations.",
      },
    ],
  },
  {
    slug: "online-prescription-benidorm",
    locationName: "Benidorm",
    regionLabel: "Costa Blanca · Benidorm, Alicante, Altea & Calpe",
    metaTitle: "Online Prescription Benidorm (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, an inhaler, or lost UK medication in Benidorm? Start a fast WhatsApp intake and a licensed Spanish doctor contacts you to issue an Official Spanish QR Prescription valid at all pharmacies in Levante, Poniente & Rincón de Loix.",
    keywords: [
      "online prescription benidorm",
      "get antibiotics benidorm tourist",
      "UK prescription benidorm pharmacy",
      "lost medication benidorm",
      "forgot inhaler benidorm",
      "UTI antibiotics benidorm",
      "online doctor prescription alicante",
    ],
    badge: "🇪🇸 BENIDORM & COSTA BLANCA · OFFICIAL SPANISH QR PRESCRIPTION",
    h1: "Online Doctor Consultation & Spanish Prescription in Benidorm",
    heroSubtitle:
      "Staying near Levante Beach, Poniente, Rincón de Loix, Old Town Benidorm, Altea, or Calpe and need an urgent prescription? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to evaluate your case and send an Official Spanish Electronic Prescription (QR Code) accepted at every pharmacy in Benidorm and Alicante.",
    localIntroTitle: "Why UK & European Tourists in Benidorm Use Express Online Prescriptions",
    localIntroParagraphs: [
      "Benidorm is Spain's number-one destination for British, Irish, and Dutch holidaymakers all year round. One of the most common holiday surprises is discovering at a farmacia in Levante or Rincón de Loix that UK NHS paper prescriptions and NHS App screenshots are no longer valid in Spain, and that pharmacists cannot legally sell antibiotics or asthma puffers over the counter.",
      "Rather than sitting in a crowded waiting room at a public health centre or private walk-in clinic, our WhatsApp coordination desk takes your request in minutes, confirms the fee upfront, and connects you directly with a licensed Spanish doctor who evaluates your symptoms or regular treatment and sends your official QR prescription straight to your phone.",
    ],
    areasServed: [
      "Levante Beach",
      "Poniente Beach",
      "Rincón de Loix",
      "Benidorm Old Town",
      "La Cala de Finestrat",
      "Albir & Alfaz del Pi",
      "Altea",
      "Calpe",
      "Torrevieja",
      "Alicante City",
    ],
    airportNote:
      "Lost your suitcase or forgot daily pills on your flight into Alicante-Elche Airport (ALC)? Send a clear photo of your empty box or NHS App medication screen on WhatsApp so our doctor can review your replacement prescription quickly.",
    pharmacyGuideTitle: "Using Your Official QR Prescription in Benidorm Pharmacies (24h Coverage)",
    pharmacyGuideText:
      "Benidorm has numerous pharmacies along Avenida del Mediterráneo, Levante, Poniente, and the Old Town, plus 24-hour Farmacias de Guardia every single night. Simply present the official QR code on your smartphone with your passport to collect your medication immediately.",
    faqs: [
      {
        q: "Can I use my UK NHS prescription or NHS App in a Benidorm pharmacy?",
        a: "No. Following Brexit, UK NHS prescriptions and NHS App screens are not legally valid at Benidorm pharmacies. Our Spanish-licensed doctor can review your NHS App details during a quick consultation and issue an Official Spanish QR Prescription.",
      },
      {
        q: "Can I buy antibiotics over the counter in Benidorm?",
        a: "No. Spanish authorities strictly enforce prescription rules in Benidorm and across the Costa Blanca. Antibiotics for UTIs, chest, throat, dental, or ear infections require a doctor's clinical evaluation and an official Spanish prescription.",
      },
      {
        q: "How quickly does the doctor contact me after I message on WhatsApp?",
        a: "Our 24/7 WhatsApp coordination desk takes your details and confirms availability and the fee upfront. A licensed Spanish doctor then contacts you directly (typically within 15–30 minutes) to complete your assessment and send the QR prescription.",
      },
      {
        q: "Is the QR prescription accepted in Altea, Calpe, Albir, and Alicante too?",
        a: "Yes. Your official Spanish electronic prescription is valid at all 22,000+ licensed pharmacies across the Costa Blanca and all of Spain.",
      },
      {
        q: "Does this teleconsultation include controlled drugs or a medical report?",
        a: "No. Controlled substances (strong opioids, benzodiazepines, sleeping tablets, ADHD medications) cannot be prescribed remotely, and this express teleconsultation focuses specifically on clinical assessment and issuing your Official Spanish QR Prescription (no medical report).",
      },
    ],
  },
  {
    slug: "online-prescription-mallorca",
    locationName: "Mallorca",
    regionLabel: "Balearic Islands · Palma, Magaluf, Palmanova & Alcúdia",
    metaTitle: "Online Prescription Mallorca (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, swimmer's ear drops, an inhaler, or lost medication in Mallorca? Fast WhatsApp intake and direct Spanish doctor consultation. Official QR prescription valid at all pharmacies in Palma, Palmanova, Alcúdia & Cala Millor.",
    keywords: [
      "online prescription mallorca",
      "get antibiotics mallorca tourist",
      "prescription palma de mallorca pharmacy",
      "lost medication magaluf palmanova",
      "doctor prescription alcudia",
      "UK prescription mallorca",
    ],
    badge: "🇪🇸 MALLORCA · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Mallorca",
    heroSubtitle:
      "Visiting Palma de Mallorca, Palmanova, Magaluf, Santa Ponsa, Alcúdia, Sóller, or Cala Millor and need an urgent prescription? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to evaluate your case and send an Official Spanish QR Prescription valid at every pharmacy across Mallorca.",
    localIntroTitle: "Fast Prescription Replacement & Acute Care for Mallorca Holidaymakers",
    localIntroParagraphs: [
      "From family beach resorts in Alcúdia and Cala Millor to Palma, Santa Ponsa, and Palmanova, Mallorca pharmacies enforce strict Spanish prescription rules. Whether you need antibiotics for a sudden UTI or ear infection after swimming, or forgot your regular inhaler or daily tablets at home, a Spanish farmacia cannot dispense them without a local Spanish doctor's prescription.",
      "Skip crowded island clinics and language barriers. Our English-speaking WhatsApp coordination team takes your request immediately, confirms the fee upfront, and connects you directly with a registered Spanish doctor who evaluates your clinical needs and sends your official Spanish e-receta QR code straight to your phone.",
    ],
    areasServed: [
      "Palma de Mallorca",
      "Palmanova & Magaluf",
      "Santa Ponsa",
      "Port d'Alcúdia & Alcúdia",
      "Cala Millor",
      "Sóller & Port de Sóller",
      "Cala d'Or",
      "El Arenal & Playa de Palma",
      "Pollensa",
    ],
    airportNote:
      "Suitcase delayed at Palma de Mallorca Airport (PMI) or essential medication left behind before your flight? Send a photo of your NHS App or medication box via WhatsApp for prompt clinical evaluation.",
    pharmacyGuideTitle: "Collecting Your QR Prescription at Pharmacies Across Mallorca",
    pharmacyGuideText:
      "Look for the glowing green cross (Farmacia) in Palma or any coastal town in Mallorca. Every pharmacy — including 24-hour rotating Farmacias de Guardia across the Balearic Islands — accepts your official Spanish QR prescription alongside your passport.",
    faqs: [
      {
        q: "Can I buy antibiotics or ear drops without a prescription in Mallorca?",
        a: "No. Antibiotics and prescription antibiotic/steroid ear drops strictly require a Spanish medical prescription across Mallorca and all of Spain.",
      },
      {
        q: "Are UK or US prescriptions accepted in Palma de Mallorca pharmacies?",
        a: "No. UK NHS prescriptions (post-Brexit) and non-EU prescriptions (US, Canada, Australia) cannot be dispensed directly in Mallorca. Our licensed Spanish doctor can evaluate your regular treatment and issue a valid Spanish QR prescription.",
      },
      {
        q: "How does the online doctor consultation work while I am in Mallorca?",
        a: "Send a WhatsApp message to our coordination desk with your location and symptoms or medication details. Once availability and fee are confirmed upfront, a collegiate doctor in Spain contacts you directly to assess your case and send your QR prescription.",
      },
      {
        q: "Can I use the QR prescription in Alcúdia, Cala Millor, and Santa Ponsa?",
        a: "Yes. Your official electronic QR prescription is valid at every licensed pharmacy across Mallorca, Menorca, Ibiza, and mainland Spain.",
      },
      {
        q: "Which medicines cannot be prescribed online in Mallorca?",
        a: "Controlled medications (strong opioids, benzodiazepines, sleeping tablets, and ADHD stimulants) cannot be prescribed remotely under Spanish law.",
      },
    ],
  },
  {
    slug: "online-prescription-ibiza",
    locationName: "Ibiza",
    regionLabel: "Balearic Islands · Ibiza Town, Playa d'en Bossa & San Antonio",
    metaTitle: "Online Prescription Ibiza (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need antibiotics, an inhaler, or lost medication in Ibiza? Quick WhatsApp intake and direct Spanish doctor consultation. Official Spanish QR prescription accepted at all pharmacies in Playa d'en Bossa, San Antonio & Ibiza Town.",
    keywords: [
      "online prescription ibiza",
      "get antibiotics ibiza tourist",
      "lost medication ibiza pharmacy",
      "UTI antibiotics ibiza",
      "doctor prescription san antonio ibiza",
      "UK prescription ibiza",
    ],
    badge: "🇪🇸 IBIZA · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Ibiza",
    heroSubtitle:
      "Staying in Ibiza Town, Playa d'en Bossa, San Antonio, or Santa Eulalia and need an urgent prescription for an infection, lost inhaler, or forgotten regular medication? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to send your Official Spanish QR Prescription valid at every pharmacy in Ibiza.",
    localIntroTitle: "Get a Legal Spanish Prescription in Ibiza Without Wasting Your Trip in a Clinic",
    localIntroParagraphs: [
      "During peak season in Ibiza, local health centres and private walk-in clinics in Ibiza Town and San Antonio frequently have long waiting times — and pharmacies across the island strictly refuse to sell antibiotics, prescription inhalers, or chronic medications without an official Spanish prescription.",
      "With our express WhatsApp coordination, you don't need to leave your hotel or villa. Send us your symptoms or a photo of your regular medication box / NHS App, confirm the fee upfront, and a licensed Spanish doctor contacts you directly to evaluate your case and send your official Spanish QR prescription straight to your phone.",
    ],
    areasServed: [
      "Ibiza Town (Eivissa)",
      "Playa d'en Bossa",
      "San Antonio (Sant Antoni)",
      "Santa Eulalia",
      "Talamanca",
      "Cala Tarida",
      "Portinatx",
      "Es Canar",
    ],
    airportNote:
      "Lost baggage or forgotten medication after landing at Ibiza Airport (IBZ)? Message us on WhatsApp with a photo of your medication label or NHS App so our doctor can quickly evaluate a replacement prescription.",
    pharmacyGuideTitle: "Picking Up Your Medication at Ibiza Pharmacies & 24h Farmacias de Guardia",
    pharmacyGuideText:
      "Once the doctor sends your official QR prescription to your phone, show it with your passport at any green-cross Farmacia in Ibiza Town, Playa d'en Bossa, San Antonio, or Santa Eulalia — including 24-hour rotating Farmacias de Guardia.",
    faqs: [
      {
        q: "Can I get antibiotics over the counter at a pharmacy in Ibiza?",
        a: "No. Spanish law prohibits Ibiza pharmacies from selling antibiotics without an official Spanish doctor's prescription following clinical evaluation.",
      },
      {
        q: "Will a pharmacy in Ibiza accept my UK NHS or US prescription?",
        a: "No. UK prescriptions (post-Brexit) and US/non-EU scripts are not valid in Ibiza pharmacies. Our licensed Spanish doctor can review your case and issue a valid Spanish QR prescription.",
      },
      {
        q: "How fast does the consultation take in Ibiza?",
        a: "Message our WhatsApp coordination desk for immediate intake and upfront fee confirmation. A licensed Spanish doctor then contacts you directly (typically within 15–30 minutes) to evaluate your case and send your QR prescription.",
      },
      {
        q: "Can I collect the prescription late at night in Ibiza?",
        a: "Yes. Your official Spanish QR prescription is accepted at all 24-hour on-duty Farmacias de Guardia in Ibiza. Just show the QR code on your phone and your passport.",
      },
      {
        q: "Can you prescribe controlled medications or sleeping pills online in Ibiza?",
        a: "No. Under Spanish medical regulations, controlled substances (strong opioids, benzodiazepines, sleeping pills, and ADHD stimulants) cannot be prescribed via remote consultation.",
      },
    ],
  },
  {
    slug: "online-prescription-barcelona",
    locationName: "Barcelona",
    regionLabel: "Catalonia · Eixample, Gothic Quarter, Barceloneta & Sitges",
    metaTitle: "Online Prescription Barcelona (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Tourist in Barcelona needing antibiotics, an inhaler, or lost UK/US medication? Start a fast WhatsApp intake and a licensed Spanish doctor contacts you to issue an Official Spanish QR Prescription valid at all Barcelona pharmacies.",
    keywords: [
      "online prescription barcelona",
      "get prescription in barcelona as a tourist",
      "US prescription barcelona pharmacy",
      "UK prescription barcelona",
      "get antibiotics barcelona tourist",
      "lost medication barcelona",
      "online doctor barcelona english",
    ],
    badge: "🇪🇸 BARCELONA · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Barcelona",
    heroSubtitle:
      "Visiting Barcelona from the UK, US, Canada, or anywhere abroad and need antibiotics, ear/eye drops, an asthma inhaler, or replacement for lost regular medication? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly to issue an Official Spanish Electronic Prescription (QR Code) accepted at every pharmacy in Barcelona.",
    localIntroTitle: "Fast Prescription Help for International Travellers in Barcelona (UK, US & Global)",
    localIntroParagraphs: [
      "Barcelona is one of the world's top year-round city break and cruise destinations, especially for visitors from the United States, United Kingdom, Canada, and Australia. Because non-EU prescriptions and post-Brexit UK NHS prescriptions are legally invalid in Catalonia, local pharmacies across Eixample, the Gothic Quarter, El Born, and Barceloneta will turn travellers away without an official Spanish doctor's prescription.",
      "Instead of losing a full afternoon of your trip in a hospital emergency room or hunting for an English-speaking walk-in clinic, our WhatsApp coordination desk takes your details immediately, confirms the fee upfront, and connects you directly with a licensed doctor in Spain who evaluates your case and sends your official QR prescription straight to your smartphone.",
    ],
    areasServed: [
      "Eixample",
      "Gothic Quarter (Barri Gòtic)",
      "El Born",
      "Barceloneta",
      "Gràcia",
      "Passeig de Gràcia",
      "Poblenou",
      "Sarrià-Sant Gervasi",
      "Port of Barcelona (Cruise Terminal)",
      "Sitges",
    ],
    airportNote:
      "Suitcase lost at Josep Tarradellas Barcelona-El Prat Airport (BCN) or about to board a Mediterranean cruise from the Port of Barcelona without your regular medication? Message us on WhatsApp with a photo of your prescription bottle or app for rapid doctor review.",
    pharmacyGuideTitle: "Using Your Official QR Prescription at 24-Hour Barcelona Pharmacies",
    pharmacyGuideText:
      "Barcelona has hundreds of licensed green-cross pharmacies (Farmàcia), including numerous 24-hour pharmacies in Eixample, Passeig de Gràcia, and Rambla Catalunya. Present your QR prescription on your phone along with your passport for immediate dispensing.",
    faqs: [
      {
        q: "Can I use a US, Canadian, or UK prescription at a pharmacy in Barcelona?",
        a: "No. Spanish law does not allow pharmacies in Barcelona to dispense prescription-only medications using US, Canadian, Australian, or post-Brexit UK NHS prescriptions. You need a local Spanish prescription, which our licensed doctor can issue digitally after a quick clinical consultation.",
      },
      {
        q: "Can tourists buy antibiotics over the counter in Barcelona?",
        a: "No. Antibiotics (for UTIs, sinus, dental, throat, or ear infections) strictly require a clinical evaluation and an official Spanish prescription across Barcelona and all of Catalonia.",
      },
      {
        q: "How quickly can I get an online prescription in Barcelona?",
        a: "Send a WhatsApp message to our 24/7 coordination desk with your location and symptoms or medication details. Once availability and fee are confirmed upfront, a licensed Spanish doctor contacts you directly (typically within 15–30 minutes) to assess your case and send the QR prescription.",
      },
      {
        q: "I am on a cruise stopping in Barcelona and lost my medication — can you help?",
        a: "Yes. As long as you have WhatsApp/phone access, our doctor can evaluate your regular treatment and send an Official Spanish QR Prescription to your phone so you can pick up your medication at a pharmacy near the port or city centre.",
      },
      {
        q: "Which medications cannot be prescribed remotely in Barcelona?",
        a: "Under Spanish regulations, controlled substances (strong opioid painkillers, benzodiazepines, sleeping pills, and ADHD stimulants like Adderall or Ritalin) cannot be prescribed via remote consultation.",
      },
    ],
  },
  {
    slug: "online-prescription-madrid",
    locationName: "Madrid",
    regionLabel: "Community of Madrid · Salamanca, Sol, Gran Vía & Retiro",
    metaTitle: "Online Prescription Madrid (QR Code) | English Doctor via WhatsApp",
    metaDescription:
      "Need an urgent Spanish prescription in Madrid for antibiotics, an inhaler, or lost US/UK medication? Fast WhatsApp intake and direct Spanish doctor consultation. Official QR prescription valid at all 24h Madrid pharmacies.",
    keywords: [
      "online prescription madrid",
      "get prescription in madrid as a tourist",
      "US prescription madrid pharmacy",
      "UK prescription madrid",
      "get antibiotics madrid tourist",
      "lost medication madrid",
      "english speaking online doctor madrid",
    ],
    badge: "🇪🇸 MADRID · OFFICIAL SPANISH QR PRESCRIPTION VIA WHATSAPP",
    h1: "Online Doctor Consultation & Spanish Prescription in Madrid",
    heroSubtitle:
      "In Madrid for leisure or business and need antibiotics, an asthma inhaler, or replacement for forgotten regular medication? Message our 24/7 WhatsApp desk and a licensed Spanish doctor will contact you directly in English to evaluate your case and send an Official Spanish Electronic Prescription (QR Code) accepted at every pharmacy in Madrid.",
    localIntroTitle: "Express Prescriptions for International Visitors & Business Travellers in Madrid",
    localIntroParagraphs: [
      "Madrid welcomes millions of travellers from the United States, United Kingdom, Latin America, and across Europe every year. If you develop a sudden UTI, throat or sinus infection, or discover your regular pills were left at home or lost in transit, pharmacies in Salamanca, Sol, Gran Vía, and Chamberí strictly require a local Spanish prescription — foreign scripts from the US, UK, or outside the EU are not accepted.",
      "Avoid wasting valuable business or holiday hours waiting in a public clinic. Message our 24/7 WhatsApp coordination desk, confirm the transparent fee upfront, and a registered Spanish physician contacts you directly to evaluate your case and send your official Spanish QR prescription straight to your phone.",
    ],
    areasServed: [
      "Salamanca",
      "Sol & Plaza Mayor",
      "Gran Vía",
      "Retiro",
      "Chamberí",
      "Malasaña & Chueca",
      "La Latina",
      "Atocha",
      "Chamartín / AZCA",
      "Barajas Airport Hotels",
    ],
    airportNote:
      "Lost your luggage at Adolfo Suárez Madrid-Barajas Airport (MAD) or forgot your daily tablets before an international flight? Share a photo of your prescription bottle, NHS App, or pharmacy record via WhatsApp for fast doctor evaluation.",
    pharmacyGuideTitle: "Collecting Your QR Prescription at 24-Hour Madrid Pharmacies",
    pharmacyGuideText:
      "Central Madrid has numerous 24-hour pharmacies (Farmacias 24 horas) across Salamanca, Gran Vía, Sol, Chamberí, and Atocha. Simply walk in with your passport and show the official Spanish QR prescription sent to your phone.",
    faqs: [
      {
        q: "Can I use a US or UK prescription at a pharmacy in Madrid?",
        a: "No. Pharmacies in Madrid cannot legally accept US, Canadian, Australian, or post-Brexit UK NHS prescriptions. Our licensed Spanish doctor can review your previous prescription details during a quick phone/WhatsApp consultation and issue an Official Spanish QR Prescription.",
      },
      {
        q: "Can I buy antibiotics without a prescription in Madrid?",
        a: "No. All oral antibiotics and prescription antibiotic drops strictly require a doctor's clinical assessment and an official Spanish prescription in Madrid.",
      },
      {
        q: "How does the WhatsApp doctor consultation work in Madrid?",
        a: "You message our 24/7 coordination team on WhatsApp with your symptoms or medication photo. We confirm availability and fee upfront, and a licensed Spanish doctor contacts you directly to evaluate your case and send your official QR prescription.",
      },
      {
        q: "Are there 24-hour pharmacies in Madrid that accept this QR code?",
        a: "Yes. Your official Spanish e-receta QR code is accepted at all licensed pharmacies across Madrid, including 24-hour pharmacies in Salamanca, Sol, Gran Vía, and near Barajas Airport.",
      },
      {
        q: "Can an online doctor in Madrid prescribe ADHD stimulants, sleeping pills, or strong opioids?",
        a: "No. Controlled substances (opioids, benzodiazepines, sleeping pills, and ADHD stimulants) cannot be prescribed remotely under Spanish regulations.",
      },
    ],
  },
];

export function getPrescriptionPageBySlug(
  slug: string
): PrescriptionPageData | undefined {
  return PRESCRIPTION_PAGES.find((p) => p.slug === slug);
}

