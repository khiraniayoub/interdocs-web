import Link from "next/link";
import { BLOG_POSTS, type Locale } from "@/data/content";

interface BlogSectionProps {
  title: string;
  subtitle: string;
  readMoreLabel: string;
  locale: Locale;
  singlePost?: (typeof BLOG_POSTS)[0];
}

export default function BlogSection({
  title,
  subtitle,
  readMoreLabel,
  locale,
  singlePost,
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
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {title}
          </h2>
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
              <li key={post.slug}>
                <Link
                  href={href}
                  className="group flex flex-col h-full p-7 rounded-2xl border border-slate-100 hover:border-[#0A6EBD]/30 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                  aria-label={post.title[locale]}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-600 text-[#0A6EBD] bg-[#e8f4fd] px-3 py-1 rounded-full">
                      Health Guide
                    </span>
                    <span className="text-sm text-slate-400">
                      {post.readTime} min
                    </span>
                  </div>

                  <h3 className="font-700 text-slate-900 text-xl leading-snug mb-3 group-hover:text-[#0A6EBD] transition-colors duration-200 flex-1">
                    {post.title[locale]}
                  </h3>

                  <p className="text-base text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt[locale]}
                  </p>

                  <div className="flex items-center gap-1 text-base font-600 text-[#0A6EBD] mt-auto">
                    {readMoreLabel}
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
