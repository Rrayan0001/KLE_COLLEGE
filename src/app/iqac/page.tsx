import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac", active: true },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "About IQAC" },
];

const objectives = [
  { title: "Academic Monitoring", desc: "Assures execution of regular lecture plans, internal exams, assignments, and tutorials." },
  { title: "Teacher Upgradation", desc: "Organizes workshops, faculty development programs (FDPs), and research incentives." },
  { title: "Student Progression", desc: "Coordinates feedback systems, coaching classes, remedial classes, and placements." },
  { title: "Environment and Audits", desc: "Oversees green campus audits, structural stability, and financial transparency." },
];

export default function IQACPage() {
  return (
    <SubpageLayout
      title="About IQAC"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 font-display">
            Internal Quality Assurance Cell
          </h2>
          <p>
            In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment, accreditation and quality up-gradation of institutions of higher education, the Internal Quality Assurance Cell (IQAC) was established at our college.
          </p>
          <p>
            The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions. It acts as a driving force for ushering in quality by working out planned interventionist strategies to remove deficiencies and enhance quality.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8 space-y-6">
          <h3 className="text-lg font-bold text-slate-800 font-display">
            Core Functions & Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-xl flex gap-4 items-start shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-maroon/10 text-brand-maroon font-bold flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">{obj.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
