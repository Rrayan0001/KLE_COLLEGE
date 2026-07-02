import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba", active: true },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/ba" },
  { label: "Bachelor of Arts (B.A.)" },
];

export default function BachelorOfArtsPage() {
  return (
    <SubpageLayout
      title="Bachelor of Arts (B.A.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            B.A. Course Details & Curriculum
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The Bachelor of Arts program at SCP College is designed to foster critical thinking, linguistic competence, and a deep appreciation of human history, society, and economics. Our faculty provides rigorous training to equip students with analytical skills necessary for civil services, journalism, teaching, and other professional careers.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            NEP Syllabus Structure
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-32">Paper</th>
                  <th className="py-4 px-6">Subject / Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Paper I</td>
                  <td className="py-4 px-6 text-slate-900">Basic Kannada (NEP - For I Semester)</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Paper II</td>
                  <td className="py-4 px-6 text-slate-900">Basic English / Hindi (NEP - For I Semester)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Subject Combinations & Specializations Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Kannada",
              "History",
              "Economics",
              "English",
              "Political Science",
              "Sociology",
              "Journalism & Mass Communication",
              "Agricultural Marketing",
            ].map((subject, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3 hover:border-brand-maroon/20 hover:shadow-md transition duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon text-xs font-extrabold">
                  {idx + 1}
                </div>
                <span className="text-slate-800 font-bold text-sm">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
