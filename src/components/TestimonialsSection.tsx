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
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" aria-label="Student Testimonials">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-brand-maroon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-college-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 space-y-2">
          <span className="text-brand-maroon font-extrabold text-xs uppercase tracking-[0.25em]">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display uppercase tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Real stories and reflections from the students who are shaping their futures at our campus.
          </p>
        </div>

        {/* Reel Slider Card Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-14 z-20">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-brand-maroon hover:shadow-md hover:-translate-x-0.5 active:scale-95 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-14 z-20">
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-brand-maroon hover:shadow-md hover:translate-x-0.5 active:scale-95 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Active Slide Panel */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.04)] transition-all duration-300 relative min-h-[240px] flex flex-col justify-between">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-slate-100 pointer-events-none select-none font-black text-7xl leading-none">
              “
            </div>

            <div className="space-y-4">
              {/* Stars ratings */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-college-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote text with slide fade-in/fade-out animation */}
              <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed italic text-justify">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Profile Info Row */}
            <div className={`flex items-center gap-3 pt-6 border-t border-slate-100 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              {/* Profile Avatar Initials */}
              <div className="w-12 h-12 rounded-full bg-brand-maroon/5 flex items-center justify-center border border-brand-maroon/10 shrink-0 select-none">
                <span className="text-brand-maroon font-bold text-base">{testimonials[current].initials}</span>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-800 text-sm leading-snug">
                  {testimonials[current].name}
                </h4>
                <p className="text-[10px] font-bold text-brand-maroon tracking-wider uppercase">
                  {testimonials[current].program}
                </p>
                <p className="text-[9px] font-semibold text-slate-400">
                  {testimonials[current].batch}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                aria-label={`Go to slide ${index + 1}`}
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
