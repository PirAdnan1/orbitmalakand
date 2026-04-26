// components
import {
  FaDesktop,
  FaFlask,
  FaShieldAlt,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
} from "react-icons/fa";

// utils - care items
const careItems = [
  {
    icon: FaDesktop,
    title: "Student Management Software",
    desc: "Simplifies academic and administrative tasks, allowing efficient tracking of performance, attendance, and communication.",
  },
  {
    icon: FaLaptop,
    title: "Computer Labs",
    desc: "Modern technology, software, and high-speed internet to enhance digital skills and learning for hands-on projects.",
  },
  {
    icon: FaUsers,
    title: "Collaboration with Parents",
    desc: "Strong collaboration with parents through regular updates, meetings, and a dedicated platform to track student progress.",
  },
  {
    icon: FaShieldAlt,
    title: "Security System",
    desc: "Enhanced security and safety across the campus, providing 24/7 surveillance and protecting students and staff.",
  },
  {
    icon: FaFlask,
    title: "Science Labs",
    desc: "Equipped with advanced tools, providing students a safe, hands-on environment for experiments in biology, chemistry, and physics.",
  },
  {
    icon: FaGraduationCap,
    title: "Career Counselling",
    desc: "Helping students explore their interests, identify strengths, and make informed decisions about future career paths.",
  },
];

export default function CareSupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Student First
          </span>
          <h2 className="section-heading mt-2">Care & Support</h2>
          <span className="red-line mx-auto" />
          <p className="section-subheading mx-auto text-center">
            We prioritize the well-being and success of every student by
            offering innovative resources and a safe, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careItems.map((item) => (
            <div
              key={item.title}
              className="group p-7 border border-gray-100 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 bg-white card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-pale group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
                <item.icon
                  className="text-primary group-hover:text-white transition-colors duration-300"
                  size={24}
                />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
