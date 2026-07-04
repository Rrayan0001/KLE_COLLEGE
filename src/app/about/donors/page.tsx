import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors", active: true },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Donor of SPDDS" },
];

export default function DonorPage() {
  return (
    <SubpageLayout
      title="Donor of SPDDS"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/kle transpe.png"
              alt="SCP DDS College Donor History"
              className="w-full h-auto object-cover max-h-72"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800">
              Dr. D. D. Shirol
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              Earlier the college was named as SCVV Trust Fund&apos;s SCP ARTS AND COMMERCE COLLEGE run by a local governing body. It was due to a handsome donation by the leading physician of Mahalingpur, <strong>Dr. D. D. Shirol</strong>, that the COMMERCE wing was renamed after his father <strong>Shri. Dundappa Danappa Shirol</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              So the college was renamed as <strong>SCVV Trust Fund&apos;s SCP ARTS AND DUNDAPPA DANAPPA SHIROL COMMERCE COLLEGE</strong> (SPDDS). In 2008, the college was merged under the prestigious management of the KLE Society, Belagavi.
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
