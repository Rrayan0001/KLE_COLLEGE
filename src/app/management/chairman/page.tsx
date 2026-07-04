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
              src="/images/logo/Amit_Kore.png"
              alt="Shri. Amit Prabhakar Kore"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800">
              Shri. Amit Prabhakar Kore
            </h2>
            <p className="text-brand-maroon font-bold text-sm tracking-wide">
              Chairman, KLE Society, Belagavi
            </p>
            
            <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-maroon font-medium text-lg md:text-xl py-2">
              &quot;Setting institutional direction while staying engaged with the operational, community, and social dimensions of each venture.&quot;
            </blockquote>
            
            <p className="text-slate-600 leading-relaxed text-justify">
              Amit Prabhakar Kore has built his career at the intersection of institutional governance and industrial enterprise. Educated in engineering and finance in the United States and shaped by over two decades of hands-on leadership across healthcare, education & industry.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            What sets him apart is the ability to work at both ends simultaneously: setting institutional direction while staying engaged with the operational, community, and social dimensions of each venture. His record is measured not in titles, but in institutions built, industries scaled, and the improved quality of life in the communities his work has touched.
          </p>
          <p>
            As Chairman of KLE Society, he continues the institution&apos;s century-long legacy of transforming lives through education, healthcare, and research — building on the foundation laid by Dr. Prabhakar Kore&apos;s leadership over more than four decades.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
