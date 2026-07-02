"use client";

import React, { useState, useEffect, useCallback } from "react";

export default function WelcomeAnimation() {
  const [phase, setPhase] = useState(0); // 0=logo, 1=name, 2=tagline, 3=unmask, 4=done
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show once per session
    if (typeof window !== "undefined") {
      const hasPlayed = sessionStorage.getItem("kle-welcome-played");
      if (hasPlayed) {
        setVisible(false);
        return;
      }
    }

    // Phase sequence timings
    const timers = [
      setTimeout(() => setPhase(1), 800),   // Logo drawn → show name
      setTimeout(() => setPhase(2), 2000),   // Name revealed → show tagline + accreditation
      setTimeout(() => setPhase(3), 3400),   // Tagline shown → begin unmask
      setTimeout(() => {
        setPhase(4);
        sessionStorage.setItem("kle-welcome-played", "true");
      }, 4400),                               // Unmask done → remove overlay
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSkip = useCallback(() => {
    setPhase(3);
    setTimeout(() => {
      setPhase(4);
      sessionStorage.setItem("kle-welcome-played", "true");
    }, 600);
  }, []);

  if (!visible || phase === 4) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ pointerEvents: phase >= 3 ? "none" : "auto" }}
    >
      {/* Dark background with unmask animation */}
      <div
        className={`absolute inset-0 transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase >= 3 ? "scale-y-0" : "scale-y-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #0a0f1d 0%, #1a0a10 40%, #7a2538 100%)",
          transformOrigin: "top center",
        }}
      />

      {/* Animated particles / decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-[600px] h-[600px] rounded-full opacity-[0.04] border border-white/10 transition-all duration-[1600ms] ${
            phase >= 1 ? "scale-100" : "scale-50"
          }`}
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
        <div
          className={`absolute w-[900px] h-[900px] rounded-full opacity-[0.03] border border-white/5 transition-all duration-[2000ms] ${
            phase >= 1 ? "scale-100" : "scale-0"
          }`}
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Main content container */}
      <div
        className={`relative z-10 flex flex-col items-center gap-6 px-8 transition-all duration-[600ms] ${
          phase >= 3 ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        {/* College Logo with golden ring animation */}
        <div className="relative">
          {/* SVG ring draw animation */}
          <svg
            className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="#fce300"
              strokeWidth="1.5"
              strokeDasharray="352"
              strokeDashoffset={phase >= 0 ? "0" : "352"}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 1.2s ease-in-out",
              }}
            />
          </svg>

          {/* Logo image */}
          <div
            className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-[600ms] ${
              phase >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/society.jpg"
              alt="KLE Society Crest"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Shimmer sweep across logo */}
          <div
            className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-300 ${
              phase >= 1 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style={{
                animation: "shimmer 1.5s ease-in-out",
              }}
            />
          </div>
        </div>

        {/* College Identity Text */}
        <div className="text-center space-y-3 overflow-hidden">
          {/* "KLE SOCIETY'S" — masked slide up */}
          <div className="overflow-hidden">
            <p
              className={`text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold transition-all duration-[600ms] ${
                phase >= 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              KLE Society&apos;s
            </p>
          </div>

          {/* "SCP COLLEGE" — split letter stagger */}
          <div className="overflow-hidden">
            <h1
              className={`text-white font-black uppercase tracking-wider transition-all duration-[700ms] ease-out ${
                phase >= 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              SCP COLLEGE
            </h1>
          </div>

          {/* Sub-headline in gold */}
          <div className="overflow-hidden">
            <p
              className={`text-[#fce300] text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold transition-all duration-[600ms] delay-200 ${
                phase >= 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              Arts, Science & Commerce, Mahalingpur
            </p>
          </div>
        </div>

        {/* Accreditation badges */}
        <div
          className={`flex items-center gap-6 md:gap-10 transition-all duration-[600ms] ${
            phase >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border border-white/10 px-3 py-1.5 rounded-full">
            Estd 1987
          </span>
          <span className="text-[#fce300]/80 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border border-[#fce300]/20 px-3 py-1.5 rounded-full">
            NAAC &apos;A&apos; Grade — 3.10 CGPA
          </span>
        </div>

        {/* Motto / Tagline */}
        <div
          className={`transition-all duration-[700ms] delay-100 ${
            phase >= 2
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-sm"
          }`}
        >
          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.35em] font-semibold text-center">
            Truth &bull; Love &bull; Service &bull; Self-Sacrifice
          </p>
        </div>
      </div>

      {/* Skip Intro Button */}
      <button
        onClick={handleSkip}
        className={`absolute top-6 right-6 md:top-8 md:right-8 z-20 text-[#fce300]/70 hover:text-[#fce300] text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
          phase >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        Skip Intro →
      </button>

      {/* Unmask reveal curtains */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#0a0f1d] z-[60] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase >= 3 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ pointerEvents: "none" }}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0f1d] z-[60] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase >= 3 ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
