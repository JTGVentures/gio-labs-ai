import Hero from "@/components/Hero";
import Premise from "@/components/Premise";
import WhatItDoes from "@/components/WhatItDoes";
import EmpireGrid from "@/components/EmpireGrid";
import LiveDemo from "@/components/LiveDemo";
import TheStack from "@/components/TheStack";
import WhosBehindIt from "@/components/WhosBehindIt";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Hero />
      <Premise />
      <WhatItDoes />
      <EmpireGrid />
      <LiveDemo />
      <TheStack />
      <WhosBehindIt />
      <CTASection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-border/30 text-center">
        <p className="text-brand-text-secondary/50 text-sm font-mono">
          © {new Date().getFullYear()} Gio Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
