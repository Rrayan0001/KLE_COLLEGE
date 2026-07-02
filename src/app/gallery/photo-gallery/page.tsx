"use client";

import React from "react";
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
  { title: "Admissions Block", src: "/images/admi.jpg" },
  { title: "Classrooms Block", src: "/images/class.jpg" },
  { title: "Sports & Cultural Meet", src: "/images/gal13 - Copy.jpg" },
  { title: "College Library Reference Room", src: "/images/lib2 - Copy.jpg" },
  { title: "Central Library Stack Area", src: "/images/lib3 - Copy.jpg" },
  { title: "Science Laboratory", src: "/images/lab.jpg" },
  { title: "Ladies Hostel Block", src: "/images/hostel.jpg" },
  { title: "Campus Activity 1", src: "/images/g7.jpg" },
  { title: "Campus Activity 2", src: "/images/g8.jpg" },
  { title: "Campus Activity 3", src: "/images/g9.jpg" },
];

export default function PhotoGalleryPage() {
  return (
    <SubpageLayout
      title="Photo Gallery"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Campus Life
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Visual Highlights & Campus Memories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "/images/logo/klescpbanner.jpg";
                  }}
                />
              </div>
              <div className="p-4 border-t border-slate-50">
                <h4 className="font-bold text-slate-850 text-xs md:text-sm uppercase tracking-wide truncate">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
