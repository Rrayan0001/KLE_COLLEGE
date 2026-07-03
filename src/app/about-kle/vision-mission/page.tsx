import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history" },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "Vision & Mission", href: "/about-kle/vision-mission", active: true },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "Vision & Mission" },
];

export default function VisionMissionPage() {
  const missionItems = [
    "To propagate, support, and champion the cause of “Excellence through Education” for aspirants across the globe.",
    "To recruit and groom well-qualified, well-trained, and efficient human resources committed to the accomplishment of individual and organizational excellence through continual learning.",
    "To create infrastructure and state-of-the-art educational facilities and provide opportunities for school, collegiate, technical, and professional education, especially for students in rural India.",
    "To provide state-of-the-art healthcare facilities and services to people in both urban and rural areas.",
    "To contribute to the welfare of the farming community in urban and rural areas by facilitating education, the adoption of technology, and modern farming and farm management practices.",
    "To set, develop, and maintain high standards for quality education in existing KLE institutions through ‘best-in-domain’ work systems and methods.",
    "To constantly display sensitivity and respond to changing educational, social, and community demands.",
    "To supplement conventional education with real-time exposure and experiential learning and groom technically well-versed, morally committed, and ethically strong professionals.",
    "To develop an entrepreneurial ecosystem that nurtures creativity and innovation and to integrate the same with existing professional academic courses in order to promote regional enterprise as a precursor to economic development.",
    "To facilitate the landscaping of the learning environment to enable “21st Century Learning” and to maintain clean and green campuses with a pollution-free environment and eco-friendly surroundings.",
    "To undertake the development of society at large and motivate individuals to be socially responsible, productive, and useful citizens of the globalised world.",
    "To impart the spirit of inquiry, promote scientific temperament, and encourage research with the aid of state-of-the-art equipment, methods, and infrastructure as an essential part of professional learning in basic sciences, healthcare, engineering, creative arts and humanities, management, and commerce."
  ];

  return (
    <SubpageLayout
      title="Vision & Mission"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Karnatak Lingayat Education Society
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Vision & Mission Statements
          </h2>
        </div>

        {/* Vision Box */}
        <div className="bg-brand-maroon text-white p-8 rounded-2xl shadow-md border-b-4 border-brand-yellow space-y-4">
          <h3 className="font-extrabold text-brand-yellow uppercase tracking-widest text-sm">
            Our Vision
          </h3>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            &quot;To continually evolve as an organisation symbolising global excellence in standards and commitments in the domains of quality education, healthcare, and research, while at the same time adopting, nurturing, and propagating democratic values, charitable virtues, and a philanthropic culture.&quot;
          </p>
        </div>

        {/* Mission Box */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Our Mission
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {missionItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-brand-maroon/20 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-650 text-sm font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
