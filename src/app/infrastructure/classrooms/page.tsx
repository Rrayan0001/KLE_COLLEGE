import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office" },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Hostel", href: "/infrastructure/hostel" },
  { name: "Classrooms", href: "/infrastructure/classrooms", active: true },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
  { name: "Labs", href: "/infrastructure/labs" },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Classrooms" },
];

export default function ClassroomsPage() {
  return (
    <SubpageLayout
      title="Classrooms"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Learning Spaces
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Smart & Technology Enabled Classrooms
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The classrooms are spacious, well-ventilated, and designed to match modern educational demands, providing a conducive atmosphere for students&apos; all-round development.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Key Classroom Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Our college has 14 well-ventilated classrooms designed to accommodate all streams.",
              "Each classroom has at least 480 square feet of floor space.",
              "All the classrooms are fitted with CCTV cameras for monitoring.",
              "Technology enabled learning spaces with modern facilities.",
              "08 classrooms equipped with LCD Projectors.",
              "04 classrooms provided with interactive smart boards.",
            ].map((facility, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
