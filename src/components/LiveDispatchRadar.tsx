"use client";

import { useState, useEffect } from "react";

interface LiveDispatchRadarProps {
  locale?: string;
}

interface SymptomItem {
  icon: string;
  label: string;
  desc: string;
  query: string;
}

interface RadarTranslations {
  radarBadge: string;
  radarTitle: string;
  radarSubtitle: string;
  activeDoctors: string;
  avgEta: string;
  tryTriage: string;
  btnText: string;
  voiceBtn: string;
  insuredBadge: string;
  symptoms: SymptomItem[];
}

const TEXTS: Record<string, RadarTranslations> = {
  es: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Médico a Domicilio en la Costa del Sol",
    radarSubtitle: "Médicos privados disponibles 24/7 para visitas urgentes a hoteles, apartamentos y villas en la Costa del Sol",
    activeDoctors: "",
    avgEta: "Llegada Estimada: 30 - 60 min",
    tryTriage: "Elige tu síntoma o pulsa para iniciar el Triaje Médico Inmediato:",
    btnText: "Iniciar Triaje Médico",
    voiceBtn: "Grabar Audio de Síntomas",
    insuredBadge: "Factura e informe médico para reclamar a su seguro",
    symptoms: [
      { icon: "👂", label: "Dolor de Oído / Otitis", desc: "Dolor tras playa o piscina", query: "Dolor agudo de oído e inflamación tras nadar en la piscina." },
      { icon: "🤢", label: "Vómitos / Intoxicación", desc: "Náuseas y deshidratación", query: "Vómitos continuos, náuseas, dolor estomacal y deshidratación." },
      { icon: "👶", label: "Pediatría / Niños", desc: "Atención médica en habitación", query: "Bebé o niño con fiebre alta, malestar y pérdida de apetito." },
      { icon: "🤒", label: "Fiebre e Infección", desc: "Gripe o infección aguda", query: "Fiebre superior a 38.5°C con escalofríos y dolor de garganta." },
      { icon: "☀️", label: "Insolación / Quemaduras", desc: "Golpe de calor y quemaduras", query: "Golpe de calor, mareo y quemaduras solares intensas por el sol." },
      { icon: "🤕", label: "Dolor de Cabeza / Migraña", desc: "Alivio médico inmediato", query: "Dolor de cabeza muy intenso o migraña aguda que no remite." }
    ]
  },
  en: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Doctor Visits at Your Hotel or Home",
    radarSubtitle: "Private doctors available 24/7 for urgent visits to hotels, apartments & villas across the Costa del Sol",
    activeDoctors: "",
    avgEta: "Avg. Arrival: 30 - 60 min",
    tryTriage: "Select your symptom or tap to start Instant Clinical Triage:",
    btnText: "Start Clinical Triage",
    voiceBtn: "Record Audio Description",
    insuredBadge: "Official invoice & medical report to claim from your insurance",
    symptoms: [
      { icon: "👂", label: "Swimmer's Ear / Otitis", desc: "Ear pain after swimming", query: "Sharp ear pain, fullness and blockage after swimming in the pool." },
      { icon: "🤢", label: "Food Bug / Vomit", desc: "Nausea & dehydration", query: "Continuous vomiting, stomach cramps and signs of dehydration." },
      { icon: "👶", label: "Sick Child / Pediatric", desc: "Gentle in-room care", query: "Toddler with high fever, lethargy and poor feeding." },
      { icon: "🤒", label: "Fever & Infection", desc: "Acute illness & chills", query: "Fever above 38.5°C with severe throat pain, shivering and chills." },
      { icon: "☀️", label: "Sunstroke & Sunburn", desc: "Heatstroke & burn relief", query: "Severe sunstroke, heat exhaustion and painful sunburn after beach." },
      { icon: "🤕", label: "Headache / Migraine", desc: "Fast bedside pain relief", query: "Severe acute headache or migraine needing bedside doctor examination." }
    ]
  },
  de: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Arztbesuch im Hotel oder zu Hause",
    radarSubtitle: "Privatärzte 24/7 für dringende Besuche in Hotels, Apartments und Ferienwohnungen an der Costa del Sol",
    activeDoctors: "",
    avgEta: "Durchschn. Ankunft: 30 - 60 Min",
    tryTriage: "Wählen Sie ein Symptom oder starten Sie die Notfall-Triage:",
    btnText: "Ärztliche Triage starten",
    voiceBtn: "Sprachnachricht aufnehmen",
    insuredBadge: "Rechnung & Arztbericht zur Erstattung bei Versicherung",
    symptoms: [
      { icon: "👂", label: "Bade-Otitis / Ohr", desc: "Ohrenschmerzen nach Schwimmen", query: "Starke Ohrenschmerzen und Druckgefühl nach dem Schwimmen." },
      { icon: "🤢", label: "Magen-Darm / Erbrechen", desc: "Übelkeit & Dehydratation", query: "Anhaltendes Erbrechen, Magenkrämpfe und Dehydrierung." },
      { icon: "👶", label: "Kind krank / Pädiatrie", desc: "Arztbesuch im Hotelzimmer", query: "Kind mit hohem Fieber, Schwäche und Unwohlsein." },
      { icon: "🤒", label: "Fieber & Infekt", desc: "Akuter Infekt oder Grippe", query: "Fieber über 38,5°C mit Schüttelfrost und Halsschmerzen." },
      { icon: "☀️", label: "Sonnenstich & Brand", desc: "Hitzschlag & Verbrennung", query: "Sonnenstich, Kreislaufprobleme und schwere Verbrennungen nach der Sonne." },
      { icon: "🤕", label: "Kopfschmerzen / Migräne", desc: "Schnelle Schmerzlinderung", query: "Starke Kopfschmerzen oder Migräne, bitte um dringende Hilfe." }
    ]
  },
  fr: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Médecin à Domicile ou à l'Hôtel",
    radarSubtitle: "Médecins privés disponibles 24h/24 pour des visites urgentes en hôtels et appartements sur la Costa del Sol",
    activeDoctors: "",
    avgEta: "Arrivée estimée : 30 - 60 min",
    tryTriage: "Choisissez un symptôme ou démarrez le triage médical immédiat :",
    btnText: "Lancer le Triage Médical",
    voiceBtn: "Enregistrer Message Vocal",
    insuredBadge: "Facture et rapport médical pour remboursement assurance",
    symptoms: [
      { icon: "👂", label: "Douleur d'Oreille / Otite", desc: "Douleur après baignade", query: "Douleur aiguë à l'oreille et sensation de bouchon après baignade." },
      { icon: "🤢", label: "Gastro / Vomissements", desc: "Nausées et déshydratation", query: "Vomissements continus, crampes d'estomac et déshydratation." },
      { icon: "👶", label: "Enfant Malade / Pédiatrie", desc: "Soins médicaux en chambre", query: "Enfant avec forte fièvre, abattement et perte d'appétit." },
      { icon: "🤒", label: "Fièvre & Infection", desc: "Infection aiguë ou grippe", query: "Fièvre supérieure à 38,5°C avec frissons et maux de gorge." },
      { icon: "☀️", label: "Insolation & Brûlures", desc: "Coup de chaleur et soleil", query: "Coup de chaleur, malaise et coups de soleil intenses." },
      { icon: "🤕", label: "Maux de Tête / Migraine", desc: "Soulagement immédiat", query: "Céphalée aiguë sévère ou crise de migraine insupportable." }
    ]
  },
  nl: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Doktersbezoek aan Hotel of Thuis",
    radarSubtitle: "Privéartsen 24/7 beschikbaar voor spoedbezoeken aan hotels en appartementen aan de Costa del Sol",
    activeDoctors: "",
    avgEta: "Geschatte aankomst: 30 - 60 min",
    tryTriage: "Kies een symptoom of start directe medische triage:",
    btnText: "Start Medische Triage",
    voiceBtn: "Spraakbericht opnemen",
    insuredBadge: "Factuur en medisch rapport voor declaratie bij verzekering",
    symptoms: [
      { icon: "👂", label: "Zwemmersoor / Oorpijn", desc: "Pijn na het zwemmen", query: "Ernstige oorpijn en druk na het zwemmen." },
      { icon: "🤢", label: "Buikgriep / Braken", desc: "Misselijkheid & uitdroging", query: "Aanhoudend overgeven, buikkrampen en uitdroging." },
      { icon: "👶", label: "Ziek Kind / Pediatrie", desc: "Dokter op de hotelkamer", query: "Peuter met hoge koorts en lusteloosheid." },
      { icon: "🤒", label: "Koorts & Infectie", desc: "Acute griep of infectie", query: "Koorts boven 38,5°C met koude rillingen en keelpijn." },
      { icon: "☀️", label: "Zonnesteek & Brand", desc: "Hitte-uitputting en zon", query: "Zonnesteek, duizeligheid en zware zonnebrand na het strand." },
      { icon: "🤕", label: "Hoofdpijn / Migraine", desc: "Snelle pijnstilling", query: "Ernstige hoofdpijn of migraine die niet overgaat." }
    ]
  },
  sv: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Läkarbesök på Hotell eller Hem",
    radarSubtitle: "Privata läkare tillgängliga dygnet runt för akuta besök till hotell och lägenheter på Costa del Sol",
    activeDoctors: "",
    avgEta: "Beräknad ankomst: 30 - 60 min",
    tryTriage: "Välj ett symptom eller starta medicinsk triage:",
    btnText: "Starta Medicinsk Triage",
    voiceBtn: "Spela in röstmeddelande",
    insuredBadge: "Faktura och läkarintyg för ersättning från försäkring",
    symptoms: [
      { icon: "👂", label: "Simmaröra / Öronvärk", desc: "Värk efter bad", query: "Svår öronvärk och tryck efter bad i pool eller hav." },
      { icon: "🤢", label: "Magsjuka / Kräkning", desc: "Illamående & uttorkning", query: "Ihållande kräkningar, magkramper och uttorkning." },
      { icon: "👶", label: "Sjukt Barn / Pediatrik", desc: "Läkarvård på hotellrummet", query: "Barn med hög feber, hängighet och minskad aptit." },
      { icon: "🤒", label: "Feber & Infektion", desc: "Akut infektion eller influensa", query: "Feber över 38,5°C med frossa och halsont." },
      { icon: "☀️", label: "Solsting & Brännskada", desc: "Värmeslag och solskador", query: "Solsting, yrsel och kraftig solbränna efter stranden." },
      { icon: "🤕", label: "Huvudvärk / Migrän", desc: "Snabb smärtlindring", query: "Svår huvudvärk eller akut migränanfall." }
    ]
  },
  no: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Legebesøk på Hotell eller Hjem",
    radarSubtitle: "Private leger tilgjengelig 24/7 for akutte besøk til hoteller og leiligheter på Costa del Sol",
    activeDoctors: "",
    avgEta: "Beregnet ankomst: 30 - 60 min",
    tryTriage: "Velg et symptom eller start legetriage:",
    btnText: "Start Legetriage",
    voiceBtn: "Ta opp talemelding",
    insuredBadge: "Faktura og legeerklæring for refusjon fra forsikring",
    symptoms: [
      { icon: "👂", label: "Svømmeøre / Øresmerter", desc: "Smerter etter bading", query: "Sterke øresmerter etter bading, mistanke om ørebetennelse." },
      { icon: "🤢", label: "Magesyke / Oppkast", desc: "Kvalme og dehydrering", query: "Vedvarende oppkast, magesmerter og dehydrering." },
      { icon: "👶", label: "Sykt Barn / Pediatri", desc: "Legetilsyn på hotellrommet", query: "Barn med høy feber, slapphet og dårlig allmenntilstand." },
      { icon: "🤒", label: "Feber & Infeksjon", desc: "Akut sykdom eller influensa", query: "Feber over 38,5°C med frysninger og sår hals." },
      { icon: "☀️", label: "Solstikk & Forbrenning", desc: "Heteslag og solforbrenning", query: "Solstikk, svimmelhet og kraftig solforbrenning." },
      { icon: "🤕", label: "Hodepine / Migrene", desc: "Rask smertelindring", query: "Kraftig akutt hodepine eller migreneanfall." }
    ]
  },
  da: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Lægebesøg på Hotel eller Hjem",
    radarSubtitle: "Private læger tilgængelige 24/7 til akutte besøg på hoteller og ferieboliger på Costa del Sol",
    activeDoctors: "",
    avgEta: "Forventet ankomst: 30 - 60 min",
    tryTriage: "Vælg et symptom eller start lægetriage:",
    btnText: "Start Lægetriage",
    voiceBtn: "Optag stemmebesked",
    insuredBadge: "Faktura og lægeerklæring til refusion hos forsikring",
    symptoms: [
      { icon: "👂", label: "Svømmerøre / Øresmerter", desc: "Smerter efter badning", query: "Kraftige øresmerter efter badning, mulig otitis." },
      { icon: "🤢", label: "Maveonde / Opkast", desc: "Kvalme og dehydrering", query: "Vedvarende opkast, mavekramper og væskemangel." },
      { icon: "👶", label: "Sygt Barn / Pædiatri", desc: "Lægebesøg på hotelværelset", query: "Lille barn med høj feber og nedsat almentilstand." },
      { icon: "🤒", label: "Feber & Infektion", desc: "Akut sygdom eller influenza", query: "Feber over 38,5°C med kulderystelser og ondt i halsen." },
      { icon: "☀️", label: "Solstik & Forbrænding", desc: "Hedeslag og solskoldning", query: "Solstik, svimmelhed og slem solskoldning efter stranden." },
      { icon: "🤕", label: "Hovedpine / Migræne", desc: "Hurtig smertelindring", query: "Kraftig akut hovedpine eller migræneanfald." }
    ]
  },
  fi: {
    radarBadge: "COSTA DEL SOL 24/7",
    radarTitle: "Lääkärikäynti Hotelliin tai Kotiin",
    radarSubtitle: "Yksityislääkärit saatavilla 24/7 kiireellisiin käynteihin hotelleihin ja asuntoihin Costa del Solilla",
    activeDoctors: "",
    avgEta: "Saapumisaika: 30 - 60 min",
    tryTriage: "Valitse oire tai aloita lääkärintarkistus puheella:",
    btnText: "Aloita lääkärintarkistus",
    voiceBtn: "Äänitä ääniviesti",
    insuredBadge: "Lasku ja lääkärinlausunto vakuutuskorvausta varten",
    symptoms: [
      { icon: "👂", label: "Uimarin Korva / Kipu", desc: "Korvasärky uimisen jälkeen", query: "Kova korvasärky ja tukkoisuus uinnin jälkeen." },
      { icon: "🤢", label: "Vatsatauti / Oksentelu", desc: "Pahoinvointi ja nestehukka", query: "Jatkuva oksentelu, vatsakrampit ja nestehukka." },
      { icon: "👶", label: "Sairas Lapsi / Pediatria", desc: "Lääkäri hotellihuoneeseen", query: "Lapsella korkea kuume ja huono vointi." },
      { icon: "🤒", label: "Kuume & Infektio", desc: "Akuutti tulehdus tai flunssa", query: "Kuume yli 38,5°C, vilunväristykset ja kurkkukipu." },
      { icon: "☀️", label: "Auringonpistos & Palovamma", desc: "Lämpöhalvaus ja aurinko", query: "Auringonpistos, huimaus ja paha auringonpolttama." },
      { icon: "🤕", label: "Päänsärky / Migreeni", desc: "Nopea kivunlievitys", query: "Kova päänsärky tai akuutti migreeni." }
    ]
  },
  ru: {
    radarBadge: "КОСТА-ДЕЛЬ-СОЛЬ 24/7",
    radarTitle: "Врач на Дом или в Отель",
    radarSubtitle: "Частные врачи круглосуточно для срочных визитов в отели и апартаменты на Коста-дель-Соль",
    activeDoctors: "",
    avgEta: "Прибытие: 30 - 60 мин",
    tryTriage: "Выберите симптом или запишите аудио для оценки врача:",
    btnText: "Начать триаж врача",
    voiceBtn: "Записать голосовое сообщение",
    insuredBadge: "Счет и отчет для компенсации по вашей страховке",
    symptoms: [
      { icon: "👂", label: "Боль в Ухе / Отит", desc: "Боль после купания", query: "Сильная боль в ухе после купания в море или бассейне." },
      { icon: "🤢", label: "Отравление / Рвота", desc: "Тошнота и обезвоживание", query: "Сильная рвота, спазмы в желудке и обезвоживание." },
      { icon: "👶", label: "Заболел Ребенок", desc: "Осмотр педиатра в номере", query: "Ребенок с высокой температурой, слабостью и ознобом." },
      { icon: "🤒", label: "Температура и Грипп", desc: "Острая инфекция", query: "Температура выше 38.5°C, озноб и сильная боль в горле." },
      { icon: "☀️", label: "Солнечный удар и ожоги", desc: "Тепловой удар и солнце", query: "Тепловой или солнечный удар, головокружение и сильные ожоги." },
      { icon: "🤕", label: "Головная Боль / Мигрень", desc: "Быстрое обезболивание", query: "Сильная головная боль или приступ мигрени." }
    ]
  },
  ar: {
    radarBadge: "كوستا ديل سول 24/7",
    radarTitle: "طبيب في الفندق أو المنزل",
    radarSubtitle: "أطباء خاصون متاحون على مدار الساعة لزيارات عاجلة في الفنادق والشقق في كوستا ديل سول",
    activeDoctors: "",
    avgEta: "الوقت المقدر: 30 - 60 دقيقة",
    tryTriage: "اختر العَرَض أو تحدث صوتياً لبدء الفرز الطبي فوراً:",
    btnText: "بدء الفرز الطبي الفوري",
    voiceBtn: "تسجيل صوتي للأعراض",
    insuredBadge: "فاتورة وتقرير طبي رسمي لطلب التعويض من تأمينك",
    symptoms: [
      { icon: "👂", label: "ألم الأذن / التهاب", desc: "ألم بعد السباحة", query: "ألم حاد في الأذن وانسداد بعد السباحة." },
      { icon: "🤢", label: "تسمم غذائي / قيء", desc: "غثيان وجفاف", query: "قيء مستمر، مغص حاد وبوادر جفاف." },
      { icon: "👶", label: "طفل مريض / أطفال", desc: "طبيب في غرفتك الفندقية", query: "طفل يعاني من حمى شديدة وخمول." },
      { icon: "🤒", label: "حمى والتهاب حاد", desc: "عدوى حادة أو إنفلونزا", query: "حمى أعلى من 38.5 درجة مع قشعريرة وألم في الحلق." },
      { icon: "☀️", label: "ضربة شمس وحروق", desc: "إجهاد حراري وحروق شمس", query: "ضربة شمس، دوخة شديدة وإجهاد حراري ناتج عن الشمس." },
      { icon: "🤕", label: "صداع حاد / شقيقة", desc: "تسكين فوري للألم", query: "صداع حاد شديد أو نوبة شقيقة لا تستجيب للمسكنات العادية." }
    ]
  }
};

export default function LiveDispatchRadar({ locale = "en" }: LiveDispatchRadarProps) {
  const t = TEXTS[locale] || TEXTS.en;
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openTriage = (symptomQuery?: string, autoRecord?: boolean) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("openTriage", { detail: { symptom: symptomQuery, locale, startRecording: autoRecord } })
      );
    }
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-14">
      <div className="bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 rounded-3xl border border-cyan-500/30 shadow-[0_12px_45px_rgba(6,182,212,0.12)] p-6 sm:p-8 backdrop-blur-xl text-white">
        
        {/* Top Centered Status Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-700 tracking-wider uppercase mb-3 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 ${pulse ? "opacity-75" : "opacity-25"}`}></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </span>
            <span>{t.radarBadge}</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-800 tracking-tight text-white">
            {t.radarTitle}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {t.radarSubtitle}
          </p>

          {/* Symmetrical Live Status Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs shadow-sm">
              <span>⏱️</span>
              <span className="font-700 text-cyan-300">{t.avgEta}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs shadow-sm">
              <span className="text-emerald-400 font-bold">🛡️</span>
              <span className="font-600 text-slate-200">{t.insuredBadge}</span>
            </div>
          </div>
        </div>

        {/* Symmetrical 6-Symptom Quick Select Grid */}
        <div className="pt-6 sm:pt-7">
          <p className="text-xs font-700 uppercase tracking-wider text-slate-400 text-center mb-3.5">
            {t.tryTriage}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {t.symptoms.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => openTriage(s.query)}
                className="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/90 border border-slate-700/60 hover:border-cyan-400/60 transition-all duration-200 text-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(6,182,212,0.15)] h-full min-h-[110px]"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
                <span className="text-xs font-700 text-white leading-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">{s.label}</span>
                <span className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Centered Symmetrical Action Buttons (Triage + Dedicated Big Voice Button) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => openTriage()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:via-teal-400 hover:to-blue-500 text-white font-800 text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2.5"
          >
            <span className="text-base">🩺</span>
            <span>{t.btnText}</span>
          </button>

          <button
            type="button"
            onClick={() => openTriage(undefined, true)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-800 text-sm tracking-wide shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </span>
            <span>{t.voiceBtn}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
