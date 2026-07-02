import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc", active: true },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/bsc" },
  { label: "Bachelor of Science (B.Sc.)" },
];

export default function BachelorOfSciencePage() {
  return (
    <SubpageLayout
      title="Bachelor of Science (B.Sc.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            B.Sc. Course Details & Curriculum
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The Bachelor of Science (B.Sc.) program at SCP College focuses on building strong foundations in scientific theory and experimental practice. Students can choose from multiple group combinations consisting of Physics, Chemistry, Mathematics, Botany, and Zoology.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            NEP Languages & Core Subjects
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
            Subject Groups Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">Group A (Physical Sciences)</h4>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">Group B (Natural Sciences)</h4>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Botany</li>
                <li>Chemistry</li>
                <li>Zoology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Value Added Courses (NEP)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Digital Fluency (SEC-1)",
              "Physical Education – Yoga (VBC-1)",
              "Health & Wellness (VBC-2)",
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm text-center"
              >
                <span className="text-slate-800 font-bold text-sm">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
