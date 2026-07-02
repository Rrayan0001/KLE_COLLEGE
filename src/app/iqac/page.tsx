import React from "react";

export const metadata = {
  title: "IQAC — Internal Quality Assurance Cell",
  description: "Structure, composition, objectives, and functions of the Internal Quality Assurance Cell (IQAC) at SCP College.",
};

export default function IQACPage() {
  const members = [
    { name: "Dr. K. M. Awaradi", role: "Chairman (Principal)" },
    { name: "Prof. S. B. Hiremath", role: "Coordinator" },
    { name: "Dr. Prabhakar Kore", role: "Management Representative" },
    { name: "Shri. G. S. Shirol", role: "Local Society Representative" },
    { name: "Prof. M. J. Patki", role: "Senior Faculty Member" },
    { name: "Prof. A. S. Nimbal", role: "Senior Faculty Member" },
    { name: "Shri. Ravindra Shirol", role: "Alumni Representative" },
    { name: "Miss. Soumya Patil", role: "Student Representative" },
  ];

  const objectives = [
    { title: "Academic Monitoring", desc: "Assures execution of regular lecture plans, internal exams, assignments, and tutorials." },
    { title: "Teacher Upgradation", desc: "Organizes workshops, faculty development programs (FDPs), and research incentives." },
    { title: "Student Progression", desc: "Coordinates feedback systems, coaching classes, remedial classes, and placements." },
    { title: "Environment and Audits", desc: "Oversees green campus audits, structural stability, and financial transparency." },
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
            IQAC Committee
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Dedicated to planning, guiding, and monitoring Quality Assurance (QA) and Quality Enhancement (QE) activities of the college.
          </p>
        </div>
      </section>

      {/* IQAC Details */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 font-display">About the Cell</h2>
          <p className="text-slate-600 leading-relaxed text-justify text-sm">
            In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment, accreditation and quality up-gradation of institutions of higher education, the Internal Quality Assurance Cell (IQAC) was established at our college. 
          </p>
          <p className="text-slate-600 leading-relaxed text-justify text-sm">
            The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions. It acts as a driving force for ushering in quality by working out planned interventionist strategies to remove deficiencies and enhance quality.
          </p>
        </div>

        {/* Objectives */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 font-display text-center">Core Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((obj, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-xl flex gap-4 items-start shadow-sm">
                <div className="w-8 h-8 rounded-full bg-college-gold/20 text-college-navy font-bold flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 text-lg">{obj.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Composition list */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-base">IQAC Committee Members</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {members.map((member, idx) => (
              <div key={idx} className="p-4 px-6 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-800">{member.name}</span>
                <span className="text-slate-500 font-medium">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
