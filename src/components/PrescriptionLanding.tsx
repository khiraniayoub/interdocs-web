import Link from "next/link";
import { PHONE_NUMBER, PHONE_URL } from "@/data/content";
import {
  PRESCRIPTION_PAGES,
  type PrescriptionPageData,
} from "@/data/prescriptions";

interface PrescriptionLandingProps {
  data: PrescriptionPageData;
}

const COMMON_EVALUATIONS = [
  {
    icon: "🦠",
    title: "UTI & Bladder Infections (Cystitis)",
    desc: "Fast clinical evaluation for urinary tract infection symptoms and antibiotics (e.g., fosfomycin / nitrofurantoin) when medically indicated — without a 4-hour clinic wait.",
  },
  {
    icon: "👂",
    title: "Swimmer's Ear & Eye Infections",
    desc: "Medical assessment for painful ear infections from hotel pools or beaches, plus conjunctivitis requiring prescription antibiotic or corticosteroid drops.",
  },
  {
    icon: "🫁",
    title: "Lost or Forgotten Asthma Inhalers",
    desc: "Left your rescue or maintenance inhaler (e.g., Ventolin / Salbutamol, Symbicort) at home or on your flight? Quick continuity evaluation for a valid Spanish QR script.",
  },
  {
    icon: "💊",
    title: "Forgotten Daily Medication",
    desc: "Ran out of blood pressure, thyroid (Eutirox), cholesterol, or reflux medication on holiday? Send a photo of your medication box or NHS App for fast clinical review.",
  },
  {
    icon: "🦷",
    title: "Throat, Sinus & Dental Infections",
    desc: "Prompt teleconsultation for acute bacterial throat, sinus, chest, or dental infections requiring a licensed Spanish doctor's prescription.",
  },
  {
    icon: "🇬🇧",
    title: "UK NHS & Non-EU / US Prescriptions",
    desc: "UK NHS paper/App prescriptions and US, Canadian, or Australian scripts are not valid in Spanish pharmacies. Our Spanish doctor reviews your treatment and issues a local QR prescription.",
  },
];

export default function PrescriptionLanding({
  data,
}: PrescriptionLandingProps) {
  const otherDestinations = PRESCRIPTION_PAGES.filter(
    (p) => p.slug !== data.slug
  );

  const waHref = `https://wa.me/34637255224?text=${encodeURIComponent(
    `Hello, I need an Express Online Doctor Consultation + Official Spanish QR Prescription in ${data.locationName}.`
  )}`;

  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d1f3c] to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #0A6EBD 0%, transparent 45%), radial-gradient(circle at 85% 75%, #f59e0b 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300/90 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            {data.isHub ? (
              <span className="text-amber-300 font-600">
                Online Prescription Spain
              </span>
            ) : (
              <>
                <Link
                  href="/online-prescription-spain"
                  className="hover:text-white transition-colors"
                >
                  Online Prescription Spain
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-amber-300 font-600">
                  {data.locationName}
                </span>
              </>
            )}
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-700 uppercase tracking-wider mb-5">
            {data.badge}
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-800 tracking-tight leading-[1.15] mb-5 text-white">
            {data.h1}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mb-8">
            {data.heroSubtitle}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={waHref}
              data-triage="rx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-800 text-base sm:text-lg shadow-xl shadow-green-950/40 transition-all cursor-pointer"
            >
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start Online Consultation on WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-700 text-base sm:text-lg transition-colors"
            >
              📞 Call 24/7: {PHONE_NUMBER}
            </a>
          </div>

          {/* Trust Pills */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            {[
              "✓ Licensed Spanish Doctors",
              "✓ Valid at All 22,000+ Pharmacies",
              "✓ No App or Account Needed",
              "✓ Fast UK / US Medication Review",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 font-600 text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works (Exact Transparent 3-Step Flow) ── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#e8f4fd] text-[#0A6EBD] text-xs font-700 uppercase tracking-wider mb-3">
              Simple & Transparent Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-800 text-slate-900 mb-3">
              How to Get Your Spanish QR Prescription in {data.locationName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Fast WhatsApp coordination followed by direct clinical assessment
              with a collegiate doctor in Spain — fee confirmed upfront before
              the consultation begins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-800 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-lg font-800 text-slate-900 mb-2">
                Quick WhatsApp Intake
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Message our 24/7 coordination desk on WhatsApp with your
                location in {data.locationName}, symptoms, or a photo of your
                medication box / NHS App. We confirm availability and the clear
                consultation fee upfront.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0A6EBD] font-800 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-lg font-800 text-slate-900 mb-2">
                Direct Contact from an English-Speaking Doctor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our licensed doctor in Spain contacts you directly via phone or
                WhatsApp (typically within 15–30 minutes) to evaluate your
                symptoms or regular treatment safely in English.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-800 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-lg font-800 text-slate-900 mb-2">
                Official QR Prescription on Your Phone
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When clinically indicated, the doctor sends your Official
                Spanish Electronic Prescription (e-receta privada QR code)
                straight to your phone. Show it with your passport at any local{" "}
                <em>Farmacia</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Medical Needs Evaluated Online ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-800 text-slate-900 mb-3">
              What Can Our English-Speaking Doctors Evaluate Online?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built for the most common holiday prescription emergencies faced
              by tourists in {data.locationName}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_EVALUATIONS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200/80 hover:border-[#0A6EBD]/40 hover:shadow-md transition-all bg-slate-50/50"
              >
                <div className="text-2xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-base font-800 text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hyperlocal Guide (Unique Per Destination) ── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <span className="inline-block text-xs font-700 uppercase tracking-wider text-[#0A6EBD] mb-2">
              {data.regionLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-800 text-slate-900 mb-4">
              {data.localIntroTitle}
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {data.localIntroParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Areas Served */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80">
            <h3 className="text-lg font-800 text-slate-900 mb-4">
              Pharmacies & Tourist Areas Covered in {data.locationName}
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {data.areasServed.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg bg-[#e8f4fd] text-[#0A6EBD] text-xs sm:text-sm font-600"
                >
                  📍 {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600 bg-amber-50 border border-amber-200/70 rounded-xl p-4 leading-relaxed">
              <strong className="text-slate-900">✈️ Lost Luggage or Forgotten Meds?</strong>{" "}
              {data.airportNote}
            </p>
          </div>

          {/* Pharmacy & 24h Guide */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80">
            <h3 className="text-lg font-800 text-slate-900 mb-2.5">
              🟢 {data.pharmacyGuideTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {data.pharmacyGuideText}
            </p>
          </div>

          {/* Clinical Policy & Safety (E-E-A-T) */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-7 border border-slate-800">
            <h3 className="text-base sm:text-lg font-800 text-white mb-2">
              ⚖️ Important Clinical & Safety Policy
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              All electronic prescriptions are issued strictly following direct
              clinical assessment and at the sole professional discretion of a
              licensed doctor registered in Spain. Under Spanish regulations,{" "}
              <strong className="text-white">
                controlled substances cannot be prescribed remotely
              </strong>{" "}
              (including strong opioid painkillers, benzodiazepines, sleeping
              pills, and ADHD stimulants). This express teleconsultation is
              focused solely on clinical assessment and issuing your Official
              Spanish QR Prescription (no medical report). For life-threatening
              emergencies, call <strong className="text-red-400">112</strong> or
              go immediately to the nearest hospital <em>Urgencias</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Destination-Specific FAQs ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-800 text-slate-900 text-center mb-10">
            Frequently Asked Questions — Prescriptions in {data.locationName}
          </h2>
          <div className="space-y-3.5">
            {data.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group rounded-2xl border border-slate-200 bg-slate-50/60 open:bg-white open:shadow-sm transition-all"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-700 text-slate-900 text-base">
                  <span>{faq.q}</span>
                  <span
                    className="w-7 h-7 rounded-lg bg-[#e8f4fd] text-[#0A6EBD] flex items-center justify-center flex-shrink-0 text-lg font-bold group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hub & Spoke Internal Links (All Spain Coverage) ── */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-800 text-slate-900 mb-4">
            Online Prescriptions Across Spain — Other Popular Destinations
          </h2>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {otherDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/${dest.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#0A6EBD] hover:text-[#0A6EBD] text-slate-700 text-sm font-600 transition-colors shadow-xs"
              >
                {dest.isHub
                  ? "🇪🇸 All Spain Hub"
                  : `💊 Prescription in ${dest.locationName}`}
              </Link>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#0A6EBD] to-[#085a99] text-white p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-lg">
            <div>
              <p className="text-xs font-700 uppercase tracking-wider text-sky-200 mb-1.5">
                24/7 Medical Coordination · Official Spanish QR Prescription
              </p>
              <h2 className="text-xl sm:text-2xl font-800 mb-2">
                Need a Prescription in {data.locationName} Today?
              </h2>
              <p className="text-sm sm:text-base text-sky-100 max-w-xl">
                Message our WhatsApp coordination team now. We confirm
                availability and the fee upfront, then our Spanish doctor
                contacts you directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={waHref}
                data-triage="rx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-800 text-sm sm:text-base shadow-md transition-colors cursor-pointer"
              >
                💬 WhatsApp Now
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-700 text-sm transition-colors"
              >
                🏨 Costa del Sol Hotel Visits →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

