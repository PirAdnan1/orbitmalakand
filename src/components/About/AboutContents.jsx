// components
import PageHero from "@/components/common/PageHero";
import Image from "next/image";

// assets
const PRINCIPAL =
  "https://theorbitmalakand.com/wp-content/uploads/2024/12/prin.png";

function Mission() {
  const items = [
    {
      title: "THE ORBIT VISION STATEMENT",
      text: "We are committed to academic excellence of global standard that enables students to act ethically and responsibly in a changing world.",
      icon: "🎯",
    },
    {
      title: "THE ORBIT MISSION STATEMENT",
      text: "We foster 21st Century education by igniting the innate potential of students in order to equip them academically, spiritually and socially in a family-like, cultivating environment.",
      icon: "🚀",
    },
    {
      title: "THE ORBIT CORE VALUES",
      text: "High-Tech, inquiry-based, and concept-driven approach to learning. Worth-learning and innovative environment that encourage a holistic and well-rounded development. STEAM-based curriculum instilling 21st Century Skills.",
      icon: "💡",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="section-heading mt-2">Our Vision, Mission & Values</h2>
          <span className="red-line mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 border border-gray-100 rounded-2xl hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Leadership
            </span>
            <h2 className="section-heading mt-2">Principal&apos;s Message</h2>
            <span className="red-line" />
            <p className="text-gray-600 leading-relaxed mb-4">
              At The Orbit School & College Malakand, we recognize the profound
              importance of education in addressing the pressing challenges of
              today&apos;s world. In an era of rapid change, globalization, and
              technological advancements, we understand that education is the
              key to equipping our students with the knowledge, skills, and
              values necessary to navigate and thrive in an increasingly complex
              and interconnected world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are deeply committed to creating a holistic learning environment
              where students not only grow intellectually but also develop
              emotionally and socially. Our approach fosters critical thinking,
              creativity, and meaningful dialogue.
            </p>
            <p className="font-semibold text-primary italic">
              — Mr. Tahir Khan, Principal
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={PRINCIPAL}
                alt="Principal Mr. Tahir Khan"
                width={400}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-sm object-cover object-top"
              />
              <div className="absolute -bottom-5 -left-5 bg-primary text-white p-5 rounded-2xl shadow-xl">
                <p className="font-black text-lg">Mr. Tahir Khan</p>
                <p className="text-white/80 text-sm">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutContents() {
  return (
    <div>
      <PageHero
        title="About The Orbit"
        subtitle="A private, independent institution committed to providing quality education from Playgroup to Intermediate (F.Sc) level."
        breadcrumbs={[{ label: "About" }]}
      />
      <Mission />
      <Team />
    </div>
  );
}

export default AboutContents;
