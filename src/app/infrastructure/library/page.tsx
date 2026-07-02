import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office" },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library", active: true },
  { name: "Hostel", href: "/infrastructure/hostel" },
  { name: "Classrooms", href: "/infrastructure/classrooms" },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
  { name: "Labs", href: "/infrastructure/labs" },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Library" },
];

const committee = [
  { sl: 1, name: "Dr. B. M. Patil", dept: "Principal" },
  { sl: 2, name: "Shri. S. S. Bidare", dept: "Librarian" },
  { sl: 3, name: "Shri. S. M. Bannur", dept: "Commerce" },
  { sl: 4, name: "Shri. A. S. Dhamannaver", dept: "History" },
  { sl: 5, name: "Dr. S. B. Biradar", dept: "Sociology" },
];

export default function LibraryPage() {
  return (
    <SubpageLayout
      title="College Library"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Learning Resources
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Central Library & E-Library
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/klescpbanner.jpg"
              alt="Library interior"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-justify text-sm">
              College library is an information resource centre for teaching, learning and research. Being the heart of the academic centre, it is home for all information services. With an aim to provide access to information and knowledge, the library contributes and supports transformation of talent into personality. It plays a proactive role in enabling access to information resources of all kinds providing innovative and effective service to meet the changing needs of the academic community.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Library Advisory Committee
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-20">Sl.No</th>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Department</th>
                </tr>
              </thead>
              <tbody>
                {committee.map((member, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 text-sm font-medium text-slate-700"
                  >
                    <td className="py-4 px-6 text-slate-400 font-bold">{member.sl}</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold">{member.name}</td>
                    <td className="py-4 px-6 text-slate-600">{member.dept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs italic">
            The committee supervises the activities of the library and advises the librarian in connection with improvements in the quality of library services. The committee meets twice in a year to ensure smooth working of the College library.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Significant Library Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Optimum utilization of library facilities.",
              "Plans for the development of library.",
              "Installation of CCTV surveillance.",
              "Value added services to meritorious and physically challenged students.",
              "Free access to internet in e-library.",
              "Library facilities available to alumni.",
              "Strengthening of e-resources, CDs, and library software.",
              "Best Library User awards with endowment cash prizes.",
              "Total area of 4,460 sq.ft. with ground floor and digital library.",
            ].map((initiative, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{initiative}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Working Hours
          </h3>
          <div className="bg-slate-50 p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div>
              <span className="font-bold text-slate-900 block mb-1">On Working Days</span>
              Monday to Saturday: 7:30 AM to 5:30 PM
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">During Vacation</span>
              8:30 AM to 1:30 PM
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">On Holidays</span>
              Library is closed
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
