import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee", active: true },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Steering Committee" },
];

const steeringCommitteeMembers = [
  { name: "Dr. B. M. Patil", role: "Principal & Chairperson", affiliation: "KLE SCPDDS College Administration" },
  { name: "Dr. K. M. Awaradi", role: "IQAC Coordinator", affiliation: "Department of Economics" },
  { name: "Shri S. B. Patil", role: "Senior Administrative Member", affiliation: "Administrative Office" },
  { name: "Dr. M. S. Patil", role: "Member", affiliation: "Department of Botany" },
  { name: "Shri S. M. Banahatti", role: "Member", affiliation: "Department of Commerce" },
  { name: "Dr. S. D. Salunke", role: "Member", affiliation: "Department of Sociology" },
  { name: "Smt. S. S. Patil", role: "Member", affiliation: "Department of Kannada" }
];

export default function SteeringCommitteePage() {
  return (
    <SubpageLayout
      title="Steering Committee"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Quality Assurance Cell
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            NAAC SSR Steering Committee
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The <strong>NAAC Self-Study Report (SSR) Steering Committee</strong> is constituted by the IQAC to spearhead and coordinate the assessment and accreditation processes. This internal committee oversees the compilation, editing, and submission of the SSR to NAAC, ensuring accurate documentation of criteria indicators.
          </p>
          <p>
            The committee collaborates closely with all academic departments, libraries, support services, and administrative staff to conduct academic and administrative audits.
          </p>
        </div>

        {/* Committee Coordinator Highlight */}
        <div className="bg-gradient-to-r from-college-navy to-college-blue text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 bg-college-gold rounded-full flex items-center justify-center text-2xl font-bold shrink-0 text-college-dark">
            IQAC
          </div>
          <div>
            <h4 className="font-bold text-base text-college-gold">Dr. K. M. Awaradi</h4>
            <p className="text-white/80 text-xs md:text-sm">
              IQAC Coordinator & Steering Committee Lead. Oversees the design and execution of quality parameters, compilation of annual AQAR sheets, and overall SSR documentation.
            </p>
          </div>
        </div>

        {/* Members Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Steering Committee Composition
          </h3>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-4">Sl No.</th>
                  <th className="p-4">Name of Member</th>
                  <th className="p-4">Committee Designation</th>
                  <th className="p-4">Department / Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {steeringCommitteeMembers.map((member, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 font-semibold text-slate-400">{idx + 1}</td>
                    <td className="p-4 font-bold text-slate-800">{member.name}</td>
                    <td className="p-4 font-semibold text-brand-maroon">{member.role}</td>
                    <td className="p-4">{member.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roles notice */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-2 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Steering Committee Mandates
          </h4>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto">
            1. Formulating standard templates for departmental data collection. &bull; 2. Verifying and compiling criteria-wise support documentation. &bull; 3. Coordinating peer-team visit schedules and mock assessment drills.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
