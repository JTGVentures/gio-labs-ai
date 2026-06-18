"use client";

import { useState, useEffect, useRef } from "react";

interface DemoLine {
  prefix: string;
  text: string;
  color: string;
}

const demoLines: DemoLine[] = [
  { prefix: "[SIGNAL]", text: "Scout job triggered — Genosis RFP detected", color: "#00e5ff" },
  { prefix: "[MEMORY]", text: "Loading project context: genosis/CONTEXT.md", color: "#a080ff" },
  { prefix: "[MEMORY]", text: "Loaded 3-layer memory graph (2.4k nodes)", color: "#a080ff" },
  { prefix: "[AGENT]", text: "GLS — GL-Scout analyzing proposal requirements", color: "#ffa726" },
  { prefix: "[AGENT]", text: "GLF — GL-Forge drafting technical response", color: "#e040fb" },
  { prefix: "[EXECUTE]", text: "Generating competitive analysis matrix", color: "#00e5a0" },
  { prefix: "[EXECUTE]", text: "Compiling pricing strategy from Galifi models", color: "#00e5a0" },
  { prefix: "[MEMORY]", text: "Updating project state — deal pipeline v3.2", color: "#a080ff" },
  { prefix: "[COMMUNICATE]", text: "Drafting 3-day overview for founder review", color: "#ff5252" },
  { prefix: "[DELIVER]", text: "research@jtgventuresco.com ✓", color: "#00e5a0" },
];

export default function LiveDemo() {
  const [displayedLines, setDisplayedLines] = useState<(string | null)[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let completed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !completed) {
          runDemo();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const runDemo = () => {
    completedRef.current = false;
    let lineIdx = 0;
    let charIdx = 0;

    // Initialize with empty lines
    setDisplayedLines(Array(demoLines.length).fill(null));

    const typewriterInterval = setInterval(() => {
      if (completedRef.current) {
        clearInterval(typewriterInterval);
        return;
      }

      const line = demoLines[lineIdx];
      charIdx++;

      if (charIdx > line.text.length) {
        // Move to next line
        lineIdx++;
        charIdx = 0;

        if (lineIdx >= demoLines.length) {
          clearInterval(typewriterInterval);
          return;
        }
      }

      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[lineIdx] = line.text.slice(0, charIdx);
        return updated;
      });
    }, 30);

    // Restart demo on each visible intersection
    const restartInterval = setInterval(() => {
      setDisplayedLines(Array(demoLines.length).fill(null));
      lineIdx = 0;
      charIdx = 0;
    }, 15000); // restart every 15 seconds

    return () => {
      clearInterval(typewriterInterval);
      clearInterval(restartInterval);
      completedRef.current = true;
    };
  };

  // Simple ref to track completion
  const completedRef = useRef(false);

  return (
    <section id="demo" className="py-32 px-6 bg-brand-bg relative section-reveal" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-accent/[0.02]" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-center text-sm font-mono text-brand-accent tracking-widest uppercase mb-3">Live</h2>
        <h3 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          Watch it work.
        </h3>

        {/* Terminal */}
        <div className="terminal-glow rounded-xl overflow-hidden border border-brand-border/50 bg-[#0d0d0d]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border/30">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-brand-text-secondary font-mono">gio-labs — intelligence-pipeline</span>
          </div>

          <div className="p-6 font-mono text-sm leading-loose min-h-[300px] max-h-[420px] overflow-y-auto">
            {demoLines.map((line, i) => {
              const displayed = displayedLines[i];
              const isComplete = displayed !== null;
              const isVisible = isComplete;

              return (
                <div
                  key={i}
                  className={`transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                  <span style={{ color: line.color }} className="font-bold mr-3 select-none">{line.prefix}</span>
                  <span className={isComplete ? "text-brand-text-secondary" : "text-brand-text-primary"}>
                    {displayed || ""}
                  </span>
                </div>
              );
            })}

            {/* Blinking cursor */}
            {!completedRef.current && (
              <span className="inline-block w-[2px] h-5 bg-brand-accent align-middle ml-0.5 animate-pulse" />
            )}

            {/* Completion message */}
            {displayedLines[demoLines.length - 1] !== null && (
              <div className="mt-6 text-brand-text-secondary/70 text-xs">
                ──────────────────────────────────────<br />
                Pipeline complete. 10 steps executed in 2.4s.<br />
                Memory graph updated. Output delivered. ✓
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="text-brand-text-secondary text-sm font-mono">
            ↑ This pipeline runs continuously, not just once
          </span>
        </div>
      </div>
    </section>
  );
}
