import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss", active: true },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/ba" },
  { label: "Student Satisfaction Survey (S.S.S.)" },
];

const surveys = [
  { sl: 1, year: "2018-2019", title: "S.S.S. Feedback Analysis", pdf: "/SCPDDSFiles/Feedback SSS - analysis-converted.pdf" },
  { sl: 2, year: "2019-2020", title: "Student Satisfaction Survey", pdf: "/SCPDDSFiles/Student Statisfactory Survey (SSS)-2019-20.pdf" },
  { sl: 3, year: "2020-2021", title: "Student Satisfaction Survey", pdf: "/SCPDDSFiles/Student Statisfactory Survey (SSS)-2019-20.pdf" },
  { sl: 4, year: "2021-2022", title: "S.S.S. Metric 2.7.1 Report", pdf: "/SCPDDSFiles/2.7.1 SSS.pdf" },
  { sl: 5, year: "2022-2023", title: "S.S.S. Metric 2.7.1 Report", pdf: "/SCPDDSFiles/2.7.1.pdf" },
  { sl: 6, year: "2023-2024", title: "S.S.S. Feedback Report", pdf: "/SCPDDSFiles/4. SSS.pdf" },
];

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function StudentSatisfactionSurveyPage() {
  return (
    <SubpageLayout
      title="Student Satisfaction Survey (S.S.S.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            NAAC Criterion 2.7.1
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Student Satisfaction Survey Reports
          </h2>
        </div>

        {/* Mobile-first card list */}
        <div className="space-y-3">
          {surveys.map((item) => (
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
                className="inline-flex items-center justify-center gap-1.5 bg-brand-maroon hover:bg-[#5e1c2b] text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition shrink-0"
              >
                <DownloadIcon />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
