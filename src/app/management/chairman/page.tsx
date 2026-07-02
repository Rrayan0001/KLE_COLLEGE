import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "KLE History", href: "/management/history" },
  { name: "KLE Society", href: "/management/society" },
  { name: "Chairman's Message", href: "/management/chairman", active: true },
  { name: "Board Members", href: "/management/boardmembers" },
  { name: "Local Governing Body", href: "/management/lgb" },
];

const breadcrumbs = [
  { label: "Management", href: "/management/history" },
  { label: "Chairman's Message" },
];

export default function ChairmanMessagePage() {
  return (
    <SubpageLayout
      title="Chairman's Message"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/Prabhakar Kore.jpg"
              alt="Dr. Prabhakar Kore"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800">
              Dr. Prabhakar Kore
            </h2>
            <p className="text-brand-maroon font-bold text-sm tracking-wide">
              Chairman, KLE Society, Belagavi
            </p>
            
            <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-maroon font-medium text-lg md:text-xl py-2">
              &quot;Education must not only inform but inspire.&quot;
            </blockquote>
            
            <p className="text-slate-600 leading-relaxed text-justify">
              Agriculture, Education, and Healthcare are the key areas which will define the future of our country. Education is essential to the economic, social, environmental, and political well-being of an individual, the community, and the Nation. Education is the foundation upon which we build tomorrow, and our focus must be to build diversity and excellence into the educational system such that every challenge ahead is met with confidence. We believe that education empowers the individual and benefits the entire community.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            We have a vision of high-quality lifelong learning, accessible to all. We are committed to offer high-quality education at an affordable cost in a broad range of disciplines at the Pre-University, Undergraduate, and Postgraduate levels.
          </p>
          <p>
            We harbor the tenacity of being first among equals. Therefore, we lay special emphasis on the implementation of global parameters of education and to inculcate the professional competency in our students with full vigor and zeal. We will put the learner at the heart of everything we do, raise expectations, and work together with mutual respect, for education is our future.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
