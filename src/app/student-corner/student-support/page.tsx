import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support", active: true },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Student Support Facilities" },
];

const ugcSeminars = [
  { sl: "01", title: "State and Civil Society in Disaster Response", date: "24 & 25 Feb., 2012" },
  { sl: "02", title: "Innovations for Using A Library", date: "20 July, 2012" },
  { sl: "03", title: "Gender Disparity-A Challenge in the 21st Century", date: "15 & 16 Feb., 2013" },
  { sl: "04", title: "Hindi Tatha Kannada SahityaKeAunchalik Upanyas", date: "15 & 16 Feb., 2013" },
  { sl: "05", title: "Translation and Cross Cultural Studies", date: "23 & 24 Aug., 2013" },
  { sl: "06", title: "Commercial Aspects of Dairy Farming and Food Security", date: "26 & 27 Sept., 2014" },
  { sl: "07", title: "Women Empowerment", date: "26 & 27 Sept., 2014" },
  { sl: "08", title: "Sports Scenario in Rural Colleges: Problems and Remedies", date: "30 & 31 Jan., 2015" },
  { sl: "09", title: "Consumer Protection: Issues Impediments in Rural Areas", date: "30 & 31 Jan., 2015" },
  { sl: "10", title: "Transcending the Canon: Emerging Literatures in India", date: "28 & 29 Aug., 2015" },
  { sl: "11", title: "Workshop on Redesigning of UG English Syllabi", date: "09 & 10 April, 2016" },
];

const selfFundedSeminars = [
  { sl: "01", title: "Tax Planning", date: "20.12.2014" },
  { sl: "02", title: "Life and Literature", date: "20.12.2014" },
  { sl: "03", title: "Sahitya Mattu Samvedhane", date: "08.01.2015" },
  { sl: "04", title: "Samaj SudharakKabir & Premchand", date: "08.01.2015" },
  { sl: "05", title: "LLP: A New Arena in Business World", date: "14.02.2015" },
  { sl: "06", title: "Human Rights and Modern Society", date: "14.02.2015" },
  { sl: "07", title: "Kannada SadhyategaluMattu Savalugalu", date: "21.09.2015" },
  { sl: "08", title: "Media and Responsibility", date: "21.09.2015" },
  { sl: "09", title: "Human Resource Accounting", date: "23.01.2016" },
  { sl: "10", title: "Declining Agriculture Interest", date: "23.01.2016" },
];

export default function StudentSupportPage() {
  return (
    <SubpageLayout
      title="Student Support Facilities"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Development
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Student Support & Seminars
          </h2>
        </div>

        {/* UGC Seminars */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            UGC Funded Seminars & Conferences
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                  <th className="py-3 px-4 w-20">Sl.No</th>
                  <th className="py-3 px-4">Seminar Topic</th>
                  <th className="py-3 px-4 w-48">Date</th>
                </tr>
              </thead>
              <tbody>
                {ugcSeminars.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                  >
                    <td className="py-3 px-4 text-slate-400 font-bold">{row.sl}</td>
                    <td className="py-3 px-4 text-slate-900 font-semibold">{row.title}</td>
                    <td className="py-3 px-4 text-slate-500 font-semibold">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Self-Funded Seminars */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
            Self-Funded Inter-Collegiate Student Seminars
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                  <th className="py-3 px-4 w-20">Sl.No</th>
                  <th className="py-3 px-4">Seminar Topic</th>
                  <th className="py-3 px-4 w-48">Date</th>
                </tr>
              </thead>
              <tbody>
                {selfFundedSeminars.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                  >
                    <td className="py-3 px-4 text-slate-400 font-bold">{row.sl}</td>
                    <td className="py-3 px-4 text-slate-900 font-semibold">{row.title}</td>
                    <td className="py-3 px-4 text-slate-500 font-semibold">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
