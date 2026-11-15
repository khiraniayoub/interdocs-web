"use client";

import type { Locale } from "@/data/content";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/Interdocs+Medical+-+Doctor+Home+%26+Hotel+Visits/@36.5852582,-4.7515889,10z/data=!3m1!4b1!4m6!3m5!1s0xa523e2833cf68091:0x24b8d10697f305a!8m2!3d36.5852582!4d-4.7515889!16s%2Fg%2F11nw7l0nyg?entry=ttu";

interface GoogleReviewItem {
  initials: string;
  name: string;
  timeAgo: Record<Locale, string>;
  text: Record<Locale, string>;
}

const GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    initials: "TA",
    name: "Thomas Anderson",
    timeAgo: {
      en: "2 weeks ago",
      es: "Hace 2 semanas",
      de: "Vor 2 Wochen",
      fr: "Il y a 2 semaines",
      fi: "2 viikkoa sitten",
      ar: "قبل أسبوعين",
      no: "For 2 uker siden",
      da: "For 2 uger siden",
      sv: "För 2 veckor sedan",
      ru: "2 недели назад",
      nl: "2 weken geleden",
    },
    text: {
      en: "Outstanding private doctor home visit in Málaga. Called for an urgent medical issue with fever and discomfort, and the doctor arrived at my house in just 40 minutes. Extremely thorough check-up, full diagnostic equipment, and instant official prescription. Saved me hours of waiting at a hospital, truly top-level medical care.",
      es: "Excelente visita médica privada a domicilio en Málaga. Llamé por una urgencia con fiebre y malestar, y el médico llegó a mi casa en solo 40 minutos. Revisión exhaustiva, equipo de diagnóstico completo y receta oficial al instante. Me ahorró horas de espera en el hospital.",
      de: "Hervorragender Privatarzt-Hausbesuch in Málaga. Wegen Fieber angerufen und der Arzt war in nur 40 Minuten bei mir. Sehr gründliche Untersuchung, komplette Diagnostik und sofortiges offizielles Rezept. Hat mir stundenlanges Warten im Krankenhaus erspart.",
      fr: "Excellente visite médicale privée à domicile à Málaga. Appelé pour une urgence avec fièvre, le médecin est arrivé en seulement 40 minutes. Examen très complet et ordonnance officielle immédiate. M'a évité des heures d'attente à l'hôpital.",
      fi: "Erinomainen yksityislääkärin kotikäynti Málagassa. Soitin kiireellisen kuumeen vuoksi, ja lääkäri saapui 40 minuutissa. Erittäin perusteellinen tutkimus ja välitön virallinen resepti. Säästi tuntikausien jonotuksen sairaalassa.",
      ar: "زيارة منزلية ممتازة لطبيب خاص في مالقة. اتصلت بسبب حالة طارئة مع حمى ووصل الطبيب خلال 40 دقيقة فقط. فحص شامل ومعدات تشخيص كاملة ووصفة طبية رسمية فورية. وفر علي ساعات من الانتظار في المستشفى.",
      no: "Utmerket privat legebesøk hjemme i Málaga. Ringte for akutt feber, og legen kom på bare 40 minutter. Svært grundig undersøkelse og umiddelbar offisiell resept. Sparte meg for timevis med venting på sykehus.",
      da: "Fremragende privat lægebesøg i Málaga. Ringede på grund af akut feber, og lægen ankom på kun 40 minutter. Meget grundig undersøgelse og øjeblikkelig officiel recept. Sparede mig for timers ventetid på hospitalet.",
      sv: "Utmärkt privat läkarbesök i Málaga. Ringde för akut feber och läkaren kom på bara 40 minuter. Mycket noggrann undersökning och omedelbart officiellt recept. Sparade mig timmar av väntan på sjukhus.",
      ru: "Отличный выезд частного врача на дом в Малаге. Позвонил из-за высокой температуры, и врач приехал всего за 40 минут. Очень тщательный осмотр и мгновенный официальный рецепт. Сэкономил мне часы ожидания в больнице.",
      nl: "Uitstekend huisbezoek van een privéarts in Málaga. Gebeld vanwege koorts en de arts was er binnen 40 minuten. Zeer grondig onderzoek en direct een officieel recept. Bespaarde mij uren wachten in het ziekenhuis.",
    },
  },
  {
    initials: "ZG",
    name: "Zakaria Gueried",
    timeAgo: {
      en: "3 days ago",
      es: "Hace 3 días",
      de: "Vor 3 Tagen",
      fr: "Il y a 3 jours",
      fi: "3 päivää sitten",
      ar: "قبل 3 أيام",
      no: "For 3 dager siden",
      da: "For 3 dage siden",
      sv: "För 3 dagar sedan",
      ru: "3 дня назад",
      nl: "3 dagen geleden",
    },
    text: {
      en: "Excellent and fast 24-hour medical service. We requested a doctor to our hotel in Marbella and they arrived in 35 minutes. They provided the official prescription and travel insurance medical report. Highly recommended on the Costa del Sol.",
      es: "Servicio médico 24 horas excelente y rápido. Pedimos un médico a nuestro hotel en Marbella y llegó en 35 minutos. Nos dieron la receta médica oficial y el informe para el seguro de viaje. Muy recomendables en la Costa del Sol.",
      de: "Ausgezeichneter und schneller 24-Stunden-Arztdienst. Wir haben einen Arzt in unser Hotel in Marbella gerufen und er war in 35 Minuten da. Wir erhielten das offizielle Rezept und den Bericht für die Reiseversicherung. Sehr empfehlenswert an der Costa del Sol.",
      fr: "Service médical 24h/24 excellent et rapide. Nous avons demandé un médecin à notre hôtel à Marbella et il est arrivé en 35 minutes. Ils nous ont remis l'ordonnance officielle et le rapport pour l'assurance voyage. Fortement recommandé sur la Costa del Sol.",
      fi: "Erinomainen ja nopea 24h lääkäripalvelu. Tilasimme lääkärin hotelliimme Marbellassa ja hän saapui 35 minuutissa. Saimme virallisen reseptin ja matkavakuutusraportin. Suosittelen lämpimästi Costa del Solilla.",
      ar: "خدمة طبية ممتازة وسريعة 24 ساعة. طلبنا طبيب إلى الفندق في ماربيا ووصل في 35 دقيقة. تواصلوا معنا باللغة العربية وأعطونا الوصفة الطبية وتقرير التأمين. أنصح بهم بشدة في كوستا ديل سول.",
      no: "Utmerket og rask 24-timers legetjeneste. Vi bestilte en lege til hotellet vårt i Marbella, og han kom på 35 minutter. Vi fikk offisiell resept og rapport til reiseforsikringen. Anbefales på det sterkeste på Costa del Sol.",
      da: "Fremragende og hurtig 24-timers lægevagt. Vi bestilte en læge til vores hotel i Marbella, og han ankom på 35 minutter. Vi fik officiel recept og rapport til rejseforsikringen. Kan varmt anbefales på Costa del Sol.",
      sv: "Utmärkt och snabb 24-timmars läkartjänst. Vi beställde en läkare till vårt hotell i Marbella och han kom på 35 minuter. Vi fick officiellt recept och läkarintyg för reseförsäkringen. Rekommenderas varmt på Costa del Sol.",
      ru: "Отличный и быстрый круглосуточный медицинский сервис. Вызвали врача в отель в Марбелье, приехал за 35 минут. Выдали официальный рецепт и медицинский отчет для страховки. Очень рекомендую на Коста-дель-Соль.",
      nl: "Uitstekende en snelle 24-uurs medische service. We vroegen een arts aan bij ons hotel in Marbella en hij was er binnen 35 minuten. Inclusief officieel recept en medisch rapport voor de reisverzekering. Zeer aan te bevelen aan de Costa del Sol.",
    },
  },
  {
    initials: "NH",
    name: "Nicolas Hudson",
    timeAgo: {
      en: "6 days ago",
      es: "Hace 6 días",
      de: "Vor 6 Tagen",
      fr: "Il y a 6 jours",
      fi: "6 päivää sitten",
      ar: "قبل 6 أيام",
      no: "For 6 dager siden",
      da: "For 6 dage siden",
      sv: "För 6 dagar sedan",
      ru: "6 дней назад",
      nl: "6 dagen geleden",
    },
    text: {
      en: "Great home doctor service in Benalmádena. We were on holiday in an apartment when I got a severe earache. Fast response and very professional care right at our apartment.",
      es: "Buen servicio médico a domicilio en Benalmádena. Estábamos de vacaciones en un apartamento y me dio un dolor de oído muy fuerte. Atención rápida y muy profesional en nuestro apartamento.",
      de: "Guter ärztlicher Hausbesuchsdienst in Benalmádena. Wir waren im Urlaub in einem Apartment, als ich starke Ohrenschmerzen bekam. Schnelle Hilfe und sehr professionelle Behandlung.",
      fr: "Très bon service de médecin à domicile à Benalmádena. Nous étions en vacances dans un appartement quand j'ai eu une forte douleur à l'oreille. Intervention rapide et très professionnelle.",
      fi: "Hyvä kotilääkäripalvelu Benalmádenassa. Olimme lomalla asunnossa, kun sain kovan korvasäryn. Nopea apu ja erittäin ammattitaitoinen hoito.",
      ar: "خدمة طبيب منزلي رائعة في بينالمادينا. كنا في عطلة في شقة عندما أصبت بألم شديد في الأذن. استجابة سريعة ورعاية مهنية للغاية.",
      no: "God legetjeneste i Benalmádena. Vi var på ferie i en leilighet da jeg fikk kraftig øreverk. Rask hjelp og veldig profesjonell behandling.",
      da: "God lægeservice i Benalmádena. Vi var på ferie i en lejlighed, da jeg fik kraftig ørepine. Hurtig hjælp og meget professionel behandling.",
      sv: "Bra läkarservice i Benalmádena. Vi var på semester i en lägenhet när jag fick kraftig öronvärk. Snabb hjälp och mycket professionell vård.",
      ru: "Отличный вызов врача на дом в Бенальмадене. Мы отдыхали в апартаментах, когда у меня сильно заболело ухо. Быстрый приезд и очень профессиональная помощь.",
      nl: "Goede doktersservice aan huis in Benalmádena. We waren op vakantie in een appartement toen ik erge oorpijn kreeg. Snelle hulp en zeer professionele zorg.",
    },
  },
  {
    initials: "GV",
    name: "Gustavo Vargas v",
    timeAgo: {
      en: "1 week ago",
      es: "Hace 1 semana",
      de: "Vor 1 Woche",
      fr: "Il y a 1 semaine",
      fi: "1 viikko sitten",
      ar: "قبل أسبوع",
      no: "For 1 uke siden",
      da: "For 1 uge siden",
      sv: "För 1 vecka sedan",
      ru: "1 неделю назад",
      nl: "1 week geleden",
    },
    text: {
      en: "We called because my son developed a fever at our holiday apartment in Benalmádena and the doctor arrived in less than 40 minutes. Very professional care, highly recommended.",
      es: "Llamamos porque mi hijo se puso con fiebre en nuestro apartamento de Benalmádena y el médico llegó en menos de 40 min, trato muy profesional. Muy recomendable.",
      de: "Wir haben angerufen, weil mein Sohn in unserem Apartment in Benalmádena Fieber bekam, und der Arzt war in weniger als 40 Minuten da. Sehr professionell und absolut empfehlenswert.",
      fr: "Nous avons appelé car mon fils avait de la fièvre dans notre appartement à Benalmádena et le médecin est arrivé en moins de 40 min. Très professionnel, je recommande vivement.",
      fi: "Soitimme, koska pojalleni nousi kuume loma-asunnossamme Benalmádenassa, ja lääkäri saapui alle 40 minuutissa. Erittäin ammattitaitoista palvelua, suosittelen.",
      ar: "اتصلنا لأن ابني أصيب بحمى في شقتنا في بينالمادينا ووصل الطبيب في أقل من 40 دقيقة، تعامل مهني للغاية. أوصي بهم بشدة.",
      no: "Vi ringte fordi sønnen min fikk feber i leiligheten vår i Benalmádena, og legen kom på under 40 minutter. Veldig profesjonell behandling, anbefales på det sterkeste.",
      da: "Vi ringede, fordi min søn fik feber i vores lejlighed i Benalmádena, og lægen ankom på under 40 minutter. Meget professionel behandling, kan varmt anbefales.",
      sv: "Vi ringde eftersom min son fick feber i vår lägenhet i Benalmádena och läkaren kom på mindre än 40 minuter. Mycket professionellt bemötande, rekommenderas varmt.",
      ru: "Позвонили, потому что у сына поднялась температура в наших апартаментах в Бенальмадене — врач приехал менее чем за 40 минут. Очень профессионально, рекомендую.",
      nl: "We belden omdat mijn zoon koorts kreeg in ons appartement in Benalmádena en de arts was er binnen 40 minuten. Zeer professioneel, echt een aanrader.",
    },
  },
  {
    initials: "JJ",
    name: "J J",
    timeAgo: {
      en: "3 weeks ago",
      es: "Hace 3 semanas",
      de: "Vor 3 Wochen",
      fr: "Il y a 3 semaines",
      fi: "3 viikkoa sitten",
      ar: "قبل 3 أسابيع",
      no: "For 3 uker siden",
      da: "For 3 uger siden",
      sv: "För 3 veckor sedan",
      ru: "3 недели назад",
      nl: "3 weken geleden",
    },
    text: {
      en: "Very professional and fast out of hours response.",
      es: "Respuesta fuera de horario muy rápida y muy profesional.",
      de: "Sehr professionelle und schnelle Reaktion außerhalb der regulären Sprechzeiten.",
      fr: "Réponse hors horaires très rapide et très professionnelle.",
      fi: "Erittäin ammattitaitoinen ja nopea päivystysapu ilta- ja yöaikaan.",
      ar: "استجابة سريعة ومهنية للغاية خارج أوقات الدوام.",
      no: "Veldig profesjonell og rask respons utenom vanlige åpningstider.",
      da: "Meget professionel og hurtig respons uden for normal åbningstid.",
      sv: "Mycket professionell och snabb respons utanför ordinarie öppettider.",
      ru: "Очень профессиональный и быстрый выезд в нерабочее время.",
      nl: "Zeer professionele en snelle reactie buiten kantooruren.",
    },
  },
];

const SEE_ALL_REVIEWS_LABEL: Record<Locale, string> = {
  en: "See all reviews",
  es: "Ver todas las reseñas",
  de: "Alle Bewertungen ansehen",
  fr: "Voir tous les avis",
  fi: "Katso kaikki arvostelut",
  ar: "عرض جميع التقييمات",
  no: "Se alle anmeldelser",
  da: "Se alle anmeldelser",
  sv: "Se alla recensioner",
  ru: "Смотреть все отзывы",
  nl: "Bekijk alle beoordelingen",
};

function StarsAndGoogleLogo({
  initials,
  name,
  timeAgo,
}: {
  initials: string;
  name: string;
  timeAgo: string;
}) {
  return (
    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0A6EBD] text-white font-800 text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
          {initials}
        </div>
        <div className="text-left">
          <p className="text-slate-900 font-700 text-sm leading-tight">{name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{timeAgo}</p>
        </div>
      </div>

      {/* Official 4-color Google "G" icon */}
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"
        />
      </svg>
    </div>
  );
}

export default function GoogleReviewsStrip({ locale = "en" }: { locale?: Locale }) {
  const currentLocale = (locale && locale in SEE_ALL_REVIEWS_LABEL ? locale : "en") as Locale;

  return (
    <section
      className="w-full bg-transparent py-10 lg:py-12 overflow-hidden"
      aria-label="Verified Google Maps Patient Reviews"
    >
      <style>{`
        @keyframes googleReviewsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .google-reviews-track {
          display: flex;
          width: max-content;
          animation: googleReviewsMarquee 40s linear infinite;
        }
        .google-reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div dir="ltr" className="relative w-full overflow-hidden py-3">
        {/* Soft fade edges matching InsuranceLogos */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="google-reviews-track gap-6 px-4">
          {/* Primary indexable set of 5 reviews (read once by Googlebot in the page's exact language) */}
          {GOOGLE_REVIEWS.map((rev) => (
            <article
              key={`primary-${rev.initials}`}
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              className="w-[320px] sm:w-[370px] flex-shrink-0 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0A6EBD]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <svg
                      key={sIdx}
                      className="w-4 h-4 text-[#0A6EBD] fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;{rev.text[currentLocale] || rev.text.en}&rdquo;
                </p>
              </div>
              <StarsAndGoogleLogo
                initials={rev.initials}
                name={rev.name}
                timeAgo={rev.timeAgo[currentLocale] || rev.timeAgo.en}
              />
            </article>
          ))}

          {/* Visual marquee clone (excluded from Googlebot snippet & screen readers to prevent duplicate content) */}
          <div className="flex gap-6" aria-hidden="true" data-nosnippet="">
            {GOOGLE_REVIEWS.map((rev) => (
              <div
                key={`clone-${rev.initials}`}
                dir={currentLocale === "ar" ? "rtl" : "ltr"}
                className="w-[320px] sm:w-[370px] flex-shrink-0 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg
                        key={sIdx}
                        className="w-4 h-4 text-[#0A6EBD] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{rev.text[currentLocale] || rev.text.en}&rdquo;
                  </p>
                </div>
                <StarsAndGoogleLogo
                  initials={rev.initials}
                  name={rev.name}
                  timeAgo={rev.timeAgo[currentLocale] || rev.timeAgo.en}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single clean outbound link button */}
      <div className="mt-6 flex justify-center px-4">
        <a
          href={GOOGLE_MAPS_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0A6EBD] hover:bg-[#085a9c] text-white font-700 text-sm sm:text-base shadow-md shadow-blue-500/20 transition-all hover:scale-105"
        >
          <span>{SEE_ALL_REVIEWS_LABEL[currentLocale] || SEE_ALL_REVIEWS_LABEL.en}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

