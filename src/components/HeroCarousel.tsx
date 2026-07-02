"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import HeroTagline from "@/components/HeroTagline";

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
    headline: "EXPLORE OUR GROUNDS",
    ctaLabel: "DISCOVER MORE",
    ctaHref: "/about",
    imageSrc: "/images/hero_section/slide.png",
  },
  {
    id: 2,
    eyebrow: "Academic Programs",
    headline: "EXPLORE LEARNING",
    ctaLabel: "DISCOVER MORE",
    ctaHref: "/programs",
    imageSrc: "/images/hero_section/slide1.png",
  },
  {
    id: 3,
    eyebrow: "Campus Life & Events",
    headline: "MEET OUR STUDENTS",
    ctaLabel: "VIEW GALLERY",
    ctaHref: "/gallery",
    imageSrc: "/images/hero_section/slide2.png",
  },
  {
    id: 4,
    eyebrow: "IQAC & Quality Assurance",
    headline: "COMMITTED TO QUALITY",
    ctaLabel: "LEARN MORE",
    ctaHref: "/iqac",
    imageSrc: "/images/hero_section/slide3.png",
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
  const [activeSlide, setActiveSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartXRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const carouselSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const current = (activeSlide - 1 + slides.length) % slides.length;

  const goTo = useCallback((idx: number) => {
    setIsAnimating(true);
    setActiveSlide(idx + 1);
  }, []);

  const handleNext = useCallback(() => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev >= slides.length + 1 ? 2 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
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

  const endDrag = (target: Element | null) => {
    if (
      activePointerIdRef.current !== null &&
      target instanceof HTMLElement &&
      target.hasPointerCapture(activePointerIdRef.current)
    ) {
      target.releasePointerCapture(activePointerIdRef.current);
    }

    activePointerIdRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (
      event.button !== 0 ||
      (event.target instanceof Element && event.target.closest("a, button"))
    ) {
      return;
    }

    pause();
    setIsAnimating(false);
    setIsDragging(true);
    setDragOffset(0);
    dragStartXRef.current = event.clientX;
    activePointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!isDragging || event.pointerId !== activePointerIdRef.current) {
      return;
    }

    const distance = event.clientX - dragStartXRef.current;
    const width = event.currentTarget.clientWidth || 1;
    const offset = Math.max(-38, Math.min(38, (distance / width) * 100));
    setDragOffset(offset);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (!isDragging || event.pointerId !== activePointerIdRef.current) {
      return;
    }

    const distance = event.clientX - dragStartXRef.current;
    const width = event.currentTarget.clientWidth || 1;
    const finalOffset = (distance / width) * 100;
    const shouldMove = Math.abs(finalOffset) > 12;
    setIsAnimating(true);

    if (shouldMove && finalOffset < 0) {
      handleNext();
    } else if (shouldMove && finalOffset > 0) {
      handlePrev();
    }

    endDrag(event.currentTarget);
    resume();
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }

    setIsAnimating(true);
    endDrag(event.currentTarget);
    resume();
  };

  const snapToRealSlide = (slideIndex: number) => {
    setIsAnimating(false);
    setActiveSlide(slideIndex);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsAnimating(true)));
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (activeSlide === 0) {
      snapToRealSlide(slides.length);
    }

    if (activeSlide === slides.length + 1) {
      snapToRealSlide(1);
    }
  };

  return (
    <div className="w-full overflow-x-clip bg-white pt-8 sm:pt-10 md:pt-12">
      <div className="relative mx-auto w-[calc(100%_-_2rem)] max-w-[1740px] sm:w-[85vw]">
      {/* ------------------------------------------------------------------ */}
      {/* HERO CAROUSEL CONTAINER (INSET)                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-label="Campus highlights slideshow"
        className={`relative w-full touch-pan-y overflow-visible bg-brand-black ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ height: "clamp(380px, 55vw, 650px)" }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onPointerCancel={handlePointerCancel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Sliding Track with Peek Slivers Layout */}
        <div 
          className={`flex h-full w-full select-none ${
            isAnimating && !isDragging ? "transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]" : ""
          }`}
          style={{ transform: `translateX(calc(${activeSlide} * -100% + ${dragOffset}%))` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselSlides.map((slide, idx) => {
            const realIndex = (idx - 1 + slides.length) % slides.length;
            const isActive = realIndex === current && idx === activeSlide;

            return (
            <div
              key={`${slide.id}-${idx}`}
              className="w-full flex-shrink-0 px-1.5 sm:px-2 h-full relative"
              aria-hidden={!isActive}
            >
              <div className="w-full h-full relative overflow-hidden bg-brand-maroon shadow-xl">
                {/* Background — real image or solid brand-color fallback */}
                {slide.imageSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={slide.imageSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={realIndex === 0 ? "eager" : "lazy"}
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
                {slide.id === 1 ? (
                  <div
                    className={`absolute inset-0 z-20 overflow-hidden px-6 py-14 transition-opacity duration-[400ms] sm:px-10 md:px-16 ${
                      isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="absolute left-[50%] top-[40%] w-[92%] -translate-x-1/2 -translate-y-1/2 md:left-[55%] md:top-[43%] md:w-[86%]">
                      <p className="mb-4 text-center text-white/90 uppercase tracking-[0.24em] text-[10px] sm:text-sm md:text-lg">
                        {slide.eyebrow}
                      </p>
                      <h2
                        className="text-center text-white font-black leading-none uppercase"
                        style={{
                          fontSize: "clamp(2.25rem, 8.6vw, 7.75rem)",
                          lineHeight: 0.95,
                        }}
                      >
                        {slide.headline}
                      </h2>
                    </div>

                    <div className="absolute left-1/2 top-[58%] w-[82%] max-w-[820px] -translate-x-1/2 md:top-[61%] md:w-[56%]">
                      <HeroTagline />
                    </div>

                    <Link
                      href={slide.ctaHref}
                      className="hidden md:inline-block absolute left-1/2 top-[73%] z-10 -translate-x-1/2 bg-brand-yellow px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-black shadow-lg transition-all duration-200 hover:bg-brand-yellow-hover active:scale-95 sm:px-14 sm:text-sm"
                      style={{ borderRadius: "2px" }}
                    >
                      {slide.ctaLabel}
                    </Link>
                  </div>
                ) : (
                  <div
                    className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-6 py-14 text-center transition-opacity duration-[400ms] ${
                      isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="w-full max-w-7xl space-y-5 sm:space-y-7">
                      {/* Eyebrow */}
                      <p className="text-white/90 uppercase tracking-[0.2em] text-xs sm:text-base md:text-lg">
                        {slide.eyebrow}
                      </p>

                      {/* Headline */}
                      <h2
                        className="text-white font-black leading-none uppercase"
                        style={{
                          fontSize: "clamp(2rem, 8vw, 6.75rem)",
                          lineHeight: 1,
                        }}
                      >
                        {slide.headline}
                      </h2>

                      {/* CTA Button */}
                      <div className="pt-2 hidden md:block">
                        <Link
                          href={slide.ctaHref}
                          className="inline-block bg-brand-yellow hover:bg-brand-yellow-hover text-brand-black font-bold uppercase tracking-[0.2em] text-xs sm:text-sm px-10 sm:px-14 py-5 active:scale-95 transition-all duration-200 shadow-lg"
                          style={{ borderRadius: "2px" }}
                        >
                          {slide.ctaLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )})}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Dot indicators — bottom-left, above the CTA area                 */}
        {/* ---------------------------------------------------------------- */}
        <div
          className="absolute bottom-16 left-6 md:bottom-20 md:left-24 z-30 flex items-center gap-2"
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
              className={`rounded-full transition-all duration-300 focus-visible:outline-offset-4 cursor-pointer ${
                idx === current
                  ? "w-3 h-3 bg-white border border-white ring-2 ring-white/30 shadow-md"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
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
              className="quick-link-card block p-5 md:p-10 shadow-xl border border-brand-maroon/30 focus-visible:outline-brand-yellow group"
            >
              {/* Desktop layout: category label at top */}
              <p className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                {card.label}
              </p>

              {/* Flex container for text & arrow */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm md:text-base font-normal leading-snug">
                    {card.lineOne}{" "}
                  </span>
                  <span className="text-sm md:text-xl font-extrabold uppercase tracking-wide leading-tight md:block md:mt-0.5">
                    {card.lineTwo}
                  </span>
                </div>
                
                {/* Arrow indicator */}
                <div className="shrink-0 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
