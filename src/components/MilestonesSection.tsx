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
      className={`rounded-2xl border border-white/50 bg-white/8 backdrop-blur-sm p-5 md:p-6 text-center transition-all duration-700 ${
        reveal ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-2" aria-hidden="true">
        {index === 0 && "🏛"}
        {index === 1 && "👥"}
        {index === 2 && "🎓"}
        {index === 3 && "🏥"}
        {index === 4 && "⏳"}
      </div>
      <div className="text-2xl md:text-4xl font-black text-white leading-none font-display">
        {formatNumber(current)}
        {milestone.suffix ?? ""}
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase tracking-wider font-bold text-white/90">
        {milestone.label}
      </div>
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
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const cards = useMemo(() => milestones, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-24"
      aria-label="KLE Society milestones"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/general/col2.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/55 via-slate-900/45 to-brand-maroon/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] font-extrabold text-white/80">KLE Society</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-white font-display tracking-tight">Our Milestones</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {cards.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} reveal={reveal} />
          ))}
        </div>
      </div>
    </section>
  );
}
