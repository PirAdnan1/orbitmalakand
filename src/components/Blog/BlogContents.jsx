// components
import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaTag } from "react-icons/fa";

// utils - blog/events data
const posts = [
  {
    title: "Data Base Development",
    excerpt:
      "Access Database Course – 4 Months Duration. Unlock the potential of data management with our comprehensive Access Database course designed for beginners and professionals alike.",
    href: "/blog/data-base-development",
    date: "January 2025",
    tag: "IT Course",
    readTime: "3 min read",
  },
  {
    title: "Web Designing Certification",
    excerpt:
      "Web Designing Course – 4 Months Duration. Transform your creative ideas into visually stunning websites with our professional web designing course.",
    href: "/blog/web-designing-certification",
    date: "January 2025",
    tag: "IT Course",
    readTime: "3 min read",
  },
  {
    title: "WordPress Certification",
    excerpt:
      "WordPress Course – 4 Months Duration. Unlock the power of website creation with our WordPress Course, perfect for beginners and entrepreneurs.",
    href: "/blog/wordpress-certification",
    date: "January 2025",
    tag: "IT Course",
    readTime: "3 min read",
  },
  {
    title: "Professional Graphic Designing",
    excerpt:
      "Graphic Designing Course – 4 Months Duration. Unlock your creative potential with our professional Graphic Designing course using industry-standard tools.",
    href: "/blog/professional-graphic-designing",
    date: "January 2025",
    tag: "IT Course",
    readTime: "3 min read",
  },
  {
    title: "Autodesk AutoCAD",
    excerpt:
      "AutoCAD Course – 4 Months Duration. A specialized AutoCAD Course designed for architecture, engineering, and design students.",
    href: "/blog/autodesk-autocad",
    date: "January 2025",
    tag: "IT Course",
    readTime: "3 min read",
  },
  {
    title: "DIT (2 Years) Program",
    excerpt:
      "Admissions Open for Diploma in Information Technology (DIT) – 2 Years Program, equivalent to Intermediate level qualification.",
    href: "/blog/dit-2-years-program",
    date: "January 2025",
    tag: "Admissions",
    readTime: "5 min read",
  },
  {
    title: "DIT (1 Year) Program",
    excerpt:
      "Admissions Open for Diploma in Information Technology (DIT) – 1 Year Program! We are excited to announce open admissions for this fast-track program.",
    href: "/blog/dit-1-year-program",
    date: "January 2025",
    tag: "Admissions",
    readTime: "4 min read",
  },
];

export default function BlogContents() {
  return (
    <div>
      <PageHero
        title="Blog & Events"
        subtitle="Stay updated with the latest news, events, and announcements from The Orbit Malakand."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                {/* Color bar */}
                <div className="h-1.5 bg-primary w-full" />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-widest bg-primary-pale px-3 py-1 rounded-full">
                      <FaTag size={10} /> {post.tag}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <FaCalendar size={10} /> {post.date}
                    </span>
                  </div>

                  <h2 className="font-black text-gray-800 text-xl mb-3 font-heading group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <Link
                      href={post.href}
                      className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Read More <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
