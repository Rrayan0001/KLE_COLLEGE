import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "KLE History", href: "/management/history" },
  { name: "KLE Society", href: "/management/society" },
  { name: "Chairman's Message", href: "/management/chairman" },
  { name: "Board Members", href: "/management/boardmembers", active: true },
  { name: "Local Governing Body", href: "/management/lgb" },
];

const breadcrumbs = [
  { label: "Management", href: "/management/history" },
  { label: "Board Members" },
];

const members = [
  { sl: 1, name: "Shri. Shivanand H Koujalagi", designation: "President" },
  { sl: 2, name: "Shri Basavaraj S. Tatawati", designation: "Vice President" },
  { sl: 3, name: "Dr. Prabhakar B. Kore", designation: "Chairman" },
  { sl: 4, name: "Shri Shankaranna I. Munavalli", designation: "Member" },
  { sl: 5, name: "Dr. Virupaxi S. Sadhunavar", designation: "Member" },
  { sl: 6, name: "Shri. Shrishailappa C. Metgud", designation: "Member" },
  { sl: 7, name: "Shri. Y. S. Patil", designation: "Member" },
  { sl: 8, name: "Shri. M. M. Kavatagimath", designation: "Member" },
  { sl: 9, name: "Shri. Anil V. Patted", designation: "Member" },
  { sl: 10, name: "Shri Jayanand M. Munavalli", designation: "Member" },
  { sl: 11, name: "Shri. Basavaraj R. Patil", designation: "Member" },
  { sl: 12, name: "Dr. Vishwanath I. Patil", designation: "Member" },
  { sl: 13, name: "Shri Amit P. Kore", designation: "Member" },
  { sl: 14, name: "Shri. Praveen A. Bagewadi", designation: "Member" },
  { isCategory: true, label: "Nominated Life Members" },
  { sl: 15, name: "Dr. Preeti K. Doddwad", designation: "Member" },
  { sl: 16, name: "Dr. Sudha A. Raddi", designation: "Member" },
  { sl: 17, name: "Shri. Shivanand D. Shiragave", designation: "Member" },
  { sl: 18, name: "Dr. B. G. Desai", designation: "Secretary" },
];

export default function BoardMembersPage() {
  return (
    <SubpageLayout
      title="Board of Management"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Karnatak Lingayat Education Society, Belagavi
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Office Bearers and Members of the Board of Management
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                <th className="py-4 px-6 w-20">Sl.No</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => {
                if (member.isCategory) {
                  return (
                    <tr key={idx} className="bg-slate-100 text-slate-800 border-b border-slate-200">
                      <td colSpan={3} className="py-3.5 px-6 font-bold text-xs uppercase tracking-wider text-brand-maroon">
                        {member.label}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                  >
                    <td className="py-4 px-6 text-slate-400 font-bold">{member.sl}</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold">{member.name}</td>
                    <td className="py-4 px-6 text-slate-600">{member.designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
