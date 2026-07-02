"use client";

import React, { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "achievements",
    label: "Achievements",
    heading: "Achievements",
    body: "Our College is said to thrive when the faculty and students produce results that are visible. We honor the achievements, who have excelled in their endeavors and we are immensely proud of their success. Creates learning and working environments that encourage you to reach your potential and discover your unique purpose.",
  },
  {
    id: "media",
    label: "SCP in Media",
    heading: "SCP in Media",
    body: "Media Publications have placed the college level higher every year. Several communities related programs received a wide coverage. College Publishes newspaper 'Channagiri' to explore contribution towards social Development and to enhance the writing skill of the students.",
  },
  {
    id: "library",
    label: "E-Content/Library",
    heading: "Library",
    body: "College Library is an Information resource centre for teaching, learning and research. Being the heart of academic centre, it is home for all information services. With an aim to provide access to information and knowledge. It has got more than 30 thousand books and CD's on all the subjects. News papers, Journals, Magazines and periodicals Published in various languages readily available for students use. College has Digital Library with 24 computers and internet facility is provided. INFLIBNET facility provides 3000 e-journals and 75000 e-books free of cost.",
    links: [
      { label: "N-LIST (INFLIBNET)", href: "http://nlist.inflibnet.ac.in" },
      { label: "Lib Info – Library Information", href: "http://www.scpddslibinfo.in" },
    ],
  },
  {
    id: "extension",
    label: "Extension Activities",
    heading: "Extension Activities",
    body: "Extension activities are integral learning at SCP and an enriching hands-on activity. NSS/YRC units of our college are at the forefront of various extension activities. Which include Blood donation, Tree plantation, Health awareness, water conservation, Campaign against a plastic waste, Cleanliness campaigns, Voters awareness campaigns and women's empowerment through Legal awareness.",
  },
  {
    id: "gallery",
    label: "Gallery",
    heading: "Our Gallery",
    body: "The precious moments are captured, memories restored. We make sure we always capture the important moments.",
    cta: { label: "View Gallery", href: "/gallery" },
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-slate-900 text-white py-0" aria-label="Highlights">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[360px]">
        {/* Left: Tab List (Horizontal Scroll on Mobile, Vertical Column on Desktop) */}
        <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-white/10 scrollbar-none whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-5 lg:px-8 lg:py-7 font-extrabold uppercase tracking-widest text-xs lg:text-sm transition-all duration-200 border-b-2 lg:border-b-0 lg:border-b border-white/10 focus-visible:outline-none shrink-0 text-center lg:text-left
                ${
                  activeTab === tab.id
                    ? "bg-brand-maroon text-white border-b-brand-yellow lg:border-b-transparent lg:border-l-4 lg:border-l-brand-yellow"
                    : "text-white/70 hover:bg-white/5 hover:text-white border-b-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Tab Content */}
        <div className="lg:w-2/3 px-10 py-12 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-college-gold font-display uppercase">
            {current.heading}
          </h2>
          <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-2xl">
            {current.body}
          </p>
          {current.links && (
            <ul className="space-y-2 text-sm">
              {current.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-college-gold underline underline-offset-2 hover:text-white transition"
                  >
                    {i + 1}. {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {current.cta && (
            <Link
              href={current.cta.href}
              className="inline-block bg-brand-yellow text-brand-black font-extrabold uppercase tracking-widest text-xs px-8 py-3 hover:bg-brand-yellow-hover transition-all duration-200 shadow-md w-max"
            >
              {current.cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
