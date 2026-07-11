import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <SubpageLayout
      title="Privacy Policy"
      breadcrumbs={breadcrumbs}
      sidebarLinks={[]}
    >
      <div className="space-y-8 text-slate-650 leading-relaxed text-justify text-sm md:text-base max-w-4xl">
        <p className="text-slate-500 text-xs italic">Last Updated: July 2026</p>
        
        <p>
          At KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, Mahalingpur, we value and respect the privacy of our students, faculty, staff, alumni, and website visitors. This Privacy Policy describes how we collect, use, and protect your personal information when you interact with our website and online portals.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            1. Information We Collect
          </h3>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, academic records, and other details when you fill out contact forms, application portals, or online queries. We also collect automatic technical data (e.g., IP address, browser type) to improve site performance and security.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            2. How We Use Your Information
          </h3>
          <p>
            The collected information is used to facilitate admissions, provide academic services, respond to your inquiries, send important institutional notices, and maintain the general administration and security of the college web resources.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            3. Information Sharing and Disclosure
          </h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share necessary information with affiliated government agencies, accreditation boards (such as NAAC/NCTE), and Bagalkot University as required for statutory compliances, examinations, and official academic processes.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            4. Data Security
          </h3>
          <p>
            We implement appropriate administrative, physical, and technical security measures to safeguard your personal data from unauthorized access, alteration, disclosure, or destruction. However, no transmission over the internet can be guaranteed as completely secure.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            5. Cookies and Tracking
          </h3>
          <p>
            Our website may use cookies to improve user experience, track visitor usage patterns, and compile aggregate data about site traffic. You can choose to disable cookies through your browser settings, though some features of the website may not function properly as a result.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            6. Changes to This Policy
          </h3>
          <p>
            The college administration reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            7. Contact Us
          </h3>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please contact our administrative office at:
            <br />
            <strong>Email:</strong> scpdgcol@gmail.com
            <br />
            <strong>Phone:</strong> 08350-270235
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
