import { ProductCard } from "@/components/marketplace/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border bg-muted p-12 text-center">
        <p className="text-lg font-bold text-foreground">No matches for these filters.</p>
        <p className="mt-2 text-muted-foreground">Clear the filters or search for dashboards, agents, prompts, or UI kits.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
