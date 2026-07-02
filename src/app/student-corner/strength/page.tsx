import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength", active: true },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Student Strength" },
];

const baStrength = [
  { year: "2011-12", count: 300 },
  { year: "2012-13", count: 330 },
  { year: "2013-14", count: 374 },
  { year: "2014-15", count: 376 },
  { year: "2015-16", count: 404 },
  { year: "2016-17", count: 405 },
];

const bcomStrength = [
  { year: "2011-12", count: 171 },
  { year: "2012-13", count: 199 },
  { year: "2013-14", count: 237 },
  { year: "2014-15", count: 255 },
  { year: "2015-16", count: 285 },
  { year: "2016-17", count: 299 },
];

export default function StudentStrengthPage() {
  return (
    <SubpageLayout
      title="Student Strength"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Statistics
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Annual Student Enrollment Strength
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BA Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
              UG - B.A. Strength
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                    <th className="py-3 px-4">Academic Year</th>
                    <th className="py-3 px-4">No. of Students Admitted</th>
                  </tr>
                </thead>
                <tbody>
                  {baStrength.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                    >
                      <td className="py-3 px-4 text-slate-900 font-semibold">{row.year}</td>
                      <td className="py-3 px-4 text-slate-600 font-bold">{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BCom Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
              UG - B.COM. Strength
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                    <th className="py-3 px-4">Academic Year</th>
                    <th className="py-3 px-4">No. of Students Admitted</th>
                  </tr>
                </thead>
                <tbody>
                  {bcomStrength.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                    >
                      <td className="py-3 px-4 text-slate-900 font-semibold">{row.year}</td>
                      <td className="py-3 px-4 text-slate-600 font-bold">{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BSc Table */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            UG - B.Sc. Strength
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white max-w-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                  <th className="py-3 px-4">Academic Year</th>
                  <th className="py-3 px-4">No. of Students Admitted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                  <td className="py-3 px-4 text-slate-900 font-semibold">2016-17</td>
                  <td className="py-3 px-4 text-slate-600 font-bold">32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
