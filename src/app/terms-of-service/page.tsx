import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Terms of Service" },
];

export default function TermsOfServicePage() {
  return (
    <SubpageLayout
      title="Terms of Service"
      breadcrumbs={breadcrumbs}
      sidebarLinks={[]}
    >
      <div className="space-y-8 text-slate-650 leading-relaxed text-justify text-sm md:text-base max-w-4xl">
        <p className="text-slate-500 text-xs italic">Last Updated: July 2026</p>
        
        <p>
          Welcome to the official website of KLE Society&apos;s SCP Arts, Science and D. D. Shirol Commerce College, Mahalingpur. By accessing and using this website, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            1. Acceptance of Terms
          </h3>
          <p>
            These Terms govern your use of all content, features, portals, and services provided on the college website. We reserve the right to amend these Terms at any time without prior notice. Continued use of the site constitutes acceptance of any updates.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            2. Intellectual Property Rights
          </h3>
          <p>
            All content on this website—including text, graphics, logos, images, documents, software, and audio/video materials—is the property of the college or KLE Society and is protected by copyright, trademark, and other intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            3. Permitted Use
          </h3>
          <p>
            This website is provided for informational and educational purposes. You agree to use the site only for lawful purposes. You are prohibited from using this site to transmit any harmful code, post defamatory material, attempt unauthorized access (hacking), or interfere with the site&apos;s performance.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            4. User Portals and Accounts
          </h3>
          <p>
            Certain sections of the site or portals may require registration or authentication. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. The college reserves the right to suspend or terminate accounts that violate academic conduct or site policies.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            5. Disclaimer of Warranties
          </h3>
          <p>
            While we strive to keep information accurate and up to date, the content on this website is provided &quot;as is&quot; without warranties of any kind. The college does not guarantee that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            6. Limitation of Liability
          </h3>
          <p>
            In no event shall the college or KLE Society be liable for any direct, indirect, incidental, or consequential damages arising out of your use of or inability to use this website, even if advised of the possibility of such damages.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            7. Governing Law
          </h3>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bagalkot/Belagavi, Karnataka.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
