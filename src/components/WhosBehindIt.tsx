"use client";

import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "Built for operators, not IT teams",
    desc: "Gio Labs is designed for the person running the business — not the person maintaining the servers. Complexity lives under the hood.",
  },
  {
    title: "Memory over repetition",
    desc: "Every interaction builds context. Gio Labs never asks you to repeat yourself — it remembers decisions, relationships, and state across every project.",
  },
  {
    title: "Agents over automations",
    desc: "Automations execute instructions. Agents exercise judgment. Gio Labs fields a workforce of domain-specialized agents that adapt, not just trigger.",
  },
  {
    title: "Your data, your infrastructure",
    desc: "No vendor lock-in on intelligence. Bring your own models, run local when you need privacy, and keep your operations entirely yours.",
  },
];

export default function WhosBehindIt() {
  return (
    <section className="py-32 px-6 bg-brand-bg relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Philosophy</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Built on a different premise.
        </h3>
        <p className="text-center text-brand-text-secondary text-lg max-w-2xl mx-auto mb-16">
          Most AI tools optimize one workflow. Gio Labs was built from the ground up to orchestrate an entire operation — because the problem was never any single task. It was the operator becoming the bottleneck across all of them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <Card key={i} className="bg-brand-surface border-brand-border/50 hover:border-brand-accent/20 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-accent/20 flex items-center justify-center mb-5">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-brand-accent transition-colors duration-300">
                  {p.title}
                </h4>
                <p className="text-brand-text-secondary leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
