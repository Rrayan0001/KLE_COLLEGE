import React from "react";
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
}

export default function SubpageLayout({
  title,
  breadcrumbs,
  sidebarLinks,
  children,
}: SubpageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Mini-Banner Section */}
      <div className="bg-brand-maroon py-12 md:py-16 text-white border-b-4 border-brand-yellow shadow-inner relative overflow-hidden">
        {/* Subtle decorative background pattern */}
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
      <div className="max-w-7xl w-full mx-auto px-6 py-12 md:py-16 flex-grow flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        {sidebarLinks && sidebarLinks.length > 0 && (
          <aside className="lg:w-1/4 shrink-0 space-y-6 print:hidden">
            <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm sticky top-28">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">
                Related Pages
              </h2>
              <nav className="flex flex-col gap-1.5" aria-label="Section navigation">
                {sidebarLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-between group
                      ${
                        link.active
                          ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/10"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-maroon"
                      }`}
                  >
                    <span>{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-150 ${
                        link.active
                          ? "text-brand-yellow translate-x-0.5"
                          : "text-slate-400 group-hover:text-brand-maroon group-hover:translate-x-0.5"
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
        )}

        {/* Dynamic Page Content */}
        <main className={`flex-grow bg-white border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm ${sidebarLinks ? "lg:w-3/4" : "w-full"}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
