import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal", active: true },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Our Principal" },
];

export default function PrincipalPage() {
  return (
    <SubpageLayout
      title="Our Principal"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/principal.jpg"
              alt="Dr. K. M. Awaradi"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800">
              Dr. K. M. Awaradi
            </h2>
            <p className="text-brand-maroon font-bold text-sm tracking-wide">
              Principal, Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur
            </p>
            
            <p className="text-slate-600 leading-relaxed text-justify">
              Higher Education Institutions do have a crucial role in the development of the country. The present situation needs skilled, trained, competency-rich and competitive youth to come out of Colleges and universities for national development.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              In this regard, our institution run by the globally reputed and centenary old yet dynamic KLE Society has been committed to impart quality education to students in order to empower them with in-depth knowledge in specific areas and the most needed skills so that the graduates and post graduates can prove successful in the job market and in the dynamic society of ours.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            Hence, we have ICT facilities, leadership development activities, research activities, seminars to create a well-educated and vigilant citizenry, and potential business magnates. Our vision is to attain excellence for transforming the lives of our students which in turn will help transform our nation.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
