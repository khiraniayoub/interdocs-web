const fs = require('fs');
const content = fs.readFileSync('src/data/content.ts', 'utf-8');

// The dummy post is just a placeholder, let's create a default posts.json
const posts = [
  {
    slug: "how-to-find-a-doctor-in-spain",
    date: "2024-05-15",
    title: {
      en: "How to Find an English-Speaking Doctor in Spain",
      es: "Cmo Encontrar un Mdico en Espaa",
      de: "Wie man einen englischsprachigen Arzt in Spanien findet",
      fr: "Comment trouver un mdecin anglophone en Espagne",
      fi: "Kuinka lyt englanti puhuva lkri Espanjassa",
      ar: "كيفية العثور على طبيب يتحدث الإنجليزية في إسبانيا",
      no: "Hvordan finne en engelsktalende lege i Spania",
      da: "Hvordan finder man en engelsktalende lge i Spanien",
      sv: "Hur man hittar en engelsktalande lkare i Spanien"
    },
    excerpt: {
      en: "Navigating the Spanish healthcare system can be tricky. Here is what you need to know about finding private care quickly.",
      es: "Navegar por el sistema de salud puede ser complicado. Esto es lo que necesitas saber.",
      de: "Sich im spanischen Gesundheitssystem zurechtzufinden, kann schwierig sein.",
      fr: "Naviguer dans le systme de sant espagnol peut tre dlicat.",
      fi: "Espanjan terveydenhuoltojrjestelmss navigointi voi olla hankalaa.",
      ar: "قد يكون التنقل في نظام الرعاية الصحية الإسباني أمرًا صعبًا.",
      no: " navigere i det spanske helsevesenet kan vre vanskelig.",
      da: "At navigere i det spanske sundhedssystem kan vre vanskeligt.",
      sv: "Att navigera i det spanska sjukvrdssystemet kan vara knepigt."
    },
    content: {
      en: "Full article content in English goes here. It explains the differences between public and private healthcare in Spain.",
      es: "El contenido completo del artculo va aqu.",
      de: "Vollstndiger Artikelinhalt hier.",
      fr: "Contenu complet de l'article ici.",
      fi: "Tyden artikkelin sislt thn.",
      ar: "محتوى المقال الكامل هنا.",
      no: "Full artikkelinnhold her.",
      da: "Fuld artikelindhold her.",
      sv: "Fullstndigt artikelinnehll hr."
    },
    imageUrl: "/service_apartment.png"
  }
];

fs.writeFileSync('src/data/posts.json', JSON.stringify(posts, null, 2));
console.log("Created posts.json");
