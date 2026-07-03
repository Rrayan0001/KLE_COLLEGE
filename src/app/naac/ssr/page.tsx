import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr", active: true },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/ssr" },
  { label: "Self Study Report" },
];

const ssrList = [
  {
    sl: 1,
    label: "SSR 4th Cycle Report",
    href: "/SCPDDSFiles/IVth Cycle SSR.pdf",
    available: true,
  },
];

export default function SSRPage() {
  return (
    <SubpageLayout
      title="Self Study Report (SSR)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE Society&apos;s SCP College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            NAAC Self Study Report (SSR)
          </h2>
        </div>

        {/* Mobile-first card list — replaces the wide table */}
        <div className="space-y-3">
          {ssrList.map((item) => (
            <div
              key={item.sl}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold text-xs w-6 shrink-0">{item.sl}</span>
                <span className="text-slate-900 font-semibold text-sm">{item.label}</span>
              </div>
              {item.available ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-brand-maroon hover:bg-[#5e1c2b] text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              ) : (
                <span className="text-slate-400 text-xs font-semibold px-4 py-2.5 border border-slate-200 rounded-lg">
                  Unavailable
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
