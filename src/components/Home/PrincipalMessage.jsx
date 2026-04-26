// components
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// assets
const PRINCIPAL =
  "https://theorbitmalakand.com/wp-content/uploads/2024/12/prin.png";

export default function PrincipalMessage() {
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
                  alt="Principal Mr. Tahir Khan"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-3 rounded-xl shadow-lg">
                <p className="font-black text-sm">Principal</p>
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
              Mr. Tahir Khan
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Principal, The Orbit School & College Malakand
            </p>
            <FaQuoteLeft className="text-primary text-4xl mb-4 opacity-80" />
            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              At The Orbit School & College Malakand, we recognize the profound
              importance of education in addressing the pressing challenges of
              today&apos;s world. In an era of rapid change, globalization, and
              technological advancements, we understand that education is the
              key to equipping our students with the knowledge, skills, and
              values necessary to navigate and thrive in an increasingly complex
              and interconnected world.
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              We are deeply committed to creating a holistic learning environment
              where students not only grow intellectually but also develop
              emotionally and socially, preparing them to face the challenges
              that lie ahead. Our approach fosters critical thinking, creativity,
              and meaningful dialogue.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-primary font-bold italic">
                — Mr. Tahir Khan (Principal)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
