"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * PageTransition
 *
 * Shows a clean maroon overlay with the college logo + arc spinner
 * on every client-side page navigation. Exits with a smooth curtain-upward unmask.
 *
 * Phases:
 *  0 = overlay fully covering screen (entering)
 *  1 = overlay visible, content fading in (logo + spinner showing)
 *  2 = unmasking: curtain sliding up off-screen
 *  3 = done: overlay removed from DOM
 */
export default function WelcomeAnimation() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(3); // start hidden on first render
  const isFirstLoad = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Clear all scheduled timers
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Run the full transition sequence
  const runTransition = () => {
    clearTimers();

    // Phase 0: appear instantly (overlay covers screen)
    setPhase(0);

    // Phase 1: small pause so browser paints the cover, then show logo+spinner
    timers.current.push(
      setTimeout(() => setPhase(1), 80)
    );

    // Phase 2: after holding, begin unmask (curtain slides up)
    timers.current.push(
      setTimeout(() => setPhase(2), 1100)
    );

    // Phase 3: unmask complete → remove from DOM (match CSS duration 700ms)
    timers.current.push(
      setTimeout(() => setPhase(3), 1850)
    );
  };

  // First visit — play immediately
  useEffect(() => {
    runTransition();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Every subsequent pathname change
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    runTransition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while overlay is active
  useEffect(() => {
    if (phase < 2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  // Fully unmounted
  if (phase === 3) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ pointerEvents: phase >= 2 ? "none" : "auto" }}
    >
      {/*
       * The main maroon panel.
       * On phase 2+, it slides UP off-screen using translateY(-100%).
       * cubic-bezier(0.76, 0, 0.24, 1) = snappy ease-in-out (like Marcellin)
       */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          backgroundColor: "#7a2538",
          transform: phase >= 2 ? "translateY(-100%)" : "translateY(0%)",
          transition: phase >= 2
            ? "transform 750ms cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
          willChange: "transform",
        }}
      >
        {/* College logo */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 400ms ease, transform 400ms ease",
          }}
          className="flex flex-col items-center gap-5"
        >
          {/* Logo image — natural proportions, no circle crop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/kle transpe.png"
            alt="KLE SCPDDS College"
            className="h-24 w-auto object-contain"
          />

          {/* College name */}
          <div className="text-center space-y-1 select-none">
            <p
              className="text-white/60 text-[10px] uppercase tracking-[0.35em] font-semibold"
            >
              KLE Society&apos;s
            </p>
            <p
              className="text-white font-black uppercase tracking-wider"
              style={{ fontSize: "clamp(1.1rem, 4vw, 1.6rem)", lineHeight: 1.1 }}
            >
              SCPDDS College
            </p>
            <p
              className="text-white/50 text-[9px] uppercase tracking-[0.25em] font-medium"
            >
              Arts, Science &amp; Commerce
            </p>
          </div>
        </div>

        {/* Arc / ring spinner — pure CSS, no JS dependency */}
        <div
          className="mt-10"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 400ms ease 200ms",
          }}
        >
          <div className="kle-spinner" />
        </div>
      </div>
    </div>
  );
}
