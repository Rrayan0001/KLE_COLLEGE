import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "B.A", href: "/programs/ba", active: true },
  { name: "B.COM", href: "/programs/bcom" },
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
  { label: "Programs", href: "/programs/ba" },
  { label: "Bachelor of Arts (B.A.)" },
];

export default function BachelorOfArtsPage() {
  return (
    <SubpageLayout
      title="Bachelor of Arts (B.A.)"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Undergraduate Program (SEP Scheme)
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            B.A. Course Curriculum (I to VI Semester)
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The Bachelor of Arts program under the State Education Policy (SEP) scheme at KLE SCPDDS College is designed to foster critical thinking, linguistic competence, and a deep appreciation of human history, society, and economics. Our faculty provides rigorous training to equip students with analytical skills necessary for civil services, journalism, teaching, and other professional careers.
          </p>
        </div>

        {/* Section A: Languages */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            A. Language Course Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase mb-1">Language – 1</h4>
              <p className="text-slate-800 text-sm font-semibold">English (Compulsory)</p>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase mb-1">Language – 2</h4>
              <p className="text-slate-800 text-sm font-semibold">Kannada / Hindi</p>
            </div>
          </div>
        </div>

        {/* Section B: Optional Subjects */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            B. Optional Subjects (Three subjects of equal importance)
          </h3>
          <p className="text-xs text-slate-500 font-semibold italic">
            * Students must choose three optional subjects: one from each of the groups below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-150 p-6 rounded-xl shadow-sm space-y-3">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase pb-1.5 border-b border-slate-100">Group – A</h4>
              <ul className="text-slate-700 text-sm font-semibold space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Kannada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  History
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-150 p-6 rounded-xl shadow-sm space-y-3">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase pb-1.5 border-b border-slate-100">Group – B</h4>
              <ul className="text-slate-700 text-sm font-semibold space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Economics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Political Science
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Journalism &amp; Mass Comm.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-150 p-6 rounded-xl shadow-sm space-y-3">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase pb-1.5 border-b border-slate-100">Group – C</h4>
              <ul className="text-slate-700 text-sm font-semibold space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Agricultural Marketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  English
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon" />
                  Sociology
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-bold italic">
            * Note: For III and V Semesters, the previous year combinations will continue.
          </p>
        </div>

        {/* Section C & D: Compulsory / Core Elective */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            C &amp; D. Compulsory &amp; Core Elective Subjects
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-1/4">Semester</th>
                  <th className="py-4 px-6 w-1/4">Category</th>
                  <th className="py-4 px-6 w-2/4">Subject / Course Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester I</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Compulsory Subject</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Indian Constitutional Values – I</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester II</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Compulsory Subject</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Indian Constitutional Values – II</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester III</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Core Elective Subject</td>
                  <td className="py-4 px-6 text-slate-900">History / Political Science / Sociology / Journalism and Mass Communication</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester IV</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Core Elective Subject</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Artificial Intelligence (AI)</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester V</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Core / Optional Subject</td>
                  <td className="py-4 px-6 text-slate-900">Value Based Course</td>
                </tr>
                <tr className="border-b border-slate-100 text-sm font-medium text-slate-700">
                  <td className="py-4 px-6 text-brand-maroon font-bold">Semester VI</td>
                  <td className="py-4 px-6 text-slate-500 font-semibold">Core / Optional Subject</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Project Work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
