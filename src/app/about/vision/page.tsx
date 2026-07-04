import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision", active: true },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Vision & Mission" },
];

export default function VisionPage() {
  return (
    <SubpageLayout
      title="Vision & Mission"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition duration-300">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-brand-maroon font-display flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              OUR VISION
            </h2>
            <p className="text-slate-700 font-bold text-lg md:text-xl leading-relaxed text-justify">
              To create a system that binds every one and brings transformation in the quality of students’ lives.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/kle transpe.png"
              alt="Vision Icon block"
              className="w-full h-auto object-cover max-h-52 bg-white rounded-lg p-2"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition duration-300">
          <div className="rounded-xl overflow-hidden shrink-0 md:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/kle transpe.png"
              alt="Mission Icon block"
              className="w-full h-auto object-cover max-h-52 bg-white rounded-lg p-2"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-brand-maroon font-display flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              OUR MISSION
            </h2>
            <p className="text-slate-700 font-bold text-lg md:text-xl leading-relaxed text-justify">
              To focus on the integrated development of students’ personality.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition duration-300 space-y-6">
          <h2 className="text-2xl font-extrabold text-brand-maroon font-display flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            OUR OBJECTIVES
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "To introduce job oriented / applied subjects from time to time.",
              "To plan and evaluate teaching-learning process at the micro-level.",
              "To enable present generation to adopt modern technology.",
              "To build economically and socially developed healthy society.",
              "To encourage students to participate in quiz, debate, sports and cultural programmes.",
              "To arrange various extension activities, in addition to N.S.S., for cultivation of values like national integration, patriotism, humanism, democracy and peace.",
            ].map((obj, idx) => (
              <li key={idx} className="bg-white border border-slate-100 p-4 rounded-xl flex gap-3 text-sm text-slate-700 font-semibold leading-relaxed shadow-sm">
                <span className="text-brand-maroon font-extrabold text-base shrink-0">{idx + 1}.</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SubpageLayout>
  );
}
