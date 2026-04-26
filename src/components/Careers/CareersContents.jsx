"use client";

// components
import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// utils - job listings
const jobs = [
  {
    title: "Subject Teacher — Mathematics",
    department: "Academics",
    type: "Full Time",
    location: "Sakhakot, Malakand",
    desc: "We are looking for a passionate and qualified Mathematics teacher for middle school and matric level. Strong subject knowledge and communication skills required.",
  },
  {
    title: "Subject Teacher — English",
    department: "Academics",
    type: "Full Time",
    location: "Sakhakot, Malakand",
    desc: "Experienced English teacher required for school and college sections. Ability to teach grammar, composition, and literature effectively.",
  },
  {
    title: "IT Instructor — Short Courses",
    department: "Information Technology",
    type: "Full Time / Part Time",
    location: "Sakhakot, Malakand",
    desc: "Skilled IT instructor needed for courses including Web Design, Graphic Design, WordPress, and Database Development.",
  },
  {
    title: "Administrative Officer",
    department: "Administration",
    type: "Full Time",
    location: "Sakhakot, Malakand",
    desc: "Responsible for daily administrative operations, record keeping, and coordination between departments.",
  },
];

function JobCard({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-bold text-primary bg-primary-pale px-3 py-1 rounded-full uppercase tracking-wide">
              {job.department}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <FaClock size={10} /> {job.type}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <FaMapMarkerAlt size={10} /> {job.location}
            </span>
          </div>
          <h3 className="font-bold text-gray-800 text-lg font-heading">
            {job.title}
          </h3>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="btn-primary text-sm px-5 py-2 flex-shrink-0"
        >
          {open ? "Close" : "View Details"}
        </button>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.desc}</p>
          <a
            href="mailto:info@theorbitmalakand.com?subject=Job Application"
            className="btn-outline text-sm inline-flex items-center gap-2"
          >
            <FaBriefcase size={14} /> Apply Now via Email
          </a>
        </div>
      )}
    </div>
  );
}

export default function CareersContents() {
  return (
    <div>
      <PageHero
        title="Careers"
        subtitle="Join our team at The Orbit School & College Malakand and make a difference in education."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Join Our Family
            </span>
            <h2 className="section-heading mt-2">Open Positions</h2>
            <span className="red-line mx-auto" />
            <p className="text-gray-500 mt-4 text-sm">
              We are always looking for passionate educators and professionals to
              join our team. Email us at{" "}
              <a
                href="mailto:info@theorbitmalakand.com"
                className="text-primary font-semibold"
              >
                info@theorbitmalakand.com
              </a>
            </p>
          </div>

          <div className="space-y-5">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
