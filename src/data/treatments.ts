export const treatmentsData: Record<string, { title: string, subtitle: string, items: { id: string, title: string, desc: string, icon: string, color: string }[] }> = {
  en: {
    title: "Common Health Issues We Treat",
    subtitle: "Immediate medical attention for the most common illnesses and injuries that occur during holidays in Spain.",
    items: [
      { id: "stomach", title: "Food Poisoning & Stomach Issues", desc: "Gastroenteritis, nausea, vomiting, and dehydration from food or water.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Sunburn & Heatstroke", desc: "Severe sunburns, heat exhaustion, and dehydration from prolonged sun exposure.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Ear Infections (Swimmer's Ear)", desc: "Painful ear infections caused by swimming in pools or the sea.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Sore Throat & Colds", desc: "Tonsillitis, flu symptoms, and respiratory infections.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Minor Injuries & Cuts", desc: "Sprains, minor cuts, jellyfish stings, and sea urchin wounds.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Lost Prescriptions", desc: "Replacement of lost or forgotten medication during your holidays.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  es: {
    title: "Problemas de Salud Comunes que Tratamos",
    subtitle: "Atención médica inmediata para las enfermedades y lesiones más frecuentes durante las vacaciones en España.",
    items: [
      { id: "stomach", title: "Intoxicación Alimentaria y Problemas Estomacales", desc: "Gastroenteritis, náuseas, vómitos y deshidratación.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Quemaduras Solares e Insolación", desc: "Quemaduras graves, golpe de calor y deshidratación por exposición solar.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Infecciones de Oído (Otitis de Piscina)", desc: "Infecciones dolorosas causadas por bañarse en piscinas o en el mar.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Dolor de Garganta y Resfriados", desc: "Amigdalitis, síntomas de gripe e infecciones respiratorias.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Lesiones Leves y Cortes", desc: "Esguinces, pequeños cortes, picaduras de medusa y heridas por erizos de mar.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Recetas Perdidas", desc: "Reemplazo de medicación perdida u olvidada durante tus vacaciones.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  de: {
    title: "Häufige Gesundheitsprobleme, die wir behandeln",
    subtitle: "Sofortige medizinische Versorgung der häufigsten Krankheiten und Verletzungen während Ihres Urlaubs in Spanien.",
    items: [
      { id: "stomach", title: "Lebensmittelvergiftung & Magen-Darm-Probleme", desc: "Gastroenteritis, Übelkeit, Erbrechen und Dehydratation.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Sonnenbrand & Hitzschlag", desc: "Schwere Sonnenbrände, Hitzeerschöpfung und Dehydratation durch lange Sonneneinstrahlung.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Ohrenentzündungen", desc: "Schmerzhafte Ohrenentzündungen, die durch das Schwimmen in Pools oder im Meer verursacht werden.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Halsschmerzen & Erkältungen", desc: "Mandelentzündung, Grippesymptome und Atemwegsinfektionen.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Leichte Verletzungen & Schnittwunden", desc: "Verstauchungen, kleine Schnitte, Quallenstiche und Wunden durch Seeigel.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Verlorene Rezepte", desc: "Ersatz von verlorenen oder vergessenen Medikamenten während Ihres Urlaubs.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  fr: {
    title: "Problèmes de santé courants que nous traitons",
    subtitle: "Soins médicaux immédiats pour les maladies et blessures les plus fréquentes pendant vos vacances en Espagne.",
    items: [
      { id: "stomach", title: "Intoxication alimentaire et problèmes d'estomac", desc: "Gastro-entérite, nausées, vomissements et déshydratation.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Coups de soleil et insolation", desc: "Coups de soleil graves, épuisement dû à la chaleur et déshydratation.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Infections de l'oreille (Otite du baigneur)", desc: "Infections douloureuses causées par la baignade en piscine ou dans la mer.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Maux de gorge et rhumes", desc: "Angine, symptômes grippaux et infections respiratoires.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Blessures mineures et coupures", desc: "Entorses, petites coupures, piqûres de méduses et blessures d'oursins.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Ordonnances perdues", desc: "Remplacement de médicaments perdus ou oubliés pendant vos vacances.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  fi: {
    title: "Yleiset terveysongelmat, joita hoidamme",
    subtitle: "Välitön lääkärinhoito yleisimpiin sairauksiin ja vammoihin lomallasi Espanjassa.",
    items: [
      { id: "stomach", title: "Ruokamyrkytys ja vatsaongelmat", desc: "Gastroenteriitti, pahoinvointi, oksentelu ja nestehukka.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Auringonpolttama ja lämpöhalvaus", desc: "Vakavat auringonpolttamat, lämpöuupumus ja nestehukka pitkittyneestä auringonpaisteesta.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Korvatulehdukset", desc: "Uima-altaassa tai meressä uimisesta johtuvat kivuliaat korvatulehdukset.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Kurkkukipu ja vilustuminen", desc: "Nielurisatulehdus, flunssan oireet ja hengitystieinfektiot.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Pienet vammat ja haavat", desc: "Nyrjähdykset, pienet haavat, meduusan pistot ja merisiilin haavat.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Kadonneet reseptit", desc: "Kadonneiden tai unohdettujen lääkkeiden korvaaminen lomasi aikana.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  ar: {
    title: "المشاكل الصحية الشائعة التي نعالجها",
    subtitle: "رعاية طبية فورية للأمراض والإصابات الأكثر شيوعًا التي تحدث أثناء العطلات في إسبانيا.",
    items: [
      { id: "stomach", title: "التسمم الغذائي ومشاكل المعدة", desc: "التهاب المعدة والأمعاء، الغثيان، القيء، والجفاف.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "حروق الشمس وضربة الشمس", desc: "حروق الشمس الشديدة، الإرهاق الحراري، والجفاف من التعرض الطويل للشمس.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "التهابات الأذن", desc: "التهابات الأذن المؤلمة الناجمة عن السباحة في المسابح أو البحر.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "التهاب الحلق ونزلات البرد", desc: "التهاب اللوزتين، أعراض الأنفلونزا، والتهابات الجهاز التنفسي.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "إصابات وجروح طفيفة", desc: "الالتواءات، الجروح الطفيفة، لسعات قنديل البحر، وجروح قنفذ البحر.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "الوصفات الطبية المفقودة", desc: "استبدال الأدوية المفقودة أو المنسية خلال عطلتك.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  no: {
    title: "Vanlige helseproblemer vi behandler",
    subtitle: "Øyeblikkelig legehjelp for de vanligste sykdommene og skadene i ferien din i Spania.",
    items: [
      { id: "stomach", title: "Matforgiftning og mageproblemer", desc: "Gastroenteritt, kvalme, oppkast og dehydrering.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Solbrenthet og heteslag", desc: "Alvorlig solbrenthet, varmeutmattelse og dehydrering fra langvarig soleksponering.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Ørebetennelser", desc: "Smertefulle ørebetennelser forårsaket av bading i basseng eller sjøen.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Sår hals og forkjølelse", desc: "Tonsilitt, influensasymptomer og luftveisinfeksjoner.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Mindre skader og kutt", desc: "Forstuinger, små kutt, manetstikk og kråkebolleskader.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Mistede resepter", desc: "Erstatning av tapte eller gjenglemte medisiner i løpet av ferien.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  da: {
    title: "Almindelige sundhedsproblemer, vi behandler",
    subtitle: "Øjeblikkelig lægehjælp til de mest almindelige sygdomme og skader under din ferie i Spanien.",
    items: [
      { id: "stomach", title: "Madforgiftning & Maveproblemer", desc: "Gastroenteritis, kvalme, opkastning og dehydrering.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Solskoldning & Hedeslag", desc: "Alvorlig solskoldning, varmeudmattelse og dehydrering.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Øreinfektioner", desc: "Smertefulde øreinfektioner forårsaget af svømning i pools eller havet.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Ondt i halsen & Forkølelse", desc: "Halsbetændelse, influenzasymptomer og luftvejsinfektioner.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Mindre skader & snitsår", desc: "Forstuvninger, små snit, vandmandsstik og søpindsvinesår.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Mistede recepter", desc: "Erstatning af mistet eller glemt medicin i din ferie.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  sv: {
    title: "Vanliga hälsoproblem vi behandlar",
    subtitle: "Omedelbar läkarvård för de vanligaste sjukdomarna och skadorna under din semester i Spanien.",
    items: [
      { id: "stomach", title: "Matförgiftning & Magproblem", desc: "Gastroenterit, illamående, kräkningar och uttorkning.", icon: "🤢", color: "bg-emerald-100 text-emerald-700" },
      { id: "sun", title: "Solbränna & Värmeslag", desc: "Allvarlig solbränna, värmeutmattning och uttorkning från långvarig solexponering.", icon: "☀️", color: "bg-amber-100 text-amber-700" },
      { id: "ear", title: "Öroninfektioner", desc: "Smärtsamma öroninfektioner orsakade av simning i pooler eller havet.", icon: "👂", color: "bg-blue-100 text-blue-700" },
      { id: "throat", title: "Halsont & Förkylningar", desc: "Halsfluss, influensasymptom och luftvägsinfektioner.", icon: "🤧", color: "bg-rose-100 text-rose-700" },
      { id: "injury", title: "Mindre skador & Skärsår", desc: "Stukningar, små sår, manetstick och sjöborreskador.", icon: "🩹", color: "bg-purple-100 text-purple-700" },
      { id: "prescriptions", title: "Förlorade recept", desc: "Ersättning av förlorad eller glömd medicin under din semester.", icon: "💊", color: "bg-cyan-100 text-cyan-700" },
    ]
  }
};
