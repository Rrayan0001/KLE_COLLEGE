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
  { name: "Best Practice", href: "/programs/best-practice", active: true },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/ba" },
  { label: "Best Practice" },
];

const practices = [
  { sl: 1, year: "2017-2018", title: "I - Felicitation of Meritorious Students", pdf: "/SCPDDSFiles/2.  Best Practice -2017-18_I.pdf" },
  { sl: 2, year: "2017-2018", title: "II - Organizing Inter Collegiate Student Meets", pdf: "/SCPDDSFiles/2.1 Best Practice-2017-18 -II.pdf" },
  { sl: 3, year: "2018-2019", title: "Book Talk Initiative", pdf: "/SCPDDSFiles/Best Practice I & II.pdf" },
  { sl: 4, year: "2019-2020", title: "Institutional Best Practices", pdf: "/SCPDDSFiles/Best Practices-2019-20.pdf" },
  { sl: 5, year: "2020-2021", title: "Constellation of RCU Rank Holders", pdf: "/SCPDDSFiles/7.2.1 Best Practices.pdf" },
  { sl: 6, year: "2021-2022", title: "ICT Imbibed Classes", pdf: "/SCPDDSFiles/7.2.1 Best Practices-22.pdf" },
  { sl: 7, year: "2022-2023", title: "Driving Stronger Alumni Support to Student Promotion", pdf: "/SCPDDSFiles/7.2.1 Best Practices 23.pdf" },
];

export default function BestPracticePage() {
  return (
    <SubpageLayout
      title="Best Practices"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Institutional Values
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            NAAC Criterion 7.2 - Best Practices
          </h2>
        </div>

        {/* Mobile-first card list */}
        <div className="space-y-3">
          {practices.map((item) => (
            <div
              key={item.sl}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold text-xs w-6 shrink-0">{item.sl}</span>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">{item.year}</span>
                  <span className="text-slate-900 font-semibold text-sm">{item.title}</span>
                </div>
              </div>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-brand-maroon hover:bg-[#5e1c2b] text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition shrink-0"
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
