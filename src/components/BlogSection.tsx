import Link from "next/link";
import { BLOG_POSTS, CITIES, type Locale } from "@/data/content";
import { PRESCRIPTION_PAGES } from "@/data/prescriptions";

interface BlogSectionProps {
  title: string;
  subtitle: string;
  readMoreLabel: string;
  locale: Locale;
  singlePost?: (typeof BLOG_POSTS)[0];
  isIndexPage?: boolean;
}

const RX_CALLOUT_COPY: Record<
  Locale,
  {
    badge: string;
    title: string;
    desc: string;
    pills: string[];
    btnRx: string;
    btnVisit: string;
    bottomBadge: string;
    bottomTitle: string;
    bottomDesc: string;
  }
> = {
  en: {
    badge: "🇪🇸 ONLINE DOCTOR CONSULTATION ACROSS ALL SPAIN · 15 MIN TRIAGE",
    title: "🩺 Need an Online Doctor Consultation & Official Prescription in Spain?",
    desc: "Book an Express Online/Phone Medical Consultation (15 min) with a licensed doctor in Spain. Following clinical evaluation of your symptoms or regular treatment, the doctor issues—when medically indicated—your Official Spanish Electronic Prescription (QR Code valid at all 22,000+ pharmacies in Spain).",
    pills: [
      "✓ Consultation for UTI / Ear & Eye Infections",
      "✓ Respiratory, Asthma & Allergy Evaluation",
      "✓ Continuity of Forgotten Regular Medication",
      "✓ Non-EU / UK Prescription Medical Assessment",
    ],
    btnRx: "🩺 Book Online Consultation + QR Prescription — €90 (15 min)",
    btnVisit: "🏨 Hotel & Home Doctor Visit (€130/€140)",
    bottomBadge: "24/7 Medical Care · All Spain & Costa del Sol",
    bottomTitle: "Need an Online Doctor Consultation + QR Prescription (€90) or a Doctor at Your Hotel?",
    bottomDesc:
      "Book a 15-minute Online Medical Consultation with an Official Spanish QR Prescription anywhere in Spain (€90), or request an in-person Private Doctor Visit at your hotel or apartment across the Costa del Sol in 30–60 minutes (€130–€140).",
  },
  es: {
    badge: "🇪🇸 TELECONSULTA MÉDICA EN TODA ESPAÑA · VALORACIÓN EN 15 MIN",
    title: "🩺 ¿Necesitas una consulta médica telemática y receta oficial en España?",
    desc: "Realiza una Teleconsulta Médica Express (en 15 minutos por teléfono/WhatsApp) con un médico colegiado en España. Tras la valoración clínica de tus síntomas o tratamiento habitual, el médico emite —bajo criterio facultativo— tu Receta Electrónica Oficial Española (Código QR válida en las 22.000+ farmacias de España).",
    pills: [
      "✓ Valoración de infecciones (urinaria, oído, garganta)",
      "✓ Síntomas respiratorios, asma y alergias",
      "✓ Continuidad de medicación crónica olvidada",
      "✓ Convalidación médica de tratamientos extranjeros (UK / No-UE)",
    ],
    btnRx: "🩺 Solicitar Teleconsulta + Receta QR — 90€ (15 min)",
    btnVisit: "🏨 Médico en Hotel / Domicilio (130€/140€)",
    bottomBadge: "Atención Médica 24/7 · Toda España y Costa del Sol",
    bottomTitle: "¿Necesitas una Teleconsulta Médica + Receta QR (90€) o un Médico en tu Hotel?",
    bottomDesc:
      "Solicita una Teleconsulta Médica Express en 15 minutos con emisión de Receta Electrónica Española QR válida en toda España (90€), o pide un médico presencial en tu hotel o apartamento en la Costa del Sol en 30–60 minutos (130€–140€).",
  },
  de: {
    badge: "🇪🇸 ÄRZTLICHE TELEKONSULTATION IN GANZ SPANIEN · IN 15 MIN",
    title: "🩺 Benötigen Sie eine Online-Arztkonsultation & ein offizielles Rezept in Spanien?",
    desc: "Buchen Sie eine Express-Online-/Telefonkonsultation (15 Min.) bei einem in Spanien zugelassenen Arzt. Nach ärztlicher Beurteilung Ihrer Symptome oder Dauermedikation stellt der Arzt bei medizinischer Indikation Ihr offizielles spanisches E-Rezept aus (QR-Code für alle 22.000+ Apotheken in Spanien).",
    pills: [
      "✓ Ärztliche Abklärung bei Harnwegs-, Ohren- & Halsinfektionen",
      "✓ Atemwegs-, Asthma- & Allergiebewertung",
      "✓ Weiterführung vergessener Dauermedikamente",
      "✓ Ärztliche Prüfung ausländischer Rezepte",
    ],
    btnRx: "🩺 Online-Konsultation + QR-Rezept buchen — 90€ (15 Min)",
    btnVisit: "🏨 Arztbesuch im Hotel / Apartment (130€/140€)",
    bottomBadge: "24/7 Ärztlicher Dienst · Ganz Spanien & Costa del Sol",
    bottomTitle: "Online-Arztkonsultation + QR-Rezept (90€) oder Privatarzt im Hotel benötigt?",
    bottomDesc:
      "15-minütige Online-Arztkonsultation inkl. offiziellem spanischen QR-Rezept in ganz Spanien (90€) oder persönlicher Arztbesuch im Hotel an der Costa del Sol in 30–60 Minuten (130€–140€).",
  },
  fr: {
    badge: "🇪🇸 TÉLÉCONSULTATION MÉDICALE DANS TOUTE L'ESPAGNE · EN 15 MIN",
    title: "🩺 Besoin d'une téléconsultation médicale et d'une ordonnance officielle en Espagne ?",
    desc: "Effectuez une téléconsultation médicale express (15 min par téléphone/WhatsApp) avec un médecin inscrit en Espagne. Après évaluation clinique, le médecin délivre — sur indication médicale — votre ordonnance électronique espagnole officielle (Code QR valable dans les 22 000+ pharmacies d'Espagne).",
    pills: [
      "✓ Consultation infections (urinaires, ORL, yeux)",
      "✓ Évaluation respiratoire, asthme et allergies",
      "✓ Continuité de traitement chronique oublié",
      "✓ Évaluation médicale d'ordonnances étrangères",
    ],
    btnRx: "🩺 Téléconsultation + Ordonnance QR — 90€ (15 min)",
    btnVisit: "🏨 Médecin à l'Hôtel / Domicile (130€/140€)",
    bottomBadge: "Soins Médicaux 24h/24 · Toute l'Espagne & Costa del Sol",
    bottomTitle: "Besoin d'une Téléconsultation + Ordonnance QR (90€) ou d'un Médecin à votre Hôtel ?",
    bottomDesc:
      "Téléconsultation médicale en 15 minutes avec ordonnance officielle espagnole QR dans toute l'Espagne (90€), ou visite médicale à votre hôtel sur la Costa del Sol en 30–60 minutes (130€–140€).",
  },
  fi: {
    badge: "🇪🇸 LÄÄKÄRIN ETÄKONSULTAATIO KOKO ESPANJASSA · 15 MIN",
    title: "🩺 Tarvitsetko lääkärin etäkonsultaation ja virallisen reseptin Espanjassa?",
    desc: "Varaa 15 minuutin etäkonsultaatio puhelimitse/WhatsAppilla Espanjassa laillistetun lääkärin kanssa. Kliinisen arvioinnin jälkeen lääkäri kirjoittaa lääketieteellisin perustein virallisen espanjalaisen sähköisen QR-reseptin (voimassa kaikissa 22 000+ apteekissa).",
    pills: [
      "✓ Tulehdusoireiden arviointi (virtsatie, korva, nielu)",
      "✓ Hengitystie-, astma- ja allergiaoireet",
      "✓ Unohtuneen säännöllisen lääkityksen jatkaminen",
      "✓ Ulkomaisten reseptien lääketieteellinen arviointi",
    ],
    btnRx: "🩺 Varaa Etäkonsultaatio + QR-Resepti — 90€ (15 min)",
    btnVisit: "🏨 Lääkäri Hotellille / Asunnolle (130€/140€)",
    bottomBadge: "24/7 Lääkäripalvelu · Koko Espanja & Costa del Sol",
    bottomTitle: "Tarvitsetko Etäkonsultaation + QR-Reseptin (90€) tai Lääkärin Hotellillesi?",
    bottomDesc:
      "15 minuutin etälääkärikonsultaatio ja virallinen espanjalainen QR-resepti koko Espanjassa (90€), tai yksityislääkärin käynti hotellillesi Aurinkorannikolla 30–60 minuutissa (130€–140€).",
  },
  ar: {
    badge: "🇪🇸 استشارة طبية عن بُعد في جميع أنحاء إسبانيا · خلال 15 دقيقة",
    title: "🩺 هل تحتاج إلى استشارة طبية أونلاين ووصفة طبية رسمية في إسبانيا؟",
    desc: "احجز استشارة طبية سريعة عبر الهاتف/واتساب (15 دقيقة) مع طبيب مرخص في إسبانيا. بعد التقييم الطبي لأعراضك أو علاجك المعتاد، يصدر الطبيب وصفة إسبانية إلكترونية رسمية (رمز QR صالح في أكثر من 22,000 صيدلية في إسبانيا).",
    pills: [
      "✓ تقييم الالتهابات (المسالك البولية، الأذن، الحلق)",
      "✓ تقييم أعراض الربو والحساسية",
      "✓ تجديد الأدوية المزمنة المنسية في السفر",
      "✓ معادلة الوصفات الطبية الأجنبية",
    ],
    btnRx: "🩺 اطلب استشارة أونلاين + وصفة QR — €90 (15 دقيقة)",
    btnVisit: "🏨 زيارة طبيب للفندق / المنزل (€130/€140)",
    bottomBadge: "رعاية طبية 24/7 · جميع أنحاء إسبانيا وكوستا ديل سول",
    bottomTitle: "هل تحتاج إلى استشارة أونلاين + وصفة QR (€90) أو طبيب في فندقك؟",
    bottomDesc:
      "استشارة طبية عن بُعد خلال 15 دقيقة مع وصفة إسبانية رسمية برمز QR في كل إسبانيا (€90)، أو زيارة طبيب خاص إلى فندقك في كوستا ديل سول خلال 30–60 دقيقة (€130–€140).",
  },
  no: {
    badge: "🇪🇸 ONLINE LEGEKONSULTASJON I HELE SPANIA · 15 MIN",
    title: "🩺 Trenger du en online legekonsultasjon og offisiell resept i Spania?",
    desc: "Bestill en 15-minutters online/telefonkonsultasjon med en autorisert lege i Spania. Etter medisinsk vurdering av dine symptomer eller faste medisiner utsteder legen på medisinsk grunnlag en offisiell spansk e-resept (QR-kode gyldig på alle 22 000+ apotek i Spania).",
    pills: [
      "✓ Vurdering av infeksjoner (UVI, øre, hals)",
      "✓ Luftveis-, astma- og allergivurdering",
      "✓ Fornyelse av glemt fast medisin på reisen",
      "✓ Medisinsk vurdering av utenlandske resepter",
    ],
    btnRx: "🩺 Bestill Online Konsultasjon + QR-Resept — €90 (15 min)",
    btnVisit: "🏨 Legebesøk på Hotell / Bolig (€130/€140)",
    bottomBadge: "24/7 Legevakt · Hele Spania & Costa del Sol",
    bottomTitle: "Trenger du Online Konsultasjon + QR-Resept (€90) eller Lege på Hotellet?",
    bottomDesc:
      "15-minutters online legekonsultasjon med offisiell spansk QR-resept i hele Spania (€90), eller privat legebesøk på hotellet på Costa del Sol innen 30–60 minutter (€130–€140).",
  },
  da: {
    badge: "🇪🇸 ONLINE LÆGEKONSULTATION I HELE SPANIEN · 15 MIN",
    title: "🩺 Har du brug for en online lægekonsultation og officiel recept i Spanien?",
    desc: "Book en 15-minutters online/telefonisk lægekonsultation med en autoriseret læge i Spanien. Efter klinisk vurdering af dine symptomer eller faste medicin udsteder lægen ved medicinsk indikation en officiel spansk e-recept (QR-kode gyldig på alle 22.000+ apoteker i Spanien).",
    pills: [
      "✓ Lægevurdering af infektioner (blære, øre, hals)",
      "✓ Vurdering af astma, luftveje og allergi",
      "✓ Fornyelse af glemt fast medicin på ferien",
      "✓ Medicinsk vurdering af udenlandske recepter",
    ],
    btnRx: "🩺 Book Online Konsultation + QR-Recept — €90 (15 min)",
    btnVisit: "🏨 Lægebesøg på Hotel / Feriebolig (€130/€140)",
    bottomBadge: "24/7 Lægehjælp · Hele Spanien & Costa del Sol",
    bottomTitle: "Brug for Online Konsultation + QR-Recept (€90) eller Læge på Hotellet?",
    bottomDesc:
      "15-minutters online lægekonsultation med officiel spansk QR-recept i hele Spanien (€90), eller lægebesøg på dit hotel på Costa del Sol inden for 30–60 minutter (€130–€140).",
  },
  sv: {
    badge: "🇪🇸 ONLINE LÄKARKONSULTATION I HELA SPANIEN · 15 MIN",
    title: "🩺 Behöver du en online läkarkonsultation och officiellt recept i Spanien?",
    desc: "Boka en 15-minuters online-/telefonkonsultation med en legitimerad läkare i Spanien. Efter klinisk bedömning av dina symtom eller ordinarie medicinering utfärdar läkaren vid medicinsk indikation ett officiellt spanskt e-recept (QR-kod giltig på alla 22 000+ apotek i Spanien).",
    pills: [
      "✓ Läkarbedömning vid infektion (UVI, öra, hals)",
      "✓ Bedömning av astma, luftvägar och allergi",
      "✓ Förnyelse av glömd fast medicin på resan",
      "✓ Medicinsk bedömning av utländska recept",
    ],
    btnRx: "🩺 Boka Onlinekonsultation + QR-Recept — €90 (15 min)",
    btnVisit: "🏨 Läkare till Hotell / Lägenhet (€130/€140)",
    bottomBadge: "24/7 Läkarvård · Hela Spanien & Costa del Sol",
    bottomTitle: "Behöver du Onlinekonsultation + QR-Recept (€90) eller Läkare till Hotellet?",
    bottomDesc:
      "15-minuters online läkarkonsultation med officiellt spanskt QR-recept i hela Spanien (€90), eller läkarbesök på ditt hotell på Costa del Sol inom 30–60 minuter (€130–€140).",
  },
  ru: {
    badge: "🇪🇸 ОНЛАЙН-КОНСУЛЬТАЦИЯ ВРАЧА ПО ВСЕЙ ИСПАНИИ · ЗА 15 МИН",
    title: "🩺 Нужна дистанционная консультация врача и официальный рецепт в Испании?",
    desc: "Запишитесь на экспресс онлайн/телефонную консультацию (15 минут) с лицензированным врачом в Испании. После клинической оценки ваших симптомов или постоянного лечения врач по медицинским показаниям выписывает официальный испанский электронный рецепт (QR-код для всех 22 000+ аптек Испании).",
    pills: [
      "✓ Консультация при инфекциях (цистит, отит, горло)",
      "✓ Оценка симптомов астмы и аллергии",
      "✓ Выписка забытых в поездке постоянных препаратов",
      "✓ Медицинская оценка иностранных рецептов",
    ],
    btnRx: "🩺 Онлайн-консультация + QR-рецепт — 90€ (15 мин)",
    btnVisit: "🏨 Вызов врача в отель / на дом (130€/140€)",
    bottomBadge: "Медицинская помощь 24/7 · Вся Испания и Коста-дель-Соль",
    bottomTitle: "Нужна онлайн-консультация + QR-рецепт (90€) или визит врача в отель?",
    bottomDesc:
      "15-минутная онлайн-консультация врача с официальным испанским QR-рецептом по всей Испании (90€) или выезд врача в ваш отель на Коста-дель-Соль за 30–60 минут (130€–140€).",
  },
  nl: {
    badge: "🇪🇸 ONLINE DOKTERSCONSULT IN HEEL SPANJE · IN 15 MIN",
    title: "🩺 Heeft u een online doktersconsult en officieel recept nodig in Spanje?",
    desc: "Boek een spoed online/telefonisch consult (15 min) met een in Spanje geregistreerde arts. Na klinische beoordeling van uw klachten of vaste medicatie schrijft de arts op medische indicatie uw officiële Spaanse e-recept uit (QR-code geldig bij alle 22.000+ apotheken in Spanje).",
    pills: [
      "✓ Consult bij infecties (blaas, oor, keel)",
      "✓ Beoordeling van astma, luchtwegen & allergie",
      "✓ Herhaalrecept voor vergeten vaste medicatie",
      "✓ Medische beoordeling van buitenlandse recepten",
    ],
    btnRx: "🩺 Boek Online Consult + QR-Recept — €90 (15 min)",
    btnVisit: "🏨 Doktersbezoek in Hotel / Appartement (€130/€140)",
    bottomBadge: "24/7 Medische Zorg · Heel Spanje & Costa del Sol",
    bottomTitle: "Online Doktersconsult + QR-Recept (€90) of een Dokter op uw Hotelkamer?",
    bottomDesc:
      "Online doktersconsult van 15 minuten met officieel Spaans QR-recept in heel Spanje (€90), of een persoonlijk doktersbezoek in uw hotel aan de Costa del Sol binnen 30–60 minuten (€130–€140).",
  },
};

export default function BlogSection({
  title,
  subtitle,
  readMoreLabel,
  locale,
  singlePost,
  isIndexPage = false,
}: BlogSectionProps) {
  const dateLocaleMap: Record<Locale, string> = {
    en: "en-GB",
    es: "es-ES",
    de: "de-DE",
    fr: "fr-FR",
    fi: "fi-FI",
    ar: "ar-EG",
    no: "no-NO",
    da: "da-DK",
    sv: "sv-SE",
    ru: "ru-RU",
    nl: "nl-NL",
  };

  // If rendering a single post
  if (singlePost) {
    const rxCopy = RX_CALLOUT_COPY[locale] || RX_CALLOUT_COPY.en;
    return (
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-500 text-[#0A6EBD] bg-[#e8f4fd] px-3 py-1 rounded-full">
              Health Guide
            </span>
            <span className="text-sm text-slate-400">{singlePost.readTime} min read</span>
            <time
              dateTime={singlePost.dateModified || singlePost.date}
              className="text-sm text-slate-400"
            >
              {locale === "es"
                ? "Actualizado: "
                : locale === "de"
                  ? "Aktualisiert: "
                  : locale === "fr"
                    ? "Mis à jour : "
                    : locale === "fi"
                      ? "Päivitetty: "
                      : locale === "ar"
                        ? "تم التحديث: "
                        : locale === "no"
                          ? "Oppdatert: "
                          : locale === "da"
                            ? "Opdateret: "
                            : locale === "sv"
                              ? "Uppdaterad: "
                              : locale === "ru"
                                ? "Обновлено: "
                                : locale === "nl"
                                  ? "Bijgewerkt: "
                                  : "Updated: "}
              {new Date(singlePost.dateModified || singlePost.date).toLocaleDateString(
                dateLocaleMap[locale] || "en-GB",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-800 text-slate-900 leading-[1.15] mb-6">
            {singlePost.title[locale]}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {singlePost.excerpt[locale]}
          </p>
        </header>

        {/* Top Express €90 All-Spain Prescription Banner */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d1829] to-slate-900 text-white border border-amber-400/30 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-700 uppercase tracking-wider mb-3">
            {rxCopy.badge}
          </div>
          <h2 className="text-xl sm:text-2xl font-800 text-white leading-snug mb-2.5">
            {rxCopy.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            {rxCopy.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {rxCopy.pills.map((pill) => (
              <span
                key={pill}
                className="text-xs font-600 text-slate-200 bg-white/10 px-3 py-1 rounded-lg border border-white/10"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/34637255224?text=Hello%2C%20I%20need%20an%20Express%20Online%20Consultation%20%2B%20QR%20Prescription."
              data-triage="rx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-800 text-sm sm:text-base transition-colors shadow-lg shadow-amber-500/25 cursor-pointer"
            >
              {rxCopy.btnRx}
            </a>
            <a
              href="tel:+34637255224"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-700 text-sm sm:text-base border border-white/15 transition-colors"
            >
              📞 +34 637 25 52 24
            </a>
          </div>
        </div>

        {/* Article content */}
        <div
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-800 prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-900 prose-strong:font-700
            prose-a:text-[#0A6EBD] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: singlePost.content[locale] }}
        />

        {/* Social Share Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-sm font-700 text-slate-700 mb-3">
            {locale === "es"
              ? "Compartir este artículo:"
              : locale === "de"
                ? "Diesen Artikel teilen:"
                : locale === "fr"
                  ? "Partager cet article :"
                  : locale === "fi"
                    ? "Jaa tämä artikkeli:"
                    : locale === "ar"
                      ? "شارك هذا المقال:"
                      : locale === "no"
                        ? "Del denne artikkelen:"
                        : locale === "da"
                          ? "Del denne artikel:"
                          : locale === "sv"
                            ? "Dela denna artikel:"
                            : locale === "ru"
                              ? "Поделиться статьей:"
                              : locale === "nl"
                                ? "Deel dit artikel:"
                                : "Share this article:"}
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${singlePost.title[locale]} https://www.urgentcare24h.com${locale === "en"
                  ? `/blog/${singlePost.localeSlugs[locale]}`
                  : `/${locale}/blog/${singlePost.localeSlugs[locale]}`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 text-[#1da851] hover:bg-[#25D366] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://www.urgentcare24h.com${locale === "en"
                  ? `/blog/${singlePost.localeSlugs[locale]}`
                  : `/${locale}/blog/${singlePost.localeSlugs[locale]}`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                singlePost.title[locale]
              )}&url=${encodeURIComponent(
                `https://www.urgentcare24h.com${locale === "en"
                  ? `/blog/${singlePost.localeSlugs[locale]}`
                  : `/${locale}/blog/${singlePost.localeSlugs[locale]}`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://www.urgentcare24h.com${locale === "en"
                  ? `/blog/${singlePost.localeSlugs[locale]}`
                  : `/${locale}/blog/${singlePost.localeSlugs[locale]}`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-50 text-[#0077B5] hover:bg-[#0077B5] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* In-article conversion CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A6EBD]/10 via-[#e8f4fd]/60 to-white border border-[#0A6EBD]/20 shadow-sm">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 bg-[#0A6EBD] text-white text-xs font-700 rounded-full uppercase tracking-wider mb-3">
              {rxCopy.bottomBadge}
            </span>
            <p className="text-2xl sm:text-3xl font-800 text-slate-900 mb-3 tracking-tight">
              {rxCopy.bottomTitle}
            </p>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              {rxCopy.bottomDesc}
            </p>
            <div className="flex flex-wrap gap-3.5 items-center">
              <a
                href="https://wa.me/34637255224?text=Hello%2C%20I%20need%20an%20Express%20Online%20Consultation%20%2B%20QR%20Prescription."
                data-triage="rx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-800 text-sm sm:text-base transition-colors shadow-md shadow-amber-200 cursor-pointer"
              >
                {rxCopy.btnRx}
              </a>
              <a
                href="https://wa.me/34637255224?text=Hello%2C%20I%20need%20a%20doctor."
                data-triage="visit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-xl font-700 text-sm sm:text-base hover:bg-[#1da851] transition-colors shadow-md shadow-green-100 cursor-pointer"
              >
                {rxCopy.btnVisit}
              </a>
              <a
                href="tel:+34637255224"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-slate-300 text-slate-800 rounded-xl font-700 text-sm sm:text-base hover:border-[#0A6EBD] hover:text-[#0A6EBD] transition-colors"
              >
                📞 +34 637 255 224
              </a>
            </div>
          </div>

          {/* Contextual Internal Links to City Pages (current locale) & All-Spain Prescription Pages */}
          <div className="mt-8 pt-6 border-t border-[#0A6EBD]/15 grid sm:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div>
              <p className="font-800 text-slate-900 mb-2.5">
                🏨 24/7 Costa del Sol Doctor Visits:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CITIES.map((c) => {
                  const cSlug = c.localeSlugs[locale] || c.localeSlugs.en;
                  const cHref = locale === "en" ? `/${cSlug}` : `/${locale}/${cSlug}`;
                  return (
                    <Link
                      key={c.slug}
                      href={cHref}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0A6EBD] hover:text-[#0A6EBD] font-600 transition-colors"
                    >
                      {c.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-800 text-slate-900 mb-2.5">
                💊 Online Prescription Spain (QR Code):
              </p>
              <div className="flex flex-wrap gap-1.5">
                {PRESCRIPTION_PAGES.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0A6EBD] hover:text-[#0A6EBD] font-600 transition-colors"
                  >
                    {p.isHub ? "All Spain (QR)" : p.locationName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Blog list view
  return (
    <section
      id="blog"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isIndexPage ? (
            <h1
              id="blog-heading"
              className="text-4xl sm:text-5xl font-800 text-slate-900 mb-4"
            >
              {title}
            </h1>
          ) : (
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
            >
              {title}
            </h2>
          )}
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Blog articles"
        >
          {BLOG_POSTS.map((post) => {
            const slug = post.localeSlugs[locale];
            const href =
              locale === "en" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

            return (
              <li key={post.slug} className="h-full">
                <article className="group relative flex flex-col h-full p-7 rounded-2xl border border-slate-100 hover:border-[#0A6EBD]/30 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-600 text-[#0A6EBD] bg-[#e8f4fd] px-3 py-1 rounded-full">
                      Health Guide
                    </span>
                    <span className="text-sm text-slate-400">
                      {post.readTime} min
                    </span>
                  </div>

                  <p className="font-700 text-slate-900 text-xl leading-snug mb-3 group-hover:text-[#0A6EBD] transition-colors duration-200 flex-1">
                    <Link
                      href={href}
                      className="focus:outline-none after:absolute after:inset-0"
                    >
                      {post.title[locale]}
                    </Link>
                  </p>

                  <p className="text-base text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt[locale]}
                  </p>

                  <div className="flex items-center gap-1 text-base font-600 text-[#0A6EBD] mt-auto">
                    <span>{readMoreLabel}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
