// components
import Link from "next/link";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

// utils - event data
const events = [
  {
    title: "Data Base Development",
    excerpt:
      "Access Database Course – 4 Months Duration. Unlock the potential of data management with our Access Database course.",
    href: "/blog/data-base-development",
    date: "Jan 2025",
    tag: "IT Course",
    color: "bg-blue-500",
  },
  {
    title: "Web Designing Certification",
    excerpt:
      "Web Designing Course – 4 Months Duration. Transform your creative ideas into visually stunning websites.",
    href: "/blog/web-designing-certification",
    date: "Jan 2025",
    tag: "IT Course",
    color: "bg-purple-500",
  },
  {
    title: "WordPress Certification",
    excerpt:
      "WordPress Course – 4 Months Duration. Unlock the power of website creation with our WordPress Course.",
    href: "/blog/wordpress-certification",
    date: "Jan 2025",
    tag: "IT Course",
    color: "bg-orange-500",
  },
  {
    title: "Professional Graphic Designing",
    excerpt:
      "Graphic Designing Course – 4 Months Duration. Unlock your creative potential with our Graphic Designing course.",
    href: "/blog/professional-graphic-designing",
    date: "Jan 2025",
    tag: "IT Course",
    color: "bg-pink-500",
  },
  {
    title: "Autodesk AutoCAD",
    excerpt:
      "AutoCAD Course – 4 Months Duration. We are excited to offer a specialized AutoCAD Course designed for all levels.",
    href: "/blog/autodesk-autocad",
    date: "Jan 2025",
    tag: "IT Course",
    color: "bg-teal-500",
  },
  {
    title: "DIT (2 Years) Program",
    excerpt:
      "Admissions Open for Diploma in Information Technology (DIT) – 2 Years Program, equivalent to Intermediate.",
    href: "/blog/dit-2-years-program",
    date: "Jan 2025",
    tag: "Admission",
    color: "bg-red-600",
  },
];

export default function LatestEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              What&apos;s New
            </span>
            <h2 className="section-heading mt-2">Latest Events</h2>
            <span className="red-line" />
          </div>
          <Link
            href="/blog"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
          >
            View All Events <FaArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.title}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-hover group"
            >
              {/* Color bar */}
              <div className={`h-1.5 ${event.color} w-full`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary-pale px-3 py-1 rounded-full">
                    {event.tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FaCalendar size={10} /> {event.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary transition-colors font-heading">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {event.excerpt}
                </p>
                <Link
                  href={event.href}
                  className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Read More <FaArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
