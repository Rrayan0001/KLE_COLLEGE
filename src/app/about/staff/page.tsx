import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "About College", href: "/about" },
  { name: "Donor of SPDDS", href: "/about/donors" },
  { name: "Vision & Mission", href: "/about/vision" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Our Staff", href: "/about/staff", active: true },
  { name: "Achievements", href: "/about/achievements" },
];

const breadcrumbs = [
  { label: "About Us", href: "/about" },
  { label: "Our Staff" },
];

const staffList = [
  // UG Teaching Staff
  { sl: 1, name: "Dr. K. M. Awaradi", dept: "Economics", role: "Principal", cat: "UG Teaching Staff" },
  { sl: 2, name: "Dr. S. D. Soraganvi", dept: "Economics & Agricultural Marketing", role: "Associate Professor", cat: "UG Teaching Staff" },
  { sl: 3, name: "Shri. A. M. Ugare", dept: "Political Science", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 4, name: "Smt. J. R. Patil", dept: "Chemistry", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 5, name: "Shri C. M. Aigali", dept: "English", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 6, name: "Dr. S. S. Koli", dept: "Kannada", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 7, name: "Miss S. T. Diwanji", dept: "Mathematics", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 8, name: "Miss. C. M. Gennur", dept: "Zoology", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 9, name: "Shri T. D. Dangi", dept: "History", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 10, name: "Smt D. A. Naik", dept: "Chemistry", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 11, name: "Shri. P. M. Gouli", dept: "Hindi", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 12, name: "Shri. S. S. Mugalyal", dept: "Botany", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 13, name: "Shri. I. C. Shirol", dept: "Kannada", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 14, name: "Smt. R. M. Kakade", dept: "Commerce", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 15, name: "Dr. S. C. Bijjaragi", dept: "Zoology", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 16, name: "Shri. K. S. Patil", dept: "English", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 17, name: "Shri R. V. Chougala", dept: "Journalism & Mass Communication", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 18, name: "Smt. S. I. Hosurmath", dept: "Economics", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 19, name: "Shri. S. I. Patil", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 20, name: "Miss. P. S. Managanvi", dept: "Commerce", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 21, name: "Shri. M. B. Dharigoudra", dept: "Commerce", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 22, name: "Shri. A. R. Urabi", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 23, name: "Shri. P. T. Athani", dept: "English", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 24, name: "Shri P. S. Hipparagi", dept: "Physical Education", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 25, name: "Smt P. M. Mutnali", dept: "Sociology", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 26, name: "Shri V. T. Badiger", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 27, name: "Ms. S. S. Kamagond", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 28, name: "Shri S. A. Patil", dept: "Physics", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 29, name: "Ms. A. I. Latti", dept: "Commerce", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 30, name: "Ms. S. A. Savadi", dept: "Physics", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 31, name: "Ms. D. A. Ammanagi", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 32, name: "Smt. Akshataka Hanamangond", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 33, name: "Ms. J. S. Horatti", dept: "Kannada", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 34, name: "Smt. S. M. Kalamalgi", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 35, name: "Shri Y. M. Dyamannavar", dept: "Political Science", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 36, name: "Shri N. L. Hipparagi", dept: "History", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 37, name: "Ms. A. V. Kulakarni", dept: "Chemistry", role: "Lecturer (Part time)", cat: "UG Teaching Staff" },
  { sl: 38, name: "Shri Shirish Halemani", dept: "BBA", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 39, name: "Shri R. M. Uppara", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 40, name: "Ms. R. M. Bandigani", dept: "Bachelor of Computer Application", role: "Lecturer", cat: "UG Teaching Staff" },
  { sl: 41, name: "Ms. A. B. Kadahatti", dept: "BBA", role: "Lecturer", cat: "UG Teaching Staff" },

  // PG Teaching Staff
  { sl: 1, name: "Smt. G. G. Madarakhandi", dept: "PG Dept. of Commerce", role: "Lecturer", cat: "PG Teaching Staff" },
  { sl: 2, name: "Ms. L. S. Hadapad", dept: "PG Dept. of Commerce", role: "Lecturer", cat: "PG Teaching Staff" },

  // Library Staff
  { sl: 1, name: "Shri. P. B. Jabashetti", dept: "Library", role: "Library Assistant", cat: "Library Staff" },

  // Non-Teaching Staff
  { sl: 1, name: "Shri. M. B. Patil", dept: "Academic Office", role: "Office Superintendent", cat: "Non-Teaching Staff" },
  { sl: 2, name: "Shri. D. S. Kumbar", dept: "Academic Office", role: "SDA/Typist", cat: "Non-Teaching Staff" },
  { sl: 3, name: "Smt. R. D. Bhosale", dept: "Academic Office", role: "FDA", cat: "Non-Teaching Staff" },
  { sl: 4, name: "Shri R. S. Jatti", dept: "Academic Office", role: "Accountant", cat: "Non-Teaching Staff" },
  { sl: 5, name: "Shri. B. M. Bandi", dept: "Academic Office", role: "SDA", cat: "Non-Teaching Staff" },
  { sl: 6, name: "Shri K. S. Jadar", dept: "Bachelor of Computer Application", role: "Lab Instructor", cat: "Non-Teaching Staff" },
  { sl: 7, name: "Smt. S. N. Galagali", dept: "Bachelor of Computer Application", role: "Office Assistant", cat: "Non-Teaching Staff" },
  { sl: 8, name: "Shri. B. D. Konnur", dept: "Bachelor of Computer Application", role: "Asst. Accountant", cat: "Non-Teaching Staff" },
  { sl: 9, name: "Shri. D. S. Aneppagol", dept: "Academic Office", role: "Attender", cat: "Non-Teaching Staff" },

  // Menial Staff
  { sl: 1, name: "Shri. P. M. Kanti", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
  { sl: 2, name: "Smt. C. K. Kamat", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
  { sl: 3, name: "Smt. R. S. Dombar", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
  { sl: 4, name: "Shri. Bhimappa", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
  { sl: 5, name: "Shri. S. R. Sagari", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
  { sl: 6, name: "Shri. H. S. Davaskar", dept: "Support Services", role: "Menial Staff", cat: "Menial Staff" },
];

export default function StaffPage() {
  const categories = ["UG Teaching Staff", "PG Teaching Staff", "Library Staff", "Non-Teaching Staff", "Menial Staff"];

  return (
    <SubpageLayout
      title="Our Staff"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            KLE Society&apos;s SCP College, Mahalingpur
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Faculty & Staff Directory
          </h2>
        </div>

        {categories.map((cat, idx) => {
          const list = staffList.filter((s) => s.cat === cat);
          return (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-brand-maroon uppercase tracking-wider border-b-2 border-brand-yellow pb-1.5 w-max">
                {cat}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-maroon/5 text-brand-maroon text-xs md:text-sm font-bold tracking-wide uppercase border-b border-slate-100">
                      <th className="py-4 px-6 w-20">Sl.No</th>
                      <th className="py-4 px-6">Name</th>
                      <th className="py-4 px-6">Department</th>
                      <th className="py-4 px-6">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((member, sIdx) => (
                      <tr
                        key={sIdx}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                      >
                        <td className="py-4 px-6 text-slate-400 font-bold">{member.sl}.</td>
                        <td className="py-4 px-6 text-slate-900 font-semibold">{member.name}</td>
                        <td className="py-4 px-6 text-slate-600">{member.dept}</td>
                        <td className="py-4 px-6 text-slate-600">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-maroon/5 text-brand-maroon">
                            {member.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </SubpageLayout>
  );
}
