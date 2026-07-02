import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Admission", href: "/student-corner/admissions" },
  { name: "Student Strength", href: "/student-corner/strength" },
  { name: "Syllabus", href: "/student-corner/syllabus" },
  { name: "Academic Calendar", href: "/student-corner/academic-calendar" },
  { name: "Student Research", href: "/student-corner/student-research", active: true },
  { name: "Student Support Facilities", href: "/student-corner/student-support" },
  { name: "NSS", href: "/student-corner/nss" },
];

const breadcrumbs = [
  { label: "Student Corner", href: "/student-corner/admissions" },
  { label: "Student Research" },
];

const projects = [
  { sl: 1, title: "Historical Places of Karnataka B.A - III Sem", year: "2012", dept: "History – 13" },
  { sl: 2, title: "Historical Places of Karnataka B.A - III Sem", year: "2013", dept: "History" },
  { sl: 3, title: "Historical Places of Maharashtra B.A - V Sem", year: "2013", dept: "History" },
  { sl: 4, title: "Royal Palace of Jamakhandi B.A - IV Sem", year: "2014", dept: "History" },
  { sl: 5, title: "Historical Place of Hanagandi B.A - VI Sem", year: "2014", dept: "History" },
  { sl: 6, title: "Historical Place of Jamakhandi B.A - II Sem", year: "2014", dept: "History" },
  { sl: 7, title: "Historical Place of Jamakhandi B.A - IV Sem", year: "2014", dept: "History" },
  { sl: 8, title: "Jamakhandi Royal Palace B.A - IV Sem", year: "2014", dept: "History" },
  { sl: 9, title: "Historical Places of Vijayapur B.A - II Sem", year: "2014", dept: "History" },
  { sl: 10, title: "Historical Places of Andhra Pradesh B.A - I Sem", year: "2015", dept: "History" },
  { sl: 11, title: "Historical Places of Maharashtra B.A - V Sem", year: "2015", dept: "History" },
  { sl: 12, title: "Historical Places of Karnataka B.A - V Sem", year: "2015", dept: "History" },
  { sl: 13, title: "Historical Places of Maharashtra B.A - IV Sem", year: "2016", dept: "History" },
  { sl: 14, title: "Manufacturing Smokeless Hearth B.A. -VI Sem", year: "2012", dept: "Sociology - 08" },
  { sl: 15, title: "Dairy Farming of Koujalagi B.A. -VI Sem", year: "2012", dept: "Sociology" },
  { sl: 16, title: "Wrestling TaleemGhar of Kolhapur B.A. -VI Sem", year: "2013", dept: "Sociology" },
  { sl: 17, title: "Student Exchange Programme B.A - VI Sem", year: "2014", dept: "Sociology" },
  { sl: 18, title: "A Sociological Study of Basavanadu B.A. III Sem", year: "2015", dept: "Sociology" },
  { sl: 19, title: "Kankanwadi Farm B.A - VI Sem", year: "2015", dept: "Sociology" },
  { sl: 20, title: "Central Prison (Hindalaga Jail), Belagavi B.A - VI Sem", year: "2015", dept: "Sociology" },
  { sl: 21, title: "A Sociological Study of Kanneri Math B.A - VI Sem", year: "2016", dept: "Sociology" },
  { sl: 22, title: "Kolhapur Mahalaxmi Temple B.A - V Sem", year: "2013", dept: "Kannada – 11" },
  { sl: 23, title: "KudalsangamKshetraDharshan B.A - I Sem", year: "2013", dept: "Kannada" },
  { sl: 24, title: "Janapad Museum B.A - I Sem", year: "2013", dept: "Kannada" },
  { sl: 25, title: "Badami B.A - V Sem", year: "2013", dept: "Kannada" },
  { sl: 26, title: "ShivayogiMahaligeshwarSukshetra, Mahalingpur B.A - II Sem", year: "2014", dept: "Kannada" },
  { sl: 27, title: "Kudalsangama B.A - VI Sem", year: "2014", dept: "Kannada" },
  { sl: 28, title: "Shirasangi B.A - IV Sem", year: "2014", dept: "Kannada" },
  { sl: 29, title: "Nandi Devalaya, BasavanBagewadi B.A - III Sem", year: "2014", dept: "Kannada" },
  { sl: 30, title: "Ingleshwar B.A - III Sem", year: "2014", dept: "Kannada" },
  { sl: 31, title: "BasavanaBagewadi B.A - III Sem", year: "2014", dept: "Kannada" },
  { sl: 32, title: "BasavaJanmastala B.A - III Sem", year: "2014", dept: "Kannada" },
  { sl: 33, title: "Kudalsangama B.A - III Sem", year: "2013", dept: "Political Science –07" },
  { sl: 34, title: "High Court of Dharwad B.A - I Sem", year: "2013", dept: "Political Science" },
  { sl: 35, title: "Belagali Gram Panchayat B.A - IV Sem", year: "2014", dept: "Political Science" },
  { sl: 36, title: "Dharwad High Court and SuvarnaSoudha, Belagavi B.A - VI Sem", year: "2014", dept: "Political Science" },
  { sl: 37, title: "A Study of Basav Nadu B.A - III Sem", year: "2015", dept: "Political Science" },
  { sl: 38, title: "Belagavi District Court & KhadiGramadyogaSangh, Hebbal. B.A - VI Sem", year: "2015", dept: "Political Science" },
  { sl: 39, title: "Environmental Places: Yana, Vibhuti Falls & Om Beach B.A - II Sem", year: "2016", dept: "Political Science" },
  { sl: 40, title: "KrishiMela, Dharwad B.A - V Sem", year: "2013", dept: "Economics / Agricultural Marketing – 05" },
  { sl: 41, title: "Quest Global Special Economic Zone, Belagavi B.A - V Sem", year: "2013", dept: "Economics / Agricultural Marketing" },
  { sl: 42, title: "Green Channel Counter in State Bank of India, Mahalingpur B.A - IV Sem", year: "2013", dept: "Economics / Agricultural Marketing" },
  { sl: 43, title: "Big Bazar, Belagavi B.Com. VI Sem", year: "2013", dept: "Economics / Agricultural Marketing" },
  { sl: 44, title: "Economics of Location of Industry: Ramoji Film City, Hyderabad B.Com. VI Sem", year: "2016", dept: "Economics / Agricultural Marketing" },
  { sl: 45, title: "Media Visit Report B.A - III Sem", year: "2013", dept: "Journalism & Mass Communication –06" },
  { sl: 46, title: "Media Visit Report Vijayavani Press, Vijayapur B.A - IV Sem", year: "2014", dept: "Journalism & Mass Communication" },
  { sl: 47, title: "Media Visit Report Bharat Photo Studio, Bagalkot B.A - II Sem", year: "2014", dept: "Journalism & Mass Communication" },
  { sl: 48, title: "Media Visit Report Kannadamma Press, Belagavi B.A - II Sem", year: "2015", dept: "Journalism & Mass Communication" },
  { sl: 49, title: "Media Visit Report Vijayavani Press & Women University, Vijayapur B.A - I Sem", year: "2015", dept: "Journalism & Mass Communication" },
  { sl: 50, title: "Akashavani Kendra & Karnataka University, Dharwad B.A - II & IV Sem", year: "2016", dept: "Journalism & Mass Communication" },
  { sl: 51, title: "Salesmanship B.Com. V Sem", year: "2013", dept: "Commerce – 11" },
  { sl: 52, title: "Big Bazar, Belagavi B.Com. III Sem", year: "2013", dept: "Commerce" },
  { sl: 53, title: "Datta Bazar, Dattanagar B.Com. III Sem", year: "2013", dept: "Commerce" },
  { sl: 54, title: "Time Keeping & Pay Roll B.Com. V Sem", year: "2013", dept: "Commerce" },
  { sl: 55, title: "Material Control & Storage B.Com. V Sem", year: "2013", dept: "Commerce" },
  { sl: 56, title: "Establishment of Milk Dairy B.Com. VI Sem", year: "2014", dept: "Commerce" },
  { sl: 57, title: "D Mart, Kolhapur B.Com. III Sem", year: "2014", dept: "Commerce" },
  { sl: 58, title: "Reliance Mart, Kolhapur B.Com. III Sem", year: "2014", dept: "Commerce" },
  { sl: 59, title: "Buying Behaviour of Consumers towards SSI Products B.Com. V Sem", year: "2015", dept: "Commerce" },
  { sl: 60, title: "Ramoji Film City Hyderabad B.Com. VI Sem", year: "2016", dept: "Commerce" },
  { sl: 61, title: "Metalike Industries Hyderabad B.Com. VI Sem", year: "2016", dept: "Commerce" },
];

export default function StudentResearchPage() {
  return (
    <SubpageLayout
      title="Student Research"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Research & Projects
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Student Research Projects
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-slate-600 leading-relaxed text-sm text-justify">
          <p>
            Our students are encouraged to undertake independent research projects, field studies, and industry visits to bridge the gap between classroom concepts and real-world implementation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm bg-white max-h-[500px] overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 z-10">
              <tr className="bg-brand-maroon text-white text-xs font-bold tracking-wide uppercase">
                <th className="py-3 px-4 w-16">Sl.No</th>
                <th className="py-3 px-4">Title of the Project</th>
                <th className="py-3 px-4 w-20">Year</th>
                <th className="py-3 px-4 w-48">Department</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-4 text-slate-400 font-bold">{row.sl}</td>
                  <td className="py-3 px-4 text-slate-900 font-semibold">{row.title}</td>
                  <td className="py-3 px-4 text-slate-500 font-semibold">{row.year}</td>
                  <td className="py-3 px-4 text-brand-maroon font-bold uppercase text-xs">{row.dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubpageLayout>
  );
}
