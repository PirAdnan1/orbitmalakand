"use client";

// components
import { useEffect, useRef, useState } from "react";

// utils - counter hook
function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return count;
}

const stats = [
  { label: "Current Enrollments", value: 1200, suffix: "+" },
  { label: "Mentors", value: 60, suffix: "+" },
  { label: "Alumni", value: 500, suffix: "+" },
  { label: "IT Programs", value: 10, suffix: "+" },
];

function StatCard({ stat }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6 group"
    >
      <div className="text-5xl font-black text-primary mb-2 font-heading">
        {count}
        <span>{stat.suffix}</span>
      </div>
      <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Orbit at a Glance
          </span>
          <h2 className="section-heading mt-2">
            Explore Key Figures
          </h2>
          <p className="section-subheading mx-auto text-center">
            Highlights of our growth and success, reflecting commitment to excellence in education.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
