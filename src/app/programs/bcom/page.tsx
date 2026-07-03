import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom", active: true },
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
  { label: "Programs", href: "/programs/bcom" },
  { label: "Bachelor of Commerce (B.COM)" },
];

export default function BachelorOfCommercePage() {
  const semestersData = [
    {
      title: "Semester I",
      languages: "English (Lang 1), Kannada / Hindi (Lang 2)",
      majors: ["Financial Accounting", "Corporate Administration", "Marketing Management", "Financial Marketing"],
      compulsory: "Institutional Values - I"
    },
    {
      title: "Semester II",
      languages: "English (Lang 1), Kannada / Hindi (Lang 2)",
      majors: ["Advance Financial Accounting", "Business Management & Startups", "Investments Management", "Business Communication"],
      compulsory: "Institutional Values - II"
    },
    {
      title: "Semester III",
      languages: "English (Lang 1), Kannada / Hindi (Lang 2)",
      majors: ["Corporate Accounting", "Cost Accounting", "Business Analytics", "Business Environment"],
      electives: "Retail Marketing / Human Resource Management"
    },
    {
      title: "Semester IV",
      languages: "English (Lang 1), Kannada / Hindi (Lang 2)",
      majors: ["Advance Corporate Accounting", "Costing Methods and Techniques", "Business Law and Legal Practices", "Financial Management"],
      electives: "Quantitative Techniques for Business Decisions"
    }
  ];

  return (
    <SubpageLayout
      title="Bachelor of Commerce (B.COM)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program (SEP Scheme)
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            B.Com. Course Curriculum (I to VI Semester)
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The Bachelor of Commerce (B.Com) program under the State Education Policy (SEP) scheme at SCP College provides comprehensive education in accounting, banking, marketing, and business administration. The course is aligned to promote practical entrepreneurship, financial management capabilities, and corporate law expertise.
          </p>
        </div>

        <div className="space-y-8">
          {semestersData.map((sem, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-maroon text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-extrabold tracking-wide uppercase text-sm md:text-base">{sem.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">SEP Scheme</span>
              </div>
              <div className="p-6 space-y-4 text-sm">
                <div>
                  <h4 className="font-extrabold text-slate-850 uppercase text-xs tracking-wider mb-1">Languages Offered</h4>
                  <p className="text-slate-600 font-medium">{sem.languages}</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-850 uppercase text-xs tracking-wider mb-2">Major Subjects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sem.majors.map((major, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-lg flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                        <span className="text-slate-850 font-bold">{major}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {sem.compulsory && (
                  <div>
                    <h4 className="font-extrabold text-slate-850 uppercase text-xs tracking-wider mb-1">Compulsory Subject</h4>
                    <p className="text-brand-maroon font-bold">{sem.compulsory}</p>
                  </div>
                )}
                {sem.electives && (
                  <div>
                    <h4 className="font-extrabold text-slate-850 uppercase text-xs tracking-wider mb-1">Core Elective Option</h4>
                    <p className="text-brand-maroon font-bold">{sem.electives}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
