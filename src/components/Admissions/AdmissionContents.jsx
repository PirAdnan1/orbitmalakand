// components
import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

function AdmissionHero() {
  return (
    <section className="py-16 bg-primary-pale">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary text-white text-sm font-bold px-5 py-2 rounded-full mb-5 uppercase tracking-widest animate-pulse">
            🎉 Admissions Open 2025
          </div>
          <h2 className="section-heading">Apply to The Orbit Today</h2>
          <p className="text-gray-500 mb-8">
            Join our growing family of learners. We welcome students at all levels — from Playgroup to BS programs and IT certifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions/school" className="btn-primary px-8 py-4 text-base">
              School Admissions (Play Group – Grade 10)
            </Link>
            <Link href="/admissions/college" className="btn-outline px-8 py-4 text-base">
              College Admissions
            </Link>
            <Link href="/admissions/it-programs" className="btn-outline px-8 py-4 text-base">
              IT Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  const requirements = [
    "Completed application form (online or in-person)",
    "Previous school leaving certificate",
    "Copy of B-Form / CNIC (student and parent)",
    "Two recent passport-size photographs",
    "Previous academic records / marksheets",
    "Entry test (for college-level admissions)",
    "Interview with the academic committee",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Requirements */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              What You Need
            </span>
            <h2 className="section-heading mt-2">Admission Requirements</h2>
            <span className="red-line" />
            <ul className="space-y-4 mt-6">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scholarships */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Financial Support
            </span>
            <h3 className="text-2xl font-black font-heading mt-2 mb-4">
              Scholarships Available
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The Orbit Malakand is committed to making quality education
              accessible to all deserving students. We offer various scholarship
              programs based on merit and financial need.
            </p>
            <div className="space-y-4">
              {[
                { type: "Merit Scholarship", desc: "For top-performing students" },
                { type: "Need-Based Aid", desc: "For deserving students" },
                { type: "Sibling Discount", desc: "For families with multiple children" },
                { type: "Early Bird Discount", desc: "For early applicants" },
              ].map((s) => (
                <div
                  key={s.type}
                  className="border border-gray-700 rounded-xl p-4 hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-white text-sm">{s.type}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/admissions/scholarships" className="btn-primary mt-6 inline-block w-full text-center">
              View All Scholarships
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionContents() {
  return (
    <div>
      <PageHero
        title="Admissions"
        subtitle="Start your journey at The Orbit School & College Malakand. Admissions are open for all programs."
        breadcrumbs={[{ label: "Admissions" }]}
      />
      <AdmissionHero />
      <Requirements />
    </div>
  );
}

export default AdmissionContents;
