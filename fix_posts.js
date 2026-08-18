const fs = require('fs');

const posts = [
  {
    slug: "how-to-find-a-doctor-in-spain",
    localeSlugs: {
      en: "how-to-find-a-doctor-in-spain",
      es: "como-encontrar-un-medico-en-espana",
      de: "wie-man-einen-arzt-in-spanien-findet",
      fr: "comment-trouver-un-medecin-en-espagne",
      fi: "kuinka-loytaa-laakari-espanjassa",
      ar: "kayfiat-aleuthur-ealaa-tabib-fi-isbania",
      no: "hvordan-finne-en-lege-i-spania",
      da: "hvordan-finder-man-en-laege-i-spanien",
      sv: "hur-man-hittar-en-lakare-i-spanien"
    },
    title: {
      en: "How to Find an English-Speaking Doctor in Spain",
      es: "Cómo Encontrar un Médico en España",
      de: "Wie man einen englischsprachigen Arzt in Spanien findet",
      fr: "Comment trouver un médecin anglophone en Espagne",
      fi: "Kuinka löytää englantiä puhuva lääkäri Espanjassa",
      ar: "كيفية العثور على طبيب يتحدث الإنجليزية في إسبانيا",
      no: "Hvordan finne en engelsktalende lege i Spania",
      da: "Hvordan finder man en engelsktalende læge i Spanien",
      sv: "Hur man hittar en engelsktalande läkare i Spanien"
    },
    excerpt: {
      en: "Navigating the Spanish healthcare system can be tricky. Here is what you need to know about finding private care quickly.",
      es: "Navegar por el sistema de salud puede ser complicado. Esto es lo que necesitas saber.",
      de: "Sich im spanischen Gesundheitssystem zurechtzufinden, kann schwierig sein.",
      fr: "Naviguer dans le système de santé espagnol peut être délicat.",
      fi: "Espanjan terveydenhuoltojärjestelmässä navigointi voi olla hankalaa.",
      ar: "قد يكون التنقل في نظام الرعاية الصحية الإسباني أمرًا صعبًا.",
      no: "Å navigere i det spanske helsevesenet kan være vanskelig.",
      da: "At navigere i det spanske sundhedssystem kan være vanskeligt.",
      sv: "Att navigera i det spanska sjukvårdssystemet kan vara knepigt."
    },
    metaTitle: {
      en: "Find a Doctor in Spain | Guide",
      es: "Encontrar Médico en España",
      de: "Arzt in Spanien finden",
      fr: "Trouver un Médecin en Espagne",
      fi: "Lääkäri Espanjassa",
      ar: "طبيب في إسبانيا",
      no: "Finn lege i Spania",
      da: "Find læge i Spanien",
      sv: "Hitta läkare i Spanien"
    },
    metaDesc: {
      en: "Guide to finding an English speaking doctor in Spain.",
      es: "Guía para encontrar un médico en España.",
      de: "Leitfaden um einen Arzt in Spanien zu finden.",
      fr: "Guide pour trouver un médecin en Espagne.",
      fi: "Opas lääkärin löytämiseen Espanjassa.",
      ar: "دليل للعثور على طبيب في إسبانيا.",
      no: "Guide for å finne lege i Spania.",
      da: "Guide til at finde læge i Spanien.",
      sv: "Guide för att hitta läkare i Spanien."
    },
    date: "2024-05-15",
    dateModified: "2024-05-15",
    readTime: 3,
    content: {
      en: "Full article content in English goes here. It explains the differences between public and private healthcare in Spain.",
      es: "El contenido completo del artículo va aquí.",
      de: "Vollständiger Artikelinhalt hier.",
      fr: "Contenu complet de l'article ici.",
      fi: "Täyden artikkelin sisältö tähän.",
      ar: "محتوى المقال الكامل هنا.",
      no: "Full artikkelinnhold her.",
      da: "Fuld artikelindhold her.",
      sv: "Fullständigt artikelinnehåll här."
    },
    imageUrl: "/service_apartment.png"
  }
];

fs.writeFileSync('src/data/posts.json', JSON.stringify(posts, null, 2));
console.log("Updated posts.json");
