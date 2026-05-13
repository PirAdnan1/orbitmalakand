// components
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// assets
const PRINCIPAL =
  "https://theorbitmalakand.com/wp-content/uploads/2024/12/prin.png";

export default function DirectorMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src={PRINCIPAL}
                  alt="Director Mr. Noor Ul Wahab"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-3 rounded-xl shadow-lg">
                <p className="font-black text-sm">Director</p>
                <p className="text-xs text-white/80">The Orbit Malakand</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              From The Desk of
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading mt-2 mb-2">
              Mr. Noor Ul Wahab
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Director, The Orbit School & College Malakand
            </p>
            <FaQuoteLeft className="text-primary text-4xl mb-4 opacity-80" />
            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              At The Orbit School & College Malakand, we believe education is far more than
              the transfer of knowledge—it is the foundation upon which futures are built,
              character is shaped, and aspirations are transformed into achievement. In a
              world defined by innovation, global connectivity, and constant change, our
              mission is to empower every student with the confidence, wisdom, and skills
              required to lead with purpose and excel in an ever-evolving society.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              We are committed to nurturing a dynamic and inclusive learning environment
              where academic excellence is harmoniously balanced with personal growth,
              creativity, and strong moral values. At Orbit, we inspire our students to
              think critically, act responsibly, and embrace lifelong learning—preparing
              them not only to meet the challenges of tomorrow, but to become the leaders
              who shape it.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-primary font-bold italic">
                — Mr. Noor Ul Wahab (Director)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
