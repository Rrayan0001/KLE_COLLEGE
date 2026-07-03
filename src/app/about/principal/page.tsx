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
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profiles/principal.jpg"
              alt="Dr. K. M. Awaradi"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 font-display">
              Dr. K. M. Awaradi
            </h2>
            <p className="text-brand-maroon font-bold text-sm tracking-wide">
              Principal, Shri Channagirishwar Prasadik Arts, Science and D. D. Shirol Commerce College, Mahalingpur
            </p>
            
            <p className="text-slate-600 leading-relaxed text-justify font-semibold">
              Dear Students, Parents, and Well-Wishers,
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              It gives me immense pleasure to welcome you to KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, Mahalingpur, a premier institution committed to providing quality higher education since its establishment in 1987. Guided by the noble vision of the KLE Society, our college has consistently strived to nurture knowledge, character, and excellence while preparing students to meet the challenges of an ever-evolving global society.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              In today&apos;s rapidly changing world, education extends far beyond the boundaries of classrooms. Technological advancements, globalization, and the knowledge-driven economy demand graduates who are academically competent, professionally skilled, socially responsible, and ethically grounded. At our institution, we are dedicated to creating an environment that fosters critical thinking, innovation, creativity, and lifelong learning.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            Our college offers a wide range of undergraduate and postgraduate programmes, including B.A., B.Com., B.Sc., B.C.A., and M.Com., catering to the diverse aspirations of students. We are proud to share that, from the Academic Year 2026–27, the college has introduced Bachelor of Business Administration (B.B.A.) and the Integrated Teacher Education Programme (ITEP), further expanding opportunities for students to pursue quality education aligned with contemporary academic and professional requirements.
          </p>
          <p>
            Affiliated with Bagalkot University, our institution is committed to maintaining high academic standards through an experienced and dedicated faculty, modern learning resources, well-equipped laboratories, digital facilities, and a vibrant campus environment. Alongside academic excellence, we emphasize co-curricular and extracurricular activities, leadership development, community engagement, cultural enrichment, and sports to ensure the holistic development of every student.
          </p>
          <p>
            At KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, we believe that education is a transformative journey that empowers individuals to become responsible citizens, compassionate human beings, and capable professionals. Our mission is to nurture confidence, integrity, discipline, and a spirit of service, enabling our students to contribute meaningfully to society and the nation.
          </p>
          <p>
            I warmly invite aspiring students to become a part of our academic community and experience an atmosphere of learning, innovation, and personal growth. Together, let us continue our pursuit of knowledge, excellence, and values, shaping a brighter future for ourselves and for society.
          </p>
          <p>
            I wish all our students every success in their academic journey and future endeavors.
          </p>
          <p className="pt-4 font-bold text-slate-800">
            With best wishes,<br />
            Dr. K. M. Awaradi<br />
            <span className="text-xs text-slate-500 font-semibold">Principal, KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, Mahalingpur</span>
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
