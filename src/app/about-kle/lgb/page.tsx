import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "Local Governing Body", href: "/about-kle/lgb", active: true },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Local Governing Body" },
];

const members = [
  { sl: 1, name: "Shri J. M. Munavalli", place: "Gokak", designation: "Chairman" },
  { sl: 2, name: "", place: "Mahalingpur", designation: "Member" },
  { sl: 3, name: "Shri. Mallikarjun Banakar", place: "Banahatti", designation: "Member" },
  { sl: 4, name: "Shri. Ashoka B. Angadi", place: "Mahalingpur", designation: "Member" },
  { sl: 5, name: "Secretary, KLE Society", place: "Belagavi", designation: "Member" },
  { sl: 6, name: "Principal, KLE SCPDDS College", place: "Mahalingpur", designation: "Member Secretary" },
];

export default function LocalGoverningBodyPage() {
  return (
    <SubpageLayout
      title="Local Governing Body"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Karnatak Lingayat Education Society, Belagavi
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Local Governing Body Members (LGB)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                <th className="py-4 px-6 w-20">Sl.No</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                >
                  <td className="py-4 px-6 text-slate-400 font-bold">{member.sl}.</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">
                    {member.name}
                    {member.place && (
                      <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                        {member.place}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-slate-600">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
