import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates", active: true },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details" },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/certificates" },
  { label: "Certificates" },
];

const naacCycles = [
  {
    cycle: "UGC-NAAC 1st Cycle",
    grade: "B Grade",
    status: "Completed",
    info: "First institutional assessment and certification conducted by NAAC committee to establish standard quality parameters."
  },
  {
    cycle: "UGC-NAAC 2nd Cycle",
    grade: "B Grade (2.86 CGPA)",
    status: "Completed",
    info: "Re-accreditation cycle certifying growth in curriculum delivery, student support, and infrastructure expansion."
  },
  {
    cycle: "UGC-NAAC 3rd Cycle",
    grade: "A Grade (3.10 CGPA)",
    status: "Completed / Active",
    info: "A proud milestone for the college. Awarded the prestigious 'A' Grade in recognition of sustained academic excellence, research contributions, and extension programs."
  },
  {
    cycle: "UGC-NAAC 4th Cycle",
    grade: "SSR Submitted",
    status: "In Process",
    info: "Self-Study Report (SSR) for the 4th Cycle has been compiled and submitted to NAAC. Peer team visit preparations are underway."
  }
];

export default function CertificatesPage() {
  return (
    <SubpageLayout
      title="NAAC Certificates"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Quality Accreditation
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            NAAC Accreditation & Cycles
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the UGC to assess and accredit institutions of higher education. Our college regularly participates in NAAC quality audits to evaluate and improve administrative and academic delivery systems.
          </p>
          <p>
            Our institution achieved the coveted <strong>&quot;A&quot; Grade</strong> with a Cumulative Grade Point Average (CGPA) of <strong>3.10</strong> on a 4-point scale in the 3rd Cycle of Accreditation.
          </p>
        </div>

        {/* NAAC Cycles Timeline */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            NAAC Assessment Records
          </h3>
          
          <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
            {naacCycles.map((cy, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-brand-maroon border-4 border-white shadow" />
                
                <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm hover:border-brand-maroon/10 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      {cy.cycle}
                    </h4>
                    <span className="px-3 py-1 bg-brand-maroon/5 text-brand-maroon text-[10px] uppercase tracking-wider font-extrabold rounded-full shrink-0 border border-brand-maroon/10">
                      {cy.grade}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {cy.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate copies warning */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-3 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Accreditation Certificates & Reports
          </h4>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto">
            Official accreditation certificates, peer team reports, and institutional grading sheets are available for download under our IQAC and NAAC report directories.
          </p>
          <a
            href="/naac/ssr"
            className="btn-center-fill btn-center-fill-maroon inline-block px-4 py-2 text-white rounded-lg text-xs font-bold shadow-sm"
          >
            Go to SSR Directory
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
