"use client";

import { useEffect, useRef } from "react";
import NodeNetwork from "./NodeNetwork";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Intersection observer handled via CSS class toggling
    // Just add 'visible' class for initial load reveal
    requestAnimationFrame(() => el.classList.add("visible"));
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-reveal bg-brand-bg"
    >
      {/* Animated node network background */}
      <div className="absolute inset-0 z-0">
        <NodeNetwork />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/20 to-brand-bg z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-white via-brand-text-primary to-brand-accent bg-clip-text text-transparent">
          The intelligence layer running an empire.
        </h1>
        <p className="text-lg sm:text-xl text-brand-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
          Gio Labs is the AI operating system behind JTG Ventures — a living network of agents, memory systems, and automation pipelines that think, remember, and execute across every business Joe Galifi builds. It&apos;s not software you open; it&apos;s intelligence that never sleeps, quietly orchestrating six companies from one mind.
        </p>
        <a
          href="#demo"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-brand-accent text-brand-bg font-semibold text-lg hover:bg-white transition-colors duration-300 pulse-border cursor-pointer"
        >
          See it think
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-accent/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
