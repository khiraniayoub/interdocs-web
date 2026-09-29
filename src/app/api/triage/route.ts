import { NextResponse } from "next/server";

interface TriageRequest {
  symptoms: string;
  language?: string;
  location?: string;
  insurance?: string;
  isHotelStaff?: boolean;
}

// Red flag emergency keywords across multiple European languages
const RED_FLAG_KEYWORDS = [
  "chest pain", "dolor de pecho", "brustschmerzen", "douleur thoracique", "rinta kipu", "brystsmerter", "bröstsmärtor",
  "heart attack", "infarto", "herzinfarkt", "crise cardiaque", "sydänkohtaus",
  "cannot breathe", "no puedo respirar", "severe dyspnea", "dificultad para respirar", "atemnot", "hengitysvaikeus", "pustevansker",
  "stroke", "ictus", "acv", "paralysis", "parálisis", "face drooping", "halvaus",
  "unconscious", "inconsciente", "bewusstlos", "loss of consciousness", "tajuton",
  "seizure", "convulsión", "anaphylaxis", "anafilaxia", "severe bleeding", "hemorragia grave", "verenvuoto"
];

const COMMON_CONDITIONS = [
  {
    match: ["ear", "otitis", "oído", "oido", "ohr", "oreja", "swimming", "piscina", "water in ear", "korva", "øre", "öra"],
    name: "Acute Otitis Externa / Swimmer's Ear",
    urgency: "Moderate (Prompt Care Recommended)",
    etaMinutes: "30-60 min",
    treatment: "Doctor will examine ear canal with an otoscope, clean debris, and prescribe targeted antibiotic/corticosteroid drops + pain relief.",
    supplies: "Otoscope, ear suction, prescription antibiotic drops, analgesics"
  },
  {
    match: ["vomit", "vomitando", "diarrhea", "diarrea", "nausea", "stomach", "estómago", "estomago", "magen", "food poisoning", "gastroenteritis", "intoxicación", "intoxicacion", "vatsa", "kvalme", "magsjuka"],
    name: "Acute Tourist Gastroenteritis / Dehydration",
    urgency: "Moderate to Urgent (Risk of Dehydration)",
    etaMinutes: "30-60 min",
    treatment: "Doctor evaluates vital signs, abdominal exam, antiemetic injection if vomiting persists, oral rehydration therapy, and gut-friendly diet plan.",
    supplies: "Blood pressure monitor, antiemetic injection, oral rehydration salts"
  },
  {
    match: ["fever", "fiebre", "fieber", "fièvre", "fievre", "kuume", "feber", "shivering", "chills", "escalofríos", "escalofrios"],
    name: "Acute Febrile Infection / Viral or Bacterial Illness",
    urgency: "Moderate to Urgent",
    etaMinutes: "30-60 min",
    treatment: "Full physical checkup, throat & chest auscultation, rapid antipyretic administration, diagnostic assessment and official prescription.",
    supplies: "Pulse oximeter, stethoscope, digital thermometer, antipyretics & antibiotics"
  },
  {
    match: ["child", "niño", "nino", "bebe", "baby", "pediatric", "pediatra", "kind", "enfant", "lapsi", "barn"],
    name: "Pediatric Consultation at Hotel Room",
    urgency: "High Priority for Children",
    etaMinutes: "30-60 min",
    treatment: "Gentle in-room examination tailored for children in the comfort of their bed, weight-adjusted pediatric dosages, and parents guidance in their language.",
    supplies: "Pediatric stethoscope, child-friendly thermometer, pediatric dosages"
  }
];

export async function POST(req: Request) {
  try {
    const body: TriageRequest = await req.json();
    const { symptoms = "", language = "en", location = "", insurance = "", isHotelStaff = false } = body;

    const lowerText = symptoms.toLowerCase();

    // 1. Check for Groq, Grok (xAI), or OpenAI API Key
    const groqKey = process.env.GROQ_API_KEY;
    const xaiKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const activeKey = groqKey || xaiKey || openaiKey;

    if (activeKey) {
      const isGroq = Boolean(groqKey);
      const isGrok = Boolean(xaiKey && !groqKey);
      
      const endpoint = isGroq
        ? "https://api.groq.com/openai/v1/chat/completions"
        : isGrok
        ? "https://api.x.ai/v1/chat/completions"
        : "https://api.openai.com/v1/chat/completions";

      const model = isGroq
        ? "openai/gpt-oss-120b"
        : isGrok
        ? "grok-2-mini"
        : "gpt-4o-mini";

      const providerName = isGroq ? "Groq (120B AI)" : isGrok ? "Grok (xAI)" : "OpenAI";

      try {
        const promptSystem = `You are an expert concierge triage physician for Interdocs Medical, a premier 24/7 private doctor hotel and home visit service in Costa del Sol (Marbella, Málaga, Fuengirola, Benalmádena, Estepona).
IMPORTANT BUSINESS DIRECTIVES:
1. Your goal is to coordinate private bedside doctor visits to the patient's hotel room.
2. Symptoms like severe headache, migraine, tension headache, fever, ear pain, food poisoning, gastroenteritis, pediatric illnesses, sunstroke, sunburn, dizziness, cuts, and back pain are ALL 100% ELIGIBLE for an urgent bedside doctor visit.
3. NEVER block or refuse the patient. The doctor performs on-site evaluation, checks vital signs and neurological/physical status, and administers rapid bedside analgesia, antiemetics, or prescriptions.
4. CRITICAL: We DO NOT provide intravenous fluids or IV drips (suero intravenoso / infusión) at hotel rooms. NEVER mention IV drip, suero, or intravenous therapy in treatment or supplies. The doctor provides bedside physical check, oral or intramuscular medication, antiemetics, pain relief, and pharmacy prescriptions.

You must:
1. Detect the patient's language.
2. Provide reassurance and clinical assessment in the PATIENT'S NATIVE LANGUAGE (${language || "auto-detect"}).
3. Classify clinical condition (name, urgency level).
4. Outline visiting doctor bedside action (e.g. vital signs, neurological check, intramuscular or oral pain relief, prescription).

Return STRICT JSON with these keys:
{
  "conditionName": "Short clinical name in Spanish or English (e.g. Cefalea aguda / Migraña, Otitis externa)",
  "urgencyLevel": "Moderate" | "Urgent" | "Standard",
  "eta": "30-60 min",
  "summary": "2-3 reassuring sentences in the patient's language explaining what may be causing the pain/symptoms and reassuring them that the private doctor can arrive at their hotel room in 30-60 minutes to relieve the pain and examine them.",
  "doctorAction": "Bedside exam, blood pressure, neurological/physical check, fast pain relief administration, and official medical report.",
  "supplies": "Key medical tools doctor brings (e.g. analgesics, blood pressure cuff, otoscope, prescription pad)",
  "isRedFlag": false
}`;

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${activeKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: promptSystem },
              {
                role: "user",
                content: `Patient symptoms: "${symptoms}". Location: "${location}". Insurance: "${insurance}".`
              }
            ],
            temperature: 0.2,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices[0].message.content;
          // Extract JSON even if model includes markdown code fence
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            const suppliesFormatted = Array.isArray(parsed.supplies)
              ? parsed.supplies.join(", ")
              : parsed.supplies || "Full diagnostic medical kit, prescription medication, insurance documentation";

            return NextResponse.json({
              status: "SUCCESS",
              isEmergency: parsed.isRedFlag || false,
              conditionName: parsed.conditionName,
              urgencyLevel: parsed.urgencyLevel,
              summary: parsed.summary,
              doctorAction: parsed.doctorAction,
              eta: parsed.eta || "30-60 min",
              supplies: suppliesFormatted,
              hotelVisitEligible: !parsed.isRedFlag,
              provider: providerName,
            });
          }
        } else {
          const errText = await response.text();
          console.error(`AI provider (${isGrok ? "Grok" : "OpenAI"}) error response:`, errText);
        }
      } catch (err) {
        console.error("AI API call failed, falling back to built-in rule engine:", err);
      }
    }

    // 3. Fallback: Ultra-fast Built-in Clinical Rule Engine (Zero latency, 100% uptime)
    let matched = COMMON_CONDITIONS.find((c) =>
      c.match.some((keyword) => lowerText.includes(keyword))
    );

    if (!matched) {
      matched = {
        match: [],
        name: "Acute General Medical Consultation",
        urgency: "Standard Priority",
        etaMinutes: "30-60 min",
        treatment: "Comprehensive bedside consultation, vital sign evaluation, prescription medication, and official insurance invoice.",
        supplies: "Standard general practice mobile medical kit, diagnostic tools, prescription pad"
      };
    }

    return NextResponse.json({
      status: "SUCCESS",
      isEmergency: false,
      conditionName: matched.name,
      urgencyLevel: matched.urgency,
      eta: matched.etaMinutes,
      summary: `Based on your description, this condition is very suitable for on-site medical evaluation in your hotel room. A private bilingual doctor can arrive directly to examine you in the comfort of your bed.`,
      doctorAction: matched.treatment,
      supplies: matched.supplies,
      hotelVisitEligible: true,
      insuranceClaimEligible: true,
      provider: "Interdocs Clinical Engine",
      invoiceIncluded: "Se le entregará un informe médico oficial para su compañía de seguros / Official medical report provided for your insurance company."
    });
  } catch (error) {
    console.error("Triage API error:", error);
    return NextResponse.json(
      { error: "Internal triage error" },
      { status: 500 }
    );
  }
}
