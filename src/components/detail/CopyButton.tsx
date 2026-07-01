"use client";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text, label = "Copy Code", disabled = false }: { text: string; label?: string; disabled?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (disabled) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
      window.alert("Copy failed. Select the code and copy manually.");
    }
  }

  return (
    <>
      <button
        onClick={copy}
        disabled={disabled}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
        {copied ? "Copied" : label}
      </button>
      {copied ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg" role="status">
          Copied to clipboard
        </div>
      ) : null}
    </>
  );
}
