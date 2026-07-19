import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, PHONE_URL, WHATSAPP_NUMBER } from "@/data/content";

interface FooterProps {
  disclaimer: string;
  rights: string;
  locale: string;
}

export default function Footer({ disclaimer, rights, locale }: FooterProps) {
  const year = new Date().getFullYear();
  const localePaths: Record<string, string> = {
    en: "/",
    es: "/es/",
    de: "/de/",
    fr: "/fr/",
    fi: "/fi/",
    ar: "/ar/",
    no: "/no/",
    da: "/da/",
  };
  const homeHref = localePaths[locale] || "/";

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href={homeHref}
              className="inline-flex flex-col lg:flex-row items-center gap-3 mb-5"
              aria-label="Málaga Care Doctors - Home"
            >
              <div className="bg-white rounded-xl px-2 py-2 flex items-center justify-center">
                <Image
                  src="/logo_new_v2.png"
                  alt="Málaga Care Doctors logo"
                  width={100}
                  height={100}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-700 text-white uppercase text-sm tracking-wide">Málaga Care Doctors</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Home Doctor Service</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              {disclaimer}
            </p>

            {/* Emergency notice */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-900/40 border border-red-700/40 rounded-xl">
              <svg
                className="w-4 h-4 text-red-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-red-300 text-xs font-600">
                Life-threatening emergency? Call{" "}
                <a href="tel:112" className="underline font-700">
                  112
                </a>
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
            <h3 className="font-700 text-white mb-5 text-sm tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_URL}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                  aria-label={`Call us at ${PHONE_NUMBER}`}
                >
                  <svg
                    className="w-4 h-4 text-[#0A6EBD]"
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
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                  aria-label="Contact via WhatsApp"
                >
                  <svg
                    className="w-4 h-4 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 text-[#0A6EBD]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Available 24 hours · 7 days
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {year} Interdoc. {rights}
          </p>
          <p className="text-slate-600 text-xs">Costa del Sol · Málaga · Spain</p>
        </div>
      </div>
    </footer>
  );
}
