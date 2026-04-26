// components
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 md:py-20 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-20 w-40 h-40 bg-primary/5 rounded-full translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <FaHome size={12} /> Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <FaChevronRight size={10} className="text-gray-600" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-3xl md:text-5xl font-black text-white font-heading mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-base max-w-2xl">{subtitle}</p>
        )}

        {/* Red accent line */}
        <div className="w-20 h-1 bg-primary mt-5 rounded" />
      </div>
    </section>
  );
}
