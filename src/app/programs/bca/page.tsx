import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca", active: true },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/bca" },
  { label: "Bachelor of Computer Applications (BCA)" },
];

export default function BCAPage() {
  const semestersData = [
    {
      title: "Semester I",
      languages: "English, Kannada / Hindi",
      majors: ["Programming in C", "Fundamentals of Computers", "Mathematical Foundation / Accountancy"],
      compulsory: "Institutional Values - I"
    },
    {
      title: "Semester II",
      languages: "English, Kannada / Hindi",
      majors: ["Data Structure using C", "Object Oriented Concepts using Java", "Discrete Mathematics"],
      compulsory: "Institutional Values - II"
    },
    {
      title: "Semester III",
      languages: "English, Kannada / Hindi",
      majors: ["C# .NET Framework", "DBMS", "Web Technology", "Computer Networks"],
      electives: "Digital Marketing"
    },
    {
      title: "Semester IV",
      languages: "English, Kannada / Hindi",
      majors: ["Python Programming", "Web Technology", "Operating System Concepts", "Machine Learning"],
      electives: "Artificial Intelligence"
    },
    {
      title: "Semester V",
      majors: ["Internet Technologies", "Data Analytics using Power BI", "Mobile Application Development", "Software Engineering"],
      compulsory: "Skill / Practical / Internships"
    },
    {
      title: "Semester VI",
      majors: ["Angular Framework with Typescript", "Artificial Intelligence & Applications", "Cloud Computing", "Cyber Security"],
      compulsory: "Project Work / Case Study using Principles of Research Methodology"
    }
  ];

  return (
    <SubpageLayout
      title="Bachelor of Computer Applications (BCA)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program (AICTE Approved / SEP Scheme)
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            BCA Course Curriculum (I to VI Semester)
          </h2>
        </div>

        {/* AICTE Reports & Grievance Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/SCPDDSFiles/BCA/Mahalingpur AICTE LOA Report 24-25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">AICTE</span>
            <span className="text-slate-800 font-bold text-sm">LOA Report 24-25</span>
          </a>
          <a
            href="/SCPDDSFiles/BCA/Mahalingpur aicte final report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">AICTE</span>
            <span className="text-slate-800 font-bold text-sm">Final Report</span>
          </a>
          <a
            href="/SCPDDSFiles/BCA/mandotorydisclosure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Disclosures</span>
            <span className="text-slate-800 font-bold text-sm">Mandatory Disclosure</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfz10m98i3nO-R5tla4Yd9FhlTD1AE6jj7oLJbmue_jjiJmEQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Feedback</span>
            <span className="text-slate-800 font-bold text-sm">Grievance Submission</span>
          </a>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The BCA program equips students with modern programming skills, information technology principles, database administration, and software engineering methodologies. It features state-of-the-art computer labs, hands-on application development projects, and is structured in full alignment with the SEP scheme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {semestersData.map((sem, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-maroon text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-extrabold tracking-wide uppercase text-xs md:text-sm">{sem.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow">SEP Scheme</span>
              </div>
              <div className="p-6 space-y-3.5 text-xs md:text-sm">
                {sem.languages && (
                  <div>
                    <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-wider mb-0.5">Languages</h4>
                    <p className="text-slate-600 font-medium">{sem.languages}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-wider mb-1.5">Core &amp; Major Subjects</h4>
                  <div className="flex flex-col gap-1.5">
                    {sem.majors.map((major, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-maroon" />
                        <span className="text-slate-850 font-bold text-xs">{major}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {sem.compulsory && (
                  <div>
                    <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-wider mb-0.5">Compulsory Activity / Subject</h4>
                    <p className="text-brand-maroon font-bold text-xs">{sem.compulsory}</p>
                  </div>
                )}
                {sem.electives && (
                  <div>
                    <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-wider mb-0.5">Core Elective</h4>
                    <p className="text-brand-maroon font-bold text-xs">{sem.electives}</p>
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
