import React from "react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import TabsSection from "@/components/TabsSection";
import ScrollReveal from "@/components/ScrollReveal";

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
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-maroon leading-tight font-display uppercase tracking-wide">
              Welcome To Our College
            </h2>
            <p className="text-brand-text leading-relaxed text-sm md:text-base text-justify font-medium">
              KLE Society’s Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur was established in June 1987. The college grew from strength to strength and various subjects are introduced to cater to the educational requirements of the people in and around Mahalingpur. The campus is an amalgamation of modern infrastructure with stylish and classic architecture which makes the setting perfect for a free mind to absorb knowledge. The campus can be considered as the world of technology and its infrastructure matches the requirement of education programmes and creates a conducive atmosphere for the all-round development of students’ personality. The college has been rendering its yeoman service in the field of Arts and Commerce education in the north Karnatak for the last 31 years. College has introduced Science Degree Program and Post Graduation in Commerce to cater the needs of community.
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
              alt="KLE SCP College Mahalingpur main building campus architecture"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tabs Section ── */}
      <ScrollReveal animation="fade-in-up" delay={50}>
        <TabsSection />
      </ScrollReveal>

      {/* ── Our Donor Section ── */}
      <section className="py-16 bg-brand-gray border-t border-gray-200" aria-label="Our Donor">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="hidden lg:block h-64 bg-slate-200 rounded-xl" animation="fade-in-left" />
          <ScrollReveal className="space-y-4" animation="fade-in-right" delay={150}>
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">Our Donor</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-maroon font-display">Our Donor</h2>
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
      <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal animation="fade-in-up">
            <h2 id="team-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display text-center mb-12">Team</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Chairman */}
            <ScrollReveal className="w-full" animation="fade-in-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center flex flex-col items-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brand-maroon/20 bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo/Prabhakar Kore.jpg" alt="Dr. Prabhakar Kore" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900">Dr. Prabhakar Kore</h3>
                  <p className="text-brand-maroon font-bold text-sm">Chairman</p>
                  <p className="text-slate-500 text-xs mt-1">Honorable Chairman, KLE Society Belagavi</p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Principal */}
            <ScrollReveal className="w-full" animation="fade-in-up" delay={150}>
              <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center flex flex-col items-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brand-maroon/20 bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo/principal.jpg" alt="Dr. K.M. Awaradi" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900">Dr. K.M. Awaradi</h3>
                  <p className="text-brand-maroon font-bold text-sm">Principal</p>
                  <p className="text-slate-500 text-xs mt-1">Principal, Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video / Stats Section - White */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal animation="zoom-in" duration={900}>
            <div className="relative aspect-video w-full overflow-hidden bg-brand-black shadow-2xl flex items-center justify-center group cursor-pointer border-t-8 border-brand-maroon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop" 
                alt="College Campus Video Cover" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="relative z-10 w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-black translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enrolment Section - White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="space-y-4" animation="fade-in-left">
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] block mb-6">
              Join Our Community
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-brand-text leading-tight border-l-2 border-brand-maroon pl-6">
              Enrolment <br/>
              <span className="text-brand-maroon font-normal">Process</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal className="space-y-8 flex flex-col justify-center items-start" animation="fade-in-right" delay={150}>
            <p className="text-gray-600 leading-relaxed text-sm">
              We guide our students into becoming responsible, skilled, and patriotic citizens ready to make meaningful global impacts. Join the thousands of alumni who have shaped their futures here.
            </p>
            <Link
              href="/student-corner"
              className="inline-flex items-center gap-4 text-brand-black font-bold text-xs uppercase tracking-widest hover:text-brand-maroon transition-colors"
            >
              <span>LEARN MORE</span>
              <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured News & Events - Off White */}
      <section className="py-24 bg-brand-gray border-l-4 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <ScrollReveal className="lg:col-span-4 flex flex-col justify-center space-y-6" animation="fade-in-left">
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              Latest Updates
            </span>
            <h2 className="text-4xl font-light text-brand-text leading-tight">
              Featured news <br/>and <span className="text-brand-maroon font-normal">events</span>
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

      {/* Pre-Footer Banner - White */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <ScrollReveal className="lg:w-1/2 w-full" animation="fade-in-left">
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-brand-text leading-tight mb-8">
              Take the next step in your <br/>
              <span className="text-brand-maroon font-normal">academic journey</span>
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Explore BA, BSc, and BCom programs
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Experience state-of-the-art facilities
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Be part of a 35+ year legacy
              </li>
            </ul>
            <Link
              href="/student-corner"
              className="inline-block bg-brand-yellow text-brand-black font-bold uppercase tracking-widest text-xs px-10 py-4 hover:bg-brand-yellow-hover transition-colors shadow-lg"
            >
              APPLY NOW
            </Link>
          </ScrollReveal>
          
          <ScrollReveal className="lg:w-1/2 w-full relative" animation="fade-in-right" delay={150}>
            <div className="absolute inset-0 bg-brand-gray -z-10 translate-x-4 translate-y-4 shadow-sm" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="w-full object-cover shadow-2xl border-b-8 border-brand-maroon"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Subscribe Banner just above footer */}
      <section className="bg-white py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-gray-100">
        <div className="flex items-center gap-6">
          <img src="/images/logo/kle transpe.png" alt="Logo" className="w-16 h-16 object-contain hidden md:block opacity-20 grayscale" />
          <div>
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-1">
              Subscribe
            </span>
            <h3 className="text-brand-maroon text-xl md:text-2xl font-light">
              Stay up to date with what's happening around the College
            </h3>
          </div>
        </div>
        <button className="bg-brand-maroon text-white font-bold uppercase tracking-widest text-[10px] px-8 py-3 hover:bg-[#5e1c2b] transition-colors whitespace-nowrap">
          SUBSCRIBE TO E-NEWS
        </button>
      </section>
    </div>
  );
}
