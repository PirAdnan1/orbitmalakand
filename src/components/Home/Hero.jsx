"use client";

// components
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// assets - hero slide data
const slides = [
  {
    id: 1,
    title: "Learning by Doing,",
    subtitle: "Growing by Playing!",
    description:
      "These activities foster creativity, independence, and critical thinking through engaging, interactive experiences.",
    cta: "Get Started",
    href: "/admissions",
    bg: "from-red-900/80 to-red-600/60",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/FB_IMG_1736011275398-1.jpg",
  },
  {
    id: 2,
    title: "We Nurture Your",
    subtitle: "Child's Potential for Excellence",
    description:
      "Emphasizes our commitment to unlocking each child's unique abilities and guiding them towards success.",
    cta: "Get Started",
    href: "/academics",
    bg: "from-gray-900/80 to-gray-700/60",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2025/01/461520193_907122551475014_8682755826255834018_n.jpg",
  },
  {
    id: 3,
    title: "Empowering Children",
    subtitle: "Through Self-Directed Education",
    description:
      "Fostering independence and critical thinking by allowing children to take control of their learning journey.",
    cta: "Get Started",
    href: "/academics/programs/pre-primary",
    bg: "from-red-800/80 to-orange-700/60",
    image:
      "https://theorbitmalakand.com/wp-content/uploads/2024/12/prin.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.bg}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span
              key={current + "-tag"}
              className="inline-block bg-primary text-white text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-widest animate-fade-in"
            >
              The Orbit School & College Malakand
            </span>
            <h1
              key={current + "-h1"}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-2 font-heading animate-slide-up"
            >
              {slide.title}
            </h1>
            <h2
              key={current + "-h2"}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-light leading-tight mb-5 font-heading animate-slide-up"
            >
              {slide.subtitle}
            </h2>
            <p
              key={current + "-p"}
              className="text-white/90 text-base md:text-lg mb-8 max-w-lg animate-fade-in"
            >
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link href={slide.href} className="btn-primary text-base px-8 py-4">
                {slide.cta}
              </Link>
              <Link href="/about" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-primary scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-1 text-white/60 text-xs">
        <span>Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-4 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
