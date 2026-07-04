import React from "react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import TabsSection from "@/components/TabsSection";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import MilestonesSection from "@/components/MilestonesSection";

export default function Home() {
  const highlights = [
    {
      title: "Academic Excellence",
      description: "Structured curricula in Arts, Science, and Commerce designed to foster analytical and critical thinking skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Library & Digital Resources",
      description: "Access to thousands of physical books, leading academic journals, and digital research databases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: "Extension Activities",
      description: "Vibrant NSS, NCC, and Red Cross units providing regular community engagement and social impact programs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Student Life",
      description: "A rich mix of cultural associations, sports competitions, guest lectures, and campus festivals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "35+", label: "Years of Educational Legacy" },
    { value: "1,200+", label: "Active Students on Campus" },
    { value: "50+", label: "Expert Teaching Faculty" },
    { value: "A Grade", label: "Accredited with 3.10 CGPA" },
  ];

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
                className="inline-block bg-brand-yellow hover:bg-brand-yellow-hover text-brand-black font-extrabold uppercase tracking-widest text-xs px-10 py-4 active:scale-95 transition-all duration-200 shadow-md"
                style={{ borderRadius: "2px" }}
              >
                LEARN MORE
              </Link>
            </div>
          </ScrollReveal>
          
          {/* Right Column: Slanted Image */}
          <ScrollReveal className="lg:col-span-5 relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-white shadow-xl" animation="fade-in-right" delay={150}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about_us/image.png"
              alt="KLE SCPDDS College Mahalingpur main building campus architecture"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              loading="lazy"
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
            <img
              src="/images/general/col2.jpg"
              alt="Our Donor - Dr. D. D. Shirol"
              className="w-full h-full object-cover"
              loading="lazy"
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
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" aria-labelledby="team-heading">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-maroon/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-college-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal animation="fade-in-up" className="text-center mb-10 space-y-2">
            <span className="text-brand-maroon font-extrabold text-xs sm:text-sm uppercase tracking-[0.3em] bg-brand-maroon/5 px-4.5 py-2 rounded-full">
              Governing Leadership
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display uppercase tracking-tight">
              Our Leadership Team
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Steered by visionary institution builders and academic directors committed to elevating educational paradigms.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Chairman */}
            <ScrollReveal className="w-full flex" animation="fade-in-up" delay={0}>
              <div className="group bg-white rounded-3xl border border-slate-100 p-6 md:p-8 text-center flex flex-col items-center justify-between w-full shadow-[0_8px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(122,37,56,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                {/* Visual gold/maroon subtle accent bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-maroon via-college-gold to-brand-maroon" />
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  {/* Profile Image container — rounded rectangle to prevent clipping */}
                  <div className="relative w-52 h-40 rounded-2xl p-1 bg-gradient-to-tr from-brand-maroon to-college-gold group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl overflow-hidden border-4 border-white bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/images/profiles/Chairman.jpeg" 
                        alt="Shri. Amit Prabhakar Kore" 
                        className="w-full h-full object-cover object-top" 
                        loading="lazy" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-maroon bg-brand-maroon/5 px-3 py-1 rounded-md">
                      Chairman
                    </span>
                    <h3 className="font-black text-xl text-slate-900 font-display tracking-tight">
                      Shri. Amit Prabhakar Kore
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                      Chairman, KLE Society, Belagavi. Amit Prabhakar Kore has built his career at the intersection of institutional governance and industrial enterprise. Educated in engineering and finance in the United States and shaped by over two decades of hands-on leadership across healthcare, education & industry..
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/management/chairman" 
                  className="text-xs font-black uppercase tracking-wider text-brand-maroon hover:text-college-gold transition flex items-center gap-1 group/btn mt-4"
                >
                  Read Message <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </ScrollReveal>
            
            {/* Principal */}
            <ScrollReveal className="w-full flex" animation="fade-in-up" delay={150}>
              <div className="group bg-white rounded-3xl border border-slate-100 p-6 md:p-8 text-center flex flex-col items-center justify-between w-full shadow-[0_8px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(122,37,56,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                {/* Visual gold/maroon subtle accent bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-maroon via-college-gold to-brand-maroon" />
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  {/* Profile Image container — rounded rectangle to prevent clipping */}
                  <div className="relative w-52 h-40 rounded-2xl p-1 bg-gradient-to-tr from-brand-maroon to-college-gold group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl overflow-hidden border-4 border-white bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/images/logo/Shri_N_B_Patil.png" 
                        alt="Shri N. B. Patil" 
                        className="w-full h-full object-cover object-center" 
                        loading="lazy" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-maroon bg-brand-maroon/5 px-3 py-1 rounded-md">
                      College Principal
                    </span>
                    <h3 className="font-black text-xl text-slate-900 font-display tracking-tight">
                      Shri N. B. Patil
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                      Principal, KLE SCPDDS College, Mahalingpur. Leading academic excellence, student support, and a strong quality-driven campus culture.
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/about/principal" 
                  className="text-xs font-black uppercase tracking-wider text-brand-maroon hover:text-college-gold transition flex items-center gap-1 group/btn mt-4"
                >
                  Read Message <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
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
                href="/gallery"
                className="inline-block bg-white text-brand-black font-bold uppercase tracking-widest text-xs px-10 py-4 hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
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
                  The college was proudly accredited with an 'A' grade (3.10 CGPA) during the recent cycle.
                </p>
                <Link href="/gallery" className="text-[10px] font-bold text-brand-maroon uppercase tracking-widest hover:text-brand-black transition-colors">
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
                <Link href="/gallery" className="text-[10px] font-bold text-brand-maroon uppercase tracking-widest hover:text-brand-black transition-colors">
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
