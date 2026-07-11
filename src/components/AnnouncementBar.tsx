"use client";

import React from "react";

export default function AnnouncementBar() {

  const announcements = [
    "NAAC Accredited at 'A' Grade with 3.10 CGPA",
    "Admissions Open for 2026-2027 Academic Year",
    "Integrated Teacher Education Program (ITEP) Approved by NCTE",
    "Implementation of Employee Provident Fund Scheme 1952",
    "Scholarships available for meritorious and SC/ST/OBC students",
  ];

  return (
    <div className="bg-brand-maroon text-white py-2.5 overflow-hidden border-b border-brand-maroon/20 font-semibold text-sm relative z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Badge */}
        <div className="bg-brand-yellow text-brand-black px-3 py-1 rounded text-xs font-black uppercase tracking-wider mr-4 z-10 shrink-0 shadow-sm">
          Latest News
        </div>

        {/* Marquee Content */}
        <div className="relative w-full overflow-hidden flex cursor-pointer">
          <div 
            className="whitespace-nowrap flex gap-12 select-none shrink-0 min-w-full animate-marquee"
          >
            {announcements.map((text, idx) => (
              <span key={idx} className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow mr-3 shadow-sm"></span>
                {text}
              </span>
            ))}
          </div>
          <div 
            className="whitespace-nowrap flex gap-12 select-none shrink-0 min-w-full animate-marquee"
            aria-hidden="true"
          >
            {announcements.map((text, idx) => (
              <span key={`dup-${idx}`} className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow mr-3 shadow-sm"></span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
