import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management", active: true },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Board of Management" },
];

const members = [
  { isCategory: true, label: "Office Bearers" },
  { sl: "-", name: "Shri M. S. Koujalgi", designation: "President" },
  { sl: "-", name: "Shri Basavaraj S. Tatawati", designation: "Vice-President" },
  
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
  { sl: 16, name: "Dr. Sunil S. Jalalpure", designation: "Secretary" },
  { sl: 17, name: "Dr. Prakash R. Kadakol", designation: "Joint-Secretary" },
];

export default function BoardManagementPage() {
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
            Office Bearers & Board Members
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
              {members.map((member, idx) => {
                if (member.isCategory) {
                  return (
                    <tr key={idx} className="bg-slate-55 border-b border-slate-100 text-slate-800">
                      <td colSpan={3} className="py-3.5 px-6 font-bold text-xs uppercase tracking-wider text-brand-maroon bg-slate-50">
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
