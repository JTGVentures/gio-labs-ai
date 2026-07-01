import type { Product } from "@/types/product";

const accentClasses: Record<Product["accent"], string> = {
  slate: "from-muted via-background to-muted",
  blue: "from-muted via-background to-secondary",
  emerald: "from-secondary via-background to-muted",
  amber: "from-muted via-secondary to-background",
  violet: "from-secondary via-muted to-background",
};

export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <div className={`rounded-2xl bg-muted p-4 ${compact ? "" : "aspect-[16/10]"}`}>
      <div className={`flex h-full min-h-44 flex-col justify-between rounded-xl border bg-gradient-to-br p-4 ${accentClasses[product.accent]}`}>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{product.category}</p>
          <h3 className="max-w-sm text-2xl font-bold leading-tight text-foreground">{product.title}</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {product.checklist.slice(0, 3).map((item) => (
            <span key={item} className="truncate rounded-lg border bg-background/80 px-2 py-1 text-xs font-medium text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
