"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("MANAGEMENT");
  const pathname = usePathname();
  const router = useRouter();

  // Close mega menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    {
      name: "MANAGEMENT",
      href: "/management/history",
      sublinks: [
        { name: "KLE History", href: "/management/history" },
        { name: "KLE Society", href: "/management/society" },
        { name: "Chairman's Message", href: "/management/chairman" },
        { name: "Board Members", href: "/management/boardmembers" },
        { name: "Local Governing Body", href: "/management/lgb" },
      ],
    },
    {
      name: "ABOUT US",
      href: "/about",
      sublinks: [
        { name: "Donor of SPDDS", href: "/about/donors" },
        { name: "About College", href: "/about" },
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Our Principal", href: "/about/principal" },
        { name: "Our Staff", href: "/about/staff" },
        { name: "Achievements", href: "/about/achievements" },
      ],
    },
    {
      name: "IQAC",
      href: "/iqac",
      sublinks: [
        { name: "Composition", href: "/iqac/composition" },
        { name: "Steering Committee", href: "/iqac/steering-committee" },
        { name: "Code of Conduct", href: "/iqac/code-of-conduct" },
        { name: "Code of Ethics", href: "/iqac/code-of-ethics" },
        { name: "Academic Plan of Action", href: "/iqac/academic-plan" },
        { name: "Minutes of Meeting", href: "/iqac/minutes-of-meeting" },
        { name: "Affiliation Details", href: "/iqac/affiliation-details" },
        { name: "Quality Policy", href: "/iqac/quality-policy" },
      ],
    },
    {
      name: "NAAC",
      href: "/naac/certificates",
      sublinks: [
        { name: "Certificates", href: "/naac/certificates" },
        { name: "SSR", href: "/naac/ssr" },
        { name: "AQAR", href: "/aqar" },
        { name: "AQAR 2020-21", href: "/aqar" },
        { name: "AQAR 2021-22", href: "/aqar" },
        { name: "AQAR 2022-23", href: "/aqar" },
        { name: "AQAR 2023-24", href: "/aqar" },
        { name: "AISHE", href: "/naac/aishe" },
        { name: "Criterion Wise Details", href: "/naac/criterion-details" },
        { name: "RTI Act", href: "/naac/rti-act" },
        { name: "Undertaking", href: "/naac/undertaking" },
      ],
    },
    {
      name: "PROGRAMS",
      href: "/programs/ba",
      sublinks: [
        { name: "B.A", href: "/programs/ba" },
        { name: "B.COM", href: "/programs/bcom" },
        { name: "B.Sc", href: "/programs/bsc" },
        { name: "M.Com", href: "/programs/mcom" },
        { name: "BCA", href: "/programs/bca" },
        { name: "ITEP", href: "/itep" },
        { name: "Program Outcomes", href: "/programs/outcomes" },
        { name: "Best Practice", href: "/programs/best-practice" },
        { name: "Institutional Distinctiveness", href: "/programs/distinctiveness" },
        { name: "S S S", href: "/programs/sss" },
      ],
    },
    {
      name: "INFRASTRUCTURE",
      href: "/infrastructure/office",
      sublinks: [
        { name: "Office", href: "/infrastructure/office" },
        { name: "Support Facilities", href: "/infrastructure/support-facilities" },
        { name: "Library", href: "/infrastructure/library" },
        { name: "Hostel", href: "/infrastructure/hostel" },
        { name: "ClassRooms", href: "/infrastructure/classrooms" },
        { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium" },
        { name: "Labs", href: "/infrastructure/labs" },
      ],
    },
    {
      name: "SUPPORTING SECTIONS",
      href: "/supporting-sections/sports-culture",
      sublinks: [
        { name: "Sports & Culture Activities", href: "/supporting-sections/sports-culture" },
        { name: "Scholarships", href: "/supporting-sections/scholarships" },
        { name: "Research Policy", href: "/supporting-sections/research-policy" },
      ],
    },
    {
      name: "STUDENT CORNER",
      href: "/student-corner/admissions",
      sublinks: [
        { name: "Admission", href: "/student-corner/admissions" },
        { name: "Student Strength", href: "/student-corner/strength" },
        { name: "Syllabus", href: "/student-corner/syllabus" },
        { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
        { name: "Student Research", href: "/student-corner/student-research" },
        { name: "Student Support Facilities", href: "/student-corner/student-support" },
        { name: "NSS", href: "/student-corner/nss" },
      ],
    },
    {
      name: "MEDIA",
      href: "/gallery/photo-gallery",
      sublinks: [
        { name: "Photo Gallery", href: "/gallery/photo-gallery" },
        { name: "Seminar & Conference (UGC Funded & Self-Funded)", href: "/gallery/seminars" },
        { name: "Notifications", href: "/gallery/notifications" },
      ],
    },
    { name: "CONTACT", href: "/contact" },
  ];

  const activeSectionData = navLinks.find((link) => link.name === activeSection);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Main Header Bar */}
      <header className="bg-white sticky top-0 z-40 text-brand-black shadow-md h-20 md:h-24">
        <div className="w-full h-full px-6 flex items-center justify-between">
          
          {/* Left: Hamburger Menu Button */}
          <div className="w-1/3 flex justify-start">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center: Brand/Logo Area */}
          <div className="w-1/3 flex justify-center">
            <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/society.jpg"
                alt="KLE Society Logo"
                className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-250 shrink-0"
              />
              <div className="hidden sm:block text-center text-brand-black">
                <h1 className="text-sm md:text-lg font-bold leading-tight uppercase tracking-wide">
                  KLE SCP College
                </h1>
                <p className="text-[10px] md:text-xs text-brand-maroon font-semibold">
                  Arts, Science & Commerce
                </p>
              </div>
            </Link>
          </div>

          {/* Right: Empty (Balance Flex) */}
          <div className="w-1/3 flex justify-end"></div>

        </div>
      </header>

      {/* Mega Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-[#f9fafb] text-gray-900 overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Menu Header (Logo & Close Button) */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-white">
            <div className="w-1/3 flex justify-start">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="w-1/3 flex justify-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <img
                  src="/images/logo/society.jpg"
                  alt="KLE Society Logo"
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="w-1/3 flex justify-end"></div>
          </div>

          {/* Menu Content: 2 Columns (Desktop) */}
          <div className="hidden md:flex max-w-[1400px] mx-auto px-6 py-12 flex-row gap-12 lg:gap-24 min-h-[60vh]">
            
            {/* Left Column: Root Sections */}
            <div className="w-full md:w-1/3 xl:w-1/4 flex-shrink-0">
              <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-8 ml-4">
                Sections
              </h3>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onMouseEnter={() => setActiveSection(link.name)}
                      onClick={() => {
                        setActiveSection(link.name);
                        if (!link.sublinks) {
                          handleLinkClick(link.href);
                        }
                      }}
                      className={`w-full text-left text-xl lg:text-2xl py-2 transition-all duration-200 relative ${
                        activeSection === link.name
                          ? "text-gray-900 font-medium"
                          : "text-gray-500 hover:text-gray-700 font-normal ml-4"
                      }`}
                    >
                      {activeSection === link.name && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-brand-maroon"></span>
                      )}
                      <span className={activeSection === link.name ? "ml-4" : ""}>
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Sublinks for Active Section */}
            <div className="w-full md:w-2/3 xl:w-3/4 md:border-l md:border-gray-200 md:pl-12 lg:pl-24">
              <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">
                {activeSectionData?.name}
              </h3>
              
              {activeSectionData?.sublinks ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {activeSectionData.sublinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl lg:text-[22px] text-gray-700 hover:text-brand-maroon transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                  {/* Add the main section link itself as an option */}
                  <Link
                    href={activeSectionData.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl lg:text-[22px] text-brand-maroon font-semibold hover:text-brand-yellow-hover transition-colors flex items-center gap-2 group"
                  >
                    View All {activeSectionData.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-start pt-4">
                  <p className="text-gray-500 text-lg mb-6">
                    Click below to visit the {activeSectionData?.name} page directly.
                  </p>
                  <Link
                    href={activeSectionData?.href || "/"}
                    onClick={() => setIsOpen(false)}
                    className="bg-brand-yellow text-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-brand-yellow-hover transition-colors"
                  >
                    Visit {activeSectionData?.name}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Menu Content: Vertical Accordion (Mobile) */}
          <div className="md:hidden px-6 py-8 space-y-4">
            <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-4 ml-2">
              Menu Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isSelected = activeSection === link.name;
                return (
                  <div key={link.name} className="border-b border-gray-200/60 pb-2">
                    {link.sublinks ? (
                      <div>
                        <button
                          onClick={() => {
                            setActiveSection(isSelected ? "" : link.name);
                          }}
                          className="w-full flex items-center justify-between py-3.5 px-2 text-lg font-extrabold text-gray-800 focus:outline-none"
                        >
                          <span>{link.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                              isSelected ? "rotate-180 text-brand-maroon" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Sublinks panel (toggled) */}
                        <div
                          className={`pl-4 pr-2 flex flex-col gap-3.5 transition-all duration-200 overflow-hidden ${
                            isSelected ? "max-h-[500px] py-3 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          {link.sublinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-base text-gray-600 hover:text-brand-maroon font-bold py-1.5 flex items-center min-h-[44px]"
                            >
                              {sub.name}
                            </Link>
                          ))}
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base text-brand-maroon hover:underline font-extrabold py-1.5 flex items-center gap-1 min-h-[44px]"
                          >
                            View All {link.name} →
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full block py-3.5 px-2 text-lg font-extrabold text-gray-800 hover:text-brand-maroon min-h-[44px]"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Menu Footer */}
          <div className="border-t border-gray-200 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="text-gray-500 text-xs flex flex-col md:flex-row md:items-center gap-2 md:gap-8 font-medium">
                <span className="font-bold text-gray-900">KLE SCP College</span>
                <span>Camp, Belagavi, Karnataka 590001</span>
                <span>0831-2404040</span>
                <span>info@klescp.edu.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
