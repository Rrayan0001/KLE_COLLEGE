"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-maroon text-white border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/kle transpe.png"
              alt="KLE SCP College Logo"
              className="w-8 h-8 object-contain bg-white rounded-full p-0.5"
            />
            <h4 className="font-bold text-base uppercase tracking-wider text-college-gold">SCP College</h4>
          </div>
          <p className="text-white/70 leading-relaxed text-justify">
            Established in 1987, KLE Society's SCP College is dedicated to providing high-quality education in Arts, Science, and Commerce, preparing students for dynamic careers.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-college-gold hover:text-college-dark transition duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-college-gold hover:text-college-dark transition duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-college-gold hover:text-college-dark transition duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column 1 */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-college-gold mb-5 pb-1 border-b border-white/10 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/itep" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                ITEP
              </Link>
            </li>
            <li>
              <Link href="/iqac" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                IQAC Reports
              </Link>
            </li>
            <li>
              <Link href="/aqar" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                AQAR
              </Link>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                EPFO
              </a>
            </li>
            <li>
              <a href="https://web.ncte.gov.in" target="_blank" rel="noreferrer" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                NCTE
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-college-gold mb-5 pb-1 border-b border-white/10 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/student-corner" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                College Association
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-college-gold mb-1 pb-1 border-b border-white/10 inline-block">
            Contact Details
          </h4>
          <div className="space-y-3 text-white/70">
            <p className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Taluk: Mudhol, District: Bagalkot,<br/>Mahalingpur, Karnataka - 587312</span>
            </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+918350270235" className="hover:text-college-gold transition">08350-270235</a>
            </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:scpdgcol@gmail.com" className="hover:text-college-gold transition">scpdgcol@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-college-dark/80 border-t border-white/5 py-6 text-center text-xs text-white/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} KLE Society's SCP Arts & DDS Commerce College. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
