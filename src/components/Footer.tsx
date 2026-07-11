"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-maroon text-white border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/kle transpe.png"
              alt="KLE SCPDDS College Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain bg-white rounded-full p-0.5"
            />
            <h4 className="font-bold text-base uppercase tracking-wider text-college-gold">KLE SCPDDS College</h4>
          </div>
          <p className="text-white/70 leading-relaxed text-justify">
            Established in 1987, KLE SCPDDS College is dedicated to providing high-quality education in Arts, Science, and Commerce, preparing students for dynamic careers.
          </p>

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
              <Link href="/naac/aqar" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                AQAR
              </Link>
            </li>
            <li>
              <a href="https://www.epfindia.gov.in/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
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
              <Link href="/about/achievements" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/gallery/photo-gallery" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about/staff" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/student-corner/admissions" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 hover:text-college-gold transition hover:translate-x-1 inline-block duration-200">
                About College
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
          <p>© {currentYear} KLE SCPDDS College. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
