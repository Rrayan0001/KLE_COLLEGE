import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Sports & Culture Activities", href: "/supporting-sections/sports-culture" },
  { name: "Scholarships", href: "/supporting-sections/scholarships" },
  { name: "Research Policy", href: "/supporting-sections/research-policy", active: true },
];

const breadcrumbs = [
  { label: "Supporting Sections", href: "/supporting-sections/sports-culture" },
  { label: "Research Policy" },
];

export default function ResearchPolicyPage() {
  return (
    <SubpageLayout
      title="Research Policy"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Research & Innovation
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Our Research Promotion Policy
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6 text-slate-600 leading-relaxed text-justify text-sm md:text-base">
          <p>
            KLE Society&apos;s SCP College encourages a strong research culture among its faculty and students. The research cell functions to promote, coordinate, and review academic research projects, journals publication, and workshops.
          </p>
          <h3 className="font-bold text-slate-800 text-base uppercase tracking-wider">Objectives:</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Facilitate faculty members to apply for major and minor research projects from UGC and other funding agencies.</li>
            <li>Encourage students to take up community-based field projects and survey assignments.</li>
            <li>Organize national and state-level seminars, conferences, and webinars.</li>
            <li>Provide financial support and research incentives for publication in peer-reviewed journals.</li>
          </ul>
        </div>
      </div>
    </SubpageLayout>
  );
}
