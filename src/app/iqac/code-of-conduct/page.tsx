import React from "react";
import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct", active: true },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Code of Conduct" },
];

const rules = [
  "Wear College ID badge at all times on campus.",
  "Be polite, courteous, and respectful to staff, peers, and visitors.",
  "Be honest and maintain academic integrity.",
  "Be disciplined and maintain peace on campus.",
  "Move quietly and sensibly around the college premises.",
  "Act with integrity and moral responsibility.",
  "Follow all rules and regulations laid down by the institution.",
  "Respect your college environment, facilities, and assets.",
  "Share, collaborate, and learn together as a community."
];

export default function CodeOfConductPage() {
  return (
    <SubpageLayout
      title="Code of Conduct"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE SCPDDS College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Code of Conduct for Students
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
            { }<Image src="/images/logo/kle transpe.png" alt="Code of conduct display" className="w-full h-auto object-cover max-h-[360px]" width={800} height={500} />
          </div>
          <div className="space-y-4">
            <ul className="space-y-3">
              {rules.map((rule, idx) => (
                <li
                  key={idx}
                  className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex gap-3 text-sm text-slate-700 font-semibold leading-relaxed shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-brand-maroon font-extrabold text-base shrink-0">✓</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
