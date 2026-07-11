import React from "react";
import Link from "next/link";

export const metadata = {
  title: "ITEP — Integrated Teacher Education Program",
  description: "Details regarding the NCTE recognized 4-year Integrated Teacher Education Program at KLE SCPDDS College.",
};

export default function ITEPPage() {
  const semesters = [
    { title: "Foundational Pedagogy", desc: "Understanding child development, learning behaviors, and core educational foundations." },
    { title: "Content Mastery", desc: "Rigorous training in chosen subject specializations (Arts/Humanities or Science streams)." },
    { title: "Methodology & Skills", desc: "Practical lessons in classroom management, technology integration, and teaching models." },
    { title: "Practical Internships", desc: "Extensive real-world school internship modules overseen by expert mentors." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-college-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
            NCTE Approved Program
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">
            Integrated Teacher Education Program (ITEP)
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            A premier 4-Year dual-degree program preparing the next generation of professional school educators.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 font-display">About ITEP</h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            The Integrated Teacher Education Program (ITEP) is a state-of-the-art dual-degree program (B.A. B.Ed. / B.Sc. B.Ed.) recognized by the National Council for Teacher Education (NCTE). It is designed to prepare high-quality, professional teachers for different stages of school education in accordance with the National Education Policy (NEP) guidelines.
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            By integrating content knowledge with pedagogical training, ITEP saves students one academic year compared to the traditional graduation and subsequent B.Ed. pathway. The program emphasizes real-world teaching skills, interactive laboratory training, and social accountability.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 font-display text-center">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semesters.map((sem, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-xl flex gap-4 items-start shadow-sm">
                <div className="w-8 h-8 rounded-full bg-college-gold/20 text-college-navy font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 text-lg">{sem.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{sem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Details */}
        <div className="bg-college-navy text-white p-8 md:p-10 rounded-2xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-college-gold font-display">Admission and Eligibility</h2>
          <div className="space-y-4 text-white/80 text-sm leading-relaxed">
            <p>
              Candidates who have completed their Pre-University Course (PUC) / 10+2 or equivalent examinations in Arts, Science, or Commerce with a minimum aggregate of 50% from a recognized board are eligible to apply.
            </p>
            <p>
              Admissions are conducted on a merit-cum-interview basis, conforming to guidelines issued by the affiliated university and the NCTE.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-center-fill btn-center-fill-yellow inline-block px-6 py-3 rounded-lg shadow"
            >
              Inquire Admission Seat Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
