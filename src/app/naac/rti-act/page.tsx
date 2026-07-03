import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act", active: true },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/ssr" },
  { label: "RTI Act" },
];

export default function RTIActPage() {
  return (
    <SubpageLayout
      title="RTI Act"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Right to Information (RTI)
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Statutory Declaration under Section 4(1)(b) of the RTI Act, 2005
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
          <p>
            The Right to Information Act, 2005 is an Act of the Parliament of India to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities, in order to promote transparency and accountability in the working of every public authority.
          </p>
          <p>
            You can read and download our statutory RTI Act declaration below:
          </p>

          <div className="pt-4">
            <a
              href="/SCPDDSFiles/RTI Act.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-maroon text-white font-bold text-sm uppercase px-6 py-3.5 rounded-xl hover:bg-brand-maroon/90 shadow-md shadow-brand-maroon/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download RTI Declaration (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
