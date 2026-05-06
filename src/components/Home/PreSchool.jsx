// components
import Link from "next/link";
import Image from "next/image";

// assets
const MONTESSORI =
  "https://theorbitmalakand.com/wp-content/uploads/2025/01/online-learning-3d-icon-download.png";

export default function PreSchool() {
  return (
    <section className="py-20 bg-primary-pale">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <Image
                  src={MONTESSORI}
                  alt="Pre-School / Montessori"
                  width={220}
                  height={220}
                  className="w-56 h-56 object-contain"
                />
              </div>
              {/* Decoration rings */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 scale-110 animate-spin-slow" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Early Childhood Education
            </span>
            <h2 className="section-heading mt-2">Pre-School System</h2>
            <span className="red-line" />
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Montessori Lab offers a dynamic, hands-on learning environment
              where preschool children explore, discover, and develop essential
              skills through play-based activities. With carefully designed
              materials, the lab fosters creativity, independence, and a love for
              learning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our preschool program nurtures each child&apos;s natural curiosity,
              promoting growth in cognitive, social, and emotional development.
              Globally acknowledged Montessori Model for Pre-School students.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Play-Based Learning",
                "Montessori Model",
                "Creative Environment",
                "Social Development",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0">
                    ✓
                  </span>
                  {f}
                </div>
              ))}
            </div>

            <Link href="/admissions/school-admission-form" className="btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
