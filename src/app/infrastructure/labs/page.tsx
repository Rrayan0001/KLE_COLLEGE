import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office" },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Hostel", href: "/infrastructure/hostel" },
  { name: "Classrooms", href: "/infrastructure/classrooms" },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
  { name: "Labs", href: "/infrastructure/labs", active: true },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Laboratories" },
];

export default function LaboratoriesPage() {
  return (
    <SubpageLayout
      title="Laboratories"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Practical Learning
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Science, Computer & Language Labs
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The college houses well-equipped laboratories across departments to ensure students get practical experience to reinforce their theoretical understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Computer Lab",
            "Language Lab",
            "Business Lab",
            "Agricultural Marketing Lab",
            "Mass Communication Lab",
            "Chemistry Lab",
            "Physics Lab",
            "Botany Lab",
            "Zoology Lab",
          ].map((lab, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm hover:border-brand-maroon/20 hover:shadow-md transition duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon text-sm font-extrabold mb-3">
                {idx + 1}
              </div>
              <h4 className="font-extrabold text-slate-800 text-sm uppercase">{lab}</h4>
              <p className="text-xs text-slate-500 mt-1">Well equipped with modern experiments and safety gears.</p>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
