import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  LOCALES,
  CITIES,
  BLOG_POSTS,
  translations,
  type Locale,
  getLocaleFromPath,
  getSlugFromPath,
  getCityBySlug,
  getLocaleForCitySlug,
  getBlogPostBySlug,
  getLocaleForBlogSlug,
} from "@/data/content";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServicesList from "@/components/ServicesList";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import BlogSection from "@/components/BlogSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import InsuranceLogos from "@/components/InsuranceLogos";
import WhatWeTreat from "@/components/WhatWeTreat";
import Footer from "@/components/Footer";

// ────────────────────────────────────────────────────────────
// Static params generation
// ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  // Home: "/" → empty slug
  paths.push({ slug: [] });

  // Locale homes: /es, /de, /fr
  for (const locale of LOCALES) {
    if (locale !== "en") {
      paths.push({ slug: [locale] });
    }
  }

  // City pages per locale
  for (const city of CITIES) {
    for (const [locale, localeSlug] of Object.entries(city.localeSlugs)) {
      if (locale === "en") {
        paths.push({ slug: [localeSlug] });
      } else {
        paths.push({ slug: [locale, localeSlug] });
      }
    }
  }

  // Blog index per locale
  paths.push({ slug: ["blog"] });
  for (const locale of LOCALES) {
    if (locale !== "en") {
      paths.push({ slug: [locale, "blog"] });
    }
  }

  // Blog posts per locale
  for (const post of BLOG_POSTS) {
    for (const [locale, localeSlug] of Object.entries(post.localeSlugs)) {
      if (locale === "en") {
        paths.push({ slug: ["blog", localeSlug] });
      } else {
        paths.push({ slug: [locale, "blog", localeSlug] });
      }
    }
  }

  return paths;
}

// ────────────────────────────────────────────────────────────
// Route resolution
// ────────────────────────────────────────────────────────────
type PageType =
  | { type: "home"; locale: Locale }
  | { type: "city"; locale: Locale; city: (typeof CITIES)[0] }
  | { type: "blog-index"; locale: Locale }
  | { type: "blog-post"; locale: Locale; post: (typeof BLOG_POSTS)[0] }
  | { type: "not-found" };

function resolvePage(segments: string[]): PageType {
  if (segments.length === 0) return { type: "home", locale: "en" };

  const locale = getLocaleFromPath(segments);
  const slug = getSlugFromPath(segments);

  if (!slug) return { type: "home", locale };

  // Blog index
  if (slug === "blog") return { type: "blog-index", locale };

  // Blog post
  if (slug.startsWith("blog/")) {
    const postSlug = slug.replace("blog/", "");
    const post = getBlogPostBySlug(postSlug);
    if (post) {
      const postLocale = getLocaleForBlogSlug(postSlug) || locale;
      return { type: "blog-post", locale: postLocale, post };
    }
  }

  // City page
  const city = getCityBySlug(slug);
  if (city) {
    const cityLocale = getLocaleForCitySlug(slug) || locale;
    return { type: "city", locale: cityLocale, city };
  }

  return { type: "not-found" };
}

// ────────────────────────────────────────────────────────────
// Metadata generation
// ────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = resolvePage(slug);

  const siteUrl = "https://interdocs.es";

  if (page.type === "home") {
    const t = translations[page.locale];
    const canonical =
      page.locale === "en" ? `${siteUrl}/` : `${siteUrl}/${page.locale}/`;
    return {
      title: "Doctor at Your Hotel | Private Doctor Costa del Sol | Interdocs",
      description:
        "Private English-speaking doctors available 24/7 for tourists across the Costa del Sol. Doctor home visits to your hotel or apartment in Málaga, Marbella and beyond.",
      alternates: {
        canonical,
        languages: {
          en: `${siteUrl}/`,
          es: `${siteUrl}/es/`,
          de: `${siteUrl}/de/`,
          fr: `${siteUrl}/fr/`,
          fi: `${siteUrl}/fi/`,
          ar: `${siteUrl}/ar/`,
          no: `${siteUrl}/no/`,
          da: `${siteUrl}/da/`,
          sv: `${siteUrl}/sv/`,
          "x-default": `${siteUrl}/`,
        },
      },
      openGraph: {
        title: t.hero.headline,
        description: t.hero.subheadline,
        url: canonical,
        images: [{ url: "/hero.png", width: 1200, height: 630 }],
      },
    };
  }

  if (page.type === "city") {
    const { city, locale } = page;
    const localeSlug = city.localeSlugs[locale];
    const canonical =
      locale === "en"
        ? `${siteUrl}/${localeSlug}/`
        : `${siteUrl}/${locale}/${localeSlug}/`;

    const altLangs: Record<string, string> = {};
    for (const [loc, ls] of Object.entries(city.localeSlugs)) {
      altLangs[loc] =
        loc === "en" ? `${siteUrl}/${ls}/` : `${siteUrl}/${loc}/${ls}/`;
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/${locale === "en" ? city.localeSlugs["en"] : `${locale}/${city.localeSlugs[locale]}`}/#localbusiness`,
      name: "Interdocs",
      description: city.description[locale],
      url: canonical,
      telephone: "+34600000000",
      priceRange: "€€",
      paymentAccepted: "Cash, Credit Card, Travel Insurance",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
      hasMap: `https://maps.google.com/?q=doctor+${encodeURIComponent(city.name)}+Spain`,
      areaServed: { "@type": "City", name: city.name },
      availableLanguage: ["English", "Spanish", "German", "French", "Finnish", "Arabic", "Norwegian", "Danish"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34600000000",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        areaServed: "ES",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: city.name,
          item: canonical,
        },
      ],
    };

    return {
      title: city.metaTitle[locale],
      description: city.metaDesc[locale],
      alternates: {
        canonical,
        languages: altLangs,
      },
      openGraph: {
        title: city.h1[locale],
        description: city.metaDesc[locale],
        url: canonical,
        images: [{ url: `${siteUrl}/hero.png`, width: 1200, height: 630, alt: `Private Doctor in ${city.name}` }],
      },
      other: {
        "script:ld+json:localbusiness": JSON.stringify(localBusinessSchema),
        "script:ld+json:breadcrumb": JSON.stringify(breadcrumbSchema),
      },
    };
  }

  if (page.type === "blog-index") {
    const { locale } = page;
    const t = translations[locale];
    const canonical =
      locale === "en"
        ? `${siteUrl}/blog/`
        : `${siteUrl}/${locale}/blog/`;
    return {
      title: `${t.blog.title} | Interdocs`,
      description: t.blog.subtitle,
      alternates: {
        canonical,
        languages: {
          en: `${siteUrl}/blog/`,
          es: `${siteUrl}/es/blog/`,
          de: `${siteUrl}/de/blog/`,
          fr: `${siteUrl}/fr/blog/`,
          fi: `${siteUrl}/fi/blog/`,
          ar: `${siteUrl}/ar/blog/`,
          no: `${siteUrl}/no/blog/`,
          da: `${siteUrl}/da/blog/`,
          sv: `${siteUrl}/sv/blog/`,
        },
      },
    };
  }

  if (page.type === "blog-post") {
    const { post, locale } = page;
    const localeSlug = post.localeSlugs[locale];
    const canonical =
      locale === "en"
        ? `${siteUrl}/blog/${localeSlug}/`
        : `${siteUrl}/${locale}/blog/${localeSlug}/`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title[locale],
      description: post.excerpt[locale],
      url: canonical,
      datePublished: post.date,
      dateModified: post.dateModified,
      author: {
        "@type": "Organization",
        name: "Interdocs",
      },
      publisher: {
        "@type": "Organization",
        name: "Interdocs",
        url: siteUrl,
      },
    };

    const breadcrumbBlogSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title[locale], item: canonical },
      ],
    };

    const altLangs: Record<string, string> = {};
    for (const [loc, ls] of Object.entries(post.localeSlugs)) {
      altLangs[loc] =
        loc === "en"
          ? `${siteUrl}/blog/${ls}/`
          : `${siteUrl}/${loc}/blog/${ls}/`;
    }

    return {
      title: post.metaTitle[locale],
      description: post.metaDesc[locale],
      alternates: {
        canonical,
        languages: altLangs,
      },
      openGraph: {
        title: post.title[locale],
        description: post.excerpt[locale],
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.dateModified,
        url: canonical,
        images: [{ url: `${siteUrl}/hero.png`, width: 1200, height: 630 }],
      },
      other: {
        "script:ld+json:article": JSON.stringify(articleSchema),
        "script:ld+json:breadcrumb": JSON.stringify(breadcrumbBlogSchema),
      },
    };
  }

  return {};
}

// ────────────────────────────────────────────────────────────
// Page Component
// ────────────────────────────────────────────────────────────
export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = resolvePage(slug);

  if (page.type === "not-found") {
    notFound();
  }

  const locale = page.locale;
  const t = translations[locale];

  // ── Home Page ──────────────────────────────────────────
  if (page.type === "home") {
    const siteUrl = "https://interdocs.es";
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: "Interdocs",
      description: t.hero.subheadline,
      url: siteUrl,
      logo: `${siteUrl}/logo_new_v2.png`,
      image: `${siteUrl}/hero.png`,
      telephone: "+34600000000",
      priceRange: "€€",
      paymentAccepted: "Cash, Credit Card, Travel Insurance",
      currenciesAccepted: "EUR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Málaga",
        addressRegion: "Andalucía",
        addressCountry: "ES",
        postalCode: "29001",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.7213,
        longitude: -4.4214,
      },
      hasMap: "https://maps.google.com/?q=Malaga,Spain",
      areaServed: [
        { "@type": "City", name: "Málaga" },
        { "@type": "City", name: "Marbella" },
        { "@type": "City", name: "Fuengirola" },
        { "@type": "City", name: "Benalmádena" },
        { "@type": "City", name: "Torremolinos" },
        { "@type": "City", name: "Nerja" },
        { "@type": "City", name: "Estepona" },
        { "@type": "City", name: "Mijas" },
      ],
      availableLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Spanish" },
        { "@type": "Language", name: "German" },
        { "@type": "Language", name: "French" },
        { "@type": "Language", name: "Finnish" },
        { "@type": "Language", name: "Arabic" },
        { "@type": "Language", name: "Norwegian" },
        { "@type": "Language", name: "Danish" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34600000000",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish", "German", "French"],
        contactOption: "TollFree",
        areaServed: "ES",
      },
      // Add real social/directory URLs here once available, e.g.:
      // sameAs: [
      //   "https://g.co/kgs/YOUR_GOOGLE_BUSINESS_ID",
      //   "https://www.facebook.com/YOUR_PAGE",
      // ],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Interdocs",
      description: "Private doctors available 24/7 for tourists across the Costa del Sol",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header locale={locale} />
        <main id="main-content">
          <Hero
            headline={t.hero.headline}
            subheadline={t.hero.subheadline}
            whatsappLabel={t.hero.whatsapp}
            callLabel={t.hero.call}
            trustItems={[...t.hero.trusts]}
            locale={locale}
          />
          <InsuranceLogos />
          <HowItWorks
            title={t.howItWorks.title}
            subtitle={t.howItWorks.subtitle}
            steps={[...t.howItWorks.steps]}
          />
          <WhatWeTreat locale={locale} />
          <ServicesList
            title={t.services.title}
            subtitle={t.services.subtitle}
            items={[...t.services.list]}
          />
          <ServiceAreas
            title={t.areas.title}
            subtitle={t.areas.subtitle}
            locale={locale}
          />
          <FAQSection
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            items={[...t.faq.items]}
          />
          <BlogSection
            title={t.blog.title}
            subtitle={t.blog.subtitle}
            readMoreLabel={t.blog.readMore}
            locale={locale}
          />
          <ContactForm
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            namePlaceholder={t.contact.name}
            phonePlaceholder={t.contact.phone}
            hotelPlaceholder={t.contact.hotel}
            symptomsPlaceholder={t.contact.symptoms}
            languageLabel={t.contact.language}
            submitLabel={t.contact.submit}
            languages={[...t.contact.languages]}
            disclaimer={t.contact.disclaimer}
          />
          <ReviewsCarousel />
        </main>
        <Footer
          disclaimer={t.footer.disclaimer}
          rights={t.footer.rights}
          locale={locale}
        />
      </>
    );
  }

  // ── City Page ──────────────────────────────────────────
  if (page.type === "city") {
    const { city } = page;

    return (
      <>
        <Header locale={locale} />
        <main id="main-content">
          {/* City Hero */}
          <section className="bg-white py-16 lg:py-24" aria-labelledby="city-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center justify-center gap-2 text-sm text-slate-400">
                  <li>
                    <Link href="/" className="hover:text-[#0A6EBD] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="text-slate-600 font-500">{city.name}</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f4fd] rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0A6EBD]" aria-hidden="true" />
                <span className="text-sm font-600 text-[#0A6EBD]">
                  Available 24/7 · {city.name}
                </span>
              </div>

              <h1
                id="city-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-800 text-slate-900 leading-[1.1] tracking-tight mb-6"
              >
                {city.h1[locale]}
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
                {city.description[locale]}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hello, I need a doctor in ${city.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-700 text-lg hover:bg-[#1da851] transition-colors shadow-lg shadow-green-100"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t.hero.whatsapp}
                </a>
                <a
                  href="tel:+34600000000"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-2xl font-700 text-lg hover:border-[#0A6EBD] hover:text-[#0A6EBD] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.hero.call}
                </a>
              </div>
            </div>
          </section>

          {/* Trust badges */}
          <section className="bg-slate-50 py-10" aria-label="Service features">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" role="list">
                {t.hero.trusts.map((trust) => (
                  <li
                    key={trust}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#e8f4fd] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg className="w-3 h-3 text-[#0A6EBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-xs font-600 text-slate-700">{trust}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <InsuranceLogos />
          <HowItWorks
            title={t.howItWorks.title}
            subtitle={t.howItWorks.subtitle}
            steps={[...t.howItWorks.steps]}
          />
          <WhatWeTreat locale={locale} />
          <ServicesList
            title={t.services.title}
            subtitle={t.services.subtitle}
            items={[...t.services.list]}
          />
          <FAQSection
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            items={[...t.faq.items]}
          />
          <ContactForm
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            namePlaceholder={t.contact.name}
            phonePlaceholder={t.contact.phone}
            hotelPlaceholder={t.contact.hotel}
            symptomsPlaceholder={t.contact.symptoms}
            languageLabel={t.contact.language}
            submitLabel={t.contact.submit}
            languages={[...t.contact.languages]}
            disclaimer={t.contact.disclaimer}
          />
          <ReviewsCarousel />
        </main>
        <Footer
          disclaimer={t.footer.disclaimer}
          rights={t.footer.rights}
          locale={locale}
        />
      </>
    );
  }

  // ── Blog Index ─────────────────────────────────────────
  if (page.type === "blog-index") {
    return (
      <>
        <Header locale={locale} />
        <main id="main-content">
          <div className="bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-800 text-slate-900 mb-4">
                {t.blog.title}
              </h1>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">
                {t.blog.subtitle}
              </p>
            </div>
          </div>
          <BlogSection
            title={t.blog.title}
            subtitle={t.blog.subtitle}
            readMoreLabel={t.blog.readMore}
            locale={locale}
          />
          <ReviewsCarousel />
        </main>
        <Footer
          disclaimer={t.footer.disclaimer}
          rights={t.footer.rights}
          locale={locale}
        />
      </>
    );
  }

  // ── Blog Post ──────────────────────────────────────────
  if (page.type === "blog-post") {
    const { post } = page;
    return (
      <>
        <Header locale={locale} />
        <main id="main-content">
          <BlogSection
            title={t.blog.title}
            subtitle={t.blog.subtitle}
            readMoreLabel={t.blog.readMore}
            locale={locale}
            singlePost={post}
          />
          <ReviewsCarousel />
        </main>
        <Footer
          disclaimer={t.footer.disclaimer}
          rights={t.footer.rights}
          locale={locale}
        />
      </>
    );
  }

  return null;
}
