"use client";

// components
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaFacebook, FaWhatsapp } from "react-icons/fa";

// assets - logo from WordPress
const LOGO =
  "https://theorbitmalakand.com/wp-content/uploads/2025/01/orbit-logo-250x46.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      {
        label: "Programs",
        href: "/academics/programs",
        children: [
          { label: "Pre-Primary", href: "/academics/programs/pre-primary" },
          { label: "Middle School", href: "/academics/programs/middle-school" },
          { label: "Matric", href: "/academics/programs/matric" },
          { label: "College Disciplines", href: "/academics/programs/college-disciplines" },
          { label: "BS Programs", href: "/academics/programs/bs-programs" },
          { label: "DIT (1 Year)", href: "/academics/programs/dit-1-year" },
          { label: "DIT (2 Years)", href: "/academics/programs/dit-2-years" },
          { label: "IT Short Courses", href: "/academics/programs/it-short-courses" },
        ],
      },
      { label: "Assessments", href: "/academics/assessments" },
      { label: "Talent Hunt Test", href: "/academics/talent-hunt-test" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Character Building", href: "/departments/character-building" },
      { label: "Career Counselling", href: "/departments/career-counselling" },
      { label: "Research & Development", href: "/departments/research-development" },
      { label: "Quality Enhancement Cell", href: "/departments/quality-enhancement-cell" },
      { label: "Information Technology", href: "/departments/information-technology" },
      { label: "HR & Management", href: "/departments/hr-management" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Play Group to Grade-10", href: "/admissions/school-admission-form" },
      { label: "College Admissions", href: "/admissions/college-admission-form" },
      { label: "IT Programs", href: "/admissions/it-programs-admision" },
      { label: "Admission Policies", href: "/admissions/admision-policies" },
      { label: "Scholarships", href: "/admissions/scholarships" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Library", href: "/resources/library" },
      { label: "Laboratories", href: "/resources/laboratories" },
      { label: "Computer Labs", href: "/resources/computer-labs" },
      { label: "Dar ul Quran Lab", href: "/resources/dar-ul-quran-lab" },
      { label: "Montessori Lab", href: "/resources/montessori-lab" },
      { label: "Language Lab", href: "/resources/language-lab" },
      { label: "Health Services", href: "/resources/health-services" },
      { label: "Downloads", href: "/resources/downloads" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Award Ceremonies", href: "/gallery/award-ceremonies" },
      { label: "Annual Day", href: "/gallery/annual-day" },
      { label: "Parent Day", href: "/gallery/parent-day" },
      { label: "Quiz Competitions", href: "/gallery/quiz-competitions" },
      { label: "Farewell Gathering", href: "/gallery/farewell-gathering" },
      { label: "Fun Fair", href: "/gallery/fun-fair" },
      { label: "Exhibitions", href: "/gallery/exhibitions" },
      { label: "Other Memories", href: "/gallery/other-memories" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Young Researchers", href: "/activities/young-researchers" },
      { label: "Young Developers", href: "/activities/young-developers" },
      { label: "Young Scholars", href: "/activities/young-scholars" },
      { label: "Science Expo", href: "/activities/science-expo" },
      { label: "Bazm-e-Elmo Adab", href: "/activities/bazm-e-elmo-adab" },
      { label: "Co-Curriculars", href: "/activities/co-curriculars" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

function DropdownMenu({ items, level = 0 }) {
  return (
    <ul
      className={`absolute ${
        level === 0 ? "top-full left-0" : "top-0 left-full"
      } bg-white shadow-xl border-t-2 border-primary min-w-[220px] z-50 py-2 rounded-b-md`}
    >
      {items.map((item) => (
        <NavItem key={item.label} item={item} level={level + 1} />
      ))}
    </ul>
  );
}

function NavItem({ item, level = 0, mobile = false, onClose }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (mobile) {
    return (
      <li className="border-b border-gray-100 last:border-0">
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            className="flex-1 py-3 px-4 text-gray-700 hover:text-primary font-medium text-sm"
            onClick={onClose}
          >
            {item.label}
          </Link>
          {item.children && (
            <button
              className="px-3 py-3 text-gray-500"
              onClick={() => setOpen(!open)}
            >
              <FaChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
                size={12}
              />
            </button>
          )}
        </div>
        {item.children && open && (
          <ul className="bg-gray-50 pl-4">
            {item.children.map((child) => (
              <NavItem
                key={child.label}
                item={child}
                mobile
                onClose={onClose}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className={`relative ${level === 0 ? "group" : ""}`}
      onMouseEnter={() => !mobile && setOpen(true)}
      onMouseLeave={() => !mobile && setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 ${
          level === 0
            ? "py-6 px-3 text-sm font-semibold text-gray-700 hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
            : "px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary-pale w-full flex justify-between items-center"
        }`}
      >
        {item.label}
        {item.children && (
          <FaChevronDown
            size={10}
            className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </Link>
      {item.children && open && <DropdownMenu items={item.children} level={level} />}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <span>📞 0932-311333 / 0313-5999944</span>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.facebook.com/OrbitSakhakot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/+923135999944"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center py-3">
            <Image
              src={LOGO}
              alt="The Orbit Malakand"
              width={200}
              height={37}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <NavItem key={link.label} item={link} level={0} />
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-80 bg-white h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary">
              <Image src={LOGO} alt="Orbit" width={160} height={30} className="h-8 w-auto brightness-0 invert" />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white"
              >
                <FaTimes size={22} />
              </button>
            </div>
            <ul className="divide-y divide-gray-100">
              {navLinks.map((link) => (
                <NavItem
                  key={link.label}
                  item={link}
                  mobile
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </ul>
            <div className="p-4 bg-gray-50 text-sm text-gray-500">
              <p>📞 0932-311333</p>
              <p>📱 0313-5999944</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
