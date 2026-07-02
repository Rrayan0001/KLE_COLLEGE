import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus", active: true },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Syllabus" },
];

export default function SyllabusPage() {
  return (
    <SubpageLayout
      title="Syllabus"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Academics
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Course Curriculum & Syllabus
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The courses offered at our college follow the Rani Channamma University, Belagavi, regulations. The syllabus has been restructured according to the National Education Policy (NEP) guidelines to provide skill-oriented and flexible learning routes.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                <th className="py-4 px-6 w-32">Course</th>
                <th className="py-4 px-6">Syllabus Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "B.A. (Bachelor of Arts)", desc: "NEP syllabus covering languages, humanities, history, economics, and sociology." },
                { name: "B.Sc. (Bachelor of Science)", desc: "NEP syllabus covering physical and natural science combinations with practical labs." },
                { name: "B.Com. (Bachelor of Commerce)", desc: "NEP syllabus covering accounting, banking, finance, and marketing." },
                { name: "M.Com. (Master of Commerce)", desc: "CBCS syllabus covering corporate strategic management, finance, and stock markets." },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  <td className="py-4 px-6 text-brand-maroon font-bold uppercase">{item.name}</td>
                  <td className="py-4 px-6 text-slate-600 leading-relaxed">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
