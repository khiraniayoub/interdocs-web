import Image from "next/image";

const serviceImages: Record<string, string> = {
  hotel:        "/service_hotel.png",
  home:         "/service_apartment.png",
  emergency:    "/service_emergency.png",
  prescription: "/service_prescription_v2.png",
  certificate:  "/service_certificate.png",
  tourist:      "/service_tourist.png",
  child:        "/service_children.png",
  gp:           "/service_gp.png",
};

interface ServicesListProps {
  title: string;
  subtitle: string;
  items: { icon: string; title: string; desc: string }[];
}

export default function ServicesList({ title, subtitle, items }: ServicesListProps) {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <ul
          className="flex flex-wrap justify-center gap-6"
          role="list"
          aria-label="Medical services offered"
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-[#0A6EBD]/30 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* AI Image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={serviceImages[item.icon] || "/service_gp.png"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col flex-1 items-center text-center">
                <h3 className="font-700 text-slate-900 mb-2 text-base group-hover:text-[#0A6EBD] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
