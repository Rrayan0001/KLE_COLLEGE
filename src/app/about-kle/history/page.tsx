import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "History", href: "/about-kle/history", active: true },
  { name: "Emblem", href: "/about-kle/emblem" },
  { name: "Vision & Mission", href: "/about-kle/vision-mission" },
  { name: "Founders", href: "/about-kle/founders" },
  { name: "Board of Management", href: "/about-kle/board-management" },
  { name: "Chairman's Message", href: "/about-kle/chairman-message" },
  { name: "Local Governing Body", href: "/about-kle/lgb" },
];

const breadcrumbs = [
  { label: "About KLE", href: "/about-kle/history" },
  { label: "KLE History" },
];

export default function HistoryPage() {
  return (
    <SubpageLayout
      title="KLE History"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_section/slide.png"
              alt="KLE History Centenary banner"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
              History of the KLE Society
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              Learning is an exciting journey, guided by dedicated educators who bring knowledge to life — and this belief has shaped KLE since the very beginning. Founded in 1916 in Belagavi by seven visionary teachers known as the &quot;Saptarishis,&quot; KLE Society was born from a simple but powerful conviction: that education was the surest path to a community&apos;s material, intellectual, and spiritual growth.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-600 leading-relaxed text-justify">
          <p>
            What began as a single Anglo-Vernacular School has, over more than a century, grown into one of India&apos;s most respected educational institutions, spanning schools, colleges, and universities across disciplines as varied as medicine, engineering, dentistry, nursing, agriculture, and business.
          </p>
          <p>
            For over 40 years, KLE has flourished under the leadership of **Dr. Prabhakar Kore**, whose vision has carried the institution from a regional network of colleges into a globally recognized center of learning, healthcare, and research. Under his guidance, KLE has continually expanded its reach — establishing its own university for health sciences, elevating its flagship engineering college to university status, and building a network of hospitals that serve hundreds of thousands of patients each year.
          </p>
          <p>
            KLE&apos;s global standing has been further elevated through collaborations with universities in the US, UK, and Malaysia, bringing international perspectives and opportunities to its students while opening doors for cross-border research and exchange. These partnerships reflect KLE&apos;s commitment to staying connected with the best educational practices from around the world, even as it stays rooted in the values of its founders.
          </p>
          
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl md:p-8 space-y-4 my-6">
            <h3 className="font-extrabold text-brand-maroon uppercase tracking-wide text-sm">
              The Board of Management&apos;s Commitment
            </h3>
            <p className="text-sm">
              The KLE Society, a renowned charitable trust, is guided by a strong and visionary Board of Management that upholds its legacy of service and excellence. Elected every five years through a democratic process, the board reflects transparency, accountability, and collective responsibility. With leaders drawn from diverse professional backgrounds, the management ensures that the Society’s vast network of institutions is managed with efficiency, Vision, and integrity. Operating in a structured and professional manner, the Board of Management not only Upholds the Society’s values but also drives its growth, ensuring quality education and social service keeping at the heart of its mission.
            </p>
          </div>

          <p>
            Today, KLE is home to more than **1,48,000 students** and over **18,000 faculty and staff**, a testament to the scale and trust the institution has built over the decades. From its humble beginnings in a rented bungalow in Belagavi to its present-day standing as a globally renowned educational institution, KLE&apos;s journey remains guided by the same founding spirit: that education, delivered with dedication and care, has the power to transform lives.
          </p>

          <p>
            With poignant desires, fertile imagination, and a mission to fulfill, the founder life-members started on the 13th day of November 1916 the Anglo Vernacular School in a rented building in the fort area of Belagavi, which heralded the beginning of the Karnatak Lingayat Education Society.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
