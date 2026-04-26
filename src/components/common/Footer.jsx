// components
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

// assets
const WHITE_LOGO =
  "https://theorbitmalakand.com/wp-content/uploads/2025/01/white-logo--768x142.png";

const quickLinks = [
  { label: "College Admissions", href: "/admissions/college" },
  { label: "School Admissions", href: "/admissions/school" },
  { label: "IT Programs", href: "/admissions/it-programs" },
  { label: "Scholarships", href: "/admissions/scholarships" },
  { label: "Latest Events", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const programs = [
  { label: "Pre-Primary", href: "/academics/programs/pre-primary" },
  { label: "Middle School", href: "/academics/programs/middle-school" },
  { label: "Matric", href: "/academics/programs/matric" },
  { label: "College Disciplines", href: "/academics/programs/college-disciplines" },
  { label: "BS Programs", href: "/academics/programs/bs-programs" },
  { label: "DIT Programs", href: "/academics/programs/dit-1-year" },
  { label: "IT Short Courses", href: "/academics/programs/it-short-courses" },
];

// assets - partner logos from WordPress
const partnerLogos = [
  {
    src: "https://theorbitmalakand.com/wp-content/uploads/2024/12/partners-1-768x426.png",
    alt: "Partner 1",
  },
  {
    src: "https://theorbitmalakand.com/wp-content/uploads/2024/12/partners-2-768x426.png",
    alt: "Partner 2",
  },
  {
    src: "https://theorbitmalakand.com/wp-content/uploads/2024/12/partners-3-768x426.png",
    alt: "Partner 3",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Partners strip */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-widest font-semibold">
            Educational Collaborators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-lg p-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={78}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src={WHITE_LOGO}
              alt="The Orbit Malakand"
              width={200}
              height={37}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              The Orbit College engages students from Early-1 to 2nd Year in a
              rich and creative educational experience of high standard.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/OrbitSakhakot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://wa.me/+923135999944"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-2 block" />
            </h4>
            <ul className="space-y-2 mt-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Programs
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-2 block" />
            </h4>
            <ul className="space-y-2 mt-4">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span> {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-2 block" />
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span>Sakhakot, Malakand Division, KPK, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhone className="text-primary shrink-0" />
                <span>0932-311333 / 0313-5999944</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="text-primary shrink-0" />
                <span>info@theorbitmalakand.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 text-center">
        <p className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} The Orbit Malakand. All Rights
          Reserved. |{" "}
          <span className="text-gray-400">
            Developed by Pir Adnan & Nisar Shalmani
          </span>
        </p>
      </div>
    </footer>
  );
}
