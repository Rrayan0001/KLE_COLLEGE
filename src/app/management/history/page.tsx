import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "KLE History", href: "/management/history", active: true },
  { name: "KLE Society", href: "/management/society" },
  { name: "Chairman's Message", href: "/management/chairman" },
  { name: "Board Members", href: "/management/boardmembers" },
  { name: "Local Governing Body", href: "/management/lgb" },
];

const breadcrumbs = [
  { label: "Management", href: "/management/history" },
  { label: "KLE History" },
];

export default function KLEHistoryPage() {
  return (
    <SubpageLayout
      title="KLE History"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/klescpbanner.jpg"
              alt="KLE Centenary"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-justify">
              The KLE Society, which was founded in 1916, has been playing a key role in the academic and socio-economic uplift of North Karnataka region. KLE is synonymous with India&apos;s Educational Spectrum. Its success story of nearly ten decades portrays the dedication with which millions of people worked selflessly in the making of &apos;KLE&apos;. Its 250 institutions spread across Karnataka, Maharashtra, Goa, Delhi, etc., narrate amazing stories differently. Our alumni, spread across the world, are our brand ambassadors promoting KLE Culture.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              &quot;The Saptarshis&quot; (Seven Saintly teachers), a band of seven selfless, dedicated, and inspiring young graduates, had determined to establish an educational institution. They had set before them as beacon lights the ideals of Truth, Love, Service, and Self-Sacrifice.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4">
          <p className="text-slate-600 leading-relaxed text-justify">
            With poignant desires, fertile imagination, and a mission to fulfill, the founder life-members started on the 13th day of November 1916 the Anglo Vernacular School in a rented building in the fort area of Belagavi, which heralded the beginning of the Karnatak Lingayat Education Society.
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            Over the years, the institutions from Kindergarten to Post-Graduation found their place in the educational map of the K.L.E. Society. At present, this educational empire is running the institutions in all spheres of knowledge such as Humanities, Physical Science, Medical Science, Agricultural Science, Engineering and Technology, etc. The society has entered into collaboration with as many as fourteen foreign Universities.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
