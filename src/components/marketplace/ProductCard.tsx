import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PriceBadge } from "@/components/marketplace/PriceBadge";
import { ProductVisual } from "@/components/marketplace/ProductVisual";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/templates/${product.slug}`} className="block">
        <ProductVisual product={product} />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold leading-tight text-foreground">{product.title}</h3>
            <p className="mt-2 line-clamp-2 text-base leading-7 text-muted-foreground">{product.shortDescription}</p>
          </div>
          <PriceBadge tier={product.tier} />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {product.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-foreground opacity-0 transition group-hover:opacity-100">
            Explore <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
