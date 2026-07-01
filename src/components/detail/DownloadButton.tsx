import { Download, ExternalLink } from "lucide-react";
import type { Product } from "@/types/product";

export function DownloadButton({ product, secondary = false }: { product: Product; secondary?: boolean }) {
  const className = secondary
    ? "inline-flex h-11 items-center justify-center gap-2 rounded-full border bg-background px-5 text-sm font-bold text-foreground transition hover:bg-muted"
    : "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90";

  if (product.deliveryType === "github") {
    return (
      <a className={className} href={product.githubUrl} target="_blank" rel="noreferrer">
        <ExternalLink className="size-4" />
        View on GitHub
      </a>
    );
  }

  if (product.deliveryType === "prompt-md") {
    return (
      <a className={className} href={`/api/download/${product.slug}`} download>
        <Download className="size-4" />
        Download prompt (.md)
      </a>
    );
  }

  if (product.tier === "pro") {
    return (
      <button className={className} disabled>
        Get Pro — Coming soon
      </button>
    );
  }

  return (
    <a className={className} href={`/api/download/${product.slug}`} download>
      <Download className="size-4" />
      Download .zip
    </a>
  );
}
