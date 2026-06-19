"use client";

import { useRef } from "react";

export default function Premise() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="premise"
      ref={ref}
      className="py-32 px-6 bg-brand-bg relative overflow-hidden section-reveal"
    >
      {/* Subtle background line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-accent/10 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
          Software runs companies. <br />
          <span className="text-brand-accent">Intelligence runs empires.</span>
        </h2>
        <div className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
          <p>
            Every founder hits the same ceiling: time. You can&apos;t be in every meeting, review every deal, and stay on top of every detail — no matter how many tools you layer on top. The bottleneck isn&apos;t your strategy. It&apos;s yourself.
          </p>
          <p>
            Gio Labs was built to remove that ceiling. It&apos;s not another SaaS dashboard or a prompt library. It&apos;s the connective layer across every business you run — a persistent intelligence that learns, remembers context across entities, and executes on your behalf.
          </p>
          <p>
            While other automations wake up when triggered, Gio Labs is always on. It watches signals across email, calendar, docs, and data feeds. When it detects an opportunity or risk, it doesn&apos;t wait for permission — it drafts the response, surfaces the analysis, and moves forward within guardrails you set once.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-brand-text-secondary">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent">20+</div>
            <div className="text-sm mt-1">Autonomous Agents</div>
          </div>
          <div className="w-[1px] bg-brand-border self-stretch" />
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent">6</div>
            <div className="text-sm mt-1">Businesses Orchestrated</div>
          </div>
          <div className="w-[1px] bg-brand-border self-stretch" />
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-accent">24/7</div>
            <div className="text-sm mt-1">Always On</div>
          </div>
        </div>
      </div>
    </section>
  );
}
