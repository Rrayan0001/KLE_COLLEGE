import React from "react";

export const metadata = {
  title: "About Us — SCP Arts, Science & D. D. Shirol Commerce College",
  description: "Learn about the history, vision, mission, infrastructure, and core values of SCP College, Mahalingpur.",
};

export default function AboutPage() {
  const values = [
    { title: "Academic Rigour", desc: "Instilling deep subject comprehension and logical inquiry." },
    { title: "Inclusivity & Equity", desc: "Providing accessible education to students from all social strata." },
    { title: "Social Accountability", desc: "Encouraging community participation via service initiatives." },
    { title: "Global Competence", desc: "Training students with technical skills required by modern industries." },
  ];

  const infrastructure = [
    {
      title: "Digital Library",
      desc: "Fully automated with over 20,000 volumes, access to INFLIBNET N-LIST, and digital search portals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Science & Computer Labs",
      desc: "Equipped with advanced instruments for Physics, Chemistry, Botany, Zoology, and fully networked computer labs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Auditorium & Seminar Hall",
      desc: "Spacious, acoustic-friendly spaces equipped with LCD projectors for hosting conferences and cultural events.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      title: "Sports & Recreation",
      desc: "Large athletic ground, indoor sports facility (table tennis, chess, carom), and a fully-equipped wellness gym.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">About the Institution</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Rooted in tradition, committed to nurturing leaders, and building global careers since 1987.
          </p>
        </div>
      </section>

      {/* History Detail */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">Our Rich Legacy</h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            Established in June 1987, KLE Society's SCP Arts, Science, and D.D. Shirol Commerce College in Mahalingpur, Karnataka, was founded to address the growing demand for quality higher education in rural Bagalkot. 
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            The institution has grown from a modest college into a multi-disciplinary hub offering undergraduate courses in Arts, Science, Commerce, and Computer Applications, as well as postgraduate courses in Commerce. Affiliated with Rani Channamma University, Belagavi, the college is NAAC accredited at 'A' Grade with a CGPA of 3.10, showing our commitment to high academic quality.
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            Under the guidance of the KLE Society, the college encourages rural youth to discover their potential through access to outstanding teaching, industry exposure, and value-based moral directives.
          </p>
        </div>
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
            alt="College Main Entrance Facade"
            className="rounded-xl shadow-xl w-full h-[380px] object-cover"
          />
        </div>
      </section>

      {/* KLE Society Section */}
      <section className="py-16 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/society.jpg"
              alt="KLE Society Logo"
              className="rounded-2xl shadow-md border-4 border-white max-w-[240px] object-contain bg-white p-4"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 font-display">The KLE Society Educational Umbrella</h3>
            <p className="text-slate-600 leading-relaxed text-justify text-sm">
              The Karnataka Lingayat Education (KLE) Society, Belagavi, was founded in 1916 by seven dedicated teachers (popularly known as the &ldquo;Saptarshis&rdquo;). Today, the KLE Society runs over 290 institutions across Karnataka and Maharashtra, spanning schools, colleges, medical research centers, and hospitals. It stands as a global leader in providing affordable, top-tier academic and research options to regional populations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-slate-50 border border-slate-100 p-10 rounded-2xl space-y-4 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-college-navy rounded-xl flex items-center justify-center text-white mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              To provide value-based higher education to rural youth, developing them into intellectually mature, morally upright, socially committed, and globally competitive citizens who contribute to nation-building.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 border border-slate-100 p-10 rounded-2xl space-y-4 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-college-navy rounded-xl flex items-center justify-center text-white mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              To create an environment of academic excellence through quality instruction, state-of-the-art infrastructure, and continuous support. We aim to nurture moral character, community awareness, and professional skills that prepare students for societal contribution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-extrabold text-slate-900 font-display text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 bg-college-gold/10 text-college-gold rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{value.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Leadership */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200 animate-[fadeIn_0.5s_ease-out]" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 id="leadership-heading" className="text-3xl font-extrabold text-slate-900 font-display">
              Institutional Leadership
            </h2>
            <p className="text-slate-500 text-sm">
              Guided by visionaries and dedicated educators committed to cultivating future-ready talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Chairman */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center flex flex-col items-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand-maroon/20 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo/Prabhakar Kore.jpg"
                  alt="Dr. Prabhakar Kore"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900">Dr. Prabhakar Kore</h3>
                <p className="text-brand-maroon font-bold text-sm">Chairman, KLE Society, Belagavi</p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed italic max-w-xs">
                &ldquo;Creating pathways of access to world-class learning spaces across regional India.&rdquo;
              </p>
            </div>

            {/* Principal */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center flex flex-col items-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand-maroon/20 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo/principal.jpg"
                  alt="Dr. K. M. Awaradi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900">Dr. K. M. Awaradi</h3>
                <p className="text-brand-maroon font-bold text-sm">Principal, SCP Degree College</p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed italic max-w-xs">
                &ldquo;Directing and mentoring students to merge values with professional competence.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Grid */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold font-display text-college-gold">Campus Infrastructure</h2>
            <p className="text-white/60">
              Modern resources configured to support complete educational, experimental, and mental growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl flex gap-6 items-start hover:bg-white/10 transition duration-300">
                <div className="w-12 h-12 bg-college-gold rounded-lg flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
