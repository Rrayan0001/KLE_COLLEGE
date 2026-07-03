import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem", active: true },
  { name: "Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Emblem" },
];

export default function EmblemPage() {
  return (
    <SubpageLayout
      title="Emblem"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/emblem.jpg"
              alt="KLE Society Emblem"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              The KLE Society Emblem
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              The emblem that the Karnataka Lingayat Education Society has officially adopted is carefully designed, beautifully carved, meaningful, and symbolic of the ideology that the K.L.E. Society stands for. It truly reflects the aims, objectives, and aspirations of the Society.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-6 text-slate-600 leading-relaxed text-justify">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Emblem Symbols & Meanings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">The Sacred Bull</h4>
              <p className="text-slate-600 text-sm">
                Symbolic of &quot;service&quot; and dedicated, selfless action in the community.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">The Flying Bird</h4>
              <p className="text-slate-600 text-sm">
                Represents the awakened youth, ready to take up any challenge with courage and knowledge.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">The Hexagon</h4>
              <p className="text-slate-600 text-sm">
                Represents the &quot;Veerashaiva Dharma&quot; with its highly secular and inclusive outlook in the service of humanity.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-extrabold text-brand-maroon text-sm uppercase">The Ishtalinga & Halo</h4>
              <p className="text-slate-600 text-sm">
                Held in a palm, it represents light and knowledge which removes ignorance and guides the spirit, in fulfillment of Veerashaiva philosophy.
              </p>
            </div>
          </div>

          <p className="pt-4 border-t border-slate-100">
            Therefore, the idea of the Emblem is that, by the union of **Dharma**, **Knowledge**, **Service**, and **Sacrifice**, the vision of the KLE Society which is giving excellent educational service to the people of all castes, creeds, religions, and regions is totally obtained.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
