import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "About College — SCP Arts, Science & D. D. Shirol Commerce College",
  description: "Learn about the history, vision, mission, infrastructure, and core values of SCP College, Mahalingpur.",
};

const sidebarLinks = [
  { name: "About College", href: "/about", active: true },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Our Staff", href: "/about/staff" },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "About College" },
];

export default function AboutCollegePage() {
  return (
    <SubpageLayout
      title="About College"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8 text-slate-600 leading-relaxed text-justify">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about_us/image.png"
              alt="KLE SCP College Mahalingpur Building"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <p>
              It is a temple of learning established in 1987 with a vision to create a system that binds everyone and brings transformation in the quality of students&apos; lives by the great visionaries of Mahalingpur. The institution was earlier run by the local Society by name SCVV Trust. The name was SCVV Trust Fund&apos;s SCP Arts and Commerce College.
            </p>
            <p>
              Dr. D. D. Shirol, a leading physician of Mahalingpur, donated a handsome amount of money to the Society and then the Commerce stream was named after him and the name of the College was changed to SCVV Trust Fund&apos;s SCP Arts and DDS Commerce College. In the year 2008, our College was merged with the globally reputed and centenary old yet dynamic KLE Society, Belagavi.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4">
          <p>
            Since then, we are in the KLE family. The College grew from strength to strength and various subjects have been introduced to cater to the educational needs of learners of the region. The campus is spread over an area of 11 acres. It is an amalgamation of modern infrastructure with stylish, classic, and modern architecture which makes the setting perfect for a free mind to absorb knowledge.
          </p>
          <p>
            Our College has been imparting quality education to the rural youth in Arts, Commerce, and Science streams. We are proud that during the 2016-17 academic year, we introduced the B.Sc. programme as well. The main building has 21 classrooms, staff common room, room for lady students, office unit, NSS unit, Healthcare Unit, and Youth Red Cross Wing. The College has 5 well-equipped labs. Adjacent to the main building, the Library and Gymkhana are located in separate buildings in the campus. The College has provided a separate building for the Canteen. The girls have separate hostel facility. The library has more than 23,000 volumes on its shelves with a well-ventilated separate reading room for students and staff.
          </p>
          <p>
            The College was granted permanent affiliation on 25th August 2000 by Karnatak University, Dharwad. Now the College is affiliated to Rani Channamma University, Belagavi. The College has recognition of UGC and is included in the list maintained under 2(f) and eligible to receive central grants under 12(B) of the UGC Act, 1956.
          </p>
          <p>
            Every teacher has got a deep concern for all-round development of students&apos; personality. The College has been endeavoring to upgrade the rural talent to the urban competency level. All of our teachers are research-oriented. The college is actively involved in research and extension activities. The institution&apos;s efforts are directed to achieve competence and creativity among students and teachers through innovations in teaching-learning, research and extension activities, women empowerment, and optimum use of human resources and infrastructural facilities.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
