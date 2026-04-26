// components
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";

// assets - gallery categories with images from WordPress
const categories = [
  {
    title: "Award Ceremonies",
    href: "/gallery/award-ceremonies",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/461520193_907122551475014_8682755826255834018_n.jpg",
    count: 12,
  },
  {
    title: "Annual Day",
    href: "/gallery/annual-day",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/FB_IMG_1736011275398-1.jpg",
    count: 18,
  },
  {
    title: "Parent Day",
    href: "/gallery/parent-day",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-01.30.27_9813efd1-scaled.jpg",
    count: 8,
  },
  {
    title: "Quiz Competitions",
    href: "/gallery/quiz-competitions",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-04.50.13_65b9408d.jpg",
    count: 10,
  },
  {
    title: "Farewell Gathering",
    href: "/gallery/farewell-gathering",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/awais.jpg",
    count: 14,
  },
  {
    title: "Fun Fair",
    href: "/gallery/fun-fair",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/IMG_4760-scaled.jpg",
    count: 20,
  },
  {
    title: "Exhibitions",
    href: "/gallery/exhibitions",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/INAM-SB.png",
    count: 9,
  },
  {
    title: "Other Memories",
    href: "/gallery/other-memories",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/QAISAR-SB-1-1.png",
    count: 25,
  },
];

export default function GalleryContents() {
  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="Explore moments, events, and memories from The Orbit School & College Malakand."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Our Memories
            </span>
            <h2 className="section-heading mt-2">Photo Gallery</h2>
            <span className="red-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                href={cat.href}
                key={cat.title}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg font-heading">
                    {cat.title}
                  </h3>
                  <span className="text-white/70 text-xs">
                    {cat.count} photos
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
