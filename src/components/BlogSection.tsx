import Link from "next/link";
import { BLOG_POSTS, type Locale } from "@/data/content";

interface BlogSectionProps {
  title: string;
  subtitle: string;
  readMoreLabel: string;
  locale: Locale;
  singlePost?: (typeof BLOG_POSTS)[0];
  isIndexPage?: boolean;
}

export default function BlogSection({
  title,
  subtitle,
  readMoreLabel,
  locale,
  singlePost,
  isIndexPage = false,
}: BlogSectionProps) {
  const dateLocaleMap: Record<Locale, string> = {
    en: "en-GB",
    es: "es-ES",
    de: "de-DE",
    fr: "fr-FR",
    fi: "fi-FI",
    ar: "ar-EG",
    no: "no-NO",
    da: "da-DK",
    sv: "sv-SE",
    ru: "ru-RU",
    nl: "nl-NL",
  };

  // If rendering a single post
  if (singlePost) {
    return (
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-500 text-[#0A6EBD] bg-[#e8f4fd] px-3 py-1 rounded-full">
              Health Guide
            </span>
            <span className="text-sm text-slate-400">{singlePost.readTime} min read</span>
            <span className="text-sm text-slate-400">
              {new Date(singlePost.date).toLocaleDateString(
                dateLocaleMap[locale] || "en-GB",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-800 text-slate-900 leading-[1.15] mb-6">
            {singlePost.title[locale]}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {singlePost.excerpt[locale]}
          </p>
        </header>

        {/* Article content */}
        <div
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-800 prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-900 prose-strong:font-700
            prose-a:text-[#0A6EBD] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: singlePost.content[locale] }}
        />

        {/* Social Share Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-sm font-700 text-slate-700 mb-3">
            {locale === "es"
              ? "Compartir este artículo:"
              : locale === "de"
              ? "Diesen Artikel teilen:"
              : locale === "fr"
              ? "Partager cet article :"
              : locale === "fi"
              ? "Jaa tämä artikkeli:"
              : locale === "ar"
              ? "شارك هذا المقال:"
              : locale === "no"
              ? "Del denne artikkelen:"
              : locale === "da"
              ? "Del denne artikel:"
              : locale === "sv"
              ? "Dela denna artikel:"
              : locale === "ru"
              ? "Поделиться статьей:"
              : locale === "nl"
              ? "Deel dit artikel:"
              : "Share this article:"}
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${singlePost.title[locale]} https://www.interdocsmedical.com${
                  locale === "en"
                    ? `/blog/${singlePost.localeSlugs[locale]}/`
                    : `/${locale}/blog/${singlePost.localeSlugs[locale]}/`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 text-[#1da851] hover:bg-[#25D366] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://www.interdocsmedical.com${
                  locale === "en"
                    ? `/blog/${singlePost.localeSlugs[locale]}/`
                    : `/${locale}/blog/${singlePost.localeSlugs[locale]}/`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                singlePost.title[locale]
              )}&url=${encodeURIComponent(
                `https://www.interdocsmedical.com${
                  locale === "en"
                    ? `/blog/${singlePost.localeSlugs[locale]}/`
                    : `/${locale}/blog/${singlePost.localeSlugs[locale]}/`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://www.interdocsmedical.com${
                  locale === "en"
                    ? `/blog/${singlePost.localeSlugs[locale]}/`
                    : `/${locale}/blog/${singlePost.localeSlugs[locale]}/`
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-50 text-[#0077B5] hover:bg-[#0077B5] hover:text-white font-600 text-xs transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* In-article conversion CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A6EBD]/10 via-[#e8f4fd]/60 to-white border border-[#0A6EBD]/20 shadow-sm">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 bg-[#0A6EBD] text-white text-xs font-700 rounded-full uppercase tracking-wider mb-3">
              24/7 Medical Care · Costa del Sol
            </span>
            <p className="text-2xl sm:text-3xl font-800 text-slate-900 mb-3 tracking-tight">
              {locale === "es"
                ? "¿Necesitas un médico en tu hotel o apartamento ahora?"
                : locale === "de"
                ? "Benötigen Sie jetzt einen Arzt in Ihrem Hotel?"
                : locale === "fr"
                ? "Besoin d'un médecin à votre hôtel maintenant ?"
                : locale === "fi"
                ? "Tarvitsetko lääkärin hotellillesi juuri nyt?"
                : locale === "ar"
                ? "هل تحتاج إلى طبيب في فندقك الآن؟"
                : locale === "no"
                ? "Trenger du lege på hotellet akkurat nå?"
                : locale === "da"
                ? "Brug for læge på hotellet lige nu?"
                : locale === "sv"
                ? "Behöver du läkare till hotellet just nu?"
                : locale === "ru"
                ? "Нужен врач в отель или апартаменты прямо сейчас?"
                : locale === "nl"
                ? "Heeft u nu een dokter nodig in uw hotel of appartement?"
                : "Need a doctor at your hotel or apartment right now?"}
            </p>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              {locale === "es"
                ? "Médicos colegiados privados acuden a tu alojamiento en Málaga, Marbella y Costa del Sol en 30-45 minutos. Con receta médica oficial e informe para tu seguro de viaje."
                : locale === "de"
                ? "Privatarztbesuche in Málaga, Marbella und der Costa del Sol in 30–45 Minuten. Mit offiziellen Rezepten und Belegen für Ihre Reiseversicherung."
                : locale === "fr"
                ? "Nos médecins se déplacent dans votre chambre d'hôtel en 30 à 45 minutes avec ordonnance et rapport pour votre assurance."
                : locale === "ru"
                ? "Лицензированные частные врачи приедут к вам в течение 30-45 минут в Малаге, Марбелье и по всему побережью. Официальные рецепты и медицинские заключения для 100% компенсации по страховке."
                : locale === "nl"
                ? "Gediplomeerde privéartsen arriveren binnen 30-45 minuten in uw accommodatie aan de Costa del Sol. Officiële medische rapporten en recepten voor 100% dekking door uw reisverzekering."
                : "Licensed private doctors arrive at your Costa del Sol accommodation in 30–45 minutes. Official medical receipts and prescriptions provided for 100% insurance claims."}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/34637255224?text=Hello%2C%20I%20need%20a%20doctor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-700 text-base hover:bg-[#1da851] transition-colors shadow-md shadow-green-100"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp (24/7)
              </a>
              <a
                href="tel:+34637255224"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-slate-300 text-slate-800 rounded-xl font-700 text-base hover:border-[#0A6EBD] hover:text-[#0A6EBD] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +34 637 255 224
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Blog list view
  return (
    <section
      id="blog"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isIndexPage ? (
            <h1
              id="blog-heading"
              className="text-4xl sm:text-5xl font-800 text-slate-900 mb-4"
            >
              {title}
            </h1>
          ) : (
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
            >
              {title}
            </h2>
          )}
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Blog articles"
        >
          {BLOG_POSTS.map((post) => {
            const slug = post.localeSlugs[locale];
            const href =
              locale === "en" ? `/blog/${slug}/` : `/${locale}/blog/${slug}/`;

            return (
              <li key={post.slug} className="h-full">
                <article className="group relative flex flex-col h-full p-7 rounded-2xl border border-slate-100 hover:border-[#0A6EBD]/30 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 bg-white">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-600 text-[#0A6EBD] bg-[#e8f4fd] px-3 py-1 rounded-full">
                      Health Guide
                    </span>
                    <span className="text-sm text-slate-400">
                      {post.readTime} min
                    </span>
                  </div>

                  <p className="font-700 text-slate-900 text-xl leading-snug mb-3 group-hover:text-[#0A6EBD] transition-colors duration-200 flex-1">
                    <Link
                      href={href}
                      className="focus:outline-none after:absolute after:inset-0"
                    >
                      {post.title[locale]}
                    </Link>
                  </p>

                  <p className="text-base text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt[locale]}
                  </p>

                  <div className="flex items-center gap-1 text-base font-600 text-[#0A6EBD] mt-auto">
                    <span>{readMoreLabel}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
