"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("MANAGEMENT");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle Cmd+K / Ctrl+K keyboard shortcut to open search modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      name: "ABOUT KLE",
      href: "/about-kle/history",
      sublinks: [
        { name: "History", href: "/about-kle/history" },
        { name: "Emblem", href: "/about-kle/emblem" },
        { name: "Vision & Mission", href: "/about-kle/vision-mission" },
        { name: "Founders", href: "/about-kle/founders" },
        { name: "Board of Management", href: "/about-kle/board-management" },
        { name: "Chairman's Message", href: "/about-kle/chairman-message" },
        { name: "Local Governing Body", href: "/about-kle/lgb" },
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
        { name: "AQAR", href: "/naac/aqar" },
        { name: "AQAR 2020-21", href: "/naac/aqar/2020-21" },
        { name: "AQAR 2021-22", href: "/naac/aqar/2021-22" },
        { name: "AQAR 2022-23", href: "/naac/aqar/2022-23" },
        { name: "AQAR 2023-24", href: "/naac/aqar/2023-24" },
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

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Header Bar */}
      <header className="bg-white sticky top-0 z-40 text-brand-black shadow-md py-2 md:py-3">
        <div className="w-full px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Left: Brand/Logo & Name Area (Visible on all sizes) */}
          <div className="flex items-center flex-grow min-w-0">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none min-w-0 max-w-[calc(100vw-7rem)] sm:max-w-[72vw]"
            >
              <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 aspect-[1.45/1] shrink-0 overflow-hidden transition-transform duration-200 group-hover:scale-[1.01]">
                <Image
                  src="/images/logo/kle transpe.png"
                  alt="KLE Society centenary logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                  className="object-contain bg-white"
                  style={{ objectPosition: "left center" }}
                />
              </div>
              <div className="flex flex-col text-left min-w-0 leading-tight">
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-[15px] font-black uppercase tracking-[0.16em] text-brand-maroon whitespace-normal">
                  KLE Society&apos;s
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] font-extrabold text-slate-700 leading-tight whitespace-normal">
                  Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur - 587312.
                </span>
                <span className="hidden md:block text-[9px] md:text-[11px] font-bold text-brand-maroon whitespace-normal">
                  NAAC Accredited at &apos;A&apos; Grade with 3.10 CGPA
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Actions (Search + Hamburger Menu) */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Search trigger button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search dialog"
              className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md transition-all text-brand-maroon focus-visible:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Hamburger Menu Button */}
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

        </div>
      </header>

      {/* Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-400 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark Backdrop — clicking closes the drawer */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Right-Side Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 min-w-0 max-w-[70vw]">
              <div className="relative w-24 sm:w-28 aspect-[1.45/1] shrink-0 overflow-hidden">
                <Image
                  src="/images/logo/kle transpe.png"
                  alt="KLE Society centenary logo"
                  fill
                  sizes="96px"
                  className="object-contain bg-white"
                  style={{ objectPosition: "left center" }}
                />
              </div>
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-xs font-black uppercase tracking-wide text-brand-maroon whitespace-normal">KLE Society&apos;s</span>
                <span className="text-[10px] font-bold text-slate-700 whitespace-normal leading-tight">
                  Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur - 587312.
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4 px-1">Navigation</p>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isSelected = activeSection === link.name;
                return (
                  <div key={link.name}>
                    {link.sublinks ? (
                      <div>
                        {/* Accordion Toggle */}
                        <button
                          onClick={() => setActiveSection(isSelected ? "" : link.name)}
                          className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-200 focus:outline-none ${
                            isSelected
                              ? "bg-brand-maroon/5 text-brand-maroon"
                              : "text-gray-700 hover:bg-gray-50 hover:text-brand-maroon"
                          }`}
                        >
                          <span>{link.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform duration-200 ${isSelected ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Sublinks */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isSelected ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          <div className="pl-3 pr-1 pb-2 pt-1 flex flex-col gap-0.5 border-l-2 border-brand-maroon/20 ml-3 mt-1">
                            {link.sublinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-gray-600 hover:text-brand-maroon font-semibold py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors min-h-[40px] flex items-center"
                              >
                                {sub.name}
                              </Link>
                            ))}
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="text-xs text-brand-maroon font-black py-2 px-3 flex items-center gap-1.5 hover:underline"
                            >
                              View All {link.name} →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 rounded-xl text-sm font-black uppercase tracking-wide text-gray-700 hover:bg-gray-50 hover:text-brand-maroon transition-all duration-200 min-h-[44px] flex items-center"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="shrink-0 border-t border-gray-100 px-5 py-4 bg-gray-50">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">KLE Society&apos;s</p>
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur - 587312.</p>
          </div>
        </div>
      </div>
      {/* Search Modal Overlay */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
