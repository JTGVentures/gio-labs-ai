"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, this would hit an API endpoint
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-32 px-6 bg-brand-bg relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-accent/[0.04]" />
      </div>

      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Stop running your business. <br />
          <span className="text-brand-accent">Start commanding it.</span>
        </h2>
        <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed">
          Gio Labs is currently in private pilot. Get early access and help shape the intelligence layer that runs your empire.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-brand-accent/30 bg-brand-accent/5">
            <svg className="w-5 h-5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-brand-accent font-medium">You&apos;re on the list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-brand-surface border-brand-border text-brand-text-primary placeholder:text-brand-text-secondary h-12 text-base focus-visible:ring-brand-accent"
            />
            <Button
              type="submit"
              className="h-12 px-6 bg-brand-accent text-brand-bg font-semibold hover:bg-white transition-colors duration-300 pulse-border whitespace-nowrap"
            >
              Request access
            </Button>
          </form>
        )}

        <p className="mt-6 text-brand-text-secondary/60 text-xs font-mono">
          No spam. No public launch yet. Just early access to the intelligence layer.
        </p>
      </div>
    </section>
  );
}
