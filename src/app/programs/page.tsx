"use client";

import React, { useState } from "react";

interface ProgramDetail {
  id: string;
  name: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  subjects: string[];
  features: string[];
}

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<string>("ba");

  const programs: ProgramDetail[] = [
    {
      id: "ba",
      name: "Bachelor of Arts (B.A.)",
      degree: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      eligibility: "Completed 10+2 / Pre-University Course (PUC) in any discipline from a recognized board.",
      description: "Designed to provide a broad understanding of humanities and social sciences, fostering strong communication, analytical thinking, and ethical citizenship.",
      subjects: [
        "History",
        "Economics",
        "Political Science",
        "Sociology",
        "Languages: Kannada, English, Hindi",
      ],
      features: [
        "Focus on Civil Service Exam preparation",
        "Regular debates and quiz competitions",
        "Field studies and social service camps",
      ],
    },
    {
      id: "bsc",
      name: "Bachelor of Science (B.Sc.)",
      degree: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      eligibility: "Completed 10+2 / PUC with Physics, Chemistry, Mathematics, or Biology options.",
      description: "Emphasizes scientific inquiry, laboratory experimentation, and analytical deduction across core fields of physical and life sciences.",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Botany",
        "Zoology",
      ],
      features: [
        "Modern, well-stocked laboratories",
        "Individual student research projects",
        "Seminars and science exhibitions",
      ],
    },
    {
      id: "bcom",
      name: "Bachelor of Commerce (B.Com.)",
      degree: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      eligibility: "Completed 10+2 / PUC in Commerce or Science streams.",
      description: "A comprehensive business education preparing students for careers in accounting, finance, banking, insurance, and corporate management.",
      subjects: [
        "Financial Accounting",
        "Business Statistics",
        "Corporate Law",
        "Direct & Indirect Taxes",
        "Auditing & Commerce",
      ],
      features: [
        "Commerce lab for practical accounting training",
        "Tally ERP certificate courses",
        "Industrial visits and expert business lectures",
      ],
    },
    {
      id: "bca",
      name: "Bachelor of Computer Applications (BCA)",
      degree: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      eligibility: "Completed 10+2 / PUC with Mathematics/Computer Science background preferred.",
      description: "Nurtures technical expertise in software engineering, database systems, web technologies, and programming paradigms.",
      subjects: [
        "C++ & Java Programming",
        "Database Management Systems (DBMS)",
        "Web Technologies (HTML, CSS, JS)",
        "Software Engineering",
        "Data Structures & Algorithms",
      ],
      features: [
        "High-speed internet computer laboratory",
        "Mini-project design assignments",
        "Placement training and coding bootcamps",
      ],
    },
    {
      id: "mcom",
      name: "Master of Commerce (M.Com.)",
      degree: "Postgraduate",
      duration: "2 Years (4 Semesters)",
      eligibility: "Completed B.Com / B.B.A / equivalent degree with minimum aggregate requirements.",
      description: "Advanced study focusing on research methodologies, financial strategies, business taxation, and corporate governance for academic or leadership roles.",
      subjects: [
        "Organizational Behaviour",
        "Strategic Financial Management",
        "Advanced Tax Planning",
        "Research Methodology",
        "International Business Operations",
      ],
      features: [
        "Mandatory research dissertation writing",
        "UGC-NET/SLET preparation assistance",
        "Active presentation seminars and journals review",
      ],
    },
    {
      id: "itep",
      name: "Integrated Teacher Education Program (ITEP)",
      degree: "Undergraduate (Dual-Degree)",
      duration: "4 Years (8 Semesters)",
      eligibility: "Completed 10+2 / PUC with minimum 50% marks from a recognized board.",
      description: "An NCTE-approved dual-degree program (B.A. B.Ed. or B.Sc. B.Ed.) designed to mold future educators through integrated content knowledge and teaching pedagogy.",
      subjects: [
        "Core Subject Specialization (Arts or Science)",
        "Childhood and Growing Up",
        "Language across the Curriculum",
        "Pedagogy of School Subjects",
        "Practical School Internship",
      ],
      features: [
        "NCTE-recognized professional qualification",
        "Extensive classroom teaching practice modules",
        "Micro-teaching skill lab workshops",
      ],
    },
  ];

  const activeProgram = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">Academic Programs</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Comprehensive learning paths structured to empower students with modern capabilities.
          </p>
        </div>
      </section>

      {/* Program Selector Area */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-2">
            <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4 px-3">
              Offered Courses
            </h2>
            <div className="flex flex-col gap-1">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setActiveTab(program.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                    activeTab === program.id
                      ? "bg-college-navy text-white shadow"
                      : "text-slate-600 hover:bg-slate-50 hover:text-college-navy"
                  }`}
                >
                  <span>{program.name}</span>
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded shrink-0 ml-2 ${
                      activeTab === program.id
                        ? "bg-college-gold text-college-dark"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {program.degree}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Details Content Board */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10 space-y-8 min-h-[500px]">
            {/* Header Details */}
            <div className="space-y-4 pb-6 border-b border-slate-100">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-college-navy/10 text-college-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeProgram.degree} Degree
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeProgram.duration}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 font-display">
                {activeProgram.name}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                {activeProgram.description}
              </p>
            </div>

            {/* Eligibility Requirements */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Eligibility Criteria
              </h4>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-600 text-sm leading-relaxed">
                {activeProgram.eligibility}
              </div>
            </div>

            {/* Core Curriculum subjects & features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Subjects */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253" />
                  </svg>
                  Key Subject Areas
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {activeProgram.subjects.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-college-navy shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Program Highlights
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {activeProgram.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-college-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apply Action Bar */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Interested in this program?</h4>
                <p className="text-slate-500 text-xs">Reach out to our academic cell for details on seats, fees, and timelines.</p>
              </div>
              <a
                href="/contact"
                className="btn-center-fill btn-center-fill-navy text-white text-xs font-bold px-5 py-3 rounded-lg shadow-sm"
              >
                Inquire Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
