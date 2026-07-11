import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import TabsSection from "@/components/TabsSection";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import MilestonesSection from "@/components/MilestonesSection";

export default function Home() {
  return (
    <div>
      {/* Announcements Marquee */}

      {/* Hero Slide Area — includes the 4 quick-link card strip */}
      <HeroCarousel />

      {/* Announcements Marquee */}
      <section className="bg-brand-maroon py-2.5 text-sm md:text-base font-bold text-white overflow-hidden shadow-inner mt-8 md:mt-12" aria-label="Announcements">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="bg-brand-yellow text-brand-black px-4 py-1 z-10 hidden md:block whitespace-nowrap rounded shadow-sm mr-4 shrink-0">
            LATEST UPDATES
          </div>
          <div className="w-full overflow-hidden flex whitespace-nowrap group">
            <div className="animate-marquee flex min-w-full shrink-0">
              <span className="px-4">College Accredited at &apos;A&apos; Grade with 3.10 CGPA</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Integrated Teacher Education Program (ITEP)</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Employee Provident Fund Scheme 1952</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Admissions Open for Academic Year 2024-25</span> <span className="text-white/50 px-2">|</span>
            </div>
            <div className="animate-marquee flex min-w-full shrink-0" aria-hidden="true">
              <span className="px-4">College Accredited at &apos;A&apos; Grade with 3.10 CGPA</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Integrated Teacher Education Program (ITEP)</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Employee Provident Fund Scheme 1952</span> <span className="text-white/50 px-2">|</span> 
              <span className="px-4">Admissions Open for Academic Year 2024-25</span> <span className="text-white/50 px-2">|</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white border-t-4 border-brand-yellow mt-0 overflow-hidden" aria-label="About Us">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Welcome Text */}
          <ScrollReveal className="lg:col-span-7 space-y-6 pr-0 lg:pr-12" animation="fade-in-up">
            <span className="text-brand-maroon font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-[0.2em]">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-maroon leading-tight font-display uppercase tracking-tight">
              Welcome To Our College
            </h2>
            <p className="text-brand-text leading-relaxed text-sm md:text-base text-justify font-medium">
              KLE SCPDDS College, Mahalingpur was established in June 1987. The college grew from strength to strength and various subjects are introduced to cater to the educational requirements of the people in and around Mahalingpur. The campus is an amalgamation of modern infrastructure with stylish and classic architecture which makes the setting perfect for a free mind to absorb knowledge. The campus can be considered as the world of technology and its infrastructure matches the requirement of education programmes and creates a conducive atmosphere for the all-round development of students’ personality. The college has been rendering its yeoman service in the field of Arts and Commerce education in the north Karnatak for the last 31 years. College has introduced Science Degree Program and Post Graduation in Commerce to cater the needs of community.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="btn-center-fill btn-center-fill-yellow inline-block px-10 py-4 active:scale-95 shadow-md"
                style={{ borderRadius: "2px" }}
              >
                LEARN MORE
              </Link>
            </div>
          </ScrollReveal>
          
          {/* Right Column: Slanted Image */}
          <ScrollReveal className="lg:col-span-5 relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-white shadow-xl" animation="fade-in-right" delay={150}>
            <Image
              src="/images/about_us/image.png"
              alt="KLE SCPDDS College Mahalingpur main building campus architecture"
              fill
              className="object-cover transition-transform duration-500 hover:scale-102"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Milestones Section */}
      <MilestonesSection />

      {/* ── Tabs Section ── */}
      <ScrollReveal animation="fade-in-up" delay={50}>
        <TabsSection />
      </ScrollReveal>

      {/* ── Our Donor Section ── */}
      <section className="py-16 bg-brand-gray border-t border-gray-200" aria-label="Our Donor">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="hidden lg:block h-64 relative rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100" animation="fade-in-left">
            <Image
              src="/images/general/col2.jpg"
              alt="Our Donor - Dr. D. D. Shirol"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal className="space-y-4" animation="fade-in-right" delay={150}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-maroon font-display uppercase tracking-tight">Our Donor</h2>
            <p className="text-brand-text leading-relaxed text-sm md:text-base text-justify font-medium">
              Earlier the college was named as SCVV Trust Fund&apos;s SCP ARTS AND COMMERCE COLLEGE run by a local governing body. It was due to a donation by Dr. D. D. Shirol, the COMMERCE wing was renamed after his father Shri. Dundappa Danappa Shirol. So the college was renamed as SCVV Trust Fund&apos;s SCP ARTS AND DUNDAPPA DANAPPA SHIROL COMMERCE COLLEGE.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Latest News Marquee ── */}
      <div className="bg-brand-maroon py-3 overflow-hidden" aria-label="Latest News">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-college-gold font-extrabold text-xs uppercase tracking-widest mb-1">Latest News</h3>
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="animate-marquee flex min-w-full shrink-0 text-white text-sm font-medium">
              <span className="px-4">
                <Link href="/itep" className="underline underline-offset-2 hover:text-college-gold transition">1. ITEP — Integrated Teacher Education Program</Link>
              </span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">2. Employee Provident Fund scheme 1952</span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">3. Happy to Share that our college is Accredited at &apos;A&apos; Grade with 3.10 CGPA</span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">4. Our College is participating in International Science Development Competition held at Delhi</span>
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 text-white text-sm font-medium" aria-hidden="true">
              <span className="px-4">
                <Link href="/itep" className="underline underline-offset-2 hover:text-college-gold transition">1. ITEP — Integrated Teacher Education Program</Link>
              </span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">2. Employee Provident Fund scheme 1952</span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">3. Happy to Share that our college is Accredited at &apos;A&apos; Grade with 3.10 CGPA</span>
              <span className="text-white/40 px-2">|</span>
              <span className="px-4">4. Our College is participating in International Science Development Competition held at Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ── */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" aria-labelledby="team-heading">
        {/* Background decorative corner SVGs */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none z-0">
          <svg className="w-full h-full text-brand-maroon opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 L100,0 C60,20 20,60 0,100 Z" />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full text-college-gold z-[-1] translate-x-1.5 translate-y-1.5 opacity-90">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,0 L100,0 C60,20 20,60 0,100 Z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none z-0 rotate-180">
          <svg className="w-full h-full text-brand-maroon opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 L100,0 C60,20 20,60 0,100 Z" />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full text-college-gold z-[-1] translate-x-1.5 translate-y-1.5 opacity-90">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,0 L100,0 C60,20 20,60 0,100 Z" />
            </svg>
          </div>
        </div>

        {/* Background building watermark */}
        <div 
          className="absolute inset-0 bg-[url('/images/general/col2.jpg')] bg-cover bg-center opacity-[0.025] mix-blend-overlay z-0 pointer-events-none"
        />

        {/* Side Dot Grids */}
        <div className="absolute left-6 md:left-12 top-1/4 grid grid-cols-3 gap-2 opacity-[0.18] z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
          ))}
        </div>
        <div className="absolute right-6 md:right-12 bottom-1/4 grid grid-cols-3 gap-2 opacity-[0.18] z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal animation="fade-in-up" className="text-center mb-16 space-y-3">
            {/* Header Icon */}
            <div className="mx-auto bg-brand-maroon text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <span className="text-brand-maroon/90 font-black text-xs uppercase tracking-[0.25em] block">
              Governing Leadership
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5.5xl font-black text-slate-900 font-display uppercase tracking-tight">
              Our <span className="text-brand-maroon">Leadership</span> Team
            </h2>
            
            {/* Gold Divider Pill */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <div className="h-[2px] w-10 bg-college-gold/75" />
              <div className="w-1.5 h-1.5 bg-college-gold rounded-full" />
              <div className="h-[2px] w-10 bg-college-gold/75" />
            </div>

            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed pt-2">
              Steered by visionary institution builders and academic directors committed to elevating educational paradigms.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Chairman */}
            <ScrollReveal className="w-full flex" animation="fade-in-up" delay={0}>
              <div className="group bg-white rounded-[2rem] border border-slate-200/50 p-6 md:p-8 text-center flex flex-col items-center justify-between w-full shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(122,37,56,0.07)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden border-t-4 border-t-brand-maroon/90">
                <div className="flex flex-col items-center w-full">
                  {/* Circular image container with laurel simulation */}
                  <div className="relative w-44 h-44 flex items-center justify-center mx-auto">
                    <div className="absolute inset-0 border border-dashed border-college-gold/40 rounded-full scale-[1.06]" />
                    <div className="absolute inset-2 border-2 border-slate-100 rounded-full scale-[1.02]" />
                    <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(204,164,59,0.08)_55%)] rounded-full" />
                    
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-[6px] border-white shadow-md bg-slate-100 z-10">
                      <Image 
                        src="/images/logo/Amit_Kore.png" 
                        alt="Shri. Amit Prabhakar Kore" 
                        fill
                        className="object-cover object-top scale-100 group-hover:scale-103 transition-transform duration-300 rounded-full"
                      />
                    </div>
                    {/* Icon overlay badge */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-brand-maroon text-white p-2 rounded-full border-4 border-white shadow-md z-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
 
                  <div className="w-full mt-4">
                    <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-brand-maroon bg-brand-maroon/5 border border-brand-maroon/10 px-4 py-1.5 rounded-full mb-3">
                      Chairman
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-800 tracking-tight">
                      Shri. Amit Prabhakar Kore
                    </h3>
                    
                    <div className="h-[2px] w-8 bg-college-gold/50 mx-auto my-3.5" />
                    
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto text-center">
                      Chairman, KLE Society, Belagavi. Amit Prabhakar Kore has built his career at the intersection of institutional governance and industrial enterprise. Educated in engineering and finance in the United States and shaped by over two decades of hands-on leadership across healthcare, education & industry.
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/about-kle/chairman-message" 
                  className="btn-center-fill btn-center-fill-maroon font-extrabold text-xs uppercase tracking-widest py-3 px-8 rounded-full shadow-md hover:shadow-lg mt-6 inline-flex items-center gap-2 w-full max-w-[200px] justify-center hover:scale-[1.02] transform"
                >
                  <span>Read Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            
            {/* Principal */}
            <ScrollReveal className="w-full flex" animation="fade-in-up" delay={150}>
              <div className="group bg-white rounded-[2rem] border border-slate-200/50 p-6 md:p-8 text-center flex flex-col items-center justify-between w-full shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(122,37,56,0.07)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden border-t-4 border-t-brand-maroon/90">
                <div className="flex flex-col items-center w-full">
                  {/* Circular image container with laurel simulation */}
                  <div className="relative w-44 h-44 flex items-center justify-center mx-auto">
                    <div className="absolute inset-0 border border-dashed border-college-gold/40 rounded-full scale-[1.06]" />
                    <div className="absolute inset-2 border-2 border-slate-100 rounded-full scale-[1.02]" />
                    <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(204,164,59,0.08)_55%)] rounded-full" />
                    
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-[6px] border-white shadow-md bg-slate-100 z-10">
                      <Image 
                        src="/images/logo/Shri_N_B_Patil.png" 
                        alt="Shri N. B. Patil" 
                        fill
                        className="object-cover object-center scale-100 group-hover:scale-103 transition-transform duration-300 rounded-full"
                      />
                    </div>
                    {/* Icon overlay badge */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-brand-maroon text-white p-2 rounded-full border-4 border-white shadow-md z-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
 
                  <div className="w-full mt-4">
                    <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-brand-maroon bg-brand-maroon/5 border border-brand-maroon/10 px-4 py-1.5 rounded-full mb-3">
                      College Principal
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-800 tracking-tight">
                      Shri N. B. Patil
                    </h3>
                    
                    <div className="h-[2px] w-8 bg-college-gold/50 mx-auto my-3.5" />
                    
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto text-center">
                      Principal, KLE SCPDDS College, Mahalingpur. Leading academic excellence, student support, and a strong quality-driven campus culture.
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/about/principal" 
                  className="btn-center-fill btn-center-fill-maroon font-extrabold text-xs uppercase tracking-widest py-3 px-8 rounded-full shadow-md hover:shadow-lg mt-6 inline-flex items-center gap-2 w-full max-w-[200px] justify-center hover:scale-[1.02] transform"
                >
                  <span>Read Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <ScrollReveal className="w-full" animation="fade-in-up">
          <TestimonialsSection />
        </ScrollReveal>

      {/* Featured News & Events - Off White */}
      <section className="py-24 bg-brand-gray border-l-4 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <ScrollReveal className="lg:col-span-4 flex flex-col justify-center space-y-6" animation="fade-in-left">
            <span className="text-brand-maroon font-black text-base sm:text-lg md:text-xl uppercase tracking-[0.28em]">
              Latest Updates
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text leading-tight uppercase tracking-tight">
              Featured news <br/>and <span className="text-brand-maroon">events</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Stay connected with the latest happenings, academic achievements, and upcoming cultural events on campus.
            </p>
            <div className="pt-4">
              <Link
                href="/gallery/photo-gallery"
                className="btn-center-fill btn-center-fill-white inline-block text-brand-black font-bold uppercase tracking-widest text-xs px-10 py-4 border border-gray-200 shadow-sm"
              >
                VIEW ALL
              </Link>
            </div>
          </ScrollReveal>
 
          <div className="lg:col-span-8 flex gap-6 overflow-x-auto pb-8 snap-x">
            {/* News Card 1 */}
            <ScrollReveal className="min-w-[320px] max-w-[350px] bg-white shadow-lg snap-center group" animation="fade-in-up" delay={0}>
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase font-bold text-gray-500">
                  News
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 bg-white border border-gray-100 shadow-sm w-12 h-12 flex flex-col items-center justify-center z-10">
                  <span className="text-xs font-bold text-brand-black">12</span>
                  <span className="text-[8px] uppercase text-gray-500">Nov</span>
                </div>
                <h3 className="text-sm font-bold text-brand-text mb-3 uppercase tracking-wide mt-2">NAAC Peer Team Visit</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  The college was proudly accredited with an &apos;A&apos; grade (3.10 CGPA) during the recent cycle.
                </p>
                <Link href="/gallery/photo-gallery" className="text-[10px] font-bold text-brand-maroon uppercase tracking-widest hover:text-brand-black transition-colors">
                  READ MORE
                </Link>
              </div>
            </ScrollReveal>
 
            {/* News Card 2 */}
            <ScrollReveal className="min-w-[320px] max-w-[350px] bg-white shadow-lg snap-center group" animation="fade-in-up" delay={150}>
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=400&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase font-bold text-gray-500">
                  Event
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 bg-white border border-gray-100 shadow-sm w-12 h-12 flex flex-col items-center justify-center z-10">
                  <span className="text-xs font-bold text-brand-black">28</span>
                  <span className="text-[8px] uppercase text-gray-500">Oct</span>
                </div>
                <h3 className="text-sm font-bold text-brand-text mb-3 uppercase tracking-wide mt-2">Annual Cultural Fest</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Join us for a celebration of arts, science exhibitions, and vibrant student performances.
                </p>
                <Link href="/gallery/photo-gallery" className="text-[10px] font-bold text-brand-maroon uppercase tracking-widest hover:text-brand-black transition-colors">
                  READ MORE
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>




    </div>
  );
}
