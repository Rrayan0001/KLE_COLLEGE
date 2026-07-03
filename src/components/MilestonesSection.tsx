"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Milestone = {
  id: string;
  value: number;
  label: string;
  suffix?: string;
};

const milestones: Milestone[] = [
  { id: "institutions", value: 317, label: "Institutions" },
  { id: "staff", value: 18000, label: "Staff" },
  { id: "students", value: 148000, label: "Students" },
  { id: "healthcare", value: 5500, label: "Healthcare Beds" },
  { id: "decades", value: 11, label: "Decades" },
];

const formatNumber = (value: number) => value.toLocaleString("en-IN");

function useCountUp(target: number, start: boolean, delayMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const duration = 1600;

    timeout = setTimeout(() => {
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));

        if (progress < 1) {
          raf = requestAnimationFrame(step);
        }
      };

      raf = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      if (timeout) clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, target, delayMs]);

  return value;
}

function MilestoneCard({
  milestone,
  index,
  reveal,
}: {
  milestone: Milestone;
  index: number;
  reveal: boolean;
}) {
  const current = useCountUp(milestone.value, reveal, index * 140);

  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] p-6 md:p-8 text-center transition-all duration-700 ${
        reveal ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Circular icon container with soft maroon tint */}
      <div className="w-16 h-16 rounded-full bg-[#7a1c30]/5 flex items-center justify-center mx-auto mb-5">
        {index === 0 && (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-maroon" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7h20L12 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 11v9h3v-8H4zm5 0v8h3v-8H9zm5 0v8h3v-8h-3zm5 0v8h3v-8h-3z" fill="currentColor" fillOpacity={0.1} />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 21h20v2H2v-2z" />
          </svg>
        )}
        {index === 1 && (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-maroon" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0zm3 10v-2a4 4 0 00-3-3.87m0-4.87a4 4 0 010 7.75" />
          </svg>
        )}
        {index === 2 && (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#7a1c30" stroke="#7a1c30" />
            <path d="M6 12v4.5C6 18.5 8.7 20 12 20s6-1.5 6-3.5V12" fill="#7a1c30" stroke="#7a1c30" />
            <path d="M20 7v6.5" stroke="#d97706" strokeWidth={2} strokeLinecap="round" />
            <circle cx="20" cy="13.5" r="1.5" fill="#d97706" stroke="#d97706" />
          </svg>
        )}
        {index === 3 && (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-maroon" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6m-3-3h6" stroke="currentColor" strokeWidth={1.75} />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4" />
          </svg>
        )}
        {index === 4 && (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-maroon" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 2h14M5 22h14M19 2l-7 10 7 10M5 2l7 10-7 10" />
          </svg>
        )}
      </div>

      {/* Value */}
      <div className="text-3xl md:text-4xl font-extrabold text-brand-maroon leading-none font-serif">
        {formatNumber(current)}
        {milestone.suffix ?? ""}
      </div>

      {/* Label */}
      <div className="mt-3 text-[11px] md:text-[12px] uppercase tracking-widest font-black text-slate-700">
        {milestone.label}
      </div>

      {/* Separator Line */}
      <div className="w-6 h-[1.5px] bg-brand-maroon mx-auto mt-4 opacity-80" />
    </div>
  );
}

export default function MilestonesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const cards = useMemo(() => milestones, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20 bg-[#fbfbfc]"
      aria-label="KLE Society milestones"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] font-extrabold text-brand-maroon">KLE Society</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-brand-text font-serif tracking-tight">Our Milestones</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} reveal={reveal} />
          ))}
        </div>
      </div>
    </section>
  );
}
