import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office" },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Hostel", href: "/infrastructure/hostel", active: true },
  { name: "Classrooms", href: "/infrastructure/classrooms" },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
  { name: "Labs", href: "/infrastructure/labs" },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Hostel" },
];

export default function HostelPage() {
  return (
    <SubpageLayout
      title="Ladies Hostel"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Student Accommodation
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            On-Campus Residential Facilities
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/klescpbanner.jpg"
              alt="Ladies Hostel building"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
              Ladies Hostel No. 01
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our campus provides a secure and comfortable home environment for female students coming from distant locations, ensuring their focus remains on academic excellence.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Hostel Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Mess and Dining Hall",
              "Recreation Hall",
              "Computer access room",
              "Solar water heaters (5,000L capacity)",
              "Water purifiers & hot water availability",
              "Solar street lights around campus",
              "Green lawn gardens",
              "Daily newspapers & magazines in Reading Room",
              "Colour TV with DTH dish antenna",
              "24/7 Security Guard monitoring",
              "Sanitary blocks and wash basins",
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-2">
          <h3 className="font-extrabold text-slate-800 text-sm uppercase">Ladies Hostel No. 02</h3>
          <p className="text-slate-600 text-sm">
            The second ladies hostel block is under construction with the financial assistance of UGC and the active contribution made by the management to accommodate more students.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
