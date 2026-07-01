import { LockKeyhole } from "lucide-react";
import type { ProductTier } from "@/types/product";

export function PriceBadge({ tier }: { tier: ProductTier }) {
  if (tier === "pro") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-sm font-semibold text-foreground">
        <LockKeyhole className="size-3.5" />
        Pro
      </span>
    );
  }

  return <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-sm font-semibold text-foreground">Free</span>;
}
