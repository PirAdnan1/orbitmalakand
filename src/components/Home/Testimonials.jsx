"use client";

// components
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// assets - testimonial data from WordPress
const educators = [
  {
    name: "Mr. Shehzad Qamar",
    role: "Founder & Chief Executive of Ataleeq Pakistan",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/461520193_907122551475014_8682755826255834018_n.jpg",
    quote:
      "The Orbit School demonstrates an extraordinary commitment to nurturing young minds. Their innovative approach to education, combining modern methods with strong values, sets a benchmark for quality education in the region.",
  },
  {
    name: "Mr. Inam Ullah",
    role: "Founder of Internet of Flying Vehicles-Lab at AI-EYS",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/INAM-SB.png",
    quote:
      "As an educator and innovator, I am impressed by The Orbit's vision to integrate technology and hands-on learning. They are truly preparing students for the challenges of the 21st century.",
  },
  {
    name: "Mr. Qaisar Zaman",
    role: "Professional Mentor and Assistant Professor of Zoology",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/QAISAR-SB-1-1.png",
    quote:
      "The dedication of The Orbit's faculty and administration to academic excellence is evident in every aspect of the institution. It is a place where students genuinely thrive and grow.",
  },
  {
    name: "Mr. M. Naseem Khan",
    role: "Chairman BISE Malakand, Khyber Pakhtunkhwa",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/naseem_khan_ch.jpg",
    quote:
      "The Orbit Malakand is a commendable institution that is raising the standard of education in our region. Their results and the caliber of students they produce speak volumes about their quality.",
  },
];

const alumni = [
  {
    name: "Mr. Awais Khan",
    role: "(Batch-I) 2023 — BS Software Engineering, Sarhad University Peshawar",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/awais.jpg",
    quote:
      "The best school and college with a highly intelligent, friendly, and cooperative staff. Their advanced vision and dedication to providing quality education make it an excellent institution for learning and growth.",
  },
  {
    name: "Mr. Muhammad Umair Khan",
    role: "(Batch-I) 2023 — Entrepreneur & AI Content Creator, Founder of Digitallasuna",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-01.30.27_9813efd1-scaled.jpg",
    quote:
      "I owe a lot to Orbit School and College for laying a solid foundation. Orbit isn't just a college—it's a place that prepares you to lead in the digital age!",
  },
  {
    name: "Mr. Maaz Hayat",
    role: "(Batch-I) 2023 — Telecommunication Engineering, UET Mardan",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-04.50.13_65b9408d.jpg",
    quote:
      "I'm grateful to have spent my academic journey at this incredible institution! The effective teaching-learning process made my experience truly well and best.",
  },
  {
    name: "Mr. Muhammad Ikram",
    role: "(Batch-I) 2023 — Artificial Intelligence, Abdul Wali Khan University Mardan",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/IMG_4760-scaled.jpg",
    quote:
      "Orbit shaped my mind and character, instilling values. The dedicated faculty nurtured growth like family. Orbit taught me practical life lessons.",
  },
];

function TestimonialCarousel({ items, title }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  const item = items[idx];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 font-heading mb-8 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary block rounded" />
        {title}
      </h3>
      <div className="bg-white rounded-2xl shadow-lg p-8 relative min-h-[280px]">
        <FaQuoteRight className="absolute top-6 right-6 text-primary/10 text-5xl" />
        <div className="flex items-start gap-5">
          <Image
            src={item.image}
            alt={item.name}
            width={72}
            height={72}
            className="w-18 h-18 rounded-full object-cover object-top border-3 border-primary flex-shrink-0"
            style={{ width: 72, height: 72 }}
          />
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="font-bold text-gray-800 text-sm">{item.name}</p>
            <p className="text-primary text-xs mt-1">{item.role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2 mt-6 justify-end">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          >
            <FaChevronLeft size={12} />
          </button>
          <span className="text-xs text-gray-400">
            {idx + 1}/{items.length}
          </span>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Voices of Trust
          </span>
          <h2 className="section-heading mt-2">What They Say About Us</h2>
          <span className="red-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <TestimonialCarousel items={educators} title="Educators' Testimonials" />
          <TestimonialCarousel items={alumni} title="What Alumni Say" />
        </div>
      </div>
    </section>
  );
}
