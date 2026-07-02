import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Sports & Culture Activities", href: "/supporting-sections/sports-culture" },
  { name: "Scholarships", href: "/supporting-sections/scholarships", active: true },
  { name: "Research Policy", href: "/supporting-sections/research-policy" },
];

const breadcrumbs = [
  { label: "Supporting Sections", href: "/supporting-sections/sports-culture" },
  { label: "Scholarships" },
];

export default function ScholarshipsPage() {
  return (
    <SubpageLayout
      title="Scholarships"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Student Support
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Financial Aids & Scholarships
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            To ensure education remains accessible to all deserving minds, various central, state, and institutional scholarships are facilitated by the college for meritorious and low-income students.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Available Scholarships & Welfare Schemes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Scholarships for low income students",
              "Scholarships for SC/ST students",
              "Sanchi Honnamma scholarship scheme",
              "National scholarship for meritorious students",
              "National scholarship for physically challenged / handicapped",
              "State government scholarship for the children of primary school teachers",
              "National Hindi Scholarship",
              "National scholarship for dependents of defense personnel",
              "Scholarship for children of weavers",
              "Scholarship for children of labourers",
            ].map((scheme, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3 hover:border-brand-maroon/20 hover:shadow-md transition duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon text-xs font-extrabold shrink-0">
                  {idx + 1}
                </div>
                <span className="text-slate-700 text-sm font-bold">{scheme}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
