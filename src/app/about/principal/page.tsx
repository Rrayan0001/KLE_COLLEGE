import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal", active: true },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Our Principal" },
];

export default function PrincipalPage() {
  return (
    <SubpageLayout
      title="Our Principal"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Principal Image Container */}
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-maroon/10 p-1 bg-white shrink-0">
            <div className="rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/Shri_N_B_Patil.png"
                alt="Shri N. B. Patil"
                className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300 animate-[pulse_4s_infinite]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block">
                College Leadership
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 font-display">
                Shri. N. B. Patil
              </h2>
              <p className="text-brand-maroon font-bold text-sm tracking-wide">
                Principal, KLE SCPDDS College, Mahalingpur
              </p>
            </div>
            
            <p className="text-slate-800 font-semibold text-sm leading-relaxed border-l-4 border-brand-yellow pl-4 italic py-1 bg-slate-50/50 pr-4">
              Dear Students, Parents, and Well-Wishers,
            </p>

            <p className="text-slate-650 leading-relaxed text-justify text-sm md:text-base">
              It gives me immense pleasure to welcome you to KLE SCPDDS College, Mahalingpur, and to the official website of our esteemed institution. It is a privilege to connect with students, parents, alumni, and visitors through this platform, which reflects our commitment to academic excellence, holistic development, and the values that define our college, a premier institution committed to providing quality higher education since its establishment in 1987. Guided by the noble vision of the KLE Society, our college has consistently strived to nurture knowledge, character, and excellence while preparing students to meet the challenges of an ever-evolving global society.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-650 leading-relaxed text-justify text-sm md:text-base">
          <p>
            Our college offers a wide range of undergraduate and postgraduate programmes, including B.A., B.Com., B.Sc., B.C.A., and M.Com., catering to the diverse aspirations of students. We are proud to share that, from the Academic Year 2026–27, the college has introduced Bachelor of Business Administration (B.B.A.) and the Integrated Teacher Education Programme (ITEP), further expanding opportunities for students to pursue quality education aligned with contemporary academic and professional requirements.
          </p>
          <p>
            Affiliated with Bagalkot University, our institution is committed to maintaining high academic standards through an experienced and dedicated faculty, modern learning resources, well-equipped laboratories, digital facilities, and a vibrant campus environment. Alongside academic excellence, we emphasize co-curricular and extracurricular activities, leadership development, community engagement, cultural enrichment, and sports to ensure the holistic development of every student.
          </p>
          <p>
            At KLE Society's SCP Arts, Science and D. D. Shirol Commerce College, we believe that education is a transformative journey that empowers individuals to become responsible citizens, compassionate human beings, and capable professionals. Our mission is to nurture confidence, integrity, discipline, and a spirit of service, enabling our students to contribute meaningfully to society and the nation.
          </p>
          <p>
            I warmly invite aspiring students to become a part of our academic community and experience an atmosphere of learning, innovation, and personal growth. Together, let us continue our pursuit of knowledge, excellence, and values, shaping a brighter future for ourselves and for society.
          </p>
          <p>
            I wish all our students every success in their academic journey and future endeavors.
          </p>

          {/* Principal Closing Signature */}
          <div className="pt-6 border-t border-slate-100 text-slate-800">
            <p className="font-bold text-slate-600 mb-2">With best wishes,</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Principal</p>
            <p className="font-black text-brand-maroon text-lg">Shri. N. B. Patil</p>
            <p className="text-xs text-slate-500 font-semibold leading-tight">
              KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, Mahalingpur
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
