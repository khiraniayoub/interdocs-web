"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/data/content";

interface ContactFormProps {
  title: string;
  subtitle: string;
  namePlaceholder: string;
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
    phone: "",
    hotel: "",
    symptoms: "",
    language: languages[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello! I need a doctor.\n\nName: ${form.name}\nPhone: ${form.phone}\nHotel / Address: ${form.hotel}\nSymptoms: ${form.symptoms}\nPreferred Language: ${form.language}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 mb-3"
            >
              {title}
            </h2>
            <p className="text-slate-500 text-lg">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-600 text-slate-700 mb-2"
              >
                {namePlaceholder} <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. John Smith"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm"
                aria-required="true"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-600 text-slate-700 mb-2"
              >
                {phonePlaceholder} <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+44 7700 900000"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm"
                aria-required="true"
              />
            </div>

            {/* Hotel / Address */}
            <div>
              <label
                htmlFor="contact-hotel"
                className="block text-sm font-600 text-slate-700 mb-2"
              >
                {hotelPlaceholder} <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <input
                id="contact-hotel"
                name="hotel"
                type="text"
                required
                value={form.hotel}
                onChange={handleChange}
                placeholder="e.g. Hotel Sol & Mar, Room 412"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm"
                aria-required="true"
              />
            </div>

            {/* Symptoms */}
            <div>
              <label
                htmlFor="contact-symptoms"
                className="block text-sm font-600 text-slate-700 mb-2"
              >
                {symptomsPlaceholder} <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-symptoms"
                name="symptoms"
                required
                rows={4}
                value={form.symptoms}
                onChange={handleChange}
                placeholder="Please describe your symptoms in as much detail as possible..."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm resize-none"
                aria-required="true"
              />
            </div>

            {/* Language */}
            <div>
              <label
                htmlFor="contact-language"
                className="block text-sm font-600 text-slate-700 mb-2"
              >
                {languageLabel}
              </label>
              <select
                id="contact-language"
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A6EBD] focus:border-transparent transition text-sm bg-white appearance-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-[#25D366] text-white font-700 text-lg rounded-2xl hover:bg-[#1da851] transition-colors duration-200 shadow-lg shadow-green-100 mt-2"
              aria-label="Submit form and open WhatsApp"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {submitLabel}
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              {disclaimer}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
