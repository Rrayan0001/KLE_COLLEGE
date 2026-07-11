import React from "react";
import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "KLE Society Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders", active: true },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "KLE Society Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Founders" },
];

export default function FoundersPage() {
  return (
    <SubpageLayout
      title="Founders"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            { }<Image src="/images/logo/Founders_image.png" alt="KLE Society Founders - The Saptarshis" className="w-full h-auto object-cover" width={600} height={800} />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              The Saptarshis
            </h2>
            <p className="text-slate-650 leading-relaxed text-justify">
              In the year 1916, seven dedicated great teachers with a humble effort established the now globally recognized iconic KLE Society, to provide basic education to the economically and educationally deprived knowledge seekers of the northern part of Karnataka. The KLE family worships these noble souls as the **&apos;SAPTARSHIS&apos;** which means the **&apos;Seven Sages&apos;**.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-6 text-slate-600 leading-relaxed text-justify">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Visionary Ideals
          </h3>
          <p>
            &quot;The Saptarshis&quot; (Seven Saintly teachers), a band of seven selfless, dedicated, and inspiring young graduates, had determined to establish an educational institution. They had set before them as beacon lights the ideals of **Truth**, **Love**, **Service**, and **Self-Sacrifice**.
          </p>
          <p>
            The seven noble souls who founded the society are:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-bold text-sm">
            {[
              "Shri. P. R. Chikodi",
              "Shri. S. S. Basavanal",
              "Shri. M. R. Sakhare",
              "Shri. H. F. Kattimani",
              "Shri. B. B. Mamadapur",
              "Shri. B. S. Hanchinal",
              "Shri. V. V. Patil"
            ].map((name, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm text-center text-slate-800 hover:border-brand-maroon/20 hover:text-brand-maroon transition duration-200"
              >
                {name}
              </div>
            ))}
          </div>

          <p className="pt-4 border-t border-slate-100 text-sm italic">
            Their collective sacrifice and indomitable will created a legacy that now empowers over 1,48,000 students annually.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
