"use client";

import React, { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: "campus" | "academics" | "events" | "facilities";
  image: string;
  alt: string;
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Teachers' Day Celebration",
      category: "events",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      alt: "Teachers' Day stage celebration with students and teachers",
    },
    {
      id: 2,
      title: "Independence Day Parade",
      category: "events",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      alt: "Students marching in uniform during Independence Day",
    },
    {
      id: 3,
      title: "Traditional Welcoming Ceremony",
      category: "events",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Students presenting traditional welcome plates",
    },
    {
      id: 4,
      title: "Morning General Assembly",
      category: "campus",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      alt: "Students aligned in standard rows for morning assembly",
    },
    {
      id: 5,
      title: "Daily Meditation & Prayer",
      category: "academics",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      alt: "Students sitting in cross-legged lotus position praying",
    },
    {
      id: 6,
      title: "Ganesh Chaturthi Festivity",
      category: "events",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
      alt: "Traditional prayers in front of Ganesha clay idol on campus",
    },
    {
      id: 7,
      title: "Annual Sports and Stage Activities",
      category: "events",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290",
      alt: "Students displaying standard team coordinates on stage",
    },
    {
      id: 8,
      title: "Student Academic Session",
      category: "academics",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      alt: "Active student in uniform participating in class",
    },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "campus", label: "Campus Infrastructure" },
    { value: "academics", label: "Academics & Study" },
    { value: "events", label: "Events & Fests" },
    { value: "facilities", label: "Labs & Libraries" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">Campus Gallery</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Visual highlights showcasing academic labs, events, facilities, and campus life.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 max-w-7xl mx-auto px-6 flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setFilter(cat.value);
              setLightboxIndex(null); // Close lightbox if open during filter change
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
              filter === cat.value
                ? "bg-college-navy text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-college-navy hover:text-college-navy"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white border border-slate-150 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-college-navy/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                  <span className="w-10 h-10 rounded-full bg-college-gold text-college-dark flex items-center justify-center font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-50">
                <h3 className="font-bold text-slate-800 text-sm truncate">{item.title}</h3>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-55 focus:outline-none"
            aria-label="Close image viewer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-55 bg-white/5 hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-college-gold"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Canvas */}
          <div 
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center gap-4 text-center z-51"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/5 animate-fade-in"
            />
            <div className="text-white space-y-1">
              <h4 className="font-bold text-lg md:text-xl font-display">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-white/60 text-xs uppercase tracking-widest">
                {filteredItems[lightboxIndex].category} ({lightboxIndex + 1} of {filteredItems.length})
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-55 bg-white/5 hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-college-gold"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
