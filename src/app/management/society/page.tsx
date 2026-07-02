import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "KLE History", href: "/management/history" },
  { name: "KLE Society", href: "/management/society", active: true },
  { name: "Chairman's Message", href: "/management/chairman" },
  { name: "Board Members", href: "/management/boardmembers" },
  { name: "Local Governing Body", href: "/management/lgb" },
];

const breadcrumbs = [
  { label: "Management", href: "/management/history" },
  { label: "KLE Society" },
];

export default function KLESocietyPage() {
  return (
    <SubpageLayout
      title="KLE Society"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/society.jpg"
              alt="KLE Society Logo"
              className="w-full h-auto object-cover max-h-72"
            />
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-justify">
              In the year 1916, seven dedicated great teachers with a humble effort established the now globally recognized iconic KLE Society, to provide basic education to the economically and educationally deprived knowledge seekers of the northern part of Karnataka. The KLE family worships these noble souls as the &apos;SAPTARSHIS&apos; which means the &apos;Seven Sages&apos;.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              Since then, the Society has been imparting quality education in every imaginable field of knowledge from KG to PG and research, with more than 250 high profile and quality conscious institutions under the KLE umbrella, with a mission of academic upliftment of people of North Karnataka region and elsewhere also.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            The Society has many records of historical and illustrious milestones in its 100 years long saga. The Society&apos;s horizon has widened with the expansion of institutions at the international level too. At present, more than 250 institutions and 16,000 dedicated faculty under our Banyan-like prestigious Society cater to the needs of approximately 1.25 lakh students.
          </p>
          <p>
            The Society has acquired an international, multifaceted organizational status by imparting quality and value-based education with various courses covering Pre-schooling, Primary and Secondary Education, Arts, Commerce, Basic and Social Sciences, Philosophy, Agricultural Sciences, Business Administration, Engineering and Technology, Tourism, Hotel Management, Nursing, Pharmacy, Medical and Dental Sciences, Indian Systems of Medicine, Health Care, Teacher Training and many others.
          </p>
          <p>
            Apart from many national and international level institutions of great repute, the Society has alliances with prestigious international research institutions of UK, USA, Malaysia, China, and Zimbabwe. Another feather, along with many in the cap of the Society, is that the medical and health science institutions of the Society have been brought under the domain of KLE Academy of Higher Education & Research (KAHER) which is accredited at &apos;A&apos; level by NAAC. The Society also launched the KLE Technological University on the campus of the legendary Engineering and Technology Education, BVB College, Hubballi.
          </p>
          <p>
            The dynamic leadership and farsightedness of our visionary Chairman of the Society, Dr. Prabhakar Kore, MP, deserves the due acknowledgement for all the quantum leaps and spectacular growth the Society has achieved during his tenure since 1984. Under his proficient leadership, institutions of higher education spread across the country have undergone the accreditation process by NAAC, speaking volumes about the quality of education imparted by the institutions of the Society.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
