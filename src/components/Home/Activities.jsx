// components
import Image from "next/image";
import Link from "next/link";
import { FaRunning, FaNewspaper, FaBook } from "react-icons/fa";

// assets
const ACTIVITY_IMG =
  "https://theorbitmalakand.com/wp-content/uploads/2025/01/FB_IMG_1736011275398-1.jpg";

const activities = [
  {
    icon: FaRunning,
    title: "Athletics",
    desc: "Our students are passionate about sports and athletics and have the freedom to choose the one they like.",
  },
  {
    icon: FaNewspaper,
    title: "In-house Publications",
    desc: "We have several writers who are encouraged to come up with creations published in our in-house magazines.",
  },
  {
    icon: FaBook,
    title: "Bazme Elmo Adab",
    desc: "A platform dedicated to celebrating literary and cultural excellence, bringing together students and educators.",
  },
];

export default function Activities() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={ACTIVITY_IMG}
          alt="Activities Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={ACTIVITY_IMG}
              alt="Co-Curricular Activities"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Beyond Classrooms
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading mt-2 mb-6">
              Co-curricular Activities
            </h2>
            <div className="space-y-6">
              {activities.map((act) => (
                <div key={act.title} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <act.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{act.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/activities" className="btn-primary mt-8 inline-block">
              Explore All Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
