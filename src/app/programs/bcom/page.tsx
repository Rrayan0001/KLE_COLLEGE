import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom", active: true },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca" },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/bcom" },
  { label: "Bachelor of Commerce (B.COM)" },
];

export default function BachelorOfCommercePage() {
  return (
    <SubpageLayout
      title="Bachelor of Commerce (B.COM)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            B.COM. Course Details & Curriculum
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The Bachelor of Commerce (B.Com) program provides comprehensive education in accounting, banking, marketing, and business administration. The course is aligned with the National Education Policy (NEP) to promote practical entrepreneurship and finance literacy.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            NEP Course Structure
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-32">Course Code</th>
                  <th className="py-4 px-6">Course Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Lang 1.1</td>
                  <td className="py-4 px-6 text-slate-900">Basic Kannada</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Lang 1.2</td>
                  <td className="py-4 px-6 text-slate-900">Basic English / Hindi</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC - 1</td>
                  <td className="py-4 px-6 text-slate-900">Financial Accounting</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC - 2</td>
                  <td className="py-4 px-6 text-slate-900">Management Principles and Applications</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC - 3</td>
                  <td className="py-4 px-6 text-slate-900">Principles of Marketing</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">OEC - 1</td>
                  <td className="py-4 px-6 text-slate-900">Entrepreneurship Development</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">OEC - 2</td>
                  <td className="py-4 px-6 text-slate-900">Accounting for Everyone</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">SEC-SB - 1</td>
                  <td className="py-4 px-6 text-slate-900">Digital Fluency</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">SEC-VB - 2</td>
                  <td className="py-4 px-6 text-slate-900">NSS / Cultural Activities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Advanced Core Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Corporate Accounting – I",
              "Entrepreneurship Development",
              "Innovative Banking",
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3 hover:border-brand-maroon/20 hover:shadow-md transition duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon text-xs font-extrabold">
                  {idx + 1}
                </div>
                <span className="text-slate-800 font-bold text-sm">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
