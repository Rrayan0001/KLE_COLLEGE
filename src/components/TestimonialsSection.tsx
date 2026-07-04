"use client";

import React, { useState, useEffect, useCallback } from "react";

type Testimonial = {
  id: number;
  name: string;
  program: string;
  batch: string;
  quote: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul S. Patil",
    program: "B.Sc. Chemistry",
    batch: "Batch of 2025",
    quote: "KLE SCPDDS College has provided me with incredible opportunities. The laboratory facilities and the support from my lecturers made chemistry extremely engaging and practical.",
    initials: "RP",
  },
  {
    id: 2,
    name: "Aishwarya M. Pujari",
    program: "B.Com. Commerce",
    batch: "Batch of 2024",
    quote: "The academic rigor combined with campus events has shaped my overall personality. NSS activities helped me understand community service while pursuing my degree.",
    initials: "AP",
  },
  {
    id: 3,
    name: "Kiran J. Shirol",
    program: "B.A. Economics",
    batch: "Batch of 2025",
    quote: "Our library is a treasure trove of learning resources. The study environment is peaceful, and the digital resources made writing research assignments very easy.",
    initials: "KS",
  },
  {
    id: 4,
    name: "Sneha V. Biradar",
    program: "M.Com. Postgraduate",
    batch: "Batch of 2024",
    quote: "Continuing my postgraduate studies here was the best decision. The seminars and expert talks organized by the department gave us real-world perspective beyond books.",
    initials: "SB",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Dynamically set visible card counts based on media breakpoints
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = testimonials.length - visibleCount;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay function
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for responsive swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" aria-label="Student Testimonials">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-brand-maroon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-college-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-2">
          <span className="text-brand-maroon font-extrabold text-xs uppercase tracking-[0.25em]">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black text-slate-900 font-display uppercase tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Real stories and reflections from the students who are shaping their futures at our campus.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-8">
          
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-brand-maroon hover:shadow-md active:scale-95 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-brand-maroon hover:shadow-md active:scale-95 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding Track Viewport */}
          <div 
            className="overflow-hidden w-full px-1 py-4 cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
                width: `${(testimonials.length / visibleCount) * 100}%` 
              }}
            >
              {testimonials.map((test) => (
                <div 
                  key={test.id} 
                  style={{ width: `${100 / testimonials.length}%` }}
                  className="px-4 flex-shrink-0"
                >
                  <div className="bg-white rounded-3xl border border-slate-200/50 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(122,37,56,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative min-h-[240px] flex flex-col justify-between h-full group border-t-4 border-t-brand-maroon/90">
                    
                    {/* Double Quote Background */}
                    <div className="absolute top-6 right-8 text-slate-100 pointer-events-none select-none font-black text-6xl leading-none group-hover:text-brand-maroon/10 transition-colors duration-300">
                      “
                    </div>

                    <div className="space-y-4">
                      {/* Stars Rating */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-college-gold fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-600 text-sm leading-relaxed italic text-justify">
                        &ldquo;{test.quote}&rdquo;
                      </p>
                    </div>

                    {/* Profile Row */}
                    <div className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-5">
                      <div className="w-10 h-10 rounded-full bg-brand-maroon/5 flex items-center justify-center border border-brand-maroon/10 shrink-0 select-none">
                        <span className="text-brand-maroon font-black text-xs">{test.initials}</span>
                      </div>

                      <div className="text-left min-w-0">
                        <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm leading-snug truncate">
                          {test.name}
                        </h4>
                        <p className="text-[9px] font-black text-brand-maroon tracking-wider uppercase truncate">
                          {test.program}
                        </p>
                        <p className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                          {test.batch}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide frame ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 h-1.5 bg-brand-maroon"
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
