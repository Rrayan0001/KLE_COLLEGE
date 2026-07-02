import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking", active: true },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/ssr" },
  { label: "Undertaking" },
];

export default function UndertakingPage() {
  return (
    <SubpageLayout
      title="Undertaking"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            NAAC Compliance & Undertaking
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Institutional Undertaking
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
          <p>
            The college hereby declares that it conforms to all regulations, guidelines, and standards of the National Assessment and Accreditation Council (NAAC), UGC, and Rani Channamma University, Belagavi.
          </p>
          <p>
            Our signed institutional undertaking document is available for reference and download:
          </p>

          <div className="pt-4">
            <a
              href="/SCPDDSFiles/Undertaking.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-maroon text-white font-bold text-sm uppercase px-6 py-3.5 rounded-xl hover:bg-brand-maroon/90 shadow-md shadow-brand-maroon/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Undertaking (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
