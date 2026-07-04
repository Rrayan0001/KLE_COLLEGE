"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SidebarLink {
  name: string;
  href: string;
  active?: boolean;
}

interface SubpageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  sidebarLinks?: SidebarLink[];
  children: React.ReactNode;
  navigationStyle?: "sidebar" | "overhead-pill";
}

export default function SubpageLayout({
  title,
  breadcrumbs,
  sidebarLinks,
  children,
  navigationStyle = "sidebar",
}: SubpageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showSidebar = sidebarLinks && sidebarLinks.length > 0 && navigationStyle === "sidebar";
  const showOverhead = sidebarLinks && sidebarLinks.length > 0 && navigationStyle === "overhead-pill";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Mini-Banner Section */}
      <div className="bg-brand-maroon py-12 md:py-16 text-white border-b-4 border-brand-yellow shadow-inner relative overflow-hidden">
        {/* Banner image and texture overlays to keep the maroon header visually rich */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/general/col2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/95 via-brand-maroon/90 to-brand-maroon/95" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-3">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs md:text-sm font-semibold tracking-wide text-college-gold/80 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-college-gold transition-colors duration-150">HOME</Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <span>/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-college-gold transition-colors duration-150 uppercase">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white uppercase font-bold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase font-display tracking-tight text-white drop-shadow-sm">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={`max-w-7xl w-full mx-auto px-6 py-12 md:py-16 flex-grow flex flex-col gap-8 ${
        showSidebar ? "lg:flex-row lg:gap-12" : ""
      }`}>
        {/* Overhead Pill Navigation */}
        {showOverhead && (
          <div className="w-full flex justify-start -mb-2">
            <nav className="inline-flex bg-slate-900 border border-slate-700/50 rounded-full p-1.5 shadow-sm overflow-x-auto max-w-full no-scrollbar" aria-label="Section navigation">
              {sidebarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-150 flex items-center shrink-0
                    ${
                      link.active
                        ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/25"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Sidebar Navigation */}
        {showSidebar && (
          <>
            {/* Desktop Sidebar (hidden on mobile/tablet) */}
            <aside className="hidden lg:block lg:w-1/4 shrink-0 space-y-6 print:hidden">
              <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-6 shadow-sm sticky top-28">
                <h2 className="text-sm font-extrabold text-slate-300 uppercase tracking-widest mb-4 pb-2 border-b border-slate-700/70">
                  Related Pages
                </h2>
                <nav className="flex flex-col gap-1.5" aria-label="Section navigation">
                  {sidebarLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`px-4 py-3 rounded-lg text-[15px] font-extrabold tracking-wide transition-all duration-150 flex items-center justify-between group
                        ${
                          link.active
                            ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/25"
                            : "text-slate-200 hover:bg-slate-800 hover:text-white"
                        }`}
                    >
                      <span>{link.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-150 ${
                          link.active
                            ? "text-brand-yellow translate-x-0.5"
                            : "text-slate-400 group-hover:text-brand-yellow group-hover:translate-x-0.5"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile / Tablet Collapsible Menu Dropdown (hidden on desktop) */}
            <div className="lg:hidden w-full print:hidden">
              <div className="bg-slate-900 border border-slate-700/80 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 font-extrabold uppercase text-sm tracking-widest text-white focus:outline-none"
                >
                  <span>Related Pages ({sidebarLinks.length})</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-brand-yellow transition-transform duration-200 ${
                      isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    isMobileMenuOpen ? "max-h-[600px] border-t border-slate-700/70 bg-slate-900 p-4" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label="Section navigation mobile">
                    {sidebarLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg text-[15px] font-extrabold tracking-wide transition-all duration-150 flex items-center justify-between min-h-[44px]
                          ${
                            link.active
                              ? "bg-brand-maroon text-white shadow-sm"
                              : "bg-slate-800 border border-slate-700 text-slate-200 hover:text-white"
                          }`}
                      >
                        <span>{link.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Dynamic Page Content */}
        <main className={`flex-grow bg-white border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm text-slate-800 ${showSidebar ? "lg:w-3/4" : "w-full"}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
