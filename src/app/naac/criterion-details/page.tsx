"use client";

import React, { useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Certificates", href: "/naac/certificates" },
  { name: "SSR", href: "/naac/ssr" },
  { name: "AQAR", href: "/naac/aqar" },
  { name: "AISHE", href: "/naac/aishe" },
  { name: "Criterion Wise Details", href: "/naac/criterion-details", active: true },
  { name: "RTI Act", href: "/naac/rti-act" },
  { name: "Undertaking", href: "/naac/undertaking" },
];

const breadcrumbs = [
  { label: "NAAC", href: "/naac/ssr" },
  { label: "Criterion Wise Details" },
];

const criteriaData = [
  {
    id: "extended",
    title: "Extended Profile",
    docs: [
      { metric: "1.1", desc: "Courses Offered By the Institution", path: "/Criterion/ExtendedProfile/1.1.pdf" },
      { metric: "2.1", desc: "Student Enrollment Yearwise (University Approved Admission List)", path: "/Criterion/ExtendedProfile/2.1 University Approved Admission list.pdf" },
      {
        metric: "2.2",
        desc: "Seats Yearmarked for Reserved Category Yearwise",
        subLinks: [
          { label: "2016-17", path: "/Criterion/ExtendedProfile/2.2 2016-17.pdf" },
          { label: "2017-18", path: "/Criterion/ExtendedProfile/2.2 2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/ExtendedProfile/2.2 2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/ExtendedProfile/2.2 2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/ExtendedProfile/2.2 2020-21.pdf" },
        ]
      },
      {
        metric: "3.2",
        desc: "Fulltime Teachers During Last Five Years",
        subLinks: [
          { label: "2016-17", path: "/Criterion/ExtendedProfile/3.3-2016-17.pdf" },
          { label: "2017-18", path: "/Criterion/ExtendedProfile/3.3 -2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/ExtendedProfile/3.3 .2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/ExtendedProfile/3.3 -2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/ExtendedProfile/3.3-2020-21.pdf" },
        ]
      }
    ]
  },
  {
    id: "c1",
    title: "Criteria I: Curricular Aspects",
    docs: [
      { metric: "1.1.3", desc: "Teachers participating in Curriculum Development and Assessment", path: "/Criterion/Criteria1/1.1.3.pdf" },
      { metric: "1.2.1", desc: "Implementation of Choice Based Credit System (CBCS)", path: "/Criterion/Criteria1/1.2.1 CBCS Implementation.pdf" },
      { metric: "1.2.2", desc: "Certificate Courses List", path: "/Criterion/Criteria1/1.2.2.pdf" },
      { metric: "1.2.3", desc: "Students List Enrolled in Certificate Courses", path: "/Criterion/Criteria1/1.2.3.pdf" },
      {
        metric: "1.3.2",
        desc: "Courses that include Experiential Learning",
        subLinks: [
          { label: "2016-17", path: "/Criterion/Criteria1/1.3.2 -2017.pdf" },
          { label: "2017-18", path: "/Criterion/Criteria1/1.3.2 -2018.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria1/1.3.2 - 2019.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria1/1.3.2 2020.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria1/1.3.2 -2021.pdf" },
        ]
      },
      { metric: "1.3.3", desc: "Students undertaking Project/Field Work", path: "/Criterion/Criteria1/1.3.3_ Student Undertaking Field Project work.pdf" },
      { metric: "1.4.1", desc: "Feedback on Syllabus", path: "/Criterion/Criteria1/1.4.1.pdf" },
      { metric: "1.4.2", desc: "Feedback Process of Institution", path: "/Criterion/Criteria1/1.4.2.pdf" }
    ]
  },
  {
    id: "c2",
    title: "Criteria II: Teaching-Learning & Evaluation",
    docs: [
      { metric: "2.1.1", desc: "Average Enrollment Details (2016 to 2021)", path: "/Criterion/Criteria2/2.1.1 2016  to 2021.pdf" },
      { metric: "2.3.2", desc: "ICT Tools for effective Teaching & Learning (Study Material)", path: "/Criterion/Criteria2/STUDY MATERIAL.pdf" },
      { metric: "2.4.1 & 2.4.3", desc: "Average Full Time Teachers & Experience Details", path: "/Criterion/Criteria2/2.4.1 & 2.4.3_organized.pdf" },
      { metric: "2.6.3 (A)", desc: "Annual Performance Report", path: "/Criterion/Criteria2/2.6.3(Annual Report).pdf" },
      { metric: "2.6.3 (B)", desc: "Average Pass Percentage of Students (2016 to 2021)", path: "/Criterion/Criteria2/2.6.3 2016 to 2021.pdf" }
    ]
  },
  {
    id: "c3",
    title: "Criteria III: Research, Innovations & Extension",
    docs: [
      {
        metric: "3.2.2",
        desc: "Research Projects details",
        subLinks: [
          { label: "2017-18", path: "/Criterion/Criteria3/3.2.2 2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria3/3.2.2 2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria3/3.2.2 2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria3/3.2.2 2020-21.pdf" },
        ]
      },
      { metric: "3.3.3", desc: "Research Publications List", path: "/Criterion/Criteria3/3.3.3 Additional.pdf" },
      { metric: "3.4.3", desc: "Extension Activities conducted during last five years", path: "/Criterion/Criteria3/3.4.3 last five years.pdf" },
      {
        metric: "3.5.1",
        desc: "Collaborations",
        subLinks: [
          { label: "2018-19", path: "/Criterion/Criteria3/3.5.1 2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria3/3.5.1 2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria3/3.5.1 2020-21.pdf" },
        ]
      },
      {
        metric: "3.5.2",
        desc: "Functional MoUs signed with institutions",
        subLinks: [
          { label: "5 Years Summary", path: "/Criterion/Criteria3/3.5.2 (5years).pdf" },
          { label: "2017-18", path: "/Criterion/Criteria3/3.5.2 2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria3/3.5.2 2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria3/3.5.2 2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria3/3.5.2 2020-21.pdf" },
        ]
      }
    ]
  },
  {
    id: "c4",
    title: "Criteria IV: Infrastructure & Learning Resources",
    docs: [
      { metric: "4.1.3", desc: "Classroom and Seminar Halls with ICT enabled facilities", path: "/Criterion/Criteria4/4.1.3.pdf" },
      {
        metric: "4.2.2 & 4.2.3",
        desc: "Subscription for E-resources and Library books details",
        subLinks: [
          { label: "2016-17", path: "/Criterion/Criteria4/4.2.3 & 4.2.2 2016-2017.pdf" },
          { label: "2017-18", path: "/Criterion/Criteria4/4.2.3 & 4.2.2 2017-2018.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria4/4.2.3 & 4.2.2 2018-2019.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria4/4.2.3 & 4.2.2 2019-2020.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria4/4.2.3 & 4.2.2 2020-2021.pdf" },
        ]
      },
      { metric: "4.4.2", desc: "Established systems for maintaining and utilizing facilities", path: "/Criterion/Criteria4/4.4.2.pdf" }
    ]
  },
  {
    id: "c5",
    title: "Criteria V: Student Support & Progression",
    docs: [
      {
        metric: "5.1.1",
        desc: "Scholarships and Freeships provided yearwise",
        subLinks: [
          { label: "2016-17", path: "/Criterion/Criteria5/5.1.1.-2016-17.pdf" },
          { label: "2017-18", path: "/Criterion/Criteria5/5.1.1.-2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria5/5.1.1-2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria5/5.1.1.-2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria5/5.1.1.-2020-21.pdf" },
        ]
      },
      { metric: "5.1.3", desc: "Capacity building and skills enhancement initiatives", path: "/Criterion/Criteria5/5.1.3 Skill Enhancement.pdf" },
      {
        metric: "5.1.4",
        desc: "Guidance for competitive examinations and career counseling yearwise",
        subLinks: [
          { label: "2016-17", path: "/Criterion/Criteria5/5.1.4 _ 2016-17.pdf" },
          { label: "2017-18", path: "/Criterion/Criteria5/5.1.4 _ 2017-18.pdf" },
          { label: "2018-19", path: "/Criterion/Criteria5/5.1.4 _ 2018-19.pdf" },
          { label: "2019-20", path: "/Criterion/Criteria5/5.1.4 _ 2019-20.pdf" },
          { label: "2020-21", path: "/Criterion/Criteria5/5.1.4 _ 2020-21.pdf" },
        ]
      },
      { metric: "5.2.2", desc: "Student progression to higher education list", path: "/Criterion/Criteria5/5.2.2.pdf" },
      { metric: "5.3.1", desc: "Awards/medals for outstanding performance in sports/cultural activities", path: "/Criterion/Criteria5/5.3.1.pdf" },
      { metric: "5.3.3", desc: "Sports and cultural events/competitions organized", path: "/Criterion/Criteria5/5.3.3.pdf" }
    ]
  },
  {
    id: "c6",
    title: "Criteria VI: Governance, Leadership & Management",
    docs: [
      { metric: "6.2.2", desc: "Institution Organogram and administrative setup", path: "/Criterion/Criteria6/6.2.2.pdf" },
      { metric: "6.4.1", desc: "Internal and external financial audits statement", path: "/Criterion/Criteria6/6.4.1.pdf" },
      { metric: "6.4.3", desc: "Strategies for mobilization of funds", path: "/Criterion/Criteria6/6.4.3.pdf" },
      { metric: "6.5.2", desc: "Quality assurance initiatives of the institution", path: "/Criterion/Criteria6/6.5.2.pdf" },
      { metric: "6.5.3 (A)", desc: "Annual Quality Assurance Reports", path: "/Criterion/Criteria6/6.5.3.pdf" },
      { metric: "6.5.3 (B)", desc: "Annual Reports summary", path: "/Criterion/Criteria6/6.5.3  annual reports.pdf" }
    ]
  },
  {
    id: "c7",
    title: "Criteria VII: Institutional Values & Best Practices",
    docs: [
      {
        metric: "7.1.1",
        desc: "Gender equity promotion programs and facilities for women",
        subLinks: [
          { label: "Specific Facilities", path: "/Criterion/Criteria7/7.1.1 Specific Facilities provided for women.pdf" },
          { label: "Supporting Doc 2", path: "/Criterion/Criteria7/7.1.1 Doc 2.pdf" },
        ]
      },
      {
        metric: "7.1.3",
        desc: "Waste management and green initiatives info",
        subLinks: [
          { label: "Waste Management", path: "/Criterion/Criteria7/7.1.3 Other relevant infrmation.pdf" },
          { label: "Supporting Doc 2", path: "/Criterion/Criteria7/7.1.3 Doc 2.pdf" },
        ]
      },
      { metric: "7.1.6", desc: "Green Audit, Environment Audit, Energy Audit reports", path: "/Criterion/Criteria7/7.1.6 Audit report.pdf" },
      { metric: "7.1.8", desc: "Inclusiveness, tolerance, and harmony initiatives", path: "/Criterion/Criteria7/7.1.8.pdf" },
      { metric: "7.1.9", desc: "Sensitization of students and employees to constitutional obligations", path: "/Criterion/Criteria7/7.1.9.pdf" },
      { metric: "7.1.11", desc: "Celebrations of national and international commemorative days", path: "/Criterion/Criteria7/7.1.11.pdf" },
      { metric: "7.2.1", desc: "Two Best Practices successfully implemented by the institution", path: "/Criterion/Criteria7/7.2.1.pdf" },
      { metric: "7.3.1", desc: "Portray the performance of the institution in one area distinctive to its vision", path: "/Criterion/Criteria7/7.3.1.pdf" }
    ]
  }
];

export default function NAACCriterionPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = criteriaData[selectedIdx];

  return (
    <SubpageLayout
      title="Criterion Details"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {criteriaData.map((crit, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition duration-150
                ${
                  selectedIdx === idx
                    ? "bg-brand-maroon text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {crit.title.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-1">
              NAAC SSR Supporting Documents
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              {current.title}
            </h2>
          </div>

          {/* Mobile-first card list */}
          <div className="space-y-3">
            {current.docs.map((doc, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-3">
                  <span className="text-brand-maroon font-extrabold text-xs shrink-0 pt-0.5 w-12">{doc.metric}</span>
                  <span className="text-slate-800 font-semibold text-sm leading-relaxed">{doc.desc}</span>
                </div>
                <div className="shrink-0 ml-15">
                  {doc.path ? (
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-brand-maroon hover:bg-[#5e1c2b] text-white font-bold text-xs uppercase px-4 py-2 rounded-lg transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                  ) : doc.subLinks ? (
                    <div className="flex flex-wrap gap-2">
                      {doc.subLinks.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-brand-maroon hover:text-white text-slate-600 transition text-xs font-bold"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 font-semibold italic">N/A</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
