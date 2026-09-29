/**
 * Script de Publicación Automática en Facebook e Instagram (Meta Graph API)
 * Interdocs Medical - Costa del Sol
 * 
 * Uso:
 * node scripts/publish-social.js
 */

const MEDICAL_TOPICS = [
  {
    topic: "Otitis & Swimmer's Ear",
    caption: `👂 Sudden ear pain after swimming in Costa del Sol? 🏖️

Swimmer’s ear (acute otitis externa) is one of the most common vacation emergencies in Marbella and Málaga. Water trapped in the ear canal can quickly lead to painful inflammation and infection.

Don't let ear pain ruin your holiday:
✅ Licensed English-speaking doctor to your hotel room in 45 minutes
✅ Full diagnosis, antibiotic e-prescriptions & ear relief
✅ Official medical report & invoice for 100% travel insurance reimbursement

📞 24/7 Hotel & Home Visits: +34 637 255 224
💬 Fast WhatsApp Booking: https://wa.me/34637255224
🌐 More info: https://www.interdocsmedical.com

---
¿Dolor de oído o infección tras la playa en Costa del Sol? Nuestros médicos privados se desplazan a tu hotel en 45 min. Atención 24/7 con informe para seguro médico.

#MarbellaDoctor #MalagaDoctor #PrivateDoctorSpain #CostaDelSolHealthcare #HotelDoctor #TravelInsuranceSpain #InterdocsMedical #VisitingDoctorMarbella #PuertoBanusDoctor`,
  },
  {
    topic: "Gastroenteritis & Food Poisoning",
    caption: `🤢 Stomach bug or food poisoning during your holiday in Costa del Sol? 🏨

Dehydration and vomiting can escalate fast in hot Mediterranean weather. You don't have to wait 5 hours in crowded public hospital emergency rooms.

Interdocs Medical brings urgent medical care straight to your hotel room or villa:
🩺 Gentle medical assessment & immediate anti-nausea medication
💧 Intravenous (IV) hydration & electrolyte recovery
🧾 Official documentation in English for Bupa, Allianz, Sanitas, AXA & Nordic insurances

🚨 Available 24/7 across Málaga, Marbella, Torremolinos, Fuengirola & Estepona.
📞 Call now: +34 637 255 224
📲 WhatsApp: https://wa.me/34637255224
🌐 https://www.interdocsmedical.com

#CostaDelSolDoctor #MarbellaHotelDoctor #EnglishDoctorSpain #MedicalCareMarbella #TravelHealthSpain #InterdocsMedical`,
  },
  {
    topic: "Urgent Prescription & Lost Medication",
    caption: `💊 Forgot or lost your prescription medication while visiting Spain? ✈️

Don't panic. Many Spanish pharmacies cannot dispense prescription-only medication without an official Spanish medical prescription.

Our private doctors evaluate your case and issue:
✅ Official Private Electronic Prescriptions (e-Receta) accepted in all pharmacies across Spain
✅ Fast hotel visits or rapid consultation
✅ Full documentation for your medical records

📞 Direct Call: +34 637 255 224
💬 WhatsApp: https://wa.me/34637255224
🌐 Visit: https://www.interdocsmedical.com

#PrescriptionSpain #DoctorMarbella #HotelDoctorMalaga #ExpatHealthcareSpain #InterdocsMedical #CostaDelSolDoctor`,
  }
];

async function publishToFacebook(pageId, accessToken, imageUrl, message) {
  const url = `https://graph.facebook.com/v19.0/${pageId}/photos`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: imageUrl,
      caption: message,
      access_token: accessToken,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Facebook error: ${JSON.stringify(data)}`);
  return data;
}

async function publishToInstagram(igUserId, accessToken, imageUrl, caption) {
  // Paso 1: Crear el contenedor del medio
  const createUrl = `https://graph.facebook.com/v19.0/${igUserId}/media`;
  const createRes = await fetch(createUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image_url: imageUrl,
      caption: caption,
      access_token: accessToken,
    }),
  });
  const createData = await createRes.json();
  if (!createRes.ok) throw new Error(`Instagram container error: ${JSON.stringify(createData)}`);

  const creationId = createData.id;

  // Paso 2: Publicar el contenedor creado
  const publishUrl = `https://graph.facebook.com/v19.0/${igUserId}/media_publish`;
  const publishRes = await fetch(publishUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      creation_id: creationId,
      access_token: accessToken,
    }),
  });
  const publishData = await publishRes.json();
  if (!publishRes.ok) throw new Error(`Instagram publish error: ${JSON.stringify(publishData)}`);

  return publishData;
}

async function main() {
  const pageId = process.env.FB_PAGE_ID || "61594814065218";
  const igUserId = process.env.IG_USER_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  // Seleccionar un tema del día
  const post = MEDICAL_TOPICS[Math.floor(Math.random() * MEDICAL_TOPICS.length)];
  console.log(`\n📋 Post seleccionado para hoy: "${post.topic}"`);
  console.log(`📝 Texto:\n${post.caption}\n`);

  if (!accessToken) {
    console.log("⚠️ No se ha detectado META_ACCESS_TOKEN en las variables de entorno.");
    console.log("ℹ️ Puedes publicar este post hoy mismo manualmente a través de Meta Business Suite con la imagen generada en public/post-prueba-hotel-doctor.jpg");
    return;
  }

  const publicImageUrl = "https://www.interdocsmedical.com/post-prueba-hotel-doctor.jpg";

  try {
    console.log("🚀 Publicando en Facebook...");
    const fbResult = await publishToFacebook(pageId, accessToken, publicImageUrl, post.caption);
    console.log("✅ Publicado en Facebook con éxito! ID:", fbResult.id);

    if (igUserId) {
      console.log("🚀 Publicando en Instagram...");
      const igResult = await publishToInstagram(igUserId, accessToken, publicImageUrl, post.caption);
      console.log("✅ Publicado en Instagram con éxito! ID:", igResult.id);
    }
  } catch (err) {
    console.error("❌ Error en la publicación:", err);
  }
}

main();
