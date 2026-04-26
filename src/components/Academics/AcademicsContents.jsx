// components
import PageHero from "@/components/common/PageHero";
import Link from "next/link";

// utils - programs data
const programs = [
  {
    title: "Pre-Primary",
    level: "Early Childhood",
    desc: "Our Montessori-based pre-primary program nurtures creativity, independence, and a love for learning through play-based activities.",
    href: "/academics/programs/pre-primary",
    color: "bg-yellow-400",
    icon: "🌱",
  },
  {
    title: "Middle School",
    level: "Grade 1–8",
    desc: "Comprehensive middle school education building strong academic foundations with a focus on critical thinking and character development.",
    href: "/academics/programs/middle-school",
    color: "bg-blue-500",
    icon: "📚",
  },
  {
    title: "Matric",
    level: "Grade 9–10",
    desc: "BISE-affiliated Matriculation program preparing students for board examinations with quality teaching and exam-focused preparation.",
    href: "/academics/programs/matric",
    color: "bg-green-500",
    icon: "🎯",
  },
  {
    title: "College Disciplines",
    level: "F.Sc / FA / ICS",
    desc: "Intermediate programs covering Science, Arts, and Computer Science disciplines to prepare students for higher education.",
    href: "/academics/programs/college-disciplines",
    color: "bg-purple-500",
    icon: "🔬",
  },
  {
    title: "BS Programs",
    level: "Undergraduate",
    desc: "Collaborative Bachelor's programs with affiliated universities, offering pathways to professional degrees.",
    href: "/academics/programs/bs-programs",
    color: "bg-indigo-500",
    icon: "🎓",
  },
  {
    title: "DIT (1 Year)",
    level: "Diploma Program",
    desc: "One-year Diploma in Information Technology covering essential IT skills for the modern workplace.",
    href: "/academics/programs/dit-1-year",
    color: "bg-red-500",
    icon: "💻",
  },
  {
    title: "DIT (2 Years)",
    level: "Diploma Program",
    desc: "Two-year DIT equivalent to Intermediate, offering comprehensive IT education with practical training.",
    href: "/academics/programs/dit-2-years",
    color: "bg-orange-500",
    icon: "🖥️",
  },
  {
    title: "IT Short Courses",
    level: "4 Months Each",
    desc: "Professional IT certification courses including Web Design, Graphic Design, AutoCAD, WordPress, and Database Development.",
    href: "/academics/programs/it-short-courses",
    color: "bg-teal-500",
    icon: "⚡",
  },
];

function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Our Offerings
          </span>
          <h2 className="section-heading mt-2">Academic Programs</h2>
          <span className="red-line mx-auto" />
          <p className="section-subheading mx-auto text-center">
            From early childhood to professional IT certifications, we offer a
            comprehensive range of programs for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link
              href={program.href}
              key={program.title}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${program.color} h-2 w-full`} />
              <div className="p-6">
                <div className="text-3xl mb-3">{program.icon}</div>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  {program.level}
                </span>
                <h3 className="font-bold text-gray-800 text-lg mt-1 mb-2 font-heading group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{program.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademicsContents() {
  return (
    <div>
      <PageHero
        title="Academics"
        subtitle="Comprehensive academic programs from Playgroup to BS level, designed to nurture every student's potential."
        breadcrumbs={[{ label: "Academics" }]}
      />
      <Programs />
    </div>
  );
}

export default AcademicsContents;
