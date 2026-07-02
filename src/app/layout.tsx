import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLE Society's SCP Arts, Science & D. D. Shirol Commerce College, Mahalingpur",
  description: "KLE Society's SCP Arts, Science & D. D. Shirol Commerce College, Mahalingpur — shaping futures since 1987. Programs: B.A., B.Sc., B.Com., BCA, M.Com. Admissions, faculty, and campus life.",
  keywords: ["KLE Society", "SCP College", "Mahalingpur College", "Degree College Karnataka", "B.A", "B.Sc", "B.Com", "BCA", "M.Com", "ITEP"],
  authors: [{ name: "KLE Society" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900" suppressHydrationWarning>
        {/* Skip to Content accessibility link */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-college-gold focus:text-college-dark focus:px-4 focus:py-2.5 focus:rounded focus:font-bold focus:shadow-md"
        >
          Skip to content
        </a>
        
        <Navbar />
        
        <main id="main" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
