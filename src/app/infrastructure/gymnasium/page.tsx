import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Office", href: "/infrastructure/office" },
  { name: "Support Facilities", href: "/infrastructure/support-facilities" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Hostel", href: "/infrastructure/hostel" },
  { name: "Classrooms", href: "/infrastructure/classrooms" },
  { name: "Multi-Purpose Gymnasium", href: "/infrastructure/gymnasium", active: true },
  { name: "Labs", href: "/infrastructure/labs" },
];

const breadcrumbs = [
  { label: "Infrastructure", href: "/infrastructure/office" },
  { label: "Multi-Purpose Gymnasium" },
];

const gymEquipment = [
  { name: "16-Station Multi-Gym Block", desc: "Allows multiple students to perform muscle toning and resistance training exercises simultaneously." },
  { name: "Treadmill & Cardio Zone", desc: "Provides cardiorespiratory training resources to students and athletes." },
  { name: "Spin Bikes (Cardio)", desc: "Two high-quality commercial spin bikes for cardiovascular conditioning." },
  { name: "Steel & Rubber Dumbbell Sets", desc: "10 sets of professional steel dumbbells and 4 sets of iron dumbbells with customizable rubber plates." },
  { name: "Olympic Bar & Weight Plates", desc: "Weightlifting barbells, T-bars, and various weight plates for strength development." },
  { name: "Wooden Flooring Stadium Setup", desc: "High-grade wooden floor stadium designed for optimal shock absorption and student joint safety." }
];

export default function GymnasiumPage() {
  return (
    <SubpageLayout
      title="Multi-Purpose Gymnasium"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Sports & Fitness Facilities
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Multi-Purpose Gymnasium & Indoor Stadium
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            To cultivate a vibrant sports culture and encourage physical fitness among our students, the college features a state-of-the-art <strong>Multi-Purpose Gymnasium and Indoor Stadium</strong>. Spread over a wide layout, this facility offers various training machines and equipment for strength, weight training, and cardiovascular fitness.
          </p>
          <p>
            The construction of this facility was completed with a significant investment of <strong>₹1.57 Crores</strong>, primarily contributed by the college management to provide national-level training resources locally.
          </p>
        </div>

        {/* Stadium details card */}
        <div className="bg-gradient-to-r from-brand-maroon to-[#5e1c2b] text-white p-6 md:p-8 rounded-2xl shadow-md space-y-4">
          <h3 className="text-lg font-bold text-brand-yellow uppercase tracking-wide">
            Indoor Stadium Features
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            The gymnasium is part of the broader Indoor Sports Complex. It features a premium wooden floor designed specifically for heavy workouts and indoor sports. The complex serves as the training ground for our inter-collegiate athletes, and houses courts and provisions for games including:
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-white/10 rounded-xl border border-white/5 font-semibold text-xs md:text-sm">
              🏸 Badminton
            </div>
            <div className="p-3 bg-white/10 rounded-xl border border-white/5 font-semibold text-xs md:text-sm">
              🏓 Table Tennis
            </div>
            <div className="p-3 bg-white/10 rounded-xl border border-white/5 font-semibold text-xs md:text-sm">
              ♟️ Chess & Carrom
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Gymnasium Equipment & Inventory
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gymEquipment.map((eq, idx) => (
              <div 
                key={idx} 
                className="p-5 border border-slate-100 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200"
              >
                <h4 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                  <span className="text-brand-maroon text-xs">◆</span> {eq.name}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                  {eq.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership info */}
        <div className="border border-slate-200 p-6 rounded-xl text-center space-y-2 bg-slate-50">
          <h4 className="font-bold text-slate-800 uppercase text-xs md:text-sm tracking-wider">
            Gymnasium Access & Hours
          </h4>
          <p className="text-slate-500 text-xs md:text-sm">
            The gymnasium is open to all regular students and staff of the college free of charge. Separate workout batches are allocated for boys, girls, and staff members under the supervision of our Physical Education Director.
          </p>
          <p className="text-xs text-slate-400 font-semibold mt-2">
            Timings: Morning (6:00 AM - 9:00 AM) & Evening (4:00 PM - 6:30 PM)
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
