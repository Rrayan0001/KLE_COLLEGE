import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom", active: true },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/mcom" },
  { label: "Master of Commerce (M.Com.)" },
];

export default function MasterOfCommercePage() {
  const semestersData = [
    {
      title: "Semester I",
      subjects: [
        "Financial Management",
        "Advanced Marketing Management",
        "Management Accounting",
        "Applied Economics for Business",
        "Stock Market Operations (Specialization)"
      ]
    },
    {
      title: "Semester II",
      subjects: [
        "Corporate Strategic Management",
        "Corporate Restructuring",
        "Quantitative Techniques",
        "Dynamics of Entrepreneurship Development",
        "Advanced Corporate Accounting",
        "Accounting for Specialization Institutions (Specialization)",
        "OEC - Entrepreneurship Development and Project Management"
      ]
    },
    {
      title: "Semester III",
      subjects: [
        "Business Research Methodology",
        "International Financial Management",
        "Organizational Behavior",
        "Innovations in Accounting",
        "Financial Reporting Standards (Specialization)",
        "OEC - Soft Skills for Employability"
      ]
    },
    {
      title: "Semester IV",
      subjects: [
        "GST and Customs",
        "Corporate Ethics and Governance",
        "Techniques of Costing",
        "Investment Analysis and Portfolio Management",
        "Advanced Financial Accounting (Specialization)",
        "Project Work"
      ]
    }
  ];

  return (
    <SubpageLayout
      title="Master of Commerce (M.Com.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Postgraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            M.Com. Course Curriculum (I to IV Semester)
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            Our Master of Commerce (M.Com) program is a specialized postgraduate program aimed at developing research aptitude, advanced business analysis skillsets, and management expertise under Rani Channamma University&apos;s CBCS / NEP scheme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {semestersData.map((sem, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-maroon text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-extrabold tracking-wide uppercase text-xs md:text-sm">{sem.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow">Postgraduate</span>
              </div>
              <div className="p-6 text-xs md:text-sm">
                <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-wider mb-2.5">Courses Offered</h4>
                <div className="flex flex-col gap-1.5">
                  {sem.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-maroon" />
                      <span className="text-slate-850 font-bold text-xs">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
