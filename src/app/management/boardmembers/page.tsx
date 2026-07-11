import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "KLE History", href: "/management/history" },
  { name: "KLE Society", href: "/management/society" },
  { name: "Chairman's Message", href: "/management/chairman" },
  { name: "Board Members", href: "/management/boardmembers", active: true },
  { name: "College Local Governing Body", href: "/management/lgb" },
];

const breadcrumbs = [
  { label: "Management", href: "/management/history" },
  { label: "Board Members" },
];

const members = [
  { isCategory: true, label: "Office Bearers" },
  { sl: "-", name: "Shri Mahadev S. Koujalgi", designation: "President" },
  { sl: "-", name: "Shri Basavaraj S. Tatawati", designation: "Vice President" },
  { isCategory: true, label: "Members of the Board of Management" },
  { sl: 1, name: "Shri Amit P. Kore", designation: "Chairman" },
  { sl: 2, name: "Shri Y. S. Patil", designation: "Member" },
  { sl: 3, name: "Shri Mahantesh M. Kavatagimath", designation: "Member" },
  { sl: 4, name: "Shri Anil V. Patted", designation: "Member" },
  { sl: 5, name: "Shri Jayanand M. Munavalli", designation: "Member" },
  { sl: 6, name: "Shri Basavaraj R. Patil", designation: "Member" },
  { sl: 7, name: "Shri Mallikarjun C. Kolli", designation: "Member" },
  { sl: 8, name: "Dr. Vishwanath I. Patil", designation: "Member" },
  { sl: 9, name: "Shri Praveen A. Bagewadi", designation: "Member" },
  { sl: 10, name: "Dr. Preeti K. Doddwad", designation: "Member" },
  { sl: 11, name: "Shri Manjunath S. Munavalli", designation: "Member" },
  { sl: 12, name: "Shri Vijay S. Metgud", designation: "Member" },
  { isCategory: true, label: "Nominated Life Members" },
  { sl: 13, name: "Dr. Deepa C. Metgud", designation: "Member" },
  { sl: 14, name: "Shri Bharamappa S. Ambi", designation: "Member" },
  { sl: 15, name: "Shri Sheetal G. Nanjappanavar", designation: "Member" },
  { sl: "", name: "Dr. Sunil Jalalpure", designation: "Secretary" },
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

        {/* Mobile Card View (hidden on desktop) */}
        <div className="block sm:hidden space-y-4">
          {members.map((member, idx) => {
            if (member.isCategory) {
              return (
                <div key={idx} className="pt-5 pb-1.5 text-xs font-black uppercase tracking-widest text-brand-maroon border-b border-brand-maroon/25">
                  {member.label}
                </div>
              );
            }

            return (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-xl p-5 shadow-sm space-y-3 relative overflow-hidden hover:border-brand-maroon/20 hover:shadow-md transition duration-200">
                {member.sl && member.sl !== "-" && (
                  <span className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                    #{member.sl}
                  </span>
                )}
                
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {member.name}
                  </h4>
                </div>
                
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">Designation</span>
                  <span className="font-extrabold text-brand-maroon uppercase tracking-wider bg-brand-maroon/5 px-2.5 py-1 rounded-md">
                    {member.designation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Table View (hidden on mobile) */}
        <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
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
