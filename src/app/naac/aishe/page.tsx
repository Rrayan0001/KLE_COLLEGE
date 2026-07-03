import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe", active: true },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/ssr" },
  { label: "AISHE" },
];

const aisheList = [
  { sl: 1, year: "2011-2012", path: "/iqac/aishe certificates/2011-12.pdf" },
  { sl: 2, year: "2012-2013", path: "/iqac/aishe certificates/2012-13.pdf" },
  { sl: 3, year: "2013-2014", path: "/iqac/aishe certificates/2013-14.pdf" },
  { sl: 4, year: "2014-2015", path: "/iqac/aishe certificates/2014-15.pdf" },
  { sl: 5, year: "2015-2016", path: "/iqac/aishe certificates/2015-16.pdf" },
  { sl: 6, year: "2016-2017", path: "/iqac/aishe certificates/2016-17.pdf" },
  { sl: 7, year: "2017-2018", path: "/iqac/aishe certificates/2017-18.pdf" },
  { sl: 8, year: "2018-2019", path: "/iqac/aishe certificates/2018-19.pdf" },
  { sl: 9, year: "2019-2020", path: "/iqac/aishe certificates/2019-20.pdf" },
  { sl: 10, year: "2020-2021", path: "/iqac/aishe certificates/2020-21.pdf" },
];

export default function AISHEPage() {
  return (
    <SubpageLayout
      title="AISHE Reports"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE Society&apos;s SCP College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            All India Survey on Higher Education (AISHE) Certificates
          </h2>
        </div>

        {/* Mobile-first card list */}
        <div className="space-y-3">
          {aisheList.map((item) => (
            <div
              key={item.sl}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold text-xs w-6 shrink-0">{item.sl}</span>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">AISHE Certificate</span>
                  <span className="text-slate-900 font-semibold text-sm">{item.year}</span>
                </div>
              </div>
              <a
                href={item.path}
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
