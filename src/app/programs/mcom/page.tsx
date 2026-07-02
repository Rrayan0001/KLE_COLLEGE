import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom", active: true },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/mcom" },
  { label: "Master of Commerce (M.Com.)" },
];

export default function MasterOfCommercePage() {
  return (
    <SubpageLayout
      title="Master of Commerce (M.Com.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Postgraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            M.Com. Course Details & CBCS Curriculum
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            Our Master of Commerce (M.Com) program is a specialized postgraduate program aimed at developing research aptitude and advanced business management expertise under Rani Channamma University&apos;s CBCS scheme.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            Semester I Curriculum
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-32">Course Code</th>
                  <th className="py-4 px-6">Course Title</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 1.1</td>
                  <td className="py-4 px-6 text-slate-900">Corporate Strategic Management</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 1.2</td>
                  <td className="py-4 px-6 text-slate-900">Advanced Marketing Management</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 1.3</td>
                  <td className="py-4 px-6 text-slate-900">Financial Management</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 1.4</td>
                  <td className="py-4 px-6 text-slate-900">Applied Economics for Business</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 1.5</td>
                  <td className="py-4 px-6 text-slate-900">Management Accounting</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">SC - 1.6 (AF)</td>
                  <td className="py-4 px-6 text-slate-900">Stock Market Operations (Elective)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            Semester II Curriculum
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-32">Course Code</th>
                  <th className="py-4 px-6">Course Title</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 2.1</td>
                  <td className="py-4 px-6 text-slate-900">Corporate Restructuring</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 2.2</td>
                  <td className="py-4 px-6 text-slate-900">Quantitative Techniques</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 2.3</td>
                  <td className="py-4 px-6 text-slate-900">Dynamics of Entrepreneurship Development</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">HC - 2.4</td>
                  <td className="py-4 px-6 text-slate-900">Advanced Corporate Accounting</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">SC - 2.6 (AF)</td>
                  <td className="py-4 px-6 text-slate-900">Accounting for Specialized Institutions (Elective)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
