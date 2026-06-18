"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const stackLayers = [
  { name: "Agent Runtime", desc: "Multi-model orchestration engine routing tasks across Claude, GPT-5, and Ollama based on capability." },
  { name: "Memory Architecture", desc: "3-layer system (permanent → project → session) with semantic indexing and cross-entity graph traversal." },
  { name: "Scheduler", desc: "Cron-native job runner with heartbeat-driven continuous intelligence and event-triggered pipelines." },
  { name: "Integrations", desc: "Deep connectors for email, calendar, Notion, GitHub, Obsidian, Slack, and custom API endpoints." },
];

const techBadges = [
  { name: "OpenClaw", color: "#00e5ff" },
  { name: "Claude", color: "#8b5cf6" },
  { name: "OpenAI", color: "#10b981" },
  { name: "Ollama", color: "#f97316" },
  { name: "Next.js", color: "#f0f0f0" },
  { name: "Vercel", color: "#ec4899" },
];

export default function TheStack() {
  return (
    <section className="py-32 px-6 bg-brand-elevated relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Foundation</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          Built on a modern intelligence foundation.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Architecture layers */}
          <div className="space-y-5">
            {stackLayers.map((layer, i) => (
              <Card
                key={i}
                className="bg-brand-surface border-brand-border/40 hover:border-brand-accent/20 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34, 34, 34, 0.4)";
                }}
              >
                <CardContent className="p-6">
                  <h4 className="text-brand-accent text-sm font-mono uppercase tracking-wider mb-2">Layer {i + 1}: {layer.name}</h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">{layer.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Tech badges */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xs font-mono text-brand-text-secondary uppercase tracking-widest mb-8">Powered by</h4>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center h-20 rounded-lg bg-brand-surface border border-brand-border/40 hover:border-brand-accent/30 transition-all duration-300 cursor-default"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${tech.color}50`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(34, 34, 34, 0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="text-brand-text-primary font-semibold text-sm">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Architecture diagram */}
            <div className="mt-12 w-full max-w-sm">
              <svg viewBox="0 0 300 200" className="w-full h-auto opacity-40">
                {/* Central node */}
                <circle cx="150" cy="100" r="30" fill="none" stroke="#00e5ff" strokeWidth="1.5" />
                <text x="150" y="105" textAnchor="middle" fill="#f0f0f0" fontSize="12" fontFamily="monospace">GIO LABS</text>

                {/* Orbiting nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 150 + Math.cos(rad) * 90;
                  const y = 100 + Math.sin(rad) * 70;
                  return (
                    <g key={i}>
                      <line x1="150" y1="100" x2={x} y2={y} stroke="#00e5ff" strokeWidth="0.5" opacity="0.3" />
                      <circle cx={x} cy={y} r="4" fill={techBadges[i]?.color || "#00e5ff"} opacity="0.6" />
                    </g>
                  );
                })}

                {/* Outer ring */}
                <ellipse cx="150" cy="100" rx="90" ry="70" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
