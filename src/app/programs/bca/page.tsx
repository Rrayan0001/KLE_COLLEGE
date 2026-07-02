import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba" },
  { name: "B.COM", href: "/programs/bcom" },
  { name: "B.Sc", href: "/programs/bsc" },
  { name: "M.Com", href: "/programs/mcom" },
  { name: "BCA", href: "/programs/bca", active: true },
  { name: "ITEP", href: "/itep" },
  { name: "Program Outcomes", href: "/programs/outcomes" },
  { name: "Best Practice", href: "/programs/best-practice" },
  { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
  { name: "S S S", href: "/programs/sss" },
];

const breadcrumbs = [
  { label: "Programs", href: "/programs/bca" },
  { label: "Bachelor of Computer Applications (BCA)" },
];

export default function BCAPage() {
  return (
    <SubpageLayout
      title="Bachelor of Computer Applications (BCA)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            BCA Course Details & NEP Curriculum
          </h2>
        </div>

        {/* AICTE Reports & Grievance Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/SCPDDSFiles/BCA/Mahalingpur AICTE LOA Report 24-25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">AICTE</span>
            <span className="text-slate-800 font-bold text-sm">LOA Report 24-25</span>
          </a>
          <a
            href="/SCPDDSFiles/BCA/Mahalingpur aicte final report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">AICTE</span>
            <span className="text-slate-800 font-bold text-sm">Final Report</span>
          </a>
          <a
            href="/SCPDDSFiles/BCA/mandotorydisclosure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Disclosures</span>
            <span className="text-slate-800 font-bold text-sm">Mandatory Disclosure</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfz10m98i3nO-R5tla4Yd9FhlTD1AE6jj7oLJbmue_jjiJmEQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-maroon/20 hover:shadow-md transition text-center"
          >
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Feedback</span>
            <span className="text-slate-800 font-bold text-sm">Grievance Submission</span>
          </a>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The BCA program equips students with modern programming skills, information technology principles, and software development methodologies. It follows the National Education Policy (NEP) guidelines with structured labs and hands-on projects.
          </p>
        </div>

        {/* NEP Semester 1 Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            NEP Semester I Curriculum
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-32">Type</th>
                  <th className="py-4 px-6">Subject Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Paper I</td>
                  <td className="py-4 px-6 text-slate-900">Kannada / Hindi (NEP)</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Paper II</td>
                  <td className="py-4 px-6 text-slate-900">English (NEP)</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC 1</td>
                  <td className="py-4 px-6 text-slate-900">Programming in C</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC 1 Lab</td>
                  <td className="py-4 px-6 text-slate-900">C Programming Lab</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC 2</td>
                  <td className="py-4 px-6 text-slate-900">Fundamentals of Computers</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC 2 Lab</td>
                  <td className="py-4 px-6 text-slate-900">Information Technology Lab</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">DSC 3</td>
                  <td className="py-4 px-6 text-slate-900">Mathematical Foundation / Accountancy</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">OEC 1</td>
                  <td className="py-4 px-6 text-slate-900">C Programming Concepts</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">SEC-VB - 2</td>
                  <td className="py-4 px-6 text-slate-900">NSS / Cultural Activities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
