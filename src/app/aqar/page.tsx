import React from "react";

export const metadata = {
  title: "AQAR — Annual Quality Assurance Report",
  description: "Annual Quality Assurance Reports (AQAR) submitted by SCP Degree College under NAAC requirements.",
};

export default function AQARPage() {
  const reports = [
    { year: "2024 - 2025", status: "Submitted", date: "April 20, 2025" },
    { year: "2023 - 2024", status: "Approved", date: "April 15, 2024" },
    { year: "2022 - 2023", status: "Approved", date: "May 10, 2023" },
    { year: "2021 - 2022", status: "Approved", date: "June 02, 2022" },
    { year: "2020 - 2021", status: "Approved", date: "August 18, 2021" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-college-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
            Internal Quality Assurance Cell
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">
            Annual Quality Assurance Report (AQAR)
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Yearly self-review documents submitted to NAAC to monitor quality sustainability and enhancements.
          </p>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-8">
        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 font-display">Overview of AQAR</h2>
          <p className="text-slate-600 leading-relaxed text-justify text-sm">
            As a NAAC accredited institution with an 'A' Grade (3.10 CGPA), the college maintains regular records of quality enhancement in academic and administrative processes. The Annual Quality Assurance Report (AQAR) is prepared and submitted annually by the Internal Quality Assurance Cell (IQAC) under NAAC requirements. It showcases details on curricula implementation, teacher quality, students' progression, research works, infrastructure expansion, and student support.
          </p>
        </div>

        {/* Reports Table/List */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-base">Submitted Reports Directory</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {reports.map((report, idx) => (
              <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-base">AQAR Submission for {report.year}</h4>
                  <p className="text-slate-400 text-xs">Submission verified on {report.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold px-2.5 py-1 rounded">
                    {report.status}
                  </span>
                  <a
                    href="#"
                    className="bg-college-navy hover:bg-college-blue text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-1.5 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>PDF Document</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
