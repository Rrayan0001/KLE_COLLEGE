"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data types — populated from real existing pages/routes in this codebase.
// ---------------------------------------------------------------------------

type HeroSlide = {
  id: number;
  eyebrow: string;      // org/section name — all caps
  headline: string;     // 2–4 word imperative, all caps
  ctaLabel: string;     // 2 words max, all caps
  ctaHref: string;      // existing route
  imageSrc?: string;    // undefined = blank brand-color bg — no fake stock photo
};

type QuickLinkCard = {
  label: string;    // small category label, all caps
  lineOne: string;  // supporting line, regular weight
  lineTwo: string;  // bold emphasized keyword
  href: string;     // real existing route
};

// ---------------------------------------------------------------------------
// Slide data — drawn from real pages in /src/app/*
// Background images must be real photography, not a document/signage scan.
// Since no real photography exists in the codebase currently, all are set to undefined.
// TODO: add real photographic campus images to /public/images/hero/ (no text/logos)
// ---------------------------------------------------------------------------
const slides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "KLE Society's SCP College",
    headline: "SHAPING FUTURES",
    ctaLabel: "ABOUT US",
    ctaHref: "/about",
    imageSrc: undefined, // TODO: add real photographic image for slide 1 (no text/logos)
  },
  {
    id: 2,
    eyebrow: "Academic Programs",
    headline: "EXPLORE LEARNING",
    ctaLabel: "DISCOVER MORE",
    ctaHref: "/programs",
    imageSrc: undefined, // TODO: add real photographic image for slide 2 (no text/logos)
  },
  {
    id: 3,
    eyebrow: "Campus Life & Events",
    headline: "MEET OUR STUDENTS",
    ctaLabel: "VIEW GALLERY",
    ctaHref: "/gallery",
    imageSrc: undefined, // TODO: add real photographic image for slide 3 (no text/logos)
  },
  {
    id: 4,
    eyebrow: "IQAC & Quality Assurance",
    headline: "COMMITTED TO QUALITY",
    ctaLabel: "LEARN MORE",
    ctaHref: "/iqac",
    imageSrc: undefined, // TODO: add real photographic image for slide 4 (no text/logos)
  },
];

// ---------------------------------------------------------------------------
// Card data — drawn from real top-level nav routes in this codebase.
// ---------------------------------------------------------------------------
const quickLinks: QuickLinkCard[] = [
  {
    label: "ABOUT US",
    lineOne: "A History of",
    lineTwo: "EXCELLENCE",
    href: "/about",
  },
  {
    label: "LEARNING",
    lineOne: "Our Academic",
    lineTwo: "PROGRAMS",
    href: "/programs",
  },
  {
    label: "ENROL",
    lineOne: "Admissions &",
    lineTwo: "ENQUIRIES",
    href: "/contact",
  },
  {
    label: "MEDIA",
    lineOne: "News, Events &",
    lineTwo: "GALLERY",
    href: "/gallery",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 6 seconds, pause on interaction
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(handleNext, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  const pause = () => setIsPlaying(false);
  const resume = () => setIsPlaying(true);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 relative">
      {/* ------------------------------------------------------------------ */}
      {/* HERO CAROUSEL CONTAINER (INSET)                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-label="Campus highlights slideshow"
        className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-slate-950"
        style={{ height: "clamp(380px, 55vw, 650px)" }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        {/* Sliding Track with Peek Slivers Layout */}
        <div 
          className="flex w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(calc(8% - (${current} * 84%)))` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="w-[84%] flex-shrink-0 px-2 h-full relative"
            >
              <div className="w-full h-full relative overflow-hidden bg-brand-maroon rounded-2xl shadow-inner">
                {/* Background — real image or solid brand-color fallback */}
                {slide.imageSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={slide.imageSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  // No image asset — blank brand-color background, no stock photo
                  <div className="absolute inset-0 bg-brand-maroon" aria-hidden="true" />
                )}

                {/* Dark gradient overlay — bottom-heavy for text legibility (WCAG AA) */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.10) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Content — only visible on active slide */}
                <div 
                  className={`absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-12 md:p-16 transition-opacity duration-[400ms] ${
                    idx === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="space-y-4 max-w-3xl">
                    {/* Eyebrow */}
                    <p className="text-white/85 uppercase tracking-[0.15em] text-xs sm:text-sm">
                      {slide.eyebrow}
                    </p>

                    {/* Headline */}
                    <h2
                      className="text-white font-extrabold leading-none uppercase"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      {slide.headline}
                    </h2>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href={slide.ctaHref}
                        className="inline-block bg-brand-yellow hover:bg-brand-yellow-hover text-brand-black font-bold uppercase tracking-widest text-[11px] px-8 py-4 active:scale-95 transition-all duration-200 shadow-lg"
                        style={{ borderRadius: "2px" }}
                      >
                        {slide.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Number indicators — bottom-left, above the CTA area              */}
        {/* ---------------------------------------------------------------- */}
        <div
          className="absolute bottom-8 left-6 sm:left-12 md:left-24 z-30 flex items-center gap-3"
          role="group"
          aria-label="Slide indicators"
        >
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                goTo(idx);
                pause();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === current ? "true" : undefined}
              className={`flex items-center justify-center rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-offset-4 ${
                idx === current
                  ? "w-10 h-10 border-2 border-white text-white bg-transparent shadow-md"
                  : "w-10 h-10 border-2 border-white/50 text-white/50 bg-transparent hover:border-white/80 hover:text-white/80"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* QUICK-LINK CARD STRIP (WITH SEPARATION GAP AND WIPE EFFECT)        */}
      {/* Overlaps bottom of hero by ~48px via negative margin-top            */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="relative z-30 w-full"
        style={{ marginTop: "-48px" }}
        aria-label="Quick navigation"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {quickLinks.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="quick-link-card block p-8 md:p-10 shadow-xl rounded-xl border border-brand-maroon/30 focus-visible:outline-brand-yellow group"
            >
              {/* Small category label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                {card.label}
              </p>

              {/* Two-line text block */}
              <p className="text-base font-normal leading-snug">
                {card.lineOne}
              </p>
              <p className="text-xl font-extrabold uppercase tracking-wide leading-tight mt-0.5">
                {card.lineTwo}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
