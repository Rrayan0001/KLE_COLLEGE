import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions", active: true },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Admission Process" },
];

export default function AdmissionsPage() {
  return (
    <SubpageLayout
      title="Admissions"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Enrollment
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Admission Procedure & Guidelines
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base text-justify">
          <p>
            The admission process is regulated by the State Government affiliating rules and regulations to ensure inclusive accessibility to disadvantaged sections of the society viz., SCs, STs, OBCs, Minorities, and people with physical disabilities.
          </p>
          <p>
            Soon after the 2nd PU results are declared, the admission process begins with the distribution of application forms. Admissions are granted on the basis of marks obtained in 2nd PU, ensuring those who are eligible as per Government Rules get enrolled.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Institutional Publicity Channels
          </h3>
          <p className="text-slate-600 text-sm">
            We ensure wide publicity to the procedure followed for student enrollment through:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Prospectus of the College.",
              "Institution's official website.",
              "Notices put up on notice boards in the corridors, office, and ladies room.",
              "Display boards showcasing admission steps at the College entrance lobby.",
              "Pamphlets distributed among neighboring feeder colleges.",
              "Student Welfare Officer's active counseling to admission aspirants.",
              "Admission Committee members assistance to enrollment seekers.",
            ].map((media, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{media}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Transparency & Reservation Rules
          </h3>
          <p className="text-slate-600 text-sm">
            Seats are filled up strictly following the State Government&apos;s reservation and roster rules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <span className="text-2xl font-black text-brand-maroon block mb-1">18%</span>
              <span className="text-xs text-slate-500 font-bold uppercase">Scheduled Castes (SC)</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <span className="text-2xl font-black text-brand-maroon block mb-1">03%</span>
              <span className="text-xs text-slate-500 font-bold uppercase">Scheduled Tribes (ST)</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <span className="text-2xl font-black text-brand-maroon block mb-1">29%</span>
              <span className="text-xs text-slate-500 font-bold uppercase">Non-Creamy Layer OBC</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm text-justify">
            The remaining 50% of seats are filled from general merit applicants strictly based on merit. Physically and visually disadvantaged students are given preference. Children from deprived backgrounds are supported through state scholarships, freeships, fee reimbursements, and generous endowment prizes instituted by the alumni and faculty.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
