import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details", active: true },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Affiliation Details" },
];

const programsList = [
  { name: "Bachelor of Arts (B.A.)", type: "Undergraduate", affiliation: "Permanent Affiliation", body: "Rani Channamma University, Belagavi" },
  { name: "Bachelor of Science (B.Sc.)", type: "Undergraduate", affiliation: "Permanent Affiliation", body: "Rani Channamma University, Belagavi" },
  { name: "Bachelor of Commerce (B.Com.)", type: "Undergraduate", affiliation: "Permanent Affiliation", body: "Rani Channamma University, Belagavi" },
  { name: "Bachelor of Computer Applications (B.C.A.)", type: "Undergraduate", affiliation: "Permanent Affiliation", body: "Rani Channamma University, Belagavi / AICTE Approved" },
  { name: "Master of Commerce (M.Com.)", type: "Postgraduate", affiliation: "Permanent Affiliation", body: "Rani Channamma University, Belagavi" }
];

export default function AffiliationDetailsPage() {
  return (
    <SubpageLayout
      title="Affiliation Details"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Institutional Recognition
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            University Affiliation & UGC Recognition
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            Our college is permanently affiliated with <strong>Rani Channamma University, Belagavi</strong>. All degrees in Arts, Science, Commerce, and Computer Applications are conferred by Rani Channamma University upon successful completion of the academic program.
          </p>
          <p>
            Additionally, the college is recognized by the University Grants Commission (UGC) under <strong>Section 2(f) and 12(B)</strong> of the UGC Act, 1956. This recognition makes the college eligible to receive central financial assistance and research grants under various UGC schemes.
          </p>
        </div>

        {/* Programs Affiliation Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Program Affiliation Status
          </h3>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-4">Sl No.</th>
                  <th className="p-4">Program Name</th>
                  <th className="p-4">Program Level</th>
                  <th className="p-4">Affiliation Status</th>
                  <th className="p-4">Conferring / Approving Body</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {programsList.map((prog, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 font-semibold text-slate-400">{idx + 1}</td>
                    <td className="p-4 font-bold text-slate-800">{prog.name}</td>
                    <td className="p-4 font-semibold">{prog.type}</td>
                    <td className="p-4 text-emerald-600 font-bold">{prog.affiliation}</td>
                    <td className="p-4">{prog.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificates reference card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-base">UGC Recognition & Affiliation Orders</h4>
            <p className="text-slate-500 text-xs md:text-sm">
              Scan copies of the permanent affiliation orders from Rani Channamma University and UGC 2(f) & 12(B) certificates can be viewed in our NAAC documentation bank.
            </p>
          </div>
          <a
            href="/naac/certificates"
            className="px-5 py-2.5 bg-brand-maroon hover:bg-[#5e1c2b] text-white rounded-lg text-xs font-bold transition shadow-sm shrink-0"
          >
            Go to NAAC Bank
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
