"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE_NUMBER, PHONE_URL, WHATSAPP_NUMBER } from "@/data/content";

export default function ColaboradoresPage() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    role: "",
    phone: "",
    email: "",
    type: "hotel",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabelMap: Record<string, string> = {
      hotel: "Hotel / Alojamiento",
      clinica: "Clínica Privada",
      medico: "Médico Colaborador",
      otro: "Otro colaborador",
    };

    const text = encodeURIComponent(
      `🤝 *NUEVA SOLICITUD DE CONVENIO / COLABORACIÓN*\n\n` +
      `🏢 *Empresa:* ${formData.company}\n` +
      `👤 *Contacto:* ${formData.contactPerson} (${formData.role || "Responsable"})\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `📌 *Tipo:* ${typeLabelMap[formData.type] || formData.type}\n` +
      `💬 *Mensaje:* ${formData.message || "Interesados en establecer convenio de colaboración médica."}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Header locale="es" />

      <main className="min-h-screen bg-white text-slate-800 selection:bg-sky-500 selection:text-white">
        {/* HERO SECTION B2B (TEMA CLARO) */}
        <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50/60 border-b border-slate-100">
          {/* Círculos de luz decorativos de fondo */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/40 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <span>🤝</span>
              <span>Convenios Médicos B2B & Alianzas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Atención Médica a Domicilio 24/7 para tus{" "}
              <span className="text-[#0A6EBD]">
                Huéspedes y Pacientes
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
              Añade un servicio médico presencial a tu hotel, alojamiento turístico o clínica sin costes fijos ni complicaciones operativas en toda la Costa del Sol.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto-partners"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0A6EBD] hover:bg-[#085a9c] text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-700/20 transition-all transform hover:-translate-y-0.5 text-center"
              >
                Solicitar Convenio de Colaboración
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaría información sobre convenios de colaboración médica para empresas y hoteles.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Línea Directa WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* MODALIDADES DE COLABORACIÓN (3 CARDS TEMA CLARO) */}
        <section className="py-16 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Modalidades de Colaboración
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Soluciones adaptadas a las necesidades reales de cada tipo de entidad sanitaria o turística.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta 1: Hoteles */}
              <div className="bg-white border border-slate-200 hover:border-sky-400 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-3xl shadow-sm">
                    🏨
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Para Hoteles y Alojamientos
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Resuelve cualquier indisposición o urgencia de tus huéspedes directamente en su habitación, sin esperas ni desplazamientos a urgencias.
                  </p>
                  <ul className="space-y-3 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Asistencia médica directa en la habitación.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Factura e informe médico oficial para el seguro de viaje del huésped.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Línea telefónica prioritaria para la recepción del hotel.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Cero costes fijos y total tranquilidad para el establecimiento.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="#contacto-partners"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "hotel" }))}
                    className="block w-full py-4 px-6 rounded-2xl bg-sky-50 hover:bg-[#0A6EBD] text-center text-sm sm:text-base font-extrabold text-[#0A6EBD] hover:text-white border border-sky-200 shadow-sm hover:shadow-lg hover:shadow-sky-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Convenio para Hoteles ➔
                  </a>
                </div>
              </div>

              {/* Tarjeta 2: Clínicas Privadas */}
              <div className="bg-white border border-slate-200 hover:border-sky-400 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-3xl shadow-sm">
                    🏥
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Para Clínicas y Centros Médicos
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Externaliza con total confianza tus avisos a domicilio y atenciones fuera de horario comercial sin aumentar tus costes fijos de personal.
                  </p>
                  <ul className="space-y-3 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Cobertura de visitas a domicilio para tus propios pacientes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Asistencia cuando tu centro esté cerrado o sin facultativos de guardia.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Coordinación directa y reporte médico al centro remitente.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Fidelización del paciente sin perder consultas por falta de desplazamiento.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="#contacto-partners"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "clinica" }))}
                    className="block w-full py-4 px-6 rounded-2xl bg-teal-50 hover:bg-teal-700 text-center text-sm sm:text-base font-extrabold text-teal-800 hover:text-white border border-teal-200 shadow-sm hover:shadow-lg hover:shadow-teal-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Alianza para Clínicas ➔
                  </a>
                </div>
              </div>

              {/* Tarjeta 3: Médicos Colaboradores */}
              <div className="bg-white border border-slate-200 hover:border-sky-400 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-3xl shadow-sm">
                    🩺
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Para Médicos Colaboradores
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Únete a nuestra red de facultativos para atender visitas domiciliarias y hoteleras con total autonomía y excelente remuneración.
                  </p>
                  <ul className="space-y-3 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Flexibilidad horaria total: tú defines tus días y horas disponibles.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Alta remuneración por cada visita médica completada.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Avisos pre-filtrados por nuestro equipo de coordinación.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <span>Zona de actuación en tu área más cómoda de la Costa del Sol.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="#contacto-partners"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "medico" }))}
                    className="block w-full py-4 px-6 rounded-2xl bg-emerald-50 hover:bg-emerald-700 text-center text-sm sm:text-base font-extrabold text-emerald-800 hover:text-white border border-emerald-200 shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Unirme como Médico ➔
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS Y GARANTÍAS DEL SERVICIO (TEMA CLARO) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                ¿Por qué confiar en Interdocs Medical?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                Diseñado para ofrecer tranquilidad inmediata tanto al establecimiento como al paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:bg-sky-50/50 transition-colors">
                <span className="text-3xl">⏱️</span>
                <h4 className="font-bold text-slate-900 text-base">Llegada en 30-45 min</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desplazamiento urgente directo al hotel o domicilio para no demorar la atención del paciente.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:bg-sky-50/50 transition-colors">
                <span className="text-3xl">📍</span>
                <h4 className="font-bold text-slate-900 text-base">Toda la Costa del Sol</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cobertura en Málaga, Torremolinos, Benalmádena, Fuengirola, Mijas, Marbella y Estepona.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:bg-sky-50/50 transition-colors">
                <span className="text-3xl">📄</span>
                <h4 className="font-bold text-slate-900 text-base">Informes y Recetas</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Emisión inmediata de informe médico, prescripción farmacológica y factura oficial para aseguradoras.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:bg-sky-50/50 transition-colors">
                <span className="text-3xl">🛎️</span>
                <h4 className="font-bold text-slate-900 text-base">Canal Preferente 24/7</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Línea prioritaria telefónica y de WhatsApp exclusiva para recepciones y entidades colaboradoras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA (3 PASOS EN CLARO) */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                ¿Cómo funciona para tu Empresa o Hotel?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Un circuito rápido y sin complicaciones operativas para tu equipo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0A6EBD] text-white font-bold flex items-center justify-center text-sm shadow">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-base">Aviso de Recepción</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tu equipo de recepción o clínica nos avisa por teléfono o WhatsApp con la ubicación y síntoma principal del paciente.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0A6EBD] text-white font-bold flex items-center justify-center text-sm shadow">
                  2
                </div>
                <h4 className="font-bold text-slate-900 text-base">Desplazamiento Inmediato</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El médico de guardia se desplaza a la habitación o domicilio en un tiempo estimado de 30 a 45 minutos.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0A6EBD] text-white font-bold flex items-center justify-center text-sm shadow">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-base">Atención y Documentación</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Se realiza la consulta, se entrega la medicación o receta necesaria y se emite la factura médica oficial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULARIO DE CONTACTO B2B (TEMA CLARO ELEGANTE) */}
        <section id="contacto-partners" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-semibold text-[#0A6EBD] uppercase tracking-wider">
                  Establecer Contacto
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Solicita información para tu Convenio
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Rellena este breve formulario y nuestro responsable de colaboraciones se pondrá en contacto contigo hoy mismo.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="text-4xl">✅</div>
                  <h3 className="text-lg font-bold text-emerald-900">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Se ha abierto una conversación prioritaria con nuestro responsable. En breve nos pondremos en contacto contigo.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#0A6EBD] hover:underline font-semibold"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Nombre de la Empresa / Hotel / Clínica *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej: Hotel Sunset Marbella"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Persona de Contacto y Cargo *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej: Laura Gómez (Jefa de Recepción)"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="Ej: +34 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Correo Electrónico *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="recepcion@hotel.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Tipo de Entidad / Perfil *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition"
                    >
                      <option value="hotel">Hotel o Alojamiento Turístico</option>
                      <option value="clinica">Clínica o Centro Médico Privado</option>
                      <option value="medico">Médico Colegiado Interesado en Colaborar</option>
                      <option value="otro">Agencia / Empresa / Otro</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Mensaje o Consulta adicional (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indícanos la ubicación del hotel o cualquier duda sobre el funcionamiento del convenio..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0A6EBD] focus:bg-white focus:ring-2 focus:ring-sky-100 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0A6EBD] hover:bg-[#085a9c] text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-700/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <span>Enviar Solicitud de Convenio</span>
                    <span>➔</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Al pulsar enviar se remitirán los datos para iniciar contacto directo con nuestro departamento de alianzas.
                  </p>
                </form>
              )}

              {/* Contacto directo telefónico */}
              <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                <span>¿Prefieres hablar directamente ahora?</span>
                <a
                  href={PHONE_URL}
                  className="font-bold text-[#0A6EBD] hover:underline transition flex items-center gap-2 text-sm"
                >
                  <span>📞</span>
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        locale="es"
        disclaimer="Servicio de asistencia médica privada a domicilio y en hoteles en toda la Costa del Sol. Convenios de colaboración y alianzas estratégicas para establecimientos hoteleros y sanitarios."
        rights="Todos los derechos reservados."
      />
    </>
  );
}
