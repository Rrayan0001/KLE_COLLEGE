"use client";

import React, { useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About IQAC", href: "/iqac" },
  { name: "Composition", href: "/iqac/composition", active: true },
  { name: "Steering Committee", href: "/iqac/steering-committee" },
  { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
  { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
  { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
  { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
  { name: "Affiliation Details", href: "/iqac/affiliation-details" },
  { name: "Quality Policy", href: "/iqac/quality-policy" },
];

const breadcrumbs = [
  { label: "IQAC", href: "/iqac" },
  { label: "Composition" },
];

const compositions = [
  {
    year: "2023-2024",
    restructured: "01-10-2021",
    members: [
      { sl: 1, role: "President", name: "Dr. K. M. Awaradi" },
      { sl: 2, role: "Coordinator", name: "Dr. Smt. S. D. Soraganvi" },
      { sl: 3, role: "Additional Coordinator", name: "Shri. V. A. Adahalli" },
      { sl: 4, role: "Faculty Members", name: "Shri. M. M. Nimbaragi, Dr. A. M. Narode, Dr. S. C. Bijjaragi, Shri. S. I. Patil, Ms. D. M. Hospeti" },
      { sl: 5, role: "Management Representatives", name: "Shri. A. B. Angadi" },
      { sl: 6, role: "Administrative Staff", name: "Shri. R. D. Biradar, Smt. R. D. Bhosale" },
      { sl: 7, role: "Nominee from Local Society", name: "Shri. Iranna Halagatti" },
      { sl: 8, role: "Nominee from Students", name: "Miss. Keerti Bandi" },
      { sl: 9, role: "Nominee from Alumni", name: "Shri. S. H. Melavanki" },
      { sl: 10, role: "Nominee from Parents (Stakeholders)", name: "Shri. M. A. Suvasuddi" },
    ]
  },
  {
    year: "2022-2023",
    restructured: "01-10-2021",
    members: [
      { sl: 1, role: "President", name: "Dr. K. M. Awaradi" },
      { sl: 2, role: "Coordinator", name: "Dr. Smt. S. D. Soraganvi" },
      { sl: 3, role: "Additional Coordinator", name: "Shri. V. A. Adahalli" },
      { sl: 4, role: "Faculty Members", name: "Shri. M. M. Nimbaragi, Dr. A. M. Narode, Dr. S. C. Bijjaragi, Shri. A. C. Bijjaragi, Shri. Ratnakumar C. B." },
      { sl: 5, role: "Management Representatives", name: "Shri. A. B. Angadi" },
      { sl: 6, role: "Administrative Staff", name: "Shri. R. D. Biradar, Smt. R. D. Bhosale" },
      { sl: 7, role: "Nominee from Local Society", name: "Shri. Iranna Halagatti" },
      { sl: 8, role: "Nominee from Students", name: "Miss. Sahana Vajarmatti" },
      { sl: 9, role: "Nominee from Alumni", name: "Shri. S. H. Melavanki" },
      { sl: 10, role: "Nominee from Parents (Stakeholders)", name: "Shri. M. A. Suvasuddi" },
    ]
  },
  {
    year: "2021-2022",
    restructured: "01-10-2021",
    members: [
      { sl: 1, role: "President", name: "Dr. K. M. Awaradi" },
      { sl: 2, role: "Coordinator", name: "Shri. M. M. Nimbaragi" },
      { sl: 3, role: "Additional Coordinator", name: "Dr. Smt. S. D. Soraganvi" },
      { sl: 4, role: "Faculty Members", name: "Dr. A. M. Narode, Dr. M. G. Yarnal, Dr. S. B. Konnur, Dr. S. C. Bijjaragi, Shri. A. C. Bijjaragi" },
      { sl: 5, role: "Management Representatives", name: "Shri. A. B. Angadi" },
      { sl: 6, role: "Administrative Staff", name: "Shri. R. D. Biradar, Shri. M. B. Patil" },
      { sl: 7, role: "Nominee from Local Society", name: "Shri. Iranna Halagatti" },
      { sl: 8, role: "Nominee from Students", name: "Miss. Neha Magare" },
      { sl: 9, role: "Nominee from Alumni", name: "Miss. Suvarna Asangi" },
      { sl: 10, role: "Nominee from Parents (Stakeholders)", name: "Shri. L. B. Tuppad" },
    ]
  },
  {
    year: "2020-2021",
    restructured: "23-12-2020",
    members: [
      { sl: 1, role: "Chairperson", name: "Dr. B. M. Patil" },
      { sl: 2, role: "Coordinator", name: "Dr. K. M. Awaradi" },
      { sl: 3, role: "Faculty Members", name: "Shri. S. M. Bannur, Shri. M. M. Nimbaragi, Dr. A. M. Narode, Dr. Smt. S. D. Soraganvi, Dr. M. G. Yarnal, Dr. Smt. G. N. Patil" },
      { sl: 4, role: "Management Representatives", name: "Shri. A. B. Angadi" },
      { sl: 5, role: "Administrative Staff", name: "Shri. R. D. Biradar, Shri. M. B. Patil" },
      { sl: 6, role: "Nominee from Local Society", name: "Shri. Iranna Halagatti" },
      { sl: 7, role: "Nominee from Students", name: "Miss. Raveena Karihole" },
      { sl: 8, role: "Nominee from Alumni", name: "Miss. Suvarna Asangi" },
      { sl: 9, role: "Nominee from Parents (Stakeholders)", name: "Shri. L. B. Tuppad" },
    ]
  },
  {
    year: "2018-2019",
    restructured: "12-07-2019",
    members: [
      { sl: 1, role: "President", name: "Dr. B. M. Patil" },
      { sl: 2, role: "Coordinator", name: "Dr. K. M. Awaradi" },
      { sl: 3, role: "Faculty Members", name: "Shri. S. M. Bannur, Shri. M. M. Nimbaragi, Dr. Smt. S. D. Soraganvi, Shri A. M. Ugare, Smt. J. R. Patil, Shri V. B. Kabara" },
      { sl: 4, role: "Management Representatives", name: "Shri. B. A. Banti, Shri. A. B. Angadi" },
      { sl: 5, role: "Administrative Staff", name: "Shri. R. D. Biradar, Shri. M. B. Patil" },
      { sl: 6, role: "Nominee from Local Society", name: "Shri. P. M. Byakod" },
      { sl: 7, role: "Nominee from Students", name: "Miss. Gayatri Bagewadi, Kumar Prakash Totagi, Kumar Toukir Khalifa" },
      { sl: 8, role: "Nominee from Alumni", name: "Miss. Suvarna Asangi" },
      { sl: 9, role: "Nominee from Industry", name: "Shri. Mallikarjun Heggalagi (Nirani Sugar, Mudhol)" },
      { sl: 10, role: "Nominee from Parents (Stakeholders)", name: "Shri. Mallikarjun A. Khanagoudar" },
    ]
  },
  {
    year: "2017-2018",
    restructured: "26-09-2018",
    members: [
      { sl: 1, role: "President", name: "Dr. B. M. Patil" },
      { sl: 2, role: "Coordinator", name: "Dr. K. M. Awaradi" },
      { sl: 3, role: "Faculty Members", name: "Shri. K. S. Ashok, Shri. S. M. Bannur, Shri. M. M. Nimbaragi, Dr. Smt. S. D. Soraganvi, Smt. J. R. Patil" },
      { sl: 4, role: "Management Representatives", name: "Shri. B. A. Banti" },
      { sl: 5, role: "Administrative Staff", name: "Shri. R. D. Terdal, Shri. M. B. Patil" },
      { sl: 6, role: "Nominee from Local Society", name: "Shri. P. M. Byakod" },
      { sl: 7, role: "Nominee from Students", name: "Miss. Laxmi Dalal" },
      { sl: 8, role: "Nominee from Alumni", name: "Miss. Suvarna Asangi" },
      { sl: 9, role: "Nominee from Industry", name: "Shri. Mallikarjun Heggalagi (Nirani Sugar, Mudhol)" },
      { sl: 10, role: "Nominee from Parents (Stakeholders)", name: "Shri. Mallikarjun A. Khanagoudar" },
    ]
  },
  {
    year: "2016-2017",
    restructured: "30-06-2017",
    members: [
      { sl: 1, role: "President", name: "Dr. B. M. Patil" },
      { sl: 2, role: "Coordinator", name: "Dr. K. M. Awaradi" },
      { sl: 3, role: "Faculty Members", name: "Shri K. S. Ashok, Shri. S. M. Bannur, Shri. M. M. Nimbaragi, Dr. Smt. S. D. Soraganvi" },
      { sl: 4, role: "Management Representatives", name: "Shri. B. A. Banti" },
      { sl: 5, role: "Administrative Staff", name: "Shri. M. R. Terdal, Shri. H. V. Aradyamath, Shri. M. S. Shirol" },
      { sl: 6, role: "Nominee from Local Society", name: "Shri. P. M. Byakod" },
      { sl: 7, role: "Nominee from Students", name: "Kri. Danamma Chouri" },
      { sl: 8, role: "Nominee from Alumni", name: "Miss. Suvarna Asangi, Shri. Shrishail Chougala" },
      { sl: 9, role: "Nominee from Parents (Stakeholders)", name: "Smt. Sumangala Patil, Shri. D. B. Naganur" },
      { sl: 10, role: "External Expert", name: "Dr. T. P. Giraddi" },
    ]
  }
];

export default function IQACCompositionPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = compositions[selectedIdx];

  return (
    <SubpageLayout
      title="IQAC Composition"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Year Selectors */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {compositions.map((comp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold tracking-wide transition duration-150
                ${
                  selectedIdx === idx
                    ? "bg-brand-maroon text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {comp.year}
            </button>
          ))}
        </div>

        {/* Content Table */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              Internal Quality Assurance Cell
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-bold mt-1">
              Restructured on {current.restructured} — Academic Year {current.year}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white text-xs md:text-sm font-bold tracking-wide uppercase">
                  <th className="py-4 px-6 w-20">Sl.No</th>
                  <th className="py-4 px-6">Designation</th>
                  <th className="py-4 px-6">Name of the Member</th>
                </tr>
              </thead>
              <tbody>
                {current.members.map((member, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                  >
                    <td className="py-4 px-6 text-slate-400 font-bold">{member.sl}.</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold">{member.role}</td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed whitespace-pre-line">
                      {member.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
