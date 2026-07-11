import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes", active: true },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/ba" },
  { label: "Program Outcomes" },
];

const outcomes = [
  { sl: 1, year: "2018-2019", title: "Course Outcomes Report", pdf: "/SCPDDSFiles/Course outcome.pdf" },
  { sl: 2, year: "2019-2020", title: "Course Outcomes Report", pdf: "/SCPDDSFiles/Course Outcomes-2019-20.pdf" },
];

export default function ProgramOutcomesPage() {
  return (
    <SubpageLayout
      title="Program Outcomes"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Academic Performance
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Program & Course Outcomes
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The outcomes define what students are expected to know and be able to do by the time of graduation. These relate to the skills, knowledge, and behaviors that students acquire as they progress through the programs.
          </p>
        </div>

        {/* Mobile-first card list */}
        <div className="space-y-3">
          {outcomes.map((item) => (
            <div
              key={item.sl}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold text-xs w-6 shrink-0">{item.sl}</span>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">{item.title}</span>
                  <span className="text-slate-900 font-semibold text-sm">{item.year}</span>
                </div>
              </div>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-center-fill btn-center-fill-maroon inline-flex items-center justify-center gap-1.5 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
