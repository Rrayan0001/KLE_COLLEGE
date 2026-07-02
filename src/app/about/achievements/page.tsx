import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements", active: true },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Achievements" },
];

const achievements = [
  {
    sl: 1,
    name: "Mr. Ramesh Harakangi",
    details: [
      "Third Rank to the University",
      "Gold Medal in Kannada",
      "90 & above marks in all subjects of B.A. V semester"
    ]
  },
  {
    sl: 2,
    name: "Miss Deepa Saptasagar",
    details: [
      "100 out of 100 in Business Stat II",
      "100 out of 100 in Indirect Taxes"
    ]
  },
  {
    sl: 3,
    name: "Miss Komal Dhoomagonda",
    details: [
      "100 out of 100 in Income Tax I",
      "100 out of 100 in Income Tax II"
    ]
  },
  {
    sl: 4,
    name: "Miss L. P. Kariholi",
    details: [
      "100 out of 100 in Business Stat II"
    ]
  },
  {
    sl: 5,
    name: "Miss Veena Jamakhandi",
    details: [
      "100 out of 100 in Corp. A/c I"
    ]
  },
  {
    sl: 6,
    name: "Miss Shilpa Chamakeri",
    details: [
      "100 out of 100 in Costing I"
    ]
  },
  {
    sl: 7,
    name: "Miss Shashirekha Varnekar",
    details: [
      "100 out of 100 in Costing I"
    ]
  },
  {
    sl: 8,
    name: "Sanjaykumar Lendi",
    details: [
      "100 out of 100 in Business Stat I"
    ]
  }
];

export default function AchievementsPage() {
  return (
    <SubpageLayout
      title="Achievements"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE Society&apos;s SCP College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Student Academic Achievements
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                <th className="py-4 px-6 w-20">Sl.No</th>
                <th className="py-4 px-6">Name of Student</th>
                <th className="py-4 px-6">Achievements</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                >
                  <td className="py-4 px-6 text-slate-400 font-bold">{item.sl}</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">{item.name}</td>
                  <td className="py-4 px-6 text-slate-600">
                    <ul className="list-disc list-inside space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-slate-600 text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
