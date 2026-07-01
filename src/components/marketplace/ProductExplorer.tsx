"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { categories } from "@/data/catalog";
import { filterCatalog, technologies } from "@/lib/catalog";
import type { Product } from "@/types/product";

type ProductExplorerProps = {
  products: Product[];
  initialQuery?: string;
  initialCategory?: string;
  mode?: "home" | "index";
};

const categoryTabs = ["All", ...categories];

export function ProductExplorer({ products, initialQuery = "", initialCategory = "all", mode = "home" }: ProductExplorerProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [technology, setTechnology] = useState("any");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(
    () =>
      filterCatalog(
        {
          query,
          category,
          technology,
          sort,
        },
        products,
      ),
    [category, products, query, sort, technology],
  );

  return (
    <section className={mode === "home" ? "mx-auto max-w-7xl px-6 pb-20" : "mx-auto max-w-7xl px-6 py-16"}>
      <div className="mb-10 grid gap-4 lg:grid-cols-[13rem_1fr_13rem] lg:items-center">
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="h-12 rounded-xl border bg-background px-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-ring/20"
          aria-label="Sort products"
        >
          <option value="popular">Popular</option>
          <option value="newest">Newest</option>
          <option value="az">A-Z</option>
          <option value="free">Free first</option>
        </select>
        <div className="flex flex-wrap justify-center rounded-2xl bg-muted p-1">
          {categoryTabs.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item === "All" ? "all" : item)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                (item === "All" && category === "all") || category === item ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <select
          value={technology}
          onChange={(event) => setTechnology(event.target.value)}
          className="h-12 rounded-xl border bg-background px-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-ring/20"
          aria-label="Filter by technology"
        >
          <option value="any">Any technology</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech.toLowerCase()}>
              {tech}
            </option>
          ))}
        </select>
      </div>
      {mode === "index" ? (
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative block max-w-xl flex-1">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search templates, kits, and tools"
              className="h-12 w-full rounded-full border bg-background pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring/20"
            />
          </label>
          <p className="text-sm font-medium text-muted-foreground">{filtered.length} products</p>
        </div>
      ) : null}
      <ProductGrid products={filtered} />
    </section>
  );
}
