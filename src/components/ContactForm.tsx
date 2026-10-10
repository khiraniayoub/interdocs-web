"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  WHATSAPP_NUMBER,
  PHONE_NUMBER,
  PHONE_URL,
  EMAIL_ADDRESS,
  EMAIL_URL,
} from "@/data/content";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_boz3dxg";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_6tcinqb";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "cYyKyrvoTjm42b1yM";

interface ContactFormProps {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder?: string;
  phonePlaceholder: string;
  hotelPlaceholder: string;
  symptomsPlaceholder: string;
  languageLabel: string;
  submitLabel: string;
  languages: string[];
  disclaimer: string;
}

export default function ContactForm({
  title,
  subtitle,
  namePlaceholder,
  emailPlaceholder = "Email Address",
  phonePlaceholder,
  hotelPlaceholder,
  symptomsPlaceholder,
  languageLabel,
  submitLabel,
  languages,
  disclaimer,
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    symptoms: "",
    language: languages[0] || "English",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.hotel || !form.symptoms) {
      setErrorMessage("Por favor, completa todos los campos obligatorios.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subject: `Consulta Web: ${form.name} (${form.hotel})`,
          company: form.hotel,
          contact_person: form.name,
          role: "Paciente / Solicitud Médica Web",
          phone: form.phone,
          email: form.email,
          type: "Consulta Médica General",
          message: `Hotel / Dirección: ${form.hotel}\nIdioma preferido: ${form.language}\nSíntomas / Consulta:\n${form.symptoms}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
    } catch (err: unknown) {
      console.error("Error al enviar con EmailJS:", err);
      setStatus("error");
      setErrorMessage(
        `Hubo un problema al enviar el formulario. Puedes escribirnos directamente a ${EMAIL_ADDRESS} o pulsar el botón de WhatsApp.`
      );
    }
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello! I need a doctor.\n\nName: ${form.name || "-"}\nEmail: ${form.email || "-"}\nPhone: ${form.phone || "-"}\nHotel / Address: ${form.hotel || "-"}\nSymptoms: ${form.symptoms || "-"}\nPreferred Language: ${form.language}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      hotel: "",
      symptoms: "",
      language: languages[0] || "English",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 p-8 sm:p-12 border border-slate-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 mb-3 tracking-tight"
            >
              {title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            {/* Direct Contact Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-slate-800 text-xs sm:text-sm font-600 hover:bg-blue-100 hover:border-blue-300 transition-colors shadow-sm"
                title={`Enviar correo directo a ${EMAIL_ADDRESS}`}
              >
                <svg
                  className="w-4 h-4 text-[#0A6EBD] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{EMAIL_ADDRESS}</span>
              </a>

              <a
                href={PHONE_URL}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-slate-800 text-xs sm:text-sm font-600 hover:bg-emerald-100 hover:border-emerald-300 transition-colors shadow-sm"
                title={`Llamar al ${PHONE_NUMBER}`}
              >
                <svg
                  className="w-4 h-4 text-[#25D366] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{PHONE_NUMBER} (24/7)</span>
              </a>
            </div>
          </div>

          {/* Success State */}
          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-800 text-slate-900 mb-2">
                ¡Mensaje Enviado con Éxito!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
                Hemos recibido tu solicitud en{" "}
                <strong className="text-slate-900 font-700">
                  {EMAIL_ADDRESS}
                </strong>
                . Nuestro equipo médico de guardia te responderá a tu correo o te
                llamará de inmediato.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-600 text-sm hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Enviar otra consulta
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-white font-700 text-sm hover:bg-[#1da851] transition-colors shadow-md shadow-green-100 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Seguimiento por WhatsApp
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              {status === "error" && errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Grid 2 cols for Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                  >
                    {namePlaceholder}{" "}
                    <span aria-hidden="true" className="text-red-400">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white"
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                  >
                    {emailPlaceholder}{" "}
                    <span aria-hidden="true" className="text-red-400">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Grid 2 cols for Phone & Hotel/Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                  >
                    {phonePlaceholder}{" "}
                    <span aria-hidden="true" className="text-red-400">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white"
                    aria-required="true"
                  />
                </div>

                {/* Hotel / Address */}
                <div>
                  <label
                    htmlFor="contact-hotel"
                    className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                  >
                    {hotelPlaceholder}{" "}
                    <span aria-hidden="true" className="text-red-400">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-hotel"
                    name="hotel"
                    type="text"
                    required
                    value={form.hotel}
                    onChange={handleChange}
                    placeholder="e.g. Hotel Sol & Mar, Room 412"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <label
                  htmlFor="contact-symptoms"
                  className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                >
                  {symptomsPlaceholder}{" "}
                  <span aria-hidden="true" className="text-red-400">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-symptoms"
                  name="symptoms"
                  required
                  rows={4}
                  value={form.symptoms}
                  onChange={handleChange}
                  placeholder="Por favor describe tus síntomas o motivo de consulta médica con el mayor detalle posible..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm resize-none bg-white"
                  aria-required="true"
                />
              </div>

              {/* Language */}
              <div>
                <label
                  htmlFor="contact-language"
                  className="block text-xs sm:text-sm font-600 text-slate-700 mb-1.5"
                >
                  {languageLabel}
                </label>
                <select
                  id="contact-language"
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Submit Button: Email to corporate mailbox */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 px-8 bg-[#0A6EBD] hover:bg-[#085a9c] text-white font-700 text-base sm:text-lg rounded-2xl transition-all duration-200 shadow-lg shadow-sky-100 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                aria-label={`Enviar mensaje a ${EMAIL_ADDRESS}`}
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{submitLabel}</span>
                  </>
                )}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-slate-400 text-center leading-relaxed">
                {disclaimer}
              </p>

              {/* Instant WhatsApp Emergency Alternative Box */}
              <div className="pt-4 border-t border-slate-100 mt-6">
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-700 text-slate-800">
                        ¿Atención médica urgente ahora mismo?
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        Respuesta en menos de 2 minutos vía WhatsApp 24/7
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-xs sm:text-sm font-700 rounded-xl transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>Abrir WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
