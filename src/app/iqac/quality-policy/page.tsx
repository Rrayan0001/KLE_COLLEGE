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
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy", active: true },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Quality Policy" },
];

export default function QualityPolicyPage() {
  return (
    <SubpageLayout
      title="Quality Policy"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE SCPDDS College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Our Quality Policy
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
          <p>
            The college is committed to maintaining the highest quality standards in education, research, administration, and support services. Our quality parameters are established based on:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Nurturing the academic capabilities of rural youth.</li>
            <li>Providing modern state-of-the-art technological infrastructures.</li>
            <li>Upgrading teacher qualities via continuous learning and FDPs.</li>
            <li>Fostering innovation through our newly set up Incubation Centers.</li>
            <li>Maintaining absolute transparency in admissions, exams, and operations.</li>
          </ul>
        </div>
      </div>
    </SubpageLayout>
  );
}
