"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold">
      {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
