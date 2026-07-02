import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar", active: true },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Academic Calendar" },
];

const calendars = [
  { sl: 1, year: "2017-2018", path: "/SCPDDSFiles/Academic Calender 2017-18.jpeg", type: "JPEG" },
  { sl: 2, year: "2018-2019", path: "/SCPDDSFiles/Academic Calender 2018-19.jpg", type: "JPG" },
  { sl: 3, year: "2019-2020", path: "/SCPDDSFiles/Academic Calender 2019-20.jpeg", type: "JPEG" },
  { sl: 4, year: "2020-2021", path: "/SCPDDSFiles/Academic Calendar 2020-21.pdf", type: "PDF" },
  { sl: 5, year: "2021-2022", path: "/SCPDDSFiles/Academic Calendar 2021-22.pdf", type: "PDF" },
  { sl: 6, year: "2022-2023", path: "/SCPDDSFiles/Calender Event 2022-23.pdf", type: "PDF" },
  { sl: 7, year: "2023-2024", path: "/SCPDDSFiles/1. Academic Calendar.pdf", type: "PDF" },
];

export default function AcademicCalendarPage() {
  return (
    <SubpageLayout
      title="Academic Calendar"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Schedule
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Annual Calendar of Events & Activities
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                <th className="py-4 px-6 w-20">Sl.No</th>
                <th className="py-4 px-6">Academic Year</th>
                <th className="py-4 px-6">Calendar Document</th>
                <th className="py-4 px-6">Link</th>
              </tr>
            </thead>
            <tbody>
              {calendars.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                >
                  <td className="py-4 px-6 text-slate-400 font-bold">{item.sl}</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">{item.year}</td>
                  <td className="py-4 px-6 text-slate-600">Academic Calendar ({item.type})</td>
                  <td className="py-4 px-6">
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-maroon font-bold text-xs uppercase hover:underline transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download {item.type}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
