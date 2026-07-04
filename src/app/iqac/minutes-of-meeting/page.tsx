import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting", active: true },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Minutes of Meeting" },
];

const meetings = [
  { sl: 1, year: "2017-2018", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/2017-18 IQAC meetings.pdf" },
  { sl: 2, year: "2018-2019", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/2018-19 IQAC meetings.pdf" },
  { sl: 3, year: "2019-2020", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/2019-20 IQAC meetings.pdf" },
  { sl: 4, year: "2020-2021", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/2020-21 IQAC meetings.pdf" },
  { sl: 5, year: "2021-2022", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/2021-22 IQAC meetings.pdf" },
  { sl: 6, year: "2023-2024", title: "Minutes of Meeting", pdf: "/SCPDDSFiles/5. Minutes of Meeting.pdf" },
];

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function MinutesOfMeetingPage() {
  return (
    <SubpageLayout
      title="Minutes of Meeting"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE SCPDDS College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            IQAC Minutes of Meeting Reports
          </h2>
        </div>

        {/* Mobile-first card list */}
        <div className="space-y-3">
          {meetings.map((meet) => (
            <div
              key={meet.sl}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold text-xs w-6 shrink-0">{meet.sl}</span>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">{meet.title}</span>
                  <span className="text-slate-900 font-semibold text-sm">{meet.year}</span>
                </div>
              </div>
              <a
                href={meet.pdf}
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
