import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Sports & Culture Activities", href: "/supporting-sections/sports-culture", active: true },
  { name: "Scholarships", href: "/supporting-sections/scholarships" },
  { name: "Research Policy", href: "/supporting-sections/research-policy" },
];

const breadcrumbs = [
  { label: "Supporting Sections", href: "/supporting-sections/sports-culture" },
  { label: "Sports & Cultural Activities" },
];

export default function SportsCulturePage() {
  return (
    <SubpageLayout
      title="Sports & Cultural Activities"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Extra-Curricular Excellence
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Cultivating Talents Beyond Academics
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/klescpbanner.jpg"
              alt="Cultural activity"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm text-justify">
              Our college firmly believes in the holistic development of students. We provide robust support and modern facilities to help students participate in cultural festivals, theatrical activities, debate competitions, and athletic meets.
            </p>
            <div className="pt-2">
              <a
                href="/SCPDDSFiles/YOGA Awaraness 8th May 2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-maroon font-bold text-xs uppercase hover:underline transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Read Yoga Awareness Circular (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Key Highlights & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Provisions for participating in zonal level Youth Festivals and inter-zonal Uni-Fests of Rani Channamma University.",
              "Participation in elocution, debate, essay, quiz and literary events conducted across universities.",
              "Students regularly participate in cultural competitions under the KLE Society banner - 'Srujana'.",
              "Annual participation in drama schools like NEENASAM and Sanskrithi Shibira at Heggodu.",
              "Well equipped musical instruments hall for weekend practice sessions.",
              "Specialized expert coaching provided based on students' cultural training requirements.",
              "Organized Rani Channamma University zonal level cultural fest and emerged as General Champions.",
              "Organized a highly successful State Level Cultural Fest in January 2016.",
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
