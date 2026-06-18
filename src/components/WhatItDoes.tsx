"use client";

import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Autonomous Agents",
    desc: "20-agent workforce, domain-specialized, cloud + local hybrid. Each agent operates with its own memory, tools, and decision boundaries.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Persistent Memory",
    desc: "3-layer memory architecture — nothing is ever forgotten. Project context, relationship history, and operational patterns compound over time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automation Pipelines",
    desc: "Scheduled intelligence that works while you sleep. From market scans to deal summaries, pipelines fire at the right time with the right context.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Orchestration",
    desc: "One mind coordinating across all entities simultaneously. Cross-company data flows, unified memory graphs, and synchronized execution.",
  },
];

export default function WhatItDoes() {
  return (
    <section className="py-32 px-6 bg-brand-bg relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--brand-border) 1px, transparent 1px), linear-gradient(90deg, var(--brand-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Capabilities</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          What It Does
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <Card
              key={i}
              className="bg-brand-surface border-brand-border/50 hover:border-brand-accent/40 transition-all duration-300 group cursor-default"
              style={{ transform: "scale(1)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 229, 255, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(34, 34, 34, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-accent mb-5 group-hover:bg-brand-accent/10 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{pillar.title}</h4>
                <p className="text-brand-text-secondary leading-relaxed">{pillar.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
