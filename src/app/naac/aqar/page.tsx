import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar", active: true },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/certificates" },
  { label: "AQAR Reports" },
];

const aqarReports = [
  { year: "2023-24", pdf: "", available: false, status: "Under Process" },
  { year: "2022-23", pdf: "/iqac/AQAR 2022-23.pdf", available: true, status: "Approved" },
  { year: "2021-22", pdf: "/iqac/AQAR 2021-22.pdf", available: true, status: "Approved" },
  { year: "2020-21", pdf: "/iqac/AQAR 2020-21.pdf", available: true, status: "Approved" },
  { year: "2019-20", pdf: "/iqac/2019-20_aqar_report.pdf", available: true, status: "Approved" },
  { year: "2018-19", pdf: "/iqac/AQAR 2018-19.pdf", available: true, status: "Approved" },
  { year: "2017-18", pdf: "/iqac/AQAR 2017-18.pdf", available: true, status: "Approved" },
  { year: "2016-17", pdf: "/iqac/AQAR 2016-17.pdf", available: true, status: "Approved" },
  { year: "2015-16", pdf: "/iqac/AQAR 2015-16.pdf", available: true, status: "Approved" },
  { year: "2014-15", pdf: "/iqac/AQAR 2014-15.pdf", available: true, status: "Approved" },
  { year: "2013-14", pdf: "/iqac/AQAR 2013-14.pdf", available: true, status: "Approved" },
  { year: "2012-13", pdf: "/iqac/AQAR 2012-13.pdf", available: true, status: "Approved" },
  { year: "2011-12", pdf: "/iqac/AQAR 2011-12.pdf", available: true, status: "Approved" },
];

export default function AqarPage() {
  return (
    <SubpageLayout
      title="AQAR Reports"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            NAAC Requirement
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Annual Quality Assurance Reports (AQAR)
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            As part of NAAC sustainability guidelines, the Internal Quality Assurance Cell (IQAC) of the college prepares and submits the Annual Quality Assurance Report (AQAR) annually. These reports provide a detailed self-evaluation of academic, administrative, and developmental programs carried out by the college.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            AQAR Submission Directory
          </h3>
          
          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-white divide-y divide-slate-100">
            {aqarReports.map((report) => (
              <div 
                key={report.year}
                className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-slate-50/50 transition duration-150"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">
                    AQAR Submission for {report.year}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold">
                    Status: <span className={report.available ? "text-emerald-600" : "text-brand-maroon"}>{report.status}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`/naac/aqar/${report.year}`}
                    className="px-4 py-2 border border-slate-200 hover:border-brand-maroon/20 hover:bg-brand-maroon/5 text-slate-700 hover:text-brand-maroon rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                  >
                    View Report
                  </a>
                  {report.available ? (
                    <a
                      href={report.pdf}
                      download={`AQAR_${report.year}.pdf`}
                      className="btn-center-fill btn-center-fill-maroon px-4 py-2 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-xs font-bold cursor-not-allowed flex items-center gap-1.5"
                    >
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
