import React from "react";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

export async function generateStaticParams() {
  return [
    { year: "2011-12" },
    { year: "2012-13" },
    { year: "2013-14" },
    { year: "2014-15" },
    { year: "2015-16" },
    { year: "2016-17" },
    { year: "2017-18" },
    { year: "2018-19" },
    { year: "2019-20" },
    { year: "2020-21" },
    { year: "2021-22" },
    { year: "2022-23" },
    { year: "2023-24" }
  ];
}

export default async function AqarReportPage({ params }: PageProps) {
  const { year } = await params;

  // Map years to files
  const availableYears = [
    "2011-12",
    "2012-13",
    "2013-14",
    "2014-15",
    "2015-16",
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23"
  ];

  const isAvailable = availableYears.includes(year);
  const pdfPath = year === "2019-20" 
    ? "/iqac/2019-20_aqar_report.pdf" 
    : `/iqac/AQAR ${year}.pdf`;

  const breadcrumbs = [
    { label: "NAAC", href: "/naac/certificates" },
    { label: "AQAR", href: "/naac/aqar" },
    { label: `AQAR ${year}` },
  ];

  return (
    <SubpageLayout
      title={`AQAR Report ${year}`}
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-1">
              Annual Quality Assurance Report
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              Academic Year {year}
            </h2>
          </div>

          {isAvailable && (
            <a
              href={pdfPath}
              download={`AQAR_${year}.pdf`}
              className="btn-center-fill btn-center-fill-maroon px-5 py-2.5 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF Report
            </a>
          )}
        </div>

        {isAvailable ? (
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between text-xs md:text-sm font-semibold text-slate-600">
              <span>Verified Report File: {pdfPath.split("/").pop()}</span>
              <a 
                href={pdfPath} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-maroon hover:underline flex items-center gap-1"
              >
                Open in new tab
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full h-[650px] border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-100 relative">
              <iframe
                src={`${pdfPath}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title={`AQAR Report ${year}`}
              />
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-150 p-8 rounded-2xl text-center space-y-4 max-w-xl mx-auto my-12">
            <div className="w-16 h-16 bg-brand-maroon/5 rounded-full flex items-center justify-center text-brand-maroon mx-auto border border-brand-maroon/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
                Report Not Uploaded Yet
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The Annual Quality Assurance Report (AQAR) for the academic year {year} is currently under preparation or awaiting final administrative submission.
              </p>
            </div>
            <Link 
              href="/naac/aqar"
              className="btn-center-fill btn-center-fill-maroon inline-flex items-center justify-center px-5 py-2.5 text-white rounded-lg text-sm font-bold shadow"
            >
              Back to AQAR Directory
            </Link>
          </div>
        )}
      </div>
    </SubpageLayout>
  );
}
