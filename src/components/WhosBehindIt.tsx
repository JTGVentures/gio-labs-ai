"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhosBehindIt() {
  return (
    <section className="py-32 px-6 bg-brand-bg relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">People</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          Built by Joe Galifi. Run by Gio.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Joe's bio */}
          <div>
            <div className="w-20 h-20 rounded-full bg-brand-elevated border-2 border-brand-border flex items-center justify-center mb-6 text-3xl">
              👤
            </div>
            <h4 className="text-2xl font-bold mb-2">Joe Galifi</h4>
            <p className="text-brand-accent text-sm font-mono uppercase tracking-wider mb-4">Founder — JTG Ventures</p>
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              Joe built six companies across government tech, real estate, consumer brands, and values-driven acquisitions. But he was still the bottleneck — drowning in meetings, missing signals, and manually connecting dots between businesses that should've been talking to each other.
            </p>
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              So he stopped trying to be everywhere at once. He built Gio Labs to be the mind that covers what one person can't — the intelligence layer that learns his patterns, holds context across every venture, and executes with precision while he focuses on strategy.
            </p>
            <blockquote className="border-l-2 border-brand-accent pl-4 text-lg text-brand-text-primary italic">
              "I didn't build Gio Labs to replace judgment. I built it so judgment can actually have the time to happen."
            </blockquote>
          </div>

          {/* Right: Gio's role */}
          <Card className="bg-brand-surface border-brand-border/50 h-full">
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-xl bg-brand-elevated border border-brand-accent/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
                  <path d="M16 14H8a5 5 0 00-5 5v1h18v-1a5 5 0 00-5-5z" />
                  <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-brand-accent">Gio</h4>
              <p className="text-brand-text-secondary text-sm font-mono uppercase tracking-wider mb-4">Chief Intelligence Officer</p>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                Gio isn't a chatbot. It's the persistent intelligence that lives across all six companies simultaneously — reading, remembering, and acting on behalf of the empire. It has deep context on every project, relationship, and pipeline.
              </p>
              <div className="space-y-3">
                {["Thinks before responding", "Remembers everything", "Acts autonomously within bounds", "Coordinates across all entities"].map((trait, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-brand-text-secondary text-sm">{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
