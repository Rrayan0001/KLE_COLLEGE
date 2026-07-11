import React from "react";
import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "KLE Society Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message", active: true },
  { name: "KLE Society Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Chairman's Message" },
];

export default function ChairmanMessagePage() {
  return (
    <SubpageLayout
      title="Chairman's Message"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-16">
        
        {/* Active Chairman Section */}
        <div className="space-y-8">
          <div>
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
              Chairman, KLE Society
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              Shri Amit Prabhakar Kore
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
              { }<Image src="/images/logo/Amit_Kore.png" alt="Shri Amit Prabhakar Kore" className="w-full h-auto object-cover" width={600} height={800} />
            </div>
            <div className="space-y-4 flex-grow">
              <p className="text-brand-maroon font-bold text-sm tracking-wide">
                Chairman, KLE Society, Belagavi | Entrepreneur | Institution Builder
              </p>
              <p className="text-slate-500 font-semibold text-xs">
                MBA (Finance), University of Illinois, Chicago • B.E., Mechanical Engineering
              </p>
              <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-maroon font-medium text-base py-1">
                &quot;Setting institutional direction while staying engaged with the operational, community, and social dimensions of each venture.&quot;
              </blockquote>
              <p className="text-slate-650 leading-relaxed text-justify text-sm">
                Amit Prabhakar Kore has built his career at the intersection of institutional governance and industrial enterprise. Educated in engineering and finance in the United States and shaped by over two decades of hands-on leadership across healthcare, education & industry.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-6 text-slate-600 leading-relaxed text-justify text-sm space-y-4">
            <p>
              What sets him apart is the ability to work at both ends simultaneously: setting institutional direction while staying engaged with the operational, community, and social dimensions of each venture. His record is measured not in titles, but in institutions built, industries scaled, and the improved quality of life in the communities his work has touched.
            </p>
            <p>
              As Chairman of KLE Society, he continues the institution&apos;s century-long legacy of transforming lives through education, healthcare, and research — building on the foundation laid by Dr. Prabhakar Kore&apos;s leadership over more than four decades.
            </p>
          </div>
        </div>

        {/* Honorary Chairman Section */}
        <div className="border-t border-slate-200 pt-16 space-y-8">
          <div>
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
              Honorary Chairman, KLE Society
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              Dr. Prabhakar Basavaprabhu Kore
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
              { }<Image src="/images/logo/Prabhakar_Kore_New.jpg" alt="Dr. Prabhakar Basavaprabhu Kore" className="w-full h-auto object-cover" width={600} height={800} />
            </div>
            <div className="space-y-4 flex-grow">
              <p className="text-brand-maroon font-bold text-sm tracking-wide">
                Honorary Chairman, KLE Society, Belagavi
              </p>
              <p className="text-slate-500 font-semibold text-xs">
                Padma Shri Awardee • Former Member of Parliament, Rajya Sabha
              </p>
              <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-maroon font-medium text-base py-1">
                &quot;KLE&apos;s mission remains to transform lives through quality education, healthcare and rural development.&quot;
              </blockquote>
              <p className="text-slate-655 leading-relaxed text-justify text-sm">
                Born on 1st August 1947 in the small village of Ankali, Chikodi Taluka, Dr. Prabhakar Kore rose from humble, agrarian roots to become one of India&apos;s most influential institution builders. He took over the leadership of KLE Society in 1985, when it comprised barely a few dozen institutions, and over the next four decades grew it into a network of more than 300 institutions spanning education, healthcare, agriculture, and community welfare across Karnataka and Maharashtra.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-6 text-slate-600 leading-relaxed text-justify text-sm space-y-4">
            <p>
              Under his stewardship, KLE established the KLE Academy of Higher Education and Research (KAHER) in 2006 and KLE Technological University in 2015, alongside a large healthcare network anchored by the multi-specialty Dr. Prabhakar Kore Hospital and Medical Research Centre. He also served three terms as a Member of the Rajya Sabha and held several honorary doctorates from universities in India, Malaysia, and the United States.
            </p>
            <p>
              In January 2026, Dr. Kore was conferred the **Padma Shri** — one of India&apos;s highest civilian honours — by the Government of India, in recognition of his contributions to education, literature, and rural development. Reflecting on the honour, he attributed it to the collective effort of the KLE family and the farming communities who supported him throughout his journey. Today, as Honorary Chairman, Dr. Kore&apos;s legacy continues to guide KLE&apos;s mission of transforming lives through education, healthcare, and research.
            </p>
          </div>
        </div>

      </div>
    </SubpageLayout>
  );
}
