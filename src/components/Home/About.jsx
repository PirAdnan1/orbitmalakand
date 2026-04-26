// components
import Link from "next/link";
import Image from "next/image";

// assets
const PRINCIPAL_IMG =
  "https://theorbitmalakand.com/wp-content/uploads/2024/12/prin.png";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image + Vision cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={PRINCIPAL_IMG}
                alt="Principal Mr. Tahir Khan"
                width={600}
                height={450}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Mr. Tahir Khan</p>
                <p className="text-white/80 text-sm">
                  Principal, The Orbit School & College Malakand
                </p>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -top-5 -right-5 bg-primary text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-black">2021</p>
              <p className="text-xs text-white/80">Est. Year</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="section-heading mt-2">
              The Orbit School & College Malakand
            </h2>
            <span className="red-line" />
            <p className="text-gray-600 leading-relaxed mb-4">
              The Orbit School & College Malakand is a private, independent
              institution committed to providing high-quality education to
              students from Playgroup to Intermediate (F.Sc) level. We treat all
              our students with equal importance, fostering an inclusive
              environment where every learner thrives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2021, The Orbit School & College Malakand aims to equip
              students with the skills needed to face the challenges of the 21st
              century. Through personalized approaches, we ensure each student
              builds a strong foundation for their future success.
            </p>

            {/* Vision / Mission / Values */}
            <div className="space-y-4">
              {[
                {
                  title: "Vision",
                  text: "Academic excellence of global standard that enables students to act ethically and responsibly in a changing world.",
                },
                {
                  title: "Mission",
                  text: "Fostering 21st Century education by igniting the innate potential of students academically, spiritually and socially.",
                },
                {
                  title: "Core Values",
                  text: "High-Tech, inquiry-based, and concept-driven approach to learning with STEAM-based curriculum.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-primary shadow-sm"
                >
                  <div>
                    <p className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary mt-8 inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
