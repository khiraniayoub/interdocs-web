import Image from "next/image";

const serviceImages: Record<string, string> = {
  hotel: "/service_hotel.png",
  home: "/service_apartment.png",
  emergency: "/service_emergency.png",
  prescription: "/service_prescription_v2.png",
  certificate: "/service_certificate.png",
  tourist: "/service_tourist.png",
  child: "/service_children.png",
  gp: "/service_gp.png",
  ambulance: "/service_ambulance.jpg",
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
      className="bg-white"
      aria-labelledby="services-heading"
    >
      {/* Header — contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-800 text-slate-900 mb-4"
        >
          {title}
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">{subtitle}</p>
      </div>

      {/* Full-width grid — no side padding, edge to edge */}
      <ul
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full"
        role="list"
        aria-label="Medical services offered"
      >
        {items.map((item, i) => (
          <li
            key={item.title}
            className="group relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={serviceImages[item.icon] || "/service_gp.png"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dark gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2C6E]/70 via-[#0A2C6E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>

            {/* Text below image */}
            <div className="p-5 flex flex-col items-center text-center border-b border-slate-100 bg-white group-hover:bg-[#f0f7ff] transition-colors duration-300 h-full">
              <h3 className="font-700 text-slate-900 mb-2 text-base group-hover:text-[#0A6EBD] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
