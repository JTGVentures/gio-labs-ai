"use client";

import { Card, CardContent } from "@/components/ui/card";

const companies = [
  { name: "JTG Ventures", role: "Operating company — cash engine", color: "#00e5ff" },
  { name: "Genosis Inc", role: "Gov tech — AI for public sector", color: "#00e5a0" },
  { name: "Galifi Estates", role: "Real estate development", color: "#a080ff" },
  { name: "Avanti Values", role: "Values-driven acquisitions", color: "#ffa726" },
  { name: "Cardhouse", role: "Brand build — consumer play", color: "#ff5252" },
  { name: "TomDe Studio", role: "Creative studio — production", color: "#e040fb" },
];

export default function EmpireGrid() {
  return (
    <section className="py-32 px-6 bg-brand-elevated relative">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Infrastructure</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          One system. Six businesses.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company) => (
            <Card
              key={company.name}
              className="bg-brand-surface border-brand-border/50 hover:border-brand-accent/30 transition-all duration-300 group cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${company.color}40`;
                e.currentTarget.style.boxShadow = `0 0 30px ${company.color}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34, 34, 34, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <CardContent className="p-8">
                <div
                  className="w-3 h-3 rounded-full mb-5 transition-colors duration-300"
                  style={{ backgroundColor: company.color, opacity: 0.7 }}
                />
                <h4 className="text-xl font-semibold mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {company.name}
                </h4>
                <p className="text-brand-text-secondary">{company.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
