"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Photo Gallery", href: "/gallery/photo-gallery", active: true },
  { name: "Seminar & Conferences", href: "/gallery/seminars" },
  { name: "Notifications", href: "/gallery/notifications" },
];

const breadcrumbs = [
  { label: "Media", href: "/gallery/photo-gallery" },
  { label: "Photo Gallery" },
];

const galleryImages = [
  { id: 101, category: "infrastructure", title: "Spacious and well-ventilated classrooms designed to foster engaging learning environments.", src: "/images/infrastructure/class.jpg" },
  { id: 102, category: "infrastructure", title: "Library and Information Center building on campus.", src: "/images/infrastructure/hostel.jpg" },
  { id: 103, category: "infrastructure", title: "Modern, well-equipped science laboratories with advanced experimental setups.", src: "/images/infrastructure/lab.jpg" },
  { id: 104, category: "infrastructure", title: "Digital reference section and computer workstations in the college library.", src: "/images/infrastructure/lib2.jpg" },
  { id: 105, category: "infrastructure", title: "Stack rooms and reading hall housing over 23,000 volumes of books and periodicals.", src: "/images/infrastructure/lib3.jpg" },
  { id: 1, category: "campus-events", title: "Alumni Association Programme: Felicitation to a notable alumnus.", src: "/images/gallery_new/image1.jpg" },
  { id: 2, category: "campus-events", title: "Students donating blood at the Voluntary Blood Donation Camp.", src: "/images/gallery_new/image2.jpg" },
  { id: 3, category: "campus-events", title: "Dignitaries, faculty and student participants at the National Level Student Seminar, Department of Botany and Zoology.", src: "/images/gallery_new/image3.jpg" },
  { id: 4, category: "campus-events", title: "NSS, YRC volunteers and District Government Hospital officials plant a sapling to inaugurate the Health Awareness and Blood Donation Camp.", src: "/images/gallery_new/image4.jpg" },
  { id: 5, category: "campus-events", title: "Faculty and staff members pay floral tribute to Savitribai Phule portrait on her birth anniversary", src: "/images/gallery_new/image5.jpg" },
  { id: 6, category: "campus-events", title: "Students perform a traditional folk dance on stage.", src: "/images/gallery_new/image6.jpg" },
  { id: 7, category: "campus-events", title: "Chief guest felicitated with a memento at the One-Day Workshop on Modern British Literature and Postcolonial Studies, organized by the Department of English.", src: "/images/gallery_new/image7.jpg" },
  { id: 8, category: "campus-events", title: "Dignitaries water a sapling to inaugurate the Research Methodology workshop, held jointly with Bagalkot University.", src: "/images/gallery_new/image8.jpg" },
  { id: 9, category: "campus-events", title: "Guests and local residents jointly inaugurate an evening program of NSS", src: "/images/gallery_new/image9.jpg" },
  { id: 11, category: "campus-events", title: "Students in traditional attire perform a mythological dance drama on stage.", src: "/images/gallery_new/image11.jpg" },
  { id: 13, category: "campus-events", title: "Chief Medical officer addresses the gathering at the inaugural session of the Health Awareness and Blood Donation Camp.", src: "/images/gallery_new/image13.jpg" },
  { id: 14, category: "campus-events", title: "Dignitaries water a plant during a Women's Empowerment programme, an IQAC initiative.", src: "/images/gallery_new/image14.jpg" },
  { id: 15, category: "campus-events", title: "Faculty, staff and students plant a sapling outside the college as part of world environment day.", src: "/images/gallery_new/image15.jpg" },
  { id: 16, category: "campus-events", title: "Lighting of the lamp marking the KLE Society Founders' Day commemoration.", src: "/images/gallery_new/image16.jpg" },
  { id: 17, category: "campus-events", title: "Students and staff, joined by police personnel, take part in the Voter Awareness Campaign.", src: "/images/gallery_new/image17.jpg" },
  { id: 18, category: "campus-events", title: "The college volleyball team poses with their trophy and medals alongside faculty and dignitaries.", src: "/images/gallery_new/image18.jpg" },
  { id: 19, category: "campus-events", title: "Lamp-lighting ceremony inaugurating the Orientation programme of the PG Department of Commerce.", src: "/images/gallery_new/image19.jpg" },
  { id: 20, category: "campus-events", title: "Dignitaries pay tribute to Mahatma Gandhi and Dr. B. R. Ambedkar at the State Level Quiz Competition organized by the Department of Political Science and NSS.", src: "/images/gallery_new/image20.jpg" }
];

type GalleryImage = typeof galleryImages[number];

function GalleryImageItem({ img, onClick }: { img: GalleryImage; onClick: () => void }) {
  const [imgSrc, setImgSrc] = useState(img.src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden relative">
        <Image
          src={imgSrc}
          alt={img.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className={`object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out ${
            isLoading ? "blur-sm grayscale" : "blur-0 grayscale-0"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc("/images/logo/klescpbanner.jpg");
            setIsLoading(false);
          }}
        />
        
        {/* Hover zoom overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-white/95 text-slate-900 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-brand-maroon animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
            <span>View Full Image</span>
          </div>
        </div>

        {/* Category Badge */}
        <span className={`absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md text-white ${
          img.category === "infrastructure"
            ? "bg-emerald-600/90 border border-emerald-500/30"
            : "bg-brand-maroon/90 border border-brand-maroon/30"
        }`}>
          {img.category === "infrastructure" ? "Infrastructure" : "Campus Event"}
        </span>
      </div>
      
      {/* Caption Content */}
      <div className="p-5 flex flex-col justify-start flex-grow border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
        <p className="text-slate-700 text-sm md:text-[15px] font-semibold leading-relaxed">
          {img.title}
        </p>
      </div>
    </div>
  );
}

export default function PhotoGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "infrastructure" | "campus-events">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Keyboard navigation & scroll locking for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => 
          prev !== null ? (prev + 1) % filteredImages.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => 
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, filteredImages.length]);

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <SubpageLayout
      title="Photo Gallery"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
      navigationStyle="overhead-pill"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-brand-maroon/90 font-bold text-[10px] uppercase tracking-[0.25em] block mb-1">
              Campus Life
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 uppercase tracking-wide">
              Visual Highlights & Campus Memories
            </h2>
          </div>
        </div>

        {/* Categories / Filter Controls */}
        <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-slate-200/70">
          <button
            onClick={() => {
              setActiveFilter("all");
              setLightboxIndex(null);
            }}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activeFilter === "all"
                ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/20"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            <span>All Photos</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeFilter === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
            }`}>
              {galleryImages.length}
            </span>
          </button>
          
          <button
            onClick={() => {
              setActiveFilter("infrastructure");
              setLightboxIndex(null);
            }}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activeFilter === "infrastructure"
                ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/20"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            <span>Infrastructure</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeFilter === "infrastructure" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
            }`}>
              {galleryImages.filter(img => img.category === "infrastructure").length}
            </span>
          </button>
          
          <button
            onClick={() => {
              setActiveFilter("campus-events");
              setLightboxIndex(null);
            }}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activeFilter === "campus-events"
                ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/20"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            <span>Campus Events</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeFilter === "campus-events" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
            }`}>
              {galleryImages.filter(img => img.category === "campus-events").length}
            </span>
          </button>
        </div>

        {/* 2-Column Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {filteredImages.map((img, idx) => (
            <GalleryImageItem key={img.id} img={img} onClick={() => setLightboxIndex(idx)} />
          ))}
        </div>
      </div>

      {/* High-Fidelity Lightbox Modal */}
      {activeImage && lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-slate-950/95 backdrop-blur-md p-4 md:p-8 select-none transition-opacity duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Lightbox Header */}
          <div className="w-full flex items-center justify-between max-w-6xl z-10">
            <div className="flex flex-col text-left">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-1.5 ${
                activeImage.category === "infrastructure"
                  ? "bg-emerald-600/90 text-white"
                  : "bg-brand-maroon/90 text-white"
              }`}>
                {activeImage.category === "infrastructure" ? "Infrastructure" : "Campus Event"}
              </span>
              <span className="text-slate-400 text-xs font-bold tracking-wider">
                Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/10 transition-all duration-150"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Central Viewer */}
          <div className="relative w-full max-w-6xl flex-grow flex items-center justify-center my-4">
            {/* Prev Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
              }}
              className="absolute left-0 md:left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full border border-white/10 transition-all duration-150 backdrop-blur-sm transform hover:scale-105"
              aria-label="Previous photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Lightbox Widescreen Fit Image */}
            <div 
              className="relative max-w-full max-h-[60vh] w-full aspect-[4/3] md:aspect-auto md:h-[60vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain max-h-[60vh] rounded-lg shadow-2xl transition-all duration-300"
                sizes="80vw"
                priority
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
              }}
              className="absolute right-0 md:right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full border border-white/10 transition-all duration-150 backdrop-blur-sm transform hover:scale-105"
              aria-label="Next photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Panel Description */}
          <div 
            className="w-full max-w-4xl text-center z-10 bg-slate-900/60 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-xl mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}
    </SubpageLayout>
  );
}
