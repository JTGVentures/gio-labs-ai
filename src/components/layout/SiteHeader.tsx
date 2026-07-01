"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";

const navItems = [
  { label: "Enterprise Templates", href: "/templates?category=enterprise" },
  { label: "Design Templates", href: "/templates?category=design" },
  { label: "UI Kits", href: "/templates?category=ui-kits" },
  { label: "Free Tools", href: "/templates?category=free-tools" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Logo />
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-5 border-l pl-8 lg:flex">
          <Link href="/roadmap" className="text-sm font-semibold text-foreground transition hover:text-muted-foreground">
            Gio Labs Roadmap
          </Link>
        </div>
        <button
          className="inline-flex size-10 items-center justify-center rounded-full border bg-background lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t bg-background px-6 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {[...navItems, { label: "Gio Labs Roadmap", href: "/roadmap" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
