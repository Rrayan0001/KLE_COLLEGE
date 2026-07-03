"use client";

import Image from "next/image";
import { useState } from "react";
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
  { id: 1, title: "Alumni Association Programme: Felicitation to a notable alumnus.", src: "/images/gallery_new/image1.jpg" },
  { id: 2, title: "Students donating blood at the Voluntary Blood Donation Camp.", src: "/images/gallery_new/image2.jpg" },
  { id: 3, title: "Dignitaries, faculty and student participants at the National Level Student Seminar, Department of Botany and Zoology.", src: "/images/gallery_new/image3.jpg" },
  { id: 4, title: "NSS, YRC volunteers and District Government Hospital officials plant a sapling to inaugurate the Health Awareness and Blood Donation Camp.", src: "/images/gallery_new/image4.jpg" },
  { id: 5, title: "Faculty and staff members pay floral tribute to Savitribai Phule portrait on her birth anniversary", src: "/images/gallery_new/image5.jpg" },
  { id: 6, title: "Students perform a traditional folk dance on stage.", src: "/images/gallery_new/image6.jpg" },
  { id: 7, title: "Chief guest felicitated with a memento at the One-Day Workshop on Modern British Literature and Postcolonial Studies, organized by the Department of English.", src: "/images/gallery_new/image7.jpg" },
  { id: 8, title: "Dignitaries water a sapling to inaugurate the Research Methodology workshop, held jointly with Bagalkot University.", src: "/images/gallery_new/image8.jpg" },
  { id: 9, title: "Guests and local residents jointly inaugurate an evening program of NSS", src: "/images/gallery_new/image9.jpg" },
  { id: 10, title: "Certificates being distributed to student participants at the National Level Seminar, Department of Botany and Zoology.", src: "/images/gallery_new/image10.jpg" },
  { id: 11, title: "Students in traditional attire perform a mythological dance drama on stage.", src: "/images/gallery_new/image11.jpg" },
  { id: 12, title: "Students take part in a running race on the college grounds during the sports meet.", src: "/images/gallery_new/image12.jpg" },
  { id: 13, title: "Chief Medical officer addresses the gathering at the inaugural session of the Health Awareness and Blood Donation Camp.", src: "/images/gallery_new/image13.jpg" },
  { id: 14, title: "Dignitaries water a plant during a Women's Empowerment programme, an IQAC initiative.", src: "/images/gallery_new/image14.jpg" },
  { id: 15, title: "Faculty, staff and students plant a sapling outside the college as part of world environment day.", src: "/images/gallery_new/image15.jpg" },
  { id: 16, title: "Lighting of the lamp marking the KLE Society Founders' Day commemoration.", src: "/images/gallery_new/image16.jpg" },
  { id: 17, title: "Students and staff, joined by police personnel, take part in the Voter Awareness Campaign.", src: "/images/gallery_new/image17.jpg" },
  { id: 18, title: "The college volleyball team poses with their trophy and medals alongside faculty and dignitaries.", src: "/images/gallery_new/image18.jpg" },
  { id: 19, title: "Lamp-lighting ceremony inaugurating the Orientation programme of the PG Department of Commerce.", src: "/images/gallery_new/image19.jpg" },
  { id: 20, title: "Dignitaries pay tribute to Mahatma Gandhi and Dr. B. R. Ambedkar at the State Level Quiz Competition organized by the Department of Political Science and NSS.", src: "/images/gallery_new/image20.jpg" }
];

function GalleryImageItem({ img }: { img: typeof galleryImages[number] }) {
  const [imgSrc, setImgSrc] = useState(img.src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col">
      <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
        <Image
          src={imgSrc}
          alt={img.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover hover:scale-105 transition-all duration-300 ${
            isLoading ? "blur-sm grayscale" : "blur-0 grayscale-0"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc("/images/logo/klescpbanner.jpg");
            setIsLoading(false);
          }}
        />
      </div>
      <div className="p-4 border-t border-slate-50 min-h-[5.5rem] flex flex-col justify-center flex-grow">
        <h4 className="font-bold text-slate-800 text-xs md:text-sm leading-snug line-clamp-3">
          {img.title}
        </h4>
      </div>
    </div>
  );
}

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
            <GalleryImageItem key={idx} img={img} />
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
