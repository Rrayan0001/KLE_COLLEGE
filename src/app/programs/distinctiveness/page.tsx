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
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness", active: true },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/ba" },
  { label: "Institutional Distinctiveness" },
];

export default function DistinctivenessPage() {
  return (
    <SubpageLayout
      title="Institutional Distinctiveness"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            NAAC Criterion 7.3
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Institutional Distinctiveness Details
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
          <p>
            The distinctiveness of KLE SCPDDS College lies in its unwavering commitment to the academic and socio-economic empowerment of rural youth, particularly rural women. Situated in Mahalingpur, our college acts as a beacon of learning, ensuring that the local community gets access to modern technology and science streams alongside arts and commerce.
          </p>
          <p>
            You can read and download our comprehensive NAAC Institutional Distinctiveness documentation below:
          </p>

          <div className="pt-4">
            <a
              href="/Criterion/Criteria7/7.3.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-maroon text-white font-bold text-sm uppercase px-6 py-3.5 rounded-xl hover:bg-brand-maroon/90 shadow-md shadow-brand-maroon/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Distinctiveness Report (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
