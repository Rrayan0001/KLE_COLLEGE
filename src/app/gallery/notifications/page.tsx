import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const sidebarLinks = [
  { name: "Photo Gallery", href: "/gallery/photo-gallery" },
  { name: "Seminar & Conferences", href: "/gallery/seminars" },
  { name: "Notifications", href: "/gallery/notifications", active: true },
];

const breadcrumbs = [
  { label: "Media", href: "/gallery/photo-gallery" },
  { label: "Notifications" },
];

const notifications = [
  { date: "June 25, 2024", title: "Admissions open for BA, BSc, BCom, BCA and MCom courses for academic year 2024-25", doc: "/student-corner/admissions" },
  { date: "May 10, 2024", title: "Official Academic Calendar of Events for 2023-2024 released", doc: "/SCPDDSFiles/1. Academic Calendar.pdf" },
  { date: "May 08, 2020", title: "Important awareness program regarding Yoga during lockdown", doc: "/SCPDDSFiles/YOGA Awaraness 8th May 2020.pdf" },
];

export default function NotificationsPage() {
  return (
    <SubpageLayout
      title="Notifications"
      breadcrumbs={breadcrumbs}
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div>
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
            Announcements
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-wide">
            Latest Circulars & Notifications
          </h2>
        </div>

        <div className="space-y-4">
          {notifications.map((notif, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-brand-maroon/20 hover:shadow-md transition duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-maroon uppercase tracking-wider bg-brand-maroon/5 px-2.5 py-1 rounded">
                  {notif.date}
                </span>
                <p className="text-slate-850 font-bold text-sm md:text-base pt-1">
                  {notif.title}
                </p>
              </div>
              <a
                href={notif.doc}
                target={notif.doc.endsWith(".pdf") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-maroon bg-slate-50 border border-slate-150 px-4 py-2 rounded-lg hover:bg-brand-maroon hover:text-white hover:border-brand-maroon transition shrink-0 uppercase tracking-wide"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
