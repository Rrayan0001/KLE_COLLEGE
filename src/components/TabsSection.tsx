"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type TabItem = {
  id: string;
  label: string;
  sublabel: string;
  heading: string;
  icon: (className: string) => React.ReactNode;
  body: string;
  stats: {
    value: string;
    label: string;
    icon: (className: string) => React.ReactNode;
  }[];
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
};

const tabs: TabItem[] = [
  {
    id: "achievements",
    label: "Achievements",
    sublabel: "Our Milestones",
    heading: "Achievements",
    icon: (className) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h1.5a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 004.5 7H3m18 6h-1.5a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 0119.5 7H21M12 3a4 4 0 00-4 4v5a4 4 0 008 0V7a4 4 0 00-4-4z" />
      </svg>
    ),
    body: "Our College is said to thrive when the faculty and students produce results that are visible. We honor the achievements, who have excelled in their endeavors and we are immensely proud of their success. Creates learning and working environments that encourage you to reach your potential and discover your unique purpose.",
    stats: [
      {
        value: "120+",
        label: "Awards & Honors",
        icon: (className) => (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )
      },
      {
        value: "25+",
        label: "Academic Distinctions",
        icon: (className) => (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        )
      },
      {
        value: "50+",
        label: "Student Achievements",
        icon: (className) => (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        value: "30+",
        label: "Institutional Milestones",
        icon: (className) => (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        )
      }
    ]
  },
  {
    id: "media",
    label: "SCP in Media",
    sublabel: "News & Features",
    heading: "SCP in Media",
    icon: (className) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 01-2-2V9a2 2 0 01-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    body: "Media publications have placed the college level higher every year. Several community related programs received a wide coverage. College publishes the student newspaper 'Channagiri' to showcase writing talents, poetry, and research thoughts for social development.",
    stats: [
      { value: "200+", label: "News Articles", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
      { value: "15+", label: "Media Partners", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
      { value: "100%", label: "Verified Reports", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
      { value: "1", label: "Student Newspaper", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" /></svg> },
    ]
  },
  {
    id: "library",
    label: "E-Content / Library",
    sublabel: "Knowledge Hub",
    heading: "Library",
    icon: (className) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" />
      </svg>
    ),
    body: "The college library is a massive hub of academic books, international research databases, and periodicals. With over 30,000 physical volumes, dynamic digital learning spaces with 24 dedicated computer nodes, and free subscription access to INFLIBNET N-LIST covering 3,000+ e-journals and 75,000+ e-books.",
    stats: [
      { value: "30k+", label: "Books & CDs", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" /></svg> },
      { value: "75k+", label: "Accessible E-Books", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
      { value: "3k+", label: "E-Journals", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
      { value: "24", label: "Digital Workstations", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h1.5a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 004.5 7H3m18 6h-1.5a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 0119.5 7H21M12 3a4 4 0 00-4 4v5a4 4 0 008 0V7a4 4 0 00-4-4z" /></svg> },
    ],
    links: [
      { label: "N-LIST (INFLIBNET)", href: "http://nlist.inflibnet.ac.in" },
      { label: "Lib Info – Library Information", href: "http://www.scpddslibinfo.in" },
    ],
  },
  {
    id: "extension",
    label: "Extension Activities",
    sublabel: "Beyond Classrooms",
    heading: "Extension Activities",
    icon: (className) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    body: "Our dynamic NSS, Youth Red Cross (YRC), and student forums act at the forefront of social transformation. Regularly organizing impactful extension drives in neighboring villages, which cover blood donations, medical checking camps, green forest tree plantations, clean environment rallies, legal literacy, and voters awareness campaigns.",
    stats: [
      { value: "10+", label: "Annual Village Camps", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
      { value: "1500+", label: "Blood Units Donated", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
      { value: "500+", label: "Saplings Planted", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
      { value: "20+", label: "Awareness Drives", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg> },
    ]
  },
  {
    id: "gallery",
    label: "Gallery",
    sublabel: "Moments Captured",
    heading: "Our Gallery",
    icon: (className) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    body: "Step inside our visual archives to experience the vibrant campus spirit. See moments captured from national guest seminars, graduation days, active sports accomplishments, cultural programs, and daily academic life in high resolution.",
    stats: [
      { value: "500+", label: "High-Res Photos", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
      { value: "50+", label: "Annual Events", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
      { value: "10+", label: "Sports Tournaments", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
      { value: "100%", label: "Precious Memories", icon: (c) => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    ],
    cta: { label: "View Gallery", href: "/gallery/photo-gallery" },
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === activeTab)!;
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  const handleNext = useCallback(() => {
    setActiveTab((prev) => {
      const idx = tabs.findIndex((t) => t.id === prev);
      return tabs[(idx + 1) % tabs.length].id;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setActiveTab((prev) => {
      const idx = tabs.findIndex((t) => t.id === prev);
      return tabs[(idx - 1 + tabs.length) % tabs.length].id;
    });
  }, []);

  return (
    <section className="py-16 bg-slate-100 relative overflow-hidden" aria-label="Highlights">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Single unified rounded card — matches reference image 1 exactly */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col lg:flex-row">

          {/* ── LEFT SIDEBAR ── */}
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col lg:border-r border-b lg:border-b-0 border-slate-100 bg-slate-50">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative w-full flex items-center gap-4 px-6 py-5 text-left focus-visible:outline-none transition-colors duration-200
                    ${idx !== tabs.length - 1 ? "border-b border-slate-100" : ""}
                    ${isActive
                      ? "bg-brand-maroon text-white"
                      : "bg-transparent hover:bg-slate-100/80 text-slate-700"
                    }`}
                >
                  {/* Gold left accent bar on active */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-college-gold" />
                  )}

                  {/* Icon box */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-200
                    ${isActive
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white border-slate-200 text-brand-maroon"
                    }`}
                  >
                    {tab.icon("w-4.5 h-4.5")}
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className={`text-[11px] font-black uppercase tracking-widest
                      ${isActive ? "text-white" : "text-slate-800"}`}>
                      {tab.label}
                    </span>
                    <span className={`text-[10px] font-semibold mt-0.5
                      ${isActive ? "text-white/60" : "text-slate-400"}`}>
                      {tab.sublabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT CONTENT PANEL ── */}
          <div className="flex-1 relative overflow-hidden bg-white flex flex-col justify-between min-h-[420px]">

            {/* College building sketch — faint overlay on the right */}
            <Image
              src="/images/hero_section/slide.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover object-left pointer-events-none select-none !left-auto"
              style={{
                opacity: 0.055,
                mixBlendMode: "multiply",
                maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 75%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 75%)",
              }}
            />

            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full gap-6">

              {/* Top bar: pill badge + counter + nav arrows */}
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-brand-maroon/25 bg-brand-maroon/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.22em] uppercase text-brand-maroon">
                  Campus Highlights
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-bold text-slate-400 tracking-[0.18em]">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(tabs.length).padStart(2, "0")}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-brand-maroon hover:border-brand-maroon transition-all duration-150 active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-brand-maroon hover:border-brand-maroon transition-all duration-150 active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Heading + divider + body */}
              <div className="space-y-4 max-w-lg">
                <h2 className="text-4xl sm:text-5xl font-black text-brand-maroon font-serif uppercase tracking-tight leading-none">
                  {current.heading}
                </h2>
                <div className="w-14 h-[2px] bg-brand-maroon" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {current.body}
                </p>

                {current.links && (
                  <ul className="space-y-2 pt-1">
                    {current.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-maroon underline underline-offset-4 hover:text-college-gold transition">
                          {link.label}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {current.cta && (
                  <Link href={current.cta.href}
                    className="btn-center-fill btn-center-fill-maroon inline-block text-white font-extrabold uppercase tracking-widest text-[10px] px-8 py-3 shadow-md mt-2">
                    {current.cta.label}
                  </Link>
                )}
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-100 pt-6 divide-x divide-slate-100">
                {current.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-start px-4 first:pl-0 gap-1">
                    <div className="text-brand-maroon mb-1">
                      {stat.icon("w-5 h-5")}
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
