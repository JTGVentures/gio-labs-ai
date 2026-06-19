"use client";

import { Card, CardContent } from "@/components/ui/card";

const verticals = [
  {
    name: "Multi-Entity Operations",
    role: "Run multiple companies from one intelligence layer — shared memory, no dropped context",
    color: "#00e5ff",
  },
  {
    name: "Deal Flow & Pipelines",
    role: "Track every lead, proposal, and opportunity automatically — nothing falls through",
    color: "#00e5a0",
  },
  {
    name: "Client Delivery",
    role: "Project memory that persists across meetings, handoffs, and team changes",
    color: "#a080ff",
  },
  {
    name: "Market Intelligence",
    role: "Continuous scanning, synthesis, and briefing — delivered before you ask",
    color: "#ffa726",
  },
  {
    name: "Communications & Inbox",
    role: "Triage, prioritize, draft, and follow up — across every channel you use",
    color: "#ff5252",
  },
  {
    name: "Reporting & Finance",
    role: "Automated P&L visibility, cashflow signals, and executive summaries on demand",
    color: "#e040fb",
  },
];

export default function EmpireGrid() {
  return (
    <section className="py-32 px-6 bg-brand-elevated relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Coverage</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          One system. Every surface.
        </h3>
        <p className="text-center text-brand-text-secondary text-lg max-w-xl mx-auto mb-16">
          Gio Labs orchestrates across every operational domain — so nothing falls through the cracks when you&apos;re moving fast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((item) => (
            <Card
              key={item.name}
              className="bg-brand-surface border-brand-border/50 hover:border-brand-accent/30 transition-all duration-300 group cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.boxShadow = `0 0 30px ${item.color}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34, 34, 34, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <CardContent className="p-8">
                <div
                  className="w-3 h-3 rounded-full mb-5 transition-colors duration-300"
                  style={{ backgroundColor: item.color, opacity: 0.7 }}
                />
                <h4 className="text-xl font-semibold mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-brand-text-secondary">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
