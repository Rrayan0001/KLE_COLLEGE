import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research" },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss", active: true },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "NSS & Youth Red Cross Wing" },
];

const nssActivities = [
  {
    title: "Community Outreach & Social Service",
    desc: "Adoption of local villages to conduct cleanliness drives, basic literacy camps, and awareness campaigns on hygiene, health, and water conservation.",
    icon: "🌍"
  },
  {
    title: "Health & Wellness Initiatives",
    desc: "Regular organization of blood donation camps in association with Red Cross Society and local hospitals, free health check-up camps, and AIDS awareness programs.",
    icon: "❤️"
  },
  {
    title: "Environmental Protection & Swachh Bharat",
    desc: "Tree plantation drives (Vanamahotsava) inside the campus and surrounding areas, plastic eradication campaigns, and regular cleaning activities under Swachh Bharat.",
    icon: "🌱"
  },
  {
    title: "National Integration & Values Education",
    desc: "Celebrating national days, organizing youth leadership training, and promoting values of democracy, national integration, and social harmony.",
    icon: "🤝"
  }
];

export default function NSSPage() {
  return (
    <SubpageLayout
      title="NSS & Youth Red Cross Wing"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Co-curricular Extension Activities
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            National Service Scheme & Youth Red Cross
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            The National Service Scheme (NSS) and the Youth Red Cross (YRC) unit at our institution play a pivotal role in shaping students into socially responsible, empathetic, and active citizens. The motto of NSS is <strong>&quot;Not Me But You&quot;</strong>, which reflects the essence of democratic living and upholds the need for selfless service.
          </p>
          <p>
            Our college units conduct numerous extension activities annually, including community wellness programs, health awareness rallies, environmental protection initiatives, and emergency relief services.
          </p>
        </div>

        {/* Programme Officers Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon text-lg font-bold">
                NSS
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Mr. P. M Gouli</h4>
                <p className="text-xs text-brand-maroon font-semibold">NSS Officer</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Leading student volunteers in local community services, village adoption programs, and annual special camps that foster leadership and cooperation.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon text-lg font-bold">
                YRC
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Mr. R. V. Chougala</h4>
                <p className="text-xs text-brand-maroon font-semibold">Youth Red Cross Wing</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Overseeing health, care, and emergency volunteer work. Recognized with the **&quot;Best Youth Red Cross Unit Award&quot;** for exemplary services.
            </p>
          </div>
        </div>

        {/* Special Honors */}
        <div className="bg-gradient-to-r from-college-navy to-college-blue text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-md">
          <div className="w-16 h-16 bg-college-gold rounded-full flex items-center justify-center text-3xl shadow-lg shrink-0">
            🏆
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-bold text-college-gold text-lg">Best Youth Red Cross Unit Award</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              For outstanding contribution to societal welfare, blood donation camps, and community health services during the academic year 2021-22, our college unit was officially honored with the prestigious Best Youth Red Cross Award.
            </p>
          </div>
        </div>

        {/* Core Extension Activities */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Core Extension Activities & Campaigns
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nssActivities.map((act, index) => (
              <div 
                key={index}
                className="p-5 border border-slate-100 bg-white rounded-xl shadow-sm flex gap-4 hover:border-brand-maroon/10 hover:shadow-md transition duration-200"
              >
                <div className="text-3xl shrink-0 pt-1">{act.icon}</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">
                    {act.title}
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voluntary Enrollment Notice */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-3 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Interested in Voluntary Service?
          </h4>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto">
            Registrations for new volunteers open at the start of each academic year. Student volunteers are awarded certificates of merit upon completing 240 hours of service over two years and attending annual special camps.
          </p>
          <p className="text-xs text-slate-400 font-semibold">
            Contact: NSS Office, Administrative Block or Email: scpdgcol@gmail.com
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
