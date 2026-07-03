import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition" },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan", active: true },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Academic Plan of Action" },
];

const actionPlans = [
  {
    title: "Curriculum Planning & Implementation",
    desc: "Drafting semester-wise teaching plans, work diaries, and syllabus distribution tables aligned with the calendar of Rani Channamma University, Belagavi."
  },
  {
    title: "Continuous Internal Evaluation (CIE)",
    desc: "Conducting regular internal tests, assignments, student presentations, and mock practical tests to evaluate student performance continuously."
  },
  {
    title: "Academic & Administrative Audit (AAA)",
    desc: "Conducting annual internal and external audits to review departmental files, library upgrades, support service efficiency, and financial processes."
  },
  {
    title: "Student Feedback & Redressal",
    desc: "Collecting feedback from students regarding curriculum, teachers' delivery, and infrastructure, followed by analysis and corrective measures."
  },
  {
    title: "Promotion of Extension Activities",
    desc: "Encouraging co-curricular participation through NSS, YRC, sports, and cultural wings to foster social responsibility."
  },
  {
    title: "Professional Development for Staff",
    desc: "Organizing training sessions, faculty development programs (FDP), and workshops to promote research work and ICT-based teaching methods."
  }
];

export default function AcademicPlanPage() {
  return (
    <SubpageLayout
      title="Academic Plan of Action"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            IQAC Mandate
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            IQAC Academic Plan of Action
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The <strong>Academic Plan of Action</strong> is drafted at the beginning of each academic year by the IQAC in consultation with department heads and the Principal. It outlines the strategic goals, curricular timelines, evaluation benchmarks, and student support programs to be carried out during the semesters.
          </p>
          <p>
            This plan ensures that curriculum delivery is systematic, matches the regulations of Rani Channamma University, and aligns with NAAC quality sustainability parameters.
          </p>
        </div>

        {/* Action plans cards list */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Key Focus Areas & Action Points
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actionPlans.map((plan, idx) => (
              <div 
                key={idx}
                className="p-5 border border-slate-100 bg-white rounded-xl shadow-sm hover:border-brand-maroon/10 hover:shadow-md transition duration-200"
              >
                <h4 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                  <span className="text-brand-maroon text-xs">◆</span> {plan.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar sync notice */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-2 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Calendar of Events Synchronization
          </h4>
          <p className="text-slate-500 text-xs md:text-sm">
            All plans are incorporated into the college&apos;s annual Calendar of Events. The calendar is published on the notice boards and website prior to class commencement.
          </p>
          <a
            href="/student-corner/academic-calendar"
            className="inline-block px-4 py-2 border border-brand-maroon/20 hover:bg-brand-maroon/5 text-brand-maroon rounded-lg text-xs font-bold transition mt-2"
          >
            View Academic Calendar
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
