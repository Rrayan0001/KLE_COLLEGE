"use client";

import React, { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children?: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "zoom-in";
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number; // 0 to 1
};

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-in":
          return { opacity: 0 };
        case "fade-in-up":
          return { opacity: 0, transform: "translateY(24px)" };
        case "fade-in-down":
          return { opacity: 0, transform: "translateY(-24px)" };
        case "fade-in-left":
          return { opacity: 0, transform: "translateX(-24px)" };
        case "fade-in-right":
          return { opacity: 0, transform: "translateX(24px)" };
        case "zoom-in":
          return { opacity: 0, transform: "scale(0.96)" };
        default:
          return { opacity: 0, transform: "translateY(24px)" };
      }
    }

    return {
      opacity: 1,
      transform: "none",
      transition: `opacity ${duration}ms cubic-bezier(0.21, 0.6, 0.35, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.21, 0.6, 0.35, 1) ${delay}ms`,
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
