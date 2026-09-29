import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get("file");

    if (!audioFile) {
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 });
    }

    const groqKey = process.env.GROQ_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const activeKey = groqKey || openaiKey;

    if (!activeKey) {
      return NextResponse.json({ error: "No AI transcription key configured" }, { status: 500 });
    }

    const endpoint = groqKey
      ? "https://api.groq.com/openai/v1/audio/transcriptions"
      : "https://api.openai.com/v1/audio/transcriptions";

    const whisperModel = groqKey ? "whisper-large-v3-turbo" : "whisper-1";

    const groqFormData = new FormData();
    groqFormData.append("file", audioFile);
    groqFormData.append("model", whisperModel);
    groqFormData.append("response_format", "verbose_json");

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${activeKey}`,
      },
      body: groqFormData,
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Whisper transcription error:", errText);
      return NextResponse.json({ error: "Transcription failed", details: errText }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      text: data.text || "",
      detectedLanguage: data.language || "unknown",
      duration: data.duration || 0,
      provider: groqKey ? "Groq Whisper Turbo" : "OpenAI Whisper",
    });
  } catch (err: any) {
    console.error("Transcribe API route error:", err);
    return NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
