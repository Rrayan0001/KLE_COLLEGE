import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office", active: true },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Hostel", href: "/infrastructure/hostel" },
  { name: "Classrooms", href: "/infrastructure/classrooms" },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
  { name: "Labs", href: "/infrastructure/labs" },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Office" },
];

const officesList = [
  { title: "Academic & Admission Counter", desc: "Handles new applications, enrollment verifications, and student record databases under university-specified guidelines." },
  { title: "Scholarship & Fee Section", desc: "Disburses national and state scholarship support, maintains fee accounts, and handles online payment portals." },
  { title: "Examinations & Marks Section", desc: "Coordinates Continuous Internal Evaluations (CIE), submits university exam entries, and issues hall tickets and semester marks cards." },
  { title: "Administrative Superintendent Office", desc: "Coordinates all office operations, administrative staff assignments, and links operations between the Principal and college management." }
];

export default function OfficePage() {
  return (
    <SubpageLayout
      title="Administrative Office"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Campus Infrastructure
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            College Administrative Office
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-655 leading-relaxed text-sm md:text-base">
          <p>
            The Administrative Office of our college is the central nervous system coordinating student services, academic audits, and administrative support. The office operations are fully automated with modern software (including Tally ERP and customized databases) to provide prompt services and maintain institutional records accurately.
          </p>
          <p>
            The office is designed with multiple dedicated service counters, ensuring students can easily access information and support on admission procedures, scholarships, examinations, and general verifications.
          </p>
        </div>

        {/* Office details list */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Administrative Sections & Counters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officesList.map((off, index) => (
              <div 
                key={index}
                className="p-5 border border-slate-100 bg-white rounded-xl shadow-sm hover:border-brand-maroon/10 hover:shadow-md transition duration-200"
              >
                <h4 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                  <span className="text-brand-maroon text-xs">◆</span> {off.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                  {off.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff contact information */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-850 uppercase tracking-wide">
            Office Contacts & Channels
          </h3>
          <p className="text-slate-500 text-xs md:text-sm">
            For certificates, fee slips, or official verifications, students and visitors may contact the office desk during working hours:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm border-t border-slate-100 pt-4">
            <div className="space-y-1">
              <span className="text-slate-400 font-bold block">PHONE</span>
              <span className="font-bold text-slate-800">08350-270235</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block font-bold">FAX</span>
              <span className="font-bold text-slate-800">08350-271466</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block font-bold">EMAIL</span>
              <span className="font-bold text-brand-maroon">scpdgcol@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-2 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Office Timing & Hours
          </h4>
          <p className="text-slate-500 text-xs md:text-sm">
            Monday to Friday: 10:00 AM to 5:30 PM &bull; Saturday: 10:00 AM to 1:30 PM
          </p>
          <p className="text-[10px] text-slate-400 italic">
            Closed on Sundays and statutory government holidays.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
